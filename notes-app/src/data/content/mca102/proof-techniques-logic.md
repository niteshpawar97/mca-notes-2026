## Mathematical Induction

Mathematical induction ek proof technique hai jo statements ko **saare natural numbers** ke liye prove karne me use hoti hai. Isko "domino effect" ki tarah samajh sakte ho.

### Steps of Induction

**Step 1 (Base Case):** Prove statement true for $n = 1$ (ya smallest value)

**Step 2 (Inductive Hypothesis):** Assume statement true for $n = k$

**Step 3 (Inductive Step):** Prove karo ki agar $n=k$ ke liye true hai, toh $n = k+1$ ke liye bhi true hoga

**Conclusion:** Since base case true hai, aur har $k$ ke liye $k+1$ bhi true hai, statement saare natural numbers ke liye true hai.

> Socho Aise — Induction ek dominoes ki line girana jaisa hai. Agar pehla domino gir jaaye (base case), aur har domino girne se agla domino zaroor girega (inductive step), toh guarantee hai ki **saare** dominoes gir jaayenge.

---

### Worked Example — Sum of First n Natural Numbers

**Prove by induction:** $1 + 2 + 3 + \ldots + n = \dfrac{n(n+1)}{2}$

**Step 1: Base Case ($n=1$)**

$$
\text{LHS} = 1 \qquad \text{RHS} = \frac{1(1+1)}{2} = 1
$$

$\text{LHS} = \text{RHS}$ ✓ True for $n=1$

**Step 2: Inductive Hypothesis**

Assume true for $n = k$:

$$
1 + 2 + 3 + \ldots + k = \frac{k(k+1)}{2}
$$

**Step 3: Inductive Step — Prove true for $n = k+1$**

$$
1 + 2 + \ldots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) \quad \text{(using hypothesis)}
$$

$$
= (k+1) \left[\frac{k}{2} + 1\right] = (k+1)\left[\frac{k+2}{2}\right] = \frac{(k+1)(k+2)}{2}
$$

Compare with formula for $n=k+1$: $\dfrac{(k+1)((k+1)+1)}{2} = \dfrac{(k+1)(k+2)}{2}$

Both match! ✓

**Conclusion:** Since base case is true, and truth for $n=k$ implies truth for $n=k+1$, by principle of mathematical induction, the formula holds for all natural numbers $n$.

> Yaad Rakho — Induction ke 3 steps kabhi mat bhoolo: Base Case, Inductive Hypothesis (assume), Inductive Step (prove for k+1). Exam me har step clearly label karke likhna chahiye — examiner step-labels dekh kar marks deta hai.

---

## Proof by Contradiction

Is technique me hum statement ko prove karne ke liye uska **opposite (negation) assume** karte hain, aur dikhate hain ki wo assumption kisi logical contradiction (impossibility) tak le jaata hai — isliye original statement hi sahi hona chahiye.

**Step 1:** Assume the statement is FALSE (negation true hai)

**Step 2:** Is assumption se logically aage badho

**Step 3:** Kisi contradiction/impossibility tak pahuncho

**Step 4:** Since assumption led to contradiction, original statement must be TRUE

> Socho Aise — Ye ek detective ki tarah sochne jaisa hai — "Agar suspect innocent hota, toh ye evidence exist nahi karta. Lekin evidence exist karta hai. Isliye suspect guilty hai." Wrong assumption se contradiction dikha ke original claim prove karte hain.

---

### Worked Example — √2 is Irrational

**Prove by contradiction:** $\sqrt{2}$ is an irrational number.

**Step 1:** Assume the opposite — $\sqrt{2}$ IS rational. Toh $\sqrt{2}$ ko $\frac{p}{q}$ form me likh sakte hain, jaha $p, q$ integers hain, $q \neq 0$, aur $\frac{p}{q}$ already lowest terms me hai (no common factors).

**Step 2:**

$$
\sqrt{2} = \frac{p}{q}
$$

Squaring both sides: $2 = \dfrac{p^2}{q^2}$

$$
p^2 = 2q^2 \qquad \ldots (i)
$$

Isse pata chalta hai $p^2$ even hai, isliye $p$ bhi even hona chahiye (odd$^2$ hamesha odd hota hai). Toh $p = 2m$ for some integer $m$.

**Step 3:** Substitute $p = 2m$ in equation (i):

$$
(2m)^2 = 2q^2 \implies 4m^2 = 2q^2 \implies q^2 = 2m^2
$$

Isse pata chalta hai $q^2$ bhi even hai, isliye $q$ bhi even hai.

**Step 4:** Contradiction! Humne assume kiya tha $\frac{p}{q}$ lowest terms me hai (no common factors), lekin ab dikh raha hai ki $p$ AUR $q$ dono even hain — matlab dono me common factor 2 hai. Ye hamare starting assumption ke against hai.

**Conclusion:** Assumption ($\sqrt{2}$ is rational) galat tha. Isliye $\sqrt{2}$ IRRATIONAL hai. (Proved by contradiction)

> Tip — Proof by contradiction me sabse important step hai "ye specifically identify karna ki contradiction kaha aaya" — exam me clearly likho "Yahan contradiction hai kyunki..." — isse examiner ko pata chalta hai tumhe concept samajh aaya.

---

## Propositional Logic — Basics

Propositional logic statements (propositions) ko combine karne ke rules deta hai, using logical connectives.

### Basic Connectives and Truth Tables

**AND ($\wedge$) — Conjunction:** True sirf jab dono True ho

| P | Q | $P \wedge Q$ |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

**OR ($\vee$) — Disjunction:** True jab kam se kam ek True ho

| P | Q | $P \vee Q$ |
|---|---|---|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

**NOT ($\neg$) — Negation:** Value ko flip kar deta hai

| P | $\neg P$ |
|---|---|
| T | F |
| F | T |

**IMPLICATION ($\to$) — "If P then Q":** Sirf tab False jab P True aur Q False ho

| P | Q | $P \to Q$ |
|---|---|---|
| T | T | T |
| T | F | F ← only false case |
| F | T | T |
| F | F | T |

> Yaad Rakho — Implication ($P \to Q$) sirf ek case me False hota hai: jab P True ho aur Q False ho. Baaki teeno cases me True hota hai — ye students ko sabse zyada confuse karta hai, isliye specifically yaad rakho.

---

## Inductive Vs Deductive Reasoning

| Aspect | Inductive Reasoning | Deductive Reasoning |
|--------|------------------------|--------------------------|
| Direction | Specific observations $\to$ General conclusion | General rule $\to$ Specific conclusion |
| Certainty | Conclusion probable hai, guaranteed nahi | Conclusion guaranteed true hai (if premises true) |
| Example | "Maine 100 crows dekhe, sab black the → Sab crows black hain" (pattern-based guess) | "Sab crows black hain. Ye ek crow hai. Isliye ye black hai." (logical certainty) |
| Use in Math | Mathematical Induction (formal, rigorous version) | Direct proofs, theorem application |

> Socho Aise — Inductive reasoning ek scientist ki tarah hai — experiments dekh kar pattern/theory banata hai (kabhi galat bhi ho sakti hai naye evidence se). Deductive reasoning ek judge ki tarah hai — agar rules (premises) sahi hain, toh conclusion 100% certain hai, koi doubt nahi.

---

### Quick Summary Table

| Technique | Core Idea |
|-----------|-----------|
| Mathematical Induction | Base case + ($k$ true $\to$ $k+1$ true) $\Rightarrow$ true for all $n$ |
| Proof by Contradiction | Assume negation, derive contradiction, conclude original true |
| AND ($\wedge$) | True only if both true |
| OR ($\vee$) | True if at least one true |
| Implication ($\to$) | False only when $P=\text{True}$, $Q=\text{False}$ |
| Inductive Reasoning | Specific $\to$ General (probable) |
| Deductive Reasoning | General $\to$ Specific (certain) |

> Example — "Agar aaj Sunday hai ($P$), toh school band hai ($Q$)" — ye implication False sirf tab hogi jab aaj sach me Sunday ho ($P=\text{True}$) lekin school khula ho ($Q=\text{False}$). Baaki sab combinations me statement True treat hoti hai formal logic me.
