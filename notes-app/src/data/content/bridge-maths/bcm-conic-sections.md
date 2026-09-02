## Conic Sections — Circle, Parabola, Ellipse Aur Hyperbola

### Conic Section Kya Hai?

**Conic Section** wo curve hai jo ek cone ko ek plane se kaatne (slice) se milta hai — angle ke hisaab se alag-alag shapes milte hain.

```
        Cone ko slice karne ka angle:
Circle  → Cone ko bilkul horizontally cut karo
Ellipse → Thoda tilt karke cut karo
Parabola → Cone ki side ke parallel cut karo
Hyperbola → Dono halves ko cut karo (steep angle)
```

> Socho Aise — Ek ice-cream cone lo aur usse alag-alag angles pe kaato — flat cut karoge toh circle milega, tirchha kaatoge toh ellipse, aur bahut steep kaatoge toh hyperbola jaisa shape milega.

**Degenerate Cases:** Kabhi kabhi conic section ek point, straight line, ya do intersecting lines bhi ban sakta hai — inhe "degenerate conics" kehte hain.

---

### Circle

**Standard Equation** (center origin par, radius r):
```
x² + y² = r²
```

**General Form** (center (h,k), radius r):
```
(x-h)² + (y-k)² = r²
```

> Example — Center (2,3), radius 5 wale circle ka equation: `(x-2)² + (y-3)² = 25`

---

### Parabola

**Parabola** ek U-shape curve hai. Standard equation (vertex origin par):

```
y² = 4ax    (right ki taraf khulta hai)
x² = 4ay    (upar ki taraf khulta hai)
```

| Property | Matlab |
|----------|--------|
| Vertex | Curve ka sabse "sharp" point |
| Focus | Ek fixed point jahan se saari distances measure hoti hain |
| Directrix | Ek fixed line |

> Yaad Rakho — Parabola ka use real life me bahut hota hai — satellite dish, car headlights, bridge cables sab parabolic shape follow karte hain (kyunki wo signals/light ko ek focus point par collect karte hain).

---

### Ellipse

**Ellipse** ek "chapta hua circle" jaisa hota hai — do foci (fixed points) hote hain.

**Standard Equation:**
```
x²/a² + y²/b² = 1     (a = semi-major axis, b = semi-minor axis)
```

> Example — Agar a=5, b=3: `x²/25 + y²/9 = 1` — ye ek ellipse hai jiska major axis lamba hai (5 units) aur minor axis chhota (3 units).

**Property:** Kisi bhi point se dono foci tak ki distances ka **sum hamesha constant** rehta hai — yehi ellipse ki defining property hai.

---

### Hyperbola

**Hyperbola** do alag curves ka set hota hai (jaise mirror image), foci se distances ka **difference constant** rehta hai (sum ki jagah).

**Standard Equation:**
```
x²/a² - y²/b² = 1
```

---

### Circle Vs Ellipse Vs Parabola Vs Hyperbola — Quick Compare

| Conic | Standard Equation | Shape |
|-------|----------------------|-------|
| Circle | x² + y² = r² | Perfect round |
| Ellipse | x²/a² + y²/b² = 1 | Chapta circle (oval) |
| Parabola | y² = 4ax | U-shape, ek hi curve |
| Hyperbola | x²/a² - y²/b² = 1 | Do mirror curves |

> Tip — Equation dekh kar conic pehchaanne ka trick: `x²` aur `y²` dono same sign, same coefficient → **Circle**. Dono same sign, alag coefficient → **Ellipse**. Ek variable square, doosra linear → **Parabola**. `x²` aur `y²` ke beech minus sign → **Hyperbola**.
