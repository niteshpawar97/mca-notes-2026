## Node Structure

Singly linked list ke har element ko **node** kehte hain, jisme do parts hote hain: **data** aur **next pointer** (agle node ka address).

```c
struct Node {
    int data;
    struct Node *next;
};
```

```
┌──────┬──────┐     ┌──────┬──────┐     ┌──────┬──────┐
│ data │ next │────►│ data │ next │────►│ data │ NULL │
│  10  │  •   │     │  20  │  •   │     │  30  │  •   │
└──────┴──────┘     └──────┴──────┘     └──────┴──────┘
   ↑ head/start
```

`head` ek pointer hai jo **pehle node ka address** store karta hai — poori list isi se access hoti hai. Last node ka `next`, `NULL` hota hai — ye list ka end batata hai.

> Yaad Rakho — `head` list variable nahi, sirf ek **pointer** hai. Agar `head` khoya toh poori list "lost" ho jaati hai (memory leak).

---

## Insertion Operations

### 1. Insert at Beginning

```c
struct Node* insertBeginning(struct Node *head, int value) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head;    // naya node purane head ki taraf point kare
    head = newNode;           // head update karo
    return head;
}
```

```
Before:  head → [10]→[20]→NULL
Insert 5 at beginning:
         head → [5]→[10]→[20]→NULL
                  ↑ newNode->next purane head ki taraf, phir head = newNode
```

### 2. Insert at End

```c
struct Node* insertEnd(struct Node *head, int value) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) return newNode;      // list khali thi

    struct Node *temp = head;
    while (temp->next != NULL) {           // last node tak jao
        temp = temp->next;
    }
    temp->next = newNode;                   // last node ka next, naye node ki taraf
    return head;
}
```

```
Before:  head → [10]→[20]→NULL
Insert 30 at end:
         head → [10]→[20]→[30]→NULL
                        ↑ last node ka next ab naye node ki taraf
```

### 3. Insert at Middle (After a Given Node)

```c
void insertMiddle(struct Node *prevNode, int value) {
    if (prevNode == NULL) return;
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = prevNode->next;    // naya node, prevNode ke aage wale ki taraf
    prevNode->next = newNode;           // prevNode ab naye node ki taraf
}
```

```
Before:  [10]→[20]→[30]→NULL   (prevNode = node with 10)
Insert 15 after 10:
         [10]→[15]→[20]→[30]→NULL

Step 1: newNode->next = prevNode->next   (15's next = 20)
Step 2: prevNode->next = newNode          (10's next = 15)
```

> Warning — Order important hai! Pehle `newNode->next` set karo, **uske baad** `prevNode->next` update karo. Order ulta karoge toh list ka baaki hissa "lost" ho jayega.

---

## Deletion

```c
struct Node* deleteNode(struct Node *head, int key) {
    struct Node *temp = head, *prev = NULL;

    if (temp != NULL && temp->data == key) {   // head hi delete karna hai
        head = temp->next;
        free(temp);
        return head;
    }

    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) return head;    // key nahi mili

    prev->next = temp->next;           // link skip karo deleted node ko
    free(temp);
    return head;
}
```

```
Before:  [10]→[20]→[30]→NULL   (delete 20)

Step 1: prev = node(10), temp = node(20)
Step 2: prev->next = temp->next   →   [10]→[30]→NULL
Step 3: free(temp)                 →   node(20) memory se hata diya
```

---

## Traversal

```c
void display(struct Node *head) {
    struct Node *temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}
```

---

## Search

```c
int search(struct Node *head, int key) {
    struct Node *temp = head;
    int pos = 0;
    while (temp != NULL) {
        if (temp->data == key) return pos;
        temp = temp->next;
        pos++;
    }
    return -1;      // not found
}
```

> Socho Aise — Linked list search "treasure hunt with clues" jaisa hai — har node ek clue deta hai (next ka address), tabhi tum agle tak pahunch sakte ho. Direct kisi bhi node par "jump" nahi kar sakte, isliye search `O(n)` hai.

---

## Quick Revision Table

| Operation | Time Complexity | Key Point |
|-----------|-------------------|-------------|
| Insert at beginning | `O(1)` | Sirf head pointer change |
| Insert at end | `O(n)` | Poori list traverse karni padti hai |
| Insert at middle | `O(1)` | Agar prev node ka reference pehle se pata ho |
| Delete | `O(n)` | Node dhoondhne ke liye traverse |
| Traversal | `O(n)` | Har node ek baar visit |
| Search | `O(n)` | Linear search, sequential access |

> Tip — Exam me linked list ka koi bhi operation likhte time **NULL check** aur **malloc() ke baad NULL check** dono likhna mat bhoolo — examiner edge cases dekhte hain.
