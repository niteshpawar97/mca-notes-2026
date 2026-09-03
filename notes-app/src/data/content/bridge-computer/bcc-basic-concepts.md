## Basic Programming Concepts — Variables, Data Types, Operators, Control Statements

### Variables — Data Ko Naam Dena

**Variable** ek naam hai jo kisi memory location ko diya jaata hai, jahan value store hoti hai — jo **change ho sakti hai**.

```
age = 20        // 'age' ek variable hai, value 20 store hai
age = 21        // Value change ho sakti hai — isiliye "vari"-able
```

> Socho Aise — Variable ek "labeled box" jaisa hai. Box par naam likha hai (jaise "age"), aur box ke andar value rakhi hai (20). Jab chaho box ke andar ki value badal sakte ho, box ka naam wahi rehta hai.

---

### Constants Vs Variables

Har cheez program me change nahi hoti — kuch values **fixed** rehti hain, unhe **Constant** kehte hain.

| Aspect | Variable | Constant |
|--------|----------|-----------|
| **Value** | Program chalte waqt change ho sakti hai | Ek baar set hone ke baad kabhi change nahi hoti |
| **Example** | `age = 20` phir `age = 21` | `PI = 3.14159` (kabhi nahi badlega) |
| **Kab Use Karein** | Jab data dynamic ho (user input, calculations) | Jab value fixed/known ho (mathematical constants, fixed limits) |

> Example — Circle ka area nikalne wale program me `PI` ek constant hai (hamesha 3.14159), jabki `radius` ek variable hai (har circle ka alag ho sakta hai).

---

### Keywords Vs Identifiers

Programming language me har word ka apna role hota hai — kuch words language ke "reserved" hote hain, kuch tum khud banate ho:

| Aspect | Keyword | Identifier |
|--------|---------|-------------|
| **Matlab** | Language ke reserved words, fixed meaning hoti hai | Variable/function ka naam jo programmer khud choose karta hai |
| **Change Kar Sakte Ho?** | Nahi — inka matlab fixed hai, inhe naam ke roop me use nahi kar sakte | Haan — apni marzi se naam rakh sakte ho (rules ke andar) |
| **Example** | `if`, `else`, `for`, `while`, `int`, `return` | `age`, `total`, `studentName`, `calculateSum` |

> Yaad Rakho — Keyword ek "reserved seat" jaisa hai jo language ne khud ke liye rakhi hai — tum use apne variable ka naam nahi bana sakte (jaise `int if = 5;` galat hai kyunki `if` keyword hai). Identifier tumhara khud ka diya hua naam hai.

---

### Data Types — Kya Type Ka Data Store Ho Raha Hai

| Data Type | Kya Store Karta Hai | Example |
|-----------|------------------------|---------|
| **Integer (int)** | Whole numbers | 5, -10, 100 |
| **Float/Decimal** | Decimal numbers | 3.14, -0.5 |
| **Character (char)** | Ek single character | 'A', 'z' |
| **String** | Text ka group | "Hello World" |
| **Boolean** | True ya False | True, False |

> Yaad Rakho — Har variable ka ek data type hota hai — computer ko batata hai kitni memory reserve karni hai aur us data par kya operations valid hain (jaise numbers par ganit, strings par joining).

---

### Operators — Operations Perform Karne Ke Liye

| Category | Operators | Kaam |
|----------|-----------|------|
| **Arithmetic** | `+  -  *  /  %` | Ganit ke calculations |
| **Relational** | `==  !=  <  >  <=  >=` | Comparison (True/False deta hai) |
| **Logical** | `AND  OR  NOT` | Multiple conditions jodna |
| **Assignment** | `=` | Value assign karna |

```
Example:
a = 10
b = 3

a + b = 13     (Arithmetic)
a > b = True   (Relational)
```

---

### Control Statements — Program Ka Flow Control Karna

#### 1. Conditional Statement (if-else)

Jab **condition ke hisaab se decision** lena ho:

```
if (marks >= 40) {
    print "Pass"
} else {
    print "Fail"
}
```

> Example — Real life me bhi hum har waqt if-else use karte hain: "Agar baarish ho rahi hai (condition) toh chhata le jao (action A), warna dhoop ka chashma le jao (action B)."

#### 2. Nested If-else — Condition Ke Andar Condition

Kabhi-kabhi ek decision ke andar ek aur decision lena padta hai — isse **nested if-else** kehte hain.

```
if (marks >= 90) {
    print "Grade A"
} else {
    if (marks >= 75) {
        print "Grade B"
    } else {
        print "Grade C"
    }
}
```

> Socho Aise — Nested if-else ek "doorway ke andar doorway" jaisa hai — pehle bade darwaze (outer condition) se guzro, phir uske andar ek chhota darwaza (inner condition) mile toh usse bhi guzro, tabhi final action hoga.

#### 3. Switch-case — Bahut Saare If-else Ka Alternative

Jab ek hi variable ki multiple specific values check karni ho, tab baar-baar if-else likhne ke bajaye **switch-case** use karte hain — cleaner aur readable hota hai.

```
switch (day) {
    case 1: print "Monday"; break;
    case 2: print "Tuesday"; break;
    case 3: print "Wednesday"; break;
    default: print "Invalid day";
}
```

> Yaad Rakho — Switch-case tab use karo jab ek hi variable ki **specific fixed values** check karni ho (jaise day number 1-7). Agar range check karni ho (jaise marks >= 40) toh if-else hi better rehta hai — switch-case ranges ke liye designed nahi hai.

---

### Loops — Kaam Ko Baar Baar Dohrana

| Loop Type | Kab Use Karein |
|------------|-------------------|
| **for loop** | Jab pata ho kitni baar repeat karna hai |
| **while loop** | Jab condition ke true rehne tak repeat karna ho |

```
for i = 1 to 5:
    print i
// Output: 1 2 3 4 5
```

> Warning — Loop me agar condition kabhi False na ho, toh **infinite loop** ban jaata hai — program kabhi rukega nahi! Har loop me ek exit condition zaroor honi chahiye.

---

### Poora Example 1 — Sab Concepts Ek Saath (Even Numbers)

```
Problem: 1 se 10 tak sabhi even numbers print karo

Algorithm:
Step 1: i = 1                        (Variable, integer data type)
Step 2: While i <= 10:               (Loop + Relational operator)
Step 3:     If i % 2 == 0:           (Control statement + operator)
Step 4:         Print i
Step 5:     i = i + 1                (Assignment + Arithmetic)
Step 6: Stop
```

---

### Poora Example 2 — Factorial Of A Number (Loop + Variable + Operator Saath)

Factorial (n!) ka matlab hai 1 se lekar n tak ke sabhi numbers ka product — jaise 5! = 1×2×3×4×5 = 120.

```
Problem: Kisi number N ka factorial nikalna

Algorithm:
Step 1: Read N                       (Variable, integer data type)
Step 2: fact = 1                     (Variable initialize)
Step 3: i = 1                        (Loop counter variable)
Step 4: While i <= N:                (Loop + Relational operator)
Step 5:     fact = fact * i          (Arithmetic operator + Assignment)
Step 6:     i = i + 1                (Assignment + Arithmetic)
Step 7: Print fact
Step 8: Stop
```

**Dry run (N = 4 ke liye, step by step):**

| i | fact (before) | fact = fact × i | i = i + 1 |
|---|-----------------|--------------------|-------------|
| 1 | 1 | 1 × 1 = 1 | 2 |
| 2 | 1 | 1 × 2 = 2 | 3 |
| 3 | 2 | 2 × 3 = 6 | 4 |
| 4 | 6 | 6 × 4 = 24 | 5 (loop stop, since 5 > 4) |

Final Answer: **fact = 24** (4! = 24) ✓

> Example — Ye example dikhata hai ki kaise ek hi problem me **Variable** (fact, i, N), **Data Type** (integer), **Operator** (multiplication `*`, assignment `=`, relational `<=`) aur **Loop** (while) — sab ek saath milke kaam karte hain. Yehi asal me "programming" hai — sab basic building blocks ka combination.

> Tip — Exam me "basic programming concepts" poocha jaaye toh in building blocks ko cover karo: Variables vs Constants, Keywords vs Identifiers, Data Types, Operators, Control Statements (if-else, nested if-else, switch-case), Loops — har ek ka ek chhota code/pseudocode example do, ye complete answer maana jaata hai.
