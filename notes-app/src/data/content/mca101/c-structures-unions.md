## Structure Kya Hoti Hai?

Structure ek **user-defined data type** hai jo **different data types ke variables ko ek naam ke andar group** karti hai.

```c
struct Student {
    int roll;
    char name[20];
    float marks;
};
```

**Declaration aur initialization:**

```c
struct Student s1 = {1, "Amit", 85.5};
```

> Socho Aise — Struct ek "bio-data form" jaisa hai — ek hi form (structure) me naam (string), roll number (int), marks (float) jaise alag-alag type ki information ek saath rehti hai.

---

## Members Access Karna — `.` Aur `->`

| Operator | Kab Use Hota Hai | Example |
|----------|-------------------|---------|
| `.` (dot) | Normal struct variable ke saath | `s1.roll` |
| `->` (arrow) | Struct **pointer** ke saath | `p->roll` |

```c
struct Student s1 = {1, "Amit", 85.5};
printf("%d", s1.roll);          // dot operator

struct Student *p = &s1;
printf("%d", p->roll);          // arrow operator
printf("%d", (*p).roll);        // ye bhi same hai, but arrow zyada readable hai
```

> Yaad Rakho — `p->roll` aslo me `(*p).roll` ka shorthand hai. Jab bhi pointer ho, `->` use karo — safer aur cleaner hai.

---

## Nested Structures

Ek structure ke andar doosri structure bhi rakh sakte hain:

```c
struct Date {
    int day, month, year;
};

struct Student {
    int roll;
    char name[20];
    struct Date dob;      // nested structure
};

struct Student s1;
s1.dob.year = 2005;        // nested member access — chain me dot lagate hain
```

---

## Array of Structures

Multiple records store karne ke liye — jaise ek class ke sab students:

```c
struct Student class[50];      // 50 students ka array

class[0].roll = 1;
strcpy(class[0].name, "Amit");
class[0].marks = 85.5;

for (int i = 0; i < 50; i++) {
    printf("%d %s %.2f\n", class[i].roll, class[i].name, class[i].marks);
}
```

> Tip — "Array of structures" real-world database jaisa hota hai — har element ek "record/row" hai aur struct members "columns" hain. Exam me isko employee/student records ke example se explain karna common hai.

---

## Struct Vs Union — Sabse Important Difference

Union bhi struct jaisi hi dikhti hai syntax me, lekin memory allocation **bilkul alag** hoti hai.

```c
struct MyStruct {
    int i;
    float f;
    char c;
};

union MyUnion {
    int i;
    float f;
    char c;
};
```

### Memory Diagram

```
struct (har member ki apni jagah — total size = sabka sum, +padding)
┌────────┬────────┬────┐
│  int i │ float f│char│
│ 4 bytes│ 4 bytes │1 B │   => total ~ 12 bytes (with padding)
└────────┴────────┴────┘

union (sab members ek hi memory share karte hain — total size = sabse bada member)
┌────────────┐
│  4 bytes   │   <- i, f, c teeno isi jagah ko share karte hain
└────────────┘   => total size = 4 bytes (sabse bade member jitna)
```

### Comparison Table

| Feature | Structure | Union |
|---------|-----------|-------|
| Memory allocation | Har member ke liye alag memory | Sabhi members ek hi memory location share karte hain |
| Total size | Sabhi members ke size ka sum (+ padding) | Sabse bade member ke barabar |
| Ek time par valid values | Sabhi members ek saath valid | Sirf **ek** member ek time par valid hota hai |
| Use case | Jab sab fields ek saath chahiye ho (record) | Jab memory bachani ho aur ek time par ek hi value chahiye |
| Keyword | `struct` | `union` |

```c
union MyUnion u;
u.i = 10;
printf("%d\n", u.i);   // 10 — sahi

u.f = 3.14;
printf("%d\n", u.i);   // ab galat/garbage value — kyunki f ne i ki memory overwrite kar di
```

> Warning — Union me ek se zyada members ko ek saath use mat karo — jo member last me set hua wahi valid hai, baaki sabki value corrupt ho jaati hai kyunki wo saare same memory share karte hain.

---

## `sizeof()` Se Difference Verify Karna

```c
printf("Struct size: %d\n", sizeof(struct MyStruct));   // e.g. 12
printf("Union size: %d\n", sizeof(union MyUnion));       // e.g. 4
```

> Example — Agar union me `int` (4 bytes), `double` (8 bytes), aur `char` (1 byte) members hain, toh `sizeof(union)` = **8 bytes** hoga (sabse bade member `double` ke barabar), jabki struct me total **13+ bytes** (padding ke saath aur zyada) hoga.

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| Structure define | `struct Tag { members; };` |
| Access (variable) | `.` operator |
| Access (pointer) | `->` operator |
| Nested struct | Ek struct ke andar doosra struct type |
| Array of struct | Multiple records store karne ke liye |
| Struct memory | Sabhi members ki alag jagah |
| Union memory | Sabhi members ek hi jagah share karte hain |

> Tip — Exam me "struct vs union" 5-mark question hai — memory diagram banao aur table likho, dono milakar full marks milte hain.
