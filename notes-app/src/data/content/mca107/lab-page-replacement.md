## Aim

Page Replacement algorithms implement karna — FIFO aur LRU — jo ek reference string aur frame count diye jaane par total page faults count karte hain.

---

### Concept

Jab CPU ko koi page chahiye hota hai jo already memory (frame) me nahi hai, ise **Page Fault** kehte hain. Agar frames already full hain, toh kisi existing page ko replace karna padta hai — kaunsa page replace karna hai ye decide karta hai replacement algorithm:

- **FIFO (First In First Out)** — Sabse purana page (jo sabse pehle memory me aaya tha) replace karo.
- **LRU (Least Recently Used)** — Jo page sabse zyada time se use nahi hua hai use replace karo.
- **LFU (Least Frequently Used)** — Jo page sabse kam baar use hua hai use replace karo.

---

### Program 1: FIFO Page Replacement

**Logic:** Ek queue jaisi structure (array + front index) rakhte hain jo batati hai kaunsa page sabse pehle aaya tha. Jab page fault ho aur frames full ho, sabse pehle aaya hua page nikal ke naya page uski jagah rakh dete hain.

```c
#include <stdio.h>

int main() {
    int n, frameSize, i, j;
    int pages[100];
    int frames[10];
    int pageFaults = 0;
    int frameCount = 0;
    int pointer = 0;   // points to the oldest page's frame index (for replacement)

    printf("Enter number of pages in reference string: ");
    scanf("%d", &n);

    printf("Enter the reference string:\n");
    for (i = 0; i < n; i++)
        scanf("%d", &pages[i]);

    printf("Enter number of frames: ");
    scanf("%d", &frameSize);

    for (i = 0; i < frameSize; i++)
        frames[i] = -1;   // -1 means empty frame

    printf("\n%-10s %-20s %-10s\n", "Page", "Frames", "Fault?");
    for (i = 0; i < n; i++) {
        int found = 0;
        for (j = 0; j < frameSize; j++) {
            if (frames[j] == pages[i]) {
                found = 1;
                break;
            }
        }

        if (!found) {
            frames[pointer] = pages[i];
            pointer = (pointer + 1) % frameSize;   // circular FIFO pointer
            pageFaults++;
        }

        printf("%-10d ", pages[i]);
        printf("[ ");
        for (j = 0; j < frameSize; j++) {
            if (frames[j] == -1) printf("- ");
            else printf("%d ", frames[j]);
        }
        printf("] ");
        printf("%-10s\n", found ? "Hit" : "FAULT");
    }

    printf("\nTotal Page Faults (FIFO) = %d\n", pageFaults);

    return 0;
}
```

**Sample Output**

Input: reference string = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2}, frames = 3

```
Page       Frames               Fault?
7          [ 7 - - ]            FAULT
0          [ 7 0 - ]            FAULT
1          [ 7 0 1 ]            FAULT
2          [ 2 0 1 ]            FAULT
0          [ 2 0 1 ]            Hit
3          [ 2 3 1 ]            FAULT
0          [ 2 3 0 ]            FAULT
4          [ 4 3 0 ]            FAULT
2          [ 4 2 0 ]            FAULT
3          [ 4 2 3 ]            FAULT
0          [ 0 2 3 ]            FAULT
3          [ 0 2 3 ]            Hit
2          [ 0 2 3 ]            Hit

Total Page Faults (FIFO) = 10
```

---

### Program 2: LRU (Least Recently Used) Page Replacement

**Logic:** Har page ke liye hum uska "last used time" track karte hain. Page fault hone par, agar frames full hain, toh jo page sabse purane time se use nahi hua (least recently used) use replace karte hain.

```c
#include <stdio.h>

int main() {
    int n, frameSize, i, j;
    int pages[100];
    int frames[10];
    int lastUsed[10];   // stores the "time" (index) each frame's page was last used
    int pageFaults = 0;
    int time = 0;

    printf("Enter number of pages in reference string: ");
    scanf("%d", &n);

    printf("Enter the reference string:\n");
    for (i = 0; i < n; i++)
        scanf("%d", &pages[i]);

    printf("Enter number of frames: ");
    scanf("%d", &frameSize);

    for (i = 0; i < frameSize; i++)
        frames[i] = -1;

    printf("\n%-10s %-20s %-10s\n", "Page", "Frames", "Fault?");
    for (i = 0; i < n; i++) {
        int found = -1;
        for (j = 0; j < frameSize; j++) {
            if (frames[j] == pages[i]) {
                found = j;
                break;
            }
        }

        if (found != -1) {
            lastUsed[found] = time;    // update its last-used time (hit)
        } else {
            // find an empty frame, or the least recently used frame
            int replaceIdx = -1;
            for (j = 0; j < frameSize; j++) {
                if (frames[j] == -1) {
                    replaceIdx = j;
                    break;
                }
            }
            if (replaceIdx == -1) {
                // no empty frame -> find LRU (smallest lastUsed time)
                replaceIdx = 0;
                for (j = 1; j < frameSize; j++) {
                    if (lastUsed[j] < lastUsed[replaceIdx])
                        replaceIdx = j;
                }
            }
            frames[replaceIdx] = pages[i];
            lastUsed[replaceIdx] = time;
            pageFaults++;
        }

        printf("%-10d ", pages[i]);
        printf("[ ");
        for (j = 0; j < frameSize; j++) {
            if (frames[j] == -1) printf("- ");
            else printf("%d ", frames[j]);
        }
        printf("] ");
        printf("%-10s\n", (found != -1) ? "Hit" : "FAULT");

        time++;
    }

    printf("\nTotal Page Faults (LRU) = %d\n", pageFaults);

    return 0;
}
```

**Sample Output**

Same reference string {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2}, frames = 3

```
Page       Frames               Fault?
7          [ 7 - - ]            FAULT
0          [ 7 0 - ]            FAULT
1          [ 7 0 1 ]            FAULT
2          [ 2 0 1 ]            FAULT
0          [ 2 0 1 ]            Hit
3          [ 2 0 3 ]            FAULT
0          [ 2 0 3 ]            Hit
4          [ 4 0 3 ]            FAULT
2          [ 4 0 2 ]            FAULT
3          [ 4 3 2 ]            FAULT
0          [ 0 3 2 ]            FAULT
3          [ 0 3 2 ]            Hit
2          [ 0 3 2 ]            Hit

Total Page Faults (LRU) = 9
```

> Yaad Rakho — Isi reference string par FIFO = 10 faults deta hai, LRU = 9 faults — LRU generally FIFO se better perform karta hai kyunki wo recent usage pattern ko consider karta hai (temporal locality), lekin LRU implement karna costlier hai (har access par time track karna padta hai).

---

### LFU (Least Frequently Used) — Logic (Description)

LFU me har page ke liye ek **frequency counter** rakha jaata hai — jab bhi page use ho, uska counter +1 hota hai. Page fault hone par, agar frames full hain, toh jis page ka frequency count sabse kam hai use replace kar dete hain (agar tie ho, aksar FIFO tie-breaker use hota hai — sabse purana kam-frequency wala page hataya jaata hai).

```c
// Sketch: maintain freq[] array parallel to frames[]
// On hit: freq[matchedIndex]++
// On fault with full frames: find index with minimum freq[], replace it, set freq=1
```

> Tip — Viva ka classic question: "Belady's Anomaly kya hai?" — Kuch algorithms (jaise FIFO) me frames ki sankhya badhane par bhi page faults badh sakte hain (jo intuitively ulta lagta hai) — ise Belady's Anomaly kehte hain. LRU is anomaly se immune hota hai (stack algorithm hone ki wajah se).

> Warning — LRU implement karte time agar "time/counter" track karna bhool jao (ya use reset na karo), toh galat page replace ho sakta hai. Real OS me LRU expensive hone ki wajah se aksar **approximate LRU** (jaise Clock/Second-Chance algorithm) use hota hai.
