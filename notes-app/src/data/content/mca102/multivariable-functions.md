## Functions of Multiple Variables

Ab tak humne functions dekhe jo sirf ek variable `x` par depend karte the — `f(x)`. Lekin real life me kaafi quantities **do ya zyada variables** par depend karti hain.

```
z = f(x, y)     — do variables ka function, jaise z = x² + y²

Example: Ek room ka temperature (T) uski length (x) aur width (y) dono par depend kar sakta hai:
T = f(x, y) = x² + y² - 2xy
```

> Socho Aise — Single variable function ek curve (2D line) banata hai, lekin do-variable function `z = f(x,y)` ek **surface** (3D shape) banata hai — jaise pahaad ki height jo uski location (x,y) par depend karti hai.

---

## Limit Aur Continuity for Multivariable Functions

Single variable me hum sirf do directions se approach kar sakte the (left aur right). Multivariable function me point `(a, b)` tak **infinite directions** se approach kar sakte hain — isliye limit ka concept thoda tricky ho jaata hai.

```
lim (x,y)→(a,b) f(x,y) = L

Condition: Chahe kisi bhi path se (x,y) → (a,b) jao, f(x,y) hamesha
same value L ke paas jaana chahiye — tabhi limit exist karti hai.
```

**Continuity** — Function `f(x,y)` point `(a,b)` par continuous hai agar:

```
1. f(a,b) defined ho
2. lim (x,y)→(a,b) f(x,y) exist kare
3. lim (x,y)→(a,b) f(x,y) = f(a,b)
```

> Warning — Multivariable limit check karne ke liye sirf x-axis aur y-axis se approach karna kaafi nahi hai — agar do alag paths (jaise y=x aur y=x²) se different values milti hain, toh limit exist hi nahi karti. Ye exam me common trick hota hai.

---

## Partial Derivatives

Jab function multiple variables ka ho, hum ek time par sirf **ek variable ke respect me** differentiate karte hain, baaki sab variables ko **constant** treat karte hue. Isko **partial derivative** kehte hain.

```
Notation:
∂f/∂x   — f ka x ke respect me partial derivative (y ko constant maano)
∂f/∂y   — f ka y ke respect me partial derivative (x ko constant maano)

(∂ symbol ko "del" ya "partial d" bolte hain — normal d se alag hota hai
kyunki multiple variables involve hain)
```

### Definition (Limit Form)

```
∂f/∂x = lim (h→0) [f(x+h, y) - f(x,y)] / h

∂f/∂y = lim (k→0) [f(x, y+k) - f(x,y)] / k
```

> Yaad Rakho — Partial derivative lete waqt baaki saare variables ko **number** (constant) maan lo — bas usi ek variable ke rules of differentiation apply karo jiske respect me derivative lena hai.

---

## Worked Example

```
f(x, y) = x²y + 3xy² + y³

Find ∂f/∂x and ∂f/∂y

∂f/∂x:  (y ko constant treat karo)
∂f/∂x = 2xy + 3y² + 0
      = 2xy + 3y²

∂f/∂y:  (x ko constant treat karo)
∂f/∂y = x² + 6xy + 3y²
```

**Verification approach** — Har term ko check karo:
- `x²y` → x ke respect me: `2xy` | y ke respect me: `x²`
- `3xy²` → x ke respect me: `3y²` | y ke respect me: `6xy`
- `y³` → x ke respect me: `0` (constant, x nahi hai) | y ke respect me: `3y²`

---

### Second Order Partial Derivatives

Partial derivative ko dobara partial differentiate kar sakte hain:

```
∂²f/∂x²   — x ke respect me do baar differentiate
∂²f/∂y²   — y ke respect me do baar differentiate
∂²f/∂x∂y  — pehle y ke respect me, phir x ke respect me (mixed partial)
∂²f/∂y∂x  — pehle x ke respect me, phir y ke respect me (mixed partial)
```

**Important property (Clairaut's theorem):** Zyadatar well-behaved functions ke liye:
```
∂²f/∂x∂y = ∂²f/∂y∂x

(Mixed partials order matter nahi karta — dono barabar aate hain)
```

**Example continued (from above):**
```
∂f/∂x = 2xy + 3y²

∂²f/∂x∂y = ∂/∂y (2xy + 3y²) = 2x + 6y

∂f/∂y = x² + 6xy + 3y²

∂²f/∂y∂x = ∂/∂x (x² + 6xy + 3y²) = 2x + 6y

Dono barabar hain: 2x + 6y = 2x + 6y ✓
```

> Tip — Exam me agar "verify that ∂²f/∂x∂y = ∂²f/∂y∂x" jaisa question aaye, dono taraf se solve karke last me equal dikhao — ye ek guaranteed easy 5-mark question hota hai agar steps clean likho.

---

### Quick Summary Table

| Concept | Meaning |
|---------|---------|
| f(x, y) | Function of two variables — 3D surface |
| lim (x,y)→(a,b) f(x,y) | Limit must be same from every path |
| Continuity at (a,b) | f(a,b) defined, limit exists, both equal |
| ∂f/∂x | Differentiate w.r.t x, treat y as constant |
| ∂f/∂y | Differentiate w.r.t y, treat x as constant |
| ∂²f/∂x∂y = ∂²f/∂y∂x | Mixed partials are usually equal |

> Example — f(x,y) = x³ + y³ - 3xy ke liye ∂f/∂x = 3x² - 3y, ∂f/∂y = 3y² - 3x. Aise questions me bas har variable ka standard power rule apply karo, doosre variable ko number treat karke.
