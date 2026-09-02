## Matrices — Types, Operations Aur Properties

### Matrix Kya Hai?

**Matrix** numbers ka ek rectangular arrangement hai, rows aur columns me.

```
       Column1 Column2 Column3
Row1  [  1      2       3   ]
Row2  [  4      5       6   ]

Ye ek 2×3 matrix hai (2 rows, 3 columns)
```

**Order of a Matrix** = (Number of Rows) × (Number of Columns), likha jaata hai `m × n`.

> Socho Aise — Matrix ek "seating arrangement chart" jaisa hai — rows aur columns me numbers arranged hain, exactly jaise class me students rows-columns me baithte hain.

---

### Matrices Ke Types

| Type | Definition | Example |
|------|------------|---------|
| **Row Matrix** | Sirf 1 row | `[1  2  3]` |
| **Column Matrix** | Sirf 1 column | `[1; 2; 3]` |
| **Square Matrix** | Rows = Columns | 3×3, 2×2 |
| **Zero Matrix** | Saare elements 0 | `[0 0; 0 0]` |
| **Identity Matrix (I)** | Diagonal me 1, baaki sab 0 | `[1 0; 0 1]` |
| **Symmetric Matrix** | A = Aᵀ (transpose khud ke barabar) | `[1 2; 2 3]` |
| **Skew-Symmetric Matrix** | Aᵀ = -A, diagonal hamesha 0 | `[0 2; -2 0]` |

> Yaad Rakho — **Identity Matrix** ganit me "1" jaisa kaam karta hai — kisi bhi matrix ko I se multiply karo, wahi matrix wapas milta hai (A × I = A). Isiliye "Identity" naam hai.

---

### Transpose Of A Matrix

Transpose (Aᵀ) matlab rows ko columns bana dena (aur columns ko rows).

```
A = [1  2  3]        Aᵀ = [1  4]
    [4  5  6]              [2  5]
                            [3  6]
```

> Example — 2×3 matrix ka transpose 3×2 ban jaata hai — order palat jaata hai.

---

### Matrix Operations

#### Addition Aur Subtraction

Sirf **same order** ki matrices add/subtract ho sakti hain — corresponding elements ko add/subtract karo:

```
[1  2]   [5  6]   [1+5  2+6]   [6   8]
[3  4] + [7  8] = [3+7  4+8] = [10  12]
```

#### Scalar Multiplication

Matrix ke har element ko ek number (scalar) se multiply karo:

```
2 × [1  2] = [2  4]
    [3  4]   [6  8]
```

#### Matrix Multiplication

Do matrices A (m×n) aur B (n×p) tabhi multiply ho sakti hain jab A ke columns = B ke rows ho. Result matrix ka order hoga m×p.

**Rule:** Row × Column, elements ko multiply karke jodo.

```
[1  2]   [5  6]   [1×5+2×7   1×6+2×8]   [19  22]
[3  4] × [7  8] = [3×5+4×7   3×6+4×8] = [43  50]
```

> Warning — Matrix multiplication **commutative nahi hoti** — matlab A×B ≠ B×A hamesha. Order matter karta hai! Ye ek bahut common exam trick question hai.

---

### Elementary Row Aur Column Operations

Ye operations matrix ko simplify karne ke liye use hote hain (jaise ek row ko dusri row se add/subtract karna, ek row ko constant se multiply karna) — inverse nikalne aur equations solve karne me kaam aate hain.

> Tip — Exam me matrix ka "order" aur "type" identify karna ek common 2-mark question hota hai — pehle rows-columns count karo (order), phir diagonal/symmetry check karke type batao.
