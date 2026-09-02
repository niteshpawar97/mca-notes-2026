## Threaded Binary Tree — Problem Jo Ye Solve Karta Hai

Normal binary tree me **leaf nodes** aur incomplete children wale nodes ke pointers `NULL` hote hain — ye **wasted memory** hoti hai (n-node tree me `n+1` NULL pointers hote hain, jinka koi use nahi).

```
Normal Binary Tree — NULL pointers waste ho rahe hain:

              1
            /   \
           2     3
          / \   / \
       NULL NULL NULL NULL   <- ye saare NULL, use nahi ho rahe
```

**Threaded Binary Tree** ka idea hai — in NULL pointers ko waste karne ki bajaye, unhe **inorder predecessor/successor** ki taraf point karwa do (inhe "threads" kehte hain).

> Socho Aise — Normal tree me leaf node ka "dead end" (NULL) hota hai — jaise ek gali jo kahin nahi jaati. Threaded tree me us dead-end gali ko ek "shortcut path" bana dete hain jo directly agle logical node tak le jaati hai — bina root se dobara traverse kiye.

---

## Single Vs Double Threading

| Type | Kya Thread Hota Hai |
|------|------------------------|
| **Single Threaded** | Sirf **right NULL** pointers ko **inorder successor** ki taraf point karwaya jata hai |
| **Double Threaded** | **Right NULL** → inorder successor ki taraf, **aur Left NULL** → inorder predecessor ki taraf, dono thread hote hain |

```c
struct Node {
    int data;
    struct Node *left, *right;
    int leftThread, rightThread;   // flag: 1 = thread hai, 0 = normal child pointer
};
```

```
Inorder: D B E A F C G

Threaded Tree (right threads shown as dashed):
              A
            /   \
           B     C
          / \   / \
         D   E F   G

E ka right pointer NULL tha → ab A (inorder successor) ki taraf thread
D ka right pointer NULL tha → ab B (inorder successor) ki taraf thread
```

> Yaad Rakho — Threading ka main fayda: **inorder traversal bina stack/recursion ke** ho sakta hai — threads ki wajah se seedha "next" node mil jata hai, jaise linked list traverse kar rahe ho.

> Tip — Exam me "threaded binary tree ka advantage" poocha jaaye toh likho: (1) NULL pointers ka useful reuse, (2) Traversal bina extra stack/recursion ke possible, (3) Inorder predecessor/successor turant milta hai.

---

## Forest Aur Uska Conversion — Left-Child Right-Sibling Method

**Forest** ek **set of disjoint trees** hota hai (multiple independent trees ka collection).

Ek forest (ya general tree, jisme node ke unlimited children ho sakte hain) ko ek **binary tree** me convert karne ka standard tarika hai: **Left-Child Right-Sibling (LCRS) Representation**.

**Rule:**
- Har node ka **left pointer** uske **pehle child** ki taraf point karta hai.
- Har node ka **right pointer** uske **agle sibling (same-level bhai-behen)** ki taraf point karta hai.

### Example — General Tree to Binary Tree

```
General Tree (node A ke 3 children: B, C, D; B ke 2 children: E, F):

           A
         / | \
        B  C  D
       / \
      E   F

Converted to Binary Tree (Left-Child Right-Sibling):

           A
          /
         B ────► C ────► D
        /
       E ────► F

(left pointer = first child, right pointer = next sibling)
```

**Step by step:**
1. `A` ka left = `B` (pehla child), `A` ka right = `NULL` (A ka koi sibling nahi).
2. `B` ka left = `E` (B ka pehla child), `B` ka right = `C` (B ka sibling).
3. `C` ka left = `NULL` (C ka koi child nahi), `C` ka right = `D` (C ka sibling).
4. `D` ka left = `NULL`, `D` ka right = `NULL`.
5. `E` ka left = `NULL`, `E` ka right = `F` (E ka sibling).

> Example — Agar forest me multiple trees hain (jaise Tree1 with root A, Tree2 with root X), toh unko bhi is method se jod sakte hain — Tree1 ke root ka **right pointer** Tree2 ke root ki taraf point kar dete hain, jaise wo A ke "siblings" hon.

> Warning — LCRS conversion me original tree ka **parent-child structure change ho jata hai visually**, lekin logically saari information preserve rehti hai — bas represent karne ka tarika badal jata hai (right pointer ka matlab ab "sibling" hai, "second child" nahi).

---

## Heap — Definition Aur Properties

Heap ek **special complete binary tree** hai jo ek extra property follow karta hai — ise **heap property** kehte hain.

| Type | Property |
|------|----------|
| **Max-Heap** | Har parent node, apne children se **bada ya equal** hota hai. Root = sabse **bada** element |
| **Min-Heap** | Har parent node, apne children se **chhota ya equal** hota hai. Root = sabse **chhota** element |

```
Max-Heap Example:              Min-Heap Example:
        50                             10
       /   \                          /   \
     30     40                      20     15
    /  \                           /  \
  10    20                       40    30
```

> Socho Aise — Max-heap ek "office hierarchy" jaisa hai jaha boss (root) hamesha apne juniors se zyada senior hota hai — ye rule **har level** par apply hota hai, sirf top-to-bottom overall nahi.

---

## Array Representation of Heap

Heap (being a complete binary tree) ko **array me bina kisi pointer ke** efficiently store kiya ja sakta hai, index relationships use karke:

```
Agar node ka array index = i  (0-based indexing):

  Left child index   = 2*i + 1
  Right child index  = 2*i + 2
  Parent index        = (i - 1) / 2
```

```
Max-Heap:            Array representation (0-indexed):

        50            Index:  0    1    2    3    4
       /   \           Value: 50   30   40   10   20
     30     40
    /  \
  10    20

Check: node at index 1 (value 30) → left child index = 2*1+1 = 3 (value 10) ✓
                                      right child index = 2*1+2 = 4 (value 20) ✓
```

> Yaad Rakho — Array representation isliye efficient hai kyunki **complete binary tree** me koi "gaps" nahi hote — isliye parent/child ka relation simple math (`2i+1`, `2i+2`, `(i-1)/2`) se calculate ho jata hai, extra pointers ki zarurat nahi.

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| Threaded tree | NULL pointers ko inorder pred/succ ki taraf use karta hai |
| Single threading | Sirf right NULL thread hote hain |
| Double threading | Left aur right dono NULL thread hote hain |
| Forest | Multiple disjoint trees ka set |
| LCRS conversion | Left = first child, Right = next sibling |
| Max-heap | Parent ≥ children, root = max |
| Min-heap | Parent ≤ children, root = min |
| Heap array formula | Left=`2i+1`, Right=`2i+2`, Parent=`(i-1)/2` |
