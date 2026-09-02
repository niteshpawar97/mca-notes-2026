## Memory Management Without Swapping or Paging

Sabse simple approach — **fixed partitioning**: memory ko fixed-size partitions me pehle se divide kar dete hain, har partition me ek process fit hota hai.

```
┌─────────────┐
│  Partition 1  │ ← Process A
├─────────────┤
│  Partition 2  │ ← Process B
├─────────────┤
│  Partition 3  │ ← (empty, agla process fit hoga)
└─────────────┘
```

Problem — **Internal Fragmentation**: agar process partition se chhota hai, bacha hua space waste hota hai.

**Variable Partitioning** — partitions process ke size ke hisaab se dynamically banaye jaate hain. Isse internal fragmentation kam hota hai, lekin **External Fragmentation** ho jaata hai (chhote-chhote free blocks bikhar jaate hain jo kisi bade process ke kaam nahi aate).

> Yaad Rakho — **Internal Fragmentation** = partition ke andar waste space. **External Fragmentation** = partitions ke beech bikhre chhote free blocks jo total milakar toh kaafi hain but contiguous nahi hain.

---

## Swapping

**Swapping** — jab memory bhar jaati hai, ek waiting/inactive process ko **disk (swap space)** me temporarily move kar dete hain, aur uski jagah kisi doosre ready process ko memory me laate hain. Baad me swapped-out process wapas memory me laaya ja sakta hai (**swap-in**).

```
Memory                          Disk (Swap Space)
┌────────┐   swap-out          ┌──────────┐
│ Process │  ───────────────►   │ Process    │
│    A     │                       │    A        │
└────────┘                       └──────────┘
┌────────┐   swap-in ◄──────────┐
│ Process │                          
│    B     │
└────────┘
```

> Socho Aise — Swapping ek "hostel room sharing" jaisa hai — jab room full ho jaaye, ek student ko temporarily bahar (disk) bhej dete hain, aur jab uski zaroorat ho wapas bula lete hain.

- Swapping poore process ko move karta hai — **isliye slow** hota hai badi processes ke liye.
- Modern OS me swapping paging ke saath combine hoti hai (poora process nahi, sirf zaroori pages swap hoti hain).

---

## Paging Concept

**Paging** ek memory management scheme hai jisme:
- Logical (virtual) memory ko fixed-size blocks me divide karte hain — inhe **Pages** kehte hain.
- Physical memory ko bhi same fixed-size blocks me divide karte hain — inhe **Frames** kehte hain.
- Har page kisi bhi free frame me store ho sakta hai — **contiguous allocation ki zaroorat nahi**, isliye external fragmentation khatam ho jaati hai!

```
Logical Memory (Process)         Physical Memory (RAM)
┌──────────┐                    ┌──────────┐
│  Page 0    │ ──────────────►  │  Frame 3   │
├──────────┤                    ├──────────┤
│  Page 1    │ ──────────────►  │  Frame 1   │
├──────────┤                    ├──────────┤
│  Page 2    │ ──────────────►  │  Frame 5   │
└──────────┘                    └──────────┘
```

### Page Table

Har process ka apna **Page Table** hota hai jo batata hai kaunsa logical page kaunse physical frame me hai.

```
Page Table (Process P):
┌───────┬────────┐
│ Page # │ Frame # │
├───────┼────────┤
│   0    │    3    │
│   1    │    1    │
│   2    │    5    │
└───────┴────────┘
```

### Logical to Physical Address Translation

```
Logical Address = (Page Number, Offset)

┌────────────┬──────────┐
│ Page Number │  Offset   │
└────────────┴──────────┘
       │            │
       ▼            │
  Page Table       │
       │            │
       ▼            ▼
┌────────────┬──────────┐
│ Frame Number│  Offset   │  ──►  Physical Address
└────────────┴──────────┘
```

CPU jo logical address generate karta hai usme **Page Number (p)** aur **Offset (d)** hota hai. MMU (Memory Management Unit) page table dekh kar Page Number ko Frame Number me convert karta hai, offset waisa hi rehta hai (kyunki page aur frame same size ke hote hain).

> Example — Page size = 1KB (1024 bytes). Logical address 3000 diya hai. Page number = 3000/1024 = 2 (integer division), offset = 3000 − 2048 = 952. Agar page table me Page 2 → Frame 5 mapping hai, toh physical address = 5×1024 + 952 = **6072**.

> Tip — Address translation numerical bahut common hai. Formula yaad rakho: **Page Number = Logical Address / Page Size**, **Offset = Logical Address % Page Size**, aur **Physical Address = Frame Number × Page Size + Offset**.

---

## Paging Ke Fayde Aur Nuksan

| Advantage | Disadvantage |
|-----------|----------------|
| External fragmentation khatam | Internal fragmentation ho sakti hai (last page fully use na ho) |
| Non-contiguous allocation possible | Page table extra memory leta hai |
| Memory protection easy (per-page permission bits) | Address translation ka overhead (extra memory access) |
| Virtual memory implement karna easy | TLB miss hone par performance drop |

> Warning — Paging external fragmentation solve karta hai lekin **internal fragmentation completely khatam nahi karta** — agar process ka last page fully utilize nahi hota, wo space waste jaata hai. Yeh common confusion point hai exam me.
