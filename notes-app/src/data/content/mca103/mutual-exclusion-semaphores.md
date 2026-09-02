## Inter-Process Synchronization Ki Zaroorat

Jab multiple processes/threads **shared data** ya resource access karte hain simultaneously, toh **Race Condition** ho sakti hai — final result execution order par depend kar jaata hai, jo galat/inconsistent ho sakta hai.

```
Shared variable: count = 5

Process A: read count (5) → count+1 → write count (6)
Process B: read count (5) → count+1 → write count (6)

Expected: count = 7
Actual (agar interleave galat hua): count = 6  ❌ (ek update lost ho gaya)
```

> Socho Aise — Race condition ek "shared bank account" jaisa hai jisme do log ATM se ek saath paise nikaal rahe hain — agar balance check aur update ke beech dono ek hi balance dekh lein, toh galat total ban sakta hai.

Isiliye processes ke beech **synchronization** zaroori hai — taaki shared resources ka access controlled tareeke se ho.

---

## Critical Section Problem

**Critical Section** — code ka wo hissa jahan process shared resource/variable access karta hai. Isse safely handle karne ke liye ek solution me teen requirements poori honi chahiye:

| Requirement | Matlab |
|-------------|--------|
| **Mutual Exclusion** | Ek time me sirf ek process apne critical section me ho sakta hai |
| **Progress** | Agar koi critical section me nahi hai aur kuch processes entry chahte hain, decision infinite time tak postpone nahi honi chahiye |
| **Bounded Waiting** | Ek process critical section me kitni baar entry le chuke hain doosre process ke wait karte hue — is par ek upper bound hona chahiye (starvation na ho) |

```
General Structure of a Process:

  do {
      entry section       // permission lo
      critical section    // shared resource use karo
      exit section         // permission release karo
      remainder section    // baaki kaam
  } while (true);
```

> Yaad Rakho — Teeno conditions (Mutual Exclusion, Progress, Bounded Waiting) exam me point-wise likhna zaroori hai — "critical section problem solution ki requirements" ek classic 5-mark question hai.

---

## Semaphores

**Semaphore** ek integer variable hai jise sirf do atomic operations se access kiya jaata hai — `wait()` (P operation) aur `signal()` (V operation).

```c
wait(S) {              // P(S) / down(S)
    while (S <= 0)
        ;               // busy wait
    S = S - 1;
}

signal(S) {             // V(S) / up(S)
    S = S + 1;
}
```

### Binary Semaphore vs Counting Semaphore

| Type | Value Range | Use Case |
|------|--------------|----------|
| **Binary Semaphore** | 0 ya 1 | Mutual exclusion (lock jaisa) — sirf ek process ko access dena |
| **Counting Semaphore** | Koi bhi non-negative integer | Limited number of identical resources manage karna (jaise 5 printers) |

```
Binary Semaphore se Mutual Exclusion:

Semaphore mutex = 1;

Process:
   wait(mutex);       // agar mutex=1, ho jaata 0, entry milti hai
   // critical section
   signal(mutex);     // mutex wapas 1, doosre ko entry milegi
```

> Example — 3 identical printers available hain. Counting semaphore `printers = 3` se initialize karo. Har process printer use karne se pehle `wait(printers)` karega (count ghategi), aur khatam hone par `signal(printers)` (count badhegi). Jab count 0 ho jaaye, naye processes wait karenge.

---

## Hardware Support for Mutual Exclusion

Software-only solutions (jaise Peterson's) complex hote hain. Hardware **atomic instructions** simpler mutual exclusion dete hain:

**Test-and-Set (TS)** — ek atomic instruction jo ek boolean lock variable check karta hai aur usi cycle me set kar deta hai:

```c
boolean TestAndSet(boolean *lock) {
    boolean old = *lock;
    *lock = true;
    return old;          // yeh sab ek atomic (indivisible) step me hota hai
}

// Mutual Exclusion:
while (TestAndSet(&lock))
    ;                    // busy wait jab tak lock free na ho
// critical section
lock = false;
```

Yeh hardware level pe atomic hone ki wajah se koi interrupt ya context switch beech me nahi aa sakta — isliye race condition nahi hoti.

---

## Queuing Implementation of Semaphores

Busy-waiting (`while(S<=0);`) CPU cycles waste karta hai (**spinlock**). Better implementation me semaphore ke saath ek **waiting queue** attach karte hain — jab process wait kare, use **block** kar dete hain (CPU se hata dete hain), aur `signal()` par queue se ek process ko **wakeup** karte hain.

```c
typedef struct {
    int value;
    struct process *list;   // waiting queue
} semaphore;

wait(semaphore *S) {
    S->value--;
    if (S->value < 0) {
        add this process to S->list;
        block();             // CPU chhod do, waiting state me jao
    }
}

signal(semaphore *S) {
    S->value++;
    if (S->value <= 0) {
        remove a process P from S->list;
        wakeup(P);
    }
}
```

> Tip — Busy-waiting vs blocking (queue-based) semaphore ka difference exam me poocha jaata hai — busy waiting CPU waste karta hai, queue-based implementation CPU ko doosre process ko de deta hai jab tak resource free na ho.

---

## Critical Section vs Critical Region vs Conditional Critical Region

| Term | Description |
|------|-------------|
| **Critical Section** | Code ka wo bhaag jo shared resource access karta hai, semaphore/lock se manually protect karte hain |
| **Critical Region** | High-level language construct jo shared variable ko explicitly critical section se associate karta hai — `region v when B do S;` jaisa syntax |
| **Conditional Critical Region (CCR)** | Critical region jisme ek additional boolean condition `B` honi chahiye true tabhi process entry le sakta hai — automatic waiting agar condition false ho |

---

## Monitors and Messages

**Monitor** — ek high-level synchronization construct jo shared data + us data par operate karne wale procedures ko ek hi module me encapsulate karta hai. Compiler automatically mutual exclusion ensure karta hai — programmer ko manually `wait()`/`signal()` lagane ki zaroorat nahi.

```
monitor ProcessSynch {
    // shared variables
    condition cond_var;

    procedure entry_proc() {
        // sirf ek process ek time par monitor ke andar ho sakta hai
        ...
        cond_var.wait();     // condition variable pe wait/signal
        ...
        cond_var.signal();
    }
}
```

**Message Passing** — processes shared memory use kiye bina `send()`/`receive()` primitives se communicate karte hain — distributed systems me useful, kyunki wahan shared memory available nahi hoti.

> Warning — Monitor sirf ek high-level abstraction hai — internally compiler/runtime semaphores hi use karta hai mutual exclusion enforce karne ke liye. Exam me "monitor vs semaphore" poocha jaaye toh yeh point zaroor likhna — monitor zyada safe hai kyunki programmer galti se `wait()`/`signal()` bhoolne ki galti nahi kar sakta.
