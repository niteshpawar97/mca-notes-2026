## Operators, Expressions, Preprocessor Aur Input-Output

### Operators — C Me Kaam Karne Ke Auzaar (Tools)

Operators wo symbols hain jo data par operation perform karte hain.

| Category | Operators | Kaam |
|----------|-----------|------|
| **Arithmetic** | `+ - * / %` | Ganit ke calculations |
| **Relational** | `== != < > <= >=` | Comparison — result `0` ya `1` |
| **Logical** | `&& \|\| !` | AND, OR, NOT — conditions jodne ke liye |
| **Assignment** | `= += -= *= /=` | Value assign/update karna |
| **Increment/Decrement** | `++ --` | Value 1 se badhana/ghatana |
| **Bitwise** | `& \| ^ ~ << >>` | Bit-level operations |
| **Conditional (Ternary)** | `? :` | Ek line me if-else |

```c
int a = 10, b = 3;
printf("%d", a % b);   // 1 — modulus, remainder deta hai
int max = (a > b) ? a : b;   // Ternary — max = 10
```

> Yaad Rakho — `=` aur `==` alag hain! `=` assignment hai (value rakho), `==` comparison hai (barabar hai kya check karo). Ye sabse common beginner mistake hai.

---

### Expressions Aur Precedence

**Expression** — Operators aur operands ka combination jo ek value return karta hai. Jaise `a + b * c`.

**Precedence** decide karta hai ki kaunsa operator pehle evaluate hoga:

```
Highest →  ()  →  ++ --  →  * / %  →  + -  →  relational  →  && ||  →  =  ← Lowest
```

> Example — `int x = 2 + 3 * 4;` Yahan `*` pehle chalega: `3*4=12`, phir `2+12=14`. Agar `(2+3)*4` chahiye tha toh brackets zaroori the — result hota `20`.

**Associativity** — Jab same precedence ke do operators saath ho, kis taraf se evaluate honge (left-to-right ya right-to-left). Jaise `a - b - c` left-to-right evaluate hota hai: `(a-b)-c`.

---

### Preprocessor Directives

Ye compile hone **se pehle** process hoti hain — isliye naam "pre"-processor.

| Directive | Kaam | Example |
|-----------|------|---------|
| `#include` | Header file ko program me jodta hai | `#include <stdio.h>` |
| `#define` | Macro/constant define karta hai | `#define PI 3.14` |
| `#ifdef / #ifndef` | Conditional compilation | Debug code on/off karne ke liye |
| `#undef` | Macro ko undefine karta hai | `#undef PI` |

```c
#define SQUARE(x) ((x) * (x))   // Macro function jaisa

int main() {
    printf("%d", SQUARE(5));    // Compile se pehle (5)*(5) ban jaata hai → 25
}
```

> Warning — Macro me brackets zaroor lagao! `#define SQUARE(x) x*x` likhoge toh `SQUARE(2+3)` ban jaayega `2+3*2+3` = `11`, na ki `25`. Brackets `((x)*(x))` isse bachate hain.

---

### Input Aur Output Functions

| Function | Kaam | Example |
|----------|------|---------|
| `printf()` | Screen par output print karta hai | `printf("%d", x);` |
| `scanf()` | Keyboard se input leta hai | `scanf("%d", &x);` |
| `getchar()` | Ek single character read karta hai | — |
| `putchar()` | Ek single character print karta hai | — |
| `gets() / fgets()` | Poori line read karta hai | `fgets(str, 50, stdin);` |

**Common Format Specifiers:**

| Specifier | Data Type |
|-----------|-----------|
| `%d` | int |
| `%f` | float |
| `%c` | char |
| `%s` | string |
| `%lf` | double |

> Warning — `scanf()` me variable ke aage `&` (address-of operator) lagana **zaroori** hai (except arrays/strings) — kyunki `scanf` ko us memory location ka address chahiye jahan value store karni hai, na ki value khud. `scanf("%d", x)` galat hai, `scanf("%d", &x)` sahi hai!

---

### Casting Aur Precedence Ka Practical Use

```c
int total = 7, count = 2;
float avg = (float) total / count;   // 3.5 — casting se decimal precision milti hai
```

> Tip — Exam me "operators categorize karo" poocha jaaye toh table banao (Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Bitwise, Conditional), har category ka ek example do — ye poore marks dilata hai.
