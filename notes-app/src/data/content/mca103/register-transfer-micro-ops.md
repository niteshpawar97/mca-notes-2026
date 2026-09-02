## Bus Kya Hota Hai?

CPU ke andar bahut saare registers hote hain (AC, PC, MAR, MBR, IR etc.) aur inke beech data move karte rehna padta hai. Agar har register ko har dusre register se alag wire se jodo, toh connections ka jaal ban jaayega. Isiliye ek common shared path use karte hain jise **Bus** kehte hain.

**Bus** — registers ke beech data transfer karne ke liye ek common set of lines (wires), jisse ek time me koi bhi ek register apna data bus par daal sakta hai aur doosre registers wahan se le sakte hain.

```
   R1 ──┐                          ┌── R1
   R2 ──┤                          ├── R2
   R3 ──┼──►  MUX/Bus Lines  ──────┼── R3
   R4 ──┘        (common path)     └── R4
                     │
              Selection lines decide
              kaunsa register source hai
```

- **Common Bus System** — Multiplexer (MUX) use hota hai jo select lines ke through decide karta hai ki kaunsa register apna data bus par daalega (source), aur destination register load enable signal se data receive karta hai.
- Ek time me sirf ek source register bus drive karta hai — isse conflict nahi hota.

> Socho Aise — Bus ek "common corridor" jaisa hai ek office building me. Har room (register) is corridor se guzar kar hi doosre room tak file (data) bhej sakta hai — alag-alag direct raste banane ki zaroorat nahi.

---

## Register Transfer Language (RTL)

RTL ek symbolic notation hai jisse hum register ke beech data movement ko short mein likhte hain, bina hardware detail me gaye.

| Notation | Matlab |
|----------|--------|
| `R2 ← R1` | R1 ka content R2 me copy ho jaata hai (R1 unchanged) |
| `R3 ← R1 + R2` | R1 aur R2 ka sum R3 me store hota hai |
| `P: R2 ← R1` | Control condition P true hone par hi transfer hoga |
| `R1 ↔ R2` | R1 aur R2 ke values swap ho jaate hain |

### Conditional Transfer

Agar transfer sirf kisi condition ke true hone par karna ho, toh control function likhte hain:

```
If (P = 1) then (R2 ← R1)

RTL me likhte hain:  P: R2 ← R1
```

Yahan `P` ek control signal hai jo control unit se aata hai — jab tak P=1 nahi hota, transfer nahi hoga. Yeh clock pulse ke saath sync hota hai.

### Memory Se/Ko Data Transfer

Memory access ke liye do special registers use hote hain:

- **MAR (Memory Address Register)** — jis memory location ko access karna hai uska address hold karta hai.
- **MBR/MDR (Memory Buffer/Data Register)** — memory se read ya write hone wala actual data hold karta hai.

```
Read:   MAR ← address
        MBR ← M[MAR]      (memory se data MBR me aata hai)

Write:  MAR ← address
        M[MAR] ← MBR      (MBR ka data memory me jaata hai)
```

> Yaad Rakho — Read operation me data **memory → MBR** flow karta hai, aur Write operation me **MBR → memory**. Exam me direction confuse mat karo!

---

## Micro-operations

Ek instruction execute karne ke liye chhote-chhote elementary operations perform hote hain jinhe **micro-operations** kehte hain. Ek machine cycle (clock pulse) me ek ya zyada micro-operations ho sakte hain.

### Types of Micro-operations

| Type | Kaam | Example |
|------|------|---------|
| **Register Transfer** | Ek register se dusre me data move | `R2 ← R1` |
| **Arithmetic** | Add, subtract, increment, decrement | `R3 ← R1 + R2`, `R1 ← R1 + 1` |
| **Logical** | Bit-wise operations | `R1 ← R1 AND R2`, `R1 ← NOT R1` |
| **Shift** | Bits ko left/right move karna | `R1 ← shl R1` (shift left) |

### Arithmetic Micro-operations Table

| Operation | RTL |
|-----------|-----|
| Addition | `R3 ← R1 + R2` |
| Subtraction | `R3 ← R1 + R2' + 1` (2's complement) |
| Increment | `R1 ← R1 + 1` |
| Decrement | `R1 ← R1 - 1` |

### Logical Micro-operations Table

| Operation | RTL | Use |
|-----------|-----|-----|
| AND | `R1 ← R1 ∧ R2` | Selective clear (masking) |
| OR | `R1 ← R1 ∨ R2` | Selective set |
| XOR | `R1 ← R1 ⊕ R2` | Selective complement / toggle |
| NOT | `R1 ← R1'` | Complement all bits |

### Shift Micro-operations

Shift register ke bits ko left ya right move karte hain — multiply/divide by 2 jaisa asar hota hai.

```
Logical Shift Left:   R1 ← shl R1     (0 aata hai LSB me)
Logical Shift Right:  R1 ← shr R1     (0 aata hai MSB me)
```

---

## Simple ALU Aur Control Unit Ka Design

**ALU (Arithmetic Logic Unit)** wo circuit hai jo actual arithmetic (add, sub) aur logical (AND, OR) operations perform karta hai. Ek simple ALU do input registers leta hai aur ek operation-select signal ke hisaab se output deta hai.

```
        A ──┐
             │      ┌──────────┐
             ├─────►│          │
        B ──┘       │   ALU    ├──► Result
                     │          │
   Select ──────────►└──────────┘
   (opcode se aata hai)
```

**Control Unit (CU)** — ALU aur registers ko sahi sequence me chalane ke liye control signals generate karta hai. Instruction ka opcode CU ko batata hai ki kaunse micro-operations, kis order me, kaunse clock cycle me perform karne hain.

- CU khud data process nahi karta — sirf "kab" aur "kya" karna hai, yeh decide karta hai (timing + sequencing).
- ALU "kaise" compute karna hai wo karta hai.

> Socho Aise — Control Unit ek "director" hai jo actors (registers, ALU) ko batata hai kab entry lena hai, aur ALU ek "actor" hai jo actual acting (computation) karta hai.

---

## Timing in Register Transfer

Sab register transfers **clock pulse** ke saath synchronized hote hain — isiliye inhe **synchronous** transfer kehte hain.

```
Clock:  __|‾|__|‾|__|‾|__|‾|__
            t0    t1    t2    t3
```

- Har transfer usually clock ke **rising edge** (ya falling edge, design par depend) par hota hai.
- Control signal (jaise `P`) clock ke pehle stable ho jaana chahiye, taaki jab clock edge aaye tab hi transfer trigger ho.
- Ek clock cycle me ek register transfer statement complete hota hai — isse race conditions avoid hoti hain.

```
Example sequence (2 clock cycles):

t0: T0: MAR ← PC          (address register load)
t1: T1: MBR ← M[MAR], PC ← PC + 1   (fetch + increment saath saath)
```

> Tip — Exam me "Timing in register transfer" poocha jaaye toh yeh zaroor likho: transfers edge-triggered flip-flops ke through hote hain, aur control signal + clock dono milke decide karte hain ki transfer kab hoga. Diagram bhi bana do.

> Example — Do register R1=6, R2=3 hai. Micro-operation `R3 ← R1 + R2` ek control signal `T2` ke andar likha jaayega: `T2: R3 ← R1 + R2`. Jab clock ka T2 cycle aayega, R3 = 9 ho jaayega.
