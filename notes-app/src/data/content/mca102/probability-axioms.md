## Probability Kya Hai?

Probability kisi event ke hone ke chance ko number ke roop me express karti hai — 0 se 1 ke beech.

```
P(E) = (Number of favourable outcomes) / (Total number of possible outcomes)

0 ≤ P(E) ≤ 1

P(E) = 0   →  event kabhi nahi hoga (impossible)
P(E) = 1   →  event hamesha hoga (certain)
```

**Example:** Ek fair coin uchalne par Head aane ki probability:
```
P(Head) = 1/2 = 0.5
```

---

## Axioms of Probability

Kolmogorov ne probability ke teen basic axioms diye the, jinpar poori probability theory based hai:

```
Axiom 1:  P(E) ≥ 0                     (probability kabhi negative nahi ho sakti)

Axiom 2:  P(S) = 1                     (sample space S ki total probability 1 hai
                                          — koi na koi outcome zaroor hoga)

Axiom 3:  Agar E1, E2 mutually exclusive hain (dono saath nahi ho sakte), toh
          P(E1 ∪ E2) = P(E1) + P(E2)
```

> Yaad Rakho — Teen axioms: (1) Non-negative, (2) Sample space ki probability = 1, (3) Mutually exclusive events ki probability add hoti hai. Exam me inhe by-heart likhna chahiye.

---

## Addition Law of Probability

Do events A aur B me se **kam se kam ek** hone ki probability:

```
General case (A and B may overlap):
P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

Special case (A and B mutually exclusive, no overlap):
P(A ∪ B) = P(A) + P(B)          [since P(A∩B) = 0]
```

> Socho Aise — Do dosto ki chhatri (umbrella) hai jo overlap karti hai. Agar tum dono ke coverage area ko simple add kar do, overlap wala hissa **do baar** count ho jaayega — isiliye overlap (A∩B) ko ek baar minus karna padta hai.

### Example

```
Ek card deck se ek card nikala. Find P(King or Heart).

P(King) = 4/52
P(Heart) = 13/52
P(King and Heart) = 1/52    (King of Hearts — overlap)

P(King or Heart) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13
```

---

## Multiplication Law of Probability

Do events A aur B **dono** hone ki probability:

```
General case (A and B dependent):
P(A ∩ B) = P(A) · P(B|A)

Special case (A and B independent):
P(A ∩ B) = P(A) · P(B)
```

**Independent events** wo hote hain jinme ek event ka outcome doosre ko affect nahi karta (jaise do alag coins uchalna).

### Example

```
Ek bag me 5 red aur 3 blue balls hain. Bina wapas rakhe (without replacement)
do balls nikale gaye. Find P(both red).

P(1st red) = 5/8
P(2nd red | 1st red) = 4/7    (ab bag me 4 red, 7 total bache)

P(both red) = (5/8) × (4/7) = 20/56 = 5/14
```

> Tip — "With replacement" ho toh dono draws **independent** hote hain (probability same rehti hai). "Without replacement" ho toh **dependent** hote hain (dusra draw pehle par depend karta hai) — exam me ye keyword dhyan se padho.

---

## Conditional Probability

Conditional probability batati hai ki event B ho chuka hai, ye jaante hue event A hone ki probability kya hai.

```
P(A|B) = P(A ∩ B) / P(B)          (provided P(B) > 0)

"P(A given B)" — B already hua hai, ab A hone ka chance kitna hai
```

> Yaad Rakho — Conditional probability formula: P(A|B) = P(A∩B)/P(B). Numerator me hamesha intersection (dono saath), denominator me wo event jo "given" hai.

---

### Worked Example — Conditional Probability with Dice

```
Problem: Ek dice roll kiya gaya. Given ki result even number hai, find
probability ki wo number 4 se bada hai.

Sample Space S = {1,2,3,4,5,6}

Event A: number > 4  →  A = {5, 6}
Event B: number is even  →  B = {2, 4, 6}

A ∩ B = {6}     (dono conditions satisfy karta hai)

P(B) = 3/6 = 1/2
P(A∩B) = 1/6

P(A|B) = P(A∩B)/P(B) = (1/6)/(1/2) = 2/6 = 1/3
```

**Interpretation:** Bina condition ke P(A) = 2/6 = 1/3 hota (numbers 5,6). Yaha coincidentally same aaya kyunki sirf 6 overlap karta hai — but general case me ye alag values de sakta hai.

---

### Worked Example — Conditional Probability with Cards

```
Problem: Ek deck se ek card nikala gaya. Given ki card ek face card hai
(J, Q, K), find probability ki wo Spade hai.

Total face cards = 12 (4 suits × 3 each: J,Q,K)
Face cards that are also Spades = 3 (J,Q,K of Spades)

P(Face card) = 12/52
P(Spade ∩ Face card) = 3/52

P(Spade | Face card) = (3/52)/(12/52) = 3/12 = 1/4
```

> Example — Shortcut: jab sample space already restrict ho chuki ho (jaise "given face card"), seedha reduced sample space (12 face cards) me se favourable outcomes (3 spade face cards) count kar sakte ho: 3/12 = 1/4 — same answer, fast method.

---

### Quick Summary Table

| Concept | Formula |
|---------|---------|
| Basic Probability | P(E) = favourable/total |
| Axiom 1 | P(E) ≥ 0 |
| Axiom 2 | P(S) = 1 |
| Axiom 3 | Mutually exclusive: P(E1∪E2) = P(E1)+P(E2) |
| Addition Law | P(A∪B) = P(A)+P(B)-P(A∩B) |
| Multiplication Law (independent) | P(A∩B) = P(A)·P(B) |
| Multiplication Law (dependent) | P(A∩B) = P(A)·P(B\|A) |
| Conditional Probability | P(A\|B) = P(A∩B)/P(B) |

> Warning — Addition Law me "-P(A∩B)" minus karna mat bhoolo jab events mutually exclusive na ho — ye sabse common mistake hai jo students karte hain, overlap ko double count kar dete hain.
