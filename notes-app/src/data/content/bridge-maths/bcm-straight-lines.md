## Straight Lines — Forms Of Equations Aur Angle Between Lines

### Coordinate Geometry Ka Quick Recall

Do dimensional plane me har point `(x, y)` coordinates se represent hota hai. **Origin** `(0,0)` center point hai.

**Distance Formula** (do points ke beech):
```
Distance = √[(x2-x1)² + (y2-y1)²]
```

---

### Slope Of A Line

**Slope (m)** batata hai line kitni "tedhi" hai — horizontal se kitna angle banati hai:

```
m = (y2 - y1) / (x2 - x1)
```

| Slope Value | Line Kaisi Hai |
|--------------|-------------------|
| m = 0 | Horizontal line |
| m = undefined (infinite) | Vertical line |
| m > 0 | Upar ki taraf jaati line (left se right) |
| m < 0 | Neeche ki taraf jaati line |

> Socho Aise — Slope ek "sidhai ki hill" jaisa hai — jitni zyada slope, utni tez chadhai. Flat road ka slope zero hota hai, aur seedhi deewar (vertical) ka slope undefined hota hai kyunki denominator zero ho jaata hai.

### Angle Between Two Lines

```
tan θ = (m1 - m2) / (1 + m1×m2)
```

| Condition | Matlab |
|-----------|--------|
| m1 = m2 | Lines parallel hain |
| m1 × m2 = -1 | Lines perpendicular hain |

**Worked Example — Angle Between Do Lines:**

```
Line 1 ka slope m1 = 3
Line 2 ka slope m2 = 2

tan θ = (m1 - m2) / (1 + m1×m2)
      = (3 - 2) / (1 + 3×2)
      = 1 / (1 + 6)
      = 1/7

θ = tan⁻¹(1/7)  ≈  8.13°
```

> Warning — Formula me hamesha `|(m1-m2)/(1+m1m2)|` ka absolute value liya jaata hai kyunki angle negative nahi hota — do lines ke beech do angles bante hain (θ aur 180°-θ), convention se hum chhota wala (acute angle) leta hain.

---

### Equations Of A Line — Various Forms

| Form | Equation | Kab Use Karein |
|------|----------|-------------------|
| **Point-Slope Form** | y - y1 = m(x - x1) | Jab ek point aur slope pata ho |
| **Slope-Intercept Form** | y = mx + c | Jab slope aur y-intercept pata ho |
| **Two-Point Form** | (y-y1)/(x2-x1) = (x-x1)/(x2-x1) | Jab do points pata hon |
| **Intercept Form** | x/a + y/b = 1 | Jab x aur y intercepts pata hon |
| **Normal Form** | x cosα + y sinα = p | Jab origin se perpendicular distance pata ho |

> Example — Ek line jo (2,3) se guzarti hai aur slope 4 hai: Point-Slope form use karo → `y - 3 = 4(x - 2)` → simplify: `y = 4x - 5`

**Worked Example — Slope-Intercept Form:**

```
Ek line ka slope m = 2 hai aur y-axis ko (0, 5) par cut karti hai (matlab c = 5).

Formula: y = mx + c
y = 2x + 5

Ye line ka equation hai. Check karne ke liye x=0 rakho: y = 2(0)+5 = 5 — matches y-intercept.
```

**Worked Example — Two-Point Form:**

```
Line do points A(1, 2) aur B(4, 8) se guzarti hai. Equation nikaalo.

Two-Point Form: (y - y1)/(y2 - y1) = (x - x1)/(x2 - x1)

(y - 2)/(8 - 2) = (x - 1)/(4 - 1)

(y - 2)/6 = (x - 1)/3

3(y - 2) = 6(x - 1)

3y - 6 = 6x - 6

3y = 6x

y = 2x

Isliye line ka equation hai: y = 2x  (ya  2x - y = 0)
```

**Worked Example — Intercept Form:**

```
Ek line x-axis ko (4, 0) par aur y-axis ko (0, 6) par cut karti hai. Equation nikaalo.

X-intercept a = 4,  Y-intercept b = 6

Intercept Form: x/a + y/b = 1

x/4 + y/6 = 1

Dono taraf 12 se multiply karo (LCM of 4 and 6):
3x + 2y = 12

Isliye line ka equation hai: 3x + 2y = 12
```

> Yaad Rakho — Chaaro forms actually same concept ke different "views" hain — kisi bhi do independent conditions (point+slope, do points, do intercepts) se line uniquely define ho jaati hai. Jo info di ho, usi ke hisaab se sahi form choose karo — isse calculation kaafi easy ho jaata hai.

---

### Lines Parallel To Axis

| Line | Equation |
|------|----------|
| X-axis ke parallel | y = k (constant) |
| Y-axis ke parallel | x = k (constant) |

> Yaad Rakho — X-axis ke parallel line me **y hamesha same** rehta hai (jaise y=5), Y-axis ke parallel me **x hamesha same** rehta hai (jaise x=3). Naam ulta lagta hai isliye confusion hoti hai — dhyan se yaad rakho!

---

### General Equation Of A Line

```
Ax + By + C = 0
```

Yahan slope = -A/B, aur ye form kisi bhi line ko represent kar sakta hai (vertical lines bhi, jo slope-intercept form me possible nahi).

---

### Family Of Lines Through Intersection Point

Agar do lines `L1: A1x+B1y+C1=0` aur `L2: A2x+B2y+C2=0` ek point par intersect karti hain, toh unke intersection point se guzarne wali **saari lines** is form me likhi ja sakti hain:

```
L1 + λL2 = 0    (λ koi bhi real number)
```

Ye idea useful hai kyunki humein actual intersection point nikaalne ki zaroorat nahi padti — bas λ ki value adjust karke required line mil jaati hai.

**Worked Example — Family Of Lines Se Equation Nikaalna:**

```
Do lines diye hain:
L1: x + y - 5 = 0
L2: 2x - y + 1 = 0

Inke intersection point se guzarne wali aur point (1, 4) se bhi guzarne wali
line ka equation nikaalo.

Family of lines: L1 + λL2 = 0
(x + y - 5) + λ(2x - y + 1) = 0

Ye line (1, 4) se bhi guzarti hai, toh x=1, y=4 substitute karo:
(1 + 4 - 5) + λ(2×1 - 4 + 1) = 0
(0) + λ(-1) = 0
-λ = 0
λ = 0

λ=0 daal do family equation me:
(x + y - 5) + 0×(2x - y + 1) = 0
x + y - 5 = 0

Isliye required line ka equation hai: x + y - 5 = 0
(Interesting — ye khud L1 nikla, matlab point (1,4) L1 par hi tha)
```

> Tip — Family of lines wale question me jo bhi extra condition di ho (point diya ho, ya kisi aur line ke parallel/perpendicular hona ho), usi condition ko family equation me substitute karke λ nikalo — phir wapas family equation me daal do.

---

### Distance Of A Point From A Line

```
Distance = |Ax1 + By1 + C| / √(A² + B²)
```

**Worked Example — Point Se Line Ki Distance:**

```
Point P(3, 4) ki line 3x - 4y + 5 = 0 se distance nikaalo.

Yahan A=3, B=-4, C=5, x1=3, y1=4

Distance = |A×x1 + B×y1 + C| / √(A² + B²)
         = |3×3 + (-4)×4 + 5| / √(3² + (-4)²)
         = |9 - 16 + 5| / √(9 + 16)
         = |-2| / √25
         = 2 / 5
         = 0.4 units
```

> Tip — Exam me formula-based questions ke liye ek chhota "formula sheet" yaad rakho: Slope, Point-Slope form, Distance formula, aur Family of Lines — ye char sabse zyada directly use hote hain numerical solve karne me.

> Warning — Distance formula me hamesha absolute value (`| |`) lena mat bhoolo — distance kabhi negative nahi ho sakti, aur denominator me A aur B original equation ke coefficients hone chahiye, kisi simplified form ke nahi.
