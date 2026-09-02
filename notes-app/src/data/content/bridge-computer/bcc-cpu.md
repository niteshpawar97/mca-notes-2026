## CPU — Control Unit, ALU Aur Registers

### CPU Kya Hai?

**Central Processing Unit (CPU)** computer ka "dimaag" hai — sabhi instructions yahin execute hote hain. Isko **"Brain of the Computer"** bhi kehte hain.

> Socho Aise — Agar computer ek company hai, toh CPU uska CEO hai — har decision, har calculation CPU se hokar guzarta hai.

---

### CPU Ke 3 Main Parts

```
┌────────────────────────────────────────────┐
│                    CPU                       │
│  ┌────────────┐  ┌─────┐  ┌──────────────┐  │
│  │ Control    │  │ ALU │  │  Registers    │  │
│  │ Unit (CU)  │  │     │  │               │  │
│  └────────────┘  └─────┘  └──────────────┘  │
└────────────────────────────────────────────┘
```

| Part | Kaam |
|------|------|
| **Control Unit (CU)** | Instructions ko fetch, decode aur execute karwata hai — poore system ka "traffic police" |
| **Arithmetic Logic Unit (ALU)** | Sab ganit (+, -, *, /) aur logical operations (AND, OR, comparison) yahan hote hain |
| **Registers** | CPU ke andar chhote, super-fast temporary storage locations |

---

### Control Unit (CU) — Kya Karta Hai?

CU khud koi data process nahi karta — wo sirf **coordinate** karta hai:
- Memory se instruction **fetch** karta hai
- Us instruction ko **decode** karta hai (samajhta hai kya karna hai)
- ALU/Registers ko batata hai instruction **execute** karne ke liye

> Yaad Rakho — CU khud calculation nahi karta, sirf order deta hai kaun kya karega — bilkul ek manager jaisa jo khud kaam nahi karta par sabko coordinate karta hai.

---

### ALU — Ganit Aur Logic Ka Center

| Operation Type | Example |
|-----------------|---------|
| Arithmetic | Addition, Subtraction, Multiplication, Division |
| Logical | AND, OR, NOT, Comparison (>, <, =) |

```
Example: ALU ek instruction "5 + 3" receive karta hai
→ Result 8 calculate karta hai
→ Result ko register me store kar deta hai
```

---

### Registers — CPU Ki Apni Chhoti Memory

Registers CPU ke andar hi hote hain — RAM se bhi **zyada fast** hote hain, par size me bahut **chhote** (kuch bytes).

| Register | Kaam |
|----------|------|
| **Accumulator (AC)** | Calculation ka result temporarily store karta hai |
| **Program Counter (PC)** | Agli instruction ka address rakhta hai |
| **Instruction Register (IR)** | Current instruction jo execute ho rahi hai |
| **Memory Address Register (MAR)** | Memory location ka address rakhta hai jahan se data lena/dena hai |

> Example — Socho tum ek sum kar rahe ho calculator par. Jo intermediate number screen par dikh raha hai (jaise pehle number 5 dabaya, phir + dabaya) — wo Accumulator jaisa hai, jo next step ke liye value yaad rakhta hai.

---

### Fetch-Decode-Execute Cycle

```
1. FETCH   → CU memory se instruction laata hai
2. DECODE  → CU samajhta hai instruction ka matlab kya hai
3. EXECUTE → ALU ya baaki components instruction perform karte hain
     ↓
   (repeat for next instruction)
```

> Tip — Exam me "CPU ke parts" poochha jaaye toh diagram banao (CU, ALU, Registers), har ek ka ek-ek line kaam likho, aur Fetch-Decode-Execute cycle bhi mention karo — ye examiner ko dikhata hai concept ka poora picture pata hai.
