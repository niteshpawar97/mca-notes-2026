## File Handling Kyun Zaroori Hai?

Normal program ka data **RAM me hota hai** — program khatam hote hi data gayab ho jata hai. Data ko **permanently store** karne ke liye files use karte hain — isko **file handling** kehte hain, jiske functions `<stdio.h>` me hote hain.

---

## FILE Pointer

Har file operation `FILE` type ke pointer se hota hai — ye ek structure hai jo file ke baare me info (position, buffer, etc.) store karti hai.

```c
FILE *fp;
```

---

## fopen() — File Kholna

```c
fp = fopen("data.txt", "mode");
```

Agar file open nahi ho pati (exist nahi karti, permission nahi hai, etc.), toh `fopen()` **NULL** return karta hai — isko hamesha check karna chahiye.

### Modes Table

| Mode | Matlab | Agar File Exist Nahi Karti | Agar File Exist Karti Hai |
|------|--------|------------------------------|------------------------------|
| `"r"` | Read only | Error (NULL return) | Beginning se padhta hai |
| `"w"` | Write only | Nayi file banti hai | Purana content **delete** ho jata hai |
| `"a"` | Append (end me likhna) | Nayi file banti hai | End me likhna shuru karta hai |
| `"r+"` | Read + Write | Error | Beginning se, overwrite karta hai |
| `"w+"` | Read + Write | Nayi file banti hai | Purana content delete |
| `"a+"` | Read + Append | Nayi file banti hai | End me likhta hai, kahin se bhi padh sakta hai |

```c
FILE *fp = fopen("data.txt", "w");
if (fp == NULL) {
    printf("File open nahi hui!\n");
    exit(1);
}
```

> Yaad Rakho — `"w"` mode file ka **purana data delete** kar deta hai! Agar existing data preserve karna hai toh `"a"` (append) use karo.

---

## fclose() — File Band Karna

```c
fclose(fp);
```

Har `fopen()` ke baad `fclose()` karna **zaroori** hai — warna data buffer me hi reh sakta hai aur file me properly save nahi hota (data loss ka risk).

---

## Character-wise Read/Write — fgetc(), fputc()

```c
fputc('A', fp);          // ek character file me likho
char ch = fgetc(fp);      // ek character file se padho
```

**EOF check karna:**

```c
while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
}
```

---

## Line-wise Read/Write — fgets(), fputs()

```c
fputs("Hello World\n", fp);          // poori line likho

char line[100];
fgets(line, 100, fp);                 // ek line padho (max 99 chars + '\0')
```

> Socho Aise — `fgetc`/`fputc` ek "letter-by-letter" writing hai, jabki `fgets`/`fputs` ek "sentence-by-sentence" writing hai — zyada efficient jab poori lines handle karni ho.

---

## Formatted Read/Write — fprintf(), fscanf()

Ye `printf`/`scanf` jaise hi hain, bas file ke saath kaam karte hain:

```c
fprintf(fp, "%d %s %f", roll, name, marks);   // structured data likhna
fscanf(fp, "%d %s %f", &roll, name, &marks);   // structured data padhna
```

---

## EOF Check Karna

`EOF` (End Of File) ek special value hai jo batata hai file khatam ho gayi. `feof(fp)` function bhi use kar sakte hain:

```c
while (!feof(fp)) {
    ch = fgetc(fp);
    if (ch != EOF)
        putchar(ch);
}
```

> Warning — Sirf `feof()` ka check loop condition me akela use karna risky hai (last read ke baad ek extra iteration ho sakta hai). `fgetc(fp) != EOF` pattern zyada reliable hai.

---

## Complete Example — Write Then Read

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;
    char name[30];
    int roll;
    float marks;

    // ---------- WRITE ----------
    fp = fopen("student.txt", "w");
    if (fp == NULL) {
        printf("File open error!\n");
        exit(1);
    }

    fprintf(fp, "1 Amit 85.5\n");
    fprintf(fp, "2 Bhavna 90.0\n");
    fclose(fp);          // file band karo taaki data save ho jaaye

    // ---------- READ ----------
    fp = fopen("student.txt", "r");
    if (fp == NULL) {
        printf("File open error!\n");
        exit(1);
    }

    printf("Roll\tName\tMarks\n");
    while (fscanf(fp, "%d %s %f", &roll, name, &marks) != EOF) {
        printf("%d\t%s\t%.2f\n", roll, name, marks);
    }

    fclose(fp);
    return 0;
}
```

**Output:**

```
Roll    Name     Marks
1       Amit     85.50
2       Bhavna   90.00
```

---

## Quick Revision Table

| Function | Kaam |
|----------|------|
| `fopen(name, mode)` | File kholta hai, `FILE*` return karta hai |
| `fclose(fp)` | File band karta hai |
| `fgetc(fp)` / `fputc(ch, fp)` | Ek character read/write |
| `fgets(str, n, fp)` / `fputs(str, fp)` | Ek line read/write |
| `fprintf(fp, ...)` / `fscanf(fp, ...)` | Formatted data read/write |
| `feof(fp)` | File end pe hai ya nahi check karta hai |

> Tip — Exam me file handling ka program aata hai toh hamesha `fopen()` ke baad `NULL` check karo aur end me `fclose()` karo — examiner ye 2 cheezein specifically dekhte hain.
