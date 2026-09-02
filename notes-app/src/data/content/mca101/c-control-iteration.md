## Control Aur Iteration Constructs

### Control Constructs — Decision Lena

Control constructs decide karte hain ki program **kaunsa raasta** lega — condition ke hisaab se.

#### if, if-else, nested if

```c
int marks = 75;

if (marks >= 90) {
    printf("Grade A");
} else if (marks >= 60) {
    printf("Grade B");     // Ye chalega
} else {
    printf("Grade C");
}
```

> Socho Aise — `if-else` ek traffic signal jaisa hai. Condition (light ka color) check karo, aur us hisaab se decide karo — rukna hai ya jaana hai.

#### switch-case

Jab **ek variable ki multiple fixed values** check karni ho, `switch` zyada clean hota hai `if-else` ki chain se:

```c
int day = 3;
switch (day) {
    case 1: printf("Monday"); break;
    case 2: printf("Tuesday"); break;
    case 3: printf("Wednesday"); break;   // Ye chalega
    default: printf("Invalid day");
}
```

> Warning — `break;` bhoolna mat! Agar `break` nahi lagaoge toh **fall-through** ho jaayega — matlab agla case bhi execute ho jaayega, chahe wo match na kare.

**if-else vs switch — Kab Kya Use Karein?**

| Situation | Use |
|-----------|-----|
| Range check (marks >= 60) | `if-else` |
| Fixed exact values (1,2,3...) | `switch` |
| Complex multiple conditions | `if-else` |
| Menu-driven programs | `switch` |

---

### Iteration Constructs — Baar Baar Kaam Karna (Loops)

#### for loop

Jab **kitni baar** loop chalana hai pehle se pata ho:

```c
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);     // Output: 1 2 3 4 5
}
```

Teen parts: **Initialization** (`i=1`) → **Condition** (`i<=5`) → **Update** (`i++`), sab ek line me.

#### while loop

Jab condition check karke loop chalana ho, aur iterations ki fixed count pata na ho:

```c
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}
```

#### do-while loop

`while` jaisa hi, par **condition end me check hoti hai** — matlab loop **kam se kam ek baar** zaroor chalega, condition false bhi ho tab bhi:

```c
int i = 10;
do {
    printf("%d ", i);    // Ye ek baar chalega, kyunki check baad me hota hai
    i++;
} while (i <= 5);
```

> Yaad Rakho — `while` **pehle check karta hai phir chalata hai** (entry-controlled). `do-while` **pehle chalata hai phir check karta hai** (exit-controlled) — isliye do-while minimum 1 baar zaroor run hota hai.

---

### Loop Control Statements

| Statement | Kaam |
|-----------|------|
| `break` | Loop ko turant band kar deta hai |
| `continue` | Current iteration skip karke agli iteration pe jaata hai |
| `goto` | Program control ko kisi labeled line par jump karata hai (kam use hota hai — bad practice mana jaata hai) |

```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) continue;   // 5 ko skip karega
    if (i == 8) break;      // 8 pe loop rok dega
    printf("%d ", i);       // Output: 1 2 3 4 6 7
}
```

---

### Loop Comparison — Ek Nazar Me

| Loop | Condition Check Kab? | Minimum Runs |
|------|------------------------|----------------|
| `for` | Shuru me | 0 |
| `while` | Shuru me | 0 |
| `do-while` | End me | 1 |

> Tip — Exam me "for vs while vs do-while" difference poocha jaaye toh yahi table likho, aur ek chhota code example do-while ka do jisme condition false ho phir bhi ek baar chale — examiner ko clearly samajh aayega ki concept clear hai.
