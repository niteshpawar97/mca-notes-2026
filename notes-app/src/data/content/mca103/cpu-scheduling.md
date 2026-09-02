## CPU Scheduling Kyun Zaroori Hai?

Jab multiple processes ready queue me ho, OS ko decide karna padta hai kaunsa process CPU paayega aur kab. Isi decision-making ko **CPU Scheduling** kehte hain. Achha scheduling algorithm CPU utilization maximize karta hai aur waiting time minimize karta hai.

### Performance Evaluation Criteria

| Metric | Matlab |
|--------|--------|
| **CPU Utilization** | CPU kitna % time busy raha (idle nahi raha) |
| **Throughput** | Per unit time kitne processes complete hue |
| **Turnaround Time** | Process submit hone se complete hone tak ka total time (`Completion − Arrival`) |
| **Waiting Time** | Process ready queue me kitna time wait karta raha (`Turnaround − Burst`) |
| **Response Time** | Request se pehli response milne tak ka time |

> Yaad Rakho — **Turnaround Time = Completion Time − Arrival Time** aur **Waiting Time = Turnaround Time − Burst Time**. Yeh do formulas har numerical ka base hain — bina inke koi bhi scheduling numerical solve nahi hoga.

---

## FCFS (First Come First Serve)

Sabse simple algorithm — jo process pehle aaya, wo pehle CPU paayega. **Non-preemptive**.

> Example — 3 processes: P1(Arrival=0, Burst=5), P2(Arrival=1, Burst=3), P3(Arrival=2, Burst=8)

```
Gantt Chart:
 ┌────────────┬───────┬────────────────┐
 │     P1      │  P2   │       P3        │
 0            5       8               16
```

| Process | Arrival | Burst | Completion | Turnaround | Waiting |
|---------|---------|-------|------------|-------------|---------|
| P1 | 0 | 5 | 5 | 5 | 0 |
| P2 | 1 | 3 | 8 | 7 | 4 |
| P3 | 2 | 8 | 16 | 14 | 6 |

Average Waiting Time = (0+4+6)/3 = **3.33**
Average Turnaround Time = (5+7+14)/3 = **8.67**

> Warning — FCFS me **Convoy Effect** hota hai — agar ek lamba process pehle aa jaaye toh chhote processes bhi uske peeche fas jaate hain aur unka waiting time badh jaata hai.

---

## Round Robin (RR)

Har process ko ek fixed **time quantum** milta hai, uske baad preempt hokar queue ke end me chala jaata hai. **Preemptive** — timesharing systems ke liye best.

> Example — Same 3 processes, Time Quantum = 4. P1(0,5), P2(1,3), P3(2,8)

```
Gantt Chart (Time Quantum = 4):
 ┌────────┬────────┬────────┬────────┬────────┐
 │   P1    │   P2    │   P3    │   P1    │   P3    │
 0        4        7       11       12       16
```

| Process | Arrival | Burst | Completion | Turnaround | Waiting |
|---------|---------|-------|------------|-------------|---------|
| P1 | 0 | 5 | 12 | 12 | 7 |
| P2 | 1 | 3 | 7 | 6 | 3 |
| P3 | 2 | 8 | 16 | 14 | 6 |

Average Waiting Time = (7+3+6)/3 = **5.33**

> Tip — Round Robin numericals me Gantt chart banate waqt yaad rakho: agar process ka remaining burst quantum se kam hai, wo pura execute hoke khatam ho jaata hai; warna sirf quantum jitna chalke queue ke end me wapas jaata hai.

---

## Shortest Job / Run Time Next (SJF/SRTN)

- **SJF (Non-preemptive)** — Jis process ka burst time sabse kam hai, wo pehle chuna jaata hai (jab CPU free ho).
- **SRTN (Shortest Remaining Time Next, Preemptive version)** — Naya process aane par agar uska burst time current running process ke **remaining time** se kam hai, toh current process preempt ho jaata hai.

SJF **optimal average waiting time** deta hai (sabse kam average waiting time) lekin future burst time predict karna practically mushkil hota hai.

| Feature | SJF | SRTN |
|---------|-----|------|
| Preemptive? | Nahi | Haan |
| Starvation | Lambe process starve ho sakte hain | Same risk, zyada severe |

---

## Highest Response Ratio Next (HRRN)

Starvation problem solve karne ke liye — response ratio calculate karke process choose karte hain:

```
Response Ratio = (Waiting Time + Burst Time) / Burst Time
```

Jis process ka response ratio sabse zyada, wo next execute hoga. Lambe waqt se wait kar rahe process ka ratio badhta jaata hai, isliye starvation kam hoti hai — yeh **non-preemptive** hai.

> Socho Aise — HRRN ek "fair queue" jaisa hai jahan jitni der aap wait karoge utna aapka priority score badhta jaata hai — chahe aapka kaam bada ho, bahut der wait karne ke baad aapko chance mil hi jaata hai.

---

## Multilevel Feedback Queue (MLFQ)

Processes ko multiple queues me organize kiya jaata hai, har queue ki apni priority aur scheduling algorithm hoti hai. Process apne behavior ke hisaab se queues ke beech **move** ho sakta hai (feedback).

```
┌─────────────────────────────┐
│ Queue 0 (Highest Priority)    │  Time Quantum = 4   (RR)
└───────────┬───────────────┘
            │ agar quantum me khatam nahi hua → demote
┌───────────▼───────────────┐
│ Queue 1                        │  Time Quantum = 8   (RR)
└───────────┬───────────────┘
            │ demote
┌───────────▼───────────────┐
│ Queue 2 (Lowest Priority)      │  FCFS
└─────────────────────────────┘
```

- Naya process highest priority queue me aata hai (fast response ke liye).
- Agar wo apna quantum use kar leta hai bina khatam hue, next lower queue me demote ho jaata hai (CPU-bound assume kiya jaata hai).
- I/O-bound (short) processes upper queues me hi reh kar jaldi complete ho jaate hain.

> Yaad Rakho — MLFQ **sabse flexible** algorithm hai kyunki yeh process ke past behavior se seekhta hai — I/O-bound processes ko favour karta hai without knowing burst time in advance.

---

## Comparison Table — Sabhi Algorithms

| Algorithm | Preemptive? | Starvation Risk? | Best Use Case |
|-----------|--------------|---------------------|-----------------|
| **FCFS** | Nahi | Nahi (but convoy effect) | Simple batch systems |
| **Round Robin** | Haan | Nahi | Timesharing, interactive systems |
| **SJF** | Nahi | Haan | Jab burst times pehle se known ho |
| **SRTN** | Haan | Haan (zyada) | Jab short jobs prioritize karni ho |
| **HRRN** | Nahi | Nahi (ratio se compensate) | Fair scheduling, starvation avoid karna |
| **MLFQ** | Haan | Kam (top-level me chance milta rehta hai) | General purpose modern OS |

> Tip — Numerical questions me hamesha Gantt chart banao, phir Completion/Turnaround/Waiting ka table banao, aur last me Average Waiting/Turnaround Time nikaalo — yeh format examiner ko clearly dikhata hai ki concept clear hai, step marks milte hain.
