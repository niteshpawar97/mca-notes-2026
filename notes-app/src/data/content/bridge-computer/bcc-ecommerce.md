## URL, Email Aur E-commerce — Bilkul Shuru Se

### Ye Topic Kyu Padhna Zaroori Hai?

Agar tumhe lagta hai "URL, cookies, digital signature — ye sab mushkil lagta hai", tension mat lo. Ye sab cheezein tum roz use karte ho (jab bhi browser me kuch type karte ho, ya online shopping karte ho) — bas unke naam formal lagte hain. Chalo ek-ek karke, bilkul shuru se samajhte hain.

---

### URL Kya Hota Hai? (Piece By Piece)

**URL (Uniform Resource Locator)** bas ek website ka **poora address** hota hai — bilkul waise jaise tumhare ghar ka ek postal address hota hai (galli number, shehar, pin code), waise hi har webpage ka bhi ek address hota hai — usi ko URL kehte hain.

Chalo ek real URL ko tod-tod ke (piece by piece) samajhte hain:

```
https://www.example.com/page1
```

Isko 4 pieces me todte hain:

| Piece | Yahan Kya Hai | Iska Matlab |
|-------|----------------|--------------|
| `https` | Protocol | Data kaise transfer hoga — yahan "secure" tarike se |
| `www` | Subdomain | Website ka ek standard shuruaati hissa |
| `example.com` | Domain Name | Website ki asli **pehchaan** (naam) |
| `/page1` | Path | Us website ke andar **specific page** ka pata |

Isko is tarah bhi likh sakte hain:

```
https://www.example.com/page1
  |            |            |
Protocol   Domain Name    Path
(kaise)     (kiski site)  (kaunsa page)
```

> Socho Aise — URL bilkul ek postal address jaisa hai. Jaise address me "Speed Post se bhejo" (protocol), "Sharma Colony" (society/domain), aur "House No. 12" (specific path) — sab milke ek exact jagah batate hain. URL bhi waise hi ek exact webpage tak pahuncha deta hai.

Domain name ke aage jo extension (`.com`, `.org`) hota hai, wo bhi kuch batata hai:

| Domain Extension | Kis Ke Liye Use Hota Hai |
|--------------------|------------------------------|
| `.com` | Commercial/business websites |
| `.org` | Non-profit organizations |
| `.edu` | Educational institutions (colleges/schools) |
| `.gov` | Government websites |
| `.in` | India se specific websites |

> Yaad Rakho — URL me `https` ka "s" matlab hai **Secure** — data encrypted hokar jaata hai. Bank/payment wali site par hamesha `https` check karo, `http` (bina s) unsafe ho sakta hai.

> Question — `https://www.rgpv.ac.in/notices` is URL me Protocol, Domain Name aur Path kya-kya hain?

**Solution** — **Protocol** = `https` (secure). **Domain Name** = `rgpv.ac.in` (website ki pehchaan, aur `.ac.in` batata hai ye ek Indian educational/academic site hai). **Path** = `/notices` (website ke andar wo specific page jahan notices hain).

---

### IP Address Aur DNS (Domain Ke Peeche Ka Asli Address)

Ab ek interesting fact — computers naam (jaise `google.com`) se nahi, **numbers** se ek dusre ko dhoondhte hain. Har website ka ek asli address hota hai jise **IP Address** kehte hain (jaise `192.168.1.1`).

Toh sawaal ye hai — hum "google.com" type karte hain, numbers nahi, fir bhi website khul jaati hai. Ye kaam karta hai ek system se jise **DNS (Domain Name System)** kehte hain — ye domain name (jo yaad rakhna easy hai) ko IP address (jo yaad rakhna mushkil hai) me convert kar deta hai, backend me.

> Socho Aise — Domain Name ek "contact name" hai (jaise tumhare phone me "Mummy" save hai), aur IP Address uska "actual phone number" hai. Tumhe number yaad rakhne ki zaroorat nahi, naam se hi call lag jaati hai — DNS yehi kaam karta hai internet par.

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

> Question — Agar DNS system achanak kaam karna band kar de, toh kya hoga jab tum "google.com" type karoge?

**Solution** — Website nahi khulegi (ya error aayega) — kyunki DNS hi domain name ko IP address me convert karta hai. Bina is conversion ke, browser ko pata hi nahi chalega ki request kis server ko bhejni hai.

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

> Question — Tum ek shopping site par kuch items cart me daalte ho, phir bina kharide browser band kar dete ho. Agle din wahi site kholte ho toh items abhi bhi cart me dikhte hain. Ye kaise possible hua?

**Solution** — Ye **Cookies** ki wajah se possible hua — website ne ek cookie tumhare browser me save kar di thi jisme cart ke items yaad rakhe gaye the, isliye agli baar aane par wo wapas dikh gaye.

---

### Email — Kaise Kaam Karta Hai

**Email (Electronic Mail)** internet ke through messages bhejne/receive karne ka tarika hai — jaise ek digital chitthi (letter).

Email address ka format bhi URL ki tarah piece-by-piece samajh sakte ho:

```
username@domain.com

username → tumhara unique naam (jaise "rahul.sharma")
@        → "at" symbol, username aur domain ke beech separator
domain   → email service provider ka naam (gmail.com, yahoo.com)
```

**Email Ke Fayde:**
- Instant delivery, kahi se bhi bhej sakte ho
- Attachments (files, images) bhej sakte ho
- Free hai (Gmail, Outlook jaise services)
- CC (Carbon Copy) aur BCC (Blind Carbon Copy) se ek saath multiple logon ko bhej sakte ho

> Yaad Rakho — **CC** me jinke naam daalte ho, sabko pata chalta hai ki aur kis-kisko email gaya hai. **BCC** me jinke naam daalte ho, unka naam doosre receivers ko nahi dikhta — matlab BCC ek "chhupa hua" copy hai.

> Question — `priya.verma@gmail.com` is email address me username aur domain kya-kya hain?

**Solution** — **Username** = `priya.verma` (unique naam). **Domain** = `gmail.com` (email service provider — yahan Gmail).

---

### E-commerce Aur Online Transactions

**E-commerce** matlab internet ke through **cheezein khareedna-bechna**.

E-commerce me kaun kisse khareed/bech raha hai, uske hisaab se 3 types hote hain:

| E-commerce Type | Matlab | Example |
|-------------------|--------|---------|
| **B2C** (Business to Consumer) | Company seedha customer ko bechti hai | Amazon, Flipkart |
| **B2B** (Business to Business) | Ek company dusri company ko bechti hai | Ek factory dusri company ko raw material beche |
| **C2C** (Consumer to Consumer) | Ek user dusre user ko bechta hai | OLX (ek user apna purana phone dusre user ko becha) |

> Socho Aise — B2C ko socho jaise ek **dukaan** jaha company tumhe (customer) seedha samaan bechti hai. C2C ko socho jaise do dost aapas me apna purana saaman aapas me bech-kharid rahe hon (koi company beech me nahi).

> Question — Tumhare padosi ne apna purana laptop OLX par kisi anjaan vyakti ko becha. Ye B2C hai ya C2C?

**Solution** — Ye **C2C** hai — kyunki yahan ek consumer (padosi) dusre consumer ko cheez bech raha hai, koi business/company beech me nahi hai.

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

- SSL/HTTPS encryption (URL me lock icon check karo — pichle section me `https` wala point yaad karo)
- OTP verification
- Secure payment gateways (UPI, cards)
- Sirf trusted/official apps aur websites use karo

> Warning — Kabhi bhi apna OTP, password ya card CVV kisi ko na bataye — legit companies kabhi bhi phone/email par ye details nahi maangti. Ye common online fraud (phishing) ka tarika hai.

---

### Phishing Aur Online Fraud — Red Flags Checklist

**Phishing** ek tarika hai jisme fraud karne wale fake email/message/website banake tumhari sensitive details chura lete hain. In signs se pehchaano:

- [ ] Email/message me **spelling mistakes** ya ajeeb grammar ho
- [ ] Sender ka email address official domain se match nahi karta (jaise `amazon-support123@gmail.com`, real Amazon domain nahi)
- [ ] "Urgent action required" ya "account block ho jaayega" jaisi **daraane wali language**
- [ ] Link par click karne ko bola jaa raha ho jo suspicious/shortened URL ho
- [ ] OTP, password, ya bank details **directly maangi** jaa rahi ho
- [ ] "Aapne lottery jeeti hai" jaisa offer jo bahut zyada acha lage (too good to be true)

> Socho Aise — Phishing ek "machhli pakadne" jaisa tarika hai — fraud karne wala ek fake "chaara" (attractive/daraana message) daalta hai, aur jo bhi us jaal me phasta hai (click/reply karta hai), uski details chori ho jaati hain — isi se naam "phishing" (fishing se milta-julta) aaya hai.

> Question — Tumhe ek email milta hai jisme likha hai "Aapka bank account 24 ghante me band ho jayega, turant apna password yahan daale" — ek link ke saath. Kya ye phishing ho sakta hai, aur kaise pehchana?

**Solution** — Haan, ye clearly **phishing** lagta hai. Do red flags saaf dikh rahe hain — pehla, "24 ghante me band" jaisi **daraane wali urgent language**, aur doosra, seedha **password maangna** — jo koi bhi legit bank kabhi nahi karta. Aisi email ka link kabhi click nahi karna chahiye.

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

> Question — Ek advantage aur ek disadvantage batao jo online shopping ko dukaan se alag banata hai.

**Solution** — **Advantage** — Online shopping **24/7 available** hai, kabhi bhi order kar sakte ho, jabki dukaan ka ek fixed timing hota hai. **Disadvantage** — Online product ko **touch/feel karke check nahi kar sakte**, jabki dukaan me ye directly ho jaata hai.

---

### Digital Signature — Online Documents Ki Authenticity

**Digital Signature** ek electronic tarika hai kisi document/transaction ko verify karne ka ki wo genuine hai aur uske saath koi chhed-chhaad nahi hui.

> Socho Aise — Digital Signature ek "unique seal-mohar" jaisi hai jo sirf asli sender hi laga sakta hai — receiver ko pata chal jaata hai ki document sahi jagah se aaya hai aur beech me kisi ne badla nahi hai.

> Example — Government portals (jaise Income Tax filing) me Digital Signature Certificate (DSC) use hoti hai — ye sign kagaz par sign karne jaisa hi legal maana jaata hai.
