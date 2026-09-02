## Doubly Linked List

Doubly linked list ke har node me **teen parts** hote hain: `prev` pointer, `data`, aur `next` pointer. Isse **dono directions me traversal** possible hoti hai.

```c
struct Node {
    struct Node *prev;
    int data;
    struct Node *next;
};
```

```
NULL ←──┐               ┌──┐               ┌──► NULL
        │  ┌────┬────┐  │  │  ┌────┬────┐  │
   NULL │◄─┤prev│next├──┼──┼─►│prev│next├──┼──► NULL
        │  ├────┤    │  │  │  ├────┤    │  │
        │  │ 10 │    │  │  │  │ 20 │    │  │
        │  └────┴────┘  │  │  └────┴────┘  │
        └───────────────┘  └───────────────┘
             head
```

### Advantage — Backward Traversal

Singly linked list me sirf **aage** ja sakte hain. Doubly linked list me `prev` pointer ki wajah se **peeche bhi** ja sakte hain — bina head se dobara start kiye.

> Socho Aise — Singly linked list ek "one-way street" jaisi hai — sirf aage. Doubly linked list ek "two-way street" hai — dono directions me traffic chal sakta hai.

### Insertion at Beginning

```c
struct Node* insertBeginning(struct Node *head, int value) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = head;

    if (head != NULL)
        head->prev = newNode;    // purane head ka prev, naye node ki taraf

    return newNode;               // naya node hi ab head hai
}
```

### Deletion

```c
struct Node* deleteNode(struct Node *head, struct Node *delNode) {
    if (head == delNode)
        head = delNode->next;

    if (delNode->next != NULL)
        delNode->next->prev = delNode->prev;   // aage wale ka prev, peeche wale ki taraf

    if (delNode->prev != NULL)
        delNode->prev->next = delNode->next;    // peeche wale ka next, aage wale ki taraf

    free(delNode);
    return head;
}
```

```
Before:  [10]⇄[20]⇄[30]  (delete 20)
Step: 10.next = 30 ,  30.prev = 10
After:   [10]⇄[30]
```

> Yaad Rakho — Doubly linked list me delete/insert karte time **4 pointers** update karne pad sakte hain (do node ke aas paas ke prev/next). Singly me sirf 1-2. Extra memory (ek extra pointer per node) lagti hai, lekin backward traversal aur easier deletion milta hai.

---

## Circular Linked List

Circular linked list me **last node ka next, first node ki taraf point** karta hai (NULL nahi hota) — is tarah list ek "circle" ban jaati hai.

```
        ┌─────────────────────────────┐
        ▼                             │
head → [10] → [20] → [30] ────────────┘
```

```c
struct Node {
    int data;
    struct Node *next;
};
```

### Insert at End (Circular)

```c
struct Node* insertEnd(struct Node *head, int value) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = value;

    if (head == NULL) {
        newNode->next = newNode;    // khud ki taraf point (single node circle)
        return newNode;
    }

    struct Node *temp = head;
    while (temp->next != head) {     // last node dhoondo (jiska next == head)
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->next = head;
    return head;
}
```

> Warning — Circular linked list traverse karte time loop condition `while (temp != NULL)` **kabhi khatam nahi hogi** (infinite loop) kyunki koi NULL hota hi nahi! Sahi condition hai: `while (temp->next != head)` ya `do-while` with head check.

### Use Cases

| Use Case | Kyun Circular List Useful Hai |
|----------|-----------------------------------|
| **Round-robin CPU scheduling** | Har process ko baari-baari se turn milta hai, last ke baad wapas first par |
| **Multiplayer games** | Turn wapas pehle player ke paas circular tarike se aata hai |
| **Circular buffers/playlists** | Last song ke baad wapas pehli song par jaana |

---

## Linked List Using Arrays — Array-Based Simulation

Kabhi kabhi hume linked list ka **behavior** chahiye hota hai bina dynamic memory allocate kiye (jaise embedded systems me). Isके liye do parallel arrays use karte hain: `data[]` aur `next[]` (index-based pointer).

```c
#define MAX 100

int data[MAX];
int next[MAX];       // next[i] batata hai agla element kaunse index par hai
int head = -1;         // -1 matlab "NULL" (list ka end)
int freeIndex = 0;      // agli khali jagah kahan hai
```

```
Index:   0     1     2     3
data:   [10]  [30]  [20]  [ ]
next:   [2]   [-1]  [1]   [ ]

head = 0
Traversal: data[0]=10 → next[0]=2 → data[2]=20 → next[2]=1 → data[1]=30 → next[1]=-1 (end)
Logical order: 10 → 20 → 30
```

Yahan `next[i] == -1` ka matlab hai "ye node list ka last node hai" — bilkul `NULL` jaisa role.

> Tip — Exam me "array-based linked list simulation" poocha jaaye toh ye diagram banao — `data[]` aur `next[]` do parallel arrays, aur explain karo ki index hi "pointer" ka kaam karta hai.

---

## Quick Revision Table

| Type | Traversal | Key Feature |
|------|-----------|----------------|
| Singly Linked List | Forward only | 1 pointer per node (`next`) |
| Doubly Linked List | Forward + Backward | 2 pointers per node (`prev`, `next`) |
| Circular Linked List | Forward, loops back | Last node's `next` → first node |
| Array-based (simulated) | Index-based | `next[]` array acts as pointer field |

> Example — Circular doubly linked list bhi possible hai — jisme `prev` aur `next` dono circular ho, aur backward + circular dono properties milti hain — advanced systems me ye use hota hai.
