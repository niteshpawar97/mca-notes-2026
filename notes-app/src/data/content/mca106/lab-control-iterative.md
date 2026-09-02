## Aim

Control structures (`if-else`, `switch`) aur iterative structures (`for`, `while`) use karke basic decision-making aur looping programs likhna.

---

### Program 1: Grading System using if-else aur switch

Ye program student ke marks lekar uska grade decide karta hai `if-else` ladder se, aur phir ek chhota calculator `switch` statement se banate hain — dono control structures ek hi file me dikhane ke liye.

**Logic:** `if-else` me condition upar se neeche check hoti hai, jo pehli true condition milti hai wahi block execute hota hai. `switch` me ek variable ki value ke against multiple `case` match kiye jaate hain — fast aur clean jab bahut saare fixed choices ho.

```c
#include <stdio.h>

int main() {
    int marks;
    char grade;
    int choice;
    float a, b, result;

    // ---------- Part 1: if-else ladder for grading ----------
    printf("Enter marks (0-100): ");
    scanf("%d", &marks);

    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 75) {
        grade = 'B';
    } else if (marks >= 60) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    printf("Grade = %c\n\n", grade);

    // ---------- Part 2: switch-case calculator ----------
    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);

    printf("Choose operation: 1-Add 2-Sub 3-Mul 4-Div: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            result = a + b;
            printf("Result = %.2f\n", result);
            break;
        case 2:
            result = a - b;
            printf("Result = %.2f\n", result);
            break;
        case 3:
            result = a * b;
            printf("Result = %.2f\n", result);
            break;
        case 4:
            if (b == 0)
                printf("Error: Division by zero!\n");
            else
                printf("Result = %.2f\n", a / b);
            break;
        default:
            printf("Invalid choice!\n");
    }

    return 0;
}
```

**Sample Output**

```
Enter marks (0-100): 82
Grade = B

Enter two numbers: 10 3
Choose operation: 1-Add 2-Sub 3-Mul 4-Div: 4
Result = 3.33
```

> Yaad Rakho — `switch` sirf `int` ya `char` (integral types) par kaam karta hai, `float`/`double` ya string par nahi. Har `case` ke baad `break` lagana mat bhoolo, warna "fall-through" ho jaayega — control agle case me bhi chala jaayega.

---

### Program 2: Fibonacci Series aur Prime Check using for/while

Ye program `for` loop se Fibonacci series print karta hai, aur `while` loop se ek number prime hai ya nahi check karta hai.

**Logic:** Fibonacci me har naya number pichle do numbers ka sum hota hai (0, 1, 1, 2, 3, 5, 8...). Prime check me hum number ko 2 se `n/2` tak divide karke dekhte hain — agar koi bhi perfectly divide kar de toh number prime nahi hai.

```c
#include <stdio.h>

int main() {
    int n, a = 0, b = 1, next, i;
    int num, isPrime = 1;

    // ---------- Part 1: Fibonacci series using for loop ----------
    printf("Enter number of terms for Fibonacci: ");
    scanf("%d", &n);

    printf("Fibonacci Series: ");
    for (i = 1; i <= n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\n\n");

    // ---------- Part 2: Prime check using while loop ----------
    printf("Enter a number to check prime: ");
    scanf("%d", &num);

    if (num <= 1) {
        isPrime = 0;
    } else {
        i = 2;
        while (i <= num / 2) {
            if (num % i == 0) {
                isPrime = 0;
                break;
            }
            i++;
        }
    }

    if (isPrime)
        printf("%d is a Prime number.\n", num);
    else
        printf("%d is NOT a Prime number.\n", num);

    return 0;
}
```

**Sample Output**

```
Enter number of terms for Fibonacci: 8
Fibonacci Series: 0 1 1 2 3 5 8 13

Enter a number to check prime: 29
29 is a Prime number.
```

> Tip — Viva me pucha jaata hai: "for aur while me kya farak hai?" Answer: `for` tab use karo jab iterations ki count pehle se pata ho (initialization, condition, increment ek jagah), `while` tab use karo jab loop condition-dependent ho aur count pehle se fixed na ho.

> Warning — Prime check me `i <= num` tak loop chalana galat nahi hai lekin slow hai — `i <= num/2` (ya better, `i*i <= num`) tak hi kaafi hai kyunki koi bhi factor `num/2` se bada nahi ho sakta (2 ko chhodkar).
