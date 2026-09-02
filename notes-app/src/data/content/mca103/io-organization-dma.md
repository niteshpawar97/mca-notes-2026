## Simple I/O Organization

CPU ko peripherals (keyboard, printer, disk) se data exchange karna padta hai. Yeh devices CPU se bahut slower hote hain, isiliye special I/O organization chahiye hoti hai.

```
   CPU ◄──► I/O Interface/Controller ◄──► I/O Device
              (speed matching,
               buffering, status register)
```

- **I/O Interface** — CPU aur device ke beech "bridge" ka kaam karta hai — data buffer karta hai, status register maintain karta hai (device busy/ready), aur signal conversion karta hai.
- CPU I/O device ke registers ko special I/O instructions se ya memory-mapped I/O se access karta hai.

> Socho Aise — I/O interface ek "translator/receptionist" jaisa hai jo fast CPU aur slow device ke beech baat karwata hai, taaki dono apni-apni speed par kaam kar sakein.

---

## Synchronous vs Asynchronous Data Transfer

| Basis | Synchronous Transfer | Asynchronous Transfer |
|-------|----------------------|-------------------------|
| **Clock** | Common clock signal se sab units synchronize hote hain | Koi common clock nahi — handshaking signals use hote hain |
| **Speed dependency** | Sender-receiver same speed hone chahiye | Different speed devices bhi kaam kar sakte hain |
| **Control mechanism** | Fixed time slots | Request/Acknowledge signals (handshaking) |
| **Example** | CPU-memory transfer (same system clock) | CPU aur slow I/O devices ke beech |

```
Asynchronous Handshaking:

Sender:    Data Ready ──►
Receiver:  ◄────────────── Acknowledge
Sender:    Data Ready = 0 ──►
Receiver:  ◄────────────── Acknowledge = 0
```

> Yaad Rakho — Synchronous = "common clock follow karo", Asynchronous = "ready-acknowledge signal se baat karo". Slow peripherals ke saath asynchronous transfer zyada practical hai.

---

## Data Transfer Modes

Data ko I/O device aur memory/CPU ke beech move karne ke teen main tareeke hain:

### 1. Program Controlled I/O (Polling)

CPU khud ek loop me device ka status register continuously check karta rehta hai ki device ready hai ya nahi.

```
LOOP: Read Status Register
      IF Busy → goto LOOP
      ELSE    → Transfer Data
```

CPU is poore process me busy rehta hai — koi aur kaam nahi kar sakta. Isse **"busy waiting"** kehte hain.

### 2. Interrupt Driven I/O

CPU I/O operation start karke apna doosra kaam karne lag jaata hai. Jab device ready ho jaata hai, wo CPU ko **interrupt signal** bhejta hai — CPU apna current kaam pause karke ISR chalata hai aur data transfer karta hai.

```
CPU: Start I/O → doosra kaam karo → [Interrupt aaya!] → ISR run → transfer → wapas kaam par
```

### 3. DMA (Direct Memory Access)

Bade data blocks (disk, network) ke liye CPU ko har byte transfer me involve karna wasteful hai. **DMA Controller** ek special hardware hai jo CPU ki jagah **directly memory aur device ke beech data transfer** karta hai, bina CPU involvement ke — CPU sirf start aur end par involve hota hai.

```
CPU:  DMA ko instruct karo (source, destination, count)
                    │
                    ▼
DMA Controller: ─────────► Memory  (CPU free hai is dauran)
                    │
                    ▼
             Transfer complete → Interrupt to CPU
```

DMA transfer ke dauran CPU **cycle stealing** ke through kabhi-kabhi bus access deta hai DMA ko (ya "burst mode"/"block mode" me poora bus lene deta hai).

---

## Comparison Table — Teeno Modes

| Feature | Program Controlled | Interrupt Driven | DMA |
|---------|---------------------|-------------------|-----|
| **CPU Involvement** | Bahut zyada (continuous polling) | Kam (sirf start + ISR par) | Bahut kam (sirf setup + end) |
| **CPU Idle Time** | CPU busy-wait karta hai, waste hota hai | CPU doosra kaam kar sakta hai | CPU almost fully free rehta hai |
| **Speed** | Slow (CPU bottleneck) | Medium | Fastest (bulk transfer ke liye) |
| **Hardware Needed** | Minimal | Interrupt controller | Dedicated DMA controller chip |
| **Best Use Case** | Simple, single, low-speed devices | Moderate speed devices, occasional I/O | Bulk data — disk, network, video |
| **CPU-Memory Bus Sharing** | N/A | N/A | DMA controller cycle-steals bus se |

> Tip — Exam me yeh table hi seedhe likh do agar "compare the three data transfer modes" poocha jaaye — RGPV examiner ko tables bahut pasand aate hain, full marks milte hain.

> Warning — DMA ka matlab CPU **poori tarah** free ho jaata hai aisa nahi hai — CPU ko DMA controller set up karna padta hai (source address, destination, count) aur transfer complete hone par interrupt handle karna padta hai. Sirf actual byte-by-byte transfer me CPU involve nahi hota.

> Example — Ek 1 MB file disk se memory me copy karni hai. Program-controlled I/O me CPU har byte ke liye wait karega (bahut slow). Interrupt-driven me bhi har chhote chunk ke baad interrupt aayega (overhead). DMA me CPU sirf ek baar DMA controller ko instruct karega, poora 1 MB transfer background me hoga, aur end me sirf ek interrupt aayega — bahut efficient.
