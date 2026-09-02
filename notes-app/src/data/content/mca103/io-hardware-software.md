## I/O Devices & Device Controllers

I/O devices do broad categories me aate hain:

| Category | Description | Example |
|----------|-------------|---------|
| **Block Devices** | Data fixed-size blocks me store/transfer hota hai, random access possible | Disk, USB drive |
| **Character Devices** | Data character-by-character stream me transfer hota hai, sequential | Keyboard, mouse, printer |

**Device Controller** — ek hardware component (chip) jo actual electro-mechanical device aur computer system ke beech interface ka kaam karta hai. Controller ke paas apne **local registers** hote hain (status, control, data) jinse CPU communicate karta hai.

```
   CPU ◄──► Device Controller ◄──► Physical Device
              (registers:
               status, control, data)
```

> Socho Aise — Device Controller ek "remote control" jaisa hai jo CPU (user) aur actual TV (device) ke beech simple commands translate karta hai — CPU ko device ki internal mechanical complexity janne ki zaroorat nahi.

---

## Direct Memory Access (DMA) — Recap

Bulk data transfer (disk, network) ke liye CPU ko har byte involve karna inefficient hai. **DMA Controller** CPU ki jagah directly memory aur device ke beech transfer karta hai — CPU sirf setup (source, destination, count) karta hai aur end me interrupt milta hai.

```
CPU: DMA setup → doosra kaam karo → [Interrupt: transfer complete]
```

Yeh CPU ko free karta hai bulk transfers ke dauran — bade files/blocks ke liye best approach hai.

---

## Principles of I/O Software — Goals

I/O software design karte waqt yeh goals dhyan me rakhe jaate hain:

| Goal | Matlab |
|------|--------|
| **Device Independence** | Programs bina device-specific code ke kaam karein — same `read()` call kisi bhi disk/USB par chale |
| **Uniform Naming** | Files/devices ko consistent naming convention se access kiya jaaye (jaise `/dev/`) |
| **Error Handling** | Errors jitna possible ho low level par handle ho, upper layers ko pata bhi na chale |
| **Synchronous vs Asynchronous Transfers** | Dono types ke transfers support ho |
| **Buffering** | Data ko temporarily store karke speed mismatch handle karna |
| **Sharable vs Dedicated Devices** | Kuch devices (disk) share ho sakte hain, kuch (printer) dedicated access chahte hain |

---

## Layered I/O Software Stack

I/O software ko layers me organize karte hain — har layer apni responsibility handle karti hai aur neeche wali layer ki services use karti hai.

```
┌───────────────────────────────┐
│   User-Space I/O Software        │  ← library calls (jaise stdio)
├───────────────────────────────┤
│   Device-Independent I/O SW       │  ← naming, protection, buffering,
│                                    │     error reporting, allocation
├───────────────────────────────┤
│   Device Drivers                   │  ← device-specific code
├───────────────────────────────┤
│   Interrupt Handlers               │  ← device se interrupt aane par unblock karta hai driver ko
├───────────────────────────────┤
│   Hardware (Devices)                │
└───────────────────────────────┘
```

### Interrupt Handlers

Jab I/O operation complete hoti hai, device ek **interrupt** raise karta hai. Interrupt handler ka kaam:
1. Interrupting device identify karo
2. Waiting process/driver ko unblock karo
3. CPU ko scheduler ko wapas control do

Interrupt handlers ko **jitna chhota aur fast** rakha jaata hai — bhaari kaam driver ya upper layers me deferred kar diya jaata hai.

### Device Drivers

Har device type ke liye ek specific driver hota hai jo us device ke controller registers ke saath directly communicate karta hai (commands bhejta hai, status padhta hai). Driver device-specific hai lekin ek standard interface (open, read, write, close) upar wali layers ko provide karta hai.

```
Application → read() → Device-Independent Layer → Driver (device-specific) → Controller → Device
```

### Device-Independent I/O Software

Yeh layer common functionality provide karti hai jo saare devices ke liye same hoti hai:

- Uniform interfacing for device drivers
- Buffering
- Error reporting
- Allocating/releasing dedicated devices
- Naming (mapping symbolic device names to actual drivers)

### User-Space I/O Software

Kuch I/O functionality libraries ke through user space me implement hoti hai (jaise C ki `stdio` library — `printf`, `scanf`) — yeh system calls ko wrap karke convenient interface deti hai, spooling jaisi services bhi yahan handle ho sakti hain (jaise print spooler).

> Yaad Rakho — Layer order neeche se upar: **Hardware → Interrupt Handler → Device Driver → Device-Independent Software → User-Space Software**. Diagram yaad rakhna is topic ka sabse scoring part hai.

> Tip — "Principles of I/O Software" poochne par pehle Goals list karo, phir layered diagram banao, phir har layer ka ek-ek line explanation likho — yeh structure 10-mark question ke liye perfect hai.

> Warning — Device Driver aur Device-Independent Software ko mix mat karo — Driver device ke hardware-specific detail handle karta hai (har device type ka alag driver hota hai), jabki Device-Independent layer saare devices ke liye **common** operations (buffering, naming, error handling) handle karti hai.
