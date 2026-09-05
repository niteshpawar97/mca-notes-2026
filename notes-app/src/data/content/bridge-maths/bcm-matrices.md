## Matrices — Bilkul Shuru Se, Step-by-Step

### Ye Topic Kyu Padhna Zaroori Hai?

Agar tumhe lagta hai "maths mera subject nahi hai", toh tension mat lo — ye chapter bilkul zero se shuru hoga. Koi bhi cheez bina samjhaye nahi likhi jaayegi.

Matrix bas ek **tarika hai numbers ko organize karke rakhne ka** — bilkul waise jaise Excel ki sheet ya kisi table me data rakha jaata hai. MCA me ye cheez baar-baar use hogi (computer graphics, equations solve karna, data storage) — isliye base clear hona bahut zaroori hai. Chalo ekdum shuru se karte hain.

---

### Sabse Pehle — Row Aur Column Samjho

Matrix samajhne se pehle sirf do words samajhne hain — **row** aur **column**. Ye words tumne shayad Excel ya kisi table me suna hoga.

- **Row** = ek **horizontal** (left se right) line of numbers.
- **Column** = ek **vertical** (upar se neeche) line of numbers.

> Socho Aise — Class ka seating socho. Ek **row** matlab ek hi line me baithe saare students (left-right). Ek **column** matlab ek hi line me aage-peeche baithe saare students (front-back). Yehi cheez numbers ke saath hoti hai matrix me.

---

### Matrix Kya Hota Hai?

**Matrix** numbers ka ek rectangular (box jaisa) arrangement hai — rows aur columns me set kiya hua. Bas itna hi hai, aur kuch complicated nahi.

Chalo sabse chhota example lete hain — sirf 2 rows aur 3 columns wala:

$$
\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}
$$

Isko dhyaan se dekho:

- **Row 1** (pehli horizontal line) = $1, 2, 3$
- **Row 2** (doosri horizontal line) = $4, 5, 6$
- **Column 1** (pehli vertical line) = $1, 4$
- **Column 2** (doosri vertical line) = $2, 5$
- **Column 3** (teesri vertical line) = $3, 6$

Bas itna hi — matrix matlab numbers ka ye box. Poori matrix ko usually ek capital letter se naam diya jaata hai, jaise $A$, $B$, ya $M$.

> Question — Neeche di gayi matrix me Row 2 aur Column 1 ke numbers batao:
> $$\begin{bmatrix} 7 & 2 \\ 9 & 4 \\ 1 & 6 \end{bmatrix}$$

**Solution** — Row 2 (doosri horizontal line) = $9, 4$. Column 1 (pehli vertical line) = $7, 9, 1$. Agar tumne ye khud pehle nikaalne ki koshish ki, toh check kar lo apna answer match hua ya nahi.

---

### Order Of A Matrix — Size Batane Ka Tarika

Matrix ka "size" batane ke liye hum count karte hain — kitni rows hain aur kitne columns hain. Isko **Order** kehte hain, aur likhte hain:

$$
\text{Order} = (\text{Number of Rows}) \times (\text{Number of Columns}) = m \times n
$$

**Bahut Important Rule** — Order likhते waqt **hamesha Rows pehle, Columns baad me** likhte hain. Ye order kabhi ulta mat karna, exam me galat count hone ki sabse common wajah yehi hai.

Upar wale example me:

$$
\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}
$$

Rows count karo — 2 hain. Columns count karo — 3 hain. Toh iska order hoga $2 \times 3$ (padha jaata hai "2 by 3").

> Tip — Order nikaalne ka sabse simple tarika: pehle unglee se saari HORIZONTAL lines count karo (rows), fir saari VERTICAL lines count karo (columns). Confuse mat ho — Rows hamesha pehle aati hain.

> Question — Iska order kya hoga?
> $$\begin{bmatrix} 5 & 1 \\ 3 & 8 \\ 0 & 2 \end{bmatrix}$$

**Solution** — Rows count karo: 3 hain (teen horizontal lines). Columns count karo: 2 hain. Toh order = $3 \times 2$.

---

### Matrix Ke Andar Ek-Ek Number Ka "Address" — Elements

Matrix ke andar jo bhi ek-ek number hota hai, use **element** kehte hain. Har element ka apna ek fixed "address" hota hai — kaunsi row me hai aur kaunse column me hai.

Ye address likhne ke liye hum use karte hain $a_{ij}$ — jahan:

- $i$ = **row number** (kaunsi row me hai)
- $j$ = **column number** (kaunse column me hai)

Matlab $a_{23}$ padhne ka matlab hai — "wo element jo **2nd row, 3rd column** me baitha hai". Bas — pehla number hamesha row, doosra number hamesha column.

> Socho Aise — Ye bilkul waise hai jaise kisi cinema hall ki seat "Row D, Seat 5" hoti hai. Ek fixed row aur ek fixed number seat address bata deta hai. Matrix ke element ka bhi apna fixed (row, column) address hota hai.

Chalo ek example se practice karte hain:

$$
A = \begin{bmatrix} 4 & 9 & 2 \\ 7 & 1 & 6 \end{bmatrix}
$$

- $a_{11}$ (Row 1, Column 1) $= 4$
- $a_{12}$ (Row 1, Column 2) $= 9$
- $a_{23}$ (Row 2, Column 3) $= 6$
- $a_{21}$ (Row 2, Column 1) $= 7$

> Question — Upar wali matrix $A$ me $a_{13}$ aur $a_{22}$ kya honge?

**Solution** — $a_{13}$ matlab Row 1, Column 3 $= 2$. $a_{22}$ matlab Row 2, Column 2 $= 1$.

---

### Matrices Ke Basic Types (Easy Wale Pehle)

Ab jab base clear ho gaya hai, chalo matrices ke different naam/types seekhte hain. Ye saare naam matrix ke **shape ya pattern** ke hisaab se diye jaate hain.

| Type | Iska Matlab | Example |
|------|------------|---------|
| **Row Matrix** | Sirf **1 row** hoti hai | $\begin{bmatrix} 1 & 2 & 3 \end{bmatrix}$ |
| **Column Matrix** | Sirf **1 column** hoti hai | $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$ |
| **Square Matrix** | Rows aur Columns **barabar** hain (jaise $2\times2$, $3\times3$) | $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ |
| **Rectangular Matrix** | Rows aur Columns **barabar nahi** hain | $\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$ |
| **Zero (Null) Matrix** | **Saare elements 0** hain | $\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$ |

Naam khud hi apna matlab bata rahe hain — Row Matrix me sirf 1 row, Column Matrix me sirf 1 column, Zero Matrix me sab 0. Yaad karne ki zaroorat nahi, sirf naam padho aur samajh aa jaayega.

> Tip — Square Matrix wala naam isliye hai kyunki jaise ek square (चौकोर) ki sabhi sides barabar hoti hain, waise hi is matrix ki rows aur columns ki count barabar hoti hai.

---

### Transpose — Matrix Ko "Palatna"

Aage badhne se pehle ek naya operation seekhna zaroori hai — **Transpose**. Aage ke kuch special types (Symmetric, Skew-Symmetric) isi par depend karte hain, isliye pehle ye clear kar lete hain.

**Transpose** ka matlab hai — matrix ki **har row ko column bana dena** (aur har column ko row bana dena). Isko likhते hain $A^T$ (A ke upar chhota T).

Chalo step-by-step dekhte hain:

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}
$$

$A$ ki **Row 1** thi $(1, 2, 3)$ — ye ab $A^T$ ka **Column 1** ban jaayega.
$A$ ki **Row 2** thi $(4, 5, 6)$ — ye ab $A^T$ ka **Column 2** ban jaayega.

$$
A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}
$$

Dekho — $A$ ka order tha $2\times3$, aur $A^T$ ka order ban gaya $3\times2$ — **order palat gaya**. Ye har baar hoga: agar $A$ ka order $m\times n$ hai, toh $A^T$ ka order hamesha $n\times m$ hoga.

> Socho Aise — Transpose ko yaad rakhne ka sabse aasan tarika: matrix ko apni ungli se "90 degree ghuma do" jaise koi kaagaz ghumate hain — jo horizontal tha wo vertical ban jaata hai.

**Properties of Transpose** (exam ke liye yaad rakhna):

| Property | Rule |
|----------|------|
| Double transpose | $(A^T)^T = A$ (do baar transpose karo toh wapas original) |
| Transpose of sum | $(A + B)^T = A^T + B^T$ |
| Transpose of scalar multiple | $(kA)^T = kA^T$ |
| Transpose of product | $(AB)^T = B^T A^T$ (order **ulta** ho jaata hai!) |

> Warning — Product ka transpose lete waqt order palat jaata hai — $(AB)^T = B^TA^T$, na ki $A^TB^T$. Exam me ye galti bahut common hai, dhyan se yaad rakho.

---

### Diagonal, Scalar Aur Identity Matrix

Ab jab transpose clear hai, chalo kuch aur special square matrices dekhte hain. Pehle samajh lo — **principal diagonal** kya hoti hai: ye matrix ke top-left corner se bottom-right corner tak ki seedhi line hoti hai (jahan row number = column number, matlab $a_{11}, a_{22}, a_{33}$...).

$$
\begin{bmatrix} \textcolor{#dc2626}{2} & 0 & 1 \\ 3 & \textcolor{#dc2626}{5} & 4 \\ 6 & 7 & \textcolor{#dc2626}{9} \end{bmatrix}
$$

Yahan **highlighted numbers** ($2, 5, 9$ — laal color me) principal diagonal par hain.

Ab teeno types samajho — ek doosre par build hote hain:

**1. Diagonal Matrix** — sirf diagonal ke elements non-zero hote hain, baaki sab 0:

$$\begin{bmatrix} 2 & 0 \\ 0 & 5 \end{bmatrix}$$

**2. Scalar Matrix** — ek special Diagonal Matrix jisme diagonal ke saare elements bhi aapas me barabar hon:

$$\begin{bmatrix} 4 & 0 \\ 0 & 4 \end{bmatrix}$$

**3. Identity Matrix ($I$)** — ek special Scalar Matrix jisme diagonal ke saare elements $1$ hon:

$$\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

> Yaad Rakho — **Identity Matrix** ganit me "1" jaisa kaam karta hai — kisi bhi matrix ko $I$ se multiply karo, wahi matrix wapas milta hai ($A \times I = A$), bilkul jaise $5 \times 1 = 5$. Isiliye "Identity" naam hai. Isi tarah **Zero Matrix** addition me "0" jaisa kaam karta hai ($A + O = A$).

---

### Symmetric Aur Skew-Symmetric Matrix

Ab transpose pata hai, toh ye do types easily samajh aa jaayenge.

**Symmetric Matrix** — jab $A = A^T$, matlab transpose lene ke baad bhi matrix **bilkul same** rahe.

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{bmatrix}
$$

$A^T$ nikaalo (rows ko columns bana do):

$$
A^T = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{bmatrix}
$$

Dekho — $A = A^T$ bilkul same hai! Isliye $A$ **symmetric matrix** hai.

**Skew-Symmetric Matrix** — jab $A^T = -A$ (transpose lene ke baad har element ka sign ulat jaaye). Iska ek seedha result ye hai ki diagonal ke saare elements **hamesha zero** hone chahiye (kyunki $a_{ii} = -a_{ii}$ sirf tab possible hai jab $a_{ii} = 0$).

$$
B = \begin{bmatrix} 0 & 3 & -2 \\ -3 & 0 & 5 \\ 2 & -5 & 0 \end{bmatrix}
\qquad
B^T = \begin{bmatrix} 0 & -3 & 2 \\ 3 & 0 & -5 \\ -2 & 5 & 0 \end{bmatrix}
\qquad
-B = \begin{bmatrix} 0 & -3 & 2 \\ 3 & 0 & -5 \\ -2 & 5 & 0 \end{bmatrix}
$$

Dekho — $B^T = -B$, isliye $B$ **skew-symmetric matrix** hai. Aur diagonal $(0, 0, 0)$ hai — jaisa expect kiya tha.

> Tip — Koi bhi square matrix $A$ ko hamesha ek symmetric aur ek skew-symmetric matrix ke sum me likha ja sakta hai:
>
> $$A = \tfrac{1}{2}(A+A^T) + \tfrac{1}{2}(A-A^T)$$
>
> Ye ek common theory question hai — bas is formula ko yaad rakho.

---

### Matrix Operations — Add, Subtract, Scalar Multiply

#### Addition Aur Subtraction

Sirf **same order** ki matrices add ya subtract ho sakti hain — matlab dono me rows-columns ki count bilkul same honi chahiye. Fir bas **corresponding position** ke elements ko add/subtract kar do (Row 1-Column 1 wale ke saath Row 1-Column 1 wala, aur aage).

$$
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}
$$

**Subtraction bhi bilkul same tarike se:**

$$
\begin{bmatrix} 9 & 3 \\ 6 & 8 \end{bmatrix} - \begin{bmatrix} 4 & 1 \\ 2 & 5 \end{bmatrix} = \begin{bmatrix} 9-4 & 3-1 \\ 6-2 & 8-5 \end{bmatrix} = \begin{bmatrix} 5 & 2 \\ 4 & 3 \end{bmatrix}
$$

> Warning — Agar dono matrices ka order alag hai (jaise ek $2\times2$ aur doosri $2\times3$), toh unko add/subtract **bilkul nahi kar sakte**. Ye pehle hamesha check karo.

#### Scalar Multiplication

Ek "scalar" bas ek simple number hota hai (matrix nahi). Scalar multiplication matlab — matrix ke **har element ko** us number se multiply karo.

$$
2 \times \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 2\times1 & 2\times2 \\ 2\times3 & 2\times4 \end{bmatrix} = \begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}
$$

> Question — $3 \times \begin{bmatrix} 2 & 0 \\ 1 & 5 \end{bmatrix}$ nikaalo.

**Solution** — Har element ko 3 se multiply karo: $\begin{bmatrix} 6 & 0 \\ 3 & 15 \end{bmatrix}$

---

### Matrix Multiplication — Sabse Important, Thoda Dhyan Se Padhna

Ye topic thoda tricky lagta hai shuru me, lekin agar ek-ek step follow karoge toh easy hai.

**Pehla Rule — Kab Multiply Kar Sakte Hain?**

Do matrices $A$ aur $B$ ko multiply karne ke liye ek condition hoti hai: $A$ ke **columns** ki count = $B$ ke **rows** ki count honi chahiye.

$$
A_{(m\times n)} \times B_{(n\times p)} = (AB)_{(m\times p)}
$$

Yahan beech wala $n$ dono me match hona chahiye — tabhi multiplication possible hai. Result matrix ka order hoga bacha hua $m \times p$.

> Socho Aise — Isko socho jaise do gears ka connect hona — pehle gear ke "teeth" (A ke columns) doosre gear ke "teeth" (B ke rows) se match hone chahiye, tabhi dono gear saath ghoom sakte hain. Agar match nahi hua, gear jam ho jaayega — matlab multiplication possible hi nahi.

**Doosra Rule — Kaise Multiply Karein?**

Rule hai: **"Row into Column"** — matlab $A$ ki ek row lo, $B$ ka ek column lo, unke corresponding elements ko multiply karke sabko add kar do. Ye ek number ban jaata hai — wahi result matrix ki ek cell hai.

Chalo ekdum slow motion me ek $2\times2$ example karte hain:

$$
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \qquad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}
$$

**Result ka top-left cell ($AB$ ki Row 1, Column 1) nikalne ke liye:**
$A$ ki **Row 1** lo $(1, 2)$, $B$ ka **Column 1** lo $(5, 7)$. Unko jodkar multiply karo aur add karo:
$$1\times5 + 2\times7 = 5 + 14 = 19$$

**Result ka top-right cell ($AB$ ki Row 1, Column 2) nikalne ke liye:**
$A$ ki **Row 1** lo $(1, 2)$, $B$ ka **Column 2** lo $(6, 8)$:
$$1\times6 + 2\times8 = 6 + 16 = 22$$

**Result ka bottom-left cell ($AB$ ki Row 2, Column 1) nikalne ke liye:**
$A$ ki **Row 2** lo $(3, 4)$, $B$ ka **Column 1** lo $(5, 7)$:
$$3\times5 + 4\times7 = 15 + 28 = 43$$

**Result ka bottom-right cell ($AB$ ki Row 2, Column 2) nikalne ke liye:**
$A$ ki **Row 2** lo $(3, 4)$, $B$ ka **Column 2** lo $(6, 8)$:
$$3\times6 + 4\times8 = 18 + 32 = 50$$

Sab cells jodkar poora answer:

$$
AB = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}
$$

> Tip — Har cell nikaalte waqt khud se bolo: "**Row leta hoon A se, Column leta hoon B se, multiply karke jodo**". Ye line baar-baar repeat karoge toh process automatically yaad ho jaayega.

**Bahut Important — Order Matter Karta Hai!**

Ab same $A$ aur $B$ ke saath ulta karke dekho — $B \times A$:

$$
BA = \begin{bmatrix} 5\times1+6\times3 & 5\times2+6\times4 \\ 7\times1+8\times3 & 7\times2+8\times4 \end{bmatrix} = \begin{bmatrix} 23 & 34 \\ 31 & 46 \end{bmatrix}
$$

Dekho — $AB = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$ jabki $BA = \begin{bmatrix} 23 & 34 \\ 31 & 46 \end{bmatrix}$ — **dono answers alag hain**!

> Warning — Matrix multiplication **commutative nahi hoti** — matlab $AB \neq BA$ hamesha. Numbers ki tarah $3 \times 5 = 5 \times 3$ yahan kaam nahi karta. Ye ek bahut common exam trick question hai.

> Question — $P = \begin{bmatrix} 2 & 0 \\ 1 & 4 \end{bmatrix}$ aur $Q = \begin{bmatrix} 3 & 1 \\ 2 & 5 \end{bmatrix}$ ka $PQ$ nikaalo.

**Solution** — Same "Row into Column" rule use karo:
- Top-left: $2\times3 + 0\times2 = 6$
- Top-right: $2\times1 + 0\times5 = 2$
- Bottom-left: $1\times3 + 4\times2 = 11$
- Bottom-right: $1\times1 + 4\times5 = 21$

$$PQ = \begin{bmatrix} 6 & 2 \\ 11 & 21 \end{bmatrix}$$

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

---

### Elementary Row Aur Column Operations

Ye chhote operations matrix ko simplify karne ke liye use hote hain — jaise ek row ko dusri row se add/subtract karna, ek row ko constant se multiply karna, ya do rows ko interchange karna. Aage chapters me (inverse nikalna, equations solve karna) ye bahut kaam aayenge.

| Operation Type | Notation | Matlab |
|-----------------|----------|--------|
| Row interchange | $R_i \leftrightarrow R_j$ | i-th aur j-th row swap karo |
| Row scaling | $R_i \to kR_i$ | i-th row ko constant $k$ se multiply karo |
| Row addition | $R_i \to R_i + kR_j$ | i-th row me j-th row ka $k$ guna add karo |

Column ke liye bhi bilkul same operations hoti hain, bas $R$ ki jagah $C_i$ use karte hain.

---

### Ab Khud Try Karo — Practice Questions

In sabko pehle khud solve karne ki koshish karo, fir Solution dekho.

> Question — $\begin{bmatrix} 3 & 1 & 5 \\ 0 & 2 & 6 \end{bmatrix}$ ka order kya hai, aur $a_{13}$ kya hoga?

**Solution** — Rows = 2, Columns = 3, toh order $= 2\times3$. $a_{13}$ matlab Row 1, Column 3 $= 5$.

> Question — $\begin{bmatrix} 1 & 7 \\ 7 & 4 \end{bmatrix}$ symmetric hai ya nahi? Kaise pata chalega?

**Solution** — Transpose nikaalo: $\begin{bmatrix} 1 & 7 \\ 7 & 4 \end{bmatrix}$ — same hi aaya. Isliye $A = A^T$, ye **symmetric matrix hai**.

> Question — $\begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix} + \begin{bmatrix} 1 & 5 \\ 6 & 2 \end{bmatrix}$ nikaalo.

**Solution** — Corresponding elements add karo: $\begin{bmatrix} 4+1 & 2+5 \\ 1+6 & 3+2 \end{bmatrix} = \begin{bmatrix} 5 & 7 \\ 7 & 5 \end{bmatrix}$

> Question — $A = \begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix}$ aur $B = \begin{bmatrix} 3 & 4 \\ 1 & 2 \end{bmatrix}$. Pehle check karo $AB$ possible hai ya nahi, fir nikaalo.

**Solution** — $A$ ka order $2\times2$, $B$ ka order $2\times2$ — beech wale numbers match hain ($2=2$), toh multiply ho sakta hai, result $2\times2$ banega.
- Top-left: $1\times3+0\times1 = 3$
- Top-right: $1\times4+0\times2 = 4$
- Bottom-left: $2\times3+1\times1 = 7$
- Bottom-right: $2\times4+1\times2 = 10$

$$AB = \begin{bmatrix} 3 & 4 \\ 7 & 10 \end{bmatrix}$$

> Tip — Exam me matrix ka "order" aur "type" identify karna ek common 2-mark question hota hai — pehle rows-columns count karo (order), phir diagonal/symmetry check karke type batao. Aur agar addition/multiplication ki property poochi jaaye, seedha yaad rakho: **Addition sab kuch follow karta hai, Multiplication commutative nahi hai.**
