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
