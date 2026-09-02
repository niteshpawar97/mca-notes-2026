## Expression Tree Kya Hai?

Expression tree ek binary tree hai jisme:
- **Leaf nodes** operands hote hain (numbers/variables).
- **Internal nodes** operators hote hain (`+`, `-`, `*`, `/`).

Ye kisi bhi arithmetic expression ko **structurally** represent karta hai, jisse evaluation aur conversion easy ho jaati hai.

```
Expression: (A + B) * C

              *
            /   \
           +     C
          / \
         A   B
```

> Socho Aise — Expression tree ek "calculation ka flowchart" hai — leaves raw numbers hain, aur upar ke nodes batate hain kaunsa operation kab hoga. Root sabse **last** operation hoti hai (jo overall result deti hai).

---

## Building an Expression Tree from Postfix

**Algorithm:** Postfix ko left se right scan karo.
- Operand mile → ek naya leaf node banao, **stack me push** karo.
- Operator mile → stack se **do nodes pop** karo (right child pehle pop hoga, left child doosra), operator ka node banao jiske left aur right children ye do pop kiye hue nodes hon, phir is naye node ko wapas stack me push karo.
- End me stack me sirf ek node bachega — wahi **root** hai.

### Worked Example — Postfix: `A B + C *`

| Step | Symbol | Action | Stack (nodes) |
|------|--------|--------|-------------------|
| 1 | `A` | Leaf node banao, push | `[A]` |
| 2 | `B` | Leaf node banao, push | `[A, B]` |
| 3 | `+` | Pop `B, A` → node `+` (left=A, right=B), push | `[+(A,B)]` |
| 4 | `C` | Leaf node banao, push | `[+(A,B), C]` |
| 5 | `*` | Pop `C, +(A,B)` → node `*` (left=+(A,B), right=C), push | `[*( +(A,B), C )]` |

**Final Tree Root = `*` node**, jo upar diye gaye diagram jaisa hi hai.

```c
struct Node* buildExpressionTree(char postfix[]) {
    struct Node *stack[100];
    int top = -1;

    for (int i = 0; postfix[i] != '\0'; i++) {
        char ch = postfix[i];
        struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
        newNode->data = ch;
        newNode->left = newNode->right = NULL;

        if (isalnum(ch)) {          // operand
            stack[++top] = newNode;
        } else {                     // operator
            newNode->right = stack[top--];
            newNode->left = stack[top--];
            stack[++top] = newNode;
        }
    }
    return stack[top];   // root
}
```

---

## Evaluating an Expression Tree Recursively

Expression tree ko evaluate karna simple recursion hai — leaf node ho toh value return karo, operator node ho toh dono subtrees evaluate karke operation apply karo.

```c
int evaluate(struct Node *root) {
    if (root == NULL) return 0;

    if (root->left == NULL && root->right == NULL)   // leaf = operand
        return root->data - '0';                       // char se int convert

    int leftVal = evaluate(root->left);
    int rightVal = evaluate(root->right);

    switch (root->data) {
        case '+': return leftVal + rightVal;
        case '-': return leftVal - rightVal;
        case '*': return leftVal * rightVal;
        case '/': return leftVal / rightVal;
    }
    return 0;
}
```

> Example — `(A+B)*C` ke liye agar `A=2, B=3, C=4` ho, toh evaluation: `+` node → `2+3=5`, phir `*` node → `5*4=20`. Recursive evaluation postorder-jaisa hai (pehle children evaluate hote hain, phir root).

> Tip — Notice karo ki **postorder traversal se evaluation exactly match karta hai** — pehle left, phir right, phir operator apply — yehi expression tree evaluation ka core idea hai.

---

## Linked (Pointer-Based) Representation of Binary Tree

Binary tree ko implement karne ka sabse common tarika **linked representation** hai — har node me data ke saath do pointers (`left`, `right`) hote hain.

```c
struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node* createNode(int value) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->left = newNode->right = NULL;
    return newNode;
}
```

```
             ┌────┬──────┬───────┐
             │left│ data │ right │
             └────┴──────┴───────┘
               │              │
               ▼              ▼
          left subtree   right subtree
```

### Insert into a Binary Search Tree (BST)

```c
struct Node* insert(struct Node *root, int value) {
    if (root == NULL)
        return createNode(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else
        root->right = insert(root->right, value);

    return root;
}
```

### Traverse (Inorder Example)

```c
void inorder(struct Node *root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}
```

```c
int main() {
    struct Node *root = NULL;
    int values[] = {50, 30, 70, 20, 40};

    for (int i = 0; i < 5; i++)
        root = insert(root, values[i]);

    inorder(root);   // sorted output: 20 30 40 50 70
    return 0;
}
```

> Warning — Har `insert()` call me `root = insert(root, value)` likhna zaroori hai — kyunki recursive calls me subtree ka naya root wapas assign karna padta hai, warna links break ho jaayenge.

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| Expression tree leaves | Operands |
| Expression tree internal nodes | Operators |
| Build from postfix | Stack of nodes, operand=push, operator=pop 2 & combine |
| Evaluate | Recursive, postorder-style |
| Linked node structure | `data`, `left`, `right` pointers |
| BST insert | Recursive, compare & go left/right |
