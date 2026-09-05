## Number Systems — Decimal, Binary, Octal, Hexadecimal

### Ye Topic Sabse Zyada Dar Kyun Lagta Hai — Aur Kyun Darne Ki Zaroorat Nahi

Agar "number system" ka naam sunte hi tumhe lagta hai "ye toh maths hai, mujhe nahi aayega" — bilkul normal feeling hai. Lekin sach ye hai ki is topic me koi bhi mushkil formula nahi hai. Bas ek chhota sa **mechanical tarika** (step-by-step process) yaad karna hai, jo divide karna aur multiply karna jaisa simple kaam hai. Is chapter me har step itna slow karke dikhaya jaayega ki tum khud practice karke isko pakka kar sako.

---

### Sabse Pehle — Decimal Ko Naye Nazariye Se Dekho

Tumhe decimal numbers (0-9) likhna aata hai, lekin ek cheez shayad kabhi socha na ho — **jab tum "235" likhte ho, uska matlab kya hota hai?**

235 ka matlab hai:

$$
235 = (2 \times 100) + (3 \times 10) + (5 \times 1)
$$

Yaani, **har digit ki value uski position (jagah) par depend karti hai**. "2" akela sirf "2" nahi hai — kyunki uski position "hundreds" (sainkda) ki hai, uski asli value 200 hai. Isi tarah "3" ki position "tens" hai toh uski value 30 hai, aur "5" ki position "units" hai toh uski value 5 hi hai.

> Socho Aise — Ye bilkul waise hai jaise currency notes ka stack. Ek ₹100 ka note aur ek ₹10 ka note dikhne me kagaz jaise hi hain, lekin unki "position" (denomination) unki value decide karti hai. Number ke digit bhi waise hi hain — unki position hi unki value tay karti hai.

Ye concept (position ki apni value hoti hai) hi poore number system topic ki neev hai. Isko **"place value"** kehte hain.

---

### Number System Aur "Base" Kya Hota Hai?

**Number system** ek tarika hai numbers ko likhne/represent karne ka. Har number system me kuch fixed symbols (digits) hote hain jo use ho sakte hain — aur inn symbols ki total ginti ko us system ka **base (radix)** kehte hain.

| System | Base | Kaunse Digits Use Hote Hain |
|--------|------|-------------|
| **Decimal** | 10 | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (total 10 symbols) |
| **Binary** | 2 | 0, 1 (total 2 symbols) |
| **Octal** | 8 | 0, 1, 2, 3, 4, 5, 6, 7 (total 8 symbols) |
| **Hexadecimal** | 16 | 0-9, aur phir A, B, C, D, E, F (A=10, B=11, C=12, D=13, E=14, F=15) — total 16 symbols |

> Socho Aise — Base ko socho jaise ek game me kitne "options" available hain. Decimal me 10 options hain (0 se 9), isliye base 10 hai. Binary me sirf 2 options hain (0 ya 1), isliye base 2 hai. Jitne zyada options, utna bada base.

**Hexadecimal me A-F kyun?** — Jab hume 10 se zyada symbols chahiye (10, 11, 12... 15 tak) toh ek hi digit me likhna mushkil ho jaata (do-do digit lagte, confusion hoti). Isliye 10 se 15 tak ke liye letters use karte hain — A=10, B=11, C=12, D=13, E=14, F=15. Ye bas ek naming convention hai, kuch aur nahi.

> Question — Hexadecimal me digit "C" ki decimal value kya hai?

**Solution** — $C = 12$ (yaad rakho: A=10, B=11, C=12, D=13, E=14, F=15 — yaani A se shuru karke seedhe order me letters ko 10 se aage ginte jao).

---

### Computer Binary Kyun Use Karta Hai?

Computer ke andar electronic circuits hote hain jinke sirf 2 hi reliable states ho sakte hain — bijli ka current **on hai ya off hai**. Beech ka koi state (jaise "half-on") reliably detect karna mushkil hota hai.

```
Current ON   →  represent karta hai  1
Current OFF  →  represent karta hai  0
```

Agar computer 10 states (decimal ke liye) ya 8 states (octal ke liye) reliably detect karne ki koshish kare, toh galti hone ka chance bahut zyada ho jaata — voltage me chhota sa fluctuation bhi galat digit padh lega. Lekin sirf 2 states (ON/OFF) ko distinguish karna bahut easy aur reliable hai — isiliye har digital circuit, chip, processor **binary** par kaam karta hai.

> Yaad Rakho — Binary electronic hardware ke liye sabse "natural" aur error-proof choice hai — isiliye computer ki asli bhasha binary hi hai, baaki (octal/hex/decimal) sirf insaan ki suvidha (convenience) ke liye hain — kyunki lambi-lambi binary strings (jaise 11010110) insaan ke liye padhna mushkil hota hai.

---

### Binary Ki Place Value Samjho — Conversions Se Pehle Ye Zaroor Padho

Jaise decimal me position ki value 1, 10, 100, 1000... (10 ki powers) hoti hai, waise hi binary me position ki value 1, 2, 4, 8, 16... (**2 ki powers**) hoti hai. Ye table yaad ho jaaye toh saari conversions bahut easy ho jaayengi:

| Position (right se) | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th |
|---|---|---|---|---|---|---|---|---|
| Power of 2 | $2^0$ | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ |
| Value | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |

> Tip — Ye table hamesha **right se left** padhi jaati hai — sabse right wala digit $2^0=1$ ki position par hota hai, uske left wala $2^1=2$ ki position par, aur aage aise hi. Exam se pehle ye table (kam se kam 1 se 128 tak) yaad kar lo, conversions bahut fast ho jaayengi.

---

### Decimal → Binary Conversion

**Method ka naam** — "Divide by 2" method. Idea simple hai: number ko baar-baar 2 se divide karte jao, har baar ka remainder (bacha hua) note karte jao, jab tak number 0 na ho jaaye. Fir remainders ko **neeche se upar (last se first)** padh lo — wahi answer hai.

Chalo $13$ (decimal) ko binary me convert karte hain, ekdum step-by-step:

**Step 1** — $13 \div 2 = 6$, remainder $= 1$
**Step 2** — $6 \div 2 = 3$, remainder $= 0$
**Step 3** — $3 \div 2 = 1$, remainder $= 1$
**Step 4** — $1 \div 2 = 0$, remainder $= 1$ (ab number 0 aa gaya, ruk jaao)

Ab remainders ko **neeche se upar (last se first)** padho: Step 4 ka remainder (1), fir Step 3 ka (1), fir Step 2 ka (0), fir Step 1 ka (1) — milakar banta hai $1101$.

$$
(13)_{10} = (1101)_2
$$

**Verify karna mat bhoolo** — place value table use karke check karo ki answer sahi hai:

$$
(1\times8) + (1\times4) + (0\times2) + (1\times1) = 8+4+0+1 = 13 ✓
$$

> Tip — Har baar answer nikalne ke baad place-value se verify zaroor karo. Isse silly mistake exam me pakdi jaa sakti hai, aur practice se confidence bhi badhta hai.

> Question — $9$ (decimal) ko binary me convert karo.

**Solution** —
**Step 1** — $9 \div 2 = 4$, remainder $1$
**Step 2** — $4 \div 2 = 2$, remainder $0$
**Step 3** — $2 \div 2 = 1$, remainder $0$
**Step 4** — $1 \div 2 = 0$, remainder $1$

Neeche se upar padho: $1, 0, 0, 1$ → $(9)_{10} = (1001)_2$.
Verify: $(1\times8)+(0\times4)+(0\times2)+(1\times1) = 8+0+0+1 = 9$ ✓

> Question — $20$ (decimal) ko binary me convert karo.

**Solution** —
**Step 1** — $20 \div 2 = 10$, remainder $0$
**Step 2** — $10 \div 2 = 5$, remainder $0$
**Step 3** — $5 \div 2 = 2$, remainder $1$
**Step 4** — $2 \div 2 = 1$, remainder $0$
**Step 5** — $1 \div 2 = 0$, remainder $1$

Neeche se upar padho: $1, 0, 1, 0, 0$ → $(20)_{10} = (10100)_2$.
Verify: $(1\times16)+(0\times8)+(1\times4)+(0\times2)+(0\times1) = 16+0+4+0+0 = 20$ ✓

---

### Binary → Decimal Conversion

Ye ulti direction hai — ab binary diya hai, decimal nikalna hai. Method: **har bit (digit) ko uski positional weight (2 ki power) se multiply karo, aur sabko add kar do.**

Chalo $1011$ (binary) ko decimal me convert karte hain:

**Step 1** — Right se left, har position ki weight likho:

$$
\begin{array}{cccc} 1 & 0 & 1 & 1 \\ 2^3 & 2^2 & 2^1 & 2^0 \\ 8 & 4 & 2 & 1 \end{array}
$$

**Step 2** — Har digit ko uski weight se multiply karo:
$1\times8 = 8$, $\quad 0\times4 = 0$, $\quad 1\times2 = 2$, $\quad 1\times1 = 1$

**Step 3** — Sabko add karo: $8+0+2+1 = 11$

$$
(1011)_2 = (11)_{10}
$$

> Question — $1110$ (binary) ko decimal me convert karo.

**Solution** — Weights (left se right): $8, 4, 2, 1$.
$1\times8 + 1\times4 + 1\times2 + 0\times1 = 8+4+2+0 = 14$.
$(1110)_2 = (14)_{10}$

> Question — $10010$ (binary) ko decimal me convert karo.

**Solution** — Weights (left se right, 5 digits): $16, 8, 4, 2, 1$.
$1\times16 + 0\times8 + 0\times4 + 1\times2 + 0\times1 = 16+0+0+2+0 = 18$.
$(10010)_2 = (18)_{10}$

---

### Decimal ↔ Octal Conversion

**Decimal → Octal** — bilkul wahi "divide" method, bas ab 2 ki jagah **8 se divide** karo.

Chalo $100$ (decimal) ko octal me convert karte hain:

**Step 1** — $100 \div 8 = 12$, remainder $4$
**Step 2** — $12 \div 8 = 1$, remainder $4$
**Step 3** — $1 \div 8 = 0$, remainder $1$

Neeche se upar padho: $1, 4, 4$ → $(100)_{10} = (144)_8$

**Octal → Decimal** — har digit ko uski positional weight (8 ki power: $8^0=1, 8^1=8, 8^2=64$...) se multiply karke jodo.

$$
(144)_8 \to (1\times64) + (4\times8) + (4\times1) = 64+32+4 = 100
$$

$$
(144)_8 = (100)_{10}
$$

> Question — $(35)_{10}$ ko octal me convert karo.

**Solution** —
**Step 1** — $35 \div 8 = 4$, remainder $3$
**Step 2** — $4 \div 8 = 0$, remainder $4$

Neeche se upar padho: $4, 3$ → $(35)_{10} = (43)_8$.
Verify: $(4\times8)+(3\times1) = 32+3 = 35$ ✓

---

### Decimal ↔ Hexadecimal Conversion

**Decimal → Hexadecimal** — same divide method, bas ab **16 se divide** karo. Remainder agar 10-15 ke beech aaye toh use A-F letter me likho.

Chalo $26$ (decimal) ko hexadecimal me convert karte hain:

**Step 1** — $26 \div 16 = 1$, remainder $10$ → letter me likho: $A$
**Step 2** — $1 \div 16 = 0$, remainder $1$

Neeche se upar padho: $1, A$ → $(26)_{10} = (1A)_{16}$

**Hexadecimal → Decimal** — har digit ko uski positional weight (16 ki power) se multiply karke jodo (letters ki value pehle number me convert karo).

$$
(1A)_{16} \to (1\times16) + (10\times1) \quad [A = 10]
$$
$$
= 16+10 = 26
$$

> Question — $(50)_{10}$ ko hexadecimal me convert karo.

**Solution** —
**Step 1** — $50 \div 16 = 3$, remainder $2$
**Step 2** — $3 \div 16 = 0$, remainder $3$

Neeche se upar padho: $3, 2$ → $(50)_{10} = (32)_{16}$.
Verify: $(3\times16)+(2\times1) = 48+2 = 50$ ✓

> Question — $(2F)_{16}$ ko decimal me convert karo.

**Solution** — $F = 15$. Weights: $16, 1$.
$(2\times16) + (15\times1) = 32+15 = 47$.
$(2F)_{16} = (47)_{10}$

---

### Binary ↔ Octal Aur Binary ↔ Hex — Shortcut Trick

Binary aur Octal/Hex ke beech convert karne ke liye har baar decimal me jaane ki zaroorat nahi hai — ek fast **grouping shortcut** hai.

**Kyun kaam karta hai ye shortcut?** — Kyunki $8 = 2^3$ hai, isliye binary ke **3-3 bits ka group** ek octal digit ke barabar hota hai. Aur $16 = 2^4$ hai, isliye binary ke **4-4 bits ka group** ek hex digit ke barabar hota hai.

| Conversion | Method |
|------------|--------|
| Binary → Octal | Right se **3-3 bits** ka group banao, har group ko octal digit me convert karo |
| Binary → Hex | Right se **4-4 bits** ka group banao, har group ko hex digit me convert karo |
| Octal → Binary | Har octal digit ko uske 3-bit binary equivalent me expand karo |
| Hex → Binary | Har hex digit ko uske 4-bit binary equivalent me expand karo |

**Binary → Hex Example** — $11110110$ ko hex me convert karo:

**Step 1** — Right se 4-4 bits ke groups banao: $1111$ aur $0110$
**Step 2** — Har group ko decimal me socho, phir hex digit likho: $1111 = 15 = F$, aur $0110 = 6 = 6$

$$
(11110110)_2 = (F6)_{16}
$$

**Binary → Octal Example** — $101110$ ko octal me convert karo:

**Step 1** — Right se 3-3 bits ke groups banao: $101$ aur $110$ (agar left me poore 3 bits na bane toh 0 laga do)
**Step 2** — Har group ko decimal me socho: $101 = 5$, aur $110 = 6$

$$
(101110)_2 = (56)_8
$$

> Yaad Rakho — Octal ke liye bits ko **3-3** me group karo (kyunki $2^3=8$), Hex ke liye **4-4** me group karo (kyunki $2^4=16$). Ye shortcut exam me time bachata hai — direct decimal me jaane ki zaroorat nahi.

> Question — $(1010)_2$ ko hexadecimal me convert karo (shortcut se).

**Solution** — Sirf 4 bits hain, toh ek hi group: $1010 = 10 = A$. $(1010)_2 = (A)_{16}$

> Question — $(11)_8$ ko binary me convert karo.

**Solution** — Har octal digit ko 3-bit binary me expand karo: $1 = 001$, $1 = 001$. Milakar: $(11)_8 = (001001)_2$, ya simply $(1001)_2$ (aage ke extra 0 hata sakte ho).

---

### Octal ↔ Hexadecimal (Via Binary)

Octal aur Hex ke beech direct koi simple divide-trick nahi hai — sabse aasan raasta hai **pehle Binary me convert karo, phir Binary se dusre system me le jao (binary ek "pul/bridge" ki tarah kaam karta hai)**.

Chalo Octal $56$ ko Hexadecimal me convert karte hain:

**Step 1 — Octal ko Binary me badlo:**
$5 = 101$ (3-bit), $\quad 6 = 110$ (3-bit)
Milakar binary bana: $101110$

**Step 2 — Ab is Binary ko Hex me badlo (right se 4-4 ka group):**
$101110$ ko groups me todo: $0010$ aur $1110$ (left me 0 laga diya poora group banane ke liye)
$0010 = 2$, $\quad 1110 = 14 = E$

$$
(56)_8 = (2E)_{16}
$$

> Tip — Octal↔Hex ka question directly kam poocha jaata hai, par agar aaye toh yehi 2-step (binary bridge) method use karo — confusion nahi hoga.

> Question — Hexadecimal $(3)_{16}$ ko Octal me convert karo (binary bridge use karke).

**Solution** —
**Step 1** — Hex $3$ ko 4-bit binary me badlo: $0011$
**Step 2** — Is binary ko 3-3 ke group me todo (right se): $011$ (bacha hua $0$ ignore, kyunki leading zero hai)
$011 = 3$ (octal)

$(3)_{16} = (3)_8$

---

### Binary Addition

Binary addition decimal jaisa hi hai (right se left, carry lagana), bas rules bahut chhote aur simple hain:

```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0   (carry 1 aage)
1 + 1 + 1 = 1  (carry 1 aage, jab pehle se carry ho)
```

Chalo $1011$ aur $1101$ ko add karte hain, ekdum step-by-step (right se left):

**Step 1 (sabse right ka column)** — $1 + 1 = 0$, carry $1$
**Step 2** — $1 + 0 + \text{carry}(1) = 0$, carry $1$
**Step 3** — $0 + 1 + \text{carry}(1) = 0$, carry $1$
**Step 4 (sabse left ka column)** — $1 + 1 + \text{carry}(1) = 1$, carry $1$
**Step 5** — Aakhri bacha hua carry $1$ ko sabse aage likh do

```
  Carry:   1 1 1
            1 0 1 1
        +   1 1 0 1
        -----------
            1 1 0 0 0
```

$$
(1011)_2 + (1101)_2 = (11000)_2
$$

**Verify karo (decimal me convert karke)** — $1011 = 11$, $1101 = 13$. $11+13 = 24$. Aur $(11000)_2 = 16+8+0+0+0 = 24$ ✓ — match ho gaya.

> Question — $(110)_2 + (011)_2$ nikaalo.

**Solution** —
**Step 1** — $0+1 = 1$
**Step 2** — $1+1 = 0$, carry $1$
**Step 3** — $1+0+\text{carry}(1) = 0$, carry $1$
**Step 4** — Bacha hua carry $1$ upar likho

Answer: $1001$. Verify: $110=6$, $011=3$, $6+3=9$, aur $1001 = 8+0+0+1 = 9$ ✓

---

### 1's Complement Aur 2's Complement — Negative Numbers Represent Karna

Computer me koi "minus (−) sign" ka button nahi hota jaisa hum kaagaz par likhte hain — computer sirf 0 aur 1 samajhta hai. Toh negative numbers store karne ke liye ek special trick use hoti hai jise **complement** kehte hain.

**1's Complement:** Har bit ko ulta (invert) kar do — jahan $0$ tha wahan $1$, jahan $1$ tha wahan $0$.

```
Number:        0110 1010
1's Complement: 1001 0101   (sab bits flip)
```

**2's Complement:** Pehle 1's complement nikaalo, phir usme **1 add** kar do.

```
Number:        0110 1010
1's Complement: 1001 0101
        + 1  :         1
2's Complement: 1001 0110
```

> Yaad Rakho — **2's Complement** hi asal me computers me negative numbers store karne ka standard tarika hai — kyunki isme sirf ek hi "zero" hota hai (1's complement me +0 aur -0 dono bante hain jo confusion create karta hai).

> Warning — Complement nikalte waqt pehle **poore bits invert karo**, uske baad hi **1 add karo**. Order galat kiya (pehle add, baad me invert) toh answer galat aayega.

> Question — $1010 0001$ ka 1's aur 2's complement nikaalo.

**Solution** —
**1's Complement** — har bit invert karo: $0101\ 1110$
**2's Complement** — 1's complement me $1$ add karo: $0101\ 1110 + 1 = 0101\ 1111$

---

### Quick Reference Table (0-15)

Ye table exam me revision ke liye kaam aata hai — isko dekh kar khud verify kar sakte ho ki upar wale methods sahi answer de rahe hain ya nahi.

| Decimal | Binary | Octal | Hex |
|---------|--------|-------|-----|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 3 | 0011 | 3 | 3 |
| 4 | 0100 | 4 | 4 |
| 5 | 0101 | 5 | 5 |
| 6 | 0110 | 6 | 6 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 10 | 8 |
| 9 | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 11 | 1011 | 13 | B |
| 12 | 1100 | 14 | C |
| 13 | 1101 | 15 | D |
| 14 | 1110 | 16 | E |
| 15 | 1111 | 17 | F |

> Tip — Exam me conversion ka question aaye toh apna kaam **step-by-step dikhao** (division steps ya grouping) — sirf final answer likhne se poore marks nahi milte, examiner method dekhna chahta hai.

---

### Ab Khud Try Karo — Practice Questions

In sabko pehle khud solve karne ki koshish karo (kaagaz par step likh kar), fir Solution dekho.

> Question — $(17)_{10}$ ko binary me convert karo.

**Solution** —
$17 \div 2 = 8$ remainder $1$
$8 \div 2 = 4$ remainder $0$
$4 \div 2 = 2$ remainder $0$
$2 \div 2 = 1$ remainder $0$
$1 \div 2 = 0$ remainder $1$

Neeche se upar: $1,0,0,0,1$ → $(17)_{10} = (10001)_2$. Verify: $16+0+0+0+1=17$ ✓

> Question — $(1100)_2$ ko decimal me convert karo.

**Solution** — Weights: $8,4,2,1$. $1\times8 + 1\times4 + 0\times2 + 0\times1 = 12$. $(1100)_2 = (12)_{10}$

> Question — $(64)_{10}$ ko octal me convert karo.

**Solution** — $64 \div 8 = 8$ remainder $0$; $8 \div 8 = 1$ remainder $0$; $1 \div 8 = 0$ remainder $1$. Neeche se upar: $1,0,0$ → $(64)_{10} = (100)_8$

> Question — $(D)_{16}$ ki decimal value kya hai, aur $(45)_{10}$ ka hex kya hoga?

**Solution** — $D = 13$ (decimal). $(45)_{10}$ ka hex: $45 \div 16 = 2$ remainder $13 (D)$; $2 \div 16 = 0$ remainder $2$. Neeche se upar: $2, D$ → $(45)_{10} = (2D)_{16}$

> Question — $(11001)_2$ ko hex me convert karo (grouping shortcut se).

**Solution** — Right se 4-4 group: $0001$ aur $1001$ (left me 0 laga diya). $0001 = 1$, $1001 = 9$. $(11001)_2 = (19)_{16}$
