## Stack Kya Hai?

Stack ek **linear data structure** hai jisme elements **ek ke upar ek** rakhte hain, aur insertion/deletion sirf ek hi end (**top**) se hoti hai. Isliye stack ko **LIFO (Last In First Out)** ADT (Abstract Data Type) kehte hain.

```
        ┌───────┐
  Top → │  30   │   <- last inserted, sabse pehle nikalega
        ├───────┤
        │  20   │
        ├───────┤
        │  10   │   <- first inserted, sabse last nikalega
        └───────┘
```

> Socho Aise — Stack ek "plates ka dher" jaisa hai. Jo plate sabse upar (last) rakhi thi, wahi sabse pehle uthai jaati hai.

---

## Basic Operations

| Operation | Kaam |
|-----------|------|
| `push(x)` | Naya element top par daalna |
| `pop()` | Top element nikalna aur return karna |
| `peek()` / `top()` | Top element dekhna, bina nikale |
| `isEmpty()` | Check karo stack khali hai ya nahi |
| `isFull()` | Check karo stack full hai ya nahi (array implementation me) |

---

## Contiguous (Array) Implementation

```c
#define MAX 5

int stack[MAX];
int top = -1;      // empty stack ka indicator

int isEmpty() {
    return top == -1;
}

int isFull() {
    return top == MAX - 1;
}

void push(int x) {
    if (isFull()) {
        printf("Stack Overflow\n");
        return;
    }
    stack[++top] = x;      // pehle top badhao, phir insert karo
}

int pop() {
    if (isEmpty()) {
        printf("Stack Underflow\n");
        return -1;
    }
    return stack[top--];   // pehle value lo, phir top ghatao
}

int peek() {
    if (isEmpty()) return -1;
    return stack[top];
}
```

> Yaad Rakho — Array implementation me **Stack Overflow** (full stack me push karna) aur **Stack Underflow** (empty stack se pop karna) — dono error conditions exam me zaroor poochi jaati hain.

---

## Polish Notations — Infix, Prefix, Postfix

| Notation | Format | Example (a + b) |
|----------|--------|-------------------|
| **Infix** | Operator do operands ke **beech** me | `a + b` |
| **Prefix (Polish)** | Operator operands se **pehle** | `+ a b` |
| **Postfix (Reverse Polish)** | Operator operands ke **baad** | `a b +` |

Computers postfix/prefix ko prefer karte hain kyunki inme **brackets aur precedence rules ki zarurat nahi** padti — evaluation seedha left-to-right ho jaati hai.

---

## Infix → Postfix Conversion Algorithm (Using Stack)

**Rules:**
1. Operand mile toh seedha output me daalo.
2. `(` mile toh stack me push karo.
3. `)` mile toh jab tak `(` na mile, stack se pop karke output me daalte raho, phir `(` discard karo.
4. Operator mile toh: jab tak stack ke top ka operator **higher ya equal precedence** ka ho, use pop karke output me daalo, phir current operator push karo.
5. End me jo bhi stack me bacha ho, sab pop karke output me daal do.

### Worked Example — `A + B * C`

| Step | Symbol | Stack (bottom→top) | Postfix Output |
|------|--------|----------------------|------------------|
| 1 | `A` | — | `A` |
| 2 | `+` | `+` | `A` |
| 3 | `B` | `+` | `A B` |
| 4 | `*` | `+ *` (higher precedence, push) | `A B` |
| 5 | `C` | `+ *` | `A B C` |
| 6 | End | pop all → `* +` | `A B C * +` |

**Final Postfix: `A B C * +`**

> Example — `(A + B) * C` ka postfix `A B + C *` hoga — brackets ke andar wala expression pehle nikalta hai kyunki `)` milte hi `(` tak sab pop ho jata hai.

---

## Postfix Expression Evaluation Using Stack

**Rule:** Left se right scan karo. Operand mile toh push karo. Operator mile toh top ke **do elements pop** karo, operation apply karo, result wapas push karo.

### Worked Example — Evaluate `5 3 4 * +`

| Step | Symbol | Action | Stack |
|------|--------|--------|-------|
| 1 | `5` | Push | `5` |
| 2 | `3` | Push | `5, 3` |
| 3 | `4` | Push | `5, 3, 4` |
| 4 | `*` | Pop `4,3` → `3*4=12`, push | `5, 12` |
| 5 | `+` | Pop `12,5` → `5+12=17`, push | `17` |

**Result = 17**

> Tip — Postfix evaluation me operator milne par **jo pehle pop hota hai wo second operand hota hai** — order (`op2, op1`) yaad rakho, especially subtraction/division me galti hoti hai (`op1 - op2`, na ki `op2 - op1`).

---

## Prefix Expression Evaluation Using Stack

Prefix ko **right to left** scan karte hain. Operand push karo, operator mile toh top ke do elements pop karke (is baar order `op1 op operator op2` — pehla pop kiya hua left operand hota hai) result push karo.

```c
// Example: Prefix "+ 5 * 3 4"  → right to left scan
// 4 push, 3 push, * → pop(3,4) → 3*4=12 push, 5 push, + → pop(5,12) → 5+12=17
```

**Result = 17** (same expression as before, different notation)

---

## Quick Revision Table

| Concept | Detail |
|---------|--------|
| Stack property | LIFO — Last In First Out |
| Insert/Delete point | Sirf top se |
| Overflow | Full stack me push |
| Underflow | Empty stack se pop |
| Infix→Postfix | Stack operators ke liye use hota hai |
| Postfix eval | Left to right scan, operand push, operator par pop 2 |
| Prefix eval | Right to left scan |

> Warning — Infix→Postfix conversion me operator ka stack sirf **operators** hold karta hai, operands seedhe output me jaate hain — dono ko confuse mat karo.
