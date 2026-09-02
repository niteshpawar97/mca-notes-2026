## Aim

`struct` use karke ek Student Record System banana — jisme naam, roll number aur teen subjects ke marks store ho, aur average marks calculate ho.

---

### Program: Student Record System using Array of Structures

**Logic:** `struct` ek user-defined data type hai jisme related lekin different-type variables ko ek naam ke andar group kar sakte hain (jaise `name` string hai, `roll` int hai, `marks` float array hai — sab ek `Student` structure me). Hum `n` students ka array banate hain, sabki details lete hain, average calculate karte hain, aur sabse zyada average wale student ko dhoondte hain.

```c
#include <stdio.h>

struct Student {
    char name[50];
    int roll;
    float marks[3];   // marks in 3 subjects
    float average;
};

int main() {
    int n, i, j;

    printf("Enter number of students: ");
    scanf("%d", &n);

    struct Student s[n];   // array of structures

    // ---------- Input ----------
    for (i = 0; i < n; i++) {
        printf("\n--- Student %d ---\n", i + 1);

        printf("Enter Roll No: ");
        scanf("%d", &s[i].roll);

        printf("Enter Name: ");
        scanf("%s", s[i].name);

        float sum = 0;
        for (j = 0; j < 3; j++) {
            printf("Enter marks for subject %d: ", j + 1);
            scanf("%f", &s[i].marks[j]);
            sum += s[i].marks[j];
        }
        s[i].average = sum / 3;
    }

    // ---------- Display + find topper ----------
    int topperIndex = 0;
    printf("\n%-10s %-10s %-10s\n", "Roll", "Name", "Average");
    printf("-----------------------------------\n");
    for (i = 0; i < n; i++) {
        printf("%-10d %-10s %-10.2f\n", s[i].roll, s[i].name, s[i].average);
        if (s[i].average > s[topperIndex].average)
            topperIndex = i;
    }

    printf("\nTopper: %s (Roll No %d) with average %.2f\n",
           s[topperIndex].name, s[topperIndex].roll, s[topperIndex].average);

    return 0;
}
```

**Sample Output**

```
Enter number of students: 2

--- Student 1 ---
Enter Roll No: 101
Enter Name: Riya
Enter marks for subject 1: 85
Enter marks for subject 2: 90
Enter marks for subject 3: 78

--- Student 2 ---
Enter Roll No: 102
Enter Name: Aman
Enter marks for subject 1: 60
Enter marks for subject 2: 55
Enter marks for subject 3: 70

Roll       Name       Average
-----------------------------------
101        Riya       84.33
102        Aman       61.67

Topper: Riya (Roll No 101) with average 84.33
```

> Yaad Rakho — `struct` member access karne ke do tarike hain: normal variable ke liye `.` (dot) operator (`s[i].roll`), aur pointer-to-struct ke liye `->` (arrow) operator (`ptr->roll`). Viva me difference zaroor poocha jaata hai.

> Tip — `struct Student s[n];` jaisa Variable Length Array (VLA) kuch purane compilers (jaise strict C89 / old Turbo C) support nahi karte. Agar compile error aaye, `n` ki jagah fixed size (jaise `struct Student s[50];`) use karo.

---

> Warning — Structure ke andar array/string ka size fix karna padta hai declare time par (`char name[50]`) — dynamic size nahi de sakte struct definition me. Bade names ke liye size 50-100 rakhna safe hai.
