## Aim

Binary Search Tree (BST) implement karna — insertion aur Inorder, Preorder, Postorder traversals ke saath.

---

### Program: Binary Search Tree — Insert + All Three Traversals

**Logic:** BST ek binary tree hai jisme har node ke liye rule hota hai: **left subtree ke sab values us node se chhoti, right subtree ke sab values us node se badi.** Isse searching fast ho jaati hai (O(log n) average case). Traversals:

- **Inorder** (Left → Root → Right) — BST ke liye ye hamesha **sorted order** deta hai.
- **Preorder** (Root → Left → Right) — tree ki copy banane ya prefix expression ke liye useful.
- **Postorder** (Left → Right → Root) — tree delete karne ya postfix expression ke liye useful.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

// Create a new node
struct Node* createNode(int val) {
    struct Node *newNode = (struct Node *) malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Insert a value into the BST (recursive)
struct Node* insert(struct Node *root, int val) {
    if (root == NULL)
        return createNode(val);

    if (val < root->data)
        root->left = insert(root->left, val);
    else if (val > root->data)
        root->right = insert(root->right, val);
    // if val == root->data, ignore duplicate

    return root;
}

// Inorder: Left -> Root -> Right  (gives sorted output)
void inorder(struct Node *root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

// Preorder: Root -> Left -> Right
void preorder(struct Node *root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}

// Postorder: Left -> Right -> Root
void postorder(struct Node *root) {
    if (root == NULL) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}

// Search a value in BST
struct Node* search(struct Node *root, int val) {
    if (root == NULL || root->data == val)
        return root;
    if (val < root->data)
        return search(root->left, val);
    return search(root->right, val);
}

int main() {
    struct Node *root = NULL;
    int n, val, choice;

    printf("Enter number of elements to insert: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Enter value %d: ", i + 1);
        scanf("%d", &val);
        root = insert(root, val);
    }

    printf("\nInorder Traversal   : ");
    inorder(root);

    printf("\nPreorder Traversal  : ");
    preorder(root);

    printf("\nPostorder Traversal : ");
    postorder(root);
    printf("\n");

    printf("\nEnter a value to search: ");
    scanf("%d", &val);
    if (search(root, val) != NULL)
        printf("%d found in the BST.\n", val);
    else
        printf("%d NOT found in the BST.\n", val);

    return 0;
}
```

**Sample Output**

Input values inserted in this order: `50, 30, 70, 20, 40, 60, 80`

```
Enter number of elements to insert: 7
Enter value 1: 50
Enter value 2: 30
Enter value 3: 70
Enter value 4: 20
Enter value 5: 40
Enter value 6: 60
Enter value 7: 80

Inorder Traversal   : 20 30 40 50 60 70 80
Preorder Traversal  : 50 30 20 40 70 60 80
Postorder Traversal : 20 40 30 60 80 70 50

Enter a value to search: 60
60 found in the BST.
```

**Tree structure that gets built:**

```
                50
              /    \
            30      70
           /  \    /  \
         20   40  60   80
```

> Yaad Rakho — Inorder traversal of a BST **hamesha sorted order** deta hai — ye BST ki sabse important property hai aur viva me bahut poocha jaata hai.

> Tip — Common viva questions: "BST me search ki time complexity kya hai?" — Average case `O(log n)` (balanced tree), worst case `O(n)` (jab tree skewed ho jaaye, jaise agar sorted order me hi values insert kar do — tab tree ek linked-list jaisi ban jaati hai).

> Warning — Recursion use karte waqt base case (`if (root == NULL) return;`) zaroor likho, warna infinite recursion se stack overflow ho jaayega. Insert function me hamesha `root = insert(root, val)` se return value ko wapas assign karna mat bhoolo — warna naya node tree me attach hi nahi hoga.
