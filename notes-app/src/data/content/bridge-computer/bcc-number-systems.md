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

### Octal Aur Hexadecimal Conversions

**Decimal → Octal:** Same divide method, par 8 se divide karo.
**Decimal → Hexadecimal:** Same divide method, par 16 se divide karo (remainder 10-15 ko A-F likhna).

```
Convert 26 (decimal) to Hexadecimal:
26 / 16 = 1   remainder 10 → A
 1 / 16 = 0   remainder 1

Answer: 1A (hexadecimal)
```

**Binary ↔ Octal/Hex — Shortcut Trick:**

| Conversion | Method |
|------------|--------|
| Binary → Octal | 3-3 bits ka group banao (right se), har group ko octal digit me convert karo |
| Binary → Hex | 4-4 bits ka group banao (right se), har group ko hex digit me convert karo |

```
Binary: 1111 0110
Groups of 4: 1111 | 0110
Hex:            F  |  6
Answer: F6 (hexadecimal)
```

> Yaad Rakho — Octal ke liye bits ko **3-3** me group karo (kyunki 2³=8), Hex ke liye **4-4** me group karo (kyunki 2⁴=16). Ye shortcut exam me time bachata hai — direct decimal me jaane ki zaroorat nahi.

---

### Quick Reference Table (0-15)

| Decimal | Binary | Octal | Hex |
|---------|--------|-------|-----|
| 0 | 0000 | 0 | 0 |
| 5 | 0101 | 5 | 5 |
| 10 | 1010 | 12 | A |
| 15 | 1111 | 17 | F |

> Tip — Exam me conversion ka question aaye toh apna kaam **step-by-step dikhao** (division table ya grouping) — sirf final answer likhne se poore marks nahi milte, examiner method dekhna chahta hai.
