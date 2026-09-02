## Disk Hardware Basics

Hard disk me data **concentric circular tracks** par store hota hai, aur har track **sectors** me divide hota hai. Disk access time in factors par depend karta hai:

| Component | Matlab |
|-----------|--------|
| **Seek Time** | Read/write head ko target track tak move karne me lagne wala time |
| **Rotational Latency** | Disk ghoomkar sahi sector head ke neeche laane me lagne wala time |
| **Transfer Time** | Actual data transfer hone me lagne wala time |

```
Total Access Time = Seek Time + Rotational Latency + Transfer Time
```

**Seek time sabse zyada significant hota hai** — isliye disk scheduling algorithms mainly seek time minimize karne par focus karte hain (head movement kam se kam karna).

> Socho Aise — Disk head ek "elevator" jaisa hai jo alag-alag floors (tracks) par jaata hai. Disk scheduling algorithm decide karta hai elevator kis order me floors visit kare taaki total travel (up-down movement) minimum ho.

---

## FCFS (First Come First Serve)

Requests jis order me aayi hain, usi order me service hoti hai. Simple lekin **head movement zyada ho sakta hai** kyunki koi optimization nahi hoti.

> Example — Requests: `98, 183, 37, 122, 14, 124, 65, 67`, Head starts at **53**

```
Order:  53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67

Movement:
|53-98| + |98-183| + |183-37| + |37-122| + |122-14| + |14-124| + |124-65| + |65-67|
= 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2
= 640 tracks total
```

---

## SSTF (Shortest Seek Time First)

Head ke **current position se sabse nazdeek** request ko pehle service karte hain. FCFS se better performance, lekin **starvation** ho sakti hai far-away requests ke liye.

> Example — Same requests, Head at 53. Nearest first: 53→65→67→37→14→98→122→124→183 (dekho har step par nazdeek wala choose hota hai)

```
53 → 65 (12) → 67 (2) → 37 (30) → 14 (23) → 98 (84) → 122 (24) → 124 (2) → 183 (59)
Total = 12+2+30+23+84+24+2+59 = 236 tracks
```

---

## SCAN (Elevator Algorithm)

Head ek direction me move karta hai (jaise upar), raaste me jo bhi requests milti hain service karte jaata hai, disk ke **end tak** jaake wapas doosri direction me move karta hai. Elevator jaisa behavior isliye "Elevator Algorithm" bhi kehte hain.

> Example — Requests: `98,183,37,122,14,124,65,67`, Head=53, moving **towards larger values**, disk size 0-199

```
53 → 65 → 67 → 98 → 122 → 124 → 183 → 199(end) → 37 → 14

Movement:
(65-53)+(67-65)+(98-67)+(122-98)+(124-122)+(183-124)+(199-183)+(199-37)+(37-14)
= 12+2+31+24+2+59+16+162+23
= 331 tracks
```

---

## C-SCAN (Circular SCAN)

SCAN jaisa hai lekin ek direction me end tak jaake, wapas **seedha starting point (0) tak jump kar jaata hai** bina service kiye, phir dobara same direction me scan karta hai. Isse waiting time zyada **uniform** hota hai (SCAN me jo direction abhi service hui thi wahan turant dobara nahi jaate).

> Example — Same requests, Head=53, moving towards larger values, disk 0-199

```
53 → 65 → 67 → 98 → 122 → 124 → 183 → 199(end) → 0(jump) → 14 → 37

Movement:
(65-53)+(67-65)+(98-67)+(122-98)+(124-122)+(183-124)+(199-183)+(199-0)+(14-0)+(37-14)
= 12+2+31+24+2+59+16+199+14+23
= 382 tracks   (jump wala part costly hai but distribution fair hai)
```

---

## LOOK and C-LOOK

SCAN/C-SCAN ka improvement — head disk ke **actual end (0 ya max)** tak nahi jaata, balki **last request tak** jaake hi wapas mudta hai (agar aage koi request nahi hai toh end tak jaana waste hai).

| Algorithm | Behavior |
|-----------|----------|
| **LOOK** | SCAN jaisa, but end tak jaane ke bajaye last request par hi direction reverse |
| **C-LOOK** | C-SCAN jaisa, but end tak jaane ke bajaye last request se seedha first request tak jump |

> Example (LOOK) — Same requests, Head=53, moving towards larger: `53→65→67→98→122→124→183→37→14` (199 tak nahi jaata, 183 ke baad seedha 37 par mudta hai)

```
Movement = (65-53)+(67-65)+(98-67)+(122-98)+(124-122)+(183-124)+(183-37)+(37-14)
         = 12+2+31+24+2+59+146+23 = 299 tracks
```

---

## Comparison Table

| Algorithm | Strategy | Head Movement | Starvation Risk | Best Use Case |
|-----------|----------|------------------|---------------------|-----------------|
| **FCFS** | Order of arrival | High, unpredictable | Nahi | Light load, simplicity chahiye |
| **SSTF** | Nearest request first | Kam (par uneven) | Haan (far requests starve) | Moderate load |
| **SCAN** | End tak jaake wapas (elevator) | Moderate | Kam | Heavy, uniform load |
| **C-SCAN** | Ek direction, phir jump to start | Thoda zyada (jump cost) | Bahut kam (uniform wait) | Jab fairness zaroori ho |
| **LOOK** | SCAN jaisa but last request tak hi | SCAN se kam | Kam | Practical improvement over SCAN |
| **C-LOOK** | C-SCAN jaisa but last request tak hi | C-SCAN se kam | Bahut kam | Modern disk systems me common |

> Yaad Rakho — Numerical solve karte waqt hamesha **direction specify karo** (increasing ya decreasing) — SCAN, C-SCAN, LOOK, C-LOOK sabka answer direction par depend karta hai. Bina direction diye numerical incomplete maana jaata hai.

> Tip — Har algorithm ke liye ek number line diagram banao jisme head ka path arrows se dikhao — yeh visually turant samajh aata hai aur examiner ko bhi clarity milti hai, partial marks guaranteed.

---

## Other Concepts

### Error Handling
Disk errors (bad sectors, seek errors) ko controller level par retry karke ya spare sectors allocate karke handle kiya jaata hai — OS ko transparent rakha jaata hai jahan tak possible ho.

### Track-at-a-Time Caching
Jab ek sector read hota hai, controller **poora track** cache kar leta hai — kyunki agla request usi track ke doosre sector ka ho sakta hai, isse rotational latency bachti hai future requests ke liye.

### RAM Disks
Ek portion of RAM ko disk ki tarah simulate kiya jaata hai — bahut fast access (seek/rotational latency zero) lekin **volatile** (power off hone par data gayab).

> Warning — RAM Disk fast hoti hai lekin **persistent storage nahi hai** — power failure ya reboot par saara data lost ho jaata hai, isliye critical data ke liye use nahi karte.
