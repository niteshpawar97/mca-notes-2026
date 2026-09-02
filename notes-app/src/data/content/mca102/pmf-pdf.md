## Random Variable Kya Hai?

Random variable ek variable hai jiski value kisi random experiment ke outcome par depend karti hai. Iske do types hote hain:

```
Discrete Random Variable   — sirf specific, countable values leta hai
                              (jaise dice roll ka result: 1,2,3,4,5,6)

Continuous Random Variable — koi bhi value ek range me le sakta hai
                              (jaise kisi student ki height: 150.5 cm, 162.34 cm...)
```

> Socho Aise — Discrete random variable ek staircase jaisa hai (fixed steps: 1,2,3...), Continuous random variable ek ramp/slope jaisa hai (koi bhi decimal value possible, jaise 1.5, 1.567, 1.5678...).

---

## Probability Mass Function (PMF)

**Discrete random variable** ke liye, PMF batata hai ki har specific value `x` aane ki probability kya hai.

```
p(x) = P(X = x)
```

### Properties of PMF

```
1. p(x) ≥ 0                    for all x    (probability negative nahi ho sakti)

2. Σ p(x) = 1                  (sabhi possible values ki probabilities ka sum = 1)

3. P(X = x) directly meaningful hai — specific value ki exact probability milti hai
```

### Worked Example — PMF

```
Problem: Do fair coins uchale gaye. X = number of Heads. Find PMF of X.

Possible outcomes: {HH, HT, TH, TT}   (each with probability 1/4)

X can be: 0, 1, 2

P(X=0) = P(TT) = 1/4
P(X=1) = P(HT) + P(TH) = 1/4 + 1/4 = 2/4 = 1/2
P(X=2) = P(HH) = 1/4

PMF Table:
X       0      1      2
p(x)   1/4    1/2    1/4

Check: Σp(x) = 1/4 + 1/2 + 1/4 = 1  ✓
```

> Yaad Rakho — PMF table banane ke baad hamesha check karo ki sabhi probabilities ka sum exactly 1 aa raha hai — agar nahi aata, calculation me galti hai.

---

## Probability Density Function (PDF)

**Continuous random variable** ke liye, ek exact point par probability meaningless hoti hai (kyunki infinite possible values hain) — isliye hum **range** ke andar probability nikaalte hain, using a density function `f(x)`.

```
P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx        (area under the curve between a and b)
```

### Properties of PDF

```
1. f(x) ≥ 0                    for all x

2. ∫₋∞^∞ f(x) dx = 1            (total area under the curve = 1)

3. P(X = x) = 0                 for any single exact point x
                                 (continuous variable ke liye ek point ki
                                  probability hamesha zero hoti hai)
```

> Warning — Continuous random variable ke liye P(X = 5) hamesha **0** hota hai — sirf ranges ki probability meaningful hoti hai, jaise P(4 ≤ X ≤ 6). Ye ek favourite exam trick question hai.

---

### Worked Example — PDF

```
Problem: Ek continuous random variable X ka PDF diya gaya hai:

f(x) = 2x,   for 0 ≤ x ≤ 1
f(x) = 0,    otherwise

Verify ki ye valid PDF hai, aur find P(0.2 ≤ X ≤ 0.5)

Step 1: Verify total area = 1
∫₀¹ 2x dx = [x²]₀¹ = 1 - 0 = 1  ✓  (valid PDF)

Step 2: P(0.2 ≤ X ≤ 0.5) = ∫₀.₂^0.5 2x dx = [x²]₀.₂^0.5
       = (0.5)² - (0.2)²
       = 0.25 - 0.04
       = 0.21
```

> Example — PDF questions me integration hi karna padta hai — power rule use karo: ∫xⁿ dx = x^(n+1)/(n+1). Simple polynomial PDFs exam me common hote hain.

---

## PMF Vs PDF — Difference Table

| Aspect | PMF (Probability Mass Function) | PDF (Probability Density Function) |
|--------|----------------------------------|--------------------------------------|
| Random Variable Type | Discrete | Continuous |
| Gives | P(X = x) directly | Density — probability sirf range integrate karke milti hai |
| Sum/Integral = 1 | Σ p(x) = 1 | ∫f(x)dx = 1 (over all x) |
| Value at a point | Meaningful (exact probability) | f(x) khud probability nahi, density hai; P(X=x)=0 |
| Example | Number of heads in coin tosses | Height, weight, time — continuous measurements |
| Representation | Table/bar chart | Smooth curve |

> Tip — Exam me "PMF aur PDF me difference batao" aaye toh ye table hi likh do — discrete vs continuous, sum vs integral, aur "P(X=x)=0 for continuous" wala point zaroor mention karo, ye examiner ko impress karta hai.

---

### Cumulative Distribution Function (CDF) — Bonus Concept

Dono cases me ek common cheez hoti hai — **CDF**, jo batata hai ki X kisi value tak ki probability kitni hai:

```
Discrete:    F(x) = P(X ≤ x) = Σ p(t) for all t ≤ x

Continuous:  F(x) = P(X ≤ x) = ∫₋∞^x f(t) dt
```

CDF hamesha 0 se 1 ke beech hota hai aur non-decreasing hota hai (kabhi neeche nahi jaata jaise x badhta hai).

> Socho Aise — CDF ek "running total" jaisa hai — jaise bank balance jo sirf badhta ja raha ho (kabhi negative deposit nahi hota), PMF/PDF ke individual pieces ko accumulate karta jaata hai.
