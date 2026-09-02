## Functions, Recursion Aur Storage Classes

### Function Kya Hai Aur Kyun Zaroori Hai?

**Function** ek reusable code block hai jo ek specific kaam karta hai. Bade program ko chhote-chhote functions me todne se code:
- **Reusable** ho jaata hai (baar baar likhna nahi padta)
- **Readable** ho jaata hai (samajhna aasan)
- **Debug** karna aasan ho jaata hai (chhote parts me error dhoondo)

> Socho Aise — Function ek "vending machine" jaisa hai. Tum input dete ho (coin + selection), machine internally kaam karti hai, aur tumhe output milta hai (item). Tumhe machine ke andar ka mechanism jaanne ki zaroorat nahi.

---

### Defining Aur Accessing Functions

```c
// Function Prototype (declaration) — compiler ko pehle se batao
int add(int a, int b);

int main() {
    int result = add(5, 3);   // Function CALL — arguments PASS ho rahe hain
    printf("%d", result);     // Output: 8
    return 0;
}

// Function DEFINITION — asli kaam yahan hota hai
int add(int a, int b) {
    return a + b;              // Value RETURN ho rahi hai
}
```

| Term | Matlab |
|------|--------|
| **Function Prototype** | Compiler ko function ka signature batana (naam, return type, parameters) — semicolon ke saath |
| **Function Definition** | Function ka actual body/code |
| **Function Call** | Function ko use karna, arguments ke saath |
| **Parameters** | Function definition me listed variables |
| **Arguments** | Function call ke time actual values jo pass hoti hain |

---

### Passing Arguments — Do Tarike

#### 1. Call by Value (default in C)

Function ko **variable ki copy** milti hai — original variable change nahi hota:

```c
void increment(int x) {
    x = x + 1;      // Sirf local copy change hoti hai
}

int main() {
    int a = 5;
    increment(a);
    printf("%d", a);   // Still 5 — original unchanged!
}
```

#### 2. Call by Reference (pointer use karke)

Function ko variable ka **address** milta hai — original variable directly change hota hai:

```c
void increment(int *x) {
    *x = *x + 1;     // Original memory location change ho rahi hai
}

int main() {
    int a = 5;
    increment(&a);
    printf("%d", a);   // 6 — original changed!
}
```

> Yaad Rakho — Call by Value = "Photocopy do" (original safe rehta hai). Call by Reference = "Asli file do" (original change ho sakta hai). C me by default sab **Call by Value** hota hai, jab tak pointer explicitly use na karo.

---

### Recursion — Function Khud Ko Call Kare

Recursion tab hota hai jab ek function **khud apne aap ko** call karta hai.

```c
int factorial(int n) {
    if (n == 0) return 1;         // Base case — yahi rukna hai!
    return n * factorial(n - 1);  // Recursive case
}
// factorial(4) = 4 * 3 * 2 * 1 * 1 = 24
```

**Recursion Call Trace:**

```
factorial(4)
  = 4 * factorial(3)
        = 3 * factorial(2)
              = 2 * factorial(1)
                    = 1 * factorial(0)
                          = 1   ← Base case yahan hit hua
```

> Warning — Har recursive function me ek **base case** hona zaroori hai! Base case nahi hoga toh function infinite baar call hota rahega aur **Stack Overflow** error aa jaayega.

> Tip — Recursion explain karte time hamesha do cheezein likho: (1) Base case kya hai, (2) Recursive case kya hai. Ye examiner ko dikhata hai ki concept clear hai.

---

### Storage Classes — Variable Kaha Aur Kitni Der Tak Zinda Rehta Hai

| Storage Class | Scope | Lifetime | Default Value |
|----------------|-------|----------|-----------------|
| `auto` | Local (block ke andar) | Function ke execute hone tak | Garbage |
| `static` | Local (par value yaad rehti hai) | Poore program ke execution tak | 0 |
| `extern` | Global (dusri files me bhi accessible) | Poore program ke execution tak | 0 |
| `register` | Local | Function ke execute hone tak | Garbage (CPU register me store hone ki request) |

```c
void counter() {
    static int count = 0;   // Sirf ek baar initialize hoga
    count++;
    printf("%d ", count);
}

int main() {
    counter(); counter(); counter();   // Output: 1 2 3 (value yaad rehti hai!)
}
```

> Socho Aise — `auto` variable ek "व्हाइटबोर्ड" jaisa hai — function khatam, board saaf. `static` variable ek "डायरी" jaisa hai — function baar baar chale, par diary me likhi values yaad rehti hain.

---

### Quick Revision Table

| Concept | One-Line Yaad |
|---------|-----------------|
| Function Prototype | Compiler ko pehle se ittila |
| Call by Value | Copy jaati hai, original safe |
| Call by Reference | Address jaata hai, original change hota hai |
| Recursion | Function khud ko call kare + base case zaroori |
| static | Value function calls ke beech yaad rehti hai |
