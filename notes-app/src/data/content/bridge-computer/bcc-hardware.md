## Hardware Components — Input, Output Aur Storage Devices

### Computer System Ke Do Bade Parts

| Component | Matlab |
|-----------|--------|
| **Hardware** | Physical parts jo tum chhoo sakte ho (keyboard, monitor, CPU box) |
| **Software** | Instructions/programs jo hardware ko chalate hain (ye chhoo nahi sakte) |

> Socho Aise — Hardware body hai, Software soul hai. Body bina soul ke kuch nahi kar sakti, aur soul ko rehne ke liye body chahiye.

---

### Input Devices — Data Andar Daalne Ke Liye

Input device wo hardware hai jo **data ko computer ke andar bhejta hai**.

| Device | Kaam |
|--------|------|
| **Keyboard** | Text/characters type karna |
| **Mouse** | Pointer move karna, click/select karna |
| **Scanner** | Physical document ko digital image me convert karna |
| **Microphone** | Awaaz record karna |
| **Webcam** | Video capture karna |
| **Joystick** | Gaming input (direction/movement control) |
| **Light Pen** | Screen par direct draw/select karne ke liye (pen jaisi device) |
| **Barcode Reader** | Product ke barcode ko scan karke uski details nikalna (shop billing me) |
| **Touchpad** | Laptop me mouse ka kaam finger se karna |
| **OMR (Optical Mark Reader)** | Bubble-sheet answers (jaise MCQ exam sheets) padhta hai |

> Yaad Rakho — Exam me "any 5 input devices" poocha jaaye toh Keyboard, Mouse, Scanner, Microphone, Joystick — ye 5 sabse safe aur common answer hain.

---

### Output Devices — Result Bahar Dikhane Ke Liye

Output device wo hardware hai jo **processed data user ko dikhata/sunata hai**.

| Device | Kaam |
|--------|------|
| **Monitor** | Screen par visual output dikhana |
| **Printer** | Paper par hard copy print karna |
| **Plotter** | Bade diagrams/graphs print karna (engineering drawings, maps) |
| **Speaker** | Audio output dena |
| **Projector** | Bade screen/wall par output display karna (classroom, presentation) |
| **Headphone** | Personal audio output |

> Yaad Rakho — Kuch devices **dono** ho sakte hain — jaise Touchscreen (input bhi, output bhi). Exam me "input aur output dono" wale devices poochhe jaate hain — Touchscreen aur Modem yaad rakho.

---

### Memory Units — Bit Se Petabyte Tak

Computer memory bhi ek fixed hierarchy me measure hoti hai — chhote unit se bade unit tak, har agla unit pichhle se **1024 guna** bada hota hai:

| Unit | Full Form | Relationship |
|------|-----------|----------------|
| **Bit** | Binary Digit | Sabse chhota unit — sirf 0 ya 1 |
| **Byte** | 8 Bits | 1 Byte = 8 Bits |
| **KB** | Kilobyte | 1 KB = 1024 Bytes |
| **MB** | Megabyte | 1 MB = 1024 KB |
| **GB** | Gigabyte | 1 GB = 1024 MB |
| **TB** | Terabyte | 1 TB = 1024 GB |
| **PB** | Petabyte | 1 PB = 1024 TB |

```
Bit → Byte → KB → MB → GB → TB → PB
 (×8)  (×1024) (×1024) (×1024) (×1024) (×1024)
```

> Example — Ek simple text character (jaise 'A') store karne ke liye 1 Byte lagta hai. Ek HD movie ka size roughly 1-2 GB hota hai, aur ek bada data center ka storage PB (Petabytes) me measure hota hai.

> Yaad Rakho — Sabhi conversions **1024** ka multiple hain (kyunki 2¹⁰ = 1024), 1000 ka nahi — ye common confusion point hai, exam me exact "1024" likhna zaroori hai.

---

### Storage Devices — Data Ko Save Karna

| Storage Type | Kya Hota Hai | Example | Speed |
|---------------|----------------|---------|--------|
| **Primary Storage** | CPU ke bahut paas, temporary, fast | RAM, Cache | Bahut fast |
| **Secondary Storage** | Permanent storage, bada size | Hard Disk, SSD, Pen Drive | Slow (par permanent) |

```
┌─────────────────────────────────────────────┐
│              Storage Hierarchy                │
├─────────────────────────────────────────────┤
│  Register  →  Fastest, sabse chhota, CPU ke   │
│               andar hi hota hai                │
│  Cache     →  RAM se fast, CPU ke paas         │
│  RAM       →  Primary memory, volatile          │
│               (power jaane par data gayab)     │
│  Hard Disk →  Secondary, permanent storage      │
└─────────────────────────────────────────────┘
```

> Example — RAM ek "working table" jaisi hai — jo kaam abhi chal raha hai wo table par hota hai (fast access), par table ki jagah limited hai. Hard Disk ek "almari" jaisi hai — bahut saara samaan store ho sakta hai, par nikaalne me thoda time lagta hai.

> Warning — RAM **volatile** hai — power off hote hi RAM ka saara data delete ho jaata hai! Isiliye important kaam save karke rakho Hard Disk/SSD (jo **non-volatile** hai) me — power jaane par bhi data safe rehta hai.

---

### Secondary Storage Types — Comparison

Aajkal secondary storage ke bahut saare options hain, aur exam me unka comparison poocha jaata hai:

| Storage | Speed | Cost (per GB) | Portability | Notes |
|---------|-------|------------------|----------------|-------|
| **HDD (Hard Disk Drive)** | Medium (mechanical spinning disk) | Sabse sasta | Kam (bada, bhaari) | Zyada storage kam price me, par moving parts hone se drop hone par damage ho sakta hai |
| **SSD (Solid State Drive)** | Bahut fast (no moving parts) | Mehenga | Medium | Laptop ko fast boot aur load karne me help karta hai |
| **Pen Drive (USB Flash Drive)** | Medium-fast | Medium | Bahut zyada (chhota, jeb me aa jaaye) | File transfer ke liye sabse common portable device |
| **CD/DVD** | Slow | Sasta | Medium (halka par scratch ho sakta hai) | Ab kam use hota hai, purane data backup/movies ke liye tha |

> Yaad Rakho — **SSD** sabse fast hai kyunki usme koi moving/spinning part nahi hota (flash memory chips use hoti hain), jabki **HDD** me ek spinning disk aur moving read/write head hota hai — isiliye HDD slow aur thoda fragile hota hai.

---

### Common Ports Aur Connectors

Computer ke bahar alag-alag "sockets" hote hain jinse devices connect hote hain:

| Port | Full Form | Kis Ke Liye Use Hota Hai |
|------|-----------|------------------------------|
| **USB** | Universal Serial Bus | Pen drive, mouse, keyboard, external hard disk connect karne ke liye |
| **HDMI** | High-Definition Multimedia Interface | Monitor/TV/Projector ko video+audio ke saath connect karna |
| **Ethernet (RJ45)** | — | Wired internet/LAN cable connect karna |
| **VGA** | Video Graphics Array | Purane monitors ko video output dene ke liye |
| **Audio Jack (3.5mm)** | — | Headphone/speaker connect karna |

> Example — USB port sabse zyada versatile hai — usi ek port se mouse, keyboard, pen drive, phone charging cable — sab kuch connect ho jaata hai, isiliye ye sabse common port ban gaya hai.

> Tip — Exam me Primary vs Secondary storage difference table banao — Volatility, Speed, Cost per GB, Access aur Example columns rakho.

---

### Motherboard — Sab Kuch Jodne Wala Board

**Motherboard** wo main circuit board hai jispar CPU, RAM, storage aur baaki sabhi components physically laga (mount) hote hain aur ek dusre se connect hote hain.

| Component Jo Motherboard Par Hota Hai | Kaam |
|------------------------------------------|------|
| CPU Socket | Processor yahan laga hota hai |
| RAM Slots | Memory sticks yahan lagte hain |
| Expansion Slots (PCIe) | Graphics card jaisi additional cards lagane ke liye |
| BIOS Chip | System startup instructions store karta hai |

> Socho Aise — Motherboard ek "society ki main road" jaisa hai — CPU, RAM, Storage, sab alag-alag "ghar" hain jo isi road (motherboard ke circuits) se aapas me connected hote hain aur data exchange karte hain.

---

### BIOS/UEFI — Computer Start Hone Ka Pehla Step

**BIOS (Basic Input Output System)** ek firmware hai jo motherboard par hi store hota hai — computer on karte hi sabse pehle yahi chalta hai.

> Example — Jab tum power button dabate ho, BIOS sabse pehle **POST (Power-On Self-Test)** karta hai — check karta hai ki RAM, keyboard, hard disk sab sahi se connected hain ya nahi, uske baad hi OS load hona shuru hota hai.

> Yaad Rakho — BIOS aur OS alag hain — BIOS hardware ko "jagane" ka pehla kaam karta hai, uske baad control OS (Windows/Linux) ko de deta hai jo actual user interface deta hai.

---

### SMPS (Power Supply)

**SMPS (Switched-Mode Power Supply)** computer ke andar wo unit hai jo bijli ke AC current ko computer components ke liye zaroori DC current me convert karti hai, aur sahi voltage me har part tak pahunchati hai.

> Warning — Kabhi bhi computer ko galat/damaged power supply ke saath mat chalao — ye motherboard aur baaki components ko permanently damage kar sakta hai.
