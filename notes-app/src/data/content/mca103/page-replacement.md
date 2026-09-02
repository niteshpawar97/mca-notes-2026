## Page Replacement Kyun Zaroori Hai?

Jab CPU ko koi page chahiye jo physical memory (RAM) me currently nahi hai, ek **Page Fault** hota hai. Agar saare frames already bhare hain, OS ko decide karna padta hai kaunsa existing page **replace** karke naya page laayen — yeh decision **Page Replacement Algorithm** karta hai.

```
Page Fault Handling:
1. CPU ko page chahiye → not in memory → Page Fault trap
2. Free frame hai? → Haan: page load kar do
                    → Nahi: Page Replacement Algorithm se
                            victim page choose karo, use disk
                            par likho (agar modified hai),
                            phir naya page us frame me load karo
3. Page table update karo, instruction restart karo
```

> Socho Aise — Page replacement ek "chhoti almari" (limited RAM frames) me kapde (pages) rakhne jaisa hai — jab almari full ho jaaye aur naya kapda rakhna ho, decide karna padta hai kaunsa purana kapda nikalein.

---

## FIFO (First In First Out)

Sabse purana loaded page replace hota hai — jo page sabse pehle memory me aaya tha, wahi sabse pehle nikaala jaayega. Simple lekin hamesha optimal nahi.

> Example — Reference String: `1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5` with **3 frames**

| Ref | Frames (FIFO order) | Fault? |
|-----|----------------------|--------|
| 1 | 1 | Fault |
| 2 | 1, 2 | Fault |
| 3 | 1, 2, 3 | Fault |
| 4 | 2, 3, 4 (1 removed) | Fault |
| 1 | 3, 4, 1 (2 removed) | Fault |
| 2 | 4, 1, 2 (3 removed) | Fault |
| 5 | 1, 2, 5 (4 removed) | Fault |
| 1 | 1, 2, 5 | Hit |
| 2 | 1, 2, 5 | Hit |
| 3 | 2, 5, 3 (1 removed) | Fault |
| 4 | 5, 3, 4 (2 removed) | Fault |
| 5 | 5, 3, 4 | Hit |

Total Page Faults = **9** (with 3 frames)

### Belady's Anomaly

Normally sochte hain zyada frames = kam page faults. Lekin FIFO me kabhi-kabhi **frames badhane par bhi page faults badh jaate hain** — isko **Belady's Anomaly** kehte hain.

```
Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

With 3 frames → 9 page faults
With 4 frames → 10 page faults  (anomaly! zyada frames, zyada faults)
```

> Warning — Belady's Anomaly sirf **FIFO** me hoti hai (kuch specific reference strings ke liye). LRU jaisi **stack-based algorithms** me yeh anomaly kabhi nahi hoti — yeh important distinction exam me poocha jaata hai.

---

## Optimal Page Replacement (OPT/MIN)

Us page ko replace karo jo **future me sabse door use hoga** (ya kabhi use nahi hoga). Yeh theoretically best hai (minimum possible page faults deta hai) lekin practically implement nahi ho sakta kyunki future reference pehle se pata nahi hota — sirf **benchmark/comparison** ke liye use hota hai.

> Example — Same string `1,2,3,4,1,2,5,1,2,3,4,5`, 3 frames: jab 5 aata hai aur frame full hai (1,2,3 ya 2,3,4), wo page replace hoga jiska next use sabse door hai.

---

## LRU (Least Recently Used)

Wo page replace karo jo **sabse zyada der pehle use hua tha** (past behavior dekh kar future predict karte hain — assumption: jo recently use nahi hua, wo aage bhi use nahi hoga).

```
Reference: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5   (3 frames)

At ref 5 (frames = 1,2,4 after some faults):
  '4' ka last use sabse purana hai → '4' replace hoga
```

LRU **Belady's Anomaly se safe** hai (stack algorithm) lekin implement karna costly hai — har access ka timestamp ya counter maintain karna padta hai (hardware support chahiye — counters ya stack).

---

## Most Recently Used (MRU)

LRU ka opposite — wo page replace karo jo **sabse recently use hua tha**. Kam common hai, kuch specific access patterns (jaise database scanning) me useful hota hai jahan recently used page ki dobara zaroorat jaldi nahi padegi.

---

## Clock (Second-Chance) Algorithm

FIFO ka improved version — har page ke saath ek **reference bit** rakhte hain. Pages ko circular list (clock) me rakha jaata hai:

```
        ┌───┐
        │ P1 │ R=1
    ┌──►└───┘◄──┐
    │            │
  ┌───┐        ┌───┐
  │ P4 │ R=0    │ P2 │ R=0
  └───┘        └───┘
    │            │
    └──►┌───┐◄──┘
        │ P3 │ R=1
        └───┘
        (Clock hand yahan hai)
```

- Clock hand ek page par point karta hai. Agar uska reference bit = 1, toh use 0 kar do aur **second chance** do (hand aage badha do).
- Agar reference bit = 0, toh usi page ko **replace** kar do.
- Isse recently-used pages bach jaate hain, aur algorithm FIFO se better perform karta hai bina LRU jitna overhead liye.

> Yaad Rakho — Clock algorithm ko **"Second Chance Algorithm"** bhi kehte hain — yeh FIFO aur LRU ke beech ka practical trade-off hai (kam overhead, achha performance).

---

## Comparison Table

| Algorithm | Strategy | Belady's Anomaly? | Implementation Cost | Practical? |
|-----------|----------|----------------------|------------------------|------------|
| **FIFO** | Sabse purana page hatao | Haan | Low | Simple but suboptimal |
| **Optimal** | Future me sabse door use hone wala | Nahi | N/A (future pata nahi hota) | Sirf benchmark ke liye |
| **LRU** | Sabse purani baar use hua page hatao | Nahi | High (counter/stack chahiye) | Achha but costly |
| **MRU** | Sabse recent use wala hatao | — | Medium | Specific patterns ke liye |
| **Clock** | Reference bit + circular scan | Kam | Low-Medium | Widely used (practical LRU approx) |

> Tip — Numericals me hamesha ek table banao jisme har reference ke baad frame ka content dikhao, aur "Fault"/"Hit" mark karo. End me total faults count karke likho — yeh step-by-step approach full marks deta hai.
