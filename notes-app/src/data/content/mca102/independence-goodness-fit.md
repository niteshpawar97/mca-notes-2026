## Chi-Square Test — Ek Recap

Chi-square test (χ²) observed data aur expected data ke beech difference measure karta hai. Iske do bahut important applications hain exam ke perspective se:

1. **Test for Independence of Attributes** — do categorical variables aapas me related hain ya independent
2. **Test for Goodness of Fit** — observed data, kisi theoretical/expected distribution se match karta hai ya nahi

Dono me formula same hi hai:

```
χ² = Σ [(O - E)² / E]

O = Observed frequency
E = Expected frequency
Σ = sabhi categories/cells ka sum
```

> Yaad Rakho — Chi-square formula ek hi hai hamesha: Σ(O-E)²/E. Sirf O aur E kaise nikalte ho, wo application (independence vs goodness of fit) ke hisaab se change hota hai.

---

## Test for Independence of Attributes

Ye test check karta hai ki **do categorical attributes** (jaise "Gender" aur "Product Preference") aapas me statistically **independent** hain ya unme **association** hai.

Data ko ek **contingency table** (rows × columns) me arrange karte hain.

### Expected Frequency Formula

```
E(cell) = (Row Total × Column Total) / Grand Total
```

### Degrees of Freedom

```
df = (r - 1) × (c - 1)

r = number of rows
c = number of columns
```

> Socho Aise — Independence test ye check karta hai ki "Kya tumhari pasand tumhare gender par depend karti hai?" jaisa sawaal. Agar dono independent hain, toh observed frequencies expected frequencies ke bahut kareeb honi chahiye.

---

### Worked Example — Independence Test

```
Problem: Ek survey me 200 logo se poocha gaya ki wo Tea pasand karte hain
ya Coffee. Data:

                Male    Female    Total
Tea              40       60       100
Coffee           60       40       100
Total           100      100       200

Test karo (α=0.05) ki beverage preference gender par depend karta hai ya nahi.

Step 1: H0: Gender aur beverage preference independent hain
        H1: Gender aur beverage preference independent nahi hain

Step 2: Expected frequencies calculate karo: E = (Row Total × Col Total)/Grand Total

E(Male,Tea)    = (100×100)/200 = 50
E(Female,Tea)  = (100×100)/200 = 50
E(Male,Coffee) = (100×100)/200 = 50
E(Female,Coffee)=(100×100)/200 = 50

Step 3: Compute χ²

χ² = (40-50)²/50 + (60-50)²/50 + (60-50)²/50 + (40-50)²/50
   = 100/50 + 100/50 + 100/50 + 100/50
   = 2 + 2 + 2 + 2
   = 8

Step 4: df = (2-1)(2-1) = 1
        Table value of χ² at df=1, α=0.05 = 3.841

Step 5: Calculated χ² (8) > Table value (3.841)  →  Reject H0

Step 6: Conclusion — Gender aur beverage preference independent NAHI hain,
        matlab inme significant association hai.
```

> Tip — Contingency table questions me sabse pehle **Row Total** aur **Column Total** nikalna mat bhoolo, phir har cell ki Expected value nikalo — is step ko skip karne se poora answer galat ho jaata hai.

---

## Chi-Square Test for Goodness of Fit

Ye test check karta hai ki observed data kisi **theoretical/expected distribution** ke saath match karta hai ya nahi — jaise "kya ek dice fair hai?" (uniform distribution expected).

### Same Formula, Different Context

```
χ² = Σ [(O - E)² / E]        with df = (number of categories - 1)
```

> Warning — Goodness of fit test me df = (n-1), independence test me df = (r-1)(c-1) — ye dono formula alag hain, exam me mixup mat karo!

---

### Worked Example — Goodness of Fit

```
Problem: Ek dice ko 120 baar roll kiya gaya. Observed frequencies:

Face:      1    2    3    4    5    6
Observed: 25   17   15   23   24   16

Agar dice fair hai, toh expected frequency har face ke liye equal honi
chahiye: E = 120/6 = 20 for each face.

Test karo (α=0.05) ki dice fair hai ya nahi.

Step 1: H0: Dice fair hai (sab faces equally likely)
        H1: Dice fair nahi hai

Step 2: E = 20 for each of the 6 faces

Step 3: Compute χ²

Face   O    E    (O-E)   (O-E)²   (O-E)²/E
1     25   20      5       25      1.25
2     17   20     -3        9      0.45
3     15   20     -5       25      1.25
4     23   20      3        9      0.45
5     24   20      4       16      0.80
6     16   20     -4       16      0.80
                                   -------
                          Total =  5.00

χ² = 5.00

Step 4: df = 6 - 1 = 5
        Table value of χ² at df=5, α=0.05 = 11.07

Step 5: Calculated χ² (5.00) < Table value (11.07)  →  Fail to reject H0

Step 6: Conclusion — 5% significance level par, dice fair hai — koi kaafi
        evidence nahi hai ye kehne ke liye ki dice biased hai.
```

> Example — Notice karo table banake calculation karna kitna clean hota hai — har row me O, E, (O-E), (O-E)², (O-E)²/E likh ke last me sum lo. Exam me ye tabular presentation extra marks deti hai.

---

### Quick Summary Table

| Aspect | Independence Test | Goodness of Fit Test |
|--------|----------------------|--------------------------|
| Purpose | Do attributes related hain ya nahi | Observed data, expected distribution se match karta hai ya nahi |
| Data Layout | Contingency table (r × c) | Single row of categories |
| Expected Frequency | (Row Total × Col Total)/Grand Total | Theoretical/hypothesized value |
| Degrees of Freedom | (r-1)(c-1) | (categories - 1) |
| Formula | χ² = Σ(O-E)²/E | χ² = Σ(O-E)²/E |

> Yaad Rakho — Dono tests me decision rule same hai: calculated χ² > table value → Reject H0 (data expected se significantly different hai). Calculated χ² ≤ table value → Fail to reject H0 (data expected ke consistent hai).
