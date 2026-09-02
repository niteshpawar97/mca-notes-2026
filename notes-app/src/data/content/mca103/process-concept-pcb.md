## Process Concept

**Process** — ek program jo execution me hai. Program ek passive entity hai (disk par pada hua code), jabki process ek active entity hai (memory me load hokar chal raha hai, apna PC, registers, stack rakhta hai).

```
Program (passive)  +  Execution (CPU time, memory, resources)  =  Process (active)
```

Har process apne saath carry karta hai:
- **Text section** — actual code
- **Data section** — global variables
- **Stack** — temporary data (function calls, local vars, return addresses)
- **Heap** — dynamically allocated memory

> Socho Aise — Program ek "recipe" jaisa hai jo kitaab me likhi hai (static). Process us recipe ko follow karke actually khana bana rahe cook jaisa hai (dynamic, resources use kar raha, progress kar raha).

---

## Process States

Process apni lifetime me multiple states se guzarta hai:

```
                admit           dispatch
    ┌──────┐  ────────►  ┌───────┐  ────────►  ┌──────────┐
    │  New  │             │ Ready  │◄──────────  │  Running  │
    └──────┘             └───────┘   preempt/    └────┬─────┘
                              ▲       time-out         │
                              │                          │ I/O or event wait
                     I/O/event complete                  ▼
                              │                    ┌───────────┐
                              └────────────────────┤  Waiting   │
                                                    └───────────┘
                                                         
    Running ──────► Terminated (exit)
```

| State | Meaning |
|-------|---------|
| **New** | Process create ho raha hai |
| **Ready** | CPU milne ka wait kar raha hai, execute karne ke liye taiyaar |
| **Running** | Currently CPU par instructions execute ho rahi hain |
| **Waiting/Blocked** | Kisi event (I/O completion) ka wait kar raha hai |
| **Terminated** | Execution finish, resources release ho rahe hain |

> Yaad Rakho — Ready se Running "dispatch" se hota hai, Running se Ready "preemption/time-out" se, aur Running se Waiting **I/O request** ki wajah se hota hai — yeh transitions exam me diagram ke saath poochi jaati hain.

---

## Process Control Block (PCB)

**PCB** ek data structure hai jo OS har process ke liye maintain karta hai — process ki poori identity aur state yahan store hoti hai. Jab bhi context switch hota hai, PCB ke through OS process ki state save/restore karta hai.

```
┌───────────────────────────────┐
│      Process Control Block      │
├───────────────────────────────┤
│  Process ID (PID)                │
│  Process State (ready/running..) │
│  Program Counter                  │
│  CPU Registers                     │
│  CPU Scheduling Info (priority)    │
│  Memory Management Info            │
│  (base/limit registers, page table)│
│  Accounting Info (CPU time used)   │
│  I/O Status Info (open files,      │
│  allocated devices)                │
└───────────────────────────────┘
```

| Field | Kyun Zaroori Hai |
|-------|--------------------|
| **PID** | Process ko uniquely identify karne ke liye |
| **Process State** | Scheduler ko batata hai process kis state me hai |
| **Program Counter** | Jab process resume ho, wahi se continue kare jahan se rुका था |
| **CPU Registers** | Context switch par exact register values save/restore karne ke liye |
| **Scheduling Info** | Priority, scheduling queue pointers |
| **Memory Info** | Process ka memory address space kahan hai |
| **Accounting Info** | Kitna CPU time use ho chuka hai, limits |
| **I/O Status** | Kaunse files/devices allocated hain |

> Tip — "PCB kya hai" poochne par sirf definition mat likho — diagram bana kar kam se kam 6-7 fields list karo, har field ka ek line matlab bhi likho. Yeh guaranteed full marks wala question hai.

---

## System Programmer's View of Processes

System programmer process ko **OS resources ka consumer** ki tarah dekhta hai — usse concern hota hai:
- Process kaise create/destroy hota hai (`fork()`, `exit()` jaise system calls)
- Process kaise CPU, memory, I/O devices access karta hai
- Multiple processes ke beech isolation kaise maintain hoti hai (ek process dusre ka memory corrupt na kare)

---

## OS Services for Process Management

| Service | Kaam |
|---------|------|
| **Process Creation** | Naya process create karna (`fork`, `CreateProcess`) |
| **Process Termination** | Process ko safely khatam karna, resources release karna |
| **Scheduling** | Decide karna kaunsa process kab CPU paayega |
| **Synchronization** | Processes ke beech coordination (semaphores, locks) |
| **Communication (IPC)** | Processes ke beech data exchange (pipes, message queues, shared memory) |
| **Deadlock Handling** | Deadlock detect/prevent/avoid karna |

```
Process Management Services (OS ka role):

  Create → Schedule → Execute → Synchronize/Communicate → Terminate
```

> Warning — Process aur Program ko same samajhna common mistake hai. Program static hai (disk par file), Process dynamic hai (memory me running instance, apna PCB, state hota hai). Ek program ke multiple processes ek saath chal sakte hain (jaise 3 browser windows same `.exe` se).

> Example — Jab aap ek `.exe` file (program) ko double-click karte ho, OS uske liye PCB banata hai, memory allocate karta hai, PID assign karta hai — ab wo ek **process** ban jaata hai jo New → Ready → Running states se guzarega.
