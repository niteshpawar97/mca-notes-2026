## Segmentation Concept

Paging memory ko fixed-size blocks me todta hai jo programmer ki logical view se match nahi karta. **Segmentation** memory ko programmer ke perspective se **variable-size logical units** me divide karta hai — jaise Code segment, Data segment, Stack segment, Heap segment.

```
Program's Logical View:
┌───────────┐
│    Code     │  Segment 0
├───────────┤
│    Data     │  Segment 1
├───────────┤
│   Stack     │  Segment 2
├───────────┤
│   Heap      │  Segment 3
└───────────┘
```

> Socho Aise — Paging kitaab ko **fixed number of pages** me todne jaisa hai (chapter ka matlab nahi dekhta), jabki Segmentation kitaab ko **chapters** (logical meaningful units) me todne jaisa hai — har chapter ka apna alag size ho sakta hai.

---

## Segment Table

Har process ka apna **Segment Table** hota hai jisme har segment ka **base address** aur **limit (length)** stored hota hai.

```
Segment Table (Process P):
┌────────────┬────────┬────────┐
│ Segment #    │  Base   │ Limit   │
├────────────┼────────┼────────┤
│ 0 (Code)     │  1000   │  600    │
│ 1 (Data)     │  2000   │  400    │
│ 2 (Stack)    │  3500   │  1000   │
└────────────┴────────┴────────┘
```

### Logical to Physical Address Translation

```
Logical Address = (Segment Number, Offset)

  IF offset < limit:
       Physical Address = Base + Offset
  ELSE:
       Trap → "addressing error" (out of bound access)
```

> Example — Segment 1 (Data) ka Base=2000, Limit=400. Logical address (Segment=1, Offset=150) diya hai. Offset (150) < Limit (400), toh valid hai. Physical Address = 2000 + 150 = **2150**. Agar offset 450 hota (>400), toh trap/error aata.

---

## Segmentation vs Paging

| Basis | Paging | Segmentation |
|-------|--------|----------------|
| **Division Basis** | Fixed-size blocks (physical view) | Variable-size logical units (programmer's view) |
| **Fragmentation** | Internal fragmentation | External fragmentation |
| **Table Used** | Page Table (page → frame) | Segment Table (segment → base+limit) |
| **Address Format** | (Page Number, Offset) | (Segment Number, Offset) |
| **Visibility to Programmer** | Transparent — programmer ko pata nahi chalta | Programmer segments define karta hai (logically meaningful) |
| **Protection** | Page-level protection possible | Segment-level protection natural hai (code read-only, stack read-write) |
| **Sharing** | Page sharing possible but less intuitive | Code segment sharing easy aur natural |

> Yaad Rakho — Paging = physical/hardware-oriented division (fixed size), Segmentation = logical/programmer-oriented division (variable size). Yeh sabse important comparison point hai jo har exam me poocha jaata hai.

---

## Segmented Paging (Paging Combined with Segmentation)

Segmentation ka logical advantage aur Paging ka "no external fragmentation" advantage — dono combine kar dete hain:

- Memory ko segments me divide karte hain (logical view maintain hoti hai).
- Phir **har segment ko pages me further divide karte hain** — isse external fragmentation bhi khatam ho jaati hai.

```
Logical Address = (Segment Number, Page Number, Offset)

         Segment Table              Page Table (per segment)
      ┌───────────────┐          ┌────────────┐
      │ Seg# → Page Table │ ────► │ Page# → Frame │
      └───────────────┘          └────────────┘
```

Address translation do steps me hoti hai: pehle Segment Table se us segment ka Page Table location milta hai, phir us Page Table se actual frame milta hai.

---

## Paged Segmentation vs Segmented Paging

Dono terms similar concept describe karte hain — hardware implementation approach ke hisaab se naam alag ho sakta hai:

| Term | Approach |
|------|----------|
| **Segmented Paging** | Pehle segmentation, phir har segment ko pages me divide karo |
| **Paged Segmentation** | Segment table khud pages me store hoti hai (large segment tables ko manage karne ke liye) |

> Tip — Exam me "Segmentation vs Paging" comparison table zaroor likho — yeh 5-mark ka guaranteed question hai. Diagram (segment table + page table dono) banane se extra marks milte hain.

> Warning — Segmentation me protection aur sharing **natural aur easy** hota hai (jaise code segment ko multiple processes read-only share kar sakte hain) — lekin external fragmentation ka risk rehta hai kyunki segments variable-size hote hain aur contiguous memory chahiye hoti hai (jab tak paging ke saath combine na karo).
