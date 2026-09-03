## Maxima Aur Minima Kya Hote Hain?

Kisi function ke graph me **maxima** wo point hai jaha value sabse zyada (local peak) hoti hai, aur **minima** wo point hai jaha value sabse kam (local valley) hoti hai.

Inhe nikalne ke liye hum derivative use karte hain — kyunki peak/valley par tangent ki slope hamesha **zero** hoti hai (horizontal tangent).

---

### First Derivative Test

Step 1: $f'(x) = 0$ solve karke "critical points" nikalo
Step 2: Un points ke aas-paas $f'(x)$ ka sign check karo

- Agar $f'(x)$: $+$ se $-$ me change ho (left $\to$ right) $\to$ Maxima
- Agar $f'(x)$: $-$ se $+$ me change ho (left $\to$ right) $\to$ Minima
- Agar sign change na ho $\to$ Neither (inflection point)

### Second Derivative Test (Faster Method)

Step 1: $f'(x) = 0$ solve karke critical points $x = c$ nikalo
Step 2: $f''(c)$ ka sign check karo

- $f''(c) < 0 \to$ Maxima at $x = c$ (curve neeche ki taraf mudta hai)
- $f''(c) > 0 \to$ Minima at $x = c$ (curve upar ki taraf mudta hai)
- $f''(c) = 0 \to$ Test fail, first derivative test use karo

> Yaad Rakho — "Second derivative negative → Maxima, positive → Minima" — yaad rakhne ka trick: negative (–) ka symbol upside-down "cap" jaisa dikhta hai jo peak/maxima ko represent karta hai.

---

### Worked Example

Find maxima and minima of: $f(x) = x^3 - 3x^2 - 9x + 5$

Step 1: $f'(x) = 3x^2 - 6x - 9$

$$
f'(x) = 0 \\
3x^2 - 6x - 9 = 0 \\
x^2 - 2x - 3 = 0 \\
(x-3)(x+1) = 0 \\
x = 3, \, x = -1
$$

Step 2: $f''(x) = 6x - 6$

At $x = -1$: $f''(-1) = 6(-1) - 6 = -12 < 0 \to$ Maxima at $x = -1$

At $x = 3$: $f''(3) = 6(3) - 6 = 12 > 0 \to$ Minima at $x = 3$

Maximum value: $f(-1) = -1 - 3 + 9 + 5 = 10$

Minimum value: $f(3) = 27 - 27 - 27 + 5 = -22$

> Tip — Exam me answer sirf "$x = -1$ maxima hai" likh ke mat rukna — maximum/minimum **value** bhi calculate karke likho ($f(-1) = 10$ jaisa). Full marks ke liye dono chahiye.

---

## Product Rule Aur Chain Rule

### Product Rule

Do functions ke product ka derivative:

$$
\frac{d}{dx}\left[u(x) \cdot v(x)\right] = u'(x) \cdot v(x) + u(x) \cdot v'(x)
$$

("first ka derivative $\times$ second") + ("first $\times$ second ka derivative")

**Example:**

$$
y = x^2 \cdot \sin(x)
$$

$$
\frac{dy}{dx} = (2x)\cdot\sin(x) + x^2\cdot\cos(x) = 2x\sin(x) + x^2\cos(x)
$$

### Chain Rule

Jab function ke andar function ho (composite function), toh:

$$
\frac{d}{dx}\left[f(g(x))\right] = f'(g(x)) \cdot g'(x)
$$

("outer function ka derivative, inner ko as-is rakh ke") $\times$ ("inner function ka derivative")

**Example:**

$$
y = \sin(x^2)
$$

Outer function: $\sin(u)$, Inner function: $u = x^2$

$$
\frac{dy}{dx} = \cos(x^2) \cdot (2x) = 2x\cos(x^2)
$$

> Socho Aise — Chain rule ek pyaaz (onion) ki tarah hai — layer by layer differentiate karte jao, bahar wali layer se andar wali layer tak, aur sabko multiply kar do.

---

## Beta Function

Beta function do positive numbers $m, n$ ka function hai, defined as:

$$
B(m, n) = \int_0^1 x^{m-1} (1-x)^{n-1} \, dx \qquad (m > 0,\ n > 0)
$$

**Symmetry Property:**

$$
B(m, n) = B(n, m)
$$

---

## Gamma Function

Gamma function ek positive number $n$ ka function hai, defined as:

$$
\Gamma(n) = \int_0^\infty e^{-x} x^{n-1} \, dx \qquad (n > 0)
$$

**Key Property (Reduction Formula):**

$$
\Gamma(n) = (n-1)\cdot\Gamma(n-1)
$$

**For positive integers:**

$$
\Gamma(n) = (n-1)! \qquad (n \text{ is a positive integer})
$$

Example: $\Gamma(5) = 4! = 24$

$\Gamma(1) = 0! = 1$

$\Gamma(1/2) = \sqrt{\pi}$

> Yaad Rakho — Sirf integer $n$ ke liye Gamma function factorial jitna hota hai: $\Gamma(n) = (n-1)!$. Agar $n$ integer nahi hai (jaise $1/2$), toh use standard value $\Gamma(1/2) = \sqrt{\pi}$ yaad rakho.

---

### Relation Between Beta and Gamma Functions

Beta aur Gamma functions is formula se related hain:

$$
B(m, n) = \frac{\Gamma(m) \cdot \Gamma(n)}{\Gamma(m+n)}
$$

### Worked Example

Find $B(3, 4)$ using Gamma functions

$$
B(3, 4) = \frac{\Gamma(3)\cdot\Gamma(4)}{\Gamma(7)}
$$

$\Gamma(3) = 2! = 2$

$\Gamma(4) = 3! = 6$

$\Gamma(7) = 6! = 720$

$$
B(3, 4) = \frac{2 \times 6}{720} = \frac{12}{720} = \frac{1}{60}
$$

> Example — Agar exam me poocha jaaye "$B(m,n)$ ko Gamma me convert karke solve karo" toh formula $B(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$ yaad rakho aur seedha substitute karo — bahut common 5-mark question hai.

---

### Quick Summary Table

| Concept | Formula |
|---------|---------|
| Maxima condition | $f'(x)=0$ and $f''(x)<0$ |
| Minima condition | $f'(x)=0$ and $f''(x)>0$ |
| Product Rule | $(uv)' = u'v + uv'$ |
| Chain Rule | $[f(g(x))]' = f'(g(x))\cdot g'(x)$ |
| Beta Function | $B(m,n) = \int_0^1 x^{m-1}(1-x)^{n-1}\,dx$ |
| Gamma Function | $\Gamma(n) = \int_0^\infty e^{-x}x^{n-1}\,dx = (n-1)!$ for integers |
| Beta-Gamma Relation | $B(m,n) = \dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$ |

> Warning — Beta function ki limits **$0$ se $1$** hoti hain, jabki Gamma function ki limits **$0$ se $\infty$** hoti hain — exam me ye mixup na karo, ye ek common galti hai.
