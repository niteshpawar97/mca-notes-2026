## Eigenvalues Aur Eigenvectors Kya Hote Hain?

Jab kisi square matrix $A$ ko ek vector $x$ se multiply karte hain, generally vector ki **direction** change ho jaati hai. Lekin kuch special vectors aise hote hain jinki direction same rehti hai — sirf unki length (scale) badalti hai. Inhi special vectors ko **eigenvectors** kehte hain, aur wo scaling factor **eigenvalue** hota hai.

$$
A \cdot x = \lambda \cdot x
$$

- $A$ = square matrix
- $x$ = eigenvector (non-zero vector)
- $\lambda$ (lambda) = eigenvalue (scalar)

> Socho Aise — Eigenvector ek "stubborn arrow" hai jo matrix $A$ apply karne ke baad bhi apni direction nahi badalta, bas lamba/chhota ho jaata hai ($\lambda$ times). Baaki sab vectors $A$ apply hote hi ghoom jaate hain.

---

### Characteristic Equation

Eigenvalue nikalne ke liye hum equation $A \cdot x = \lambda \cdot x$ ko rewrite karte hain:

$$
A \cdot x = \lambda \cdot x \\
A \cdot x - \lambda \cdot x = 0 \\
(A - \lambda I) \cdot x = 0
$$

Isme non-zero solution $x$ tabhi milega jab $(A - \lambda I)$ singular ho, matlab uska determinant zero ho:

$$
|A - \lambda I| = 0 \qquad \text{(Characteristic Equation)}
$$

Isko expand karne par ek polynomial in $\lambda$ milta hai ($n \times n$ matrix ke liye degree $n$ ka polynomial) — iske roots hi **eigenvalues** hote hain.

> Yaad Rakho — Characteristic equation: $\det(A - \lambda I) = 0$. Isse $\lambda$ nikalte hain, phir har $\lambda$ ke liye $(A - \lambda I)x = 0$ solve karke corresponding eigenvector nikalte hain.

---

## Worked Example — 2×2 Matrix

$$
A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}
$$

Step 1: Characteristic equation $|A - \lambda I| = 0$

$$
\begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = 0
$$

$$
(4-\lambda)(3-\lambda) - (1)(2) = 0 \\
12 - 4\lambda - 3\lambda + \lambda^2 - 2 = 0 \\
\lambda^2 - 7\lambda + 10 = 0 \\
(\lambda - 5)(\lambda - 2) = 0
$$

Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = 2$

### Eigenvectors Nikalna

For $\lambda_1 = 5$: $(A - 5I)x = 0$

$$
\begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$

$-x_1 + x_2 = 0 \to x_1 = x_2$

Eigenvector for $\lambda_1 = 5$:

$$
x = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
$$

For $\lambda_2 = 2$: $(A - 2I)x = 0$

$$
\begin{bmatrix} 2 & 1 \\ 2 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$

$2x_1 + x_2 = 0 \to x_2 = -2x_1$

Eigenvector for $\lambda_2 = 2$:

$$
x = \begin{bmatrix} 1 \\ -2 \end{bmatrix}
$$

> Tip — Eigenvector kabhi unique nahi hota — koi bhi scalar multiple bhi valid eigenvector hai. Exam me answer $(1, 1)$ ya $(2, 2)$ dono correct maane jaate hain, jab tak ratio same ho.

---

## Properties of Eigenvalues

| Property | Statement |
|----------|-----------|
| **Sum of eigenvalues** | Sum of all $\lambda$ = Trace of $A$ (sum of diagonal elements) |
| **Product of eigenvalues** | Product of all $\lambda$ = $\det(A)$ |
| **Triangular matrix** | Eigenvalues = diagonal elements khud hi hote hain |
| **Transpose** | $A$ aur $A^T$ ke eigenvalues same hote hain |
| **Inverse** | Agar $\lambda$, $A$ ka eigenvalue hai, toh $1/\lambda$, $A^{-1}$ ka eigenvalue hai |
| **Powers** | Agar $\lambda$, $A$ ka eigenvalue hai, toh $\lambda^n$, $A^n$ ka eigenvalue hai |
| **Scalar multiple** | Agar $\lambda$, $A$ ka eigenvalue hai, toh $k\lambda$, $(kA)$ ka eigenvalue hai |
| **Zero eigenvalue** | Agar koi $\lambda = 0$ hai, toh matrix $A$ **singular** hai ($\det = 0$) |

**Verify with our example:** $\text{Trace}(A) = 4 + 3 = 7 = \lambda_1 + \lambda_2 = 5 + 2$ ✓. $\det(A) = 12 - 2 = 10 = \lambda_1 \times \lambda_2 = 5 \times 2$ ✓

---

## Cayley-Hamilton Theorem

**Statement** — Har square matrix apni characteristic equation ko satisfy karta hai.

Matlab agar characteristic equation hai $\lambda^n + c_1\lambda^{n-1} + \dots + c_n = 0$, toh matrix $A$ khud is equation me $\lambda$ ki jagah substitute karne par bhi true hota hai:

$$
A^n + c_1 \cdot A^{n-1} + \dots + c_n \cdot I = 0
$$

Isse do bahut useful cheezein milti hain — **inverse of a matrix** aur **higher powers of a matrix**, bina baar-baar multiply kiye.

> Yaad Rakho — Cayley-Hamilton theorem har matrix ke liye kaam karta hai — "matrix apni khud ki characteristic equation ko satisfy karta hai" — ye exact wording exam me likhna.

---

### Worked Example — Using Cayley-Hamilton for Inverse

$$
A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}
$$

Characteristic equation (already found above):

$$
\lambda^2 - 7\lambda + 10 = 0
$$

By Cayley-Hamilton Theorem, $A$ satisfies this:

$$
A^2 - 7A + 10I = 0
$$

Multiply both sides by $A^{-1}$:

$$
A - 7I + 10A^{-1} = 0 \\
10A^{-1} = 7I - A
$$

$$
A^{-1} = \frac{1}{10}\left[7I - A\right]
$$

$$
7I = \begin{bmatrix} 7 & 0 \\ 0 & 7 \end{bmatrix} \qquad A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}
$$

$$
7I - A = \begin{bmatrix} 3 & -1 \\ -2 & 4 \end{bmatrix}
$$

$$
A^{-1} = \frac{1}{10}\begin{bmatrix} 3 & -1 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 0.3 & -0.1 \\ -0.2 & 0.4 \end{bmatrix}
$$

**Check:** $A \times A^{-1}$ should give Identity matrix — is tarah verify kar sakte ho.

### Worked Example — Using Cayley-Hamilton for Higher Powers

Cayley-Hamilton se $A^2 = 7A - 10I$ milta hai. Isse $A^3, A^4$ etc. bina baar-baar matrix multiply kiye nikal sakte hain — bas har baar $A^2$ ko $7A - 10I$ se replace karte jao.

$$
A^3 = A \cdot A^2 = A(7A - 10I) = 7A^2 - 10A \\
= 7(7A - 10I) - 10A \\
= 49A - 70I - 10A \\
= 39A - 70I
$$

> Tip — Bade power (jaise $A^5$, $A^6$) directly multiply karne ki bajaye Cayley-Hamilton se degree-reduce karte raho — exam me time bachta hai aur "Cayley-Hamilton use karke solve karo" wale questions me ye hi expected method hai.

---

### Summary Table

| Concept | Formula |
|---------|---------|
| Characteristic equation | $\det(A - \lambda I) = 0$ |
| Eigenvector equation | $(A - \lambda I)x = 0$ |
| Sum of eigenvalues | $= \text{Trace}(A)$ |
| Product of eigenvalues | $= \det(A)$ |
| Cayley-Hamilton | $A$ satisfies its own characteristic equation |
| Inverse via C-H | $A^{-1}$ derived by isolating $A^{-1}$ term from $A$ satisfying its equation |

> Warning — Cayley-Hamilton se inverse tabhi nikal sakte ho jab $\det(A) \neq 0$ (matrix non-singular ho). Agar $\det(A) = 0$ hai, matrix singular hai aur inverse exist hi nahi karta.
