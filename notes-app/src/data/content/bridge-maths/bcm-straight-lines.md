## Straight Lines — Forms Of Equations Aur Angle Between Lines

### Coordinate Geometry Ka Quick Recall

Do dimensional plane me har point $(x, y)$ coordinates se represent hota hai. **Origin** $(0,0)$ center point hai.

**Distance Formula** (do points ke beech):

$$
\text{Distance} = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}
$$

---

### Slope Of A Line

**Slope ($m$)** batata hai line kitni "tedhi" hai — horizontal se kitna angle banati hai:

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

| Slope Value | Line Kaisi Hai |
|--------------|-------------------|
| $m = 0$ | Horizontal line |
| $m$ = undefined (infinite) | Vertical line |
| $m > 0$ | Upar ki taraf jaati line (left se right) |
| $m < 0$ | Neeche ki taraf jaati line |

> Socho Aise — Slope ek "sidhai ki hill" jaisa hai — jitni zyada slope, utni tez chadhai. Flat road ka slope zero hota hai, aur seedhi deewar (vertical) ka slope undefined hota hai kyunki denominator zero ho jaata hai.

### Angle Between Two Lines

$$
\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|
$$

| Condition | Matlab |
|-----------|--------|
| $m_1 = m_2$ | Lines parallel hain |
| $m_1 \times m_2 = -1$ | Lines perpendicular hain |

**Worked Example — Angle Between Do Lines:**

Line 1 ka slope $m_1 = 3$, Line 2 ka slope $m_2 = 2$

$$
\tan\theta = \frac{m_1 - m_2}{1 + m_1 m_2} = \frac{3-2}{1+3\times2} = \frac{1}{7}
$$

$$
\theta = \tan^{-1}\left(\frac{1}{7}\right) \approx 8.13^\circ
$$

> Warning — Formula me hamesha $\left|\frac{m_1-m_2}{1+m_1m_2}\right|$ ka absolute value liya jaata hai kyunki angle negative nahi hota — do lines ke beech do angles bante hain ($\theta$ aur $180^\circ-\theta$), convention se hum chhota wala (acute angle) leta hain.

---

### Equations Of A Line — Various Forms

| Form | Equation | Kab Use Karein |
|------|----------|-------------------|
| **Point-Slope Form** | $y - y_1 = m(x - x_1)$ | Jab ek point aur slope pata ho |
| **Slope-Intercept Form** | $y = mx + c$ | Jab slope aur y-intercept pata ho |
| **Two-Point Form** | $\dfrac{y-y_1}{y_2-y_1} = \dfrac{x-x_1}{x_2-x_1}$ | Jab do points pata hon |
| **Intercept Form** | $\dfrac{x}{a} + \dfrac{y}{b} = 1$ | Jab x aur y intercepts pata hon |
| **Normal Form** | $x\cos\alpha + y\sin\alpha = p$ | Jab origin se perpendicular distance pata ho |

> Example — Ek line jo $(2,3)$ se guzarti hai aur slope $4$ hai: Point-Slope form use karo → $y - 3 = 4(x - 2)$ → simplify: $y = 4x - 5$

**Worked Example — Slope-Intercept Form:**

Ek line ka slope $m = 2$ hai aur y-axis ko $(0, 5)$ par cut karti hai (matlab $c = 5$).

$$
y = mx + c = 2x + 5
$$

Ye line ka equation hai. Check karne ke liye $x=0$ rakho: $y = 2(0)+5 = 5$ — matches y-intercept.

**Worked Example — Two-Point Form:**

Line do points $A(1, 2)$ aur $B(4, 8)$ se guzarti hai. Equation nikaalo.

$$
\frac{y - 2}{8 - 2} = \frac{x - 1}{4 - 1}
\quad\Rightarrow\quad
\frac{y-2}{6} = \frac{x-1}{3}
$$

$$
3(y-2) = 6(x-1) \quad\Rightarrow\quad 3y - 6 = 6x - 6 \quad\Rightarrow\quad 3y = 6x
$$

Isliye line ka equation hai: $y = 2x$ (ya $2x - y = 0$)

**Worked Example — Intercept Form:**

Ek line x-axis ko $(4, 0)$ par aur y-axis ko $(0, 6)$ par cut karti hai. Equation nikaalo.

X-intercept $a = 4$, Y-intercept $b = 6$

$$
\frac{x}{4} + \frac{y}{6} = 1
$$

Dono taraf $12$ se multiply karo (LCM of 4 and 6):

$$
3x + 2y = 12
$$

> Yaad Rakho — Chaaro forms actually same concept ke different "views" hain — kisi bhi do independent conditions (point+slope, do points, do intercepts) se line uniquely define ho jaati hai. Jo info di ho, usi ke hisaab se sahi form choose karo — isse calculation kaafi easy ho jaata hai.

---

### Lines Parallel To Axis

| Line | Equation |
|------|----------|
| X-axis ke parallel | $y = k$ (constant) |
| Y-axis ke parallel | $x = k$ (constant) |

> Yaad Rakho — X-axis ke parallel line me **y hamesha same** rehta hai (jaise $y=5$), Y-axis ke parallel me **x hamesha same** rehta hai (jaise $x=3$). Naam ulta lagta hai isliye confusion hoti hai — dhyan se yaad rakho!

---

### General Equation Of A Line

$$
Ax + By + C = 0
$$

Yahan slope $= -\dfrac{A}{B}$, aur ye form kisi bhi line ko represent kar sakta hai (vertical lines bhi, jo slope-intercept form me possible nahi).

---

### Family Of Lines Through Intersection Point

Agar do lines $L_1: A_1x+B_1y+C_1=0$ aur $L_2: A_2x+B_2y+C_2=0$ ek point par intersect karti hain, toh unke intersection point se guzarne wali **saari lines** is form me likhi ja sakti hain:

$$
L_1 + \lambda L_2 = 0 \qquad (\lambda \text{ koi bhi real number})
$$

Ye idea useful hai kyunki humein actual intersection point nikaalne ki zaroorat nahi padti — bas $\lambda$ ki value adjust karke required line mil jaati hai.

**Worked Example — Family Of Lines Se Equation Nikaalna:**

Do lines diye hain: $L_1: x + y - 5 = 0$ aur $L_2: 2x - y + 1 = 0$

Inke intersection point se guzarne wali aur point $(1, 4)$ se bhi guzarne wali line ka equation nikaalo.

$$
\text{Family of lines: } (x + y - 5) + \lambda(2x - y + 1) = 0
$$

Ye line $(1, 4)$ se bhi guzarti hai, toh $x=1, y=4$ substitute karo:

$$
(1 + 4 - 5) + \lambda(2\times1 - 4 + 1) = 0 \quad\Rightarrow\quad 0 + \lambda(-1) = 0 \quad\Rightarrow\quad \lambda = 0
$$

$\lambda=0$ daal do family equation me:

$$
(x + y - 5) + 0\times(2x - y + 1) = 0 \quad\Rightarrow\quad x + y - 5 = 0
$$

Isliye required line ka equation hai: $x + y - 5 = 0$ (Interesting — ye khud $L_1$ nikla, matlab point $(1,4)$ $L_1$ par hi tha)

> Tip — Family of lines wale question me jo bhi extra condition di ho (point diya ho, ya kisi aur line ke parallel/perpendicular hona ho), usi condition ko family equation me substitute karke $\lambda$ nikalo — phir wapas family equation me daal do.

---

### Distance Of A Point From A Line

$$
\text{Distance} = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}
$$

**Worked Example — Point Se Line Ki Distance:**

Point $P(3, 4)$ ki line $3x - 4y + 5 = 0$ se distance nikaalo. Yahan $A=3, B=-4, C=5, x_1=3, y_1=4$

$$
\text{Distance} = \frac{|3(3) + (-4)(4) + 5|}{\sqrt{3^2 + (-4)^2}} = \frac{|9-16+5|}{\sqrt{9+16}} = \frac{|-2|}{\sqrt{25}} = \frac{2}{5} = 0.4 \text{ units}
$$

> Tip — Exam me formula-based questions ke liye ek chhota "formula sheet" yaad rakho: Slope, Point-Slope form, Distance formula, aur Family of Lines — ye char sabse zyada directly use hote hain numerical solve karne me.

> Warning — Distance formula me hamesha absolute value ($|\ |$) lena mat bhoolo — distance kabhi negative nahi ho sakti, aur denominator me $A$ aur $B$ original equation ke coefficients hone chahiye, kisi simplified form ke nahi.
