## History — Centralized Se Distributed Computing Tak

Shuru me (1960s-70s) computing **centralized** hoti thi — ek bada mainframe computer hota tha jisse sabhi users terminals ke through connect hokar apna kaam karte the. Sara processing power ek hi jagah hoti thi.

Jaise-jaise computers sasti aur powerful hoti gayi, **Distributed Computing** ka idea aaya — jisme multiple independent computers ek network ke through connect hote hain aur ek saath milkar kaam karte hain, jaise wo ek hi system ho.

| Feature | Centralized Computing | Distributed Computing |
|---------|--------------------------|---------------------------|
| Processing | Ek hi central computer | Multiple computers milkar |
| Single Point of Failure | Haan — central system fail hua to sab band | Nahi — ek node fail ho to baaki chalte rehte hain |
| Scalability | Limited | Easy — naye nodes add kar sakte hain |
| Cost | Bada mainframe mehenga | Chhote-chhote systems relatively sasty |

> Socho Aise — Centralized computing ek "single chef ek bade kitchen me akela khana bana raha hai" jaisa hai. Distributed computing "kai chhote kitchens me alag-alag chefs ek saath alag dishes bana rahe hain aur end me sab combine ho raha hai" jaisa hai.

---

## Overview of Distributed Computing

**Distributed Computing** ek model hai jisme multiple independent computers (nodes) ek network ke through connect hote hain aur ek **common goal** achieve karne ke liye tasks share karte hain — user ko lagta hai jaise wo ek single powerful system use kar raha hai.

**Key benefits:** Resource sharing, fault tolerance (ek node fail ho to baaki chalte hain), scalability, aur cost-effectiveness.

---

## Cluster Computing

**Cluster Computing** me multiple computers (nodes) **tightly coupled** hote hain aur **same location** par hote hain (usually ek hi network/data center), high-speed network se connect — aur ye ek single system ki tarah kaam karte hain.

**Characteristics:**
- Nodes usually **homogeneous** hote hain (same hardware/OS)
- **High availability** — ek node fail ho to doosra turant load le leta hai
- **Load balancing** — kaam sabhi nodes me evenly baant diya jata hai
- Centralized management hota hai

> Example — Web hosting companies apne servers ka cluster banate hain taaki agar ek server crash ho jaye, to doosra server turant traffic handle karne lage — website down nahi hoti.

---

## Grid Computing

**Grid Computing** me multiple computers, jo **geographically dispersed** (alag-alag locations, even alag organizations) hote hain, **loosely coupled** hokar apne resources (processing power, storage) share karte hain — bade computational problems solve karne ke liye.

**Characteristics:**
- Nodes **heterogeneous** hote hain (alag-alag hardware/OS ho sakte hain)
- Resources **multiple organizations** ke beech share hote hain
- Har node apni **independent management** rakhta hai
- Large-scale scientific/research problems ke liye use hota hai

> Example — SETI@home project jisme duniya bhar ke logon ne apne idle computers ka processing power donate kiya taaki alien signals detect karne wali heavy calculations distribute ho sakein.

---

## Comparison — Cluster vs Grid vs Cloud

Ye ek bahut common exam question hai — teeno concepts ko clearly differentiate karna zaroori hai.

| Feature | Cluster Computing | Grid Computing | Cloud Computing (preview) |
|---------|----------------------|--------------------|-------------------------------|
| **Coupling** | Tightly coupled | Loosely coupled | Virtualized, on-demand |
| **Location** | Same location | Geographically distributed | Data centers (provider decides) |
| **Ownership** | Single organization | Multiple organizations | Third-party cloud provider |
| **Homogeneity** | Usually homogeneous nodes | Heterogeneous nodes | Abstracted — user ko pata nahi hota |
| **Purpose** | High availability, load balancing | Resource/computation sharing | On-demand scalable services |
| **User Access** | Direct system access | Shared resource access | Service-based (pay-per-use) |

> Yaad Rakho — Simple trick: **Cluster = "same jagah, ek team"**, **Grid = "alag jagah, resources share"**, **Cloud = "kisi aur ke data center se service lena, on-demand"**.

> Tip — Exam me "Cluster vs Grid" poocha jaye to sabse important differentiator likho: Cluster **tightly coupled + same location**, Grid **loosely coupled + geographically distributed**. Ye do points hi sabse zyada scoring hote hain.

> Warning — Grid Computing aur Cloud Computing ko mat mila do — Grid computing resources **share** karne par focus karta hai (mostly research/scientific use), jabki Cloud Computing **on-demand service model** hai jisme third-party provider infrastructure deta hai pay-per-use basis par.
