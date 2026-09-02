## Programming Languages — Low-level Vs High-level, Compilers Aur Interpreters

### Programming Language Kya Hai?

**Programming Language** ek tarika hai computer ko instructions dene ka — insaan ki bhasha me sochke, computer ki bhasha me convert karke.

> Socho Aise — Computer sirf "0 aur 1" (binary) samajhta hai. Programming language ek translator jaisi hai — tum English-jaisi commands likhte ho, aur wo unhe computer ki binary bhasha me convert kar deti hai.

---

### Low-level Vs High-level Languages

| Aspect | Low-level Language | High-level Language |
|--------|-----------------------|--------------------------|
| **Insaan ke liye** | Samajhna mushkil | Samajhna aasan (English jaisi) |
| **Hardware ke paas** | Bahut paas (fast execution) | Door (portable, easy) |
| **Example** | Machine Language, Assembly | C, Python, Java, C++ |
| **Portability** | Ek machine ke liye specific | Multiple machines par chal sakti hai |
| **Likhna** | Mushkil aur time-consuming | Aasan aur fast |

```
Low-level (Machine Code):   10110000 01100001
Low-level (Assembly):       MOV AL, 61h
High-level (C):             int x = 97;
```

> Yaad Rakho — "Low" aur "High" **hardware ke kitne paas hain** ye batata hai, na ki quality kam ya zyada hai! Low-level = hardware ke bahut paas (fast par mushkil), High-level = insaan ki bhasha ke paas (aasan par thoda slow).

---

### Compiler Vs Interpreter — Code Ko Machine Language Me Kaun Badalta Hai?

Chahe koi bhi high-level language ho, computer ko sirf machine code (binary) samajh aata hai. Isliye humara code **translate** hona zaroori hai:

| Aspect | Compiler | Interpreter |
|--------|----------|---------------|
| **Kaam** | Poora program ek saath translate karta hai | Line-by-line translate aur execute karta hai |
| **Speed** | Fast execution (ek baar compile ho gaya) | Thoda slow (har baar line-by-line) |
| **Error Reporting** | Saare errors ek saath end me batata hai | Jis line pe error aaye wahin ruk jaata hai |
| **Example Languages** | C, C++ | Python, JavaScript |

> Example — Compiler ek "poori kitaab ka translator" jaisa hai — pehle poori kitaab translate karta hai, phir tumhe deta hai. Interpreter ek "live translator" jaisa hai jo bolte-bolte saath-saath translate karta jaata hai.

---

### Program Kaise Chalta Hai — Poora Flow

```
Source Code (High-level, .c file)
        ↓
   Compiler / Interpreter
        ↓
Machine Code (Binary — 0s and 1s)
        ↓
   CPU Execute Karta Hai
```

> Warning — Agar code me syntax error hai (jaise semicolon bhool jaana), toh Compiler/Interpreter translate hi nahi kar payega — program **run hi nahi hoga**. Isiliye syntax carefully likhna zaroori hai.

> Tip — Exam me "Compiler vs Interpreter" ka table sabse zyada poocha jaata hai — 4 points yaad rakho: Translation method, Speed, Error reporting, Example languages.
