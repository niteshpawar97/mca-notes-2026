## Number Systems — Decimal, Binary, Octal, Hexadecimal

### Number System Kya Hota Hai?

Number system ek tarika hai numbers ko represent karne ka. Har number system ka apna **base (radix)** hota hai — jitne symbols wo use karta hai.

| System | Base | Digits Used |
|--------|------|-------------|
| **Decimal** | 10 | 0-9 |
| **Binary** | 2 | 0, 1 |
| **Octal** | 8 | 0-7 |
| **Hexadecimal** | 16 | 0-9, A-F (A=10...F=15) |

> Socho Aise — Insaan **Decimal** me sochta hai (10 ungliyaan hain isliye). Computer **Binary** me sochta hai (sirf 2 states — current ON ya OFF, switch jaisa). Octal aur Hex sirf binary ko chhota/readable dikhane ke shortcuts hain.

---

### Computer Binary Kyun Use Karta Hai?

Computer ke andar electronic circuits hote hain jinke sirf 2 hi reliable states ho sakte hain:

```
Current ON   →  represent karta hai  1
Current OFF  →  represent karta hai  0
```

Agar computer 10 states (decimal ke liye) ya 8 states (octal ke liye) reliably detect karne ki koshish kare, toh galti hone ka chance bahut zyada ho jaata — voltage me chhota sa fluctuation bhi galat digit padh lega. Lekin sirf 2 states (ON/OFF) ko distinguish karna bahut easy aur reliable hai — isiliye har digital circuit, chip, processor **binary** par kaam karta hai.

> Yaad Rakho — Binary electronic hardware ke liye sabse "natural" aur error-proof choice hai — isiliye computer ki asli bhasha binary hi hai, baaki (octal/hex/decimal) sirf insaan ki suvidha ke liye hain.

---

### Decimal → Binary Conversion

**Method: Divide by 2, remainders neeche se upar padho**

```
Convert 13 (decimal) to binary:

13 / 2 = 6   remainder 1   ↑
 6 / 2 = 3   remainder 0   |
 3 / 2 = 1   remainder 1   |  Neeche se upar padho
 1 / 2 = 0   remainder 1   |

Answer: 1101
```

> Example — 13 (decimal) = 1101 (binary). Verify: (1×8) + (1×4) + (0×2) + (1×1) = 8+4+0+1 = 13 ✓

### Binary → Decimal Conversion

Har bit ko uske **positional weight** (2 ki power) se multiply karke jodo:

```
Binary: 1 0 1 1
Weight: 8 4 2 1   (2³ 2² 2¹ 2⁰)

= (1×8) + (0×4) + (1×2) + (1×1)
= 8 + 0 + 2 + 1
= 11 (decimal)
```

---

### Decimal ↔ Octal Conversion

**Decimal → Octal:** Same divide method, par 8 se divide karo.

```
Convert 100 (decimal) to Octal:

100 / 8 = 12   remainder 4   ↑
 12 / 8 = 1    remainder 4   |
  1 / 8 = 0    remainder 1   |

Answer: 144 (octal)
```

**Octal → Decimal:** Har digit ko uski positional weight (8 ki power) se multiply karke jodo.

```
Octal: 1 4 4
Weight: 64 8 1   (8² 8¹ 8⁰)

= (1×64) + (4×8) + (4×1)
= 64 + 32 + 4
= 100 (decimal)
```

---

### Decimal ↔ Hexadecimal Conversion

**Decimal → Hexadecimal:** Same divide method, par 16 se divide karo (remainder 10-15 ko A-F likhna).

```
Convert 26 (decimal) to Hexadecimal:
26 / 16 = 1   remainder 10 → A
 1 / 16 = 0   remainder 1

Answer: 1A (hexadecimal)
```

**Hexadecimal → Decimal:** Har digit ko uski positional weight (16 ki power) se multiply karke jodo.

```
Hex: 1 A
Weight: 16 1   (16¹ 16⁰)

= (1×16) + (10×1)     [A = 10]
= 16 + 10
= 26 (decimal)
```

---

### Binary ↔ Octal Aur Binary ↔ Hex — Shortcut Trick

Direct decimal me jaane ki zaroorat nahi — grouping se seedha convert kar sakte ho:

| Conversion | Method |
|------------|--------|
| Binary → Octal | 3-3 bits ka group banao (right se), har group ko octal digit me convert karo |
| Binary → Hex | 4-4 bits ka group banao (right se), har group ko hex digit me convert karo |
| Octal → Binary | Har octal digit ko uske 3-bit binary equivalent me expand karo |
| Hex → Binary | Har hex digit ko uske 4-bit binary equivalent me expand karo |

```
Binary to Hex:
Binary: 1111 0110
Groups of 4: 1111 | 0110
Hex:            F  |  6
Answer: F6 (hexadecimal)
```

```
Binary to Octal:
Binary: 101 110 (right se 3-3 group, zaroorat pade toh left me 0 laga do)
Groups of 3: 101 | 110
Octal:         5 |   6
Answer: 56 (octal)
```

> Yaad Rakho — Octal ke liye bits ko **3-3** me group karo (kyunki 2³=8), Hex ke liye **4-4** me group karo (kyunki 2⁴=16). Ye shortcut exam me time bachata hai — direct decimal me jaane ki zaroorat nahi.

---

### Octal ↔ Hexadecimal (Via Binary)

Octal aur Hex ke beech direct koi simple divide-trick nahi hai — sabse aasan raasta hai **pehle Binary me convert karo, phir Binary se dusre system me le jao**.

```
Convert Octal 56 to Hexadecimal:

Step 1: Octal 56 → Binary
   5 = 101,  6 = 110
   Binary = 101110

Step 2: Binary 101110 → Hex (group of 4 from right)
   0010 | 1110
     2  |   E

Answer: 2E (hexadecimal)
```

> Tip — Octal↔Hex ka question directly kam poocha jaata hai, par agar aaye toh yehi 2-step (binary bridge) method use karo — confusion nahi hoga.

---

### Binary Addition

Binary addition decimal jaisa hi hai, bas rules simple hain:

```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0   (carry 1 aage)
1 + 1 + 1 = 1  (carry 1 aage, jab pehle se carry ho)
```

**Worked Example — Add 1011 and 1101:**

```
  Carry:   1 1 1
            1 0 1 1
        +   1 1 0 1
        -----------
            1 1 0 0 0
```

Step-by-step (right se left):
1. 1 + 1 = 0, carry 1
2. 1 + 0 + carry(1) = 0, carry 1
3. 0 + 1 + carry(1) = 0, carry 1
4. 1 + 1 + carry(1) = 1, carry 1
5. Carry bacha 1 → aage likh do

Answer: **11000** (binary) = 24 (decimal). Verify: 1011 = 11, 1101 = 13, 11+13 = 24 ✓

---

### 1's Complement Aur 2's Complement — Negative Numbers Represent Karna

Computer me minus sign nahi hota — negative numbers represent karne ke liye complement method use hota hai.

**1's Complement:** Har bit ko ulta (invert) kar do — 0 ko 1, 1 ko 0.

```
Number:        0110 1010
1's Complement: 1001 0101   (sab bits flip)
```

**2's Complement:** 1's complement nikaalo, phir usme **1 add** kar do.

```
Number:        0110 1010
1's Complement: 1001 0101
        + 1  :         1
2's Complement: 1001 0110
```

> Yaad Rakho — **2's Complement** hi asal me computers me negative numbers store karne ka standard tarika hai — kyunki isme sirf ek hi "zero" hota hai (1's complement me +0 aur -0 dono bante hain jo confusion create karta hai).

> Warning — Complement nikalte waqt pehle poore bits invert karo, uske baad hi 1 add karo — order galat kiya toh answer galat aayega.

---

### Quick Reference Table (0-15)

| Decimal | Binary | Octal | Hex |
|---------|--------|-------|-----|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 5 | 0101 | 5 | 5 |
| 8 | 1000 | 10 | 8 |
| 10 | 1010 | 12 | A |
| 15 | 1111 | 17 | F |

> Tip — Exam me conversion ka question aaye toh apna kaam **step-by-step dikhao** (division table ya grouping) — sirf final answer likhne se poore marks nahi milte, examiner method dekhna chahta hai.
