## Determinants, Adjoint, Inverse Aur System Of Linear Equations

### Determinant Kya Hai?

**Determinant** ek **square matrix** se juda ek single number hota hai, jo us matrix ke baare me important information deta hai (jaise ki wo invertible hai ya nahi, ya uske corresponding linear equations ka unique solution hai ya nahi).

Likha jaata hai `|A|` ya `det(A)`. Sirf **square matrices** ka determinant define hota hai — rectangular matrix ka determinant exist nahi karta.

> Socho Aise — Determinant ko matrix ki ek "fingerprint" ki tarah socho — ye ek hi number matrix ke bahut saare important behaviours (invertibility, solution existence) bata deta hai.

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

**Worked Example — Real Numbers Se 3×3 Determinant:**

```
    [2   3   1]
A = [1   0   2]
    [4   1   3]

Pehli row se expand karo (sign: + − +):

|A| = 2 × [0×3 - 2×1] - 3 × [1×3 - 2×4] + 1 × [1×1 - 0×4]

    = 2 × [0 - 2] - 3 × [3 - 8] + 1 × [1 - 0]

    = 2×(-2) - 3×(-5) + 1×(1)

    = -4 + 15 + 1

    = 12

Isliye |A| = 12
```

> Tip — Hamesha wo row ya column expand karo jisme sabse zyada zeros hon — calculation kaafi kam ho jaata hai.

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
| Determinant of transpose | `\|Aᵀ\| = \|A\|` (transpose lene se determinant nahi badalta) |
| Determinant of product | `\|AB\| = \|A\| × \|B\|` |
| Ek row me dusri row ka multiple add karna | Determinant **nahi** badalta |

> Socho Aise — Agar do rows identical hain, determinant zero ho jaata hai — jaise do bilkul same cheezon ke beech koi "unique area/volume" nahi bachta, sab overlap ho jaata hai.

**Worked Example — Row Swap Se Sign Badalna:**

```
        [1  2]
A =                    |A| = (1×4) - (2×3) = 4 - 6 = -2
        [3  4]

Ab R1 aur R2 ko swap karo:

        [3  4]
B =                    |B| = (3×2) - (4×1) = 6 - 4 = 2
        [1  2]

Dekho — |A| = -2 aur |B| = +2 — sirf sign palat gaya, magnitude same rahi.
Ye confirm karta hai: row swap karne se determinant ka sign flip ho jaata hai.
```

---

### Adjoint Aur Inverse Of A Matrix

**Adjoint (adj A)** = Cofactor matrix ka transpose.

**Inverse Formula:**
```
A⁻¹ = adj(A) / |A|
```

> Warning — Agar `|A| = 0` (determinant zero), toh matrix **invertible nahi hai** — uska koi inverse exist nahi karta! Aise matrix ko "singular matrix" kehte hain.

**Worked Example — 2×2 Matrix Ka Adjoint Aur Inverse (Poora Step-By-Step):**

```
A = [4   7]
    [2   6]

Step 1: Determinant nikaalo
|A| = (4×6) - (7×2) = 24 - 14 = 10

Step 2: Cofactors nikaalo (2×2 ke liye simple trick hai)
C11 = +d = 6      C12 = -c = -2
C21 = -b = -7     C22 = +a = 4

Cofactor Matrix = [ 6  -2]
                  [-7   4]

Step 3: Adjoint = Cofactor matrix ka transpose
adj(A) = [ 6  -7]
         [-2   4]

Step 4: Inverse = adj(A) / |A|
A⁻¹ = (1/10) × [ 6  -7]  =  [ 0.6   -0.7]
               [-2   4]     [-0.2    0.4]

Check: A × A⁻¹ = I honi chahiye — verify karo agar time ho.
```

> Tip — 2×2 matrix `[a b; c d]` ka inverse seedha yaad rakh sakte ho: diagonal elements swap karo (a,d), off-diagonal elements ka sign badlo (-b,-c), phir poore matrix ko `1/|A|` se multiply karo. Isse Step 2-3 skip ho jaate hain.

**Area Of A Triangle (Determinant Application):**

```
Area = ½ | x1(y2-y3) + x2(y3-y1) + x3(y1-y2) |
```

---

### System Of Linear Equations — Solving Using Matrix Inverse

Equations: `AX = B`, toh `X = A⁻¹B`

**Poora Worked Example — Start Se Finish Tak:**

```
Solve karna hai: x + y = 5
                 2x - y = 1

Step 1: AX = B form me likho
A = [1   1]     X = [x]     B = [5]
    [2  -1]         [y]         [1]

Step 2: |A| nikaalo
|A| = (1×-1) - (1×2) = -1 - 2 = -3

Kyunki |A| ≠ 0, unique solution exist karta hai — inverse method use kar sakte hain.

Step 3: Cofactors nikaalo
C11 = +(-1) = -1     C12 = -(2) = -2
C21 = -(1) = -1       C22 = +(1) = 1

Cofactor Matrix = [-1  -2]
                  [-1   1]

Step 4: Adjoint = Cofactor matrix ka transpose
adj(A) = [-1  -1]
         [-2   1]

Step 5: Inverse nikaalo
A⁻¹ = (1/-3) × [-1  -1]  =  [ 1/3   1/3]
               [-2   1]     [ 2/3  -1/3]

Step 6: X = A⁻¹B
X = [ 1/3   1/3]   [5]   [(1/3×5)+(1/3×1)]   [6/3]   [2]
    [ 2/3  -1/3] × [1] = [(2/3×5)+(-1/3×1)] = [9/3] = [3]

Isliye x = 2, y = 3

Verify: x+y = 2+3 = 5 ✓        2x-y = 4-3 = 1 ✓
```

**Consistency Of System Of Equations:**

| Condition | Matlab |
|-----------|--------|
| `\|A\| ≠ 0` | Unique solution exist karta hai (Consistent) |
| `\|A\| = 0`, aur adj(A)·B = 0 | Infinite solutions (Consistent) |
| `\|A\| = 0`, aur adj(A)·B ≠ 0 | No solution (Inconsistent) |

> Tip — Exam me system of equations solve karte time pehle `|A|` nikalo — agar non-zero hai, seedha inverse method use karo. Zero hai toh consistency check karna padega — ye examiner dekhna chahta hai.

> Yaad Rakho — Poora inverse-method solution likhte waqt kabhi bhi steps skip mat karo — determinant, cofactors, adjoint, phir X=A⁻¹B — sab dikhao. Marks har step ke liye alag milte hain.
