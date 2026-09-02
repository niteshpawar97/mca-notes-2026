## Straight Lines — Forms Of Equations Aur Angle Between Lines

### Coordinate Geometry Ka Quick Recall

Do dimensional plane me har point `(x, y)` coordinates se represent hota hai. **Origin** `(0,0)` center point hai.

**Distance Formula** (do points ke beech):
```
Distance = √[(x2-x1)² + (y2-y1)²]
```

---

### Slope Of A Line

**Slope (m)** batata hai line kitni "tedhi" hai:

```
m = (y2 - y1) / (x2 - x1)
```

| Slope Value | Line Kaisi Hai |
|--------------|-------------------|
| m = 0 | Horizontal line |
| m = undefined (infinite) | Vertical line |
| m > 0 | Upar ki taraf jaati line (left se right) |
| m < 0 | Neeche ki taraf jaati line |

> Socho Aise — Slope ek "sidhai ki hill" jaisa hai — jitni zyada slope, utni tez chadhai. Flat road ka slope zero hota hai.

### Angle Between Two Lines

```
tan θ = (m1 - m2) / (1 + m1×m2)
```

| Condition | Matlab |
|-----------|--------|
| m1 = m2 | Lines parallel hain |
| m1 × m2 = -1 | Lines perpendicular hain |

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

---

### Distance Of A Point From A Line

```
Distance = |Ax1 + By1 + C| / √(A² + B²)
```

> Tip — Exam me formula-based questions ke liye ek chhota "formula sheet" yaad rakho: Slope, Point-Slope form, Distance formula — ye teen sabse zyada directly use hote hain numerical solve karne me.
