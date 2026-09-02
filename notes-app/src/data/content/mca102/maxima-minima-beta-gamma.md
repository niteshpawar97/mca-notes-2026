## Maxima Aur Minima Kya Hote Hain?

Kisi function ke graph me **maxima** wo point hai jaha value sabse zyada (local peak) hoti hai, aur **minima** wo point hai jaha value sabse kam (local valley) hoti hai.

Inhe nikalne ke liye hum derivative use karte hain — kyunki peak/valley par tangent ki slope hamesha **zero** hoti hai (horizontal tangent).

---

### First Derivative Test

```
Step 1: f'(x) = 0 solve karke "critical points" nikalo
Step 2: Un points ke aas-paas f'(x) ka sign check karo

Agar f'(x): + se - me change ho (left→right)  →  Maxima
Agar f'(x): - se + me change ho (left→right)  →  Minima
Agar sign change na ho                         →  Neither (inflection point)
```

### Second Derivative Test (Faster Method)

```
Step 1: f'(x) = 0 solve karke critical points x = c nikalo
Step 2: f''(c) ka sign check karo

f''(c) < 0   →   Maxima at x = c   (curve neeche ki taraf mudta hai)
f''(c) > 0   →   Minima at x = c   (curve upar ki taraf mudta hai)
f''(c) = 0   →   Test fail, first derivative test use karo
```

> Yaad Rakho — "Second derivative negative → Maxima, positive → Minima" — yaad rakhne ka trick: negative (–) ka symbol upside-down "cap" jaisa dikhta hai jo peak/maxima ko represent karta hai.

---

### Worked Example

```
Find maxima and minima of:  f(x) = x³ - 3x² - 9x + 5

Step 1: f'(x) = 3x² - 6x - 9

f'(x) = 0
3x² - 6x - 9 = 0
x² - 2x - 3 = 0
(x-3)(x+1) = 0
x = 3, x = -1

Step 2: f''(x) = 6x - 6

At x = -1:  f''(-1) = 6(-1) - 6 = -12  < 0   →  Maxima at x = -1
At x = 3:   f''(3)  = 6(3) - 6  = 12   > 0   →  Minima at x = 3

Maximum value: f(-1) = -1 - 3 + 9 + 5 = 10
Minimum value: f(3)  = 27 - 27 - 27 + 5 = -22
```

> Tip — Exam me answer sirf "x = -1 maxima hai" likh ke mat rukna — maximum/minimum **value** bhi calculate karke likho (f(-1) = 10 jaisa). Full marks ke liye dono chahiye.

---

## Product Rule Aur Chain Rule

### Product Rule

Do functions ke product ka derivative:

```
d/dx [u(x)·v(x)] = u'(x)·v(x) + u(x)·v'(x)

("first ka derivative × second") + ("first × second ka derivative")
```

**Example:**
```
y = x² · sin(x)

dy/dx = (2x)·sin(x) + x²·cos(x)
      = 2x sin(x) + x² cos(x)
```

### Chain Rule

Jab function ke andar function ho (composite function), toh:

```
d/dx [f(g(x))] = f'(g(x)) · g'(x)

("outer function ka derivative, inner ko as-is rakh ke") × ("inner function ka derivative")
```

**Example:**
```
y = sin(x²)

Outer function: sin(u), Inner function: u = x²

dy/dx = cos(x²) · (2x) = 2x·cos(x²)
```

> Socho Aise — Chain rule ek pyaaz (onion) ki tarah hai — layer by layer differentiate karte jao, bahar wali layer se andar wali layer tak, aur sabko multiply kar do.

---

## Beta Function

Beta function do positive numbers `m, n` ka function hai, defined as:

```
B(m, n) = ∫₀¹ x^(m-1) · (1-x)^(n-1) dx        (m > 0, n > 0)
```

**Symmetry Property:**
```
B(m, n) = B(n, m)
```

---

## Gamma Function

Gamma function ek positive number `n` ka function hai, defined as:

```
Γ(n) = ∫₀^∞ e^(-x) · x^(n-1) dx       (n > 0)
```

**Key Property (Reduction Formula):**
```
Γ(n) = (n-1)·Γ(n-1)
```

**For positive integers:**
```
Γ(n) = (n-1)!         (n is a positive integer)

Example: Γ(5) = 4! = 24
         Γ(1) = 0! = 1
         Γ(1/2) = √π
```

> Yaad Rakho — Sirf integer n ke liye Gamma function factorial jitna hota hai: Γ(n) = (n-1)!. Agar n integer nahi hai (jaise 1/2), toh use standard value Γ(1/2) = √π yaad rakho.

---

### Relation Between Beta and Gamma Functions

Beta aur Gamma functions is formula se related hain:

```
B(m, n) = [Γ(m) · Γ(n)] / Γ(m+n)
```

### Worked Example

```
Find B(3, 4) using Gamma functions

B(3, 4) = Γ(3)·Γ(4) / Γ(7)

Γ(3) = 2! = 2
Γ(4) = 3! = 6
Γ(7) = 6! = 720

B(3, 4) = (2 × 6) / 720 = 12/720 = 1/60
```

> Example — Agar exam me poocha jaaye "B(m,n) ko Gamma me convert karke solve karo" toh formula B(m,n) = Γ(m)Γ(n)/Γ(m+n) yaad rakho aur seedha substitute karo — bahut common 5-mark question hai.

---

### Quick Summary Table

| Concept | Formula |
|---------|---------|
| Maxima condition | f'(x)=0 and f''(x)<0 |
| Minima condition | f'(x)=0 and f''(x)>0 |
| Product Rule | (uv)' = u'v + uv' |
| Chain Rule | [f(g(x))]' = f'(g(x))·g'(x) |
| Beta Function | B(m,n) = ∫₀¹ x^(m-1)(1-x)^(n-1) dx |
| Gamma Function | Γ(n) = ∫₀^∞ e^(-x)x^(n-1) dx = (n-1)! for integers |
| Beta-Gamma Relation | B(m,n) = Γ(m)Γ(n)/Γ(m+n) |

> Warning — Beta function ki limits **0 se 1** hoti hain, jabki Gamma function ki limits **0 se ∞** hoti hain — exam me ye mixup na karo, ye ek common galti hai.
