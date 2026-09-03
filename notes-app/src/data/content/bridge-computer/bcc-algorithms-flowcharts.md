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

> Yaad Rakho — Algorithm plain English/pseudocode me likha jaata hai — kisi specific programming language ki syntax follow karne ki zaroorat nahi. Ye language-independent hota hai.

---

### Example 1 — Do Numbers Ka Sum Nikalna

**Algorithm:**

```
Step 1: Start
Step 2: Read number A
Step 3: Read number B
Step 4: Sum = A + B
Step 5: Print Sum
Step 6: Stop
```

**Flowchart:**

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

---

### Example 2 — Teen Numbers Me Se Sabse Bada (Largest) Nikalna

Ye ek bahut common exam question hai — nested decision (diamond ke andar diamond) samajhne ke liye best example.

**Algorithm:**

```
Step 1: Start
Step 2: Read three numbers A, B, C
Step 3: If A > B then
Step 4:     If A > C then
                Largest = A
            Else
                Largest = C
        Else
Step 5:     If B > C then
                Largest = B
            Else
                Largest = C
Step 6: Print Largest
Step 7: Stop
```

**Flowchart flow (text me describe kiya gaya, kyunki flowchart visual hota hai):**

1. **Start** oval se shuru karo.
2. Parallelogram box me **Read A, B, C** input lo.
3. Pehla Diamond (decision box): **"Is A > B?"**
   - Agar **Yes**, doosre Diamond par jao: **"Is A > C?"**
     - Agar **Yes** → Rectangle box: `Largest = A`
     - Agar **No** → Rectangle box: `Largest = C`
   - Agar **No** (matlab B >= A), teesre Diamond par jao: **"Is B > C?"**
     - Agar **Yes** → Rectangle box: `Largest = B`
     - Agar **No** → Rectangle box: `Largest = C`
4. Dono branches (chahe koi bhi path liya ho) ek jagah **merge** hoke aate hain
5. Parallelogram box me **Print Largest**
6. **Stop** oval se khatam karo.

> Example — Agar A=10, B=25, C=15 diye jaayein: A>B? (10>25) → **No** → B>C? (25>15) → **Yes** → Largest = B = 25. Answer: **25**.

> Socho Aise — Ye "largest of 3" problem asal me do chhote "largest of 2" comparisons ka combination hai — pehle A aur B compare karo, phir jo bada nikla usse C se compare karo. Complex lagne wale problems ko chhote steps me tod dena hi algorithm design ka core skill hai.

---

### Example 3 — Number Even Hai Ya Odd, Check Karna

**Algorithm:**

```
Step 1: Start
Step 2: Read number N
Step 3: Remainder = N % 2   (N ko 2 se divide karke remainder nikalo)
Step 4: If Remainder == 0 then
            Print "Even"
        Else
            Print "Odd"
Step 5: Stop
```

**Flowchart flow (text description):**

1. **Start** oval se shuru.
2. Parallelogram box me **Read N**.
3. Rectangle (process) box me calculate karo: `Remainder = N % 2`.
4. Diamond (decision) box: **"Is Remainder == 0?"**
   - Agar **Yes** → ek side se jao → Parallelogram box: **Print "Even"**
   - Agar **No** → doosri side se jao → Parallelogram box: **Print "Odd"**
5. Dono paths merge hokar ek common point par aate hain.
6. **Stop** oval se khatam.

> Example — N = 7 diya gaya: Remainder = 7 % 2 = 1. Since Remainder ≠ 0, isliye output: **"Odd"**. Agar N = 8 hota, Remainder = 0, output: **"Even"**.

> Yaad Rakho — Modulus operator (`%`) hi even/odd check karne ka sabse simple tarika hai — kisi bhi number ko 2 se divide karke agar remainder 0 aaye toh Even, warna Odd.

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

---

### Advantages Aur Limitations Of Flowcharts

**Advantages:**

| Advantage | Explanation |
|-----------|-------------|
| Easy to understand | Visual hone se code padhe bina bhi logic samajh aata hai |
| Communication tool | Non-programmers (jaise client/manager) ko bhi logic samjhaya ja sakta hai |
| Debugging me help | Errors/logical gaps flowchart me jaldi dikh jaate hain |
| Documentation | Baad me program ko samajhna/maintain karna aasan ho jaata hai |

**Limitations:**

| Limitation | Explanation |
|------------|-------------|
| Complex programs ke liye mushkil | Bade/complex logic ke liye flowchart bahut bada aur confusing ban jaata hai |
| Time-consuming | Banana aur baad me modify karna time leta hai |
| Standard tools chahiye | Sahi symbols/software ke bina banana mushkil |
| Changes karna painful | Algorithm change hone par poora flowchart phir se banana pad sakta hai |

> Tip — Exam me flowchart banana ho toh **hamesha Start/End oval se shuru aur khatam karo**, aur decision (diamond) se nikalne wale dono paths (Yes/No) clearly label karo — examiners isi par marks kaatte hain agar missing ho. Agar visual flowchart draw nahi kar sakte (text-based answer sheet), toh iss note jaisa **step-by-step box description** likho — examiner ko poora flow samajh aana chahiye.
