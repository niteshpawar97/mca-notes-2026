## Matrix Ki Rank Kya Hoti Hai?

Rank ek number hai jo batata hai ki matrix me kitni **independent rows (ya columns)** hain. Simple shabdon me — matrix ke andar "useful information" kitni hai.

**Definition** — Rank of a matrix A = order of the largest non-zero minor of A. Ise `ρ(A)` ya `r(A)` likhte hain.

Practically exam me hum determinant nikaal ke rank nahi nikalte (bada matrix ho toh mushkil hai) — hum **row-echelon form** bana ke non-zero rows count karte hain.

> Yaad Rakho — Rank = number of non-zero rows jab matrix ko row-echelon form me convert kar diya jaaye.

---

### Row-Echelon Form Kaise Banayein

Row-echelon form banane ke liye hum sirf **elementary row operations** use karte hain:

```
R1: Kisi bhi do rows ko aapas me swap karna       (Ri ↔ Rj)
R2: Kisi row ko non-zero constant se multiply karna (Ri → k·Ri)
R3: Ek row me kisi dusri row ka multiple add karna  (Ri → Ri + k·Rj)
```

Goal: matrix ko aise form me le aana jaha diagonal ke neeche sab zero ho jaaye (staircase pattern).

### Worked Example — Rank Nikalna

```
A = | 1   2   3 |
    | 2   4   7 |
    | 3   6  10 |

Step 1: R2 → R2 - 2R1,  R3 → R3 - 3R1

    | 1   2   3 |
    | 0   0   1 |
    | 0   0   1 |

Step 2: R3 → R3 - R2

    | 1   2   3 |
    | 0   0   1 |
    | 0   0   0 |

Non-zero rows = 2   →   Rank(A) = 2
```

> Tip — Rank nikalte time ek row poori zero ho jaaye toh usko "dead" maan lo — wo count nahi hoti. Baaki jitni rows bachi non-zero, wahi rank hai.

---

## Consistency of a System of Linear Equations

Jab hume equations ka system `Ax = b` diya jaata hai, sabse pehla sawaal ye hota hai — **solution exist karta hai ya nahi?** Iske liye hum do matrices ki rank compare karte hain:

- **Coefficient matrix A** — sirf x, y, z ke coefficients
- **Augmented matrix [A|b]** — coefficients + RHS constants ek saath

```
System:  x + y + z = 6
         2x + y - z = 1
         3x + 2y + 2z = 13

A = | 1  1  1 |        [A|b] = | 1  1  1 | 6  |
    | 2  1 -1 |                | 2  1 -1 | 1  |
    | 3  2  2 |                | 3  2  2 | 13 |
```

### Consistency Rules (Rouché–Capelli Theorem)

| Condition | Meaning | Result |
|-----------|---------|--------|
| `rank(A) = rank([A|b]) = n` (n = number of unknowns) | Sab equations independent, poori info hai | **Unique solution** |
| `rank(A) = rank([A|b]) < n` | Kam independent equations hain unknowns se | **Infinite solutions** |
| `rank(A) ≠ rank([A|b])` | Augmented matrix me extra independent info jo A me nahi | **No solution (inconsistent)** |

> Socho Aise — Socho A matrix "questions" hai aur b "answers". Agar answers questions ke saath match nahi karte (rank mismatch), matlab system jhootha hai — koi solution nahi. Agar answers questions se kam info dete hain, matlab bahut saare solutions possible hain.

---

### Worked Example — Consistency Check

```
System:  x + y + z = 6
         2x + y - z = 1
         3x + 2y + 2z = 13

Row reduce [A|b]:

R2 → R2 - 2R1,  R3 → R3 - 3R1

| 1  1  1 | 6 |
| 0 -1 -3 | -11 |
| 0 -1 -1 | -5 |

R3 → R3 - R2

| 1  1  1 | 6 |
| 0 -1 -3 | -11 |
| 0  0  2 | 6  |

rank(A) = 3, rank([A|b]) = 3, n = 3 unknowns
→ rank(A) = rank([A|b]) = n  →  Unique solution exists
```

Ab back-substitution se solve karte hain: teesri row se `2z = 6 → z = 3`. Dusri row se `-y - 3(3) = -11 → y = 2`. Pehli row se `x + 2 + 3 = 6 → x = 1`.

**Solution: x = 1, y = 2, z = 3**

---

## Solving Ax = b Using Row-Reduced Echelon Form

Row-Reduced Echelon Form (RREF) row-echelon form se ek step aage hai — isme:

1. Har non-zero row ka leading entry (pivot) **1** hota hai
2. Pivot ke upar aur neeche dono taraf **sirf zero** hote hain

RREF banane ka fayda ye hai ki solution direct read ho jaata hai — back-substitution ki zaroorat nahi padti, kyunki matrix diagonal form (identity jaisi) me aa jaati hai.

```
[A|b] ko RREF karne ke baad agar milta hai:

| 1  0  0 | 1 |
| 0  1  0 | 2 |
| 0  0  1 | 3 |

Directly padh lo:  x = 1, y = 2, z = 3
```

> Warning — RREF aur Row-Echelon Form (REF) me confuse mat ho. REF me sirf staircase pattern chahiye (pivots 1 hone zaroori nahi), RREF me pivots strictly 1 hone chahiye aur unke upar-neeche bhi zero hona chahiye. Exam me dono defs alag se poochi ja sakti hain.

---

### Quick Summary Table

| Term | Kya Batata Hai |
|------|----------------|
| Rank of A | Independent rows/columns ki count |
| rank(A) = rank([A\|b]) = n | Unique solution |
| rank(A) = rank([A\|b]) < n | Infinite solutions |
| rank(A) ≠ rank([A\|b]) | No solution |
| Row-Echelon Form | Staircase pattern, back-substitution se solve |
| Row-Reduced Echelon Form | Pivots = 1, direct solution read ho jaata hai |

> Example — Agar `rank(A) = 2` but `rank([A|b]) = 3` for a 3-unknown system, toh system **inconsistent** hai — koi values of x, y, z exist nahi karti jo teeno equations satisfy kare. Exam me ye sabse common trick question hai.
