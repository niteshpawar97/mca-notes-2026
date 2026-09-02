## Deadlock Kya Hai?

**Deadlock** tab hota hai jab do ya zyada processes ek dusre ke paas jo resource hai uska wait karte reh jaate hain, aur koi bhi process aage nahi badh paata — sab permanently block ho jaate hain.

```
Process A holds Resource 1, wants Resource 2
Process B holds Resource 2, wants Resource 1

     A ──wants──► R2 ──held by──► B
     │                              │
   holds                        wants
     │                              │
     R1 ◄──held by── A    B ──wants──► R1

  Circular wait → DEADLOCK
```

> Socho Aise — Deadlock ek "traffic jam at a 4-way crossing" jaisa hai jahan har direction ki gaadi doosri direction ke clear hone ka wait kar rahi hai, aur koi bhi move nahi karta kyunki sab ek dusre ko block kar rahe hain.

---

## Four Necessary Conditions for Deadlock (Coffman Conditions)

Deadlock hone ke liye yeh **chaaron conditions ek saath** true honi chahiye:

| Condition | Matlab |
|-----------|--------|
| **Mutual Exclusion** | Resource ek time me sirf ek process use kar sakta hai |
| **Hold and Wait** | Process kuch resources hold kiye hue hai, aur naye resources ka wait kar raha hai |
| **No Preemption** | Resource forcefully process se cheena nahi ja sakta, process khud release karega |
| **Circular Wait** | Processes ka ek circular chain banta hai jisme har process agle process ke resource ka wait kar raha hai |

> Yaad Rakho — Agar in chaaron me se **koi bhi ek condition break** kar do, deadlock nahi hoga — yahi deadlock prevention ka basic principle hai.

---

## Deadlock Handling — Prevention vs Avoidance vs Detection

| Approach | Strategy | Kab Act Karta Hai |
|----------|----------|----------------------|
| **Prevention** | Coffman conditions me se kisi ek ko structurally impossible bana do | Design time par |
| **Avoidance** | System ko kabhi bhi "unsafe state" me jaane hi mat do (jaise Banker's Algorithm) | Runtime — har resource request par check |
| **Detection** | Deadlock hone do, phir periodically check karo aur recover karo | Deadlock hone ke baad |
| **Ignorance (Ostrich Algorithm)** | Deadlock ko ignore karo, assume karo rarely hoga (many real OS jaise UNIX yehi karte hain) | Kabhi nahi (risk lete hain) |

```
Prevention:   Deadlock ho hi nahi sakta (restrictive, kam resource utilization)
Avoidance:    Deadlock hone se pehle hi rok do (runtime overhead)
Detection:    Deadlock hone do, phir dhoondo aur fix karo (recovery cost)
```

> Tip — Exam me "prevention vs avoidance vs detection" table format me likhna best hai — examiner clearly dekh paata hai teeno approaches ka difference pata hai.

---

## Banker's Algorithm (Deadlock Avoidance)

Banker's Algorithm ek **deadlock avoidance** technique hai jo check karta hai ki resource allocate karne se system **safe state** me rahega ya **unsafe state** me chala jaayega. Agar unsafe hoga, request deny kar di jaati hai.

**Safe State** — ek state jisme processes ko kisi bhi order me execute karke sabko unke max resources allocate kiye ja sakte hain bina deadlock hue.

### Data Structures

| Structure | Matlab |
|-----------|--------|
| **Available** | Har resource type ka kitna free instance hai |
| **Max** | Har process ko max kitne instances chahiye ho sakte hain |
| **Allocation** | Har process ko abhi kitne instances allocated hain |
| **Need** | `Need = Max − Allocation` — process ko aage aur kitna chahiye |

### Worked Example

5 processes (P0-P4), 3 resource types (A, B, C). Total instances: A=10, B=5, C=7.

**Allocation:**

| Process | A | B | C |
|---------|---|---|---|
| P0 | 0 | 1 | 0 |
| P1 | 2 | 0 | 0 |
| P2 | 3 | 0 | 2 |
| P3 | 2 | 1 | 1 |
| P4 | 0 | 0 | 2 |

**Max:**

| Process | A | B | C |
|---------|---|---|---|
| P0 | 7 | 5 | 3 |
| P1 | 3 | 2 | 2 |
| P2 | 9 | 0 | 2 |
| P3 | 2 | 2 | 2 |
| P4 | 4 | 3 | 3 |

**Available = Total − Sum(Allocation) = (10,5,7) − (7,2,5) = (3, 3, 2)**

**Need = Max − Allocation:**

| Process | A | B | C |
|---------|---|---|---|
| P0 | 7 | 4 | 3 |
| P1 | 1 | 2 | 2 |
| P2 | 6 | 0 | 0 |
| P3 | 0 | 1 | 1 |
| P4 | 4 | 3 | 1 |

### Safety Algorithm — Step by Step

Work = Available = (3,3,2). Dekho kaunsa process ka `Need ≤ Work`:

```
Step 1: P1 → Need(1,2,2) ≤ Work(3,3,2)? Haan
        Work = Work + Allocation(P1) = (3,3,2)+(2,0,0) = (5,3,2)
        Sequence so far: [P1]

Step 2: P3 → Need(0,1,1) ≤ Work(5,3,2)? Haan
        Work = (5,3,2)+(2,1,1) = (7,4,3)
        Sequence: [P1, P3]

Step 3: P0 → Need(7,4,3) ≤ Work(7,4,3)? Haan
        Work = (7,4,3)+(0,1,0) = (7,5,3)
        Sequence: [P1, P3, P0]

Step 4: P2 → Need(6,0,0) ≤ Work(7,5,3)? Haan
        Work = (7,5,3)+(3,0,2) = (10,5,5)
        Sequence: [P1, P3, P0, P2]

Step 5: P4 → Need(4,3,1) ≤ Work(10,5,5)? Haan
        Work = (10,5,5)+(0,0,2) = (10,5,7)
        Sequence: [P1, P3, P0, P2, P4]
```

**Safe Sequence = P1 → P3 → P0 → P2 → P4** — sab processes complete ho sakte hain bina deadlock ke, isliye system **safe state** me hai.

> Example — Agar koi request is safe state ko todti (yaani koi process aisi state banaata jahan koi bhi safe sequence na mil paaye), toh Banker's Algorithm us request ko **deny** kar dega, chahe resources currently available bhi ho.

> Warning — Banker's Algorithm ke liye zaroori hai ki **Max claim pehle se pata ho** har process ka — yeh practically hamesha possible nahi hota, isliye yeh mostly academic/theoretical model hai, real OS me kam use hota hai.

> Tip — Numerical solve karte waqt hamesha pehle **Need table** banao (`Max - Allocation`), phir **Available** se start karke ek-ek process check karo jiska Need available resources se kam-ya-barabar ho. Jo process match kare, uska allocation Available me wapas add karo aur aage badho. Yeh systematic approach RGPV exam me full marks deta hai.
