## C Program Ki Structure Aur Data Types

### C Program Kaisa Dikhta Hai?

Har C program ek fixed structure follow karta hai — jaise ek ghar banane ka blueprint hota hai, waise hi C program ka bhi ek template hota hai.

```c
#include <stdio.h>      // Preprocessor directive — header file include karo

#define PI 3.14         // Macro definition (optional)

int total;              // Global declaration (optional)

int add(int a, int b);  // Function prototype (optional)

int main() {             // main() — program yahan se shuru hota hai
    int x = 10;           // Local declaration + statements
    printf("Value: %d", x);
    return 0;             // OS ko batao program safal raha
}

int add(int a, int b) {  // Function definition
    return a + b;
}
```

> Socho Aise — C program ek office letter jaisa hai: header (preprocessor directives) sabse upar, phir global info, phir `main()` jo ki asli "letter body" hai jahan se execution shuru hota hai, aur baaki functions letter ke attachments ki tarah hote hain.

---

### Structure Ke Parts — Ek Nazar Me

| Part | Kaam Kya Hai | Example |
|------|-------------|---------|
| **Preprocessor Directives** | Compile se pehle process hote hain | `#include`, `#define` |
| **Global Declarations** | Poore program me use ho sakti hain | `int total;` |
| **main() Function** | Execution hamesha yahan se start hoti hai | `int main() { ... }` |
| **Local Declarations** | Sirf us function ke andar valid | `int x = 10;` |
| **Statements & Expressions** | Actual kaam karne wali lines | `x = x + 1;` |
| **User-defined Functions** | Reusable code blocks | `int add(int a, int b)` |
| **Comments** | Compiler ignore karta hai, sirf humare liye | `// yeh comment hai` |

---

### Identifiers Aur Keywords

**Identifiers** — Variable, function, ya array ka naam jo hum khud choose karte hain.

**Rules:**
- Sirf letters, digits aur underscore (`_`) use ho sakte hain
- Digit se shuru nahi ho sakta (`1value` galat hai)
- Keyword nahi ho sakta (`int` ko variable naam nahi bana sakte)
- Case-sensitive hai — `Sum` aur `sum` alag hain

**Keywords** — C language ke reserved words jinka apna fixed matlab hota hai. Total **32 keywords** hote hain C me — jaise `int`, `float`, `if`, `else`, `while`, `return`, `struct`, `void` etc. Inhe variable name ke roop me use nahi kar sakte.

> Yaad Rakho — Identifiers *hum* banate hain, Keywords *pehle se fixed* hote hain. Exam me difference poocha jaata hai!

---

### Data Types — C Me Kya Kya Store Kar Sakte Hain

```
┌─────────────────────────────────────────────────────┐
│                    Data Types                        │
├───────────────┬───────────────┬─────────────────────┤
│  Primary       │  Derived       │  User-Defined        │
│  (Basic)       │                │                       │
├───────────────┼───────────────┼─────────────────────┤
│  int, char     │  Array         │  struct               │
│  float, double │  Pointer       │  union                 │
│  void          │  Function      │  enum, typedef         │
└───────────────┴───────────────┴─────────────────────┘
```

| Data Type | Size (typical) | Range / Use | Format Specifier |
|-----------|-----------------|-------------|-------------------|
| `char` | 1 byte | Single character (-128 to 127) | `%c` |
| `int` | 4 bytes | Whole numbers | `%d` |
| `float` | 4 bytes | Decimal numbers (6-7 digit precision) | `%f` |
| `double` | 8 bytes | Decimal numbers (higher precision) | `%lf` |
| `void` | 0 bytes | "Kuch nahi" — koi value nahi | — |

**Modifiers** — `short`, `long`, `signed`, `unsigned` in basic types ke aage lagakar unka size/range badal sakte hain, jaise `unsigned int`, `long double`.

> Tip — Exam me "Data types explain karo" aaye toh table banao — Primary, Derived, User-defined teeno categories mention karo, phir size aur range likho. Ye ek favourite 5-mark question hai.

---

### Scope of Variables

| Scope Type | Kahan Valid Hai | Example |
|------------|-------------------|---------|
| **Local Variable** | Sirf us function/block ke andar | `main()` ke andar `int x;` |
| **Global Variable** | Poore program me, sabhi functions me | `main()` se bahar declare kiya gaya |
| **Static Variable** | Function khatam hone par bhi value yaad rehti hai | `static int count = 0;` |

> Socho Aise — Local variable ek "personal diary" jaisa hai, sirf ek function padh sakta hai. Global variable ek "notice board" jaisa hai, sabhi functions padh/likh sakte hain.

---

### Casting Aur Precedence — Chhoti Par Important Cheezein

**Type Casting** — Ek data type ko dusre me convert karna:

```c
int a = 7, b = 2;
float result = (float) a / b;   // Explicit casting — result = 3.5
```

Agar casting nahi karte toh `int/int` = `int` hi milega (3), decimal part chala jaayega.

**Operator Precedence** — Kaun sa operator pehle evaluate hoga:

```c
int x = 10 + 5 * 2;   // * pehle: 10 + 10 = 20, na ki (10+5)*2 = 30
```

> Warning — `*`, `/`, `%` ki precedence `+`, `-` se zyada hoti hai. Brackets `()` sabse zyada priority lete hain — confusion ho toh brackets use karo!
