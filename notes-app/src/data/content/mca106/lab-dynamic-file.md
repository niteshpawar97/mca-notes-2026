## Aim

Dynamic memory allocation (`malloc`, `calloc`, `free`) ka use karke runtime par array banana, aur file handling se records ko file me likhna aur wapas padhna.

---

### Program 1: Dynamic Array using malloc/calloc/free

**Logic:** Normal array ka size compile-time par fix hota hai. `malloc()`/`calloc()` se hum runtime par user ke diye gaye size ke hisaab se heap memory le sakte hain. `calloc()` memory ko automatically 0 se initialize kar deta hai, `malloc()` nahi karta (garbage values hoti hain). Use ke baad `free()` se memory OS ko wapas karna zaroori hai — nahi toh memory leak hota hai.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, *arr;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    // ---------- Dynamic allocation using calloc (zero-initialized) ----------
    arr = (int *) calloc(n, sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int sum = 0;
    for (i = 0; i < n; i++)
        sum += arr[i];

    printf("Sum of elements = %d\n", sum);
    printf("Average = %.2f\n", (float) sum / n);

    // ---------- Resize using realloc (grow array by 3 more elements) ----------
    arr = (int *) realloc(arr, (n + 3) * sizeof(int));
    for (i = n; i < n + 3; i++)
        arr[i] = 0;   // initialize the new slots
    printf("Array resized to %d elements (3 new zero-slots added).\n", n + 3);

    // ---------- Free the memory ----------
    free(arr);
    arr = NULL;   // good practice: avoid dangling pointer
    printf("Memory freed.\n");

    return 0;
}
```

**Sample Output**

```
Enter number of elements: 4
Enter 4 elements:
10 20 30 40
Sum of elements = 100
Average = 25.00
Array resized to 7 elements (3 new zero-slots added).
Memory freed.
```

> Yaad Rakho — `malloc(n * sizeof(int))` ek hi block allocate karta hai (garbage values ke saath), `calloc(n, sizeof(int))` `n` blocks allocate karta hai jo already zero-initialized hote hain. `realloc()` existing block ka size badhata/ghatata hai, data preserve karte hue.

> Warning — Har `malloc`/`calloc` ke corresponding `free()` zaroor karo. `free()` ke baad us pointer ko use mat karo (dangling pointer) — usse turant `NULL` assign kar dena best practice hai.

---

### Program 2: File Handling — Write and Read Student Records

**Logic:** `fopen()` se file open karte hain mode ke saath ("w" = write, "r" = read, "a" = append). `fprintf()`/`fscanf()` file me formatted data likhne/padhne ke liye use hote hain (bilkul `printf`/`scanf` jaise, bas pehla argument file pointer hota hai). Kaam khatam hone par `fclose()` file close karta hai.

```c
#include <stdio.h>
#include <stdlib.h>

struct Student {
    int roll;
    char name[50];
    float marks;
};

int main() {
    FILE *fp;
    struct Student s;
    int n, i;

    // ---------- Write records to file ----------
    fp = fopen("students.txt", "w");
    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("Enter number of students: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("Enter roll, name, marks: ");
        scanf("%d %s %f", &s.roll, s.name, &s.marks);
        fprintf(fp, "%d %s %.2f\n", s.roll, s.name, s.marks);
    }
    fclose(fp);
    printf("Data written to students.txt\n\n");

    // ---------- Read and display records back from file ----------
    fp = fopen("students.txt", "r");
    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    printf("%-10s %-15s %-10s\n", "Roll", "Name", "Marks");
    printf("--------------------------------\n");
    while (fscanf(fp, "%d %s %f", &s.roll, s.name, &s.marks) != EOF) {
        printf("%-10d %-15s %-10.2f\n", s.roll, s.name, s.marks);
    }
    fclose(fp);

    return 0;
}
```

**Sample Output**

```
Enter number of students: 2
Enter roll, name, marks: 101 Riya 88.5
Enter roll, name, marks: 102 Aman 76.0
Data written to students.txt

Roll       Name            Marks
--------------------------------
101        Riya            88.50
102        Aman            76.00
```

> Tip — Viva ka common question: "File modes kaunse hain?" — `"r"` (read, file exist honi chahiye), `"w"` (write, naya banata hai ya existing overwrite kar deta hai), `"a"` (append, end me add karta hai), aur `"r+"`, `"w+"`, `"a+"` (read+write combos). `fscanf()` return value `EOF` deta hai jab file khatam ho jaaye — isliye loop `while (fscanf(...) != EOF)` se check karte hain.
