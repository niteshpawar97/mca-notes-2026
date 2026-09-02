## Sets — Basic Notation

Set ek well-defined collection of distinct objects hai. Elements ko `{ }` braces me likhte hain.

```
A = {1, 2, 3, 4, 5}         — roster/listing form
B = {x | x is a natural number < 10}   — set-builder form

x ∈ A     — x, set A ka member hai
x ∉ A     — x, set A ka member nahi hai
∅ or {}   — empty set (koi element nahi)
|A|       — cardinality of A (number of elements)
```

### Common Set Operations

```
Union:         A ∪ B  = elements jo A me ya B me ya dono me hain
Intersection:  A ∩ B  = elements jo A aur B dono me common hain
Difference:    A - B  = elements jo A me hain par B me nahi
Complement:    A'     = elements jo universal set me hain par A me nahi
```

> Yaad Rakho — Union "OR" jaisa hai (kisi bhi ek me ho), Intersection "AND" jaisa hai (dono me hona chahiye). Programming ke logical operators se relate karo isse yaad rakhna easy ho jaata hai.

---

## Subsets

Set B, set A ka **subset** kaha jaata hai agar A ka har element B me bhi ho.

```
B ⊆ A     — B is a subset of A (B ke sab elements A me hain)
B ⊂ A     — B is a proper subset of A (B ⊆ A hai lekin B ≠ A)

Example: A = {1,2,3}
Subsets of A: ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}
```

> Socho Aise — Har set apna khud ka subset hota hai (A ⊆ A), aur empty set (∅) har set ka subset hota hai — ye do "trivial subsets" exam me kaafi baar bhulaye jaate hain.

---

## Power Set

**Power set** of a set A, A ke saare possible subsets ka collection hai — including empty set aur A khud.

```
P(A) = set of all subsets of A

If |A| = n, then |P(A)| = 2ⁿ
```

### Worked Example

```
A = {1, 2, 3}       →  |A| = 3

P(A) = { ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3} }

|P(A)| = 2³ = 8 subsets   ✓ (count karke verify karo — 8 elements hain)
```

> Yaad Rakho — Power set ka size formula: |P(A)| = 2ⁿ, jaha n = |A|. Har element ke liye do choices hoti hain — "subset me shamil karo" ya "mat karo" — isliye 2 × 2 × ... n baar = 2ⁿ.

---

## Countability

Sets ko **cardinality** ke hisaab se classify kiya jaata hai:

```
Finite Set        — limited number of elements (jaise {1,2,3})

Countably Infinite — infinite hai, but elements ko natural numbers
                      (1,2,3,...) se ek-ek karke match kar sakte hain
                      Example: Set of all integers (Z), Set of all
                      rational numbers (Q)

Uncountable Set    — infinite hai, aur elements ko natural numbers se
                      match nahi kar sakte — "too many" elements
                      Example: Set of all real numbers (R)
```

> Socho Aise — Countably infinite set aisa hai jaise ek endless line me khade log jinko tum ek-ek karke number de sakte ho (1st, 2nd, 3rd...) chahe line kabhi khatam na ho. Uncountable set (jaise real numbers) itna dense hai ki tum unhe kabhi is tarah number hi nahi kar sakte — do numbers ke beech bhi infinite numbers hain.

**Cantor's insight:** Natural numbers (N), Integers (Z), aur Rational numbers (Q) — sab countably infinite hain (same "size" of infinity). Real numbers (R) uncountable hain — ek "bigger" infinity.

---

## Counting Functions — Permutations & Combinations

Counting ka use hota hai ye jaanne ke liye ki kisi group se items **kitne tareeko se select ya arrange** kiye ja sakte hain.

### Permutation (Order Matters)

```
ⁿPᵣ = n! / (n-r)!

Use tab jab arrangement/order important ho — jaise "kitne tareeko se
3 logo ko podium (1st, 2nd, 3rd) par rakh sakte hain"
```

### Combination (Order Doesn't Matter)

```
ⁿCᵣ = n! / [r!(n-r)!]

Use tab jab sirf selection important ho, order nahi — jaise "kitne
tareeko se 5 logo me se 3 logo ki committee bana sakte hain"
```

> Tip — Exam me confuse ho toh khud se poocho: "Kya order/arrangement matter karta hai?" Haan → Permutation. Nahi, sirf group select karna hai → Combination. Ye ek-line trick hamesha kaam karta hai.

### Worked Example

```
Problem: 8 students me se 3 students ki ek committee banani hai
(order matter nahi karta — sabhi member equal hain).

Use Combination:  ⁸C₃ = 8! / (3! × 5!)
                       = (8×7×6) / (3×2×1)
                       = 336/6
                       = 56

Answer: 56 tareeko se committee ban sakti hai
```

```
Problem: Same 8 students me se President, Secretary, Treasurer choose
karne hain (3 alag positions — order matter karta hai).

Use Permutation:  ⁸P₃ = 8! / 5!
                       = 8×7×6
                       = 336

Answer: 336 tareeko se positions fill ho sakti hain
```

> Example — Notice karo same 8 students, same "choose 3" — lekin answer alag hai (56 vs 336) sirf isliye kyunki ek case me positions distinct hain (order matters) aur doosre me nahi. Ye exact concept exam me test kiya jaata hai.

---

### Quick Summary Table

| Concept | Formula/Rule |
|---------|--------------|
| Power Set size | \|P(A)\| = 2ⁿ |
| Subset | B ⊆ A: every element of B is in A |
| Countably infinite | Can be matched 1-1 with natural numbers (N, Z, Q) |
| Uncountable | Cannot be matched with natural numbers (R) |
| Permutation | ⁿPᵣ = n!/(n-r)! — order matters |
| Combination | ⁿCᵣ = n!/[r!(n-r)!] — order doesn't matter |
