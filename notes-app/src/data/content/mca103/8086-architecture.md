## 8086 Microprocessor — Overview

Intel 8086 ek **16-bit microprocessor** hai (1978 me launch hua) — 16-bit data bus, 20-bit address bus (isliye 2^20 = **1 MB memory** address kar sakta hai). Yeh x86 family ka foundation hai.

| Feature | Value |
|---------|-------|
| Data bus | 16-bit |
| Address bus | 20-bit |
| Max addressable memory | 1 MB |
| Registers | 14, each 16-bit |
| Clock speed | 5-10 MHz (original) |
| Fabrication | 40-pin DIP package |

---

## Internal Architecture — Do Units

8086 ka andar do independent parallel-working units hote hain — yeh **pipelining** jaisa concept deta hai jisse speed badhti hai.

```
┌─────────────────────────┐      ┌──────────────────────────┐
│   BIU (Bus Interface     │      │   EU (Execution Unit)     │
│   Unit)                   │◄────►│                            │
│                            │Queue │  - Instruction decode      │
│  - Instruction fetch       │      │  - ALU operations           │
│  - Memory/IO address gen   │      │  - Register management      │
│  - Bus control              │      │  - Flag update                │
│  - 6-byte instruction queue │      │                                │
└─────────────────────────┘      └──────────────────────────┘
```

### BIU (Bus Interface Unit)

- Memory se instructions **fetch** karta hai aur ek **6-byte prefetch queue** me store karta hai — isse EU ko instructions turant milti hain (pipelining effect).
- Address calculation (segment + offset) karta hai.
- Bus control signals generate karta hai (read/write, memory/IO).

### EU (Execution Unit)

- Queue se instruction leke **decode aur execute** karta hai.
- ALU operations perform karta hai.
- General purpose registers manage karta hai.
- Flags update karta hai.

> Socho Aise — BIU ek "waiter" hai jo continuously kitchen (memory) se orders (instructions) laata rehta hai aur queue me rakhta hai, aur EU ek "chef" hai jo un orders ko cook (execute) karta hai. Dono parallel kaam karte hain — waiter agla order leke aata hai jab tak chef pichla bana raha hota hai.

---

## Register Set of 8086

### General Purpose Registers (16-bit, but usable as two 8-bit halves)

| Register | Full Name | Special Use |
|----------|-----------|--------------|
| **AX** (AH+AL) | Accumulator | Arithmetic, I/O operations |
| **BX** (BH+BL) | Base Register | Base address for memory (indexed addressing) |
| **CX** (CH+CL) | Count Register | Loop counter, shift/rotate count |
| **DX** (DH+DL) | Data Register | I/O port addressing, multiply/divide extension |

### Segment Registers (16-bit each)

| Register | Purpose |
|----------|---------|
| **CS** | Code Segment — current instruction segment |
| **DS** | Data Segment — data ka default segment |
| **SS** | Stack Segment — stack ka segment |
| **ES** | Extra Segment — string operations me extra data segment |

### Pointer & Index Registers

| Register | Purpose |
|----------|---------|
| **SP** | Stack Pointer — top of stack ka offset |
| **BP** | Base Pointer — stack frame base |
| **SI** | Source Index — string/array source |
| **DI** | Destination Index — string/array destination |

### Flag Register (Status Flags)

9 flags — Carry (CF), Parity (PF), Auxiliary Carry (AF), Zero (ZF), Sign (SF), Trap (TF), Interrupt (IF), Direction (DF), Overflow (OF).

> Yaad Rakho — AX, BX, CX, DX general purpose registers hain lekin har ek ka ek special/implicit use bhi hota hai — exam me yeh "special use" column bahut poocha jaata hai.

---

## Pin Diagram — Key Pin Groups

8086 ek **40-pin DIP** package hai. Pins ko groups me samajhna easy hai:

```
                ┌──────────∪──────────┐
     GND ───────┤ 1                40 ├─────── Vcc
     AD14 ──────┤ 2                39 ├─────── AD15
     AD13 ──────┤ 3                38 ├─────── A16/S3
      ...        │        8086        │  ...
     RD  ────────┤                    ├─────── HOLD
     TEST ───────┤                    ├─────── HLDA
     INTR ───────┤                    ├─────── WR
     CLK  ───────┤                    ├─────── M/IO
     RESET ──────┤                    ├─────── DT/R
     READY ──────┤ 20              21 ├─────── ALE
                └──────────────────────┘
```

| Pin Group | Pins | Kaam |
|-----------|------|------|
| **Address/Data Bus** | AD0-AD15 (multiplexed), A16-A19 | Address aur data dono carry karte hain (time-multiplexed) |
| **Control Signals** | RD, WR, ALE, DT/R, DEN | Read/Write control, Address Latch Enable |
| **Interrupt Signals** | INTR, NMI, INTA | Interrupt request, Non-maskable interrupt, Interrupt acknowledge |
| **DMA Signals** | HOLD, HLDA | DMA controller CPU se bus request/acknowledge karta hai |
| **Power/Clock** | Vcc, GND, CLK | Power supply aur clock input |
| **Mode Control** | MN/MX | Minimum/Maximum mode select |

> Tip — Pin diagram poori tarah yaad karna zaroori nahi — bas groups yaad rakho (address/data, control, interrupt, DMA, power) aur ek-do example pin har group se. Diagram bana kar labels lagana kaafi hota hai marks ke liye.

---

## Why Segmented Memory?

8086 ka ALU 16-bit hai lekin address bus 20-bit — sirf 16-bit registers se seedhe 1 MB address nahi ban sakta (2^16 = 64 KB hi milega). Isliye **segmentation** use hoti hai:

```
Physical Address = (Segment Register × 16) + Offset

Example:  CS = 1000H, IP = 0050H
          Physical Address = 1000H × 10H + 0050H
                            = 10000H + 0050H
                            = 10050H
```

- Memory ko **64 KB ke segments** me divide kiya jaata hai (Code, Data, Stack, Extra).
- Har segment ka base address segment register me hota hai, aur usme ek 16-bit **offset** add karke actual (physical) address milta hai.
- Isse 16-bit registers use karke bhi 1 MB tak memory address ho paati hai.

> Warning — Segment aur offset dono 16-bit hote hain, lekin final physical address 20-bit hota hai — formula yaad rakho: `Segment × 16 + Offset`, exam me numeric conversion questions aate hain.

> Example — CS=2000H, IP=0010H hai toh next instruction ka physical address = 2000H×10H + 0010H = 20000H + 0010H = **20010H**.
