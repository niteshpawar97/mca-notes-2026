## Algorithms Aur Flowcharts — Bilkul Shuru Se, Step-by-Step

### Ye Topic Kyu Padhna Zaroori Hai?

Is chapter ka core idea simple hai — koi bhi problem solve karne se pehle uske steps clearly likhna aana chahiye. Ye skill sirf computer ke liye nahi, life me bhi kaam aati hai. Chalo bilkul shuru se samajhte hain.

---

### Algorithm Kya Hota Hai — Pehle Ek Roz-marra Ka Example

Formal definition se pehle ek non-computer example dekhte hain.

Socho tumhe kisi ko room ka bulb jalana sikhana hai jisne kabhi switch nahi dekha. Tum kya bologe?

```
Step 1: Switch board ke paas jao
Step 2: Bulb wale switch ko dhoondo
Step 3: Switch ko upar (ON position) dabao
Step 4: Check karo bulb jal gaya ya nahi
```

Dekho — ye 4 steps hain, clear order me hain, aur ek fixed result (bulb jalna) tak pahunchate hain. Yehi **Algorithm** hai — chahe wo bulb jalane ke liye ho ya computer program ke liye.

> Yaad Rakho — **Algorithm** kisi problem ko solve karne ke steps ka ek clear, finite aur step-by-step sequence hai — bilkul upar wale bulb wale steps jaisa.

> Socho Aise — Algorithm ek "recipe card" jaisa hai — chai banane ke steps: paani ubaalo, chai patti daalo, doodh daalo, cheeni daalo, chaan lo. Har step clear aur order me hai — yehi algorithm hai. Chahe bulb jalana ho, chai banani ho, ya numbers add karne hon — sab jagah algorithm ka concept same hai: **clear steps, sahi order me**.

> Question — Ghar se college jaane ke apne roz ke steps ko ek chhoti algorithm ki tarah likho (4-5 steps me).

**Solution** — Ek possible answer: Step 1: Taiyar ho jao. Step 2: Bag uthao. Step 3: Ghar se nikal ke bus/bike lo. Step 4: College pahuncho. Yahan bhi dekho — clear steps hain, fixed order hai, aur ek result (college pahunchna) tak pahunchte hain. Koi bhi similar clear, order-wise list sahi answer hai.

---

### Algorithm Ki Properties — Har Achhe Algorithm Me Kya Hona Chahiye

Har algorithm (chahe simple ho ya complex) me ye 5 cheezein honi zaroori hain:

| Property | Matlab |
|----------|--------|
| **Finiteness** | Steps limited hone chahiye, kahin na kahin khatam zaroor hone chahiye (hamesha ke liye chalte nahi reh sakte) |
| **Definiteness** | Har step clear aur bina confusion ke hona chahiye — do log padhein toh dono ko same samajh aaye |
| **Input** | Zero ya zyada inputs le sakta hai (kuch algorithm bina input ke bhi chal sakte hain) |
| **Output** | Kam se kam ek output zaroor dena chahiye, warna algorithm ka fayda kya |
| **Effectiveness** | Har step practically perform ho sakna chahiye — koi imaginary/impossible step nahi hona chahiye |

> Socho Aise — Upar wale bulb example ko in 5 properties se check karo: Steps limited the (Finiteness), har step clear tha (Definiteness), koi input nahi tha (Input = zero, phir bhi valid), result bulb ka jalna tha (Output), aur har step actually kiya ja sakta tha (Effectiveness). Isiliye ye ek valid algorithm hai.

---

### Flowchart Kya Hota Hai?

Algorithm ko hum plain words me likhte hain (jaise upar). Lekin kabhi-kabhi steps ko **picture (diagram)** ki tarah dikhana zyada clear hota hai — especially jab decisions (agar ye ho toh wo karo) involve hon.

**Flowchart** algorithm ka **visual/graphical representation** hai — kuch fixed shapes (symbols) aur arrows use karke banaya jaata hai.

> Yaad Rakho — Algorithm plain English/pseudocode me likha jaata hai — kisi specific programming language ki syntax follow karne ki zaroorat nahi. Ye language-independent hota hai. Flowchart usi algorithm ko **shapes** me draw kar deta hai.

---

### Flowchart Symbols — Ek-Ek Karke Samjho

Flowchart me har shape ka apna fixed matlab hota hai. Inhe use karne se pehle ek-ek karke samajh lete hain — kyunki exam me symbol galat use karna marks katwa deta hai.

**1. Oval (gol-mota shape)** — Sirf do jagah use hota hai: program ki **shuruaat (Start)** aur **ant (End/Stop)** dikhane ke liye.

```
+---------+
|  Start  |
+---------+
```

**2. Parallelogram (tirchi box)** — Data **lene (Input)** ya **dikhane (Output)** ke liye use hota hai. Isko tirchi shape isliye di gayi hai taaki ye Rectangle (process) se turant alag dikhe.

```
 / Read A, B /
/____________/
```

**3. Rectangle (seedhi box)** — Koi bhi **calculation ya operation** (jaise `Sum = A + B`) dikhane ke liye use hota hai — matlab jahan kuch "process" ho raha hai.

```
+-------------+
| Sum = A + B |
+-------------+
```

**4. Diamond (heera shape)** — Jahan bhi **decision/condition** check karni ho (Yes/No wala sawaal), wahan Diamond use hota hai. Isme se hamesha do raaste (Yes aur No) nikalte hain.

```
   / Is A > B? \
   \___________/
```

**5. Arrow (Flow Line)** — Ek shape se doosri shape tak jaane ka **direction** dikhata hai — matlab flowchart me "aage kya hoga" arrow hi batata hai.

Ab sab symbols ek table me ek saath dekh lo:

| Symbol | Shape | Matlab |
|--------|-------|--------|
| **Oval** | Start/End | Program ki shuruaat ya ant |
| **Parallelogram** | Input/Output | Data lena ya dikhana |
| **Rectangle** | Process | Koi calculation/operation |
| **Diamond** | Decision | Condition check (Yes/No) |
| **Arrow** | Flow Line | Steps ka order/direction dikhata hai |

> Tip — Symbols yaad rakhne ka trick: **Oval = race ka start/finish line, Parallelogram = tirchi khidki jisse data andar-bahar jaata hai, Rectangle = kaam karne ki table, Diamond = raaste ka fork jahan decide karna padta hai kis taraf jaana hai.**

> Question — Agar flowchart me "Enter your marks" likhna ho, toh kaunsa symbol use karoge?

**Solution** — **Parallelogram**, kyunki marks enter karna ek Input operation hai, aur Input/Output ke liye hamesha Parallelogram use hota hai.

---

### Example 1 — Do Numbers Ka Sum Nikalna (Symbols Ko Jodkar Poora Flowchart Banao)

Ab jab har symbol individually pata hai, chalo unhe jodkar ek poora flowchart banate hain.

**Algorithm pehle likho:**

```
Step 1: Start
Step 2: Read number A
Step 3: Read number B
Step 4: Sum = A + B
Step 5: Print Sum
Step 6: Stop
```

**Ab isi ko symbols me convert karo, ek-ek step:**

- Step 1 (Start) → **Oval**
- Step 2, 3 (Read A, B) → **Parallelogram** (Input)
- Step 4 (Sum = A+B) → **Rectangle** (Process)
- Step 5 (Print Sum) → **Parallelogram** (Output)
- Step 6 (Stop) → **Oval**

**Poora Flowchart:**

```
     +---------+
     |  Start  |
     +----+----+
          |
   / Read A, B /
  /____________/
          |
   +-------------+
   | Sum = A + B |
   +------+------+
          |
   / Print Sum /
  /____________/
          |
     +---------+
     |  Stop   |
     +---------+
```

Dekho — ye bilkul wahi 6 steps hain, bas ab har step apni shape me dikh raha hai, aur arrows batate hain ki kis order me karna hai.

> Question — A = 5 aur B = 8 diya gaya hai. Upar wale flowchart ko follow karke final output kya aayega?

**Solution** — Start se shuru karo, phir Read A=5, B=8, phir Sum = A+B = 5+8 = 13, phir Print Sum — yaani output **13** — aur aakhir me Stop.

---

### Example 2 — Teen Numbers Me Se Sabse Bada (Largest) Nikalna

Ye ek bahut common exam question hai — **nested decision** (diamond ke andar diamond) samajhne ke liye best example.

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

**Ye flow kaise chalta hai, step-by-step samjho:**

1. **Start** oval se shuru karo.
2. Parallelogram box me **Read A, B, C** input lo.
3. Pehla Diamond (decision box): **"Is A > B?"**
   - Agar **Yes**, doosre Diamond par jao: **"Is A > C?"**
     - Agar **Yes** → Rectangle box: `Largest = A`
     - Agar **No** → Rectangle box: `Largest = C`
   - Agar **No** (matlab B >= A), teesre Diamond par jao: **"Is B > C?"**
     - Agar **Yes** → Rectangle box: `Largest = B`
     - Agar **No** → Rectangle box: `Largest = C`
4. Dono branches (chahe koi bhi path liya ho) ek jagah **merge** hoke aate hain.
5. Parallelogram box me **Print Largest**.
6. **Stop** oval se khatam karo.

> Socho Aise — Ye "largest of 3" problem asal me do chhote "largest of 2" comparisons ka combination hai — pehle A aur B compare karo, phir jo bada nikla usse C se compare karo. Complex lagne wale problems ko chhote steps me tod dena hi algorithm design ka core skill hai.

> Question — A=10, B=25, C=15 diye jaayein toh Largest kya aayega? Step by step batao.

**Solution** — Pehla check: A > B? matlab 10 > 25? — **No**. Isliye doosri taraf (B vs C) jaayenge: B > C? matlab 25 > 15? — **Yes**. Isliye Largest = B = **25**.

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

**Flow step by step:**

1. **Start** oval se shuru.
2. Parallelogram box me **Read N**.
3. Rectangle (process) box me calculate karo: `Remainder = N % 2`.
4. Diamond (decision) box: **"Is Remainder == 0?"**
   - Agar **Yes** → ek side se jao → Parallelogram box: **Print "Even"**
   - Agar **No** → doosri side se jao → Parallelogram box: **Print "Odd"**
5. Dono paths merge hokar ek common point par aate hain.
6. **Stop** oval se khatam.

> Yaad Rakho — Modulus operator (`%`) hi even/odd check karne ka sabse simple tarika hai — kisi bhi number ko 2 se divide karke agar remainder 0 aaye toh Even, warna Odd.

> Question — N = 7 diya gaya hai. Remainder kya banega, aur output kya aayega?

**Solution** — Remainder = 7 % 2 = **1** (7 ko 2 se divide karo, 3 baar poora aata hai, 1 bachta hai). Since Remainder barabar nahi hai 0 ke, isliye output: **"Odd"**.

---

### Problem Solving Aur Algorithm Design — Poora Process

Jab bhi koi naya problem solve karna ho (chahe exam me ho ya real coding me), ye order follow karo:

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

---

### Ab Khud Try Karo — Practice Questions

> Question — Algorithm ki 5 properties ke naam batao.

**Solution** — Finiteness, Definiteness, Input, Output, Effectiveness.

> Question — Kis symbol se decision (Yes/No condition) dikhaya jaata hai?

**Solution** — **Diamond** shape se.

> Question — Kisi number ko square karne ka (N x N) chhota sa algorithm aur uska flowchart-flow (text me) likho.

**Solution** — Algorithm: Step 1: Start. Step 2: Read N. Step 3: Square = N x N. Step 4: Print Square. Step 5: Stop. Flow: Start (Oval) se Read N (Parallelogram) tak, phir Square = N x N (Rectangle) tak, phir Print Square (Parallelogram) tak, aur aakhir me Stop (Oval).

> Question — Flowchart ka ek advantage aur ek limitation batao.

**Solution** — Advantage: Visual hone se code padhe bina bhi logic samajh aata hai. Limitation: Complex programs ke liye flowchart bahut bada aur confusing ban jaata hai.
