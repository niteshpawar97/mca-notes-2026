// MCA First Semester (RGPV Bhopal) — subject, unit & topic structure
// Content markdown files live in ./content/<subjectCode>/<topicId>.md
// and are loaded automatically below via import.meta.glob.

const contentFiles = import.meta.glob('./content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function getContent(code, topicId) {
  const path = `./content/${code}/${topicId}.md`;
  return (
    contentFiles[path] ||
    `> Notes yahan jald add honge. (Content coming soon for **${topicId}**.)`
  );
}

// Each topic: { id, title, titleHi }
// Each unit: { id, title, subtitle, topics: [...] }
// Each subject: { code, title, subtitle, subtitleHi, icon, color, type, units: [...] }

const rawSubjects = [
  {
    code: 'bridge-computer',
    title: 'Bridge Course',
    subtitle: 'Basic Computer Knowledge',
    subtitleHi: 'बेसिक कंप्यूटर ज्ञान',
    icon: '🖱️',
    color: '#0d9488',
    type: 'bridge',
    units: [
      {
        id: 1,
        title: 'Unit 1',
        subtitle: 'Introduction to Computers',
        topics: [
          { id: 'bcc-computer-basics', title: 'Definition, Types & Evolution of Computers', titleHi: 'कंप्यूटर की परिभाषा, प्रकार और विकास' },
          { id: 'bcc-number-systems', title: 'Number Systems — Decimal, Binary, Octal, Hexadecimal', titleHi: 'संख्या पद्धतियाँ' },
        ],
      },
      {
        id: 2,
        title: 'Unit 2',
        subtitle: 'Components of a Computer System',
        topics: [
          { id: 'bcc-hardware', title: 'Hardware Components — Input, Output & Storage Devices', titleHi: 'हार्डवेयर घटक' },
          { id: 'bcc-cpu', title: 'CPU — Control Unit, ALU & Registers', titleHi: 'CPU — कंट्रोल यूनिट, ALU और रजिस्टर' },
        ],
      },
      {
        id: 3,
        title: 'Unit 3',
        subtitle: 'System & Application Software',
        topics: [
          { id: 'bcc-system-software', title: 'System Software — OS, Device Drivers & Utilities', titleHi: 'सिस्टम सॉफ्टवेयर' },
          { id: 'bcc-application-software', title: 'Application Software — Word Processors to Programming Languages', titleHi: 'एप्लीकेशन सॉफ्टवेयर' },
        ],
      },
      {
        id: 4,
        title: 'Unit 4',
        subtitle: 'Computer Networks',
        topics: [
          { id: 'bcc-networks-internet', title: 'Computer Networks, Internet & WWW Basics', titleHi: 'कंप्यूटर नेटवर्क और इंटरनेट' },
          { id: 'bcc-ecommerce', title: 'Web Browsers, Email, URLs & E-commerce', titleHi: 'वेब ब्राउज़र, ईमेल और ई-कॉमर्स' },
        ],
      },
      {
        id: 5,
        title: 'Unit 5',
        subtitle: 'Programming Fundamentals',
        topics: [
          { id: 'bcc-programming-intro', title: 'Programming Languages — Low-level vs High-level, Compilers & Interpreters', titleHi: 'प्रोग्रामिंग भाषाएँ' },
          { id: 'bcc-algorithms-flowcharts', title: 'Algorithms, Flowcharts & Problem Solving', titleHi: 'एल्गोरिदम और फ्लोचार्ट' },
          { id: 'bcc-basic-concepts', title: 'Basic Programming Concepts — Variables, Data Types, Operators, Control Statements', titleHi: 'बेसिक प्रोग्रामिंग अवधारणाएँ' },
        ],
      },
    ],
  },
  {
    code: 'bridge-maths',
    title: 'Bridge Course',
    subtitle: 'Mathematics',
    subtitleHi: 'गणित',
    icon: '➗',
    color: '#ca8a04',
    type: 'bridge',
    units: [
      {
        id: 1,
        title: 'Unit 1',
        subtitle: 'Matrices',
        topics: [
          { id: 'bcm-matrices', title: 'Matrices — Types, Operations & Properties', titleHi: 'मैट्रिक्स — प्रकार और संक्रियाएँ' },
        ],
      },
      {
        id: 2,
        title: 'Unit 2',
        subtitle: 'Determinants',
        topics: [
          { id: 'bcm-determinants', title: 'Determinants, Adjoint, Inverse & System of Linear Equations', titleHi: 'सारणिक, ऐड्जॉइंट और प्रतिलोम' },
        ],
      },
      {
        id: 3,
        title: 'Unit 3',
        subtitle: 'Straight Lines',
        topics: [
          { id: 'bcm-straight-lines', title: 'Straight Lines — Forms of Equations & Angle Between Lines', titleHi: 'सरल रेखाएँ' },
        ],
      },
      {
        id: 4,
        title: 'Unit 4',
        subtitle: 'Conic Sections',
        topics: [
          { id: 'bcm-conic-sections', title: 'Conic Sections — Circle, Parabola, Ellipse & Hyperbola', titleHi: 'शंकु परिच्छेद' },
        ],
      },
      {
        id: 5,
        title: 'Unit 5',
        subtitle: 'Introduction to 3D Geometry',
        topics: [
          { id: 'bcm-3d-geometry', title: 'Introduction to Three-Dimensional Geometry', titleHi: 'त्रि-आयामी ज्यामिति का परिचय' },
        ],
      },
    ],
  },
  {
    code: 'mca101',
    title: 'MCA 101',
    subtitle: 'Programming in C with Data Structure',
    subtitleHi: 'सी प्रोग्रामिंग और डेटा स्ट्रक्चर',
    icon: '💻',
    color: '#6366f1',
    type: 'theory',
    units: [
      {
        id: 1,
        title: 'Unit I',
        subtitle: 'Fundamentals of C Programming',
        topics: [
          { id: 'c-structure-datatypes', title: 'Structure of a C Program & Data Types', titleHi: 'C प्रोग्राम की संरचना और डेटा टाइप्स' },
          { id: 'c-operators-io', title: 'Operators, Expressions, Preprocessor & I/O', titleHi: 'ऑपरेटर, एक्सप्रेशन, प्रीप्रोसेसर और इनपुट-आउटपुट' },
          { id: 'c-control-iteration', title: 'Control & Iteration Constructs', titleHi: 'कंट्रोल और इटरेशन स्ट्रक्चर' },
          { id: 'c-functions', title: 'Functions, Recursion & Storage Classes', titleHi: 'फंक्शन, रिकर्शन और स्टोरेज क्लासेस' },
        ],
      },
      {
        id: 2,
        title: 'Unit II',
        subtitle: 'Arrays, Strings, Pointers, Structures, Files',
        topics: [
          { id: 'c-arrays', title: 'Arrays — 1D, 2D & Multi-dimensional', titleHi: 'ऐरे — 1D, 2D और मल्टी-डायमेंशनल' },
          { id: 'c-strings', title: 'Strings & String Operations', titleHi: 'स्ट्रिंग्स और स्ट्रिंग ऑपरेशन' },
          { id: 'c-pointers', title: 'Pointers — Expressions, Arithmetic & Function Pointers', titleHi: 'पॉइंटर्स — एक्सप्रेशन, अर्थमेटिक और फंक्शन पॉइंटर' },
          { id: 'c-dynamic-memory', title: 'Dynamic Memory Allocation (malloc, calloc, free)', titleHi: 'डायनामिक मेमोरी एलोकेशन' },
          { id: 'c-structures-unions', title: 'Structures & Unions', titleHi: 'स्ट्रक्चर और यूनियन' },
          { id: 'c-file-handling', title: 'File Handling in C', titleHi: 'C में फाइल हैंडलिंग' },
        ],
      },
      {
        id: 3,
        title: 'Unit III',
        subtitle: 'Overview of Data Structure, Stack & Queue',
        topics: [
          { id: 'ds-intro-complexity', title: 'Introduction to DS & Algorithm Complexity', titleHi: 'डेटा स्ट्रक्चर परिचय और एल्गोरिदम जटिलता' },
          { id: 'ds-stack', title: 'Stack — Operations, Infix/Postfix/Prefix', titleHi: 'स्टैक — ऑपरेशन, इन्फिक्स/पोस्टफिक्स/प्रीफिक्स' },
          { id: 'ds-queue', title: 'Queue — Linear, Circular & Linked Implementation', titleHi: 'क्यू — लीनियर, सर्कुलर और लिंक्ड इम्प्लीमेंटेशन' },
        ],
      },
      {
        id: 4,
        title: 'Unit IV',
        subtitle: 'General List (Linked List)',
        topics: [
          { id: 'll-intro-contiguous', title: 'List Concept & Contiguous Implementation', titleHi: 'लिस्ट की अवधारणा और कंटिग्युअस इम्प्लीमेंटेशन' },
          { id: 'll-singly', title: 'Singly Linked List — Operations', titleHi: 'सिंगली लिंक्ड लिस्ट — ऑपरेशन' },
          { id: 'll-doubly-circular', title: 'Doubly & Circular Linked List', titleHi: 'डबली और सर्कुलर लिंक्ड लिस्ट' },
        ],
      },
      {
        id: 5,
        title: 'Unit V',
        subtitle: 'Trees',
        topics: [
          { id: 'tree-terminology', title: 'Tree Terminology & Binary Trees', titleHi: 'ट्री शब्दावली और बाइनरी ट्री' },
          { id: 'tree-traversals', title: 'Tree Traversals — Preorder, Inorder, Postorder', titleHi: 'ट्री ट्रैवर्सल' },
          { id: 'tree-expression-linked', title: 'Expression Trees & Linked Representation', titleHi: 'एक्सप्रेशन ट्री और लिंक्ड रिप्रेजेंटेशन' },
          { id: 'tree-threaded-heap', title: 'Threaded Binary Trees, Forests & Heap', titleHi: 'थ्रेडेड बाइनरी ट्री, फॉरेस्ट और हीप' },
        ],
      },
    ],
  },
  {
    code: 'mca102',
    title: 'MCA 102',
    subtitle: 'Statistical Mathematics',
    subtitleHi: 'सांख्यिकीय गणित',
    icon: '📐',
    color: '#8b5cf6',
    type: 'theory',
    units: [
      {
        id: 1,
        title: 'Unit I',
        subtitle: 'Matrices and Eigenvalue Problems',
        topics: [
          { id: 'matrix-rank-equations', title: 'Rank of a Matrix & System of Linear Equations', titleHi: 'मैट्रिक्स की रैंक और रैखिक समीकरण' },
          { id: 'eigen-cayley-hamilton', title: 'Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem', titleHi: 'आइगेनवैल्यू, आइगेनवेक्टर और कैली-हैमिल्टन प्रमेय' },
        ],
      },
      {
        id: 2,
        title: 'Unit II',
        subtitle: 'Calculus',
        topics: [
          { id: 'limits-continuity', title: 'Limit, Continuity, Differentiability & Mean Value Theorems', titleHi: 'लिमिट, निरंतरता और माध्य मान प्रमेय' },
          { id: 'maxima-minima-beta-gamma', title: 'Maxima-Minima, Chain Rule, Beta & Gamma Functions', titleHi: 'उच्चिष्ठ-निम्निष्ठ, बीटा और गामा फलन' },
          { id: 'multivariable-functions', title: 'Functions of Multiple Variables & Partial Derivatives', titleHi: 'बहुचर फलन और आंशिक अवकलज' },
        ],
      },
      {
        id: 3,
        title: 'Unit III',
        subtitle: 'Testing of Hypothesis',
        topics: [
          { id: 'sampling-distribution', title: 'Sampling Distributions & Small/Large Sample Tests', titleHi: 'सैंपलिंग डिस्ट्रीब्यूशन' },
          { id: 'normal-t-chisquare-f', title: 'Normal, Student\'s t, Chi-square & F Distribution Tests', titleHi: 'नॉर्मल, t, ची-स्क्वायर और F वितरण' },
          { id: 'independence-goodness-fit', title: 'Tests for Independence & Goodness of Fit', titleHi: 'स्वतंत्रता और अच्छाई-फिट परीक्षण' },
        ],
      },
      {
        id: 4,
        title: 'Unit IV',
        subtitle: 'Probability and Probability Distribution',
        topics: [
          { id: 'probability-axioms', title: 'Axioms of Probability & Conditional Probability', titleHi: 'प्रायिकता के अभिगृहीत और सशर्त प्रायिकता' },
          { id: 'pmf-pdf', title: 'Probability Mass & Density Functions', titleHi: 'प्रायिकता द्रव्यमान और घनत्व फलन' },
          { id: 'binomial-poisson-normal', title: 'Binomial, Poisson & Normal Distributions', titleHi: 'द्विपद, प्वासों और नॉर्मल वितरण' },
        ],
      },
      {
        id: 5,
        title: 'Unit V',
        subtitle: 'Discrete Math',
        topics: [
          { id: 'sets-counting', title: 'Sets, Subsets, Power Sets & Counting Functions', titleHi: 'समुच्चय, उपसमुच्चय और गणना फलन' },
          { id: 'proof-techniques-logic', title: 'Proof Techniques & Propositional Logic', titleHi: 'प्रमाण तकनीक और तार्किक कथन' },
          { id: 'ds-graph-properties', title: 'Basic Data Structures & Graph Properties', titleHi: 'बेसिक डेटा स्ट्रक्चर और ग्राफ गुण' },
        ],
      },
    ],
  },
  {
    code: 'mca103',
    title: 'MCA 103',
    subtitle: 'Operating System and Architecture',
    subtitleHi: 'ऑपरेटिंग सिस्टम और आर्किटेक्चर',
    icon: '🖥️',
    color: '#059669',
    type: 'theory',
    units: [
      {
        id: 1,
        title: 'Unit I',
        subtitle: 'Register Transfer & Processor Architecture',
        topics: [
          { id: 'register-transfer-micro-ops', title: 'Register Transfer Language & Micro-operations', titleHi: 'रजिस्टर ट्रांसफर भाषा और माइक्रो-ऑपरेशन' },
          { id: 'processor-instruction-cycle', title: 'Simple Processor, Instruction Formats & Addressing Modes', titleHi: 'प्रोसेसर, इंस्ट्रक्शन फॉर्मेट और एड्रेसिंग मोड' },
          { id: 'io-organization-dma', title: 'I/O Organization, Interrupts & DMA', titleHi: 'I/O संगठन, इंटरप्ट और DMA' },
          { id: '8086-architecture', title: '8086 Pin Diagram & Architecture', titleHi: '8086 पिन डायग्राम और आर्किटेक्चर' },
        ],
      },
      {
        id: 2,
        title: 'Unit II',
        subtitle: 'OS Introduction & Process Management',
        topics: [
          { id: 'os-evolution-types', title: 'Evolution & Types of Operating Systems', titleHi: 'ऑपरेटिंग सिस्टम का विकास और प्रकार' },
          { id: 'process-concept-pcb', title: 'Process Concept, PCB & OS Structure', titleHi: 'प्रोसेस अवधारणा और PCB' },
          { id: 'cpu-scheduling', title: 'CPU Scheduling Algorithms', titleHi: 'CPU शेड्यूलिंग एल्गोरिदम' },
        ],
      },
      {
        id: 3,
        title: 'Unit III',
        subtitle: 'Memory Management',
        topics: [
          { id: 'swapping-paging', title: 'Swapping, Paging & Paging Hardware', titleHi: 'स्वैपिंग और पेजिंग' },
          { id: 'page-replacement', title: 'Page Replacement Algorithms (LRU, FIFO, Optimal)', titleHi: 'पेज रिप्लेसमेंट एल्गोरिदम' },
          { id: 'segmentation', title: 'Segmentation & Segmented Paging', titleHi: 'सेगमेंटेशन' },
        ],
      },
      {
        id: 4,
        title: 'Unit IV',
        subtitle: 'IPC, Synchronization & Deadlocks',
        topics: [
          { id: 'mutual-exclusion-semaphores', title: 'Mutual Exclusion & Semaphores', titleHi: 'म्युचुअल एक्सक्लूजन और सेमाफोर' },
          { id: 'classical-sync-problems', title: 'Classical Problems — Dining Philosophers, Producer-Consumer', titleHi: 'क्लासिकल सिंक्रोनाइजेशन समस्याएं' },
          { id: 'deadlocks-bankers', title: 'Deadlocks — Detection, Prevention & Banker\'s Algorithm', titleHi: 'डेडलॉक और बैंकर्स एल्गोरिदम' },
        ],
      },
      {
        id: 5,
        title: 'Unit V',
        subtitle: 'File System & I/O',
        topics: [
          { id: 'file-systems', title: 'File Systems, Directories & Protection', titleHi: 'फाइल सिस्टम और डायरेक्टरी' },
          { id: 'io-hardware-software', title: 'I/O Hardware & Software Principles', titleHi: 'I/O हार्डवेयर और सॉफ्टवेयर' },
          { id: 'disk-scheduling', title: 'Disk Scheduling Algorithms (FCFS, SCAN, C-SCAN)', titleHi: 'डिस्क शेड्यूलिंग एल्गोरिदम' },
        ],
      },
    ],
  },
  {
    code: 'mca104',
    title: 'MCA 104',
    subtitle: 'Information Technology',
    subtitleHi: 'सूचना प्रौद्योगिकी',
    icon: '🌐',
    color: '#d97706',
    type: 'theory',
    units: [
      {
        id: 1,
        title: 'Unit I',
        subtitle: 'Modern Communication Technology',
        topics: [
          { id: 'comm-tech-basics', title: 'CDMA, GSM, VOIP, Bluetooth, WiFi & 2G-5G', titleHi: 'संचार तकनीक — CDMA, GSM, 2G-5G' },
          { id: 'satellite-radar-fiber', title: 'Radar, Satellite Communication & Fiber Optics', titleHi: 'रडार, सैटेलाइट और फाइबर ऑप्टिक्स' },
          { id: 'gis', title: 'Geographic Information System (GIS)', titleHi: 'भौगोलिक सूचना प्रणाली (GIS)' },
        ],
      },
      {
        id: 2,
        title: 'Unit II',
        subtitle: 'Information Security & M-Commerce',
        topics: [
          { id: 'info-security', title: 'Information Security — Cryptography, Digital Signature, Firewall', titleHi: 'सूचना सुरक्षा — क्रिप्टोग्राफी, फायरवॉल' },
          { id: 'mobile-commerce', title: 'Mobile Commerce & Digital Marketing', titleHi: 'मोबाइल कॉमर्स और डिजिटल मार्केटिंग' },
        ],
      },
      {
        id: 3,
        title: 'Unit III',
        subtitle: 'Artificial Intelligence',
        topics: [
          { id: 'ai-concept-branches', title: 'Concept & Branches of AI', titleHi: 'AI की अवधारणा और शाखाएं' },
          { id: 'ai-applications', title: 'Applications of AI (ML, NLP, Expert Systems, Fuzzy Logic)', titleHi: 'AI के अनुप्रयोग' },
        ],
      },
      {
        id: 4,
        title: 'Unit IV',
        subtitle: 'IoT and Virtual Reality',
        topics: [
          { id: 'iot-intro', title: 'Introduction to IoT — Design & Functional Blocks', titleHi: 'IoT का परिचय' },
          { id: 'vr-embedded', title: 'Virtual Reality, Smart & Embedded Systems', titleHi: 'वर्चुअल रियलिटी और एम्बेडेड सिस्टम' },
        ],
      },
      {
        id: 5,
        title: 'Unit V',
        subtitle: 'Distributed & Cloud Computing',
        topics: [
          { id: 'distributed-cluster-grid', title: 'Distributed, Cluster & Grid Computing', titleHi: 'डिस्ट्रीब्यूटेड, क्लस्टर और ग्रिड कंप्यूटिंग' },
          { id: 'cloud-computing', title: 'Cloud Computing — Models, Issues & Resources', titleHi: 'क्लाउड कंप्यूटिंग' },
        ],
      },
    ],
  },
  {
    code: 'mca105',
    title: 'MCA 105',
    subtitle: 'Communication Skills',
    subtitleHi: 'संचार कौशल',
    icon: '🗣️',
    color: '#dc2626',
    type: 'theory',
    units: [
      {
        id: 1,
        title: 'Unit I',
        subtitle: 'Listening & Speaking',
        topics: [
          { id: 'listening-skills', title: 'Listening — Barriers & Improvement Techniques', titleHi: 'श्रवण कौशल' },
          { id: 'speaking-skills', title: 'Speaking — Paralanguage & Presentation Skills', titleHi: 'वाक् कौशल और प्रस्तुति' },
        ],
      },
      {
        id: 2,
        title: 'Unit II',
        subtitle: 'Reading & Writing',
        topics: [
          { id: 'reading-skills', title: 'Reading — Kinds, Difficulties & Strategies', titleHi: 'पठन कौशल' },
          { id: 'writing-skills', title: 'Effective Writing — Reports, Letters, Articles', titleHi: 'प्रभावी लेखन' },
        ],
      },
      {
        id: 3,
        title: 'Unit III',
        subtitle: 'Communication & Interpersonal Skills',
        topics: [
          { id: 'communication-modes-barriers', title: 'Modes of Communication & Barriers', titleHi: 'संचार के तरीके और बाधाएं' },
          { id: 'interpersonal-nonverbal', title: 'Interpersonal, Negotiation & Non-Verbal Communication', titleHi: 'पारस्परिक और अशाब्दिक संचार' },
        ],
      },
      {
        id: 4,
        title: 'Unit IV',
        subtitle: 'Group Dynamic Skills',
        topics: [
          { id: 'group-discussion-teamwork', title: 'Group Discussion, Team Building & Leadership', titleHi: 'ग्रुप डिस्कशन और टीम वर्क' },
          { id: 'time-stress-management', title: 'Decision Making, Creativity & Time-Stress Management', titleHi: 'समय और तनाव प्रबंधन' },
        ],
      },
      {
        id: 5,
        title: 'Unit V',
        subtitle: 'Interview Skills',
        topics: [
          { id: 'interview-types-prep', title: 'Types of Interviews & Preparing for Interview', titleHi: 'साक्षात्कार के प्रकार और तैयारी' },
          { id: 'cv-mock-interview', title: 'Preparing a CV & Mock Interview Tips', titleHi: 'सीवी और मॉक इंटरव्यू' },
        ],
      },
    ],
  },
  {
    code: 'mca106',
    title: 'MCA 106',
    subtitle: 'C and DS Lab',
    subtitleHi: 'सी और डेटा स्ट्रक्चर लैब',
    icon: '🧪',
    color: '#0891b2',
    type: 'lab',
    units: [
      {
        id: 1,
        title: 'Lab Programs',
        subtitle: 'Practical List (13 Programs)',
        topics: [
          { id: 'lab-control-iterative', title: '1-2. Control Structures & Iterative Programs', titleHi: 'कंट्रोल और इटरेटिव प्रोग्राम' },
          { id: 'lab-array-string', title: '3-4. Array & String Manipulation', titleHi: 'ऐरे और स्ट्रिंग प्रोग्राम' },
          { id: 'lab-structures', title: '5. Program Using Structures', titleHi: 'स्ट्रक्चर प्रोग्राम' },
          { id: 'lab-stack', title: '6-7. Stack Program & Infix-to-Postfix using Linked List', titleHi: 'स्टैक प्रोग्राम' },
          { id: 'lab-queue-ll', title: '8-10. Queue & Linked List Programs', titleHi: 'क्यू और लिंक्ड लिस्ट प्रोग्राम' },
          { id: 'lab-dynamic-file', title: '11-12. Dynamic Allocation & File Handling', titleHi: 'डायनामिक एलोकेशन और फाइल हैंडलिंग' },
          { id: 'lab-trees', title: '13. Program for Trees', titleHi: 'ट्री प्रोग्राम' },
        ],
      },
    ],
  },
  {
    code: 'mca107',
    title: 'MCA 107',
    subtitle: 'Operating System Lab',
    subtitleHi: 'ऑपरेटिंग सिस्टम लैब',
    icon: '⚙️',
    color: '#7c3aed',
    type: 'lab',
    units: [
      {
        id: 1,
        title: 'Lab Programs',
        subtitle: 'Practical List (8 Programs)',
        topics: [
          { id: 'lab-cpu-scheduling', title: '1. CPU Scheduling — FCFS, SJF, Round Robin, Priority', titleHi: 'CPU शेड्यूलिंग प्रोग्राम' },
          { id: 'lab-file-allocation', title: '2. File Allocation Strategies', titleHi: 'फाइल एलोकेशन' },
          { id: 'lab-memory-allocation', title: '3. Contiguous Memory Allocation (Worst/Best/First-fit)', titleHi: 'मेमोरी एलोकेशन' },
          { id: 'lab-deadlock', title: '4. Deadlock Management Technique', titleHi: 'डेडलॉक प्रबंधन' },
          { id: 'lab-disk-scheduling', title: '5. Disk Scheduling — FCFS, SCAN, C-SCAN', titleHi: 'डिस्क शेड्यूलिंग' },
          { id: 'lab-page-replacement', title: '6. Page Replacement — FIFO, LRU, LFU', titleHi: 'पेज रिप्लेसमेंट' },
          { id: 'lab-producer-consumer', title: '7. Producer-Consumer using Semaphores', titleHi: 'प्रोड्यूसर-कंज्यूमर' },
          { id: 'lab-dining-philosophers', title: '8. Dining Philosophers Problem', titleHi: 'डाइनिंग फिलॉसफर्स समस्या' },
        ],
      },
    ],
  },
];

export const subjects = rawSubjects.map((subject) => ({
  ...subject,
  units: subject.units.map((unit) => ({
    ...unit,
    topics: unit.topics.map((topic) => ({
      ...topic,
      content: getContent(subject.code, topic.id),
    })),
  })),
}));

export const allTopicsFlat = subjects.flatMap((s) =>
  s.units.flatMap((u) => u.topics.map((t) => ({ subject: s, unit: u, topic: t })))
);
