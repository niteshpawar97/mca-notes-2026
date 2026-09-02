## Aim

File allocation strategies simulate karna — Sequential (Contiguous), Linked aur Indexed allocation — disk blocks ko array se represent karke.

---

### Concept — Teeno Strategies Ek Nazar Me

| Strategy | Idea | Pro | Con |
|----------|------|-----|-----|
| **Sequential (Contiguous)** | File ke saare blocks disk par ek row me continuous hote hain | Fast sequential + direct access | External fragmentation, file grow karna mushkil |
| **Linked** | Har block agle block ka pointer (index) rakhta hai, blocks kahin bhi ho sakte hain | No fragmentation, easy to grow | Sirf sequential access fast hai, random access slow (traverse karna padta hai), pointer ke liye extra space |
| **Indexed** | Ek alag "index block" hota hai jisme file ke sab data-blocks ke addresses list hote hain | Direct access possible, no external fragmentation | Index block ke liye extra space chahiye |

---

### Program 1: Sequential (Contiguous) Allocation — Simulation

**Logic:** Disk ko ek boolean array `disk[]` se represent karte hain (`0` = free block, `1` = allocated). File allocate karne ke liye hume `n` **continuous** free blocks chahiye — hum disk scan karke pehla aisa continuous free segment dhoondte hain.

```c
#include <stdio.h>
#define DISK_SIZE 20

int disk[DISK_SIZE] = {0};   // 0 = free, 1 = allocated

int allocateSequential(int startFrom, int numBlocks) {
    int i, j, count;

    for (i = startFrom; i <= DISK_SIZE - numBlocks; i++) {
        count = 0;
        for (j = i; j < i + numBlocks; j++) {
            if (disk[j] == 0)
                count++;
            else
                break;
        }
        if (count == numBlocks) {
            for (j = i; j < i + numBlocks; j++)
                disk[j] = 1;
            return i;   // starting block index
        }
    }
    return -1;   // not enough contiguous space
}

int main() {
    int numBlocks, startBlock;

    printf("Enter number of blocks required for the file: ");
    scanf("%d", &numBlocks);

    startBlock = allocateSequential(0, numBlocks);

    if (startBlock == -1) {
        printf("Allocation failed: no contiguous free blocks available!\n");
    } else {
        printf("File allocated from block %d to block %d.\n",
               startBlock, startBlock + numBlocks - 1);
    }

    printf("Disk map (1=used, 0=free): ");
    for (int i = 0; i < DISK_SIZE; i++)
        printf("%d ", disk[i]);
    printf("\n");

    return 0;
}
```

**Sample Output**

```
Enter number of blocks required for the file: 5
File allocated from block 0 to block 4.
Disk map (1=used, 0=free): 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

---

### Program 2: Linked Allocation — Simulation

**Logic:** Har allocated disk block ek `next[]` array entry rakhta hai jo agle block ka index batata hai (jaise linked list). File ke blocks disk par kahin bhi bikhre ho sakte hain — koi bhi free block use kar liya jaata hai, aur unhe pointer se chain kar diya jaata hai.

```c
#include <stdio.h>
#define DISK_SIZE 20

int disk[DISK_SIZE] = {0};   // 0 = free, 1 = allocated
int next[DISK_SIZE];          // next[i] = index of next block in the file, -1 = end

int main() {
    int numBlocks, i, count = 0;
    int startBlock = -1, prevBlock = -1;

    printf("Enter number of blocks required for the file: ");
    scanf("%d", &numBlocks);

    for (i = 0; i < DISK_SIZE && count < numBlocks; i++) {
        if (disk[i] == 0) {
            disk[i] = 1;
            next[i] = -1;

            if (startBlock == -1)
                startBlock = i;          // first block of the file
            else
                next[prevBlock] = i;     // link previous block to this one

            prevBlock = i;
            count++;
        }
    }

    if (count < numBlocks) {
        printf("Allocation failed: not enough free blocks!\n");
        return 1;
    }

    printf("File allocated. Starting block = %d\n", startBlock);
    printf("Block chain: ");
    int temp = startBlock;
    while (temp != -1) {
        printf("%d ", temp);
        temp = next[temp];
    }
    printf("-> NULL\n");

    return 0;
}
```

**Sample Output**

```
Enter number of blocks required for the file: 4
File allocated. Starting block = 0
Block chain: 0 1 2 3 -> NULL
```

> Yaad Rakho — Real disk me linked allocation blocks scattered ho sakte hain (kyunki disk pehle se partially used ho sakta hai) — is simulation me hum first-fit se free blocks utha rahe hain, jo demo ke liye contiguous dikh sakte hain lekin logic waisa hi hai jaisa asli scattered allocation ka hota hai.

---

### Indexed Allocation — Concept (Description)

Indexed allocation me file ka ek alag **index block** hota hai jisme us file ke saare data-block addresses ek list/array ke roop me store hote hain — jaise ek "table of contents". File access karne ke liye pehle index block padha jaata hai, phir usme diye gaye address se seedha required data block par pahunch jaate hain (direct access possible, linked list jaisa traverse nahi karna padta).

```
Index Block:  [ 9 | 16 | 1 | 10 ]
                |    |    |    |
                v    v    v    v
              Block Block Block Block
                9    16    1    10
```

Simplified C sketch (structure only):

```c
#define MAX_FILE_BLOCKS 10

int indexBlock[MAX_FILE_BLOCKS];   // stores addresses of data blocks belonging to the file
int numAllocated = 0;

void allocateIndexed(int blockAddr) {
    indexBlock[numAllocated++] = blockAddr;
}
// To access block i of the file directly: disk[ indexBlock[i] ]
```

> Tip — Viva favourite: "Indexed allocation, Linked allocation se better kyun hai random access ke liye?" Answer: Linked allocation me kisi bhi block tak pahunchne ke liye shuru se traverse karna padta hai (O(n)), jabki Indexed allocation me index block se seedha address mil jaata hai (O(1) direct access) — jaise book ka index page dekh kar seedha chapter par pahunch jaate hain.

> Warning — Sequential allocation me agar file size baad me badhani ho aur agle blocks already kisi aur file ne le liye ho, toh poori file ko naye continuous space me move karna padta hai — ye bahut costly operation hai, isiliye modern filesystems Linked ya Indexed (ya inke combination, jaise Unix ka multilevel indexed) allocation use karte hain.
