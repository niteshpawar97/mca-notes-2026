## File Concept & Attributes

**File** — related information ka ek named collection jo secondary storage (disk) par persist hota hai. OS file ko ek logical unit ki tarah present karta hai, physical storage details chhupa kar.

### File Attributes

| Attribute | Matlab |
|-----------|--------|
| **Name** | Human-readable identification |
| **Type** | Extension se identify hota hai (.txt, .exe, .c) |
| **Size** | Current size bytes me |
| **Location** | Disk par pointer/address |
| **Protection** | Access control info (kaun read/write/execute kar sakta hai) |
| **Time & Date** | Creation, last modification, last access timestamps |

### Common File Operations

`Create`, `Open`, `Read`, `Write`, `Append`, `Seek`, `Delete`, `Close`, `Rename`, `Truncate`.

---

## Directory Structure Types

Directory files ko organize aur locate karne me help karti hai.

### Single-Level Directory

Sabhi files ek hi directory me hoti hain.

```
┌─────────────────────────────┐
│           Root                │
│  file1  file2  file3  file4    │
└─────────────────────────────┘
```
Problem: Naming conflict — do users same naam ki file nahi rakh sakte.

### Two-Level Directory

Har user ka apna alag directory hota hai.

```
              Root
        ┌──────┴──────┐
     User A          User B
    ┌───┴───┐       ┌───┴───┐
  file1   file2    file1   file3
```
Naming conflict solve ho gaya (users ke beech), lekin ek user ke andar files ko group nahi kar sakte.

### Tree-Structured Directory

Directories ke andar sub-directories ban sakti hain — hierarchy jaisa modern file systems (Windows, Linux).

```
                Root
          ┌──────┴──────┐
        Docs           Photos
       ┌──┴──┐            │
   Work    Personal    Vacation
    │           │           │
  file1      file2      img1.jpg
```

### Acyclic Graph Directory

Files/directories ko **multiple directories me share** kar sakte hain (links/shortcuts ke through), lekin cycle allow nahi hoti (warna infinite traversal ho jaayegi).

```
        Root
    ┌────┴────┐
  Dir A      Dir B
    │           │
    └──► file.txt ◄──┘   (same file dono se accessible — shared link)
```

> Yaad Rakho — Acyclic Graph me file **share** ho sakti hai multiple directories se, lekin **cycle nahi** honi chahiye — warna reference counting aur deletion me infinite loop ka risk hota hai.

> Socho Aise — Tree structure ek "office ka folder system" jaisa hai jahan har department ka apna folder hai aur usme sub-folders hain. Acyclic graph tab hota hai jab ek document (shortcut ke through) do departments dono me dikhta hai bina copy kiye.

---

## File System Implementation — Allocation Methods

Disk par file ke blocks kaise store honge, yeh decide karta hai allocation method:

### Contiguous Allocation

File ke saare blocks disk par **ek saath, continuous** rehte hain.

```
File A: [10][11][12][13]   (4 contiguous blocks)
```

### Linked Allocation

Har block agle block ka pointer rakhta hai — blocks disk par kahin bhi ho sakte hain.

```
File A: [10|→14] → [14|→22] → [22|→null]
```

### Indexed Allocation

Ek separate **index block** hota hai jisme file ke saare data blocks ke pointers store hote hain.

```
Index Block: [10, 14, 22, 30]  →  actual data blocks
```

### Comparison Table

| Method | Advantage | Disadvantage |
|--------|-----------|----------------|
| **Contiguous** | Fast sequential aur random access | External fragmentation, file grow karna mushkil |
| **Linked** | No external fragmentation, easy grow | Sirf sequential access fast hai, random access slow (pointers follow karne padte hain), pointer overhead |
| **Indexed** | Fast random access, no external fragmentation | Index block ke liye extra space chahiye |

> Tip — "Allocation methods compare karo" poochne par yeh table seedha likh do, saath me ek chhota diagram har method ka bana do — full marks ke liye kaafi hota hai.

---

## Protection Mechanisms

File system security ensure karta hai ki sirf authorized users hi files access kar sakein.

### Access Control List (ACL)

Har file ke saath ek list attach hoti hai jisme likha hota hai kaunsa user/group kya operations (read/write/execute) kar sakta hai.

```
File: report.doc
ACL:
  User Nitesh   → Read, Write
  User Guest    → Read only
  Group Admins  → Read, Write, Execute
```

### Common Protection Approaches

| Approach | Description |
|----------|-------------|
| **Access Control List (ACL)** | Har file ke liye detailed per-user/group permissions |
| **Owner/Group/Others Model** | UNIX style — rwx permissions teen levels par (owner, group, others) |
| **Password Protection** | File access ke liye password chahiye |
| **Encryption** | File content ko unreadable bana dena bina key ke |

> Warning — ACL detailed control deta hai lekin bade systems me maintain karna costly ho sakta hai (har file ke liye lambi list). UNIX ka simple `rwx` (owner/group/others) model isi wajah se zyada practical aur widely used hai.

> Example — UNIX permission `rwxr-xr--` ka matlab: Owner ko read+write+execute, Group ko read+execute, Others ko sirf read milta hai.
