## Aim

Disk scheduling algorithms implement karna — FCFS aur SCAN — jo disk head ki total movement calculate karte hain given ek request queue aur starting head position.

---

### Concept

Disk par read/write requests alag-alag tracks ke liye aati hain. Disk scheduling algorithm decide karta hai ki head kis order me requests ko service kare taaki **total head movement (seek time)** kam se kam ho.

- **FCFS** — Requests ko waise hi order me service karo jaise aayi thi. Simple lekin inefficient (head zigzag kar sakta hai).
- **SCAN** ("Elevator" algorithm) — Head ek direction me chalta hai, raaste me jo bhi requests aati hain unhe service karta hai, end tak pahunch kar direction reverse kar leta hai — bilkul elevator jaisa.
- **C-SCAN (Circular SCAN)** — SCAN jaisa hi, bas ek direction me end tak jaake, wapas turant starting point (0) par jump kar jaata hai (bina requests service kiye waapsi me), phir wahi se dubara same direction me chalta hai — isse waiting time zyada uniform hota hai.

---

### Program 1: FCFS Disk Scheduling

**Logic:** Head jis order me requests aayi hain usi order me unke paas jaata hai. Total seek time = consecutive requests ke beech ke absolute differences ka sum.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, head;
    int requests[100];

    printf("Enter number of requests: ");
    scanf("%d", &n);

    printf("Enter the requests:\n");
    for (i = 0; i < n; i++)
        scanf("%d", &requests[i]);

    printf("Enter initial head position: ");
    scanf("%d", &head);

    int totalSeek = 0;
    int current = head;

    printf("\nSeek sequence: %d", current);
    for (i = 0; i < n; i++) {
        totalSeek += abs(requests[i] - current);
        current = requests[i];
        printf(" -> %d", current);
    }

    printf("\nTotal head movement = %d\n", totalSeek);
    printf("Average seek length = %.2f\n", (float) totalSeek / n);

    return 0;
}
```

**Sample Output**

Input: requests = {98, 183, 37, 122, 14, 124, 65, 67}, head = 53

```
Enter number of requests: 8
Enter the requests:
98 183 37 122 14 124 65 67
Enter initial head position: 53

Seek sequence: 53 -> 98 -> 183 -> 37 -> 122 -> 14 -> 124 -> 65 -> 67
Total head movement = 640
```

---

### Program 2: SCAN Disk Scheduling

**Logic:** Head apni current direction (maan lo "right"/increasing) me chalta hai, raaste me sab requests service karta hai jab tak disk ke last track tak na pahunch jaaye, phir direction reverse karke baaki requests service karta hai.

```c
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int main() {
    int n, i, head, diskSize;
    int requests[100];

    printf("Enter number of requests: ");
    scanf("%d", &n);

    printf("Enter the requests:\n");
    for (i = 0; i < n; i++)
        scanf("%d", &requests[i]);

    printf("Enter initial head position: ");
    scanf("%d", &head);

    printf("Enter disk size (max track number): ");
    scanf("%d", &diskSize);

    qsort(requests, n, sizeof(int), compare);   // sort requests ascending

    // Find the split point: requests smaller than head, and requests >= head
    int i_split = 0;
    while (i_split < n && requests[i_split] < head)
        i_split++;

    int totalSeek = 0, current = head;
    printf("\nSeek sequence: %d", current);

    // Move right (towards higher track numbers) first, servicing requests >= head
    for (i = i_split; i < n; i++) {
        totalSeek += abs(requests[i] - current);
        current = requests[i];
        printf(" -> %d", current);
    }

    // Go to the end of the disk if not already there
    if (current != diskSize - 1) {
        totalSeek += abs((diskSize - 1) - current);
        current = diskSize - 1;
        printf(" -> %d", current);
    }

    // Now move left, servicing remaining requests in reverse (descending) order
    for (i = i_split - 1; i >= 0; i--) {
        totalSeek += abs(requests[i] - current);
        current = requests[i];
        printf(" -> %d", current);
    }

    printf("\nTotal head movement = %d\n", totalSeek);

    return 0;
}
```

**Sample Output**

Input: requests = {98, 183, 37, 122, 14, 124, 65, 67}, head = 53, disk size = 200

```
Enter number of requests: 8
Enter the requests:
98 183 37 122 14 124 65 67
Enter initial head position: 53
Enter disk size (max track number): 200

Seek sequence: 53 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183 -> 199 -> 37 -> 14
Total head movement = 331
```

> Yaad Rakho — SCAN me head ko disk ke bilkul end tak jaana padta hai chahe wahan koi request ho ya na ho — isi wajah se C-SCAN aur LOOK/C-LOOK variants develop hue jo end tak jaane ki jagah sirf last request tak jaate hain.

---

### C-SCAN — Logic (Description)

C-SCAN me head ek direction (jaise right) me chalta hai, sab requests service karta hai end tak, lekin end pahunchne ke baad requests service kiye bina **seedha disk ke start (track 0) par jump** kar jaata hai, aur phir wahan se dubara same direction me chalna start karta hai. Isse har request ko approximately uniform wait time milta hai (SCAN me end ke paas ke tracks ko zyada wait karna padta hai, C-SCAN isse fix karta hai).

```
FCFS wale program jaisa logic use karke C-SCAN implement kar sakte ho:
1. requests ko sort karo, head se split karo (jaisa SCAN me kiya)
2. right side ke requests service karo end tak
3. end se seedha 0 par "jump" karo (ye bhi seek movement me count hota hai)
4. 0 se start karke left side (chhoti values) ko unke original (sorted ascending) order me service karo
```

> Tip — Viva me difference poocha jaata hai: "SCAN vs C-SCAN?" — SCAN dono direction me service karte hue reverse hota hai (elevator jaisa up-down), C-SCAN sirf ek direction me service karta hai aur end se start par circular jump maar leta hai (jaise elevator jo hamesha upar hi jaata hai, neeche pahunch kar phir se ground floor se start hota hai bina neeche jaate hue rukte).

> Warning — SCAN/C-SCAN implement karte time disk size (`diskSize`) sahi dena zaroori hai — end track ka number galat diya toh "jump to end" step ka seek movement galat calculate hoga.
