## String Kya Hota Hai?

C me koi separate "string" data type nahi hota — string basically **characters ka array** hota hai jo `\0` (null character, ASCII value 0) se **terminate** hota hai.

```c
char name[6] = "Hello";     // actual storage: 'H','e','l','l','o','\0'
char name[6] = {'H','e','l','l','o','\0'};   // same cheez manually
```

```
Index:    0    1    2    3    4    5
Value:   'H'  'e'  'l'  'l'  'o'  '\0'
```

> Yaad Rakho — `char name[5] = "Hello";` **galat** hai! "Hello" me 5 characters hain, par null terminator ke liye ek extra jagah chahiye — size kam se kam **6** honi chahiye.

---

## Null Terminator `\0` Ka Mahatva

Saari standard string functions (`strlen`, `printf("%s")` etc.) `\0` dekh kar hi pata karte hain ki string kahan khatam hui. Agar `\0` missing ho, toh function garbage memory tak padhta rahega — ye ek common bug hai.

> Socho Aise — `\0` ek "full stop" jaisa hai jo batata hai ki sentence (string) yahan khatam ho gaya. Agar full stop hi na ho, toh reading agli lines (memory) tak chalti rahegi.

---

## Standard Library String Functions

Ye saare functions `<string.h>` header me defined hain:

| Function | Kaam | Example |
|----------|------|---------|
| `strlen(s)` | String ki length (bina `\0` count kiye) return karta hai | `strlen("Hi")` → `2` |
| `strcpy(dest, src)` | `src` ko `dest` me copy karta hai | `strcpy(a, "Hi")` |
| `strcat(dest, src)` | `src` ko `dest` ke end me jodta hai | `strcat(a, "Hi")` |
| `strcmp(s1, s2)` | Do strings compare karta hai (0 = equal) | `strcmp("a","b")` → negative |
| `strchr(s, c)` | String me character dhoondta hai | `strchr("hi", 'i')` |
| `strstr(s1, s2)` | Substring dhoondta hai | `strstr("hello","ll")` |

```c
#include <stdio.h>
#include <string.h>

int main() {
    char a[20] = "Hello";
    char b[] = "World";

    printf("Length: %d\n", strlen(a));      // 5
    strcat(a, b);                            // a = "HelloWorld"
    printf("Concatenated: %s\n", a);

    if (strcmp(a, b) == 0)
        printf("Equal\n");
    else
        printf("Not Equal\n");

    return 0;
}
```

---

## Apna Version Likhna — String Functions From Scratch

Exam me aksar puchte hain: "strlen()/strcpy() ka apna function likho" — inka logic samajhna zaroori hai.

### Apna `strlen()`

```c
int myStrlen(char s[]) {
    int i = 0;
    while (s[i] != '\0') {
        i++;
    }
    return i;
}
```

### Apna `strcpy()`

```c
void myStrcpy(char dest[], char src[]) {
    int i = 0;
    while (src[i] != '\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\0';     // null terminator copy karna mat bhoolo!
}
```

### Apna `strcat()`

```c
void myStrcat(char dest[], char src[]) {
    int i = 0, j = 0;
    while (dest[i] != '\0') i++;       // dest ke end tak pahuncho
    while (src[j] != '\0') {
        dest[i] = src[j];
        i++; j++;
    }
    dest[i] = '\0';
}
```

### Apna `strcmp()`

```c
int myStrcmp(char s1[], char s2[]) {
    int i = 0;
    while (s1[i] != '\0' && s2[i] != '\0') {
        if (s1[i] != s2[i])
            return s1[i] - s2[i];      // difference return karo
        i++;
    }
    return s1[i] - s2[i];
}
```

> Tip — Exam me "apna strcpy likho" jaisa question aaye toh **null terminator copy karna kabhi mat bhoolo** — yahi sabse common marks-katne-wali galti hai.

---

## String Input Lena

`scanf("%s", str)` sirf **space tak** padhta hai — poori line nahi. Poori line (spaces ke saath) padhne ke liye `fgets()` use karo:

```c
char sentence[100];
fgets(sentence, 100, stdin);     // poori line, newline ke saath
```

> Warning — `scanf("%s", &str)` galat hai jab `str` already ek array hai — array ka naam khud address hota hai, `&` lagane ki zarurat nahi (`scanf("%s", str)` sahi hai).

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| String storage | `char` array + `\0` terminator |
| Size rule | Array size ≥ characters + 1 (for `\0`) |
| Header file | `<string.h>` |
| Input (word only) | `scanf("%s", str)` |
| Input (full line) | `fgets(str, size, stdin)` |
| Compare | `strcmp()` — 0 matlab equal |

> Example — `strcmp("apple", "banana")` negative return karega kyunki `'a' < 'b'` (ASCII value comparison), `strcmp("cat","cat")` `0` return karega.
