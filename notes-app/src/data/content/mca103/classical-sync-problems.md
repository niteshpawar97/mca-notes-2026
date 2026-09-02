## Classical Synchronization Problems Kyun Padhte Hain?

Yeh problems real-world synchronization scenarios ko represent karte hain — inhe samajhna sikhata hai ki semaphores/monitors se deadlock aur race condition avoid karke sahi tareeke se resource-sharing kaise design karein.

---

## Dining Philosophers Problem

### Setup

5 philosophers ek round table par baithe hain. Har philosopher ke beech ek chopstick hai (total 5 chopsticks). Khaane ke liye philosopher ko apne **dono side ke chopsticks** chahiye. Philosopher sochta hai, phir khaata hai, cycle repeat hota hai.

```
          P0
      C4 ╱  ╲ C0
        ╱     ╲
     P4         P1
      │           │
     C3         C1
        ╲     ╱
      P3 ╲  ╱ P2
          C2
```

### Deadlock Risk

Agar **sabhi philosophers ek saath apna left chopstick uthaa lein**, toh koi bhi right chopstick nahi utha payega — sab infinite wait karte reh jaayenge. Yeh **deadlock** hai (circular wait condition ban jaati hai).

### Semaphore-Based Solution

```c
semaphore chopstick[5] = {1,1,1,1,1};   // har chopstick ek binary semaphore

Philosopher i:
do {
    wait(chopstick[i]);              // left uthao
    wait(chopstick[(i+1) % 5]);      // right uthao
    // ... eating ...
    signal(chopstick[i]);
    signal(chopstick[(i+1) % 5]);
    // ... thinking ...
} while(true);
```

**Deadlock avoid karne ke tareeke:**
- Max 4 philosophers ko ek saath table par baithne do (ek hamesha wait karega, circular wait tootega)
- Ek philosopher ko dono chopsticks **ek saath (atomically)** uthaane do, ek-ek karke nahi
- Odd-numbered philosophers pehle left, even-numbered pehle right chopstick uthaayein (asymmetry se circular wait toot jaata hai)

> Socho Aise — Dining Philosophers dikhaata hai ki kaise limited shared resources (chopsticks) ko manage na karne par sab process/thread ek dusre ka wait karte reh jaate hain — bilkul traffic jam jaisa jahan sab intersection block kar dete hain.

---

## Bounded Buffer / Producer-Consumer Problem

### Setup

**Producer** items generate karke ek fixed-size buffer me daalta hai. **Consumer** buffer se items nikaal kar use karta hai. Buffer ka size limited hai — agar full ho toh producer wait kare, agar empty ho toh consumer wait kare.

```
Producer ──► [ Buffer: fixed size N ] ──► Consumer
              ┌─┬─┬─┬─┬─┬─┐
              │ │ │ │ │ │ │
              └─┴─┴─┴─┴─┴─┘
```

### Semaphore Solution

Teen semaphores use hote hain:

| Semaphore | Initial Value | Kaam |
|-----------|-----------------|------|
| `mutex` | 1 | Buffer ko mutual exclusion se protect karta hai |
| `empty` | N (buffer size) | Kitne empty slots hain track karta hai |
| `full` | 0 | Kitne filled slots hain track karta hai |

```c
// Producer
do {
    produce item;
    wait(empty);      // empty slot chahiye
    wait(mutex);       // buffer lock karo
    add item to buffer;
    signal(mutex);
    signal(full);      // ek full slot badh gaya
} while(true);

// Consumer
do {
    wait(full);        // filled slot chahiye
    wait(mutex);
    remove item from buffer;
    signal(mutex);
    signal(empty);     // ek empty slot badh gaya
    consume item;
} while(true);
```

> Yaad Rakho — `empty` aur `full` **counting semaphores** hain (buffer capacity track karte hain), aur `mutex` **binary semaphore** hai (sirf mutual exclusion ke liye). Yeh teen semaphore combination hi is problem ka standard solution hai — exam me exactly yehi likhna hai.

> Example — Buffer size = 5, initially empty. `empty=5, full=0, mutex=1`. Producer 3 items daalta hai — ab `empty=2, full=3`. Consumer 2 items nikaalta hai — ab `empty=4, full=1`. Agar buffer full ho jaaye (`empty=0`), producer automatically block ho jaayega jab tak consumer space na banaaye.

---

## Sleeping Barber Problem

### Setup

Ek barbershop me ek barber, ek barber chair, aur N waiting chairs hain. Agar koi customer nahi hai, barber so jaata hai. Customer aata hai — agar barber so raha hai toh use jagata hai; agar barber busy hai aur waiting chair khali hai toh baith kar wait karta hai; agar saari waiting chairs full hain toh customer chala jaata hai.

```
[Sleeping Barber] ◄── wake up ── [New Customer]
        │
   [Barber Chair] ← cutting hair
        │
[Waiting Chairs: N] ← customers queue
```

**Core idea** — yeh **bounded-buffer problem ka hi variant** hai jahan waiting chairs buffer slots hain. Semaphores use hote hain: `customers` (kitne customer wait kar rahe), `barbers` (barber free hai ya nahi), aur `mutex` (waiting count protect karne ke liye).

> Socho Aise — Sleeping Barber ek "single-server queue with limited waiting room" jaisa real system model karta hai — jaise ek call center jisme limited hold lines hain, aur agar sab busy ho toh caller ko "please try again later" milta hai.

---

## Readers-Writers Problem

### Setup

Ek shared data (jaise database) ko multiple processes read kar sakte hain **simultaneously** (read se data change nahi hota), lekin **write karte waqt sirf ek hi process** access kar sakta hai aur us waqt koi doosra reader/writer nahi hona chahiye.

| Rule | Allowed? |
|------|----------|
| Multiple Readers ek saath | ✅ Haan |
| Ek Writer akela | ✅ Haan |
| Reader + Writer ek saath | ❌ Nahi |
| Multiple Writers ek saath | ❌ Nahi |

### Solution Sketch (Readers-Priority)

```c
semaphore mutex = 1, wrt = 1;
int read_count = 0;

// Reader
wait(mutex);
read_count++;
if (read_count == 1) wait(wrt);   // pehla reader writer ko block karta hai
signal(mutex);
   // ... reading ...
wait(mutex);
read_count--;
if (read_count == 0) signal(wrt); // last reader writer ko unblock karta hai
signal(mutex);

// Writer
wait(wrt);
   // ... writing ...
signal(wrt);
```

> Warning — Simple readers-priority solution me **writer starvation** ho sakta hai — agar readers continuously aate rahen, writer hamesha wait karta reh sakta hai. Isko fix karne ke liye "fair" ya "writer-priority" solutions design kiye jaate hain jisme ek waiting writer aane ke baad naye readers ko block kar diya jaata hai.

> Tip — Chaaron problems (Dining Philosophers, Producer-Consumer, Sleeping Barber, Readers-Writers) me se exam me koi bhi ek "explain with semaphore solution" wale format me poocha ja sakta hai — har problem ka core idea + semaphore variables + short code sketch yaad rakho, poora code likhna zaroori nahi hota, logic clear hona chahiye.
