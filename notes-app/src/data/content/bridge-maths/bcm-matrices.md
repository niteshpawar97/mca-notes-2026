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

Matrix ke andar har number ko **element** kehte hain, aur usko `aᵢⱼ` se denote karte hain — jahan `i` row number hai aur `j` column number hai. Matlab `a23` us element ko refer karta hai jo **2nd row, 3rd column** me baitha hai.

> Socho Aise — Matrix ek "seating arrangement chart" jaisa hai — rows aur columns me numbers arranged hain, exactly jaise class me students rows-columns me baithte hain. Har student ka apna fixed roll number hai (row, column) — waise hi har element ka apna fixed address hai.

---

### Matrices Ke Types

| Type | Definition | Example |
|------|------------|---------|
| **Row Matrix** | Sirf 1 row | `[1  2  3]` |
| **Column Matrix** | Sirf 1 column | `[1; 2; 3]` |
| **Square Matrix** | Rows = Columns | 3×3, 2×2 |
| **Rectangular Matrix** | Rows ≠ Columns | 2×3, 4×2 |
| **Zero (Null) Matrix** | Saare elements 0 | `[0 0; 0 0]` |
| **Diagonal Matrix** | Sirf principal diagonal ke elements non-zero, baaki sab 0 | `[2 0; 0 5]` |
| **Scalar Matrix** | Diagonal matrix jisme saare diagonal elements barabar hon | `[4 0; 0 4]` |
| **Identity Matrix (I)** | Diagonal me 1, baaki sab 0 | `[1 0; 0 1]` |
| **Symmetric Matrix** | A = Aᵀ (transpose khud ke barabar) | `[1 2; 2 3]` |
| **Skew-Symmetric Matrix** | Aᵀ = -A, diagonal hamesha 0 | `[0 2; -2 0]` |

> Yaad Rakho — **Identity Matrix** ganit me "1" jaisa kaam karta hai — kisi bhi matrix ko I se multiply karo, wahi matrix wapas milta hai (A × I = A). Isiliye "Identity" naam hai. Isi tarah **Zero Matrix**, addition me "0" jaisa kaam karta hai (A + O = A).

---

### Symmetric Aur Skew-Symmetric Matrix — Worked Example

Ek matrix **symmetric** hoti hai agar `A = Aᵀ` — matlab (i,j) position ka element (j,i) position ke element ke barabar ho.

```
A = [1  2  3]
    [2  4  5]
    [3  5  6]

Aᵀ nikaalo (rows ko columns bana do):
Aᵀ = [1  2  3]
     [2  4  5]
     [3  5  6]

Dekho — A = Aᵀ bilkul same hai! Isliye A symmetric matrix hai.
```

Ek matrix **skew-symmetric** hoti hai agar `Aᵀ = -A` — aur is condition ka seedha result ye hai ki diagonal ke saare elements **hamesha zero** hone chahiye (kyunki `aᵢᵢ = -aᵢᵢ` sirf tab possible hai jab `aᵢᵢ = 0`).

```
B = [ 0   3  -2]
    [-3   0   5]
    [ 2  -5   0]

Bᵀ = [ 0  -3   2]
     [ 3   0  -5]
     [-2   5   0]

-B  = [ 0  -3   2]
      [ 3   0  -5]
      [-2   5   0]

Dekho — Bᵀ = -B, isliye B skew-symmetric matrix hai. Aur diagonal (0, 0, 0) hai — jaisa expect kiya tha.
```

> Tip — Koi bhi square matrix A ko hamesha ek symmetric aur ek skew-symmetric matrix ke sum me likha ja sakta hai: `A = ½(A+Aᵀ) + ½(A-Aᵀ)`. Ye ek common theory question hai.

---

### Transpose Of A Matrix

Transpose (Aᵀ) matlab rows ko columns bana dena (aur columns ko rows) — pehli row pehla column ban jaata hai, doosri row doosra column, aur aage.

```
A = [1  2  3]        Aᵀ = [1  4]
    [4  5  6]              [2  5]
                            [3  6]
```

> Example — 2×3 matrix ka transpose 3×2 ban jaata hai — order palat jaata hai. Ek m×n matrix ka transpose hamesha n×m order ka hota hai.

**Worked Example — 3×2 Matrix Ka Transpose:**

```
A = [2   5]
    [7   1]
    [4   9]     (3×2 matrix)

Transpose lene ke liye A ke columns ko Aᵀ ki rows bana do:
Aᵀ = [2   7   4]
     [5   1   9]     (ab ye 2×3 matrix ban gaya)
```

**Properties Of Transpose:**

| Property | Rule |
|----------|------|
| Double transpose | `(Aᵀ)ᵀ = A` |
| Transpose of sum | `(A + B)ᵀ = Aᵀ + Bᵀ` |
| Transpose of scalar multiple | `(kA)ᵀ = k Aᵀ` |
| Transpose of product | `(AB)ᵀ = Bᵀ Aᵀ` (order **ulta** ho jaata hai!) |

> Warning — Product ka transpose lete waqt order palat jaata hai — `(AB)ᵀ = BᵀAᵀ`, na ki `AᵀBᵀ`. Exam me ye galti bahut common hai.

---

### Matrix Operations

#### Addition Aur Subtraction

Sirf **same order** ki matrices add/subtract ho sakti hain — corresponding elements ko add/subtract karo:

```
[1  2]   [5  6]   [1+5  2+6]   [6   8]
[3  4] + [7  8] = [3+7  4+8] = [10  12]
```

**Doosra Example (Subtraction):**

```
[9  3]   [4  1]   [9-4  3-1]   [5  2]
[6  8] - [2  5] = [6-2  8-5] = [4  3]
```

#### Scalar Multiplication

Matrix ke har element ko ek number (scalar) se multiply karo:

```
2 × [1  2] = [2  4]
    [3  4]   [6  8]
```

---

### Addition Vs Multiplication — Kaunse Properties Hold Karti Hain?

Ye exam ke liye ek bahut important comparison hai — Matrix Addition aur Matrix Multiplication alag-alag properties follow karte hain:

| Property | Addition | Multiplication |
|----------|----------|-----------------|
| **Commutative** (A ∘ B = B ∘ A) | ✅ Haan, A + B = B + A hamesha | ❌ Nahi, AB ≠ BA generally |
| **Associative** ((A ∘ B) ∘ C = A ∘ (B ∘ C)) | ✅ Haan | ✅ Haan, A(BC) = (AB)C |
| **Distributive over dusra operation** | — | ✅ Haan, A(B+C) = AB + AC |
| **Identity element exist karta hai** | ✅ Zero matrix (O) | ✅ Identity matrix (I) |
| **Inverse hamesha exist karta hai** | ✅ Haan, -A hamesha exist karta hai | ❌ Nahi, sirf non-singular square matrices ke liye |

> Yaad Rakho — Addition "friendly" operation hai — sab kuch commute karta hai. Multiplication "strict" hai — **order matter karta hai**. Ye difference exam me bahut poocha jaata hai.

#### Matrix Multiplication

Do matrices A (m×n) aur B (n×p) tabhi multiply ho sakti hain jab A ke columns = B ke rows ho. Result matrix ka order hoga m×p.

**Rule:** Row × Column, elements ko multiply karke jodo.

```
[1  2]   [5  6]   [1×5+2×7   1×6+2×8]   [19  22]
[3  4] × [7  8] = [3×5+4×7   3×6+4×8] = [43  50]
```

**Proof Ki Multiplication Commutative Nahi Hai — Same Numbers Se A×B Aur B×A Nikaalo:**

```
A = [1  2]        B = [5  6]
    [3  4]            [7  8]

A×B (upar wala answer): [19  22]
                         [43  50]

Ab B×A nikaalo:
B×A = [5×1+6×3   5×2+6×4]   [23  34]
      [7×1+8×3   7×2+8×4] = [31  46]

Dekho — A×B = [19 22; 43 50]  jabki  B×A = [23 34; 31 46]
Dono answers alag hain! Isliye A×B ≠ B×A — matrix multiplication commutative NAHI hai.
```

> Warning — Matrix multiplication **commutative nahi hoti** — matlab A×B ≠ B×A hamesha. Order matter karta hai! Ye ek bahut common exam trick question hai — upar wala example khud solve karke dekh lo.

**Teesra Example — 2×2 Aur 2×2 Multiplication (Alag Numbers):**

```
P = [2  0]        Q = [3  1]
    [1  4]            [2  5]

P×Q = [2×3+0×2   2×1+0×5]   [6   2]
      [1×3+4×2   1×1+4×5] = [11  21]
```

> Socho Aise — Matrix multiplication me "row × column, add karo" rule ko yaad rakhne ka easy tarika: apni left haath ki row ko right haath ke column ke upar "chalao", jaise-jaise multiply karte jao waise-waise jodte jao.

---

### Elementary Row Aur Column Operations

Ye operations matrix ko simplify karne ke liye use hote hain (jaise ek row ko dusri row se add/subtract karna, ek row ko constant se multiply karna, do rows ko interchange karna) — inverse nikalne aur equations solve karne me kaam aate hain.

| Operation Type | Notation | Matlab |
|-----------------|----------|--------|
| Row interchange | `Rᵢ ↔ Rⱼ` | i-th aur j-th row swap karo |
| Row scaling | `Rᵢ → kRᵢ` | i-th row ko constant k se multiply karo |
| Row addition | `Rᵢ → Rᵢ + kRⱼ` | i-th row me j-th row ka k guna add karo |

Column ke liye bhi same operations hoti hain (`Cᵢ` use karke).

> Tip — Exam me matrix ka "order" aur "type" identify karna ek common 2-mark question hota hai — pehle rows-columns count karo (order), phir diagonal/symmetry check karke type batao. Aur agar addition/multiplication ki property poochi jaaye, seedha yaad rakho: **Addition sab kuch follow karta hai, Multiplication commutative nahi hai.**
