## Information Security Kyun Zaroori Hai?

Aaj kal har cheez digital ho gayi hai — banking, shopping, personal chats, business data. Ye sab **hackers, virus, aur unauthorized access** se protect karna hi Information Security kehlata hai. Iska goal hota hai data ki **Confidentiality, Integrity, aur Availability** (CIA triad) maintain karna.

| CIA Component | Matlab |
|----------------|--------|
| **Confidentiality** | Data sirf authorized logon tak hi accessible ho |
| **Integrity** | Data me bina permission ke koi change na ho |
| **Availability** | Data authorized users ko jab chahiye tab mile |

---

## Malicious Programs

Ye harmful software (**malware**) hote hain jo system ko damage karne, data churane, ya unauthorized access lene ke liye banaye jaate hain.

| Type | Kya Karta Hai | Spread Kaise Hota Hai |
|------|----------------|-------------------------|
| **Virus** | Khud ko doosre programs se attach karke replicate karta hai, files ko corrupt karta hai | Infected file run karne se |
| **Worm** | Khud se replicate hota hai bina kisi file se attach hue, network bandwidth kha jaata hai | Network ke through automatically |
| **Trojan Horse** | Ek useful software jaisa dikhta hai lekin background me harmful kaam karta hai | User khud install karta hai (fake software) |
| **Spyware** | Chupke se user ki activity monitor karke data churata hai (passwords, browsing history) | Free software ke saath bundle hokar |

> Socho Aise — Virus ek bimari ki tarah hai jo doosre logo (files) ko touch karne se failti hai. Worm khud chal kar door tak pahunch jaata hai bina kisi ke touch kiye. Trojan Horse ek "gift box" hai jisme andar kuch aur nikalta hai — jaise Greek mythology ka wooden horse.

> Warning — Exam me Virus aur Worm ko confuse mat karo — Virus ko spread hone ke liye ek **host file** chahiye hoti hai, Worm ko nahi — wo khud independently travel karta hai.

---

## Cryptography

Cryptography wo technique hai jisse data ko **encrypt** (secret code me convert) kiya jata hai taaki sirf authorized log hi use padh sakein.

- **Plaintext** — Original readable data
- **Ciphertext** — Encrypted (unreadable) data
- **Encryption** — Plaintext ko ciphertext me convert karna
- **Decryption** — Ciphertext ko wapas plaintext me convert karna

### Symmetric vs Asymmetric Encryption

| Feature | Symmetric Encryption | Asymmetric Encryption |
|---------|------------------------|--------------------------|
| Key Used | Ek hi key encryption aur decryption dono ke liye | Do keys — Public key aur Private key |
| Speed | Fast | Slower |
| Key Sharing | Key share karna risky hai | Public key freely share ho sakti hai |
| Example | DES, AES | RSA |

> Socho Aise — Symmetric encryption ek ghar ke taale jaisa hai jisme ek hi chaabi se darwaza khulta aur band hota hai — agar chaabi kho gayi ya kisi aur ke haath lag gayi, sab access kar sakta hai. Asymmetric encryption me do chaabiyan hoti hain — ek se sirf lock hota hai (public key, sabke paas ho sakti hai), doosri se sirf khulta hai (private key, sirf tumhare paas).

---

## Digital Signature

Digital Signature ek cryptographic technique hai jo kisi digital document ki **authenticity (sahi banda bheja) aur integrity (change nahi hua)** prove karta hai — bilkul ek handwritten signature ki tarah, lekin digital form me.

**Kaam kaise karta hai:**
1. Sender apne **private key** se document ka signature banata hai
2. Receiver sender ki **public key** se us signature ko verify karta hai
3. Agar verify ho jaye, to confirm hota hai ki document sahi sender se aaya hai aur beech me tamper nahi hua

> Yaad Rakho — Digital Signature sirf authenticity aur integrity check karta hai, ye document ko encrypt nahi karta (encryption alag purpose hai — confidentiality ke liye).

---

## Firewall

Firewall ek security system hai (hardware ya software) jo network aur internet ke beech **traffic ko monitor aur control** karta hai — predefined security rules ke hisaab se decide karta hai ki kaunsa traffic andar aane diya jaye aur kaunsa block kiya jaye.

**Types (briefly):**
- **Packet Filtering Firewall** — Data packets ko unke source/destination address ke basis par allow/block karta hai
- **Proxy Firewall** — Network ke beech me ek middleman ki tarah kaam karta hai
- **Software Firewall** — Individual computer par install hota hai
- **Hardware Firewall** — Poore network ko protect karta hai, ek physical device ke roop me

> Socho Aise — Firewall ek building ke security guard jaisa hai — har aane jaane wale ko check karta hai aur sirf authorized logon ko andar jaane deta hai.

---

## User Identification Aur Authentication

Ye process confirm karta hai ki user wahi hai jo wo claim kar raha hai.

| Method | Example |
|--------|---------|
| **Something you know** | Password, PIN |
| **Something you have** | ATM card, OTP device |
| **Something you are** | Fingerprint, face recognition (biometrics) |

> Tip — Exam me "authentication methods" poocha jaye to teeno category (know, have, are) ke saath example zaroor do — ye ek complete answer maana jaata hai.

---

## Security Awareness Aur Policies

Organizations apne employees ko **security awareness training** dete hain taaki wo phishing emails, weak passwords, aur social engineering attacks se bach sakein. Security policies define karti hain ki data kaise handle kiya jaye, password kaisi ho, aur kisko kya access mile.

### Areas Requiring Security

- Banking aur financial transactions
- Personal aur medical records
- Government aur defense data
- E-commerce transactions
- Corporate confidential data (trade secrets)

> Example — Bank apps me OTP verification, fingerprint login, aur SSL encryption — ye sab isliye hote hain kyunki financial data ko highest level ki security chahiye hoti hai.
