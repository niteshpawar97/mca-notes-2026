## Aim

Array manipulation (sorting) aur string manipulation (palindrome check) programs likhna — bina `string.h` ke built-in functions use kiye, taaki logic samajh aaye.

---

### Program 1: Array Manipulation — Bubble Sort + Largest/Smallest

Ye program user se `n` numbers ka array leta hai, usme se largest aur smallest element dhoondta hai, aur phir bubble sort se array ko ascending order me sort karta hai.

**Logic:** Largest/smallest ke liye ek pass me array traverse karke compare karte jaate hain. Bubble sort me baar baar adjacent elements ko compare karke swap karte hain jab tak poora array sorted na ho jaaye — bade elements "bubble up" hoke end me chale jaate hain.

```c
#include <stdio.h>

int main() {
    int arr[100], n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // ---------- Find largest and smallest ----------
    int largest = arr[0], smallest = arr[0];
    for (i = 1; i < n; i++) {
        if (arr[i] > largest) largest = arr[i];
        if (arr[i] < smallest) smallest = arr[i];
    }
    printf("Largest element  = %d\n", largest);
    printf("Smallest element = %d\n", smallest);

    // ---------- Bubble sort (ascending) ----------
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Sorted array: ");
    for (i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");

    return 0;
}
```

**Sample Output**

```
Enter number of elements: 6
Enter 6 elements:
45 12 78 3 56 23
Largest element  = 78
Smallest element = 3
Sorted array: 3 12 23 45 56 78
```

> Yaad Rakho — Bubble sort ki time complexity worst case me `O(n^2)` hoti hai. Viva me pucha jaaye "isse better kya hai?" toh bolo: Selection sort, Insertion sort (dono bhi O(n^2) hain) ya Merge/Quick sort (O(n log n)) — but bubble sort simplicity ke liye lab me use hota hai.

---

### Program 2: String Manipulation — Palindrome Check (without string.h)

Ye program check karta hai ki input string palindrome hai ya nahi (jaise "MADAM" ya "12321") — bina `strlen()`, `strrev()` jaise built-in functions ke, taaki logic khud implement karna aaye.

**Logic:** Pehle string ki length khud count karte hain (character array `\0` tak traverse karke). Phir do pointers — ek start se, ek end se — chalate hain aur compare karte hain. Agar sab characters match ho gaye toh palindrome hai.

```c
#include <stdio.h>

int main() {
    char str[100];
    int length = 0, i, isPalindrome = 1;

    printf("Enter a string: ");
    scanf("%s", str);   // no spaces (use fgets for sentences with spaces)

    // ---------- Manually find length (no strlen) ----------
    while (str[length] != '\0') {
        length++;
    }
    printf("Length of string = %d\n", length);

    // ---------- Check palindrome using two-pointer approach ----------
    for (i = 0; i < length / 2; i++) {
        if (str[i] != str[length - 1 - i]) {
            isPalindrome = 0;
            break;
        }
    }

    if (isPalindrome)
        printf("\"%s\" is a Palindrome.\n", str);
    else
        printf("\"%s\" is NOT a Palindrome.\n", str);

    // ---------- Bonus: print reversed string (manual reverse) ----------
    printf("Reversed string: ");
    for (i = length - 1; i >= 0; i--)
        printf("%c", str[i]);
    printf("\n");

    return 0;
}
```

**Sample Output**

```
Enter a string: MADAM
Length of string = 5
"MADAM" is a Palindrome.
Reversed string: MADAM

Enter a string: HELLO
Length of string = 5
"HELLO" is NOT a Palindrome.
Reversed string: OLLEH
```

> Tip — Viva me common follow-up: "Vowels count karne ka program bhi bana sakte ho?" Same style me `for` loop chalao, har character check karo `if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u' ...)` (dono uppercase/lowercase ke saath), count increment karte jao.

> Warning — `scanf("%s", str)` space par string todh deta hai (sirf ek word padhta hai). Agar poora sentence lena ho ("HELLO WORLD" jaisa with space) toh `fgets(str, 100, stdin)` use karo, `scanf` nahi.
