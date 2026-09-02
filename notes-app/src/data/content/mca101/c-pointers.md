## Pointer Kya Hota Hai?

Pointer ek aisa variable hai jo **kisi doosre variable ka memory address** store karta hai, uski value nahi.

```c
int x = 10;
int *p;      // p ek pointer hai jo int ka address store karega
p = &x;      // & = "address of" operator
```

```
Memory:
┌─────────┬─────────┐
│ Address │  Value  │
├─────────┼─────────┤
│  1000   │   10    │   <- x (address 1000 par)
│  2000   │  1000   │   <- p (x ka address store kiya)
└─────────┴─────────┘

p ─────► x (p, x ki taraf "point" karta hai)
```

**Declaration syntax:** `type *pointerName;` — jaise `int *p`, `char *ch`, `float *f`.

**Dereferencing (`*`)** — pointer ke through original variable ki value access karna:

```c
printf("%d", *p);    // 10 print hoga (x ki value)
*p = 20;              // x ki value ab 20 ho gayi (indirectly change)
```

> Socho Aise — Variable ek "ghar" hai aur uska address uska "pata (address)" hai. Pointer ek chit hai jispar wo pata likha hai. `*p` karne ka matlab hai "us pate par jaake dekho kya hai" — ye dereferencing hai.

---

## Pointer Expressions

```c
int a = 5, b = 10;
int *p1 = &a, *p2 = &b;

int sum = *p1 + *p2;      // values add hoti hain: 15
p1 = p2;                   // ab p1 bhi b ki taraf point karega
```

> Yaad Rakho — `&` operator "address of" deta hai, `*` operator "value at address" deta hai (dereference). Dono opposite kaam karte hain.

---

## Pointer Arithmetic

Pointer par sirf limited arithmetic allowed hai: increment (`++`), decrement (`--`), integer add/subtract, aur do pointers ka difference.

```c
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;         // p ab arr[0] ki taraf point karta hai

printf("%d", *p);       // 10
p++;                     // p ab arr[1] ki taraf point karega
printf("%d", *p);       // 20
```

### Scaling by Type Size — Sabse Important Concept

Jab pointer `p++` hota hai, toh address **1 byte se nahi**, balki **data type ke size jitna** badhta hai.

```
int *p  → p++ karne par address 4 bytes badhta hai   (sizeof(int) = 4)
char *c → c++ karne par address 1 byte badhta hai    (sizeof(char) = 1)
double *d → d++ karne par address 8 bytes badhta hai  (sizeof(double) = 8)
```

```
int arr[5]:  Address:  1000   1004   1008   1012   1016
             Value:     10     20     30     40     50
                        ↑
                        p (int *p = arr)
p++  →  p points to address 1004 (not 1001!)
```

> Warning — Ye galti common hai: log sochte hain `p++` hamesha 1 add karta hai. Actually compiler `sizeof(datatype)` se multiply karke address badhata hai, taaki pointer hamesha agle **element** par jaaye, agle **byte** par nahi.

---

## Array Aur Pointer Ka Rishta

```c
int arr[5];
// arr[i]  ==  *(arr + i)   -- dono same cheez hain
```

---

## Array of Pointers

Ek array jiske elements khud pointers hote hain — mostly strings ka array banane me use hota hai:

```c
char *names[3] = {"Amit", "Bhavna", "Chetan"};

for (int i = 0; i < 3; i++)
    printf("%s\n", names[i]);
```

```
names[0] ──► "Amit"
names[1] ──► "Bhavna"
names[2] ──► "Chetan"
```

---

## Function Returning a Pointer

Function apna return type pointer bhi rakh sakta hai:

```c
int* getPointer(int *a, int *b) {
    if (*a > *b)
        return a;
    return b;
}

int main() {
    int x = 5, y = 10;
    int *max = getPointer(&x, &y);
    printf("Max: %d", *max);   // 10
}
```

> Warning — Kabhi bhi function ke andar declare **local variable ka address return mat karo** — function khatam hote hi wo variable memory se destroy ho jata hai (dangling pointer create hoga).

---

## Pointer to Function

Function pointer, function ke **code ka address** store karta hai — isse function ko variable ki tarah pass/call kar sakte hain.

**Syntax:** `returnType (*pointerName)(parameterTypes);`

```c
int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int main() {
    int (*fp)(int, int);   // function pointer declaration

    fp = add;                // fp ab add() ki taraf point karta hai
    printf("%d\n", fp(3, 4));   // 7

    fp = sub;
    printf("%d\n", fp(3, 4));   // -1

    return 0;
}
```

> Tip — Function pointer syntax me brackets zaroori hain: `int (*fp)(int,int)` function pointer hai, lekin `int *fp(int,int)` ek "function jo int pointer return karta hai" hai — dono alag hain! Exam me ye difference likhna extra marks deta hai.

---

## Quick Revision Table

| Concept | Symbol | Matlab |
|---------|--------|--------|
| Address-of | `&x` | x ka memory address |
| Dereference | `*p` | p ke address par stored value |
| Pointer declare | `int *p;` | p, int ka address store karega |
| Pointer arithmetic | `p++` | `sizeof(type)` bytes se address badhta hai |
| Array-pointer link | `arr[i]` | `*(arr + i)` ke barabar |
| Function pointer | `int (*fp)(int,int);` | function ka address store karta hai |

> Example — `int *p; p = p + 3;` agar `p` pehle `2000` tha aur `int` 4 bytes ka hai, toh naya address hoga `2000 + 3*4 = 2012`.
