## Queue Kya Hai?

Queue ek **linear data structure** hai jisme insertion ek end (**rear**) se hoti hai aur deletion doosre end (**front**) se hoti hai. Isliye ise **FIFO (First In First Out)** ADT kehte hain.

```
Front                                  Rear
  ↓                                      ↓
┌──────┬──────┬──────┬──────┬──────┐
│  10  │  20  │  30  │  40  │  50  │
└──────┴──────┴──────┴──────┴──────┘
  ↑ Sabse pehle nikalega          ↑ Sabse last add hua
```

> Socho Aise — Queue ek "ticket counter ki line" jaisa hai. Jo sabse pehle line me lagta hai (front), wahi sabse pehle serve hota hai. Naya aadmi hamesha peeche (rear) jud'ta hai.

---

## Basic Operations

| Operation | Kaam |
|-----------|------|
| `enqueue(x)` | Rear end par element add karna |
| `dequeue()` | Front se element remove karke return karna |
| `peek()` | Front element dekhna, bina remove kiye |
| `isEmpty()` | Queue khali hai ya nahi |
| `isFull()` | Queue full hai ya nahi (array implementation me) |

---

## Contiguous (Array) Linear Queue

```c
#define MAX 5

int queue[MAX];
int front = -1, rear = -1;

int isEmpty() {
    return front == -1;
}

int isFull() {
    return rear == MAX - 1;
}

void enqueue(int x) {
    if (isFull()) {
        printf("Queue Overflow\n");
        return;
    }
    if (front == -1) front = 0;      // pehla element
    queue[++rear] = x;
}

int dequeue() {
    if (isEmpty()) {
        printf("Queue Underflow\n");
        return -1;
    }
    int val = queue[front];
    if (front == rear)               // sirf ek hi element tha
        front = rear = -1;
    else
        front++;
    return val;
}
```

### Drawback — Space Wastage

Linear queue me dequeue karne par `front` aage badhta jata hai, lekin peeche ki jagah **kabhi reuse nahi hoti**, chahe wo khali ho.

```
Initial:   [10][20][30][40][50]     front=0, rear=4  (FULL)
Dequeue 2x: [--][--][30][40][50]     front=2, rear=4

Ab agar enqueue(60) karna ho toh "isFull()" TRUE bolega
kyunki rear == MAX-1, jabki index 0,1 khali padi hai — WASTE!
```

> Warning — Linear queue ka sabse bada drawback yahi hai — front ki khali jagah wapas use nahi hoti, jisse memory waste hoti hai chahe queue "logically" khali ho.

---

## Circular Queue — Solution

Circular queue me last index ke baad **wapas index 0 par** chala jata hai — array ko ek "circle" ki tarah treat karte hain, isliye front ki khali jagah reuse ho jaati hai.

```
        [0]
   [4]       [1]
     \       /
      circular
     /       \
   [3]       [2]

rear ke baad MAX-1 se 0 par wraparound hota hai: rear = (rear+1) % MAX
```

### Enqueue Algorithm

```c
void enqueue(int x) {
    if ((rear + 1) % MAX == front) {     // full condition
        printf("Queue Overflow\n");
        return;
    }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX;
    queue[rear] = x;
}
```

### Dequeue Algorithm

```c
int dequeue() {
    if (front == -1) {                    // empty condition
        printf("Queue Underflow\n");
        return -1;
    }
    int val = queue[front];
    if (front == rear)
        front = rear = -1;                // last element tha
    else
        front = (front + 1) % MAX;
    return val;
}
```

### Full Condition Formula

```
isFull:   (rear + 1) % MAX == front
isEmpty:  front == -1
```

> Yaad Rakho — Circular queue ka full-condition formula `(rear + 1) % MAX == front` exam me bahut poocha jaata hai — modulo (`%`) operator hi wraparound karta hai.

---

## Linked List Implementation — Stack Aur Queue

Array-based implementation me size **fix** hoti hai — Overflow ho sakta hai chahe RAM me jagah ho. **Linked list implementation** me nodes dynamically allocate hote hain, isliye jab tak system memory hai, tab tak overflow nahi hota.

### Linked Stack

```c
struct Node {
    int data;
    struct Node *next;
};

struct Node *top = NULL;

void push(int x) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = x;
    newNode->next = top;      // naya node purane top ki taraf point kare
    top = newNode;             // top update karo
}

int pop() {
    if (top == NULL) {
        printf("Stack Underflow\n");
        return -1;
    }
    int val = top->data;
    struct Node *temp = top;
    top = top->next;
    free(temp);
    return val;
}
```

### Linked Queue

```c
struct Node {
    int data;
    struct Node *next;
};

struct Node *front = NULL, *rear = NULL;

void enqueue(int x) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = x;
    newNode->next = NULL;
    if (rear == NULL) {          // empty queue
        front = rear = newNode;
        return;
    }
    rear->next = newNode;
    rear = newNode;
}

int dequeue() {
    if (front == NULL) {
        printf("Queue Underflow\n");
        return -1;
    }
    int val = front->data;
    struct Node *temp = front;
    front = front->next;
    if (front == NULL) rear = NULL;   // ab queue khali ho gayi
    free(temp);
    return val;
}
```

### isFull() / isEmpty() Logic

| | Array Implementation | Linked List Implementation |
|---|------------------------|-------------------------------|
| `isFull()` | Index bound check (`rear == MAX-1` ya circular formula) | **Practically never full** — sirf tab jab system memory khatam ho jaaye (`malloc` fail ho) |
| `isEmpty()` | `front == -1` | `top == NULL` (stack) / `front == NULL` (queue) |

> Tip — Exam me "linked list implementation array se better kyun hai" poocha jaaye toh likho: "Dynamic size, overflow tab tak nahi jab tak heap memory available hai, aur memory hamesha zarurat ke hisaab se use hoti hai."

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| Queue property | FIFO — First In First Out |
| Insert point | Rear |
| Delete point | Front |
| Linear queue drawback | Front ki khali jagah reuse nahi hoti |
| Circular queue fix | `% MAX` se wraparound |
| Circular full check | `(rear+1) % MAX == front` |
| Linked queue benefit | Dynamic — overflow tab tak nahi jab tak memory available hai |
