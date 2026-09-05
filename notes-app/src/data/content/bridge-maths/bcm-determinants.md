## Determinants, Adjoint, Inverse Aur System Of Linear Equations

### Determinant Kya Hai Aur Kyu Zaroori Hai?

**Determinant** ek **square matrix** se juda ek single number hota hai. Bas ek number — poori matrix ko squeeze karke ek number bana diya jaata hai, jo us matrix ke baare me kuch important batata hai (jaise: kya is matrix ka inverse exist karta hai, kya iske corresponding equations ka koi unique solution hai).

Likha jaata hai $|A|$ ya $\det(A)$. Sirf **square matrices** ka determinant define hota hai — rectangular matrix ($2\times3$ jaisi) ka determinant exist hi nahi karta, ye pehle hi clear kar lo.

> Socho Aise — Determinant ko matrix ki ek "fingerprint" ki tarah socho — ye ek hi number matrix ke bahut saare important behaviours bata deta hai, bina poori matrix dekhe.

---

### 2×2 Matrix Ka Determinant

$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \qquad |A| = ad - bc
$$

Isko yaad rakhne ka aasan tarika — **"crisscross" (X shape) multiply karo**:

- Diagonal **neeche ki taraf** ($a$ se $d$) multiply karo → $ad$
- Diagonal **upar ki taraf** ($b$ se $c$) multiply karo → $bc$
- Pehle wale me se doosra **ghata do** → $ad - bc$

> Socho Aise — Ek X banao matrix ke upar. Jo diagonal upar-left se neeche-right jaati hai ($a \to d$) uska product **plus** hoga, jo diagonal upar-right se neeche-left jaati hai ($b \to c$) uska product **minus** hoga.

> Example — $A = \begin{bmatrix} 3 & 4 \\ 2 & 6 \end{bmatrix}$ ka determinant: $(3\times6) - (4\times2) = 18 - 8 = \mathbf{10}$

> Question — $\begin{bmatrix} 5 & 2 \\ 3 & 4 \end{bmatrix}$ ka determinant nikaalo.

**Solution** — $(5\times4) - (2\times3) = 20 - 6 = 14$

---

### Minor Kya Hota Hai?

3×3 matrix ka determinant nikaalne se pehle ek naya word samajhna zaroori hai — **Minor**. Bina ye samjhe, 3×3 determinant ka formula sirf "yaad karne wali cheez" lagega — samajhne wali cheez nahi.

**Minor** ($M_{ij}$) matlab — kisi bhi element ki **puri row aur puri column ko hata do**, jo bacha wo ek chhota matrix hai. Us chhote matrix ka determinant hi us element ka Minor hai.

Chalo dekhte hain:

$$
A = \begin{bmatrix} 2 & 3 & 1 \\ 1 & 0 & 2 \\ 4 & 1 & 3 \end{bmatrix}
$$

Element $a_{11} = 2$ ka Minor $M_{11}$ nikalna hai — toh **Row 1 aur Column 1 hata do**:

$$
\begin{bmatrix} \cancel{2} & \cancel{3} & \cancel{1} \\ \cancel{1} & 0 & 2 \\ \cancel{4} & 1 & 3 \end{bmatrix} \quad\longrightarrow\quad \text{bacha} \quad \begin{bmatrix} 0 & 2 \\ 1 & 3 \end{bmatrix}
$$

Ab is bache hue $2\times2$ matrix ka determinant nikaalo (crisscross rule se):

$$
M_{11} = (0\times3) - (2\times1) = 0 - 2 = -2
$$

> Socho Aise — Minor nikalna bilkul waise hai jaise ek Excel sheet me se ek row aur ek column delete kar do, aur jo bacha wo dekho.

---

### Cofactor Kya Hota Hai?

**Cofactor** ($C_{ij}$) bas Minor hi hai, sirf ek **sign attach** hota hai us par:

$$
C_{ij} = (-1)^{i+j} \times M_{ij}
$$

Sign pattern yaad rakhne ke liye ye chart bana lo (chessboard jaisa alternate pattern):

$$
\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}
$$

Matlab: top-left se shuru karo (**+**), fir alternate karte jao — right ya neeche jaate waqt sign palatta rehta hai.

> Tip — $(-1)^{i+j}$ yaad rakhne ki zaroorat nahi — bas upar wala **+ − + / − + − / + − +** chart yaad rakho, aur position dekh kar seedha sign utha lo.

---

### 3×3 Matrix Ka Determinant (Ab Minors Aur Cofactors Pata Hain)

Ab jo formula pehle "magic" lagta tha, wo clear ho jaayega:

$$
A = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}
$$

$$
|A| = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

Ye formula asal me ye keh raha hai: **"Row 1 ka har element × uska Minor, sign ke saath jodo"**:

- $a$ ka Minor hai $(ei-fh)$, sign **+**
- $b$ ka Minor hai $(di-fg)$, sign **−**
- $c$ ka Minor hai $(dh-eg)$, sign **+**

Isi ko "**expansion along Row 1**" kehte hain — Row 1 ke teeno elements le kar, unke Minors se multiply karke, sign ke saath jod diya.

**Poora Worked Example — Step-By-Step:**

$$
A = \begin{bmatrix} 2 & 3 & 1 \\ 1 & 0 & 2 \\ 4 & 1 & 3 \end{bmatrix}
$$

**Step 1** — Row 1 ke teeno elements lo: $2, 3, 1$

**Step 2** — Har ek ka Minor nikaalo (uski row-column hataakar bache $2\times2$ ka determinant):

$$
M_{11} = \begin{vmatrix} 0 & 2 \\ 1 & 3 \end{vmatrix} = 0-2 = -2 \qquad M_{12} = \begin{vmatrix} 1 & 2 \\ 4 & 3 \end{vmatrix} = 3-8 = -5 \qquad M_{13} = \begin{vmatrix} 1 & 0 \\ 4 & 1 \end{vmatrix} = 1-0 = 1
$$

**Step 3** — Sign pattern lagao (+, −, +) aur elements se multiply karke jodo:

$$
|A| = 2(-2) - 3(-5) + 1(1) = -4 + 15 + 1 = 12
$$

> Tip — Hamesha wo row ya column expand karo jisme sabse zyada zeros hon — un terms ka poora contribution zero ho jaata hai, calculation kaafi kam ho jaata hai.

> Question — $B = \begin{bmatrix} 1 & 4 & 2 \\ 3 & 1 & 0 \\ 2 & 5 & 1 \end{bmatrix}$ ka determinant nikaalo (Row 1 se expand karke).

**Solution** — Row 1 ke elements $1, 4, 2$, aur unke Minors:
$M_{11} = (1\times1-0\times5) = 1$, $M_{12} = (3\times1-0\times2) = 3$, $M_{13} = (3\times5-1\times2) = 13$

$$
|B| = 1(1) - 4(3) + 2(13) = 1 - 12 + 26 = 15
$$

---

### Properties Of Determinants

Ye properties calculation shortcuts hain — samajh lo toh bahut saare questions jaldi solve ho jaate hain:

| Property | Matlab |
|----------|--------|
| Row/Column swap karo | Determinant ka sign badal jaata hai |
| Do rows/columns same hon | Determinant = 0 |
| Ek row ko constant $k$ se multiply karo | Poora determinant $k$ se multiply hota hai |
| Row/column me sab zero ho | Determinant = 0 |
| Determinant of transpose | $\lvert A^T \rvert = \lvert A \rvert$ (transpose lene se determinant nahi badalta) |
| Determinant of product | $\lvert AB \rvert = \lvert A \rvert \times \lvert B \rvert$ |
| Ek row me dusri row ka multiple add karna | Determinant **nahi** badalta |

> Socho Aise — Agar do rows identical hain, determinant zero ho jaata hai — jaise do bilkul same cheezon ke beech koi "unique area/volume" nahi bachta, sab overlap ho jaata hai.

**Worked Example — Row Swap Se Sign Badalna:**

$$
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \qquad |A| = (1\times4)-(2\times3) = 4-6 = -2
$$

Ab $R_1$ aur $R_2$ ko swap karo:

$$
B = \begin{bmatrix} 3 & 4 \\ 1 & 2 \end{bmatrix} \qquad |B| = (3\times2)-(4\times1) = 6-4 = 2
$$

Dekho — $|A| = -2$ aur $|B| = +2$ — sirf sign palat gaya, magnitude same rahi.

---

### Adjoint Aur Inverse Of A Matrix

**Adjoint** ($\text{adj}\,A$) = Cofactor matrix ka transpose (har element ka cofactor nikaalo, phir poori Cofactor matrix ka transpose lo — transpose Unit 1 me seekha tha, yaad karo: rows ko columns bana dena).

**Inverse Formula:**

$$
A^{-1} = \frac{\text{adj}(A)}{|A|}
$$

> Warning — Agar $|A| = 0$ (determinant zero), toh matrix **invertible nahi hai** — uska koi inverse exist nahi karta (formula me zero se divide karna padega, jo possible nahi)! Aise matrix ko "singular matrix" kehte hain.

**Worked Example — 2×2 Matrix Ka Adjoint Aur Inverse (Poora Step-By-Step):**

$$
A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}
$$

**Step 1 — Determinant nikaalo:**

$$
|A| = (4\times6) - (7\times2) = 24 - 14 = 10
$$

$|A| \neq 0$, toh inverse exist karta hai — aage badho.

**Step 2 — Cofactors nikaalo** ($2\times2$ ke liye ek simple trick hai, poora Minor-Cofactor process karne ki zaroorat nahi):

$$
C_{11} = +d = 6 \qquad C_{12} = -c = -2 \qquad C_{21} = -b = -7 \qquad C_{22} = +a = 4
$$

$$
\text{Cofactor Matrix} = \begin{bmatrix} 6 & -2 \\ -7 & 4 \end{bmatrix}
$$

**Step 3 — Adjoint = Cofactor matrix ka transpose:**

$$
\text{adj}(A) = \begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix}
$$

**Step 4 — Inverse = adj(A) ÷ |A|** (poore matrix ke har element ko $|A|$ se divide karo):

$$
A^{-1} = \frac{1}{10}\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}
$$

> Tip — $2\times2$ matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ ka inverse seedha yaad rakh sakte ho: diagonal elements ($a,d$) swap karo, off-diagonal elements ($b,c$) ka sign badlo, phir poore matrix ko $\frac{1}{|A|}$ se multiply karo. Isse Step 2-3 skip ho jaate hain — sirf $2\times2$ ke liye kaam karta hai.

> Question — $A = \begin{bmatrix} 3 & 1 \\ 2 & 4 \end{bmatrix}$ ka inverse nikaalo.

**Solution** — $|A| = (3\times4)-(1\times2) = 12-2 = 10$. Diagonal swap + sign badlo: $\begin{bmatrix} 4 & -1 \\ -2 & 3 \end{bmatrix}$. Ab $\frac{1}{10}$ se multiply karo:

$$
A^{-1} = \begin{bmatrix} 0.4 & -0.1 \\ -0.2 & 0.3 \end{bmatrix}
$$

---

### System Of Linear Equations — Matrix Inverse Se Solve Karna

Kisi bhi do-variable (ya teen-variable) equations ko matrix form $AX = B$ me likha ja sakta hai — jahan $A$ coefficients ka matrix hai, $X$ unknowns ($x, y$) ka column, aur $B$ right-side ke numbers ka column.

Agar $A^{-1}$ exist karta hai, toh dono side $A^{-1}$ se multiply karo:

$$
AX = B \quad\Rightarrow\quad A^{-1}AX = A^{-1}B \quad\Rightarrow\quad X = A^{-1}B
$$

(kyunki $A^{-1}A = I$, aur $IX = X$)

**Poora Worked Example — Start Se Finish Tak:**

Solve karna hai: $x + y = 5$, $\quad 2x - y = 1$

**Step 1 — $AX = B$ form me likho:**

$$
A = \begin{bmatrix} 1 & 1 \\ 2 & -1 \end{bmatrix} \qquad X = \begin{bmatrix} x \\ y \end{bmatrix} \qquad B = \begin{bmatrix} 5 \\ 1 \end{bmatrix}
$$

**Step 2 — $|A|$ nikaalo:**

$$
|A| = (1\times-1) - (1\times2) = -1 - 2 = -3
$$

Kyunki $|A| \neq 0$, unique solution exist karta hai — inverse method use kar sakte hain.

**Step 3 — Inverse nikaalo** (2×2 trick use karke: diagonal swap, off-diagonal sign badlo):

$$
A^{-1} = \frac{1}{-3}\begin{bmatrix} -1 & -1 \\ -2 & 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{3} & \frac{1}{3} \\[4pt] \frac{2}{3} & -\frac{1}{3} \end{bmatrix}
$$

**Step 4 — $X = A^{-1}B$ (matrix multiplication use karo, Unit 1 wala "Row into Column" rule):**

$$
X = \begin{bmatrix} \frac{1}{3} & \frac{1}{3} \\[4pt] \frac{2}{3} & -\frac{1}{3} \end{bmatrix} \begin{bmatrix} 5 \\ 1 \end{bmatrix} = \begin{bmatrix} \frac{5}{3}+\frac{1}{3} \\[4pt] \frac{10}{3}-\frac{1}{3} \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}
$$

Isliye $x = 2$, $y = 3$.

**Verify karo** — original equations me wapas rakh kar check karo: $x+y = 2+3 = 5$ ✓ &nbsp;&nbsp; $2x-y = 4-3 = 1$ ✓ Dono match hue, answer sahi hai.

**Consistency Of System Of Equations:**

| Condition | Matlab |
|-----------|--------|
| $\lvert A\rvert \neq 0$ | Unique solution exist karta hai (Consistent) |
| $\lvert A\rvert = 0$, aur $\text{adj}(A)\cdot B = 0$ | Infinite solutions (Consistent) |
| $\lvert A\rvert = 0$, aur $\text{adj}(A)\cdot B \neq 0$ | No solution (Inconsistent) |

> Tip — Exam me system of equations solve karte time pehle $|A|$ nikalo — agar non-zero hai, seedha inverse method use karo. Zero hai toh consistency check karna padega — ye examiner dekhna chahta hai.

> Yaad Rakho — Poora inverse-method solution likhte waqt kabhi bhi steps skip mat karo — determinant, cofactors, adjoint, phir $X=A^{-1}B$ — sab dikhao. Marks har step ke liye alag milte hain.

---

### Ab Khud Try Karo — Practice Questions

> Question — $\begin{bmatrix} 2 & 5 \\ 1 & 3 \end{bmatrix}$ ka determinant nikaalo.

**Solution** — Crisscross rule: $(2\times3) - (5\times1) = 6-5 = 1$

> Question — $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ singular hai ya non-singular? (Singular matlab determinant = 0)

**Solution** — $|A| = (1\times4)-(2\times3) = 4-6 = -2$. Ye zero nahi hai, isliye matrix **non-singular** hai (inverse exist karega).

> Question — Equations $2x + y = 8$ aur $x - y = 1$ ko $AX=B$ form me likho aur $|A|$ nikaalo.

**Solution** — $A = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}$, $B = \begin{bmatrix} 8 \\ 1 \end{bmatrix}$. $|A| = (2\times-1)-(1\times1) = -2-1 = -3$. Ye non-zero hai, toh unique solution exist karega.
