## General List Kya Hai?

List ek **ordered collection of elements** hai jisme elements ke beech ek **sequence/position** relation hota hai (pehla, doosra, teesra element, etc.). Array, stack, queue — sab list ke hi special forms hain.

Do main tarike hain list ko implement karne ke:

1. **Contiguous (Sequential/Array-based) Implementation**
2. **Linked (Pointer-based) Implementation**

> Socho Aise — List ek "shopping list" jaisi hai — items ek order me likhe hote hain. List ko store karne ka tarika (kaagaz par continuously likhna, ya har item ek alag chit par likh kar chiton ko connect karna) alag-alag ho sakta hai — yahi contiguous vs linked ka fark hai.

---

## Contiguous (Array-Based) Implementation

Is approach me list ke saare elements **memory me lagatar (contiguous)** locations par store hote hain — jaisa normal array hota hai.

```c
#define MAX 100

int list[MAX];
int size = 0;          // current number of elements
```

### Insert at Position (Array-Based)

```c
void insert(int list[], int *size, int pos, int value) {
    for (int i = *size; i > pos; i--) {
        list[i] = list[i - 1];    // sabko ek jagah right shift karo
    }
    list[pos] = value;
    (*size)++;
}
```

### Delete at Position (Array-Based)

```c
void delete(int list[], int *size, int pos) {
    for (int i = pos; i < *size - 1; i++) {
        list[i] = list[i + 1];    // baaki sabko ek jagah left shift karo
    }
    (*size)--;
}
```

```
Insert 25 at position 2 in [10, 20, 30, 40]:

Before:  [10][20][30][40][ ]
Shift:   [10][20][  ][30][40]   <- 30,40 ko right shift kiya
Insert:  [10][20][25][30][40]   <- 25 daala
```

> Yaad Rakho — Array-based insert/delete me elements **shift** karne padte hain, jo `O(n)` time leta hai — worst case tab hota hai jab position 0 (beginning) par insert/delete karna ho.

---

## Drawbacks of Contiguous Implementation

| Drawback | Explanation |
|----------|-------------|
| **Fixed Size** | Array ka size compile time par fix karna padta hai — bahut zyada allocate karo toh memory waste, kam karo toh overflow ka risk |
| **Costly Insertion/Deletion** | Beech me (middle) insert/delete karne ke liye baaki saare elements ko shift karna padta hai — `O(n)` time |
| **Memory Wastage** | Agar actual elements array size se kam hain, toh baaki jagah waste hoti hai |
| **Contiguous memory chahiye** | Bade array ke liye ek bada continuous memory block chahiye — fragment memory me allocate nahi ho sakta |

```
Fixed array of size 10, but only 4 elements used:
[10][20][30][40][ ][ ][ ][ ][ ][ ]
                  ↑
         6 locations waste ho rahi hain
```

> Warning — Agar array full ho jaaye aur aur elements add karne hon, toh **poora naya bada array banake sabko copy karna** padta hai — ye bahut expensive operation hai (`O(n)`).

---

## Linked Representation — Solution

Contiguous implementation ki in problems (fixed size, costly middle insert/delete) ko solve karne ke liye **linked list** use karte hain, jisme:

- Har element (**node**) apni memory location **kahin bhi (non-contiguous)** ho sakta hai.
- Har node apne **agle node ka address (pointer)** store karta hai — isse elements "linked" rehte hain bina physically saath-saath hue.
- Size **dynamically** grow/shrink ho sakti hai — koi fixed limit nahi (jab tak heap memory hai).
- Beech me insert/delete sirf **pointers change karke** ho jata hai — shifting ki zarurat nahi (`O(1)` agar position pata ho).

```
Contiguous:  [10][20][30][40]   <- ek saath, fixed block

Linked:      [10|•]→[20|•]→[30|•]→[40|NULL]   <- alag-alag jagah, pointers se connected
```

### Comparison Table

| Feature | Contiguous (Array) | Linked List |
|---------|----------------------|----------------|
| Memory | Fixed, contiguous block | Dynamic, non-contiguous |
| Size | Compile time fix | Run time flexible |
| Random access | `O(1)` — index se direct | `O(n)` — traverse karna padta hai |
| Insert/Delete (middle) | `O(n)` — shifting | `O(1)` — sirf pointer change (agar node reference pata ho) |
| Extra memory | Nahi lagti | Pointer ke liye extra memory chahiye har node me |

> Tip — Exam me "linked list array se better kyun hai" poocha jaaye toh 2 points zaroor likho: (1) dynamic size, (2) insert/delete fast without shifting. Aur ye bhi likho ki array random access (`O(1)`) me linked list se better hai — trade-off explain karna extra marks deta hai.

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| List | Ordered collection with position relation |
| Contiguous implementation | Array — sequential memory |
| Contiguous drawback | Fixed size, costly shift for insert/delete |
| Linked implementation | Nodes with pointers, non-contiguous memory |
| Linked advantage | Dynamic size, fast insert/delete |
| Linked disadvantage | No random access, extra pointer memory |
