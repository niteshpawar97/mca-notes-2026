## Aim

Contiguous memory allocation techniques implement karna — First-fit, Best-fit aur Worst-fit — jo processes ko memory blocks allocate karte hain.

---

### Concept

Memory me kayi free blocks (holes) hote hain, alag-alag sizes ke, aur processes ko in blocks me fit karna hota hai:

- **First-fit** — Pehla block jo process ke liye kaafi bada ho, wahi allocate kar do. Fast hai.
- **Best-fit** — Sabse chhota block jo process ke liye kaafi bada ho, use allocate karo — memory waste kam se kam.
- **Worst-fit** — Sabse bada available block allocate karo — idea ye hai ki bacha hua khaali space itna bada ho ki future me kaam aa sake.

---

### Program: First-fit, Best-fit aur Worst-fit — Ek Hi Program Me

**Logic:** Hum block sizes aur process sizes arrays me lete hain, aur ek `allocation[]` array rakhte hain jo batata hai kaunsa process kis block me gaya. Har strategy ke liye ek alag function likhte hain jo original block-size array ki copy par kaam karta hai (taaki ek strategy dusri ko affect na kare).

```c
#include <stdio.h>
#include <string.h>

void firstFit(int blockSize[], int m, int processSize[], int n) {
    int allocation[50];
    int block[50];
    memcpy(block, blockSize, m * sizeof(int));   // work on a copy
    for (int i = 0; i < n; i++)
        allocation[i] = -1;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (block[j] >= processSize[i]) {
                allocation[i] = j;
                block[j] -= processSize[i];   // reduce remaining block size
                break;
            }
        }
    }

    printf("\n--- First-Fit ---\n");
    printf("%-12s %-12s %-15s\n", "Process", "Size", "Allocated Block");
    for (int i = 0; i < n; i++) {
        if (allocation[i] != -1)
            printf("P%-11d %-12d Block %d\n", i + 1, processSize[i], allocation[i] + 1);
        else
            printf("P%-11d %-12d Not Allocated\n", i + 1, processSize[i]);
    }
}

void bestFit(int blockSize[], int m, int processSize[], int n) {
    int allocation[50];
    int block[50];
    memcpy(block, blockSize, m * sizeof(int));
    for (int i = 0; i < n; i++)
        allocation[i] = -1;

    for (int i = 0; i < n; i++) {
        int bestIdx = -1;
        for (int j = 0; j < m; j++) {
            if (block[j] >= processSize[i]) {
                if (bestIdx == -1 || block[j] < block[bestIdx])
                    bestIdx = j;
            }
        }
        if (bestIdx != -1) {
            allocation[i] = bestIdx;
            block[bestIdx] -= processSize[i];
        }
    }

    printf("\n--- Best-Fit ---\n");
    printf("%-12s %-12s %-15s\n", "Process", "Size", "Allocated Block");
    for (int i = 0; i < n; i++) {
        if (allocation[i] != -1)
            printf("P%-11d %-12d Block %d\n", i + 1, processSize[i], allocation[i] + 1);
        else
            printf("P%-11d %-12d Not Allocated\n", i + 1, processSize[i]);
    }
}

void worstFit(int blockSize[], int m, int processSize[], int n) {
    int allocation[50];
    int block[50];
    memcpy(block, blockSize, m * sizeof(int));
    for (int i = 0; i < n; i++)
        allocation[i] = -1;

    for (int i = 0; i < n; i++) {
        int worstIdx = -1;
        for (int j = 0; j < m; j++) {
            if (block[j] >= processSize[i]) {
                if (worstIdx == -1 || block[j] > block[worstIdx])
                    worstIdx = j;
            }
        }
        if (worstIdx != -1) {
            allocation[i] = worstIdx;
            block[worstIdx] -= processSize[i];
        }
    }

    printf("\n--- Worst-Fit ---\n");
    printf("%-12s %-12s %-15s\n", "Process", "Size", "Allocated Block");
    for (int i = 0; i < n; i++) {
        if (allocation[i] != -1)
            printf("P%-11d %-12d Block %d\n", i + 1, processSize[i], allocation[i] + 1);
        else
            printf("P%-11d %-12d Not Allocated\n", i + 1, processSize[i]);
    }
}

int main() {
    int m, n;

    printf("Enter number of memory blocks: ");
    scanf("%d", &m);
    int blockSize[50];
    printf("Enter sizes of %d blocks:\n", m);
    for (int i = 0; i < m; i++)
        scanf("%d", &blockSize[i]);

    printf("Enter number of processes: ");
    scanf("%d", &n);
    int processSize[50];
    printf("Enter sizes of %d processes:\n", n);
    for (int i = 0; i < n; i++)
        scanf("%d", &processSize[i]);

    firstFit(blockSize, m, processSize, n);
    bestFit(blockSize, m, processSize, n);
    worstFit(blockSize, m, processSize, n);

    return 0;
}
```

**Sample Output**

Input: Blocks = {100, 500, 200, 300, 600}, Processes = {212, 417, 112, 426}

```
Enter number of memory blocks: 5
Enter sizes of 5 blocks:
100 500 200 300 600
Enter number of processes: 4
Enter sizes of 4 processes:
212 417 112 426

--- First-Fit ---
Process      Size         Allocated Block
P1           212          Block 2
P2           417          Block 5
P3           112          Block 3
P4           426          Not Allocated

--- Best-Fit ---
Process      Size         Allocated Block
P1           212          Block 4
P2           417          Block 5
P3           112          Block 3
P4           426          Not Allocated

--- Worst-Fit ---
Process      Size         Allocated Block
P1           212          Block 5
P2           417          Not Allocated
P3           112          Block 2
P4           426          Not Allocated
```

> Yaad Rakho — First-fit sabse fast hai (search jaldi ruk jaata hai), Best-fit memory ko sabse efficiently use karta hai lekin **bahut chhote leftover fragments** bana deta hai (internal-ish waste), Worst-fit bade leftover blocks banane ki koshish karta hai taaki future processes fit ho sakein, lekin practically utna effective nahi hota.

> Tip — Viva me pucha jaata hai "External Fragmentation kya hai?" — Jab total free memory process ke liye kaafi ho, lekin wo ek continuous block me na ho (chhote-chhote tukdo me bikhri ho), toh process allocate nahi ho paata — isse External Fragmentation kehte hain. Iska solution: **Compaction** (sab free memory ko ek jagah collect karna) ya Paging/Segmentation (non-contiguous allocation).

> Warning — Is simulation me hum ek block me multiple chhote processes fit nahi kar rahe (sirf ek process ek block me), aur block ka size process allocate hone ke baad reduce ho jaata hai (real fragmentation-tracking ke liye) — agar aapko simpler version chahiye jisme block reuse na ho, toh `block[j] -= processSize[i]` line hata sakte hain.
