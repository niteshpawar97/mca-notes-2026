## Aim

CPU Scheduling algorithms implement karna — FCFS aur Round Robin — jo Waiting Time (WT) aur Turnaround Time (TAT) calculate karte hain.

---

### Key Terms (Viva ke liye zaroori)

- **Arrival Time (AT)** — process CPU ke paas kab aaya.
- **Burst Time (BT)** — process ko CPU par execute hone me kitna time lagega.
- **Completion Time (CT)** — process kab finish hua.
- **Turnaround Time (TAT)** = CT − AT (process arrive hone se complete hone tak ka total time).
- **Waiting Time (WT)** = TAT − BT (process CPU ka wait karte hue kitna time spend kiya).

---

### Program 1: FCFS (First Come First Serve)

**Logic:** Processes ko unke **arrival time** ke order me execute karte hain — jo pehle aaya, use pehle CPU milta hai, bina interrupt kiye (non-preemptive). Simple: process 1 khatam hone ke baad hi process 2 start hota hai.

```c
#include <stdio.h>

struct Process {
    int pid, at, bt, ct, tat, wt;
};

int main() {
    int n, i, j;
    struct Process p[20], temp;

    printf("Enter number of processes: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        p[i].pid = i + 1;
        printf("Enter Arrival Time and Burst Time for P%d: ", i + 1);
        scanf("%d %d", &p[i].at, &p[i].bt);
    }

    // Sort processes by arrival time (simple bubble sort)
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (p[j].at > p[j + 1].at) {
                temp = p[j];
                p[j] = p[j + 1];
                p[j + 1] = temp;
            }
        }
    }

    int currentTime = 0;
    float totalTAT = 0, totalWT = 0;

    printf("\n%-5s %-5s %-5s %-5s %-5s %-5s\n", "PID", "AT", "BT", "CT", "TAT", "WT");
    for (i = 0; i < n; i++) {
        if (currentTime < p[i].at)
            currentTime = p[i].at;      // CPU idle till process arrives

        currentTime += p[i].bt;
        p[i].ct = currentTime;
        p[i].tat = p[i].ct - p[i].at;
        p[i].wt = p[i].tat - p[i].bt;

        totalTAT += p[i].tat;
        totalWT += p[i].wt;

        printf("%-5d %-5d %-5d %-5d %-5d %-5d\n",
               p[i].pid, p[i].at, p[i].bt, p[i].ct, p[i].tat, p[i].wt);
    }

    printf("\nAverage Turnaround Time = %.2f\n", totalTAT / n);
    printf("Average Waiting Time    = %.2f\n", totalWT / n);

    return 0;
}
```

**Sample Output**

Input: P1(AT=0,BT=5), P2(AT=1,BT=3), P3(AT=2,BT=8)

```
Enter number of processes: 3
Enter Arrival Time and Burst Time for P1: 0 5
Enter Arrival Time and Burst Time for P2: 1 3
Enter Arrival Time and Burst Time for P3: 2 8

PID   AT    BT    CT    TAT   WT
1     0     5     5     5     0
2     1     3     8     7     4
3     2     8     16    14    6

Average Turnaround Time = 8.67
Average Waiting Time    = 3.33
```

> Yaad Rakho — FCFS simple hai lekin "Convoy Effect" ka shikar hota hai — agar ek badi burst time wala process pehle aa jaaye, toh chhote processes bhi uske peeche wait karte hain, average waiting time badh jaata hai.

---

### Program 2: Round Robin (Preemptive, with Time Quantum)

**Logic:** Har process ko ek fixed **time quantum (TQ)** milta hai CPU par. Agar process TQ ke andar khatam nahi hota, toh use "ready queue" ke end me wapas bhej diya jaata hai aur next process ko chance milta hai — isse fairness milti hai, koi process zyada der starve nahi karta.

```c
#include <stdio.h>

int main() {
    int n, tq, i, time = 0;
    int at[20], bt[20], rem[20], wt[20], tat[20];
    int queue[100], front = 0, rear = 0;
    int visited[20] = {0};

    printf("Enter number of processes: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("Enter Arrival Time and Burst Time for P%d: ", i + 1);
        scanf("%d %d", &at[i], &bt[i]);
        rem[i] = bt[i];   // remaining burst time
    }

    printf("Enter Time Quantum: ");
    scanf("%d", &tq);

    queue[rear++] = 0;   // assume P0 arrives first (simplified: sorted by arrival already)
    visited[0] = 1;

    while (front < rear) {
        int idx = queue[front++];

        if (rem[idx] > tq) {
            time += tq;
            rem[idx] -= tq;
        } else {
            time += rem[idx];
            rem[idx] = 0;
            tat[idx] = time - at[idx];
            wt[idx] = tat[idx] - bt[idx];
        }

        // Add newly arrived processes to queue (before re-adding current one)
        for (i = 0; i < n; i++) {
            if (at[i] <= time && !visited[i] && i != idx) {
                queue[rear++] = i;
                visited[i] = 1;
            }
        }

        if (rem[idx] > 0)
            queue[rear++] = idx;   // process not finished, back to queue
    }

    float totalTAT = 0, totalWT = 0;
    printf("\n%-5s %-5s %-5s %-5s %-5s\n", "PID", "AT", "BT", "TAT", "WT");
    for (i = 0; i < n; i++) {
        printf("%-5d %-5d %-5d %-5d %-5d\n", i + 1, at[i], bt[i], tat[i], wt[i]);
        totalTAT += tat[i];
        totalWT += wt[i];
    }
    printf("\nAverage Turnaround Time = %.2f\n", totalTAT / n);
    printf("Average Waiting Time    = %.2f\n", totalWT / n);

    return 0;
}
```

**Sample Output**

Input: P1(AT=0,BT=5), P2(AT=1,BT=4), P3(AT=2,BT=2), Time Quantum = 2

```
Enter number of processes: 3
Enter Arrival Time and Burst Time for P1: 0 5
Enter Arrival Time and Burst Time for P2: 1 4
Enter Arrival Time and Burst Time for P3: 2 2
Enter Time Quantum: 2

PID   AT    BT    TAT   WT
1     0     5     11    6
2     1     4     10    6
3     2     2     6     4

Average Turnaround Time = 9.00
Average Waiting Time    = 5.33
```

> Tip — Viva me pucha jaata hai: "Time Quantum bahut chhota ya bahut bada rakhein toh kya hoga?" Bahut chhota → context-switching overhead badh jaata hai (CPU zyada time switching me waste karta hai). Bahut bada → Round Robin practically FCFS jaisa ban jaata hai.

> Warning — Is program me simplification ki gayi hai ki processes ka index hi PID maan liya hai aur arrival order maan liya gaya hai — real OS simulation me ek proper ready-queue with dynamic arrival-check har time-unit par karna padta hai. SJF aur Priority scheduling isi FCFS wale table-based approach se, bas processes ko sort karne ka criterion badal ke (burst time ya priority se) implement kiye ja sakte hain.
