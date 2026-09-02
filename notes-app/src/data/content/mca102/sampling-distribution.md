## Population Vs Sample

**Population** — Poora group jiske baare me hume conclusion nikalna hai (jaise "India ke sabhi MCA students").

**Sample** — Population ka ek chhota, manageable subset jisko hum actually study karte hain (jaise "500 MCA students ka survey").

```
Population → bahut bada, poora survey karna practically impossible/expensive
Sample     → chhota subset, actually measure karte hain
Goal       → sample se population ke baare me conclusion nikalna (inference)
```

> Socho Aise — Agar tumhe pata karna hai ki ek daig (bade bartan) me daal sahi pak gayi hai ya nahi, tum poora daig nahi khaate — sirf ek chamach (sample) chakhte ho aur pura daig (population) ke baare me decide kar lete ho. Statistics yahi karta hai.

---

## Sampling Distribution

Agar hum population se baar-baar alag-alag samples nikaalte hain aur har sample ka mean calculate karte hain, toh in sab sample-means ka apna ek distribution ban jaata hai — isko **sampling distribution** kehte hain.

```
Population → Sample 1 → mean1
           → Sample 2 → mean2
           → Sample 3 → mean3
           → ... (bahut saare samples)

Sampling Distribution = in sab means (mean1, mean2, mean3, ...) ka distribution
```

**Central Limit Theorem (CLT)** — Agar sample size kaafi bada ho (n ≥ 30), toh sample means ka distribution approximately **Normal distribution** follow karta hai, chahe population khud normal ho ya na ho.

> Yaad Rakho — CLT ka matlab: "Bade sample size (n≥30) ke liye sample mean ka distribution hamesha approximately normal hota hai" — ye poori hypothesis testing ka foundation hai.

---

## Standard Error

Standard error (SE) batata hai ki sample mean, population mean se average kitna door hoga — ye sampling distribution ka **standard deviation** hai.

```
SE of sample mean = σ / √n

σ = population standard deviation
n = sample size
```

Jitna bada sample size, utna chhota standard error — matlab bade sample se estimate zyada accurate hoti hai.

---

## Small Sample Vs Large Sample Tests

| Basis | Large Sample Test | Small Sample Test |
|-------|-------------------|---------------------|
| Sample size | n ≥ 30 | n < 30 |
| Distribution used | Normal (Z) distribution | Student's t-distribution |
| Population variance | Known ya sample variance se approx kar sakte hain | Usually unknown |
| Test statistic | Z-test | t-test |
| Shape | Standard normal (fixed) | t-distribution (depends on degrees of freedom, thoda flatter) |

> Tip — Exam me sabse pehle **sample size check karo** — n ≥ 30 dikhe toh Z-test socho, n < 30 dikhe aur population variance unknown ho toh t-test socho. Yehi decision poore Unit III ka base hai.

---

## Hypothesis Testing — Core Concepts

### Null Hypothesis (H0) aur Alternative Hypothesis (H1)

```
Null Hypothesis (H0)     — "Koi difference/effect nahi hai" — status quo
                            Example: H0: μ = 50 (population mean 50 hai)

Alternative Hypothesis (H1) — "Kuch difference/effect hai" — jo hum prove
                            karna chahte hain
                            Example: H1: μ ≠ 50
```

Hum hamesha H0 ko test karte hain — ya toh use **reject** karte hain (evidence ke against jaane par) ya **fail to reject** karte hain (kaafi evidence na milne par).

> Socho Aise — Ye bilkul court-case jaisa hai. H0 hai "accused innocent hai" (default assumption). Jab tak strong evidence na mile, hum H0 ko reject nahi karte. Hum kabhi "H0 sahi hai" nahi bolte, sirf "H0 reject nahi kar paaye" bolte hain.

### Type I aur Type II Errors

| Error | Kab Hota Hai | Real-life Analogy |
|-------|--------------|---------------------|
| **Type I Error (α)** | H0 sahi tha, phir bhi reject kar diya (false alarm) | Innocent aadmi ko guilty declare karna |
| **Type II Error (β)** | H0 galat tha, phir bhi accept kar liya (miss) | Guilty aadmi ko innocent declare karna |

```
                  H0 is actually True    H0 is actually False
Reject H0         Type I Error (α)       Correct Decision
Accept H0         Correct Decision       Type II Error (β)
```

### Level of Significance

Level of significance (α) wo probability hai jitna risk hum Type I error karne ka lene ke liye ready hain — commonly **α = 0.05 (5%)** ya **α = 0.01 (1%)** use hota hai.

```
α = 0.05  →  95% confidence ki hum sahi decision le rahe hain
α = 0.01  →  99% confidence (zyada strict test)
```

> Warning — "Accept H0" bolna technically galat hai — statisticians hamesha "fail to reject H0" bolte hain, kyunki hum kabhi 100% certain nahi ho sakte ki H0 bilkul sahi hai, sirf itna keh sakte hain ki hamare paas use reject karne ka kaafi evidence nahi mila.

---

### Quick Summary Table

| Term | Meaning |
|------|---------|
| Population | Poora data group |
| Sample | Population ka subset |
| Sampling distribution | Sample statistics (jaise mean) ka distribution |
| Standard Error | SE = σ/√n |
| Null Hypothesis (H0) | Default/no-effect assumption |
| Alternative Hypothesis (H1) | Jo prove karna hai |
| Type I Error (α) | True H0 ko reject karna |
| Type II Error (β) | False H0 ko accept karna |
| Level of Significance | Type I error ka acceptable risk (usually 5% ya 1%) |

> Example — Ek company claim karti hai ki unke bulbs ki average life 1000 hours hai. H0: μ = 1000. Agar sample test karne par pata chale life significantly kam hai, hum H0 reject kar denge (α = 0.05 level par) — yehi pura hypothesis testing process hai.
