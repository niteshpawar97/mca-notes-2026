## Conic Sections — Circle, Parabola, Ellipse Aur Hyperbola

### Conic Section Kya Hai?

**Conic Section** wo curve hai jo ek cone ko ek plane se kaatne (slice) se milta hai — angle ke hisaab se alag-alag shapes milte hain.

```
        Cone ko slice karne ka angle:
Circle    → Cone ko bilkul horizontally cut karo
Ellipse   → Thoda tilt karke cut karo
Parabola  → Cone ki side ke parallel cut karo
Hyperbola → Dono halves ko cut karo (steep angle)
```

> Socho Aise — Ek ice-cream cone lo aur usse alag-alag angles pe kaato — flat cut karoge toh circle milega, tirchha kaatoge toh ellipse, aur bahut steep kaatoge toh hyperbola jaisa shape milega.

**Degenerate Cases:** Kabhi kabhi conic section ek point, straight line, ya do intersecting lines bhi ban sakta hai — inhe "degenerate conics" kehte hain.

---

### Eccentricity — Sab Conics Ko Jodne Wala Concept

Har conic section ki ek definition hai jo ek **fixed point (focus)** aur ek **fixed line (directrix)** ke through di ja sakti hai: conic un saare points ka set hai jinki focus se distance aur directrix se distance ka **ratio constant** rehta hai. Isi constant ratio ko **eccentricity ($e$)** kehte hain.

$$
e = \frac{\text{Focus se distance}}{\text{Directrix se distance}}
$$

Yehi ek single number decide karta hai konsa conic banega:

| Eccentricity Value | Conic |
|---------------------|-------|
| $e = 0$ | Circle |
| $0 < e < 1$ | Ellipse |
| $e = 1$ | Parabola |
| $e > 1$ | Hyperbola |

> Yaad Rakho — Eccentricity ek "kitna chapta/bulging hai" ka measure hai. $e=0$ matlab perfectly round (circle). Jaise-jaise $e$ badhta jaata hai, curve khulti jaati hai — pehle ellipse (thoda oval), phir exactly parabola ($e=1$), phir hyperbola (do khuli branches).

> Socho Aise — Eccentricity ko ek "flatness dial" jaisa socho — dial ko 0 pe rakho toh perfect circle, thoda ghumao toh ellipse, aur bahut ghumao toh curve khulke hyperbola ban jaata hai.

---

### Circle

**Standard Equation** (center origin par, radius $r$):

$$
x^2 + y^2 = r^2
$$

**General Form** (center $(h,k)$, radius $r$):

$$
(x-h)^2 + (y-k)^2 = r^2
$$

> Example — Center $(2,3)$, radius $5$ wale circle ka equation: $(x-2)^2 + (y-3)^2 = 25$

**Worked Example — Center Aur Radius Se Equation Likhna:**

Center $C(-1, 4)$, radius $r = 3$ wale circle ka equation likho. Yahan $h=-1, k=4, r=3$

$$
(x-(-1))^2 + (y-4)^2 = 3^2 \quad\Rightarrow\quad (x+1)^2 + (y-4)^2 = 9
$$

Agar expand karke general form chahiye:

$$
x^2 + 2x + 1 + y^2 - 8y + 16 = 9 \quad\Rightarrow\quad x^2 + y^2 + 2x - 8y + 8 = 0
$$

---

### Parabola

**Parabola** ek U-shape curve hai. Standard equation (vertex origin par):

$$
y^2 = 4ax \quad (\text{right ki taraf khulta hai}) \qquad\qquad x^2 = 4ay \quad (\text{upar ki taraf khulta hai})
$$

| Property | Matlab |
|----------|--------|
| Vertex | Curve ka sabse "sharp" point |
| Focus | Ek fixed point jahan se saari distances measure hoti hain |
| Directrix | Ek fixed line |
| Axis | Vertex aur focus se guzarne wali line, curve is line ke around symmetric hoti hai |

> Yaad Rakho — Parabola ka use real life me bahut hota hai — satellite dish, car headlights, bridge cables sab parabolic shape follow karte hain (kyunki wo signals/light ko ek focus point par collect karte hain).

**Latus Rectum:** Parabola ka **latus rectum** wo chord hai jo focus se guzarti hai aur axis ke **perpendicular** hoti hai — ye ek commonly asked property hai kyunki isse curve ki "chaudai" (width) at the focus measure hoti hai.

$$
\text{Latus Rectum ki length} \ (\text{for } y^2 = 4ax) = 4a
$$

> Example — Agar parabola $y^2 = 12x$ hai, toh $4a = 12$, matlab $a = 3$. Latus rectum ki length $= 4a = 12$ units. Focus hoga $(a, 0) = (3, 0)$.

---

### Ellipse

**Ellipse** ek "chapta hua circle" jaisa hota hai — do foci (fixed points) hote hain.

**Standard Equation:**

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \qquad (a = \text{semi-major axis}, \ b = \text{semi-minor axis})
$$

> Example — Agar $a=5, b=3$: $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$ — ye ek ellipse hai jiska major axis lamba hai (5 units) aur minor axis chhota (3 units).

**Property:** Kisi bhi point se dono foci tak ki distances ka **sum hamesha constant** rehta hai ($\text{sum} = 2a$) — yehi ellipse ki defining property hai.

**Latus Rectum:** Ellipse ka latus rectum bhi focus se guzarne wala aur major axis ke perpendicular chord hota hai.

$$
\text{Latus Rectum ki length} \ \left(\text{for } \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1\right) = \frac{2b^2}{a}
$$

**Relation Between $a$, $b$ Aur Eccentricity:**

$$
b^2 = a^2(1 - e^2) \qquad\text{ya}\qquad e = \sqrt{1 - \frac{b^2}{a^2}}
$$

> Tip — Ellipse ki eccentricity hamesha $0 < e < 1$ ke beech hoti hai — jitna $b$, $a$ ke kareeb hoga (matlab jitna round hoga), utni kam eccentricity hogi. Jab $b=a$ ho jaaye, $e=0$ ho jaata hai — yani ellipse ek circle ban jaata hai!

---

### Hyperbola

**Hyperbola** do alag curves ka set hota hai (jaise mirror image), foci se distances ka **difference constant** rehta hai (sum ki jagah).

**Standard Equation:**

$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1
$$

**Property:** Kisi bhi point se dono foci tak ki distances ka **difference hamesha constant** rehta hai ($\text{difference} = 2a$).

**Relation Between $a$, $b$ Aur Eccentricity:**

$$
b^2 = a^2(e^2 - 1)
$$

> Socho Aise — Hyperbola me eccentricity hamesha 1 se zyada hoti hai — jitna zyada $e$, utni "khuli hui" (wide) branches hoti hain.

---

### Identify Karna — Given Equation Konsa Conic Hai?

General second-degree equation $Ax^2 + By^2 + Cx + Dy + E = 0$ dekh kar $A$ aur $B$ ke coefficients ke sign/value compare karke pehchaan sakte hain.

**Worked Example:**

Equation di gayi hai: $4x^2 + 9y^2 - 16x + 18y - 11 = 0$

**Step 1** — $x^2$ aur $y^2$ ke coefficients dekho: $A=4$ ($x^2$ ka), $B=9$ ($y^2$ ka)

**Step 2** — Dono same sign (dono positive) hain — toh ye Circle ya Ellipse ho sakta hai.

**Step 3** — Coefficients equal nahi hain ($4 \neq 9$) — isliye Circle nahi, ye **Ellipse** hai.

(Agar $A=B$ hota, jaise $4x^2 + 4y^2$, tab Circle hota)

> Tip — Equation dekh kar conic pehchaanne ka trick:
> - $x^2$ aur $y^2$ dono same sign, **same coefficient** → **Circle**
> - Dono same sign, **alag coefficient** → **Ellipse**
> - Ek variable square, doosra sirf linear (power 1) → **Parabola**
> - $x^2$ aur $y^2$ ke beech **minus sign** (alag sign) → **Hyperbola**

---

### Circle Vs Ellipse Vs Parabola Vs Hyperbola — Quick Compare

| Conic | Standard Equation | Eccentricity | Shape |
|-------|----------------------|----------------|-------|
| Circle | $x^2 + y^2 = r^2$ | $e = 0$ | Perfect round |
| Ellipse | $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ | $0 < e < 1$ | Chapta circle (oval) |
| Parabola | $y^2 = 4ax$ | $e = 1$ | U-shape, ek hi curve |
| Hyperbola | $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ | $e > 1$ | Do mirror curves |

> Warning — Latus rectum ka formula parabola aur ellipse ke liye alag hai — parabola me $4a$, ellipse me $\dfrac{2b^2}{a}$. In dono ko mix mat karo, exam me ye common mistake hai.
