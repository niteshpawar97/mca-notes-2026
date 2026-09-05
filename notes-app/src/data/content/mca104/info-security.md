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

> Question — Ek user ne ek free "PDF converter" software download kiya, jo dikhne me normal tha, lekin background me uska password chura raha tha. Ye malware ka kaunsa type hai?

**Solution** — **Trojan Horse** — ek useful software jaisa dikhta hai (PDF converter), lekin background me harmful kaam karta hai (password churana), aur user khud isse install karta hai ye samajh kar ki ye genuine hai.

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

> Question — Do dost internet par ek encrypted message share karna chahte hain, lekin unhe darr hai ki agar encryption key kahi beech me leak ho gayi (jaise ek unsecure email se bheji), toh koi bhi message padh lega. Symmetric ya Asymmetric — kaunsa safer approach hoga?

**Solution** — **Asymmetric** — kyunki isme sirf **public key** share karni padti hai (jo leak hone se bhi koi farak nahi padta, usse sirf lock hi hota hai), aur **private key** kabhi kisi ke saath share hi nahi hoti — hamesha apne paas rehti hai. Symmetric me hi ek key dono kaam karti hai, isliye use share karna risky hota.

---

## Digital Signature

Digital Signature ek cryptographic technique hai jo kisi digital document ki **authenticity (sahi banda bheja) aur integrity (change nahi hua)** prove karta hai — bilkul ek handwritten signature ki tarah, lekin digital form me.

**Kaam kaise karta hai:**
1. Sender apne **private key** se document ka signature banata hai
2. Receiver sender ki **public key** se us signature ko verify karta hai
3. Agar verify ho jaye, to confirm hota hai ki document sahi sender se aaya hai aur beech me tamper nahi hua

> Yaad Rakho — Digital Signature sirf authenticity aur integrity check karta hai, ye document ko encrypt nahi karta (encryption alag purpose hai — confidentiality ke liye).

> Question — Ek company ka official offer letter email se aaya hai, aur usme digital signature verify ho jaati hai. Iska matlab document confidential (secret) bhi hai?

**Solution** — **Nahi** — digital signature sirf ye confirm karta hai ki letter **sahi sender se aaya hai** aur **tamper nahi hua** (authenticity + integrity). Isse ye guarantee nahi milti ki document ko koi aur padh nahi sakta — confidentiality ke liye alag se encryption chahiye hoti.

---

## Firewall

Firewall ek security system hai (hardware ya software) jo network aur internet ke beech **traffic ko monitor aur control** karta hai — predefined security rules ke hisaab se decide karta hai ki kaunsa traffic andar aane diya jaye aur kaunsa block kiya jaye.

**Types (briefly):**
- **Packet Filtering Firewall** — Data packets ko unke source/destination address ke basis par allow/block karta hai
- **Proxy Firewall** — Network ke beech me ek middleman ki tarah kaam karta hai
- **Software Firewall** — Individual computer par install hota hai
- **Hardware Firewall** — Poore network ko protect karta hai, ek physical device ke roop me

> Socho Aise — Firewall ek building ke security guard jaisa hai — har aane jaane wale ko check karta hai aur sirf authorized logon ko andar jaane deta hai.

> Question — Ek company apne poore office network ko protect karna chahti hai, sirf ek computer ko nahi. Kaunsa firewall type sahi rahega?

**Solution** — **Hardware Firewall** — poore network ko protect karta hai ek physical device ke roop me, jabki Software Firewall sirf individual computer par install hota hai.

---

## User Identification Aur Authentication

Ye process confirm karta hai ki user wahi hai jo wo claim kar raha hai.

| Method | Example |
|--------|---------|
| **Something you know** | Password, PIN |
| **Something you have** | ATM card, OTP device |
| **Something you are** | Fingerprint, face recognition (biometrics) |

> Tip — Exam me "authentication methods" poocha jaye to teeno category (know, have, are) ke saath example zaroor do — ye ek complete answer maana jaata hai.

> Question — ATM se paisa nikalne ke liye card (ATM card) aur PIN dono chahiye hote hain. Ye kaunsi do authentication categories use kar raha hai?

**Solution** — Card = **"Something you have"**, PIN = **"Something you know"**. Do factors use karna (2-factor authentication) isliye security aur strong ho jaati hai — sirf ek factor chura kar access nahi mil sakta.

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
