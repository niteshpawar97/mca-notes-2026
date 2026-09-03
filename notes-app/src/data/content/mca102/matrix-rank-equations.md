## Matrix Ki Rank Kya Hoti Hai?

Rank ek number hai jo batata hai ki matrix me kitni **independent rows (ya columns)** hain. Simple shabdon me — matrix ke andar "useful information" kitni hai.

**Definition** — Rank of a matrix $A$ = order of the largest non-zero minor of $A$. Ise $\rho(A)$ ya $r(A)$ likhte hain.

Practically exam me hum determinant nikaal ke rank nahi nikalte (bada matrix ho toh mushkil hai) — hum **row-echelon form** bana ke non-zero rows count karte hain.

> Yaad Rakho — Rank = number of non-zero rows jab matrix ko row-echelon form me convert kar diya jaaye.

---

### Row-Echelon Form Kaise Banayein

Row-echelon form banane ke liye hum sirf **elementary row operations** use karte hain:

- **R1:** Kisi bhi do rows ko aapas me swap karna ($R_i \leftrightarrow R_j$)
- **R2:** Kisi row ko non-zero constant se multiply karna ($R_i \to k \cdot R_i$)
- **R3:** Ek row me kisi dusri row ka multiple add karna ($R_i \to R_i + k \cdot R_j$)

Goal: matrix ko aise form me le aana jaha diagonal ke neeche sab zero ho jaaye (staircase pattern).

### Worked Example — Rank Nikalna

$$
A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 7 \\ 3 & 6 & 10 \end{bmatrix}
$$

Step 1: $R_2 \to R_2 - 2R_1, \quad R_3 \to R_3 - 3R_1$

$$
\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 1 \\ 0 & 0 & 1 \end{bmatrix}
$$

Step 2: $R_3 \to R_3 - R_2$

$$
\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}
$$

Non-zero rows = 2 $\to$ $\text{Rank}(A) = 2$

> Tip — Rank nikalte time ek row poori zero ho jaaye toh usko "dead" maan lo — wo count nahi hoti. Baaki jitni rows bachi non-zero, wahi rank hai.

---

## Consistency of a System of Linear Equations

Jab hume equations ka system $Ax = b$ diya jaata hai, sabse pehla sawaal ye hota hai — **solution exist karta hai ya nahi?** Iske liye hum do matrices ki rank compare karte hain:

- **Coefficient matrix $A$** — sirf $x, y, z$ ke coefficients
- **Augmented matrix $[A \mid b]$** — coefficients + RHS constants ek saath

$$
x + y + z = 6 \qquad 2x + y - z = 1 \qquad 3x + 2y + 2z = 13
$$

$$
A = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 1 & -1 \\ 3 & 2 & 2 \end{bmatrix}
\qquad
[A \mid b] = \left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & 1 & -1 & 1 \\ 3 & 2 & 2 & 13 \end{array}\right]
$$

### Consistency Rules (Rouché–Capelli Theorem)

| Condition | Meaning | Result |
|-----------|---------|--------|
| $\text{rank}(A) = \text{rank}([A \mid b]) = n$ ($n$ = number of unknowns) | Sab equations independent, poori info hai | **Unique solution** |
| $\text{rank}(A) = \text{rank}([A \mid b]) < n$ | Kam independent equations hain unknowns se | **Infinite solutions** |
| $\text{rank}(A) \neq \text{rank}([A \mid b])$ | Augmented matrix me extra independent info jo $A$ me nahi | **No solution (inconsistent)** |

> Socho Aise — Socho $A$ matrix "questions" hai aur $b$ "answers". Agar answers questions ke saath match nahi karte (rank mismatch), matlab system jhootha hai — koi solution nahi. Agar answers questions se kam info dete hain, matlab bahut saare solutions possible hain.

---

### Worked Example — Consistency Check

$$
x + y + z = 6 \qquad 2x + y - z = 1 \qquad 3x + 2y + 2z = 13
$$

Row reduce $[A \mid b]$:

$R_2 \to R_2 - 2R_1, \quad R_3 \to R_3 - 3R_1$

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -11 \\ 0 & -1 & -1 & -5 \end{array}\right]
$$

$R_3 \to R_3 - R_2$

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -11 \\ 0 & 0 & 2 & 6 \end{array}\right]
$$

$\text{rank}(A) = 3$, $\text{rank}([A \mid b]) = 3$, $n = 3$ unknowns

$\to$ $\text{rank}(A) = \text{rank}([A \mid b]) = n$ $\to$ Unique solution exists

Ab back-substitution se solve karte hain: teesri row se $2z = 6 \to z = 3$. Dusri row se $-y - 3(3) = -11 \to y = 2$. Pehli row se $x + 2 + 3 = 6 \to x = 1$.

**Solution: $x = 1$, $y = 2$, $z = 3$**

---

## Solving $Ax = b$ Using Row-Reduced Echelon Form

Row-Reduced Echelon Form (RREF) row-echelon form se ek step aage hai — isme:

1. Har non-zero row ka leading entry (pivot) **1** hota hai
2. Pivot ke upar aur neeche dono taraf **sirf zero** hote hain

RREF banane ka fayda ye hai ki solution direct read ho jaata hai — back-substitution ki zaroorat nahi padti, kyunki matrix diagonal form (identity jaisi) me aa jaati hai.

$[A \mid b]$ ko RREF karne ke baad agar milta hai:

$$
\left[\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 3 \end{array}\right]
$$

Directly padh lo: $x = 1$, $y = 2$, $z = 3$

> Warning — RREF aur Row-Echelon Form (REF) me confuse mat ho. REF me sirf staircase pattern chahiye (pivots 1 hone zaroori nahi), RREF me pivots strictly 1 hone chahiye aur unke upar-neeche bhi zero hona chahiye. Exam me dono defs alag se poochi ja sakti hain.

---

### Quick Summary Table

| Term | Kya Batata Hai |
|------|----------------|
| Rank of $A$ | Independent rows/columns ki count |
| $\text{rank}(A) = \text{rank}([A \mid b]) = n$ | Unique solution |
| $\text{rank}(A) = \text{rank}([A \mid b]) < n$ | Infinite solutions |
| $\text{rank}(A) \neq \text{rank}([A \mid b])$ | No solution |
| Row-Echelon Form | Staircase pattern, back-substitution se solve |
| Row-Reduced Echelon Form | Pivots = 1, direct solution read ho jaata hai |

> Example — Agar $\text{rank}(A) = 2$ but $\text{rank}([A \mid b]) = 3$ for a 3-unknown system, toh system **inconsistent** hai — koi values of $x, y, z$ exist nahi karti jo teeno equations satisfy kare. Exam me ye sabse common trick question hai.
