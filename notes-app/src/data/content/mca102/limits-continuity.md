## Limit Kya Hoti Hai?

Limit ka matlab hai — jab $x$ kisi value $a$ ke bahut **paas** jaata hai (chahe $a$ tak pahunche na pahunche), function $f(x)$ kis value ke paas jaata hai.

$$
\lim_{x \to a} f(x) = L
$$

Matlab: $x$, $a$ ke jitna paas jaata hai, $f(x)$ utna hi $L$ ke paas jaata hai.

**Example:**

$$
f(x) = \frac{x^2 - 4}{x - 2}
$$

$x = 2$ par $f(x)$ undefined hai ($0/0$ form), lekin:

$$
\lim_{x \to 2} f(x) = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4
$$

Toh function $x=2$ par defined nahi, phir bhi limit exist karti hai $= 4$

> Socho Aise — Limit aisi hai jaise tum kisi station ke paas train se aa rahe ho. Chahe train station par ruke ya na ruke, tum bata sakte ho ki wo kis station ke "paas" pahunch rahi hai. Wahi uski limit hai.

---

## Continuity

Function $f(x)$ point $x = a$ par **continuous** kaha jaata hai agar teeno conditions satisfy ho:

1. $f(a)$ defined ho (function ki value exist kare)
2. $\displaystyle\lim_{x \to a} f(x)$ exist kare (left limit = right limit)
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$ (limit aur actual value match kare)

Agar in teeno me se koi bhi ek fail ho jaaye, function us point par **discontinuous** hai.

> Yaad Rakho — Continuity ki teen shartein: value exist ho, limit exist ho, aur dono barabar ho. Exam me ye teeno point-wise likhna zaroori hai — full marks isi se milte hain.

---

## Differentiability

Function $f(x)$, point $x = a$ par **differentiable** hota hai agar uska derivative us point par exist kare, matlab:

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

Ye limit exist karni chahiye (aur ek hi value honi chahiye left aur right dono se).

**Important relation:** Har differentiable function continuous hota hai, lekin har continuous function differentiable nahi hota.

Example: $f(x) = |x|$ point $x = 0$ par continuous hai (koi break nahi), lekin differentiable nahi hai — kyunki $x=0$ par graph me "corner/kink" hai, left se slope $= -1$, right se slope $= +1$ — dono match nahi karte.

> Warning — "Continuous $\Rightarrow$ Differentiable" ye ULTA nahi hota — bahut common mistake hai. Differentiable hona strict condition hai, continuous hona uske liye zaroori hai par sufficient nahi.

---

## Indeterminate Forms

Kabhi kabhi limit direct substitute karne par aisi values milti hain jinka koi fixed matlab nahi hota — inhe **indeterminate forms** kehte hain:

| Form | Example |
|------|---------|
| $0/0$ | $\lim_{x \to 0} \dfrac{\sin x}{x}$ |
| $\infty/\infty$ | $\lim_{x \to \infty} \dfrac{x^2}{e^x}$ |
| $\infty - \infty$ | $\lim_{x \to \infty} (x - \sqrt{x^2+x})$ |
| $0 \times \infty$ | $\lim_{x \to 0} x \cdot \ln(x)$ |
| $1^\infty$ | $\lim_{x \to \infty} (1 + 1/x)^x$ |
| $0^0, \infty^0$ | Special limit cases |

Inhe solve karne ke liye simple substitution kaam nahi karta — algebra tricks (factoring, rationalizing) ya **L'Hospital's Rule** use karte hain.

---

## L'Hospital's Rule

Agar $\lim_{x \to a} f(x)/g(x)$ **$0/0$** ya **$\infty/\infty$** form deta hai, toh:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

(Numerator aur denominator ko alag-alag differentiate karo, phir limit lo. Agar phir bhi $0/0$ ya $\infty/\infty$ mile, dobara apply karo.)

### Worked Example

Find: $\lim_{x \to 0} \dfrac{\sin x}{x}$

Direct substitution: $\sin(0)/0 = 0/0$ (indeterminate)

Apply L'Hospital's Rule:

$$
\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = \cos(0) = 1
$$

Answer: $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$

Find: $\lim_{x \to \infty} \dfrac{x^2}{e^x}$

Direct substitution: $\infty/\infty$ (indeterminate)

1st application: $\lim_{x \to \infty} \dfrac{2x}{e^x}$ $\to$ still $\infty/\infty$

2nd application: $\lim_{x \to \infty} \dfrac{2}{e^x}$ $\to$ $= 2/\infty = 0$

Answer: $0$

> Tip — L'Hospital's Rule sirf $0/0$ ya $\infty/\infty$ form par lagta hai. Doosre indeterminate forms ($\infty-\infty$, $0\times\infty$, $1^\infty$) ko pehle algebra se $0/0$ ya $\infty/\infty$ me convert karo, phir hi rule apply karo.

---

## Rolle's Theorem

**Statement** — Agar function $f(x)$:
1. $[a, b]$ par continuous hai
2. $(a, b)$ par differentiable hai
3. $f(a) = f(b)$

toh kam se kam ek point $c \in (a, b)$ exist karta hai jaha $f'(c) = 0$.

**Geometric meaning** — Agar curve ke dono endpoints same height par hain, toh beech me kahin na kahin tangent horizontal (slope 0) hoga — jaise ek ball upar jaake wapas neeche aati hai, top point par velocity zero hoti hai.

---

## Lagrange's Mean Value Theorem (LMVT)

**Statement** — Agar function $f(x)$:
1. $[a, b]$ par continuous hai
2. $(a, b)$ par differentiable hai

toh kam se kam ek point $c \in (a, b)$ exist karta hai jaha:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

**Geometric meaning** — Curve ke kisi point par tangent ki slope, endpoints ko jodne wali chord ki slope ke barabar hoti hai.

> Socho Aise — Agar tum car se 100 km, 2 ghante me travel karte ho, average speed 50 km/h hui. LMVT kehta hai ki safar ke beech me kam se kam ek moment aisa zaroor aaya hoga jab speedometer exactly 50 km/h dikha raha tha — chahe tumne kabhi speed up/slow down kiya ho.

### Simple Example

$$
f(x) = x^2 \quad \text{on } [1, 3]
$$

$f(1) = 1$, $f(3) = 9$

By LMVT: $f'(c) = \dfrac{f(3)-f(1)}{3-1} = \dfrac{9-1}{2} = 4$

$f'(x) = 2x \to 2c = 4 \to c = 2$

$c = 2$ lies in $(1,3)$ ✓ LMVT verified

> Example — Rolle's theorem LMVT ka special case hai jab $f(a) = f(b)$ ho — us case me chord ki slope $0$ ho jaati hai, isliye $f'(c) = 0$ milta hai.
