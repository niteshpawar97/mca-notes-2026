## Computer Networks, Internet Aur WWW Ka Basics

### Computer Network Kya Hai?

**Computer Network** do ya zyada computers ka aapas me connect hona hai — taaki wo data/resources share kar sakein.

> Socho Aise — Network ek "society ke ghar" jaisa hai — sab ghar (computers) alag hain, par road (cable/wireless) se connected hain, ek dusre ko cheezein (data) bhej sakte hain.

---

### Networks Ke Types (Size Ke Hisaab Se)

| Type | Full Form | Area Covered |
|------|-----------|----------------|
| **LAN** | Local Area Network | Ek building/campus (jaise college lab) |
| **MAN** | Metropolitan Area Network | Ek shehar |
| **WAN** | Wide Area Network | Poora desh/duniya (Internet sabse bada WAN hai) |

> Yaad Rakho — Size ke hisaab se yaad rakho: **LAN < MAN < WAN**. Internet khud ek WAN hai — duniya ke saare networks ko jodta hai.

---

### Network Topologies — Computers Aapas Me Kaise Arrange Hote Hain

**Topology** batati hai ki network ke devices physically/logically kis pattern me connect hain.

| Topology | Description |
|----------|--------------|
| **Star** | Sabhi computers ek central device (hub/switch) se connect hote hain |
| **Bus** | Sabhi computers ek hi common cable (backbone) se connected hote hain |
| **Ring** | Har computer apne dono padosi computers se connected hota hai, ek circle bana ke |
| **Mesh** | Har computer directly har dusre computer se connected hota hai |

**Star Topology:**
```
        Computer
           |
Computer—[HUB]—Computer
           |
        Computer
```

**Bus Topology:**
```
Computer   Computer   Computer   Computer
   |          |          |          |
   └──────────┴──────────┴──────────┘
         (Common Backbone Cable)
```

| Topology | Advantage | Disadvantage |
|----------|-----------|-----------------|
| Star | Ek cable fail ho toh baaki affect nahi hote | Agar central hub fail ho jaaye, poora network down |
| Bus | Kam cable lagti hai, sasta | Main cable fail ho toh poora network down |
| Ring | Data ek direction me organized flow karta hai | Ek computer fail ho toh poora ring break ho sakta hai |
| Mesh | Bahut reliable — ek connection fail ho toh doosra raasta available | Bahut zyada cabling chahiye, mehenga |

> Yaad Rakho — **Star** topology aaj sabse zyada common hai (office/college labs me) kyunki ek computer ki cable kharab hone se baaki sab chalte rehte hain — sirf hub/switch fail hone par poora network down hota hai.

---

### Transmission Media — Data Kaise Travel Karta Hai

| Type | Media | Example/Use |
|------|-------|----------------|
| **Wired (Guided)** | Twisted Pair Cable | Telephone lines, LAN connections (sasta, medium speed) |
| **Wired (Guided)** | Coaxial Cable | Cable TV connections (twisted pair se fast) |
| **Wired (Guided)** | Fiber Optic Cable | High-speed internet backbone (light signals se data, sabse fast) |
| **Wireless (Unguided)** | Wi-Fi | Ghar/office me bina cable ke internet |
| **Wireless (Unguided)** | Bluetooth | Short-range device connection (headphones, file transfer) |
| **Wireless (Unguided)** | Satellite | Remote areas me internet/TV signal (bahut door tak signal) |

> Socho Aise — Fiber Optic cable ke andar light ke signals travel karte hain (bahut fast, kam loss), jabki Twisted Pair/Coaxial me electrical signals travel karte hain. Isiliye modern high-speed internet (jaise Jio Fiber) fiber optic use karta hai.

---

### Internet Kya Hai?

**Internet** duniya bhar ke lakhon computer networks ka aapas me jud'na hai — ek "network of networks".

### World Wide Web (WWW)

Log "Internet" aur "WWW" ko same samajhte hain, par ye alag hain:

| Internet | World Wide Web (WWW) |
|----------|------------------------|
| Physical infrastructure — cables, servers, ka network | Internet ke upar chalne wala ek service — websites, pages |
| Hardware + connectivity | Software/content layer |
| Email, WWW, file transfer sab isi par chalte hain | Sirf webpages/websites tak limited |

> Example — Internet ek "road network" jaisa hai, aur WWW us road par chalne wali ek specific "bus service" jaisi hai. Internet par WWW ke alawa Email, File Transfer jaisi aur services bhi chalti hain.

---

### Internet Kaise Kaam Karta Hai?

```
Tumhara Device → ISP → Internet Backbone → Destination Server → Wapas tumhare paas
```

**ISP (Internet Service Provider)** — company jo tumhe internet connection deti hai (jaise Jio, Airtel, BSNL). Tum ISP ke through hi internet access karte ho.

---

### Client-Server Model

Zyadatar internet services **Client-Server model** par kaam karti hain:

| Role | Kya Karta Hai |
|------|-----------------|
| **Client** | Request bhejta hai (jaise tumhara browser/phone) |
| **Server** | Request receive karke response deta hai (jaha website/data store hoti hai) |

```
Client (Browser) ──── Request ────▶  Server
Client (Browser) ◀─── Response ────  Server
```

> Socho Aise — Client-Server model ek "restaurant" jaisa hai — tum (Client) waiter ko order (request) dete ho, kitchen (Server) khaana banake bhejta hai (response). Server hamesha "waiting" mode me rehta hai naye requests ke liye.

---

### URL Type Karne Se Lekar Page Load Hone Tak — Step By Step

Jab tum browser me koi URL type karke Enter dabate ho, backend me ye steps hote hain:

```
1. Browser URL ko samajhta hai (domain name nikalta hai)
2. DNS Lookup — Domain name ko IP Address me convert kiya jaata hai
3. Browser us IP Address wale Server ko connection request bhejta hai
4. Server request receive karke webpage ka data wapas bhejta hai
5. Browser HTML/CSS/Images ko receive karke render karta hai
6. Page tumhare screen par dikh jaata hai
```

> Example — `www.google.com` type karne par, DNS pehle isko ek IP Address (jaise `142.250.194.46`) me convert karta hai, tabhi browser us server tak pahunch pata hai — bina DNS ke tumhe har website ka IP address yaad rakhna padta.

---

### Web Browser Se Surfing

**Web Browser** software hai jisse tum websites dekhte ho — Chrome, Firefox, Edge, Safari.

> Tip — Exam me "Internet vs WWW" difference table zaroor likho — ye ek bahut common confusion/question hai aur clear diagram se poore marks milte hain.

---

### Searching Aur Email

- **Search Engines** (Google, Bing) — keywords daalo, relevant websites mil jaati hain
- **Email** — electronic letters bhejne ka tarika, jaise Gmail, Outlook — instant aur free

> Socho Aise — Search Engine ek "library ka librarian" jaisa hai — tum topic bolo, wo turant relevant kitaabein (websites) dikha deta hai, poori library khud dhoondne ki zaroorat nahi.

> Warning — Public Wi-Fi (jaise cafe/railway station ka free Wi-Fi) par sensitive kaam (banking, password login) avoid karo — unsecured networks par data intercept hone ka risk hota hai.

---

### Common Network Protocols

**Protocol** ek set of rules hai jo decide karta hai ki devices aapas me kaise "baat" (communicate) karenge.

| Protocol | Full Form | Kaam |
|----------|-----------|------|
| **TCP/IP** | Transmission Control Protocol / Internet Protocol | Data ko chhote packets me todkar sahi order me bhejta-receive karta hai — internet ka base protocol |
| **HTTP/HTTPS** | HyperText Transfer Protocol (Secure) | Webpages ko browser tak transfer karta hai |
| **FTP** | File Transfer Protocol | Files ko ek computer se dusre me transfer karna |
| **SMTP** | Simple Mail Transfer Protocol | Email bhejne ke liye |

> Yaad Rakho — TCP/IP ko "internet ki base language" samjho — har device jo internet use karta hai, chahe wo phone ho ya server, wo isi protocol ki rules follow karta hai taaki data sahi tarike se ek jagah se doosri jagah pahunche.

> Example — Jab tum browser me URL type karte ho aur "https" dikhta hai, iska matlab hai HTTP protocol ka secure version use ho raha hai — data encrypted hokar transfer hota hai.
