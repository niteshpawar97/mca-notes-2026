## Binomial Distribution

Binomial distribution un experiments ke liye use hoti hai jinme fixed number of independent trials hote hain, aur har trial ka result sirf **Success** ya **Failure** ho sakta hai (jaise coin toss — Head/Tail).

### Conditions for Binomial Distribution

1. Fixed number of trials ($n$)
2. Har trial independent hai (ek ka result doosre ko affect nahi karta)
3. Sirf do outcomes possible: Success ($p$) ya Failure ($q$), jaha $q = 1-p$
4. Success probability ($p$) har trial me same rehti hai

### Formula

$$
P(X = x) = \binom{n}{x} p^x q^{n-x}
$$

- $n$ = number of trials
- $x$ = number of successes desired
- $p$ = probability of success
- $q = 1 - p$ = probability of failure
- $\binom{n}{x} = \dfrac{n!}{x!(n-x)!}$

$$
\text{Mean} = np \qquad \text{Variance} = npq
$$

> Yaad Rakho — Binomial distribution ke liye "Mean = np, Variance = npq" by-heart yaad rakho — exam me directly formula-based question aata hai.

### Worked Example

**Problem:** Ek fair coin 5 baar uchala gaya. Find probability of exactly 3 heads.

$n = 5$, $p = \frac{1}{2}$ (Head), $q = \frac{1}{2}$, $x = 3$

$$
P(X=3) = \binom{5}{3} \left(\frac{1}{2}\right)^3 \left(\frac{1}{2}\right)^2 = 10 \times \frac{1}{8} \times \frac{1}{4} = \frac{10}{32} = \frac{5}{16}
$$

**Kab use karein?** Jab experiment repeated independent trials ka ho, sirf success/failure outcome ho — jaise quality control (defective/non-defective), exam pass/fail, coin toss.

---

## Poisson Distribution

Poisson distribution **rare events** ke liye use hoti hai — jab kisi fixed time/space interval me events ki average rate ($\lambda$) pata ho, aur hum kisi specific number of events hone ki probability nikalna chahte hain.

### When to Use

Poisson distribution tab use hoti hai jab:

1. Events random aur independently occur karte hain
2. Average rate ($\lambda$) fixed interval me constant hai
3. Events rare hain ($n$ bahut bada, $p$ bahut chhota — Binomial ka limiting case)

Examples: Call center me per hour calls, ek page par typing errors, ek din me accidents, ek ghante me customers ka arrival

### Formula

$$
P(X = x) = \frac{e^{-\lambda} \lambda^x}{x!}
$$

- $\lambda$ (lambda) = average number of events in the given interval
- $e = 2.71828\ldots$ (Euler's number)

$$
\text{Mean} = \lambda \qquad \text{Variance} = \lambda
$$

(Mean = Variance — ye Poisson ki khaas property hai)

> Yaad Rakho — Poisson distribution me Mean = Variance = $\lambda$ — ye uski sabse unique property hai jo isse Binomial se distinguish karti hai. Exam me "Poisson ki property batao" poocha jaaye toh ye sabse pehle likho.

### Worked Example

**Problem:** Ek call center me average 4 calls per minute aati hain. Find probability ki ek minute me exactly 2 calls aayein.

$\lambda = 4$, $x = 2$

$$
P(X=2) = \frac{e^{-4} \cdot 4^2}{2!} = \frac{0.0183 \times 16}{2} = \frac{0.2928}{2} = 0.1464
$$

Probability $\approx 0.146$ (approximately 14.6%)

> Socho Aise — Poisson distribution use tab karo jab tum "kitni baar hoga" jaanna chahte ho na ki "hoga ya nahi" — jaise "is ghante me kitne customers aayenge" (Poisson) vs "ye coin Head degi ya Tail" (Binomial).

---

## Normal Distribution

Normal distribution sabse important continuous distribution hai — iska graph ek symmetric **bell-shaped curve** banata hai. Bahut saari natural phenomena (height, weight, marks, IQ) approximately normal distribution follow karti hain.

### Formula (PDF)

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} \, e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

- $\mu$ (mu) = population mean
- $\sigma$ (sigma) = population standard deviation

### Properties of Normal Distribution

1. Curve symmetric hai around mean ($\mu$)
2. Mean = Median = Mode (teeno center par overlap karte hain)
3. Total area under curve = 1
4. Curve kabhi x-axis ko touch nahi karti (asymptotic dono taraf)
5. Bell-shaped, unimodal (ek hi peak)

### 68-95-99.7 Rule (Empirical Rule)

- $\mu \pm 1\sigma \to$ approximately 68% data isme aata hai
- $\mu \pm 2\sigma \to$ approximately 95% data isme aata hai
- $\mu \pm 3\sigma \to$ approximately 99.7% data isme aata hai

> Tip — Exam me "Normal distribution ki properties likho" aaye toh symmetric, mean=median=mode, aur 68-95-99.7 rule teeno mention karo — ye standard 5-mark answer hai.

### Standard Normal Variable (Z-score)

Kisi bhi normal distribution ko **standard normal distribution** ($\mu=0$, $\sigma=1$) me convert karne ke liye:

$$
Z = \frac{X - \mu}{\sigma}
$$

Isse hum standard normal tables use karke koi bhi probability nikaal sakte hain.

> Example — Agar kisi class ke marks Normal distribution follow karte hain with $\mu=70$, $\sigma=10$, toh ek student jiske marks 85 hain, uska Z-score $= \dfrac{85-70}{10} = 1.5$ — matlab wo mean se 1.5 standard deviations upar hai.

---

## Comparison Table — Binomial Vs Poisson Vs Normal

| Aspect | Binomial | Poisson | Normal |
|--------|----------|---------|--------|
| Type | Discrete | Discrete | Continuous |
| Use Case | Fixed trials, success/failure | Rare events in fixed interval | Continuous measurements, bell curve |
| Formula | $P(X=x) = \dbinom{n}{x}p^x q^{n-x}$ | $P(X=x) = \dfrac{e^{-\lambda}\lambda^x}{x!}$ | $f(x) = \dfrac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ |
| Mean | $np$ | $\lambda$ | $\mu$ |
| Variance | $npq$ | $\lambda$ (= mean) | $\sigma^2$ |
| Real-life Example | Coin tosses, pass/fail exams | Calls per hour, typos per page | Height, weight, exam scores |

> Warning — Binomial me $n$ aur $p$ dono chahiye hote hain, Poisson me sirf ek parameter $\lambda$ chahiye hota hai — agar question me sirf "average rate" diya ho aur "number of trials" na ho, toh Poisson use karo, Binomial nahi.
