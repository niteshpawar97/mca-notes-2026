## Basic Computer Organization

Ek simple computer me typically yeh components hote hain jo bus ke through connected rehte hain:

```
      ┌────────┐   ┌────────┐   ┌────────┐
      │  PC    │   │  AC    │   │  IR    │
      └───┬────┘   └───┬────┘   └───┬────┘
          │            │            │
     ─────┴────────────┴────────────┴─────  Common Bus
          │                         │
      ┌───┴────┐               ┌────┴───┐
      │  MAR   │               │  Memory │
      └────────┘               └────────┘
```

- **PC (Program Counter)** — agla instruction ka address hold karta hai.
- **IR (Instruction Register)** — currently execute ho rahi instruction hold karta hai.
- **AC (Accumulator)** — computation ka main working register.
- **MAR/MBR** — memory address/data ke liye.

**Instruction Set** — ek processor jo saare instructions samajh sakta hai unka collection — data transfer, arithmetic, logical, control transfer (jump/branch) categories me aate hain.

---

## Instruction Format

Ek instruction do main parts se milkar banti hai:

```
┌───────────────┬──────────────────┐
│    Opcode      │     Operand(s)    │
│ (kya karna hai)│ (kis par karna hai)│
└───────────────┴──────────────────┘
```

- **Opcode** — operation code, batata hai kaunsa operation perform karna hai (ADD, SUB, LOAD, STORE, JUMP etc.)
- **Operand/Address field** — data ya memory address batata hai jis par operation perform hoga.

### Instruction Length Ke Types

| Type | Description |
|------|-------------|
| **Zero-address** | Stack-based, operands implicitly stack se aate hain |
| **One-address** | Ek operand + implied accumulator (AC ← AC op M) |
| **Two-address** | Do operand fields |
| **Three-address** | Teen operand fields — general purpose registers wale machines me |

> Yaad Rakho — Jitne zyada address fields honge, instruction utni lambi hogi lekin utne kam instructions me kaam ho jaayega. Trade-off hai instruction length vs number of instructions ke beech.

---

## Addressing Modes

Addressing mode batata hai ki operand ka **actual location** kaise nikala jaaye instruction ke andar diye gaye address field se.

| Addressing Mode | Kya Hota Hai | Example |
|-----------------|---------------|---------|
| **Immediate** | Operand khud instruction me hi hota hai | `MOV R1, #5` → R1 = 5 |
| **Direct** | Address field directly operand ka memory address deta hai | `MOV R1, 200` → R1 = M[200] |
| **Indirect** | Address field un memory location ka address deta hai jahan **actual address** stored hai | `MOV R1, @200` → R1 = M[M[200]] |
| **Register** | Operand kisi register me hota hai | `MOV R1, R2` → R1 = R2 |
| **Register Indirect** | Register ek address hold karta hai jahan operand hai | `MOV R1, (R2)` → R1 = M[R2] |
| **Indexed** | Base address + index register ki value add hoti hai | `MOV R1, 200(R2)` → R1 = M[200+R2] |

```
Direct:          Indirect:                Indexed:
┌──────┐         ┌──────┐                 ┌──────┐
│ 200  │──►M[200]│ 200  │──►M[200]──►M[..]│ 200  │ + R2 ──► M[200+R2]
└──────┘         └──────┘  (pointer)      └──────┘
```

> Socho Aise — Direct addressing "ghar ka address seedha diya" jaisa hai. Indirect addressing ek "chithhi jisme kisi aur ghar ka address likha hai" jaisa — pehle chitthi padho, phir wahan jaao.

> Tip — RGPV me "addressing modes explain with example" bahut common 5-mark question hai. Har mode ka ek line diagram + ek chhota numeric example zaroor likho.

---

## Instruction Cycle (Fetch-Decode-Execute)

CPU repeatedly ek cycle follow karta hai jab tak program chalta rehta hai:

```
   ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌───────────────┐
   │  FETCH   │ ──► │  DECODE  │ ──► │ EXECUTE  │ ──► │ Check Interrupt│
   └─────────┘     └─────────┘     └─────────┘     └───────┬───────┘
        ▲                                                    │
        └────────────────────────────────────────────────────┘
```

1. **Fetch** — PC se instruction ka address lo, memory se instruction laakar IR me daalo, PC increment karo.
2. **Decode** — IR me pada opcode decode karo — control unit samajhta hai kaunsa operation hai.
3. **Execute** — actual operation perform hota hai (ALU/memory/register ke through).
4. **Interrupt check** — cycle khatam hone par CPU check karta hai koi interrupt pending toh nahi.

### Fetch Cycle Ke Micro-operations (RTL)

```
T0:  MAR ← PC
T1:  MBR ← M[MAR],  PC ← PC + 1
T2:  IR  ← MBR
```

### Execute Cycle Example (ADD instruction)

```
T3:  MAR ← IR(address)
T4:  MBR ← M[MAR]
T5:  AC  ← AC + MBR
```

---

## Instruction Execution via Microinstructions

Har machine-level instruction internally ek **sequence of microinstructions** me todi jaati hai (microprogramming). Control unit ek **control memory** (ROM) me stored microprogram ko sequentially execute karta hai — har microinstruction ek ya zyada micro-operations trigger karti hai.

```
Machine Instruction: ADD R1, R2
        │
        ▼
Microinstruction 1:  fetch operand from R2
Microinstruction 2:  ALU add R1 + R2
Microinstruction 3:  store result back in R1
```

Yeh approach **hardwired control** (fixed logic circuits) ke alternative hai — microprogrammed control flexible hota hai kyunki naya instruction add karne ke liye sirf control memory update karni padti hai, hardware nahi.

---

## Interrupt Cycle

**Interrupt** — ek signal jo CPU ko batata hai ki koi external ya internal event ho gaya hai jispar turant dhyaan dena zaroori hai (jaise I/O device ready hai, ya error aa gaya).

Interrupt cycle instruction cycle ke end me perform hota hai:

```
1. Interrupt Flag check karo (IF = 1?)
2. Agar haan:
      a. Current PC ko save karo (stack ya fixed location par)
      b. PC ← ISR (Interrupt Service Routine) ka address
3. ISR execute hota hai
4. Return-from-interrupt: saved PC wapas load karo
```

> Warning — Interrupt cycle ko instruction cycle ke saath confuse mat karna. Interrupt sirf **fetch-decode-execute** cycle ke end me check hota hai, beech me nahi (varna instruction atomicity toot jaayegi).

> Example — Suppose PC = 100 aur ek I/O interrupt aata hai execute cycle ke baad. CPU current PC (101, already incremented) ko save karega, phir PC ko ISR address (jaise 500) par set karega. ISR complete hone ke baad PC wapas 101 par restore hoga aur normal execution continue hogi.
