## Dynamic Memory Allocation Ki Zarurat Kyun?

Normal (static) array me size **compile time par fix** karna padta hai:

```c
int arr[100];    // agar 100 se zyada data aaya toh problem, kam aaya toh memory waste
```

Real life me hume pata nahi hota ki data kitna aayega — isliye **run time par memory allocate** karne ka tarika chahiye. Ye kaam **dynamic memory allocation** karta hai, jiske functions `<stdlib.h>` header me hote hain.

### Heap vs Stack

| | Stack | Heap |
|---|-------|------|
| **Kaise allocate hoti hai** | Automatically (local variables, function calls) | Manually (`malloc`, `calloc` se) |
| **Size** | Fixed, compile time par decide | Flexible, run time par decide |
| **Deallocation** | Automatic (function return hote hi) | Manual (`free()` karna padta hai) |
| **Speed** | Fast | Thoda slow |
| **Lifetime** | Function ke scope tak | Jab tak `free()` na ho |

> Socho Aise — Stack ek "reserved seat" jaisa hai — pehle se fix hai kitni seats hain. Heap ek "open ground" jaisa hai jahan zarurat ke hisaab se jagah maang sakte ho aur kaam khatam hone par wapas kar sakte ho.

---

## malloc() — Memory Allocate Karna

```c
ptr = (castType*) malloc(numBytes);
```

- Ek block memory allocate karta hai, jiski size hum specify karte hain.
- Memory **uninitialized (garbage values)** hoti hai.
- Fail hone par `NULL` return karta hai.

```c
int *p = (int*) malloc(5 * sizeof(int));   // 5 integers ke liye jagah

if (p == NULL) {
    printf("Memory allocation failed\n");
} else {
    for (int i = 0; i < 5; i++)
        p[i] = i + 1;
}
```

---

## calloc() — Contiguous Allocation

```c
ptr = (castType*) calloc(n, size);
```

- `n` blocks allocate karta hai, har ek `size` bytes ka, **total = n * size bytes**.
- Memory ko **automatically zero se initialize** karta hai (yahi malloc se main difference hai).

```c
int *p = (int*) calloc(5, sizeof(int));   // 5 ints, sab zero se initialize
```

### malloc() vs calloc()

| Feature | malloc() | calloc() |
|---------|----------|----------|
| Arguments | 1 (`total bytes`) | 2 (`count`, `size of each`) |
| Initialization | Garbage value (uninitialized) | Zero se initialize |
| Speed | Thoda fast | Thoda slow (zeroing ke wajah se) |
| Syntax | `malloc(n * sizeof(type))` | `calloc(n, sizeof(type))` |

> Yaad Rakho — "**c**alloc" me "**c**" ka matlab "**c**lear/**c**lean" yaad rakho — calloc memory ko clean (zero) karke deta hai, malloc nahi.

---

## free() — Memory Wapas Karna

Allocated memory use ke baad **free()** se wapas OS ko deni chahiye, warna wo memory kisi aur ke use ke liye available nahi rahegi.

```c
free(p);    // memory release
p = NULL;   // dangling pointer se bachne ke liye (good practice)
```

---

## realloc() — Size Badalna/Ghatana

Pehle se allocated block ka size change karna ho toh `realloc()` use karte hain:

```c
ptr = realloc(ptr, newSize);
```

```c
int *p = (int*) malloc(5 * sizeof(int));
p = (int*) realloc(p, 10 * sizeof(int));   // ab 10 ints ke liye jagah
```

Purana data (jitna fit ho sake) preserve rehta hai, extra jagah garbage hoti hai.

---

## Common Bugs — Exam Favorite

### 1. Memory Leak

Jab allocate ki hui memory ko `free()` nahi karte, aur uska pointer bhi lose ho jata hai — wo memory kabhi wapas nahi mil pati jab tak program chalta rahe.

```c
void leak() {
    int *p = (int*) malloc(sizeof(int));
    // free(p) call nahi kiya — memory leak!
}
```

### 2. Dangling Pointer

Jab `free()` karne ke baad bhi pointer ko use karte hain — wo pointer ab invalid memory ki taraf point kar raha hota hai.

```c
int *p = (int*) malloc(sizeof(int));
free(p);
*p = 10;    // DANGER — dangling pointer use ho raha hai
```

> Warning — `free()` ke baad pointer ko turant `NULL` assign karo. Isse agar galti se dobara use bhi ho jaaye, toh crash turant pata chal jayega (NULL dereference), silent corruption nahi hoga.

---

## Complete Example

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, *arr;

    printf("Kitne elements chahiye? ");
    scanf("%d", &n);

    arr = (int*) calloc(n, sizeof(int));   // zero-initialized memory

    if (arr == NULL) {
        printf("Memory allocation fail!\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
        arr[i] = i * i;

    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    free(arr);       // memory release
    arr = NULL;

    return 0;
}
```

---

## Quick Revision Table

| Function | Kaam | Header |
|----------|------|--------|
| `malloc(size)` | Uninitialized memory allocate | `stdlib.h` |
| `calloc(n, size)` | Zero-initialized memory allocate | `stdlib.h` |
| `realloc(ptr, size)` | Allocated block ka size badalna | `stdlib.h` |
| `free(ptr)` | Memory release karna | `stdlib.h` |

> Tip — Exam me "malloc vs calloc" ek common 2-3 mark question hai. Table format me answer likho — arguments, initialization, aur speed teeno points cover karo.
