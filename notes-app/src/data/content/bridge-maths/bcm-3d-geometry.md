## Introduction To Three-Dimensional Geometry

### 2D Se 3D Tak — Ek Extra Dimension

2D geometry me hum points `(x, y)` se represent karte hain — ek plane (flat surface) par. **3D geometry** me ek aur dimension `z` add ho jaata hai — points `(x, y, z)` se represent hote hain, jo real world (length, width, height) ko represent karta hai.

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

**Origin** — teeno axes jaha milte hain, point `(0, 0, 0)`.

---

### Coordinate Planes In 3D

Teeno axes mil kar **3 coordinate planes** banate hain:

| Plane | Kaunse Axes Se Bana |
|-------|-------------------------|
| **XY-plane** | X aur Y axis se (z=0) |
| **YZ-plane** | Y aur Z axis se (x=0) |
| **XZ-plane** | X aur Z axis se (y=0) |

Ye teeno planes poori 3D space ko **8 octants** me divide karte hain (jaise 2D me 4 quadrants hote hain).

> Yaad Rakho — 2D me 4 quadrants, 3D me **8 octants** hote hain — kyunki har axis ke +/- combination se 2×2×2 = 8 regions banti hain.

---

### 8 Octants Aur Unka Sign Pattern

Har octant me point `(x, y, z)` ke coordinates ka sign fix hota hai. Ye table exam me directly poocha ja sakta hai:

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

Ek point `P(x, y, z)` teen values se define hota hai — origin se us point tak x, y, z directions me kitni distance hai.

> Example — Point `(3, 4, 5)` ka matlab: X-axis pe 3 units, Y-axis pe 4 units, Z-axis pe 5 units — teeno directions me measure karke us point tak pahunchte hain. Ye point Octant I me hai kyunki teeno coordinates positive hain.

---

### Distance Between Two Points In 3D

2D distance formula ka extension hi hai, bas ek aur term (z) add ho jaata hai:

```
Distance = √[(x2-x1)² + (y2-y1)² + (z2-z1)²]
```

> Example — Points A(1,2,3) aur B(4,6,3) ke beech distance:
```
= √[(4-1)² + (6-2)² + (3-3)²]
= √[9 + 16 + 0]
= √25
= 5
```

**Doosra Worked Example — Alag Numbers Ke Saath:**

```
Points P(2, -1, 3) aur Q(5, 3, -1) ke beech distance nikaalo.

Distance = √[(x2-x1)² + (y2-y1)² + (z2-z1)²]

         = √[(5-2)² + (3-(-1))² + (-1-3)²]

         = √[(3)² + (4)² + (-4)²]

         = √[9 + 16 + 16]

         = √41

         ≈ 6.4 units
```

> Warning — Negative coordinates ke saath subtraction karte waqt bahut dhyan se signs handle karo — `(3-(-1))` matlab `3+1 = 4`, aisi chhoti galtiyaan poora answer bigaad deti hain.

---

### Direction Cosines Aur Direction Ratios Of A Line

Koi bhi line 3D space me kisi particular "direction" me jaati hai — is direction ko numbers se describe karne ke liye **direction cosines** aur **direction ratios** use hote hain.

**Direction Cosines (l, m, n)** — line jo angles α, β, γ banati hai X, Y, Z axes ke saath, unke cosines:

```
l = cos α    (X-axis se angle ka cosine)
m = cos β    (Y-axis se angle ka cosine)
n = cos γ    (Z-axis se angle ka cosine)
```

**Sabse Important Relation:**
```
l² + m² + n² = 1
```

> Yaad Rakho — Direction cosines ka sum-of-squares hamesha **1** hota hai — ye ek fixed identity hai, chahe line kisi bhi direction me ho. Ye 2D ke `sin²θ + cos²θ = 1` jaisa hi concept hai, bas teen dimensions me extend ho gaya.

**Direction Ratios (a, b, c)** — koi bhi numbers jo direction cosines ke **proportional** hon (matlab same ratio me hon, but normalized nahi):

```
l/a = m/b = n/c
```

Direction ratios se direction cosines nikaalne ke liye:

```
l = a/√(a²+b²+c²)    m = b/√(a²+b²+c²)    n = c/√(a²+b²+c²)
```

> Socho Aise — Direction ratios ek "raw direction" batate hain (jaise a=2, b=3, c=6), aur direction cosines unhi ka "normalized/scaled-down" version hain jinka sum-of-squares exactly 1 ho jaaye.

**Worked Example — Direction Ratios Se Direction Cosines Nikaalna:**

```
Ek line ke direction ratios hain (2, 3, 6). Direction cosines nikaalo.

Step 1: √(a²+b²+c²) nikaalo
√(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7

Step 2: Har ratio ko 7 se divide karo
l = 2/7,   m = 3/7,   n = 6/7

Check: l² + m² + n² = (2/7)² + (3/7)² + (6/7)² = 4/49 + 9/49 + 36/49 = 49/49 = 1 ✓
```

**Direction Ratios Of A Line Joining Two Points:**

```
Points A(x1,y1,z1) aur B(x2,y2,z2) ko jodne wali line ke direction ratios:
(x2-x1, y2-y1, z2-z1)
```

---

### Section Formula In 3D

Agar ek point P, do points `A(x1,y1,z1)` aur `B(x2,y2,z2)` ko jodne wali line ko ratio `m:n` me divide karta hai:

```
P = ( (mx2+nx1)/(m+n) , (my2+ny1)/(m+n) , (mz2+nz1)/(m+n) )
```

**Midpoint Formula** (special case jab m:n = 1:1):
```
Midpoint = ( (x1+x2)/2 , (y1+y2)/2 , (z1+z2)/2 )
```

**Worked Example — Section Formula With A Real Ratio:**

```
Points A(2, -3, 4) aur B(8, 5, -2) ko jodne wali line ko point P ratio 1:3 me
divide karta hai (A se shuru karke). P ke coordinates nikaalo.

Yahan m:n = 1:3, matlab m=1, n=3

Px = (m×x2 + n×x1)/(m+n) = (1×8 + 3×2)/(1+3) = (8+6)/4 = 14/4 = 3.5

Py = (m×y2 + n×y1)/(m+n) = (1×5 + 3×(-3))/(1+3) = (5-9)/4 = -4/4 = -1

Pz = (m×z2 + n×z1)/(m+n) = (1×(-2) + 3×4)/(1+3) = (-2+12)/4 = 10/4 = 2.5

Isliye P = (3.5, -1, 2.5)
```

> Tip — Section formula me hamesha dhyan rakho ki ratio `m:n` me **m ka number B (second point) ke coordinates ke saath multiply hota hai**, aur **n, A (first point) ke saath** — ye ulta lagta hai isliye exam me galti hoti hai. Yaad rakhne ka tarika: "jo point A ke paas hai (n), wahi A ko zyada weight deta hai jab n bada ho."

> Tip — 3D geometry ke numerical questions me sabse zyada **Distance Formula**, **Section/Midpoint Formula**, aur **Direction Cosines/Ratios** poochhe jaate hain — pehle do 2D wale formulas ka hi natural extension hain, bas z-coordinate add karna mat bhoolna.

> Warning — Formula me har coordinate (x, y aur z) ka apna corresponding pair sahi se match karna — mixing kar doge (jaise x2 ki jagah y2 daal diya) toh poora answer galat ho jaayega.
