## Determinants, Adjoint, Inverse Aur System Of Linear Equations

### Determinant Kya Hai?

**Determinant** ek **square matrix** se juda ek single number hota hai, jo us matrix ke baare me important information deta hai (jaise ki wo invertible hai ya nahi).

Likha jaata hai `|A|` ya `det(A)`.

---

### 2×2 Matrix Ka Determinant

```
A = [a  b]
    [c  d]

|A| = ad - bc
```

> Example — `A = [[3,4],[2,6]]` ka determinant: (3×6) − (4×2) = 18 − 8 = **10**

---

### 3×3 Matrix Ka Determinant (Expansion By Minors)

```
    [a  b  c]
A = [d  e  f]
    [g  h  i]

|A| = a(ei - fh) - b(di - fg) + c(dh - eg)
```

> Yaad Rakho — Pehli row ke elements se expand karo, sign alternate hote hain: **+ − +**. Har element ko uske "minor" (baaki 2×2 matrix jo bache) ke determinant se multiply karo.

---

### Minors Aur Cofactors

| Term | Matlab |
|------|--------|
| **Minor (Mᵢⱼ)** | Kisi element ki row aur column hataakar bacha hua determinant |
| **Cofactor (Cᵢⱼ)** | Minor × (-1)^(i+j) — sign ke saath minor |

```
Sign pattern (Cofactor ke liye):
[+  −  +]
[−  +  −]
[+  −  +]
```

---

### Properties Of Determinants

| Property | Matlab |
|----------|--------|
| Row/Column swap karo | Determinant ka sign badal jaata hai |
| Do rows/columns same hon | Determinant = 0 |
| Ek row ko constant k se multiply karo | Poora determinant k se multiply hota hai |
| Row/column me sab zero ho | Determinant = 0 |

> Socho Aise — Agar do rows identical hain, determinant zero ho jaata hai — jaise do bilkul same cheezon ke beech koi "unique area/volume" nahi bachta, sab overlap ho jaata hai.

---

### Adjoint Aur Inverse Of A Matrix

**Adjoint (adj A)** = Cofactor matrix ka transpose.

**Inverse Formula:**
```
A⁻¹ = adj(A) / |A|
```

> Warning — Agar `|A| = 0` (determinant zero), toh matrix **invertible nahi hai** — uska koi inverse exist nahi karta! Aise matrix ko "singular matrix" kehte hain.

**Area Of A Triangle (Determinant Application):**

```
Area = ½ | x1(y2-y3) + x2(y3-y1) + x3(y1-y2) |
```

---

### System Of Linear Equations — Solving Using Matrix Inverse

Equations: `AX = B`, toh `X = A⁻¹B`

```
Example: x + y = 5,  2x - y = 1

A = [1   1]    B = [5]
    [2  -1]        [1]

|A| = (1×-1) - (1×2) = -3
A⁻¹ = adj(A) / |A|

X = A⁻¹B  →  x = 2, y = 3
```

**Consistency Of System Of Equations:**

| Condition | Matlab |
|-----------|--------|
| `\|A\| ≠ 0` | Unique solution exist karta hai (Consistent) |
| `\|A\| = 0`, aur adj(A)·B = 0 | Infinite solutions (Consistent) |
| `\|A\| = 0`, aur adj(A)·B ≠ 0 | No solution (Inconsistent) |

> Tip — Exam me system of equations solve karte time pehle `|A|` nikalo — agar non-zero hai, seedha inverse method use karo. Zero hai toh consistency check karna padega — ye examiner dekhna chahta hai.
