## Determinants, Adjoint, Inverse Aur System Of Linear Equations

### Determinant Kya Hai?

**Determinant** ek **square matrix** se juda ek single number hota hai, jo us matrix ke baare me important information deta hai (jaise ki wo invertible hai ya nahi, ya uske corresponding linear equations ka unique solution hai ya nahi).

Likha jaata hai $|A|$ ya $\det(A)$. Sirf **square matrices** ka determinant define hota hai — rectangular matrix ka determinant exist nahi karta.

> Socho Aise — Determinant ko matrix ki ek "fingerprint" ki tarah socho — ye ek hi number matrix ke bahut saare important behaviours (invertibility, solution existence) bata deta hai.

---

### 2×2 Matrix Ka Determinant

$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \qquad |A| = ad - bc
$$

> Example — $A = \begin{bmatrix} 3 & 4 \\ 2 & 6 \end{bmatrix}$ ka determinant: $(3\times6) - (4\times2) = 18 - 8 = \mathbf{10}$

---

### 3×3 Matrix Ka Determinant (Expansion By Minors)

$$
A = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}
$$

$$
|A| = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

> Yaad Rakho — Pehli row ke elements se expand karo, sign alternate hote hain: **+ − +**. Har element ko uske "minor" (baaki 2×2 matrix jo bache) ke determinant se multiply karo.

**Worked Example — Real Numbers Se 3×3 Determinant:**

$$
A = \begin{bmatrix} 2 & 3 & 1 \\ 1 & 0 & 2 \\ 4 & 1 & 3 \end{bmatrix}
$$

Pehli row se expand karo (sign: + − +):

$$
|A| = 2(0\times3 - 2\times1) - 3(1\times3 - 2\times4) + 1(1\times1 - 0\times4)
$$

$$
|A| = 2(0-2) - 3(3-8) + 1(1-0) = 2(-2) - 3(-5) + 1(1) = -4 + 15 + 1
$$

$$
|A| = 12
$$

**Doosra Worked Example — Ek Aur 3×3 Determinant:**

$$
B = \begin{bmatrix} 1 & 4 & 2 \\ 3 & 1 & 0 \\ 2 & 5 & 1 \end{bmatrix}
$$

$$
|B| = 1(1\times1 - 0\times5) - 4(3\times1 - 0\times2) + 2(3\times5 - 1\times2)
$$

$$
|B| = 1(1-0) - 4(3-0) + 2(15-2) = 1 - 12 + 26 = 15
$$

> Tip — Hamesha wo row ya column expand karo jisme sabse zyada zeros hon — calculation kaafi kam ho jaata hai.

---

### Minors Aur Cofactors

| Term | Matlab |
|------|--------|
| **Minor** ($M_{ij}$) | Kisi element ki row aur column hataakar bacha hua determinant |
| **Cofactor** ($C_{ij}$) | $M_{ij} \times (-1)^{i+j}$ — sign ke saath minor |

Sign pattern (Cofactor ke liye):

$$
\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}
$$

---

### Properties Of Determinants

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

Dekho — $|A| = -2$ aur $|B| = +2$ — sirf sign palat gaya, magnitude same rahi. Ye confirm karta hai: row swap karne se determinant ka sign flip ho jaata hai.

---

### Adjoint Aur Inverse Of A Matrix

**Adjoint** ($\text{adj}\,A$) = Cofactor matrix ka transpose.

**Inverse Formula:**

$$
A^{-1} = \frac{\text{adj}(A)}{|A|}
$$

> Warning — Agar $|A| = 0$ (determinant zero), toh matrix **invertible nahi hai** — uska koi inverse exist nahi karta! Aise matrix ko "singular matrix" kehte hain.

**Worked Example — 2×2 Matrix Ka Adjoint Aur Inverse (Poora Step-By-Step):**

$$
A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}
$$

**Step 1 — Determinant nikaalo:**

$$
|A| = (4\times6) - (7\times2) = 24 - 14 = 10
$$

**Step 2 — Cofactors nikaalo** (2×2 ke liye simple trick hai):

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

**Step 4 — Inverse = adj(A) / |A|:**

$$
A^{-1} = \frac{1}{10}\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}
$$

Check: $A \times A^{-1} = I$ honi chahiye — verify karo agar time ho.

> Tip — 2×2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ ka inverse seedha yaad rakh sakte ho: diagonal elements swap karo ($a,d$), off-diagonal elements ka sign badlo ($-b,-c$), phir poore matrix ko $\frac{1}{|A|}$ se multiply karo. Isse Step 2-3 skip ho jaate hain.

**Area Of A Triangle (Determinant Application):**

$$
\text{Area} = \frac{1}{2}\left|\, x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2) \,\right|
$$

---

### System Of Linear Equations — Solving Using Matrix Inverse

Equations: $AX = B$, toh $X = A^{-1}B$

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

**Step 3 — Cofactors nikaalo:**

$$
C_{11} = -1 \qquad C_{12} = -2 \qquad C_{21} = -1 \qquad C_{22} = 1
$$

$$
\text{Cofactor Matrix} = \begin{bmatrix} -1 & -2 \\ -1 & 1 \end{bmatrix}
$$

**Step 4 — Adjoint = Cofactor matrix ka transpose:**

$$
\text{adj}(A) = \begin{bmatrix} -1 & -1 \\ -2 & 1 \end{bmatrix}
$$

**Step 5 — Inverse nikaalo:**

$$
A^{-1} = \frac{1}{-3}\begin{bmatrix} -1 & -1 \\ -2 & 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{3} & \frac{1}{3} \\[4pt] \frac{2}{3} & -\frac{1}{3} \end{bmatrix}
$$

**Step 6 — $X = A^{-1}B$:**

$$
X = \begin{bmatrix} \frac{1}{3} & \frac{1}{3} \\[4pt] \frac{2}{3} & -\frac{1}{3} \end{bmatrix} \begin{bmatrix} 5 \\ 1 \end{bmatrix} = \begin{bmatrix} \frac{5}{3}+\frac{1}{3} \\[4pt] \frac{10}{3}-\frac{1}{3} \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}
$$

Isliye $x = 2$, $y = 3$.

Verify: $x+y = 2+3 = 5$ ✓ &nbsp;&nbsp; $2x-y = 4-3 = 1$ ✓

**Consistency Of System Of Equations:**

| Condition | Matlab |
|-----------|--------|
| $\lvert A\rvert \neq 0$ | Unique solution exist karta hai (Consistent) |
| $\lvert A\rvert = 0$, aur $\text{adj}(A)\cdot B = 0$ | Infinite solutions (Consistent) |
| $\lvert A\rvert = 0$, aur $\text{adj}(A)\cdot B \neq 0$ | No solution (Inconsistent) |

> Tip — Exam me system of equations solve karte time pehle $|A|$ nikalo — agar non-zero hai, seedha inverse method use karo. Zero hai toh consistency check karna padega — ye examiner dekhna chahta hai.

> Yaad Rakho — Poora inverse-method solution likhte waqt kabhi bhi steps skip mat karo — determinant, cofactors, adjoint, phir $X=A^{-1}B$ — sab dikhao. Marks har step ke liye alag milte hain.
