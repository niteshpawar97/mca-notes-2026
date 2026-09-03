## Introduction To Three-Dimensional Geometry

### 2D Se 3D Tak — Ek Extra Dimension

2D geometry me hum points $(x, y)$ se represent karte hain — ek plane (flat surface) par. **3D geometry** me ek aur dimension $z$ add ho jaata hai — points $(x, y, z)$ se represent hote hain, jo real world (length, width, height) ko represent karta hai.

> Socho Aise — 2D ek kaagaz ka flat page hai (sirf length aur width). 3D ek poora kamra hai jisme length, width ke saath height (upar-neeche) bhi hai — real duniya 3D hai!

---

### Coordinate Axes In Three Dimensions

3D me teen axes hote hain, jo ek dusre ke **perpendicular** hote hain:

```
         z (upar)
         |
         |
         |________ y (right)
        /
       /
      x (tumhare taraf)
```

| Axis | Direction |
|------|-----------|
| **X-axis** | Left-Right |
| **Y-axis** | Front-Back |
| **Z-axis** | Up-Down |

**Origin** — teeno axes jaha milte hain, point $(0, 0, 0)$.

---

### Coordinate Planes In 3D

Teeno axes mil kar **3 coordinate planes** banate hain:

| Plane | Kaunse Axes Se Bana |
|-------|-------------------------|
| **XY-plane** | X aur Y axis se ($z=0$) |
| **YZ-plane** | Y aur Z axis se ($x=0$) |
| **XZ-plane** | X aur Z axis se ($y=0$) |

Ye teeno planes poori 3D space ko **8 octants** me divide karte hain (jaise 2D me 4 quadrants hote hain).

> Yaad Rakho — 2D me 4 quadrants, 3D me **8 octants** hote hain — kyunki har axis ke +/- combination se $2\times2\times2 = 8$ regions banti hain.

---

### 8 Octants Aur Unka Sign Pattern

Har octant me point $(x, y, z)$ ke coordinates ka sign fix hota hai. Ye table exam me directly poocha ja sakta hai:

| Octant | x | y | z |
|--------|---|---|---|
| I | + | + | + |
| II | − | + | + |
| III | − | − | + |
| IV | + | − | + |
| V | + | + | − |
| VI | − | + | − |
| VII | − | − | − |
| VIII | + | − | − |

> Tip — Pehle 4 octants (I-IV) ka z **positive** hota hai, aur baaki 4 octants (V-VIII) ka z **negative** hota hai — bas ye yaad rakho, phir x aur y ka pattern bilkul 2D ke 4 quadrants jaisa hi repeat hota hai (+,+ then −,+ then −,− then +,−).

> Socho Aise — Octant ek "building ki floor + room" jaisa hai — z decide karta hai kaunsi floor (upar ya neeche), aur x,y decide karte hain us floor ke kaunse "quadrant/room" me point hai.

---

### Coordinates Of A Point In 3D

Ek point $P(x, y, z)$ teen values se define hota hai — origin se us point tak $x, y, z$ directions me kitni distance hai.

> Example — Point $(3, 4, 5)$ ka matlab: X-axis pe 3 units, Y-axis pe 4 units, Z-axis pe 5 units — teeno directions me measure karke us point tak pahunchte hain. Ye point Octant I me hai kyunki teeno coordinates positive hain.

---

### Distance Between Two Points In 3D

2D distance formula ka extension hi hai, bas ek aur term ($z$) add ho jaata hai:

$$
\text{Distance} = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}
$$

> Example — Points $A(1,2,3)$ aur $B(4,6,3)$ ke beech distance:
>
> $$
> \sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \sqrt{9+16+0} = \sqrt{25} = 5
> $$

**Doosra Worked Example — Alag Numbers Ke Saath:**

Points $P(2, -1, 3)$ aur $Q(5, 3, -1)$ ke beech distance nikaalo.

$$
\text{Distance} = \sqrt{(5-2)^2 + (3-(-1))^2 + (-1-3)^2} = \sqrt{3^2+4^2+(-4)^2}
$$

$$
= \sqrt{9+16+16} = \sqrt{41} \approx 6.4 \text{ units}
$$

> Warning — Negative coordinates ke saath subtraction karte waqt bahut dhyan se signs handle karo — $(3-(-1))$ matlab $3+1=4$, aisi chhoti galtiyaan poora answer bigaad deti hain.

---

### Direction Cosines Aur Direction Ratios Of A Line

Koi bhi line 3D space me kisi particular "direction" me jaati hai — is direction ko numbers se describe karne ke liye **direction cosines** aur **direction ratios** use hote hain.

**Direction Cosines** ($l, m, n$) — line jo angles $\alpha, \beta, \gamma$ banati hai X, Y, Z axes ke saath, unke cosines:

$$
l = \cos\alpha \quad (\text{X-axis se angle ka cosine}) \qquad m = \cos\beta \quad (\text{Y-axis}) \qquad n = \cos\gamma \quad (\text{Z-axis})
$$

**Sabse Important Relation:**

$$
l^2 + m^2 + n^2 = 1
$$

> Yaad Rakho — Direction cosines ka sum-of-squares hamesha **1** hota hai — ye ek fixed identity hai, chahe line kisi bhi direction me ho. Ye 2D ke $\sin^2\theta + \cos^2\theta = 1$ jaisa hi concept hai, bas teen dimensions me extend ho gaya.

**Direction Ratios** ($a, b, c$) — koi bhi numbers jo direction cosines ke **proportional** hon (matlab same ratio me hon, but normalized nahi):

$$
\frac{l}{a} = \frac{m}{b} = \frac{n}{c}
$$

Direction ratios se direction cosines nikaalne ke liye:

$$
l = \frac{a}{\sqrt{a^2+b^2+c^2}} \qquad m = \frac{b}{\sqrt{a^2+b^2+c^2}} \qquad n = \frac{c}{\sqrt{a^2+b^2+c^2}}
$$

> Socho Aise — Direction ratios ek "raw direction" batate hain (jaise $a=2, b=3, c=6$), aur direction cosines unhi ka "normalized/scaled-down" version hain jinka sum-of-squares exactly 1 ho jaaye.

**Worked Example — Direction Ratios Se Direction Cosines Nikaalna:**

Ek line ke direction ratios hain $(2, 3, 6)$. Direction cosines nikaalo.

**Step 1** — $\sqrt{a^2+b^2+c^2}$ nikaalo:

$$
\sqrt{2^2+3^2+6^2} = \sqrt{4+9+36} = \sqrt{49} = 7
$$

**Step 2** — Har ratio ko $7$ se divide karo:

$$
l = \frac{2}{7}, \qquad m = \frac{3}{7}, \qquad n = \frac{6}{7}
$$

Check: $l^2+m^2+n^2 = \frac{4}{49}+\frac{9}{49}+\frac{36}{49} = \frac{49}{49} = 1$ ✓

**Direction Ratios Of A Line Joining Two Points:**

Points $A(x_1,y_1,z_1)$ aur $B(x_2,y_2,z_2)$ ko jodne wali line ke direction ratios: $(x_2-x_1,\ y_2-y_1,\ z_2-z_1)$

---

### Section Formula In 3D

Agar ek point $P$, do points $A(x_1,y_1,z_1)$ aur $B(x_2,y_2,z_2)$ ko jodne wali line ko ratio $m:n$ me divide karta hai:

$$
P = \left(\frac{mx_2+nx_1}{m+n},\ \frac{my_2+ny_1}{m+n},\ \frac{mz_2+nz_1}{m+n}\right)
$$

**Midpoint Formula** (special case jab $m:n = 1:1$):

$$
\text{Midpoint} = \left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2},\ \frac{z_1+z_2}{2}\right)
$$

**Worked Example — Section Formula With A Real Ratio:**

Points $A(2, -3, 4)$ aur $B(8, 5, -2)$ ko jodne wali line ko point $P$ ratio $1:3$ me divide karta hai ($A$ se shuru karke). $P$ ke coordinates nikaalo. Yahan $m:n = 1:3$, matlab $m=1, n=3$

$$
P_x = \frac{1(8)+3(2)}{1+3} = \frac{8+6}{4} = \frac{14}{4} = 3.5
$$

$$
P_y = \frac{1(5)+3(-3)}{1+3} = \frac{5-9}{4} = \frac{-4}{4} = -1
$$

$$
P_z = \frac{1(-2)+3(4)}{1+3} = \frac{-2+12}{4} = \frac{10}{4} = 2.5
$$

Isliye $P = (3.5,\ -1,\ 2.5)$

> Tip — Section formula me hamesha dhyan rakho ki ratio $m:n$ me **$m$ ka number $B$ (second point) ke coordinates ke saath multiply hota hai**, aur **$n$, $A$ (first point) ke saath** — ye ulta lagta hai isliye exam me galti hoti hai. Yaad rakhne ka tarika: "jo point $A$ ke paas hai ($n$), wahi $A$ ko zyada weight deta hai jab $n$ bada ho."

> Tip — 3D geometry ke numerical questions me sabse zyada **Distance Formula**, **Section/Midpoint Formula**, aur **Direction Cosines/Ratios** poochhe jaate hain — pehle do 2D wale formulas ka hi natural extension hain, bas z-coordinate add karna mat bhoolna.

> Warning — Formula me har coordinate ($x$, $y$ aur $z$) ka apna corresponding pair sahi se match karna — mixing kar doge (jaise $x_2$ ki jagah $y_2$ daal diya) toh poora answer galat ho jaayega.
