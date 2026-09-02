## Algorithms, Flowcharts Aur Problem Solving

### Algorithm Kya Hai?

**Algorithm** kisi problem ko solve karne ke steps ka ek clear, finite aur step-by-step sequence hai — bilkul ek recipe jaisa.

> Socho Aise — Algorithm ek "recipe card" jaisa hai — chai banane ke steps: paani ubaalo → chai patti daalo → doodh daalo → cheeni daalo → chaan lo. Har step clear aur order me hai — yehi algorithm hai.

**Algorithm Ki Properties:**

| Property | Matlab |
|----------|--------|
| **Finiteness** | Steps limited hone chahiye, khatam zaroor hone chahiye |
| **Definiteness** | Har step clear aur bina confusion ke hona chahiye |
| **Input** | Zero ya zyada inputs le sakta hai |
| **Output** | Kam se kam ek output zaroor dena chahiye |
| **Effectiveness** | Har step practically perform ho sakna chahiye |

---

### Algorithm Likhne Ka Example

**Problem:** Do numbers ka sum nikalna.

```
Step 1: Start
Step 2: Read number A
Step 3: Read number B
Step 4: Sum = A + B
Step 5: Print Sum
Step 6: Stop
```

> Yaad Rakho — Algorithm plain English/pseudocode me likha jaata hai — kisi specific programming language ki syntax follow karne ki zaroorat nahi. Ye language-independent hota hai.

---

### Flowchart Kya Hai?

**Flowchart** algorithm ka **visual/graphical representation** hai — symbols aur arrows use karke.

### Flowchart Symbols

| Symbol | Shape | Matlab |
|--------|-------|--------|
| **Oval** | Start/End | Program ki shuruaat ya ant |
| **Parallelogram** | Input/Output | Data lena ya dikhana |
| **Rectangle** | Process | Koi calculation/operation |
| **Diamond** | Decision | Condition check (Yes/No) |
| **Arrow** | Flow Line | Steps ka order/direction dikhata hai |

```
     ┌─────────┐
     │  Start  │
     └────┬────┘
          ↓
   ╱ Read A, B ╲
   ╲___________╱
          ↓
   ┌─────────────┐
   │ Sum = A + B │
   └──────┬──────┘
          ↓
   ╱ Print Sum ╲
   ╲___________╱
          ↓
     ┌─────────┐
     │  Stop   │
     └─────────┘
```

> Example — Agar ek number even hai ya odd check karna ho, toh Diamond symbol use hoga: "Number % 2 == 0?" — Yes toh "Even" print karo, No toh "Odd" print karo.

---

### Problem Solving Aur Algorithm Design — Steps

```
1. Problem ko samjho (kya chahiye, kya diya hai)
2. Algorithm design karo (steps likho)
3. Flowchart banao (visual representation)
4. Code likho (algorithm ko programming language me convert karo)
5. Test karo (different inputs se check karo)
```

> Warning — Flowchart banane se pehle algorithm clear hona chahiye. Direct flowchart banane ki koshish karoge bina soche-samjhe, toh confusion ho jaata hai — pehle steps likho, phir symbols me convert karo.

> Tip — Exam me flowchart banana ho toh **hamesha Start/End oval se shuru aur khatam karo**, aur decision (diamond) se nikalne wale dono paths (Yes/No) clearly label karo — examiners isi par marks kaatte hain agar missing ho.
