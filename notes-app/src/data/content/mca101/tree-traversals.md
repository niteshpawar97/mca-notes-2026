## Tree Traversal Kya Hai?

Traversal ka matlab hai tree ke **har node ko ek systematic order me visit karna**. Binary tree ke liye 3 main recursive traversals hoti hain — sabme ek hi basic idea hai, bas **Root ka position** alag hota hai.

| Traversal | Order |
|-----------|-------|
| **Preorder** | Root → Left → Right |
| **Inorder** | Left → Root → Right |
| **Postorder** | Left → Right → Root |

> Yaad Rakho — Naam me hi "Root" ka position chhupa hai: **Pre**order = Root **pehle**, **In**order = Root **beech me**, **Post**order = Root **baad me**.

---

## Sample Tree

```
              1
            /   \
           2     3
          / \   / \
         4   5 6   7
```

### Worked Example — Sabhi Traversals

| Traversal | Rule | Output |
|-----------|------|--------|
| **Preorder** | Root, Left, Right | `1 2 4 5 3 6 7` |
| **Inorder** | Left, Root, Right | `4 2 5 1 6 3 7` |
| **Postorder** | Left, Right, Root | `4 5 2 6 7 3 1` |

> Socho Aise — Preorder ek "boss pehle bolta hai, phir team members" jaisa hai. Postorder ek "team members pehle report karte hain, boss last me summary deta hai" jaisa hai. Inorder me boss beech me hai — left team ke baad, right team se pehle.

---

## Recursive C Code

Sabse pehle node structure:

```c
struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};
```

### Preorder (Root → Left → Right)

```c
void preorder(struct Node *root) {
    if (root == NULL) return;
    printf("%d ", root->data);   // Root
    preorder(root->left);         // Left
    preorder(root->right);        // Right
}
```

### Inorder (Left → Root → Right)

```c
void inorder(struct Node *root) {
    if (root == NULL) return;
    inorder(root->left);          // Left
    printf("%d ", root->data);    // Root
    inorder(root->right);         // Right
}
```

### Postorder (Left → Right → Root)

```c
void postorder(struct Node *root) {
    if (root == NULL) return;
    postorder(root->left);        // Left
    postorder(root->right);       // Right
    printf("%d ", root->data);    // Root
}
```

> Tip — In-order traversal ek **Binary Search Tree (BST)** par apply karo toh output **hamesha sorted order** me aata hai — ye ek bahut common exam fact hai.

---

## Non-Recursive (Stack-Based) Traversal

Recursive traversal internally ek **call stack** use karta hai. Non-recursive implementation me hum **explicit stack** khud maintain karte hain.

### Iterative Preorder (Sabse Simple)

```c
void iterativePreorder(struct Node *root) {
    if (root == NULL) return;

    struct Node *stack[100];
    int top = -1;
    stack[++top] = root;

    while (top != -1) {
        struct Node *curr = stack[top--];   // pop
        printf("%d ", curr->data);

        if (curr->right != NULL)
            stack[++top] = curr->right;      // right pehle push (baad me process)
        if (curr->left != NULL)
            stack[++top] = curr->left;       // left baad me push (pehle process hoga)
    }
}
```

**Logic:** Stack LIFO hai, isliye jo baad me process karna hai use pehle push karo. Root print karo, phir right ko push karo (baad ke liye), phir left ko push karo (pehle process hoga kyunki top par hoga).

### Iterative Inorder (Sketch)

```c
void iterativeInorder(struct Node *root) {
    struct Node *stack[100];
    int top = -1;
    struct Node *curr = root;

    while (curr != NULL || top != -1) {
        while (curr != NULL) {          // sabse left tak jao, push karte huye
            stack[++top] = curr;
            curr = curr->left;
        }
        curr = stack[top--];             // pop karo, print karo
        printf("%d ", curr->data);
        curr = curr->right;               // ab right subtree explore karo
    }
}
```

> Warning — Postorder ka iterative version sabse tricky hota hai kyunki node ko **do baar visit** karna padta hai (ek baar left/right check karne ke liye, doosri baar print karne ke liye) — typically **2 stacks** ya ek "last visited node" tracker use hota hai.

---

## Quick Revision Table

| Traversal | Order | Use Case |
|-----------|-------|----------|
| Preorder | Root-Left-Right | Tree ka copy banana, prefix expression |
| Inorder | Left-Root-Right | BST se sorted output nikalna |
| Postorder | Left-Right-Root | Tree delete karna, postfix expression |

> Example — Agar exam me expression tree diya ho, toh preorder = **prefix**, postorder = **postfix**, aur inorder (with brackets) = **infix** expression deta hai — ye link expression trees ke topic se bhi juda hai.
