## Aim

Queue ko pointers (linked list) se implement karna, Linked List ko array se simulate karna, aur Linked List ko pointers se implement karna (insert/delete/display).

---

### Program 1: Queue using Pointers (Linked List based)

**Logic:** Queue ek FIFO (First In First Out) structure hai — jo pehle aata hai wahi pehle nikalta hai. Hum do pointers rakhte hain: `front` (jahan se delete hoga) aur `rear` (jahan insert hoga). Naya node hamesha `rear` ke baad add hota hai, delete hamesha `front` se hota hai.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *front = NULL, *rear = NULL;

void enqueue(int val) {
    struct Node *newNode = (struct Node *) malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;

    if (rear == NULL) {          // queue empty
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
    printf("%d enqueued.\n", val);
}

void dequeue() {
    if (front == NULL) {
        printf("Queue Underflow!\n");
        return;
    }
    struct Node *temp = front;
    printf("%d dequeued.\n", front->data);
    front = front->next;
    if (front == NULL) rear = NULL;   // queue became empty
    free(temp);
}

void display() {
    if (front == NULL) {
        printf("Queue is empty.\n");
        return;
    }
    printf("Queue (front -> rear): ");
    struct Node *temp = front;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    int choice, val;
    do {
        printf("\n1.Enqueue 2.Dequeue 3.Display 4.Exit\nChoice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &val);
                enqueue(val);
                break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: printf("Exiting.\n"); break;
            default: printf("Invalid choice!\n");
        }
    } while (choice != 4);
    return 0;
}
```

**Sample Output**

```
1.Enqueue 2.Dequeue 3.Display 4.Exit
Choice: 1
Enter value: 10
10 enqueued.
Choice: 1
Enter value: 20
20 enqueued.
Choice: 3
Queue (front -> rear): 10 20
Choice: 2
10 dequeued.
```

---

### Program 2: Linked List Using Arrays

**Logic:** Ye ek interesting simulation hai — pointers use kiye bina bhi hum linked-list jaisa behaviour bana sakte hain using do parallel arrays: `data[]` (values store karta hai) aur `next[]` (agla index store karta hai, jaise pointer index ka role play karta hai). `-1` ka matlab "aage koi node nahi" (NULL jaisa).

```c
#include <stdio.h>
#define MAX 100

int data[MAX], next[MAX];
int head = -1, freeIndex = 0;   // freeIndex = next unused array slot

// Insert value at the end of the array-simulated list
void insertEnd(int val) {
    int newIdx = freeIndex++;
    data[newIdx] = val;
    next[newIdx] = -1;

    if (head == -1) {
        head = newIdx;
        return;
    }
    int temp = head;
    while (next[temp] != -1)
        temp = next[temp];
    next[temp] = newIdx;
}

void display() {
    if (head == -1) {
        printf("List is empty.\n");
        return;
    }
    printf("List: ");
    int temp = head;
    while (temp != -1) {
        printf("%d -> ", data[temp]);
        temp = next[temp];
    }
    printf("NULL\n");
}

int main() {
    int n, val;

    printf("Enter number of elements to insert: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Enter value %d: ", i + 1);
        scanf("%d", &val);
        insertEnd(val);
    }

    display();
    return 0;
}
```

**Sample Output**

```
Enter number of elements to insert: 4
Enter value 1: 10
Enter value 2: 20
Enter value 3: 30
Enter value 4: 40
List: 10 -> 20 -> 30 -> 40 -> NULL
```

> Yaad Rakho — "Linked List using Arrays" ka matlab actual pointers use nahi karna — `next[i]` array khud "index-based pointer" ka role nibhata hai. Ye concept static memory allocation environments (jaha malloc available na ho) me useful hai.

---

### Program 3: Linked List using Pointers (Create, Insert, Delete, Display)

**Logic:** Ye "real" linked list hai jisme har node `malloc` se dynamically banta hai aur `next` pointer se agle node ka address store karta hai. Insert front/end dono me ho sakta hai, delete kisi specific value ko dhoond kar node remove aur `free` karta hai.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *head = NULL;

void insertEnd(int val) {
    struct Node *newNode = (struct Node *) malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
        return;
    }
    struct Node *temp = head;
    while (temp->next != NULL)
        temp = temp->next;
    temp->next = newNode;
}

void deleteValue(int val) {
    struct Node *temp = head, *prev = NULL;

    if (temp != NULL && temp->data == val) {   // delete head node
        head = temp->next;
        free(temp);
        printf("%d deleted.\n", val);
        return;
    }

    while (temp != NULL && temp->data != val) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("%d not found.\n", val);
        return;
    }

    prev->next = temp->next;
    free(temp);
    printf("%d deleted.\n", val);
}

void display() {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct Node *temp = head;
    printf("List: ");
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

int main() {
    int choice, val;
    do {
        printf("\n1.Insert 2.Delete 3.Display 4.Exit\nChoice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &val);
                insertEnd(val);
                break;
            case 2:
                printf("Enter value to delete: ");
                scanf("%d", &val);
                deleteValue(val);
                break;
            case 3: display(); break;
            case 4: printf("Exiting.\n"); break;
            default: printf("Invalid choice!\n");
        }
    } while (choice != 4);
    return 0;
}
```

**Sample Output**

```
1.Insert 2.Delete 3.Display 4.Exit
Choice: 1
Enter value: 5
Choice: 1
Enter value: 15
Choice: 1
Enter value: 25
Choice: 3
List: 5 -> 15 -> 25 -> NULL
Choice: 2
Enter value to delete: 15
15 deleted.
Choice: 3
List: 5 -> 25 -> NULL
```

> Tip — Viva me "Array vs Linked List" ka comparison bahut common hai: Array me fixed size, O(1) random access, insert/delete costly (shifting). Linked List me dynamic size, O(n) access (traverse karna padta hai), lekin insert/delete O(1) (agar node ka pointer pata ho) kyunki koi shifting nahi hoti.

> Warning — Delete karte waqt agar `head` node hi delete karna ho toh `head` ko update karna mat bhoolo, warna list ka starting point galat ho jaayega ya dangling pointer issue aayega.
