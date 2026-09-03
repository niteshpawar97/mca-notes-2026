## CPU — Control Unit, ALU Aur Registers

### CPU Kya Hai?

**Central Processing Unit (CPU)** computer ka "dimaag" hai — sabhi instructions yahin execute hote hain. Isko **"Brain of the Computer"** bhi kehte hain.

> Socho Aise — Agar computer ek company hai, toh CPU uska CEO hai — har decision, har calculation CPU se hokar guzarta hai.

---

### CPU Ke 3 Main Parts

```
┌────────────────────────────────────────────┐
│                    CPU                       │
│  ┌────────────┐  ┌─────┐  ┌──────────────┐  │
│  │ Control    │  │ ALU │  │  Registers    │  │
│  │ Unit (CU)  │  │     │  │               │  │
│  └────────────┘  └─────┘  └──────────────┘  │
└────────────────────────────────────────────┘
```

| Part | Kaam |
|------|------|
| **Control Unit (CU)** | Instructions ko fetch, decode aur execute karwata hai — poore system ka "traffic police" |
| **Arithmetic Logic Unit (ALU)** | Sab ganit (+, -, *, /) aur logical operations (AND, OR, comparison) yahan hote hain |
| **Registers** | CPU ke andar chhote, super-fast temporary storage locations |

---

### Control Unit (CU) — Kya Karta Hai?

CU khud koi data process nahi karta — wo sirf **coordinate** karta hai:
- Memory se instruction **fetch** karta hai
- Us instruction ko **decode** karta hai (samajhta hai kya karna hai)
- ALU/Registers ko batata hai instruction **execute** karne ke liye

> Yaad Rakho — CU khud calculation nahi karta, sirf order deta hai kaun kya karega — bilkul ek manager jaisa jo khud kaam nahi karta par sabko coordinate karta hai.

---

### ALU — Ganit Aur Logic Ka Center

| Operation Type | Example |
|-----------------|---------|
| Arithmetic | Addition, Subtraction, Multiplication, Division |
| Logical | AND, OR, NOT, Comparison (>, <, =) |

```
Example: ALU ek instruction "5 + 3" receive karta hai
→ Result 8 calculate karta hai
→ Result ko register me store kar deta hai
```

---

### Buses — CPU Aur Baaki Components Ke Beech Ki "Roads"

CPU akela kaam nahi karta — usko memory aur input/output devices se data bhejna/lena padta hai. Ye kaam **Bus** ke through hota hai — bus ek set of electrical paths (wires) hai jo data ko ek jagah se dusri jagah transport karta hai.

```
┌────────┐   Address Bus   ┌────────┐
│        │ ───────────────▶ │        │
│  CPU   │   Data Bus      │ Memory │
│        │ ◀──────────────▶ │        │
│        │  Control Bus    │        │
│        │ ◀──────────────▶ │        │
└────────┘                 └────────┘
```

| Bus Type | Kya Carry Karta Hai | Direction |
|-----------|--------------------------|-----------|
| **Address Bus** | Memory location ka address (kahan se data lena/dena hai) | Unidirectional (CPU → Memory) |
| **Data Bus** | Actual data (jo transfer ho raha hai) | Bidirectional (dono taraf) |
| **Control Bus** | Control signals (jaise Read/Write command, timing signals) | Bidirectional |

> Socho Aise — Address Bus batata hai "kahan jaana hai" (jaise ghar ka address), Data Bus le jaata hai "kya bhejna hai" (jaise parcel), aur Control Bus batata hai "kya karna hai" (deliver karo ya pickup karo).

---

### Clock Speed — CPU Kitna "Tez" Hai

CPU ke andar ek **clock** hota hai jo regular electrical pulses (ticks) generate karta hai — har tick par CPU ek chhota sa operation perform karta hai. Ye speed **Hertz (Hz)** me measure hoti hai.

| Unit | Matlab |
|------|--------|
| **Hz (Hertz)** | 1 cycle per second |
| **MHz (Megahertz)** | 1 million cycles per second |
| **GHz (Gigahertz)** | 1 billion cycles per second |

> Example — Agar ek processor "3 GHz" ka hai, iska matlab wo **3 billion clock cycles per second** perform kar sakta hai — yaani ek second me 3 arab baar CPU "tick" karta hai, aur har tick par kuch kaam ho sakta hai. Jitna zyada GHz, utna (generally) fast processor.

> Yaad Rakho — Sirf GHz dekhkar CPU compare mat karo — Cores ki sankhya, Cache size, aur Architecture bhi speed decide karte hain. Do alag brand ke 3 GHz processors ki real-world speed different ho sakti hai.

---

### Registers — CPU Ki Apni Chhoti Memory

Registers CPU ke andar hi hote hain — RAM se bhi **zyada fast** hote hain, par size me bahut **chhote** (kuch bytes).

| Register | Kaam |
|----------|------|
| **Accumulator (AC)** | Calculation ka result temporarily store karta hai |
| **Program Counter (PC)** | Agli instruction ka address rakhta hai |
| **Instruction Register (IR)** | Current instruction jo execute ho rahi hai |
| **Memory Address Register (MAR)** | Memory location ka address rakhta hai jahan se data lena/dena hai |
| **Memory Buffer Register (MBR)** | Wo actual data/instruction temporarily rakhta hai jo memory aur CPU ke beech transfer ho raha hai (isko Memory Data Register bhi kehte hain) |

> Example — Socho tum ek sum kar rahe ho calculator par. Jo intermediate number screen par dikh raha hai (jaise pehle number 5 dabaya, phir + dabaya) — wo Accumulator jaisa hai, jo next step ke liye value yaad rakhta hai.

> Yaad Rakho — **MAR** "address" rakhta hai (kahan jaana hai), **MBR** "data" rakhta hai (kya le jaana/laana hai) — dono saath kaam karte hain jab bhi memory se koi transfer hota hai.

---

### Single-core Vs Multi-core CPU

Purane computers me sirf ek hi "core" (processing unit) hota tha — matlab CPU ek waqt me sirf ek hi instruction stream process kar sakta tha. Aajkal ke processors me multiple cores hote hain:

| Type | Matlab | Example |
|------|--------|---------|
| **Single-core** | Ek hi core, ek waqt me ek hi task efficiently kar sakta hai | Purane basic processors |
| **Multi-core (Dual, Quad, Octa)** | Do ya zyada cores ek hi chip par — multiple tasks parallel me chal sakte hain | Modern laptops/phones (Quad-core, Octa-core processors) |

> Socho Aise — Single-core ek akela worker hai jo ek time par ek hi kaam karta hai. Multi-core ek team of workers jaisa hai — alag-alag kaam (ya ek bade kaam ke parts) ek saath parallel me kar sakte hain, isiliye multitasking (games khelte hue background me download bhi chalna) smooth chalta hai.

---

### Fetch-Decode-Execute Cycle

```
1. FETCH   → CU memory se instruction laata hai
2. DECODE  → CU samajhta hai instruction ka matlab kya hai
3. EXECUTE → ALU ya baaki components instruction perform karte hain
     ↓
   (repeat for next instruction)
```

Is cycle ke har step me registers ka role hota hai:
1. **Fetch**: Program Counter (PC) batata hai agli instruction kahan hai → us instruction ko Instruction Register (IR) me le aate hain
2. **Decode**: CU IR ke andar ki instruction ko samajhta hai
3. **Execute**: ALU calculation karta hai, result Accumulator me store hota hai

> Tip — Exam me "CPU ke parts" poochha jaaye toh diagram banao (CU, ALU, Registers), har ek ka ek-ek line kaam likho, buses ka role add karo, aur Fetch-Decode-Execute cycle bhi mention karo — ye examiner ko dikhata hai concept ka poora picture pata hai.

---

### Cache Memory — CPU Aur RAM Ke Beech Ka "Shortcut"

RAM CPU ke registers se bahut slow hoti hai, isliye ek intermediate, chhoti par bahut fast memory hoti hai jise **Cache** kehte hain — ye baar-baar use hone waale data/instructions ko temporarily store kar leti hai.

| Cache Level | Location | Speed | Size |
|--------------|-----------|-------|------|
| **L1 Cache** | CPU core ke bilkul andar | Sabse fast | Sabse chhoti (KB me) |
| **L2 Cache** | CPU ke paas (thoda door) | Fast | Medium (KB-MB) |
| **L3 Cache** | Saare cores share karte hain | L1/L2 se slow, RAM se fast | Sabse badi (MB me) |

> Socho Aise — L1 Cache tumhari "jeb" jaisi hai (sabse jaldi haath aata hai, par bahut kam samaan aata hai), RAM tumhara "ghar" hai (zyada samaan, thoda door), Hard Disk tumhara "godaam (warehouse)" hai (bahut zyada samaan, sabse door).

---

### RISC Vs CISC — CPU Design Ke Do Approach

| Aspect | RISC (Reduced Instruction Set Computer) | CISC (Complex Instruction Set Computer) |
|--------|---------------------------------------------|------------------------------------------------|
| **Instructions** | Kam, simple instructions | Zyada, complex instructions |
| **Speed** | Har instruction fast execute hoti hai | Kuch instructions complex hone se slow ho sakti hain |
| **Example** | ARM processors (mobile phones) | Intel/AMD x86 processors (traditional PCs) |

> Yaad Rakho — RISC "kam par accha" approach hai (simple instructions, fast), jabki CISC "sab kuch built-in" approach hai (complex instructions, ek hi instruction me zyada kaam). Mobile phones aajkal zyadatar RISC (ARM) use karte hain kyunki wo power-efficient hote hain.
