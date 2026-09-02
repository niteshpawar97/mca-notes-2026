## Basic Data Structures — Quick Refresher

MCA 101 me hum stacks, queues, arrays, aur trees detail me padh chuke hain (data structures wale units) — yaha sirf ek quick refresher hai kyunki discrete math ke context me inka basic understanding zaroori hai.

```
Array       — fixed-size, contiguous memory me elements, index se access
Stack       — LIFO (Last In First Out) — jaise plates ka stack
Queue       — FIFO (First In First Out) — jaise line/queue me khade log
Hash Table  — key-value pairs, fast lookup using a hash function
Tree        — hierarchical structure, root se leaves tak (parent-child relation)
```

> Tip — Agar in data structures ki detail chahiye (operations, implementation, code), MCA 101 ke Unit 3, 4, 5 notes dekho — wahan Stack, Queue, Linked List, aur Tree poori detail me cover kiye gaye hain. Yaha hum inhe sirf discrete math ke "graph theory" foundation ke liye refresh kar rahe hain.

---

## Graphs — The Basics

Graph ek mathematical structure hai jo **objects (vertices)** aur unke beech ke **relationships (edges)** ko represent karta hai. Bahut saari real-world problems (social networks, maps, computer networks) graphs se model hoti hain.

```
G = (V, E)

V = set of vertices (nodes)          — jaise cities
E = set of edges (connections)       — jaise roads between cities

Example:  V = {A, B, C, D}
          E = {(A,B), (B,C), (C,D), (D,A)}
```

> Socho Aise — Graph ek social network jaisa hai — vertices log hain, edges "friendship connections" hain. Kaun kis se connected hai, ye graph batata hai.

### Types of Graphs

```
Undirected Graph — edges ki koi direction nahi (A-B matlab B-A bhi)
Directed Graph (Digraph) — edges ki direction hoti hai (A→B alag hai B→A se)
Weighted Graph — har edge ka ek "cost/weight" hota hai (jaise distance)
```

---

## Degree of a Vertex

Vertex ka **degree** us vertex se connected edges ki count hai.

```
Undirected graph:
deg(v) = number of edges touching vertex v

Directed graph:
in-degree(v)  = number of edges coming INTO v
out-degree(v) = number of edges going OUT of v
```

**Handshaking Theorem:** Sabhi vertices ke degrees ka sum, hamesha edges ki count ka **2 guna** hota hai (kyunki har edge do vertices ko touch karta hai):

```
Σ deg(v) = 2 × |E|
```

> Yaad Rakho — Handshaking Theorem: sum of all degrees = 2 × (number of edges). Exam me ye formula-based verification questions me kaam aata hai.

### Worked Example

```
Graph: V = {A, B, C, D}, E = {(A,B), (B,C), (C,D), (D,A), (A,C)}

deg(A) = 3   (connected to B, D, C)
deg(B) = 2   (connected to A, C)
deg(C) = 3   (connected to B, D, A)
deg(D) = 2   (connected to C, A)

Sum of degrees = 3+2+3+2 = 10
Number of edges = 5

Check: 2 × 5 = 10  ✓  (Handshaking theorem verified)
```

---

## Connected Components

Ek graph **connected** kaha jaata hai agar kisi bhi do vertices ke beech ek path exist kare. Agar graph connected nahi hai, toh wo **connected components** (separate "islands") me toot jaata hai.

```
Connected Component = maximal set of vertices jaha har vertex, har
                       doosre vertex se kisi na kisi path se reachable ho
```

> Socho Aise — Ek graph jisme multiple connected components hain wo alag-alag islands jaisa hai — ek island ke andar sab jagah pahunch sakte ho (boat/bridge se), lekin ek island se doosre island tak koi connection nahi hai.

### Example

```
Graph has vertices: {A, B, C, D, E, F}
Edges: {(A,B), (B,C), (D,E)}

Component 1: {A, B, C}   — connected via A-B-C
Component 2: {D, E}      — connected via D-E
Component 3: {F}         — isolated vertex, no edges

Total connected components = 3
```

---

## Max-Flow / Min-Cut Concept (Brief)

Ye concept **weighted, directed graphs** me use hota hai jaha edges ki ek "capacity" hoti hai (jaise pipeline me pani ka flow, ya network me data ka bandwidth).

```
Max-Flow — Source (S) se Sink (T) tak maximum kitna "flow" bheja ja
           sakta hai, given edge capacities

Min-Cut  — Wo minimum total capacity jise "cut" (remove) karne par S
           se T tak koi path na bache

Max-Flow Min-Cut Theorem: Maximum flow value = Minimum cut capacity
                           (dono hamesha equal hote hain)
```

> Socho Aise — Max-flow min-cut ek water pipeline system jaisa hai — pipes ki alag-alag capacity hoti hai. Maximum flow wahi hai jo sabse "tight bottleneck" (minimum cut) allow karta hai — jitna bottleneck accommodate karega, utna hi maximum flow milega, chahe baaki pipes kitni bhi badi ho.

---

## Graph Coloring

Graph coloring me har vertex ko ek **color** assign karte hain aise ki koi bhi do **adjacent (connected) vertices** ka color same na ho.

```
Chromatic Number χ(G) = minimum number of colors needed to color
                          the graph properly
```

> Yaad Rakho — Chromatic number ka symbol χ(G) hai. Ye "minimum colors" hai jisse adjacent vertices kabhi same color na paayein.

### Worked Example

```
Graph: Triangle — V = {A, B, C}, E = {(A,B), (B,C), (A,C)}
(Sab teeno vertices aapas me connected hain)

A ko Color 1 do
B, A se adjacent hai → Color 2 do
C, A aur B dono se adjacent hai → Color 1 aur 2 dono use nahi kar
sakte → Color 3 chahiye

Chromatic Number χ(G) = 3
```

```
Graph: Simple cycle of 4 vertices — A-B-C-D-A (square)

A = Color 1
B = Color 2  (adjacent to A)
C = Color 1  (adjacent to B, not adjacent to A — can reuse Color 1)
D = Color 2  (adjacent to C and A)

Chromatic Number χ(G) = 2
```

> Tip — Real-life application: graph coloring exam-timetable scheduling me use hota hai — vertices = exams, edges = "students common hain do exams me", aur colors = time-slots. Do exams jinke students common hain unhe alag slot (color) milna chahiye. Ye application exam me poocha ja sakta hai.

---

### Quick Summary Table

| Concept | Meaning |
|---------|---------|
| Vertex/Edge | V = nodes, E = connections between them |
| Degree of vertex | Number of edges touching it |
| Handshaking Theorem | Σdeg(v) = 2×\|E\| |
| Connected Component | Maximal group of mutually-reachable vertices |
| Max-Flow Min-Cut | Maximum flow S→T = Minimum capacity to disconnect them |
| Chromatic Number χ(G) | Minimum colors needed so adjacent vertices differ |

> Warning — Chromatic number nikalte waqt greedy approach se galat answer aa sakta hai agar vertex order sahi na choose kiya jaaye — hamesha highest-degree vertex se start karna better strategy hai, aur small examples me har adjacency carefully check karo.
