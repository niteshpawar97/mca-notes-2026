## Matrices — Types, Operations Aur Properties

### Matrix Kya Hai?

**Matrix** numbers ka ek rectangular arrangement hai, rows aur columns me.

$$
\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}
$$

Ye ek $2 \times 3$ matrix hai (2 rows, 3 columns).

**Order of a Matrix** = (Number of Rows) × (Number of Columns), likha jaata hai $m \times n$.

Matrix ke andar har number ko **element** kehte hain, aur usko $a_{ij}$ se denote karte hain — jahan $i$ row number hai aur $j$ column number hai. Matlab $a_{23}$ us element ko refer karta hai jo **2nd row, 3rd column** me baitha hai.

> Socho Aise — Matrix ek "seating arrangement chart" jaisa hai — rows aur columns me numbers arranged hain, exactly jaise class me students rows-columns me baithte hain. Har student ka apna fixed roll number hai (row, column) — waise hi har element ka apna fixed address hai.

---

### Matrices Ke Types

| Type | Definition | Example |
|------|------------|---------|
| **Row Matrix** | Sirf 1 row | $\begin{bmatrix} 1 & 2 & 3 \end{bmatrix}$ |
| **Column Matrix** | Sirf 1 column | $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$ |
| **Square Matrix** | Rows = Columns | $3\times3$, $2\times2$ |
| **Rectangular Matrix** | Rows ≠ Columns | $2\times3$, $4\times2$ |
| **Zero (Null) Matrix** | Saare elements 0 | $\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$ |
| **Diagonal Matrix** | Sirf principal diagonal ke elements non-zero, baaki sab 0 | $\begin{bmatrix} 2 & 0 \\ 0 & 5 \end{bmatrix}$ |
| **Scalar Matrix** | Diagonal matrix jisme saare diagonal elements barabar hon | $\begin{bmatrix} 4 & 0 \\ 0 & 4 \end{bmatrix}$ |
| **Identity Matrix (I)** | Diagonal me 1, baaki sab 0 | $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ |
| **Symmetric Matrix** | $A = A^T$ (transpose khud ke barabar) | $\begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}$ |
| **Skew-Symmetric Matrix** | $A^T = -A$, diagonal hamesha 0 | $\begin{bmatrix} 0 & 2 \\ -2 & 0 \end{bmatrix}$ |

> Yaad Rakho — **Identity Matrix** ganit me "1" jaisa kaam karta hai — kisi bhi matrix ko $I$ se multiply karo, wahi matrix wapas milta hai ($A \times I = A$). Isiliye "Identity" naam hai. Isi tarah **Zero Matrix**, addition me "0" jaisa kaam karta hai ($A + O = A$).

---

### Symmetric Aur Skew-Symmetric Matrix — Worked Example

Ek matrix **symmetric** hoti hai agar $A = A^T$ — matlab $(i,j)$ position ka element $(j,i)$ position ke element ke barabar ho.

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{bmatrix}
$$

$A^T$ nikaalo (rows ko columns bana do):

$$
A^T = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{bmatrix}
$$

Dekho — $A = A^T$ bilkul same hai! Isliye $A$ symmetric matrix hai.

Ek matrix **skew-symmetric** hoti hai agar $A^T = -A$ — aur is condition ka seedha result ye hai ki diagonal ke saare elements **hamesha zero** hone chahiye (kyunki $a_{ii} = -a_{ii}$ sirf tab possible hai jab $a_{ii} = 0$).

$$
B = \begin{bmatrix} 0 & 3 & -2 \\ -3 & 0 & 5 \\ 2 & -5 & 0 \end{bmatrix}
\qquad
B^T = \begin{bmatrix} 0 & -3 & 2 \\ 3 & 0 & -5 \\ -2 & 5 & 0 \end{bmatrix}
\qquad
-B = \begin{bmatrix} 0 & -3 & 2 \\ 3 & 0 & -5 \\ -2 & 5 & 0 \end{bmatrix}
$$

Dekho — $B^T = -B$, isliye $B$ skew-symmetric matrix hai. Aur diagonal $(0, 0, 0)$ hai — jaisa expect kiya tha.

> Tip — Koi bhi square matrix $A$ ko hamesha ek symmetric aur ek skew-symmetric matrix ke sum me likha ja sakta hai:
>
> $$A = \tfrac{1}{2}(A+A^T) + \tfrac{1}{2}(A-A^T)$$
>
> Ye ek common theory question hai.

---

### Transpose Of A Matrix

Transpose ($A^T$) matlab rows ko columns bana dena (aur columns ko rows) — pehli row pehla column ban jaata hai, doosri row doosra column, aur aage.

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}
\qquad\longrightarrow\qquad
A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}
$$

> Example — $2\times3$ matrix ka transpose $3\times2$ ban jaata hai — order palat jaata hai. Ek $m\times n$ matrix ka transpose hamesha $n\times m$ order ka hota hai.

**Worked Example — 3×2 Matrix Ka Transpose:**

$$
A = \begin{bmatrix} 2 & 5 \\ 7 & 1 \\ 4 & 9 \end{bmatrix} \quad (3\times2 \text{ matrix})
$$

Transpose lene ke liye $A$ ke columns ko $A^T$ ki rows bana do:

$$
A^T = \begin{bmatrix} 2 & 7 & 4 \\ 5 & 1 & 9 \end{bmatrix} \quad (\text{ab ye } 2\times3 \text{ matrix ban gaya})
$$

**Properties Of Transpose:**

| Property | Rule |
|----------|------|
| Double transpose | $(A^T)^T = A$ |
| Transpose of sum | $(A + B)^T = A^T + B^T$ |
| Transpose of scalar multiple | $(kA)^T = kA^T$ |
| Transpose of product | $(AB)^T = B^T A^T$ (order **ulta** ho jaata hai!) |

> Warning — Product ka transpose lete waqt order palat jaata hai — $(AB)^T = B^TA^T$, na ki $A^TB^T$. Exam me ye galti bahut common hai.

---

### Matrix Operations

#### Addition Aur Subtraction

Sirf **same order** ki matrices add/subtract ho sakti hain — corresponding elements ko add/subtract karo:

$$
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}
$$

**Doosra Example (Subtraction):**

$$
\begin{bmatrix} 9 & 3 \\ 6 & 8 \end{bmatrix} - \begin{bmatrix} 4 & 1 \\ 2 & 5 \end{bmatrix} = \begin{bmatrix} 9-4 & 3-1 \\ 6-2 & 8-5 \end{bmatrix} = \begin{bmatrix} 5 & 2 \\ 4 & 3 \end{bmatrix}
$$

#### Scalar Multiplication

Matrix ke har element ko ek number (scalar) se multiply karo:

$$
2 \times \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}
$$

---

### Addition Vs Multiplication — Kaunse Properties Hold Karti Hain?

Ye exam ke liye ek bahut important comparison hai — Matrix Addition aur Matrix Multiplication alag-alag properties follow karte hain:

| Property | Addition | Multiplication |
|----------|----------|-----------------|
| **Commutative** ($A \circ B = B \circ A$) | ✅ Haan, $A + B = B + A$ hamesha | ❌ Nahi, $AB \neq BA$ generally |
| **Associative** ($(A \circ B) \circ C = A \circ (B \circ C)$) | ✅ Haan | ✅ Haan, $A(BC) = (AB)C$ |
| **Distributive over dusra operation** | — | ✅ Haan, $A(B+C) = AB + AC$ |
| **Identity element exist karta hai** | ✅ Zero matrix ($O$) | ✅ Identity matrix ($I$) |
| **Inverse hamesha exist karta hai** | ✅ Haan, $-A$ hamesha exist karta hai | ❌ Nahi, sirf non-singular square matrices ke liye |

> Yaad Rakho — Addition "friendly" operation hai — sab kuch commute karta hai. Multiplication "strict" hai — **order matter karta hai**. Ye difference exam me bahut poocha jaata hai.

#### Matrix Multiplication

Do matrices $A$ ($m\times n$) aur $B$ ($n\times p$) tabhi multiply ho sakti hain jab $A$ ke columns = $B$ ke rows ho. Result matrix ka order hoga $m\times p$.

**Rule:** Row × Column, elements ko multiply karke jodo.

$$
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \times \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1\times5+2\times7 & 1\times6+2\times8 \\ 3\times5+4\times7 & 3\times6+4\times8 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}
$$

**Proof Ki Multiplication Commutative Nahi Hai — Same Numbers Se A×B Aur B×A Nikaalo:**

$$
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \qquad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}
$$

$A \times B$ (upar wala answer):

$$
AB = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}
$$

Ab $B \times A$ nikaalo:

$$
BA = \begin{bmatrix} 5\times1+6\times3 & 5\times2+6\times4 \\ 7\times1+8\times3 & 7\times2+8\times4 \end{bmatrix} = \begin{bmatrix} 23 & 34 \\ 31 & 46 \end{bmatrix}
$$

Dekho — $AB = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$ jabki $BA = \begin{bmatrix} 23 & 34 \\ 31 & 46 \end{bmatrix}$ — dono answers alag hain! Isliye $AB \neq BA$ — matrix multiplication commutative NAHI hai.

> Warning — Matrix multiplication **commutative nahi hoti** — matlab $AB \neq BA$ hamesha. Order matter karta hai! Ye ek bahut common exam trick question hai — upar wala example khud solve karke dekh lo.

**Teesra Example — 2×2 Aur 2×2 Multiplication (Alag Numbers):**

$$
P = \begin{bmatrix} 2 & 0 \\ 1 & 4 \end{bmatrix} \qquad Q = \begin{bmatrix} 3 & 1 \\ 2 & 5 \end{bmatrix}
$$

$$
PQ = \begin{bmatrix} 2\times3+0\times2 & 2\times1+0\times5 \\ 1\times3+4\times2 & 1\times1+4\times5 \end{bmatrix} = \begin{bmatrix} 6 & 2 \\ 11 & 21 \end{bmatrix}
$$

> Socho Aise — Matrix multiplication me "row × column, add karo" rule ko yaad rakhne ka easy tarika: apni left haath ki row ko right haath ke column ke upar "chalao", jaise-jaise multiply karte jao waise-waise jodte jao.

---

### Elementary Row Aur Column Operations

Ye operations matrix ko simplify karne ke liye use hote hain (jaise ek row ko dusri row se add/subtract karna, ek row ko constant se multiply karna, do rows ko interchange karna) — inverse nikalne aur equations solve karne me kaam aate hain.

| Operation Type | Notation | Matlab |
|-----------------|----------|--------|
| Row interchange | $R_i \leftrightarrow R_j$ | i-th aur j-th row swap karo |
| Row scaling | $R_i \to kR_i$ | i-th row ko constant $k$ se multiply karo |
| Row addition | $R_i \to R_i + kR_j$ | i-th row me j-th row ka $k$ guna add karo |

Column ke liye bhi same operations hoti hain ($C_i$ use karke).

> Tip — Exam me matrix ka "order" aur "type" identify karna ek common 2-mark question hota hai — pehle rows-columns count karo (order), phir diagonal/symmetry check karke type batao. Aur agar addition/multiplication ki property poochi jaaye, seedha yaad rakho: **Addition sab kuch follow karta hai, Multiplication commutative nahi hai.**
