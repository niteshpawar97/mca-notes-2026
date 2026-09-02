## Array Kya Hota Hai?

Array ek **collection of similar data type elements** hai jo memory me **contiguous (lagatar)** locations me store hote hain, aur ek hi naam se access hote hain — sirf index badalta hai.

```c
int marks[5];              // 1D array declaration — 5 int values ke liye jagah
int marks[5] = {90, 85, 70, 60, 95};   // declaration + initialization
```

- Array ka **index hamesha 0 se shuru** hota hai (`marks[0]` se `marks[4]` tak, 5 elements ke liye).
- Array ka naam khud ek **constant pointer** hota hai jo pehle element ka address hold karta hai.

> Socho Aise — Array ek train ki bogies jaisa hai. Sabhi bogies (elements) same type ki hoti hain, ek line me juri (contiguous) hoti hain, aur har bogie ka apna number (index) hota hai.

---

## Array Ko Process Karna — Traverse, Insert, Search

**Traversal** — Sabhi elements ko ek baar visit karna (print/sum karna):

```c
for (int i = 0; i < 5; i++) {
    printf("%d ", marks[i]);
}
```

**Insertion** — Kisi position par naya element daalna (baaki elements ko shift karna padta hai):

```c
void insert(int arr[], int *n, int pos, int value) {
    for (int i = *n; i > pos; i--) {
        arr[i] = arr[i - 1];     // shift right
    }
    arr[pos] = value;
    (*n)++;
}
```

**Linear Search** — Ek-ek element check karke value dhoondna:

```c
int search(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;   // found — index return karo
    }
    return -1;      // not found
}
```

> Tip — Insert/Delete ka time complexity `O(n)` hota hai kyunki worst case me saare elements shift karne padte hain. Search bhi linear array me `O(n)` hai. Exam me ye complexity likhna mat bhoolo.

---

## Array Ko Function Me Pass Karna

Jab array ko function me pass karte hain, toh **actual array copy nahi hoti** — sirf array ka **base address (pointer)** pass hota hai. Isko **array decaying to a pointer** kehte hain.

```c
void display(int arr[], int n) {     // arr yahan actually int* hai
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
}

int main() {
    int nums[4] = {1, 2, 3, 4};
    display(nums, 4);      // sirf address pass hua
    return 0;
}
```

Isliye function ke andar agar array ke elements change karte hain, toh **original array bhi change ho jata hai** — ye "call by reference" jaisa behavior hai, chahe C me strictly "call by value" ho (value jo pass hoti hai wo address hi hoti hai).

> Yaad Rakho — C me function argument me `arr[]` aur `*arr` dono ek hi cheez hain — array function ko humesha pointer ki tarah mila hi milta hai, kabhi bhi poora array copy nahi hota.

---

## Multi-Dimensional Arrays — 2D Array as Matrix

2D array ek **matrix (rows x columns)** ki tarah data store karta hai:

```c
int matrix[3][4];                  // 3 rows, 4 columns
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};   // initialization
```

Access karne ke liye do index chahiye: `matrix[row][col]`.

```c
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\n");
}
```

### Row-Major Storage

C memory me 2D array ko **row-major order** me store karta hai — matlab pehle row 1 ke saare elements, phir row 2, aur aage.

```
matrix[2][3] = {{1,2,3},{4,5,6}}

Memory:  [1][2][3][4][5][6]
          row0    row1
```

Address calculation formula (base address `B`, row size `C` columns, element size `S`):

```
Address of matrix[i][j] = B + (i * C + j) * S
```

> Example — `matrix[3][4]` array me `matrix[1][2]` ka address nikalna ho (base = 1000, int size = 4 bytes):
> `1000 + (1*4 + 2) * 4 = 1000 + 24 = 1024`

---

## Multi-Dimensional Array — 3D Aur Aage

3D array `int arr[2][3][4]` — isko "2 blocks of 3x4 matrices" ki tarah socho. Syntax same pattern follow karta hai, bas ek aur index index add ho jata hai.

```c
int arr[2][3][4];
arr[0][1][2] = 10;
```

> Warning — 2D array function me pass karte time column size **hamesha specify karni padti hai** (`void func(int arr[][4])`), warna compiler ko row ka size calculate karne ka koi tarika nahi milta.

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| Declaration | `type name[size];` |
| Index range | `0` to `size-1` |
| Memory | Contiguous locations |
| Passing to function | Address (pointer) pass hota hai, copy nahi |
| 2D storage order | Row-major (C default) |
| Address formula | `B + (i*C + j) * S` |
| Traversal complexity | `O(n)` for 1D, `O(n*m)` for 2D |

> Tip — Exam me "array ko function me pass karne par kya hota hai" poocha jaye toh clearly likho: "array decays to a pointer to its first element" — ye ek standard, high-scoring line hai.
