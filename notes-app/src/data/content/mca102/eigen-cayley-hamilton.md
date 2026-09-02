## Eigenvalues Aur Eigenvectors Kya Hote Hain?

Jab kisi square matrix `A` ko ek vector `x` se multiply karte hain, generally vector ki **direction** change ho jaati hai. Lekin kuch special vectors aise hote hain jinki direction same rehti hai — sirf unki length (scale) badalti hai. Inhi special vectors ko **eigenvectors** kehte hain, aur wo scaling factor **eigenvalue** hota hai.

```
A·x = λ·x

A = square matrix
x = eigenvector (non-zero vector)
λ (lambda) = eigenvalue (scalar)
```

> Socho Aise — Eigenvector ek "stubborn arrow" hai jo matrix A apply karne ke baad bhi apni direction nahi badalta, bas lamba/chhota ho jaata hai (λ times). Baaki sab vectors A apply hote hi ghoom jaate hain.

---

### Characteristic Equation

Eigenvalue nikalne ke liye hum equation `A·x = λ·x` ko rewrite karte hain:

```
A·x = λ·x
A·x - λ·x = 0
(A - λI)·x = 0
```

Isme non-zero solution `x` tabhi milega jab `(A - λI)` singular ho, matlab uska determinant zero ho:

```
|A - λI| = 0     ← Characteristic Equation
```

Isko expand karne par ek polynomial in λ milta hai (n×n matrix ke liye degree n ka polynomial) — iske roots hi **eigenvalues** hote hain.

> Yaad Rakho — Characteristic equation: det(A − λI) = 0. Isse λ nikalte hain, phir har λ ke liye (A − λI)x = 0 solve karke corresponding eigenvector nikalte hain.

---

## Worked Example — 2×2 Matrix

```
A = | 4   1 |
    | 2   3 |

Step 1: Characteristic equation |A - λI| = 0

| 4-λ    1  |
|  2   3-λ  |  = 0

(4-λ)(3-λ) - (1)(2) = 0
12 - 4λ - 3λ + λ² - 2 = 0
λ² - 7λ + 10 = 0
(λ - 5)(λ - 2) = 0

Eigenvalues:  λ1 = 5,  λ2 = 2
```

### Eigenvectors Nikalna

```
For λ1 = 5:  (A - 5I)x = 0

| -1   1 | |x1|   |0|
|  2  -2 | |x2| = |0|

-x1 + x2 = 0  →  x1 = x2

Eigenvector for λ1 = 5:   x = | 1 |
                               | 1 |

For λ2 = 2:  (A - 2I)x = 0

| 2   1 | |x1|   |0|
| 2   1 | |x2| = |0|

2x1 + x2 = 0  →  x2 = -2x1

Eigenvector for λ2 = 2:   x = |  1 |
                                | -2 |
```

> Tip — Eigenvector kabhi unique nahi hota — koi bhi scalar multiple bhi valid eigenvector hai. Exam me answer `(1, 1)` ya `(2, 2)` dono correct maane jaate hain, jab tak ratio same ho.

---

## Properties of Eigenvalues

| Property | Statement |
|----------|-----------|
| **Sum of eigenvalues** | Sum of all λ = Trace of A (sum of diagonal elements) |
| **Product of eigenvalues** | Product of all λ = det(A) |
| **Triangular matrix** | Eigenvalues = diagonal elements khud hi hote hain |
| **Transpose** | A aur Aᵀ ke eigenvalues same hote hain |
| **Inverse** | Agar λ, A ka eigenvalue hai, toh 1/λ, A⁻¹ ka eigenvalue hai |
| **Powers** | Agar λ, A ka eigenvalue hai, toh λⁿ, Aⁿ ka eigenvalue hai |
| **Scalar multiple** | Agar λ, A ka eigenvalue hai, toh kλ, (kA) ka eigenvalue hai |
| **Zero eigenvalue** | Agar koi λ = 0 hai, toh matrix A **singular** hai (det = 0) |

**Verify with our example:** Trace(A) = 4 + 3 = 7 = λ1 + λ2 = 5 + 2 ✓. det(A) = 12 - 2 = 10 = λ1 × λ2 = 5 × 2 ✓

---

## Cayley-Hamilton Theorem

**Statement** — Har square matrix apni characteristic equation ko satisfy karta hai.

Matlab agar characteristic equation hai `λⁿ + c1λⁿ⁻¹ + ... + cn = 0`, toh matrix A khud is equation me λ ki jagah substitute karne par bhi true hota hai:

```
Aⁿ + c1·Aⁿ⁻¹ + ... + cn·I = 0
```

Isse do bahut useful cheezein milti hain — **inverse of a matrix** aur **higher powers of a matrix**, bina baar-baar multiply kiye.

> Yaad Rakho — Cayley-Hamilton theorem har matrix ke liye kaam karta hai — "matrix apni khud ki characteristic equation ko satisfy karta hai" — ye exact wording exam me likhna.

---

### Worked Example — Using Cayley-Hamilton for Inverse

```
A = | 4   1 |
    | 2   3 |

Characteristic equation (already found above):
λ² - 7λ + 10 = 0

By Cayley-Hamilton Theorem, A satisfies this:
A² - 7A + 10I = 0

Multiply both sides by A⁻¹:
A - 7I + 10A⁻¹ = 0
10A⁻¹ = 7I - A

A⁻¹ = (1/10) [7I - A]

7I = | 7  0 |      A = | 4  1 |
     | 0  7 |          | 2  3 |

7I - A = | 3  -1 |
         | -2  4 |

A⁻¹ = (1/10) | 3  -1 |  =  | 0.3   -0.1 |
             | -2  4 |     | -0.2   0.4 |
```

**Check:** A × A⁻¹ should give Identity matrix — is tarah verify kar sakte ho.

### Worked Example — Using Cayley-Hamilton for Higher Powers

Cayley-Hamilton se `A² = 7A - 10I` milta hai. Isse `A³, A⁴` etc. bina baar-baar matrix multiply kiye nikal sakte hain — bas har baar `A²` ko `7A - 10I` se replace karte jao.

```
A³ = A · A² = A(7A - 10I) = 7A² - 10A
            = 7(7A - 10I) - 10A
            = 49A - 70I - 10A
            = 39A - 70I
```

> Tip — Bade power (jaise A⁵, A⁶) directly multiply karne ki bajaye Cayley-Hamilton se degree-reduce karte raho — exam me time bachta hai aur "Cayley-Hamilton use karke solve karo" wale questions me ye hi expected method hai.

---

### Summary Table

| Concept | Formula |
|---------|---------|
| Characteristic equation | det(A − λI) = 0 |
| Eigenvector equation | (A − λI)x = 0 |
| Sum of eigenvalues | = Trace(A) |
| Product of eigenvalues | = det(A) |
| Cayley-Hamilton | A satisfies its own characteristic equation |
| Inverse via C-H | A⁻¹ derived by isolating A⁻¹ term from A satisfying its equation |

> Warning — Cayley-Hamilton se inverse tabhi nikal sakte ho jab det(A) ≠ 0 (matrix non-singular ho). Agar det(A) = 0 hai, matrix singular hai aur inverse exist hi nahi karta.
