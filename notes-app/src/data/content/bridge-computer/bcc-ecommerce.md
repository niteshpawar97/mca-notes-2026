## Web Browsers, Email, URLs Aur E-commerce

### URL Aur Domain Names Samajhna

**URL (Uniform Resource Locator)** ek website ka poora address hota hai:

```
https://www.example.com/page1

https  →  Protocol (kaise data transfer hoga — secure)
www    →  Subdomain
example →  Domain Name (website ki pehchaan)
.com   →  Domain Extension (kis type ki website hai)
/page1 →  Specific page/path
```

| Domain Extension | Kis Ke Liye |
|--------------------|--------------|
| `.com` | Commercial/business |
| `.org` | Non-profit organizations |
| `.edu` | Educational institutions |
| `.gov` | Government websites |
| `.in` | India-specific websites |

> Yaad Rakho — URL me `https` ka "s" matlab hai **Secure** — data encrypted hokar jaata hai. Bank/payment wali site par hamesha `https` check karo, `http` (bina s) unsafe ho sakta hai.

---

### Understanding IP Address (Domain Ke Peeche Ka Asli Address)

Har website ka ek **IP Address** hota hai (jaise `192.168.1.1`) — Domain Name System (DNS) is IP address ko yaad rakhne layak naam (jaise google.com) me convert karta hai.

> Socho Aise — Domain Name ek "contact name" hai (jaise "Mummy" tumhare phone me), aur IP Address uska "actual phone number" hai. Tumhe number yaad rakhne ki zaroorat nahi, naam se hi call lag jaati hai.

**URL Type Karne Se Page Load Hone Tak — Poora Walkthrough:**

```
Step 1: Tum browser me "www.flipkart.com" type karte ho aur Enter dabate ho
Step 2: Browser DNS Server se poochta hai — "flipkart.com ka IP address kya hai?"
Step 3: DNS Server jawab deta hai — jaise 203.0.113.25
Step 4: Browser us IP Address wale Server ko HTTP/HTTPS request bhejta hai
Step 5: Server webpage ka data (HTML, images, CSS) wapas bhejta hai
Step 6: Browser is data ko render karke tumhe screen par dikhata hai
```

> Example — Ye poora process (DNS lookup se page load tak) sirf kuch milliseconds me ho jaata hai — isiliye tumhe lagta hai website "turant" khul gayi, jabki backend me itne steps ho chuke hote hain.

---

### Cookies — Website Tumhe "Yaad" Kaise Rakhti Hai

**Cookie** ek chhota text file hai jo website tumhare browser me save karti hai — taaki agli baar tum us website par aao toh wo tumhe pehchaan sake.

| Cookie Kyun Use Hoti Hai | Example |
|------------------------------|---------|
| Login session yaad rakhna | Baar-baar password na daalna pade |
| Shopping cart items yaad rakhna | Cart me daale gaye items agli baar bhi dikhein |
| Preferences save karna | Language/theme setting yaad rehna |
| Ads personalize karna | Tumne jo dekha uske hisaab se related ads dikhana |

> Socho Aise — Cookie ek "chhoti chit (note)" jaisi hai jo dukaandar (website) tumhare bare me likh ke apne paas rakh leta hai — agli baar tum aao toh wo turant pehchaan leta hai "arre ye toh wahi customer hai jisne pichli baar ye cheez dekhi thi".

> Yaad Rakho — Cookies harmful nahi hoti (generally) — ye sirf preferences/session yaad rakhti hain. Lekin privacy ke liye websites ko "Accept Cookies" popup dikhana legally zaroori hota hai.

---

### Email — Kaise Kaam Karta Hai

**Email (Electronic Mail)** internet ke through messages bhejne/receive karne ka tarika hai.

Email address ka format:
```
username@domain.com

username → tumhara unique naam
@        → "at" symbol
domain   → email service provider (gmail.com, yahoo.com)
```

**Email Ke Fayde:**
- Instant delivery, kahi se bhi bhej sakte ho
- Attachments (files, images) bhej sakte ho
- Free hai (Gmail, Outlook jaise services)
- CC (Carbon Copy) aur BCC (Blind Carbon Copy) se ek saath multiple logon ko bhej sakte ho

---

### E-commerce Aur Online Transactions

**E-commerce** matlab internet ke through **cheezein khareedna-bechna**.

| E-commerce Type | Example |
|-------------------|---------|
| **B2C** (Business to Consumer) | Amazon, Flipkart — company se direct customer |
| **B2B** (Business to Business) | Ek company dusri company se raw material kharide |
| **C2C** (Consumer to Consumer) | OLX — user se user |

---

### Online Payment Methods (India Me)

| Method | Kaam Kaise Karta Hai |
|--------|--------------------------|
| **UPI (Unified Payments Interface)** | Bank account seedha link hota hai, QR code/UPI ID se instant transfer (jaise PhonePe, GPay, Paytm) |
| **Net Banking** | Bank ki website/app se seedha account se payment |
| **Debit/Credit Cards** | Card details daal ke payment (bank/card company approve karti hai) |
| **Digital Wallets** | App me pehle se paisa load karke rakhna, phir wahan se pay karna (jaise Paytm Wallet, Amazon Pay Balance) |
| **Cash on Delivery (COD)** | Product deliver hone par cash dena — online payment nahi, par e-commerce ka hi part hai |

> Example — UPI India me sabse popular payment method ban chuka hai kyunki isme instant transfer hoti hai, koi extra card charge nahi lagta, aur sirf phone number/UPI ID se hi paisa bhej sakte ho.

---

### Online Transactions Safe Kaise Rakhein

- SSL/HTTPS encryption (URL me lock icon check karo)
- OTP verification
- Secure payment gateways (UPI, cards)
- Sirf trusted/official apps aur websites use karo

> Warning — Kabhi bhi apna OTP, password ya card CVV kisi ko na bataye — legit companies kabhi bhi phone/email par ye details nahi maangti. Ye common online fraud (phishing) ka tarika hai.

---

### Phishing Aur Online Fraud — Red Flags Checklist

Phishing ek tarika hai jisme fraud karne wale fake email/message/website banake tumhari sensitive details chura lete hain. In signs se pehchaano:

- [ ] Email/message me **spelling mistakes** ya ajeeb grammar ho
- [ ] Sender ka email address official domain se match nahi karta (jaise `amazon-support123@gmail.com`, real Amazon domain nahi)
- [ ] "Urgent action required" ya "account block ho jaayega" jaisi **daraane wali language**
- [ ] Link par click karne ko bola jaa raha ho jo suspicious/shortened URL ho
- [ ] OTP, password, ya bank details **directly maangi** jaa rahi ho
- [ ] "Aapne lottery jeeti hai" jaisa offer jo bahut zyada acha lage (too good to be true)

> Socho Aise — Phishing ek "machhli pakadne" jaisa tarika hai — fraud karne wala ek fake "chaara" (attractive/daraana message) daalta hai, aur jo bhi us jaal me phasta hai (click/reply karta hai), uski details chori ho jaati hain — isi se naam "phishing" (fishing se milta-julta) aaya hai.

> Tip — Exam me "E-commerce" define karke B2B, B2C, C2C types table me likho — real Indian examples (Amazon, Flipkart, OLX) dena examiner ko applied knowledge dikhata hai. Phishing checklist bhi ek common short-answer question hai.

---

### Advantages Aur Disadvantages Of E-commerce

**Advantages:**

| Advantage | Explanation |
|-----------|-------------|
| 24/7 availability | Dukaan ki tarah timing nahi — kabhi bhi order kar sakte ho |
| Wide variety | Ek hi platform par lakhon products compare kar sakte ho |
| Price comparison | Alag-alag websites/sellers ke prices easily compare ho jaate hain |
| Home delivery | Ghar baithe product mil jaata hai |

**Disadvantages:**

| Disadvantage | Explanation |
|---------------|-------------|
| Product touch/feel nahi kar sakte | Kapdon/electronics ki quality kharidne se pehle physically check nahi ho paati |
| Delivery time | Turant nahi milta, kuch din lag sakte hain |
| Online fraud ka risk | Fake websites/phishing ka khatra rehta hai |
| Internet dependency | Bina internet ke kuch nahi ho sakta |

---

### Digital Signature — Online Documents Ki Authenticity

**Digital Signature** ek electronic tarika hai kisi document/transaction ko verify karne ka ki wo genuine hai aur uske saath koi chhed-chhaad nahi hui.

> Socho Aise — Digital Signature ek "unique seal-mohar" jaisi hai jo sirf asli sender hi laga sakta hai — receiver ko pata chal jaata hai ki document sahi jagah se aaya hai aur beech me kisi ne badla nahi hai.

> Example — Government portals (jaise Income Tax filing) me Digital Signature Certificate (DSC) use hoti hai — ye sign kagaz par sign karne jaisa hi legal maana jaata hai.
