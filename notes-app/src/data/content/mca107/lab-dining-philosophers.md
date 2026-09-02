## Aim

Dining Philosophers Problem ko semaphores (ek per fork/chopstick) use karke solve karna, jo deadlock avoid kare.

---

### Problem Statement

5 philosophers ek round table par baithe hain. Har philosopher ke beech ek fork (chopstick) rakha hai — total 5 forks. Har philosopher ko khana khaane ke liye **dono taraf ke forks** (left aur right) uthane padte hain. Khaane ke baad dono forks wapas rakh deta hai. Challenge: sabko fair chance milna chahiye, aur **deadlock nahi hona chahiye**.

**Naive solution deadlock kyun deta hai?** Agar sab 5 philosophers ek saath apna **left fork** uthaa lein, toh koi bhi right fork nahi utha payega (kyunki wo unke right wale philosopher ka left fork hai, jo already uठाया hua hai) — sab hamesha ke liye wait karte reh jaayenge. Ye classic **Circular Wait** condition hai (deadlock ki 4 necessary conditions me se ek).

**Solution used here — Resource Hierarchy (asymmetric ordering):** Sabhi philosophers **lower-numbered fork pehle** uthaayein (chahe wo unka left ho ya right), phir doosra fork. Isse circular wait ka pattern tootch jaata hai kyunki kam se kam ek philosopher (jiske paas sabse bada-numbered fork hoga uske right me) different order me forks uthaayega.

---

### Program: Dining Philosophers using Semaphores

> Compile karne ke liye: `gcc dining_philosophers.c -lpthread -o dp`

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define N 5   // number of philosophers/forks

sem_t forks[N];   // one semaphore per fork, each initialized to 1 (available)

void* philosopher(void* arg) {
    int id = *(int*) arg;

    // Determine left and right fork indices for this philosopher
    int left = id;
    int right = (id + 1) % N;

    // Resource hierarchy solution: always pick up the LOWER-numbered fork first
    int firstFork = (left < right) ? left : right;
    int secondFork = (left < right) ? right : left;

    for (int round = 0; round < 2; round++) {
        printf("Philosopher %d is thinking...\n", id);
        usleep(100000);

        printf("Philosopher %d is hungry, trying to pick forks %d and %d\n",
               id, firstFork, secondFork);

        sem_wait(&forks[firstFork]);    // pick up lower-numbered fork
        printf("Philosopher %d picked up fork %d\n", id, firstFork);

        sem_wait(&forks[secondFork]);   // pick up higher-numbered fork
        printf("Philosopher %d picked up fork %d\n", id, secondFork);

        printf("Philosopher %d is EATING (round %d)\n", id, round + 1);
        usleep(150000);

        sem_post(&forks[secondFork]);   // put down forks
        sem_post(&forks[firstFork]);
        printf("Philosopher %d put down forks %d and %d\n", id, firstFork, secondFork);
    }

    return NULL;
}

int main() {
    pthread_t phil[N];
    int ids[N];

    for (int i = 0; i < N; i++)
        sem_init(&forks[i], 0, 1);   // each fork starts available (value = 1)

    for (int i = 0; i < N; i++) {
        ids[i] = i;
        pthread_create(&phil[i], NULL, philosopher, &ids[i]);
    }

    for (int i = 0; i < N; i++)
        pthread_join(phil[i], NULL);

    for (int i = 0; i < N; i++)
        sem_destroy(&forks[i]);

    printf("All philosophers finished eating. No deadlock occurred.\n");
    return 0;
}
```

**Sample Output** (exact interleaving varies har run me, thread scheduling ke hisaab se)

```
Philosopher 0 is thinking...
Philosopher 1 is thinking...
Philosopher 0 is hungry, trying to pick forks 0 and 1
Philosopher 0 picked up fork 0
Philosopher 1 is hungry, trying to pick forks 1 and 2
Philosopher 0 picked up fork 1
Philosopher 0 is EATING (round 1)
Philosopher 2 is hungry, trying to pick forks 2 and 3
Philosopher 2 picked up fork 2
...
Philosopher 0 put down forks 0 and 1
...
All philosophers finished eating. No deadlock occurred.
```

---

### Kaise Ye Solution Deadlock Avoid Karta Hai

Har fork ek semaphore hai jiski initial value `1` hai (mutual exclusion — ek time par ek hi philosopher ek fork use kar sakta hai). Naive approach me har philosopher **apna left fork pehle** uthaata, jisse sab philosophers ek saath ek fork pakadke doosre ka wait karte reh sakte the (circular wait → deadlock).

Is solution me, philosopher **hamesha lower-numbered fork pehle** uthata hai — chahe wo uska "left" ho ya "right". Isse table ka sirf ek philosopher (jiska left fork sabse zyada number wala hai, jaise philosopher 4 ke case me fork 4 aur fork 0) **opposite order** me forks uthata hai. Ye asymmetry circular wait chain ko todh deti hai — kam se kam ek philosopher hamesha apna doosra fork uthaane me safal ho jaayega, jisse deadlock nahi ban paata.

> Yaad Rakho — Dining Philosophers deadlock avoid karne ke aur bhi tarike hain: (1) sirf 4 philosophers ko ek saath forks uthaane do (ek ko wait karao — "limiting concurrent diners"), (2) philosopher dono forks ek hi atomic step me uthaaye (all-or-nothing), (3) asymmetric solution (jo humne yahan use kiya — resource hierarchy / ordering).

> Tip — Viva ka common question: "Starvation aur Deadlock me kya farak hai?" — Deadlock me processes permanently block ho jaate hain (kabhi progress nahi hoti). Starvation me process technically block nahi hota, lekin use resources baar baar kisi aur ko priority milne ki wajah se kabhi mauka hi nahi milta — Dining Philosophers ka resource-hierarchy solution deadlock toh avoid karta hai, lekin starvation ka risk theoretically reh sakta hai agar scheduling unfair ho.

> Warning — Agar har philosopher apna **left fork hi pehle** uthaaye (bina kisi ordering rule ke), toh ye code deadlock-prone ban jaayega — isiliye is program me `firstFork`/`secondFork` ko explicitly lower/higher number ke hisaab se decide kiya gaya hai, na ki hamesha "left, phir right" ke hisaab se.
