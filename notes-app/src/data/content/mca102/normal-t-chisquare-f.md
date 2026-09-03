## Kaunsa Test Kab Use Karein?

Hypothesis testing me sabse important skill hai — **sahi test choose karna**. Har distribution ka apna use-case hai, sample size aur kya test karna hai (mean/variance/proportion) ke hisaab se.

| Test | Distribution | Kab Use Karte Hain | Test Statistic |
|------|--------------|----------------------|-----------------|
| **Z-test** | Normal | Large sample ($n \ge 30$), population variance known/approx | $Z = \dfrac{\bar{x} - \mu}{\sigma/\sqrt{n}}$ |
| **t-test** | Student's t | Small sample ($n < 30$), population variance unknown | $t = \dfrac{\bar{x} - \mu}{s/\sqrt{n}}$ |
| **Chi-square test ($\chi^2$)** | Chi-square | Variance testing, goodness of fit, independence of attributes | $\chi^2 = \sum \dfrac{(O-E)^2}{E}$ |
| **F-test** | F-distribution | Do samples ki variances compare karna | $F = s_1^2/s_2^2$ |

> Yaad Rakho — "Z bade sample ke liye, t chhote sample ke liye, Chi-square variance/frequency ke liye, F do variances compare karne ke liye" — ye ek-line summary exam me bahut kaam aata hai.

---

## Normal (Z) Distribution Test

Z-test use hota hai jab sample size bada ho ($n \ge 30$) — kyunki Central Limit Theorem ke wajah se sample mean approximately normal distribute hota hai.

Population mean test karne ke liye:

$$
Z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}
$$

Jahan $\bar{x}$ = sample mean, $\mu$ = population mean (hypothesized), $\sigma$ = population standard deviation, $n$ = sample size.

Agar $\sigma$ unknown hai lekin $n$ bada hai ($n \ge 30$), toh sample standard deviation $s$ use kar sakte hain approx ke roop me.

---

## Student's t-Distribution Test

t-test tab use hota hai jab sample size **chhota** ho ($n < 30$) aur population variance **unknown** ho. t-distribution normal distribution jaisi hi dikhti hai lekin thodi **flatter aur wider tails** wali hoti hai — chhote sample me zyada uncertainty ko account karta hai.

Population mean test karne ke liye (small sample):

$$
t = \frac{\bar{x} - \mu}{s/\sqrt{n}} \qquad \text{degrees of freedom } (df) = n - 1
$$

Jahan $s$ = sample standard deviation.

Jaise-jaise sample size badhta hai, t-distribution normal distribution ke kaafi kareeb aa jaati hai.

---

## Chi-Square Distribution Test

Chi-square test **variance testing**, **goodness of fit**, aur **independence of attributes** ke liye use hota hai (ye agle topic me detail me cover hoga).

Population variance test karne ke liye:

$$
\chi^2 = \frac{(n-1)\cdot s^2}{\sigma^2} \qquad \text{with } df = n - 1
$$

Jahan $s^2$ = sample variance, $\sigma^2$ = population variance (hypothesized).

---

## F-Distribution Test

F-test use hota hai jab **do samples ki variances compare** karni ho — jaise dekhna ki do machines ki output variability same hai ya nahi.

$$
F = \frac{s_1^2}{s_2^2} \qquad \text{(bada variance upar, chhota neeche rakho)}
$$

with $df_1 = n_1 - 1$ (numerator), $df_2 = n_2 - 1$ (denominator).

> Socho Aise — F-test do factories ki consistency compare karne jaisa hai — dono ka average product weight same ho sakta hai, lekin ek factory me variation (variance) zyada ho sakti hai. F-test yehi variance ka difference check karta hai.

---

## General Test Procedure (Sabhi Tests Ke Liye Common)

Chahe koi bhi test ho (Z, t, $\chi^2$, F), procedure same steps follow karta hai:

**Step 1** — State Null Hypothesis ($H_0$) and Alternative Hypothesis ($H_1$)

**Step 2** — Choose level of significance ($\alpha$) — usually 0.05 or 0.01

**Step 3** — Compute the test statistic ($Z$, $t$, $\chi^2$, ya $F$ formula use karke)

**Step 4** — Find the critical/table value from statistical tables (df aur $\alpha$ ke according)

**Step 5** — Compare calculated value with table value:
- Agar $|\text{calculated value}| > \text{table value}$ → Reject $H_0$
- Agar $|\text{calculated value}| \le \text{table value}$ → Fail to reject $H_0$

**Step 6** — Conclude in plain words (context ke hisaab se answer likho)

> Tip — Exam me hamesha ye 6 steps clearly numbered likho, chahe question chhota ho. Examiner step-wise marking karta hai — sirf final answer likhne se partial marks hi milte hain.

---

## Worked Example — t-Test for Population Mean

**Problem:** Ek company claim karti hai ki unke battery ki average life 500 hours hai. Ek sample of 10 batteries liya gaya, jiska mean = 490 hours aur standard deviation $s = 20$ hours nikla. Test karo ($\alpha = 0.05$) ki company ka claim sahi hai ya nahi.

**Step 1** — $H_0: \mu = 500$ (claim sahi hai); &nbsp; $H_1: \mu \neq 500$ (claim galat hai) — two-tailed test

**Step 2** — $\alpha = 0.05$, $n = 10$ (small sample → t-test), $df = n - 1 = 9$

**Step 3** — Compute test statistic:

$$
t = \frac{\bar{x} - \mu}{s/\sqrt{n}} = \frac{490 - 500}{20/\sqrt{10}} = \frac{-10}{20/3.162} = \frac{-10}{6.32} = -1.58
$$

**Step 4** — Table value of $t$ at $df=9$, $\alpha=0.05$ (two-tailed) $\approx 2.262$

**Step 5** — $|\text{calculated } t| = 1.58 < \text{table value } 2.262$ → Fail to reject $H_0$

**Step 6** — Conclusion: 5% significance level par, hamare paas kaafi evidence nahi hai ye kehne ke liye ki company ka claim galat hai. Company ka claim (mean life = 500 hours) statistically acceptable hai.

> Example — Notice karo: calculated value table value se kam thi, isliye $H_0$ reject nahi hua. Agar calculated $t$, table value se zyada hota (jaise $t = 3.5$), tab hum $H_0$ reject kar dete aur kehte "claim statistically supported nahi hai".

---

### Quick Comparison Table

| Test | Sample Size | What It Tests | Distribution Shape |
|------|-------------|-----------------|----------------------|
| Z-test | Large ($n \ge 30$) | Mean, proportion | Standard bell curve |
| t-test | Small ($n < 30$) | Mean (variance unknown) | Bell curve, flatter, fatter tails |
| Chi-square test | Any | Variance, goodness of fit, independence | Right-skewed, always positive |
| F-test | Two samples | Comparing two variances | Right-skewed, ratio-based |

> Warning — Test statistic ka **sign** (negative/positive) matter nahi karta jab table value se compare karte ho — hamesha **absolute value** compare karo two-tailed test me. Sirf one-tailed test me sign ka direction dekhte hain.
