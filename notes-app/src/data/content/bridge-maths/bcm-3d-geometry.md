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

### Coordinates Of A Point In 3D

Ek point `P(x, y, z)` teen values se define hota hai — origin se us point tak x, y, z directions me kitni distance hai.

> Example — Point `(3, 4, 5)` ka matlab: X-axis pe 3 units, Y-axis pe 4 units, Z-axis pe 5 units — teeno directions me measure karke us point tak pahunchte hain.

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

> Tip — 3D geometry ke numerical questions me sabse zyada **Distance Formula** aur **Section/Midpoint Formula** poochhe jaate hain — dono 2D wale formulas ka hi natural extension hain, bas z-coordinate add karna mat bhoolna.

> Warning — Formula me har coordinate (x, y aur z) ka apna corresponding pair sahi se match karna — mixing kar doge (jaise x2 ki jagah y2 daal diya) toh poora answer galat ho jaayega.
