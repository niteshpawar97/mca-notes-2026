## Aim

Deadlock avoidance ke liye Banker's Algorithm (Safety Algorithm) implement karna — given Allocation, Max aur Available matrices se check karna ki system safe state me hai ya nahi.

---

### Concept

Banker's Algorithm ek **deadlock avoidance** technique hai (bank manager loan dene se pehle check karta hai ki paisa wapas mil sakega ya nahi, isi se naam pada hai). Ye teen matrices use karta hai:

- **Allocation[i][j]** — Process `i` ko resource `j` ke kitne instances currently allocated hain.
- **Max[i][j]** — Process `i` ko resource `j` ke max kitne instances chahiye ho sakte hain.
- **Available[j]** — Resource `j` ke kitne instances abhi free hain.
- **Need[i][j] = Max[i][j] − Allocation[i][j]** — Process `i` ko abhi aur kitne instances chahiye.

**Safety Algorithm:** Hum ek "safe sequence" dhoondte hain — processes ko us order me execute karne ki koshish karte hain jisme har process ka `Need <= Available` ho jaaye, phir uske allocated resources release hokar `Available` me wapas add ho jaayein, aur agla process try karein. Agar sab processes is tarah complete ho jaayein, toh system **safe state** me hai (deadlock nahi hoga).

---

### Program: Banker's Algorithm

```c
#include <stdio.h>

#define P 5   // number of processes
#define R 3   // number of resource types

int main() {
    int allocation[P][R] = {
        {0, 1, 0},
        {2, 0, 0},
        {3, 0, 2},
        {2, 1, 1},
        {0, 0, 2}
    };

    int max[P][R] = {
        {7, 5, 3},
        {3, 2, 2},
        {9, 0, 2},
        {2, 2, 2},
        {4, 3, 3}
    };

    int available[R] = {3, 3, 2};

    int need[P][R];
    int i, j;

    // ---------- Calculate Need matrix ----------
    for (i = 0; i < P; i++)
        for (j = 0; j < R; j++)
            need[i][j] = max[i][j] - allocation[i][j];

    int finished[P] = {0};
    int safeSeq[P];
    int work[R];
    for (j = 0; j < R; j++)
        work[j] = available[j];

    int count = 0;

    while (count < P) {
        int found = 0;

        for (i = 0; i < P; i++) {
            if (!finished[i]) {
                int canRun = 1;
                for (j = 0; j < R; j++) {
                    if (need[i][j] > work[j]) {
                        canRun = 0;
                        break;
                    }
                }

                if (canRun) {
                    // process i can finish; release its resources back to work
                    for (j = 0; j < R; j++)
                        work[j] += allocation[i][j];

                    safeSeq[count++] = i;
                    finished[i] = 1;
                    found = 1;
                }
            }
        }

        if (!found) {
            printf("System is NOT in a safe state. Deadlock possible!\n");
            return 0;
        }
    }

    printf("System is in a SAFE state.\n");
    printf("Safe Sequence: ");
    for (i = 0; i < P; i++) {
        printf("P%d", safeSeq[i]);
        if (i != P - 1) printf(" -> ");
    }
    printf("\n");

    return 0;
}
```

**Sample Output**

With the sample matrices above (`Available = {3,3,2}`):

```
System is in a SAFE state.
Safe Sequence: P1 -> P3 -> P4 -> P0 -> P2
```

**Trace (how the algorithm reasons):**

| Step | Process Checked | Need <= Work? | Work updated to |
|------|-----------------|----------------|-------------------|
| 1 | P1: Need=(1,2,2) | Yes (Work=3,3,2) | (5,3,2) |
| 2 | P3: Need=(0,1,1) | Yes | (7,4,3) |
| 3 | P4: Need=(4,3,1) | Yes | (7,4,5) |
| 4 | P0: Need=(7,4,3) | Yes | (7,5,5) |
| 5 | P2: Need=(6,0,0) | Yes | (10,5,7) |

Saare processes complete ho gaye → safe sequence mil gayi → koi deadlock nahi.

> Yaad Rakho — Banker's Algorithm ke liye system ko **pehle se pata hona chahiye** ki har process ko max kitne resources chahiye honge (Max matrix) — ye real systems me hamesha practical nahi hota, isliye ye zyada theoretical/academic use hota hai.

> Tip — Viva ka bahut common question: "Deadlock hone ki 4 necessary conditions kya hain?" — (1) Mutual Exclusion, (2) Hold and Wait, (3) No Preemption, (4) Circular Wait. Banker's Algorithm inme se "Hold and Wait" ko avoid karta hai request ko pehle hi analyze karke.

> Warning — Agar `available` ya `max` matrix me galat values di jaayein (jaise Max < Allocation kisi process ke liye), toh Need negative aa sakta hai jo algorithm ko galat result de sakta hai — hamesha input consistency check karna chahiye real implementation me.
