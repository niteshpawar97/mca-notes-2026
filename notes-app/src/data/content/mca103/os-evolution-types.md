## Evolution of Operating Systems

OS computer generations ke saath evolve hua hai — har generation me hardware capability badhi, aur OS ka role bhi badhta gaya.

| Generation | Time Period | OS Characteristic |
|------------|-------------|---------------------|
| **1st Gen** | 1945-55 | Vacuum tubes, koi OS nahi — manually machine language me program run karte the |
| **2nd Gen** | 1955-65 | Transistors, **Batch Processing Systems** aaye — jobs ek batch me daal ke automatically run karte the |
| **3rd Gen** | 1965-80 | ICs, **Multiprogramming**, **Timesharing** OS aaye (jaise UNIX) |
| **4th Gen** | 1980-present | Microprocessors, **Personal Computers**, GUI-based OS (Windows, macOS), **Distributed & Real-time OS** |

> Socho Aise — OS ka evolution "ek akela mazdoor" se "ek pura management team" banne jaisa hai — pehle CPU khud sab kuch manually control karta tha, dheere-dheere OS ek smart manager ban gaya jo multiple kaam parallel handle karta hai.

---

## Types of Operating Systems

| Type | Definition | Example |
|------|------------|---------|
| **Batch OS** | Similar jobs ko batch me collect karke bina user interaction ke sequentially run karte hain | Early IBM mainframe OS |
| **Multiprogramming OS** | Multiple programs memory me ek saath rehte hain, CPU idle na rahe isliye jab ek job I/O wait kare toh dusra chale | IBM OS/360 |
| **Multitasking OS** | Ek hi user multiple tasks apparently simultaneously chala sake (time-slicing ke through) | Windows, Linux Desktop |
| **Timesharing OS** | Multiple users ek hi system ko interactively, turn-by-turn (time slice) use karte hain, response fast lagta hai | UNIX |
| **Multithreading OS** | Ek process ke andar multiple threads parallel chal sakte hain, resource sharing efficient hoti hai | Modern OS (Linux, Windows) |
| **Real-Time OS (RTOS)** | Tasks ko strict time deadline ke andar complete karna zaroori hota hai | VxWorks, flight control systems |

### Multiprogramming vs Multitasking vs Timesharing

| Basis | Multiprogramming | Multitasking | Timesharing |
|-------|-------------------|----------------|--------------|
| **Focus** | CPU utilization maximize karna | Multiple tasks ek user ke liye | Multiple users ko fair CPU time dena |
| **User** | Single ya batch | Single user, multiple tasks | Multiple users |
| **Switching** | Job I/O wait pe switch hota hai | Time-slice based switching | Time-slice based, round robin jaisa |
| **Response** | Interactive nahi | Fast, interactive | Fast, interactive, per user |

### Real-Time OS — Do Types

| Type | Description |
|------|-------------|
| **Hard RTOS** | Deadline miss hona bilkul acceptable nahi (jaise missile control) |
| **Soft RTOS** | Deadline miss hone se performance degrade hoti hai but system crash nahi karta (jaise video streaming) |

> Yaad Rakho — Exam me types ka table + ek example zaroor likho. "Multiprogramming CPU ko busy rakhta hai, Timesharing user ko fast response deta hai" — yeh distinction bahut poocha jaata hai.

---

## Different Views of the Operating System

### System Programmer's View

- OS ek collection of **system calls, APIs aur services** hai jo hardware ko manage karta hai (memory, process, file, device).
- OS ko ek **resource manager** ki tarah dekha jaata hai jo CPU, memory, I/O devices allocate karta hai.
- OS ek **extended machine** provide karta hai jisse programmer complex hardware detail se bach ke high-level services use kar sake.

### User's View

- User ke liye OS ek **interface** hai (CLI ya GUI) jisse wo apne programs run kar sake, files manage kar sake.
- User OS ko "convenience" provide karne wale system ki tarah dekhta hai — usability, ease of use, response time matter karte hain.

> Socho Aise — System programmer ke liye OS ek "engine room" hai jahan resources manage hote hain, aur user ke liye OS ek "dashboard/steering wheel" hai jisse wo gaadi (computer) chalata hai — dono ek hi OS ko alag angle se dekhte hain.

---

## Layered OS vs Monolithic OS

### Monolithic Systems

Poora OS ek single large program hota hai jisme saare modules (process management, memory management, file system, device drivers) ek hi address space me chalte hain aur ek dusre ko directly call kar sakte hain.

```
┌─────────────────────────────────────┐
│                                       │
│         Monolithic Kernel            │
│  (process mgmt, memory mgmt, file    │
│   system, drivers — sab ek saath,    │
│   ek address space me)                │
│                                       │
└─────────────────────────────────────┘
```

### Layered Operating Systems

OS ko multiple **layers** me organize kiya jaata hai, har layer sirf apne se neeche wali layer ki services use kar sakti hai — jaise THE OS (Dijkstra).

```
┌─────────────────────────┐  Layer 5: User Programs
├─────────────────────────┤  Layer 4: I/O Management
├─────────────────────────┤  Layer 3: Operator-Process Communication
├─────────────────────────┤  Layer 2: Memory Management
├─────────────────────────┤  Layer 1: CPU Scheduling
├─────────────────────────┤  Layer 0: Hardware
└─────────────────────────┘
```

### Comparison

| Basis | Monolithic | Layered |
|-------|-------------|---------|
| **Structure** | Single block, sab kuch mix | Well-defined layers, hierarchy |
| **Modularity** | Low | High |
| **Debugging** | Mushkil (sab kuch interconnected) | Easy (layer by layer test) |
| **Performance** | Fast (direct calls) | Thoda slow (layer-to-layer overhead) |
| **Example** | Original UNIX kernel | THE Operating System |

> Tip — Diagram banake dono structures dikhana is topic ka best scoring tarika hai — RGPV examiners diagram dekh kar hi partial marks de dete hain chahe explanation chhoti ho.

> Warning — Layered OS ka matlab yeh nahi ki koi bhi layer kisi bhi layer ko call kar sakti hai — strict rule hai ki sirf **immediate neeche wali layer** ki services use ho sakti hain, isse design clean rehta hai.
