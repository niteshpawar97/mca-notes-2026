## Basic Programming Concepts — Variables, Data Types, Operators, Control Statements

### Variables — Data Ko Naam Dena

**Variable** ek naam hai jo kisi memory location ko diya jaata hai, jahan value store hoti hai — jo **change ho sakti hai**.

```
age = 20        // 'age' ek variable hai, value 20 store hai
age = 21        // Value change ho sakti hai — isiliye "vari"-able
```

> Socho Aise — Variable ek "labeled box" jaisa hai. Box par naam likha hai (jaise "age"), aur box ke andar value rakhi hai (20). Jab chaho box ke andar ki value badal sakte ho, box ka naam wahi rehta hai.

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

#### 2. Loops — Kaam Ko Baar Baar Dohrana

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

### Poora Example — Sab Concepts Ek Saath

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

> Tip — Exam me "basic programming concepts" poocha jaaye toh in 4 building blocks ko cover karo: Variables, Data Types, Operators, Control Statements — har ek ka ek chhota code/pseudocode example do, ye complete answer maana jaata hai.
