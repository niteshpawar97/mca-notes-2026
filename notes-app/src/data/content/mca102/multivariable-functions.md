## Functions of Multiple Variables

Ab tak humne functions dekhe jo sirf ek variable $x$ par depend karte the — $f(x)$. Lekin real life me kaafi quantities **do ya zyada variables** par depend karti hain.

$$
z = f(x, y)
$$

do variables ka function, jaise $z = x^2 + y^2$

Example: Ek room ka temperature ($T$) uski length ($x$) aur width ($y$) dono par depend kar sakta hai:

$$
T = f(x, y) = x^2 + y^2 - 2xy
$$

> Socho Aise — Single variable function ek curve (2D line) banata hai, lekin do-variable function $z = f(x,y)$ ek **surface** (3D shape) banata hai — jaise pahaad ki height jo uski location $(x,y)$ par depend karti hai.

---

## Limit Aur Continuity for Multivariable Functions

Single variable me hum sirf do directions se approach kar sakte the (left aur right). Multivariable function me point $(a, b)$ tak **infinite directions** se approach kar sakte hain — isliye limit ka concept thoda tricky ho jaata hai.

$$
\lim_{(x,y) \to (a,b)} f(x,y) = L
$$

Condition: Chahe kisi bhi path se $(x,y) \to (a,b)$ jao, $f(x,y)$ hamesha same value $L$ ke paas jaana chahiye — tabhi limit exist karti hai.

**Continuity** — Function $f(x,y)$ point $(a,b)$ par continuous hai agar:

1. $f(a,b)$ defined ho
2. $\displaystyle\lim_{(x,y) \to (a,b)} f(x,y)$ exist kare
3. $\displaystyle\lim_{(x,y) \to (a,b)} f(x,y) = f(a,b)$

> Warning — Multivariable limit check karne ke liye sirf $x$-axis aur $y$-axis se approach karna kaafi nahi hai — agar do alag paths (jaise $y=x$ aur $y=x^2$) se different values milti hain, toh limit exist hi nahi karti. Ye exam me common trick hota hai.

---

## Partial Derivatives

Jab function multiple variables ka ho, hum ek time par sirf **ek variable ke respect me** differentiate karte hain, baaki sab variables ko **constant** treat karte hue. Isko **partial derivative** kehte hain.

Notation:

- $\dfrac{\partial f}{\partial x}$ — $f$ ka $x$ ke respect me partial derivative ($y$ ko constant maano)
- $\dfrac{\partial f}{\partial y}$ — $f$ ka $y$ ke respect me partial derivative ($x$ ko constant maano)

($\partial$ symbol ko "del" ya "partial d" bolte hain — normal $d$ se alag hota hai kyunki multiple variables involve hain)

### Definition (Limit Form)

$$
\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x,y)}{h}
$$

$$
\frac{\partial f}{\partial y} = \lim_{k \to 0} \frac{f(x, y+k) - f(x,y)}{k}
$$

> Yaad Rakho — Partial derivative lete waqt baaki saare variables ko **number** (constant) maan lo — bas usi ek variable ke rules of differentiation apply karo jiske respect me derivative lena hai.

---

## Worked Example

$$
f(x, y) = x^2y + 3xy^2 + y^3
$$

Find $\dfrac{\partial f}{\partial x}$ and $\dfrac{\partial f}{\partial y}$

$\dfrac{\partial f}{\partial x}$: ($y$ ko constant treat karo)

$$
\frac{\partial f}{\partial x} = 2xy + 3y^2 + 0 = 2xy + 3y^2
$$

$\dfrac{\partial f}{\partial y}$: ($x$ ko constant treat karo)

$$
\frac{\partial f}{\partial y} = x^2 + 6xy + 3y^2
$$

**Verification approach** — Har term ko check karo:
- $x^2y$ $\to$ $x$ ke respect me: $2xy$ | $y$ ke respect me: $x^2$
- $3xy^2$ $\to$ $x$ ke respect me: $3y^2$ | $y$ ke respect me: $6xy$
- $y^3$ $\to$ $x$ ke respect me: $0$ (constant, $x$ nahi hai) | $y$ ke respect me: $3y^2$

---

### Second Order Partial Derivatives

Partial derivative ko dobara partial differentiate kar sakte hain:

- $\dfrac{\partial^2 f}{\partial x^2}$ — $x$ ke respect me do baar differentiate
- $\dfrac{\partial^2 f}{\partial y^2}$ — $y$ ke respect me do baar differentiate
- $\dfrac{\partial^2 f}{\partial x \partial y}$ — pehle $y$ ke respect me, phir $x$ ke respect me (mixed partial)
- $\dfrac{\partial^2 f}{\partial y \partial x}$ — pehle $x$ ke respect me, phir $y$ ke respect me (mixed partial)

**Important property (Clairaut's theorem):** Zyadatar well-behaved functions ke liye:

$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}
$$

(Mixed partials order matter nahi karta — dono barabar aate hain)

**Example continued (from above):**

$$
\frac{\partial f}{\partial x} = 2xy + 3y^2
$$

$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial y}(2xy + 3y^2) = 2x + 6y
$$

$$
\frac{\partial f}{\partial y} = x^2 + 6xy + 3y^2
$$

$$
\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial x}(x^2 + 6xy + 3y^2) = 2x + 6y
$$

Dono barabar hain: $2x + 6y = 2x + 6y$ ✓

> Tip — Exam me agar "verify that $\dfrac{\partial^2 f}{\partial x \partial y} = \dfrac{\partial^2 f}{\partial y \partial x}$" jaisa question aaye, dono taraf se solve karke last me equal dikhao — ye ek guaranteed easy 5-mark question hota hai agar steps clean likho.

---

### Quick Summary Table

| Concept | Meaning |
|---------|---------|
| $f(x, y)$ | Function of two variables — 3D surface |
| $\lim_{(x,y) \to (a,b)} f(x,y)$ | Limit must be same from every path |
| Continuity at $(a,b)$ | $f(a,b)$ defined, limit exists, both equal |
| $\dfrac{\partial f}{\partial x}$ | Differentiate w.r.t $x$, treat $y$ as constant |
| $\dfrac{\partial f}{\partial y}$ | Differentiate w.r.t $y$, treat $x$ as constant |
| $\dfrac{\partial^2 f}{\partial x \partial y} = \dfrac{\partial^2 f}{\partial y \partial x}$ | Mixed partials are usually equal |

> Example — $f(x,y) = x^3 + y^3 - 3xy$ ke liye $\dfrac{\partial f}{\partial x} = 3x^2 - 3y$, $\dfrac{\partial f}{\partial y} = 3y^2 - 3x$. Aise questions me bas har variable ka standard power rule apply karo, doosre variable ko number treat karke.
