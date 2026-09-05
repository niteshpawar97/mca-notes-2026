## Communication Over Radio Aur Microwave Systems

Radio aur microwave systems electromagnetic waves ke through information transmit karte hain, bina kisi physical wire ke.

**Radio Communication** — Low frequency electromagnetic waves use karta hai jo lambi distance tak travel kar sakti hain aur obstacles (jaise buildings, hills) ko bhi thoda bahut bend kar ke cross kar sakti hain.

**Microwave Communication** — High frequency waves use karta hai jinhe **line of sight (LOS)** chahiye hoti hai — matlab transmitter aur receiver antenna ke beech me koi obstacle nahi hona chahiye, kyunki microwaves straight line me travel karti hain aur mudti nahi.

> Socho Aise — Radio waves ek gaana gaane jaisi hain jo poore room me sunai deti hain, chahe aap kahin bhi ho. Microwaves ek torch ki roshni jaisi hain — sirf seedhi line me jaati hain, beech me deewar aa jaye to signal ruk jaata hai.

---

## Communication Satellite

Satellite ek device hai jo **Earth ke orbit me** ghumta hai aur signal receive karke amplify kar ke wapas Earth par bhejta hai (yeh process **transponder** karta hai).

### Geostationary Satellite

Sabse common type — ye satellite Earth ki rotation speed ke saath match karke ghumta hai (approx 36,000 km height par), isliye Earth se dekhne par ye **hamesha ek hi position par** dikhta hai.

**Uses:**
- TV broadcasting (DTH)
- Long-distance telephone communication
- Weather forecasting
- GPS navigation
- Internet services in remote areas

> Yaad Rakho — Geostationary satellite ki height approx 36,000 km hoti hai aur ye 24 ghante me ek chakkar lagata hai — bilkul Earth ki rotation speed jitna, isliye "stationary" dikhta hai.

> Question — DTH TV antenna ek baar sahi direction me set hone ke baad dobara adjust nahi karni padti, chahe mahino tak. Kyun?

**Solution** — Kyunki DTH satellite **geostationary** hota hai — Earth ki rotation speed ke saath match karke ghoomta hai, isliye Earth se dekhne par hamesha ek hi fixed position par rehta hai. Antenna ek baar us fixed direction me point kar do, signal hamesha wahi se milta rahega.

---

## Radar — Radio Detection and Ranging

Radar ek system hai jo objects ko detect karne aur unki **distance, speed, aur direction** maapne ke liye use hota hai.

**Kaam kaise karta hai:**
1. Radar transmitter ek radio signal (pulse) bhejta hai
2. Ye signal object se takra kar wapas reflect hoti hai (echo)
3. Radar receiver is reflected signal ko capture karta hai
4. Signal jaane aur wapas aane me jo time lagta hai, usse **distance** calculate hoti hai
5. Frequency change (Doppler effect) se object ki **speed** pata chalti hai

**Uses:** Airport air traffic control, weather monitoring, military tracking, speed detection (traffic police).

> Example — Traffic police jo "speed gun" use karte hain overspeeding vehicles pakadne ke liye, wo bhi radar principle par kaam karta hai.

> Question — Ek radar signal object tak jaake wapas aane me 2 microseconds leta hai. Radar object ki **speed** kaise pata karega (na ki sirf distance)?

**Solution** — Radar **Doppler effect** use karta hai — jab object move kar raha hota hai, reflected signal ki **frequency** thodi change ho jaati hai (paas aa raha ho toh badh jaati hai, door ja raha ho toh ghat jaati hai). Ye frequency-change hi speed calculate karne ke liye use hoti hai — sirf jaane-aane ka time distance ke liye kaafi hai, speed ke liye Doppler shift chahiye.

---

## Fiber Optics

Fiber optic cable ek thin glass ya plastic strand hoti hai jo data ko **light pulses** ke form me transmit karti hai, electrical signals ki jagah.

**Kaam kaise karta hai:** Data ko light signals me convert kiya jata hai (LED ya laser se), jo fiber ke andar **total internal reflection** ki wajah se bina energy loss ke lambi distance tak travel karti hai.

### Fiber Optics vs Copper Wire

| Property | Fiber Optics | Copper Wire |
|----------|--------------|-------------|
| Signal Carrier | Light pulses | Electrical current |
| Speed | Bahut zyada (Gbps-Tbps) | Kam |
| Bandwidth | Bahut zyada | Limited |
| Interference | Electromagnetic interference nahi hota | EMI se affect hota hai |
| Distance | Bina signal loss ke lambi distance | Signal weak ho jata hai lambi distance me |
| Cost | Installation mehenga | Installation sasta |
| Security | Zyada secure (tap karna mushkil) | Kam secure |

> Tip — Exam me "Fiber optics ke advantages" poocha jaye to ye 4 points zaroor likho: high speed, high bandwidth, no electromagnetic interference, aur better security.

> Question — Ek factory me bahut saari heavy machines chal rahi hain jo electromagnetic interference create karti hain, aur wahan reliable high-speed network chahiye. Fiber optic cable use karna sahi rahega ya copper wire?

**Solution** — **Fiber optic** — kyunki iska signal **light pulses** se travel karta hai, na ki electrical current se, isliye machines ka electromagnetic interference (EMI) ispar asar nahi karta. Copper wire EMI se easily affect ho jaati, signal quality kharab hoti.

---

## ISDN — Integrated Services Digital Network

ISDN ek digital telecommunication standard hai jo **voice, video, aur data** — teeno ko same digital line par ek saath transmit karne deta hai, purani analog phone lines ki jagah.

**Properties:**
- Digital transmission — better quality aur speed analog se
- Multiple channels ek hi line par (voice + data simultaneously)
- Faster call setup time
- Higher bandwidth than traditional telephone lines

---

## Comparison Table — Communication Mediums

| Medium | Bandwidth | Range | Typical Use |
|--------|-----------|-------|--------------|
| Radio Waves | Low-Medium | Long (kms) | Broadcasting, mobile comm |
| Microwave | High | Line of sight only | Point-to-point links, satellite uplink |
| Satellite | Very High | Global | TV, GPS, remote area internet |
| Radar | Medium (pulse based) | Medium-Long | Detection, tracking |
| Fiber Optics | Extremely High | Very Long | Internet backbone, high-speed data |
| ISDN | Medium | Local/regional | Digital voice + data over phone lines |

> Warning — Students often confuse Radar aur Satellite communication — Radar sirf **detect aur track** karta hai objects ko (reflection based), jabki Satellite **relay** karta hai communication signals Earth ke do points ke beech. Dono ka purpose alag hai.

> Question — In teen scenarios ko match karo: (a) Do pahado ke beech seedhi-line point-to-point link (b) Aeroplane ko track karna airport se (c) TV channels poore desh me broadcast karna.

**Solution** — (a) **Microwave** (line-of-sight, point-to-point communication), (b) **Radar** (detect + track via signal reflection), (c) **Satellite** (geostationary, isliye ek hi position se poore desh ko cover kar leta hai).
