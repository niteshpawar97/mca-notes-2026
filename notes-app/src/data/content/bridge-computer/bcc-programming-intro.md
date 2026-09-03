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

### Generations Of Programming Languages

Programming languages bhi time ke saath evolve hui hain — insaan ki bhasha ke jyada paas aati gayi hain:

| Generation | Type | Example | Characteristic |
|------------|------|---------|-----------------|
| **1GL** | Machine Language | Pure binary (0s and 1s) | Sabse fast execution, samajhna sabse mushkil |
| **2GL** | Assembly Language | MOV, ADD, JMP jaise mnemonics | Thoda readable, par phir bhi hardware-specific |
| **3GL** | High-level Language | C, Java, Python | English jaisi syntax, portable, aaj sabse zyada use hoti hain |
| **4GL** | Very High-level / Query Language | SQL | Database se seedha "kya chahiye" bata do, "kaise karna hai" nahi likhna padta |
| **5GL** | AI-based Language | Prolog, AI-driven tools (ChatGPT-jaise natural language coding) | Problem describe karo, system khud solution generate karta hai |

> Socho Aise — Har generation insaan ki natural bhasha ke aur paas aati gayi hai. 1GL me computer ki bhasha me sochna padta tha, 5GL me tum sirf "kya chahiye" bolo aur system samajh jaaye.

> Yaad Rakho — SQL 4GL ka best example hai kyunki usme tum sirf "SELECT name FROM students WHERE marks > 90" likhte ho — **kya chahiye** batate ho, **kaise dhoondhna hai** ye system khud decide karta hai.

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

### Assembler — Assembly Language Ka Translator

Jaise Compiler high-level language ko machine code me convert karta hai, waise hi **Assembler** low-level Assembly Language ko machine code me convert karta hai.

| Translator | Kya Convert Karta Hai |
|-------------|--------------------------|
| **Assembler** | Assembly Language → Machine Code |
| **Compiler** | High-level Language → Machine Code (poora program ek saath) |
| **Interpreter** | High-level Language → Machine Code (line-by-line) |

> Yaad Rakho — Teeno (Assembler, Compiler, Interpreter) ka final goal same hai — **human-readable code ko machine ke samajhne wali binary me convert karna** — bas source language aur translation ka tarika alag hota hai.

---

### Linker Aur Loader — Program Execution Pipeline Ka Baaki Hissa

Compiler ke baad bhi program direct run nahi ho jaata — do aur steps hote hain:

```
Source Code → Compiler → Object Code → Linker → Executable File → Loader → RAM me load → Run
```

| Step | Kaam |
|------|------|
| **Linker** | Alag-alag object files aur libraries (jaise pehle se bane hue functions) ko jodkar ek single executable file banata hai |
| **Loader** | Us executable file ko Hard Disk se uthakar **RAM** me load karta hai, taaki CPU use execute kar sake |

> Socho Aise — Compiler ek-ek chapter (object files) taiyar karta hai, Linker un sabhi chapters ko jodkar ek poori "kitaab" (executable) banata hai, aur Loader us kitaab ko "library shelf" (hard disk) se uthakar tumhare "reading table" (RAM) par le aata hai taaki tum (CPU) use padh (execute) sako.

> Example — Jab tum C program me `#include <stdio.h>` likhte ho aur `printf()` function use karte ho, Linker hi tumhare code ko us pre-written `printf` library function se jodta hai — tumne khud printf ka code nahi likha, Linker ne use link kiya.

---

### Program Kaise Chalta Hai — Poora Flow

```
Source Code (High-level, .c file)
        ↓
   Compiler / Interpreter
        ↓
Object Code / Machine Code (Binary — 0s and 1s)
        ↓
   Linker (libraries jodta hai)
        ↓
   Loader (RAM me le jaata hai)
        ↓
   CPU Execute Karta Hai
```

> Warning — Agar code me syntax error hai (jaise semicolon bhool jaana), toh Compiler/Interpreter translate hi nahi kar payega — program **run hi nahi hoga**. Isiliye syntax carefully likhna zaroori hai.

> Tip — Exam me "Compiler vs Interpreter" ka table sabse zyada poocha jaata hai — 4 points yaad rakho: Translation method, Speed, Error reporting, Example languages. Agar Assembler/Linker/Loader bhi mention karo toh answer aur complete lagta hai.

---

### Types Of Errors In Programming

Program likhte waqt teen tarah ki galtiyan common hain:

| Error Type | Kab Hoti Hai | Example |
|------------|----------------|---------|
| **Syntax Error** | Language ke grammar rules follow nahi kiye (jaise semicolon missing) | `int x = 5` (semicolon bhool gaye) — Compiler/Interpreter yahin ruk jaayega |
| **Logical Error** | Program run toh ho jaata hai, par result galat aata hai — logic hi galat likha | Average nikalne ke formula me galti se sum ko count se divide na karna |
| **Runtime Error** | Program chalte waqt achanak fail ho jaata hai | Kisi number ko 0 se divide karne ki koshish (Division by Zero) |

> Socho Aise — Syntax Error ek "vyakaran ki galti" jaisi hai (sentence hi galat bana), Logical Error ek "sahi vyakaran, galat matlab" jaisa hai (sentence sahi hai par jo kehna tha wo nahi kaha), aur Runtime Error ek "achanak ruk jaana" jaisa hai (chalte-chalte bich raste me gaadi band ho gayi).

> Yaad Rakho — Syntax Error sabse aasan pakadne wala hai kyunki Compiler/Interpreter khud bata deta hai. Logical Error sabse **mushkil** hota hai pakadna, kyunki program bina crash hue chalta rehta hai, bas answer galat aata hai — isko dhoondhne ke liye careful testing aur debugging zaroori hai.

---

### Debugging — Errors Dhoondh Kar Theek Karna

**Debugging** wo process hai jisme program me se errors (bugs) dhoondh kar unhe fix kiya jaata hai.

| Debugging Step | Kaam |
|-------------------|------|
| Error identify karna | Kahan aur kya galat hai samajhna |
| Root cause dhoondhna | Galti ka asli reason nikalna |
| Fix karna | Code correct karna |
| Re-test karna | Confirm karna ki ab sahi chal raha hai |

> Example — "Debug" word ka origin interesting hai — purane computers me kabhi ek asli **keeda (bug/insect)** machine ke andar phas jaane se malfunction ho gaya tha, tabse code ki galtiyon ko bhi "bugs" kehte hain aur unhe theek karna "debugging" kehlata hai.

---

### Popular Programming Languages — Ek Quick Overview

Naye programmers ke liye ye jaanna zaroori hai ki kaunsi language kis kaam ke liye zyada use hoti hai:

| Language | Mainly Use Hoti Hai |
|----------|---------------------------|
| **C** | System programming, OS banane me, hardware ke paas kaam ke liye |
| **C++** | Games, software jahan speed + Object-Oriented dono chahiye |
| **Java** | Android apps, bade enterprise systems (platform-independent) |
| **Python** | Data Science, AI/ML, easy scripting (sabse beginner-friendly) |
| **JavaScript** | Websites ko interactive banana (browser me chalta hai) |
| **SQL** | Databases se data query karne ke liye |

> Socho Aise — Har language ka apna "specialty area" hai — jaise doctor bhi general physician, surgeon, dentist alag-alag hote hain, waise hi programming languages bhi alag-alag kaam ke liye best-suited hoti hain. Ek hi language "sab kuch ke liye best" nahi hoti.

> Tip — Exam me agar "kisi bhi 3 programming languages ke naam aur unke use" poocha jaaye, toh C (system programming), Python (AI/Data Science) aur Java (Android apps) — ye teen safest aur strong answer hain.
