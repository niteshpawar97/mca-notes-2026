## Aim

Array-based Stack (push/pop/peek/display) implement karna, aur Linked List se Stack banakar usse Infix expression ko Postfix expression me convert karna.

---

### Program 1: Array-based Stack (Menu Driven)

**Logic:** Stack ek LIFO (Last In First Out) data structure hai — jo element last me daala jaata hai (push), wahi sabse pehle nikalta hai (pop). Hum ek array aur ek `top` variable rakhte hain jo top element ka index batata hai. `top = -1` matlab stack empty hai.

```c
#include <stdio.h>
#define MAX 5

int stack[MAX];
int top = -1;

void push(int val) {
    if (top == MAX - 1) {
        printf("Stack Overflow!\n");
        return;
    }
    stack[++top] = val;
    printf("%d pushed.\n", val);
}

void pop() {
    if (top == -1) {
        printf("Stack Underflow!\n");
        return;
    }
    printf("%d popped.\n", stack[top--]);
}

void peek() {
    if (top == -1)
        printf("Stack is empty.\n");
    else
        printf("Top element = %d\n", stack[top]);
}

void display() {
    if (top == -1) {
        printf("Stack is empty.\n");
        return;
    }
    printf("Stack (top -> bottom): ");
    for (int i = top; i >= 0; i--)
        printf("%d ", stack[i]);
    printf("\n");
}

int main() {
    int choice, val;
    do {
        printf("\n1.Push 2.Pop 3.Peek 4.Display 5.Exit\nChoice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter value to push: ");
                scanf("%d", &val);
                push(val);
                break;
            case 2: pop(); break;
            case 3: peek(); break;
            case 4: display(); break;
            case 5: printf("Exiting.\n"); break;
            default: printf("Invalid choice!\n");
        }
    } while (choice != 5);

    return 0;
}
```

**Sample Output**

```
1.Push 2.Pop 3.Peek 4.Display 5.Exit
Choice: 1
Enter value to push: 10
10 pushed.

Choice: 1
Enter value to push: 20
20 pushed.

Choice: 4
Stack (top -> bottom): 20 10

Choice: 2
20 popped.

Choice: 5
Exiting.
```

> Yaad Rakho — Array-based stack ki limitation: fixed size (`MAX`) hoti hai, "Stack Overflow" ho sakta hai. Linked-list based stack me ye problem nahi hoti (dynamic size), sirf memory allocation fail hone par hi overflow hota hai.

---

### Program 2: Stack using Linked List — Infix to Postfix Conversion

**Logic:** Yahan stack ko array ki jagah linked list se banate hain (`push` = naya node front me insert, `pop` = front node remove) — isse size dynamically badh sakta hai. Is stack ka use karke hum Infix expression (jaise `A+B*C`) ko Postfix (`ABC*+`) me convert karte hain using **Shunting Yard** algorithm ka simplified version:

1. Agar character operand hai (letter/digit) → seedha output me daalo.
2. Agar `(` hai → stack me push karo.
3. Agar `)` hai → jab tak `(` na mile, stack se pop karke output me daalte raho.
4. Agar operator hai → stack ke top operator se precedence compare karo; jab tak stack ka top operator precedence >= current operator, pop karke output me daalo, phir current operator push karo.
5. End me stack me jo bacha hai sab pop karke output me daal do.

```c
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

struct Node {
    char data;
    struct Node *next;
};

struct Node *top = NULL;

void push(char c) {
    struct Node *newNode = (struct Node *) malloc(sizeof(struct Node));
    newNode->data = c;
    newNode->next = top;
    top = newNode;
}

char pop() {
    if (top == NULL) return -1;
    char c = top->data;
    struct Node *temp = top;
    top = top->next;
    free(temp);
    return c;
}

char peekTop() {
    if (top == NULL) return -1;
    return top->data;
}

int isEmpty() {
    return top == NULL;
}

// Precedence of operators
int precedence(char c) {
    if (c == '^') return 3;
    if (c == '*' || c == '/') return 2;
    if (c == '+' || c == '-') return 1;
    return -1;
}

void infixToPostfix(char infix[], char postfix[]) {
    int i, k = 0;
    for (i = 0; infix[i] != '\0'; i++) {
        char c = infix[i];

        if (isalnum(c)) {                       // operand -> output directly
            postfix[k++] = c;
        }
        else if (c == '(') {                    // push open bracket
            push(c);
        }
        else if (c == ')') {                     // pop till matching '('
            while (!isEmpty() && peekTop() != '(')
                postfix[k++] = pop();
            pop();                                // remove '(' itself
        }
        else {                                    // operator
            while (!isEmpty() && precedence(peekTop()) >= precedence(c))
                postfix[k++] = pop();
            push(c);
        }
    }
    while (!isEmpty())                            // pop remaining operators
        postfix[k++] = pop();
    postfix[k] = '\0';
}

int main() {
    char infix[50], postfix[50];

    printf("Enter infix expression (e.g. A+B*C): ");
    scanf("%s", infix);

    infixToPostfix(infix, postfix);

    printf("Postfix expression: %s\n", postfix);

    return 0;
}
```

**Sample Output**

```
Enter infix expression (e.g. A+B*C): A+B*C
Postfix expression: ABC*+

Enter infix expression (e.g. A+B*C): (A+B)*(C-D)
Postfix expression: AB+CD-*
```

**Trace for `A+B*C`:**

| Char | Action | Stack (top→) | Output |
|------|--------|---------------|--------|
| A | operand | (empty) | A |
| + | push | + | A |
| B | operand | + | AB |
| * | prec(*) > prec(+), push | *+ | AB |
| C | operand | *+ | ABC |
| end | pop all | (empty) | ABC*+ |

> Tip — Viva ka classic question: "Postfix expression ka fayda kya hai?" Answer: Postfix me brackets aur precedence rules ki zaroorat nahi padti evaluation ke time — bas left to right scan karke ek stack se evaluate ho jaata hai, isliye compilers expressions ko postfix (ya similar) form me convert karke evaluate karte hain.

> Warning — Linked-list stack me `pop()` ke baad `free()` karna mat bhoolo, warna memory leak hoga. Also agar stack empty ho aur `pop()` call ho jaaye toh crash na ho, isliye hamesha `isEmpty()` check karo pop se pehle.
