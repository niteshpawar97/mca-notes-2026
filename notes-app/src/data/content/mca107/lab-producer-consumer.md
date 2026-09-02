## Aim

Producer-Consumer problem ko POSIX semaphores (`sem_init`, `sem_wait`, `sem_post`) aur ek circular buffer use karke solve karna.

---

### Concept

Producer-Consumer ek **classic synchronization problem** hai: Producer thread ek shared buffer me items daalta rehta hai, Consumer thread wahi se items nikalta rehta hai. Problem ye hai ki:

- Producer tab wait kare jab buffer **full** ho (jagah nahi hai).
- Consumer tab wait kare jab buffer **empty** ho (kuch nahi hai lene ko).
- Dono ek saath buffer ko access na karein (race condition avoid karni hai).

Isko solve karne ke liye **3 semaphores** use karte hain:

| Semaphore | Kaam |
|-----------|------|
| `empty` | Buffer me kitni **khaali** jagah hai (initially = buffer size) — producer isko `wait` karta hai insert se pehle |
| `full` | Buffer me kitne **items** hain (initially = 0) — consumer isko `wait` karta hai remove se pehle |
| `mutex` | Binary semaphore (initially = 1) — buffer ko access karte time mutual exclusion ensure karta hai |

---

### Program: Producer-Consumer using Semaphores (Circular Buffer)

> Compile karne ke liye: `gcc producer_consumer.c -lpthread -o pc` (POSIX threads aur semaphore library link karni padti hai)

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define BUFFER_SIZE 5
#define ITEMS_TO_PRODUCE 10

int buffer[BUFFER_SIZE];
int in = 0, out = 0;   // circular buffer indices

sem_t empty;   // counts empty slots
sem_t full;    // counts filled slots
sem_t mutex;   // mutual exclusion for buffer access

void* producer(void* arg) {
    for (int i = 1; i <= ITEMS_TO_PRODUCE; i++) {
        sem_wait(&empty);     // wait if buffer is full
        sem_wait(&mutex);     // enter critical section

        buffer[in] = i;
        printf("Producer produced item %d at index %d\n", i, in);
        in = (in + 1) % BUFFER_SIZE;

        sem_post(&mutex);     // leave critical section
        sem_post(&full);      // one more item available

        usleep(100000);       // simulate production time
    }
    return NULL;
}

void* consumer(void* arg) {
    for (int i = 1; i <= ITEMS_TO_PRODUCE; i++) {
        sem_wait(&full);      // wait if buffer is empty
        sem_wait(&mutex);     // enter critical section

        int item = buffer[out];
        printf("Consumer consumed item %d from index %d\n", item, out);
        out = (out + 1) % BUFFER_SIZE;

        sem_post(&mutex);     // leave critical section
        sem_post(&empty);     // one more empty slot available

        usleep(150000);       // simulate consumption time
    }
    return NULL;
}

int main() {
    pthread_t prodThread, consThread;

    sem_init(&empty, 0, BUFFER_SIZE);   // all slots initially empty
    sem_init(&full, 0, 0);              // no items initially
    sem_init(&mutex, 0, 1);             // binary semaphore, unlocked

    pthread_create(&prodThread, NULL, producer, NULL);
    pthread_create(&consThread, NULL, consumer, NULL);

    pthread_join(prodThread, NULL);
    pthread_join(consThread, NULL);

    sem_destroy(&empty);
    sem_destroy(&full);
    sem_destroy(&mutex);

    printf("All items produced and consumed.\n");
    return 0;
}
```

**Sample Output** (exact interleaving varies har run me, thread scheduling ke hisaab se)

```
Producer produced item 1 at index 0
Consumer consumed item 1 from index 0
Producer produced item 2 at index 1
Producer produced item 3 at index 2
Consumer consumed item 2 from index 1
Producer produced item 4 at index 3
Consumer consumed item 3 from index 2
...
All items produced and consumed.
```

---

### Kaise Race Condition Avoid Hoti Hai

- `empty` semaphore producer ko **rokta** hai jab buffer full ho jaaye — `sem_wait(&empty)` tab tak block karega jab tak consumer koi item nahi le leta (jo `sem_post(&empty)` call karega).
- `full` semaphore consumer ko **rokta** hai jab buffer empty ho — similarly `sem_wait(&full)` block karega jab tak producer koi item nahi daal deta.
- `mutex` ensure karta hai ki `buffer[in]`/`buffer[out]` ko update karte waqt (critical section) sirf ek thread (producer YA consumer) hi ek time par access kare — isse do threads ek hi saath `in`/`out` index modify nahi kar payenge (jo data corruption ka reason banta).

> Yaad Rakho — `wait()` (P operation) semaphore value ko decrement karta hai, agar value 0 ho jaaye toh thread block ho jaata hai. `post()` (V operation) value ko increment karta hai aur kisi waiting thread ko wake up kar deta hai. `sem_wait`/`sem_post` POSIX naming hai, kai jagah `P()`/`V()` bhi likha milta hai (Dijkstra ke original naming se).

> Tip — Viva me pucha jaata hai: "Agar sirf `mutex` use karein, `empty`/`full` na use karein toh kya hoga?" Answer: Sirf mutex se mutual exclusion toh mil jaayegi (ek time par ek hi thread buffer access karega), lekin producer/consumer ko pata nahi chalega ki buffer full/empty hai — busy-waiting (CPU cycles waste) karna padega ya buffer overflow/underflow ho sakta hai.

> Warning — `sem_wait(&mutex)` se pehle hamesha `sem_wait(&empty)` ya `sem_wait(&full)` call karo (order important hai!) — agar order ulta kar diya (`mutex` pehle lock kar liya), toh **deadlock** ho sakta hai: producer `mutex` lock kar ke `empty` ka wait karega, lekin consumer `mutex` release hi nahi kar payega item consume karne ke liye.
