## Tree Kya Hota Hai?

Tree ek **non-linear, hierarchical data structure** hai jisme elements (**nodes**) parent-child relationships me organized hote hain. Ye ek **connected, acyclic graph** hota hai.

```
              A          ← root
            / | \
           B  C  D
          / \    |
         E   F   G       ← leaf nodes: E, F, G
```

> Socho Aise — Tree ek "family tree" jaisa hai — root ek "sabse bada ancestor" hai, aur uske "children" niche branch hote hain. Ya phir company ka "org chart" — CEO (root) se leke employees (leaves) tak.

---

## Basic Terminology

| Term | Matlab |
|------|--------|
| **Root** | Tree ka sabse upar wala node — koi parent nahi hota |
| **Node** | Tree ka har element |
| **Parent** | Jis node ke direct niche children hon |
| **Child** | Jo node kisi doosre node se directly niche connected ho |
| **Leaf (Terminal Node)** | Jis node ka koi child na ho |
| **Degree of a Node** | Us node ke children ki total sankhya |
| **Degree of Tree** | Tree ke kisi bhi node ki maximum degree |
| **Depth (Level) of a Node** | Root se us node tak ka distance (root ka depth = 0) |
| **Height of a Node** | Us node se sabse door wale leaf tak ka distance |
| **Height of Tree** | Root ki height (sabse lambi path root se leaf tak) |
| **Siblings** | Same parent wale nodes |
| **Ancestor/Descendant** | Path me upar wale sab ancestors, niche wale sab descendants |

```
Level 0:           A                <- root, depth 0
Level 1:      B    C    D           <- depth 1
Level 2:    E  F        G           <- depth 2 (leaves)

Height of tree = 2 (root se sabse door leaf tak, 2 edges)
Degree of A = 3 (B, C, D — 3 children)
Degree of B = 2 (E, F)
Leaf nodes: E, F, C, G
```

> Yaad Rakho — "Height" aur "Depth" opposite directions se measure hote hain — depth root se **neeche** count karta hai, height node se **niche leaf** tak count karti hai.

---

## Binary Tree Kya Hai?

Binary tree ek aisa tree hai jisme **har node ke maximum 2 children** ho sakte hain — **left child** aur **right child**.

```c
struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};
```

---

## Important Theorems — Exam Favorites

### 1. Maximum Nodes at Level `i`

```
Maximum nodes at level i = 2^i    (root ka level 0 maana jaaye)
```

> Example — Level 0 par max 1 node (`2^0=1`), Level 1 par max 2 nodes (`2^1=2`), Level 2 par max 4 nodes (`2^2=4`).

### 2. Maximum Nodes in a Tree of Height `h`

```
Maximum nodes = 2^(h+1) - 1
```

> Example — Height `h=2` wale tree me max nodes = `2^3 - 1 = 7`.

### 3. Relation Between Leaf Nodes and Degree-2 Nodes

Agar binary tree me `n2` = degree-2 nodes ki sankhya (jinke 2 children hain), aur `n0` = leaf nodes ki sankhya, toh:

```
n0 = n2 + 1
```

> Tip — Isko yaad rakhne ka trick: "har jo node 2 children paida karta hai, wo net ek extra leaf create karta hai" — proof induction se hota hai, exam me formula + ek chhota example diya jaaye toh kaafi hai.

---

## Complete Binary Tree Vs Almost Complete Binary Tree

| Feature | Complete Binary Tree | Almost Complete Binary Tree |
|---------|--------------------------|----------------------------------|
| **Definition** | Har level (last ko chhodkar) fully filled ho, aur last level ke nodes **left se right** filled hon | Har level fully filled ho, sirf last level ke kuch **rightmost** nodes missing ho sakte hain |
| **Last Level** | Left-aligned filling | Sirf rightmost nodes missing allowed |
| **Use Case** | Heap implementation ka base | Practically wahi cheez hai jo heaps me use hoti hai |

```
Complete Binary Tree:              Not Complete (invalid):
        A                                A
       / \                              / \
      B   C                            B   C
     / \  /                             \  / \
    D  E F                              D E   F
(last level left-filled)          (left child missing, right present — INVALID)
```

> Warning — "Complete binary tree" aur "Full binary tree" alag cheezein hain! **Full binary tree** me har node ke ya toh 0 ya 2 children hote hain (1 nahi). **Complete binary tree** me sab levels filled hote hain except possibly last, jo left-aligned hoti hai. Exam me ye confuse mat karo.

---

## Quick Revision Table

| Term | Meaning |
|------|---------|
| Root | Tree ka top node |
| Leaf | Koi child na ho |
| Height of tree | Root se sabse door leaf tak edges |
| Binary tree | Max 2 children per node |
| n0 = n2 + 1 | Leaf nodes aur degree-2 nodes ka relation |
| Max nodes level i | `2^i` |
| Max nodes height h | `2^(h+1) - 1` |

> Example — Ek binary tree jisme 5 degree-2 nodes hain, uske leaf nodes = `5 + 1 = 6` honge — chahe tree kaisa bhi shaped ho, ye formula hamesha true hai.
