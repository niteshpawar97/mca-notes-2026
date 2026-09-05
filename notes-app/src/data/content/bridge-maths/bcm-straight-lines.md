## Straight Lines — Forms Of Equations Aur Angle Between Lines

### Coordinate Plane Ka Quick Recall

Ek flat surface (jaise graph paper) ko **coordinate plane** kehte hain. Isme har point ko do numbers se batate hain — $(x, y)$ — jahan $x$ batata hai point kitna **left-right** hai, aur $y$ batata hai kitna **upar-neeche** hai.

**Origin** $(0,0)$ is plane ka center point hai — jahan se sab measure karte hain.

**Distance Formula** (do points $(x_1,y_1)$ aur $(x_2,y_2)$ ke beech):

$$
\text{Distance} = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}
$$

> Socho Aise — Ye Pythagoras theorem hi hai! Do points ke beech ek horizontal difference ($x_2-x_1$) aur ek vertical difference ($y_2-y_1$) hoti hai — ye dono ek right-angle triangle ke do sides hain, aur seedhi-line-distance uska hypotenuse hai.

---

### Slope Of A Line — Line Kitni "Tedhi" Hai

**Slope ($m$)** batata hai line kitni tedhi (steep) hai aur kis taraf jhuki hai:

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

Matlab: **jitna upar-neeche gaye, utna divide karo jitna left-right gaye** ("rise over run").

| Slope Value | Line Kaisi Hai |
|--------------|-------------------|
| $m = 0$ | Horizontal line (flat) |
| $m$ = undefined (infinite) | Vertical line |
| $m > 0$ | Upar ki taraf jaati line (left se right dekho toh) |
| $m < 0$ | Neeche ki taraf jaati line |

> Socho Aise — Slope ek "sidhai ki hill" jaisa hai — jitni zyada slope, utni tez chadhai. Flat road ka slope zero hota hai, aur seedhi deewar (vertical) ka slope undefined hota hai kyunki denominator ($x_2-x_1$) zero ho jaata hai — aur zero se divide nahi kar sakte.

> Question — Points $(1, 2)$ aur $(4, 8)$ se guzarne wali line ka slope nikaalo.

**Solution** — $m = \dfrac{8-2}{4-1} = \dfrac{6}{3} = 2$

---

### Angle Between Two Lines

Do lines apas me kis angle par milti hain, ye unke slopes se nikal sakte hain:

$$
\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|
$$

| Condition | Matlab |
|-----------|--------|
| $m_1 = m_2$ | Lines parallel hain |
| $m_1 \times m_2 = -1$ | Lines perpendicular hain |

> Warning — Formula me hamesha absolute value ($|\ |$) liya jaata hai kyunki angle negative nahi hota — do lines ke beech technically do angles bante hain ($\theta$ aur $180^\circ-\theta$), convention se hum chhota wala (acute angle) leta hain.

**Worked Example — Angle Between Do Lines:**

Line 1 ka slope $m_1 = 3$, Line 2 ka slope $m_2 = 2$

$$
\tan\theta = \left|\frac{3-2}{1+3\times2}\right| = \left|\frac{1}{7}\right| = \frac{1}{7}
$$

$$
\theta = \tan^{-1}\left(\frac{1}{7}\right) \approx 8.13^\circ
$$

> Question — Do lines ke slopes $m_1 = 2$ aur $m_2 = -\frac{1}{2}$ hain. Ye lines parallel hain, perpendicular hain, ya koi bhi nahi?

**Solution** — Check karo $m_1 \times m_2 = 2 \times (-\frac{1}{2}) = -1$. Ye $-1$ hai, isliye lines **perpendicular** hain.

---

### Equations Of A Line — Various Forms

Ek line ko likhne ke **5 alag-alag tarike** hain — kaunsa use karna hai ye is baat par depend karta hai ki tumhe **kya-kya diya gaya hai** (question me).

| Form | Equation | Kab Use Karein |
|------|----------|-------------------|
| **Point-Slope Form** | $y - y_1 = m(x - x_1)$ | Jab ek point aur slope pata ho |
| **Slope-Intercept Form** | $y = mx + c$ | Jab slope aur y-intercept pata ho |
| **Two-Point Form** | $\dfrac{y-y_1}{y_2-y_1} = \dfrac{x-x_1}{x_2-x_1}$ | Jab do points pata hon |
| **Intercept Form** | $\dfrac{x}{a} + \dfrac{y}{b} = 1$ | Jab x aur y intercepts pata hon |
| **Normal Form** | $x\cos\alpha + y\sin\alpha = p$ | Jab origin se perpendicular distance pata ho |

> Yaad Rakho — Ye paanch forms alag-alag formulas nahi hain — sab ek hi line ko likhne ke different "views" hain. Jo info question me di ho, usi ke hisaab se sahi form choose karo — isse calculation kaafi easy ho jaata hai.

**Worked Example — Point-Slope Form:**

Ek line jo $(2,3)$ se guzarti hai aur slope $4$ hai. Formula me daalo: $y - y_1 = m(x-x_1)$, yahan $x_1=2, y_1=3, m=4$

$$
y - 3 = 4(x - 2) \quad\Rightarrow\quad y - 3 = 4x - 8 \quad\Rightarrow\quad y = 4x - 5
$$

**Worked Example — Slope-Intercept Form:**

Ek line ka slope $m = 2$ hai aur y-axis ko $(0, 5)$ par cut karti hai (matlab $c = 5$). Seedha formula me daal do:

$$
y = mx + c = 2x + 5
$$

Check karne ke liye $x=0$ rakho: $y = 2(0)+5 = 5$ — matches y-intercept, sahi hai.

**Worked Example — Two-Point Form:**

Line do points $A(1, 2)$ aur $B(4, 8)$ se guzarti hai. Values formula me daalo ($x_1=1,y_1=2,x_2=4,y_2=8$):

$$
\frac{y - 2}{8 - 2} = \frac{x - 1}{4 - 1}
\quad\Rightarrow\quad
\frac{y-2}{6} = \frac{x-1}{3}
$$

Dono taraf cross-multiply karo:

$$
3(y-2) = 6(x-1) \quad\Rightarrow\quad 3y - 6 = 6x - 6 \quad\Rightarrow\quad 3y = 6x
$$

Isliye line ka equation hai: $y = 2x$ (ya $2x - y = 0$)

**Worked Example — Intercept Form:**

Ek line x-axis ko $(4, 0)$ par aur y-axis ko $(0, 6)$ par cut karti hai. X-intercept $a=4$, Y-intercept $b=6$ — seedha formula me daalo:

$$
\frac{x}{4} + \frac{y}{6} = 1
$$

Agar simplify karna ho, dono taraf $12$ se multiply karo (4 aur 6 ka LCM):

$$
3x + 2y = 12
$$

> Question — Ek line ka slope $-1$ hai aur ye point $(3, 2)$ se guzarti hai. Point-Slope form se equation nikaalo.

**Solution** — $y - 2 = -1(x-3) \Rightarrow y - 2 = -x + 3 \Rightarrow y = -x + 5$

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

Yahan slope $= -\dfrac{A}{B}$, aur ye form kisi bhi line ko represent kar sakta hai (vertical lines bhi, jo slope-intercept form me possible nahi — kyunki vertical line ka slope undefined hota hai).

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

**Step 1 — Family equation likho:**

$$
(x + y - 5) + \lambda(2x - y + 1) = 0
$$

**Step 2 — Ye line $(1, 4)$ se bhi guzarti hai, toh $x=1, y=4$ substitute karke $\lambda$ nikaalo:**

$$
(1 + 4 - 5) + \lambda(2\times1 - 4 + 1) = 0 \quad\Rightarrow\quad 0 + \lambda(-1) = 0 \quad\Rightarrow\quad \lambda = 0
$$

**Step 3 — $\lambda=0$ wapas family equation me daal do:**

$$
(x + y - 5) + 0\times(2x - y + 1) = 0 \quad\Rightarrow\quad x + y - 5 = 0
$$

Isliye required line ka equation hai: $x + y - 5 = 0$ (Interesting — ye khud $L_1$ nikla, matlab point $(1,4)$ pehle se hi $L_1$ par tha)

> Tip — Family of lines wale question me jo bhi extra condition di ho (point diya ho, ya kisi aur line ke parallel/perpendicular hona ho), usi condition ko family equation me substitute karke $\lambda$ nikalo — phir wapas family equation me daal do.

---

### Distance Of A Point From A Line

$$
\text{Distance} = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}
$$

> Warning — Distance formula me hamesha absolute value ($|\ |$) lena mat bhoolo — distance kabhi negative nahi ho sakti. Aur denominator me $A$ aur $B$ **original equation** ke coefficients hone chahiye, kisi simplified form ke nahi.

**Worked Example — Point Se Line Ki Distance:**

Point $P(3, 4)$ ki line $3x - 4y + 5 = 0$ se distance nikaalo.

**Step 1 — Values pehchaano:** $A=3, B=-4, C=5, x_1=3, y_1=4$

**Step 2 — Formula me daalo:**

$$
\text{Distance} = \frac{|3(3) + (-4)(4) + 5|}{\sqrt{3^2 + (-4)^2}} = \frac{|9-16+5|}{\sqrt{9+16}} = \frac{|-2|}{\sqrt{25}} = \frac{2}{5} = 0.4 \text{ units}
$$

> Question — Point $(1, 1)$ ki line $x + y - 4 = 0$ se distance nikaalo.

**Solution** — $A=1,B=1,C=-4,x_1=1,y_1=1$. $\text{Distance} = \dfrac{|1+1-4|}{\sqrt{1+1}} = \dfrac{|-2|}{\sqrt{2}} = \dfrac{2}{\sqrt{2}} \approx 1.41$ units

> Tip — Exam me formula-based questions ke liye ek chhota "formula sheet" yaad rakho: Slope, Point-Slope form, Distance formula, aur Family of Lines — ye char sabse zyada directly use hote hain numerical solve karne me.
