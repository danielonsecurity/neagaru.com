---
title: "Portofoliu"
date: 2025-06-20
description: "O selecție a lucrărilor, contribuțiilor și proiectelor mele publice"
type: "page"
---

## 💼 Proiecte

### [UTMS (Universal Time Modeling System)](https://utms.io/)
O abordare radical nouă a modelării timpului, obiceiurilor și sarcinilor. Configurat cu entități programabile LISP, urmărește nu doar sarcinile, ci și contextul, condițiile, întreruperile și modelele emergente. Proiectat pentru a spori controlul uman asupra timpului. Nucleul este scris în Python, configurarea în Hy (LISP pe Python), frontend-ul în React + vite + TypeScript.

### [OWASP Raider](https://github.com/OWASP/raider)
Un framework de testare a autentificării web pentru explorarea fluxurilor complexe de sesiune HTTP. Construit în Python, configurabil cu Hy (LISP pe Python). Prezentat la mai multe conferințe de securitate. Raider modelează autentificarea ca o mașină de stări programabilă, permițând cercetătorilor în securitate să scripteze interacțiuni complexe ce implică redirecționări, token-uri CSRF și autentificări în mai mulți pași.

### Bug Bounties & Responsible Disclosure
Am dezvăluit în mod privat vulnerabilități critice în aplicații de profil înalt și sisteme bancare prin intermediul [Synack Red Team](https://www.synack.com/red-team/) și alte canale responsabile.

---

## 🎤 Prezentări și Discursuri

- **Ruby Unconf (2019)** — *"Attacking own APIs to find security bugs"*  
  [Am vorbit despre securitatea API-urilor](https://www.youtube.com/watch?v=lGDETbe0b6w) la un eveniment Ruby Unconf, explicând cum funcționează web fuzzing-ul.

- **Mai multe demonstrații la conferințe de securitate** *(OWASP Raider, 2023)*  
  [Am prezentat abordarea inovatoare a lui Raider](https://www.youtube.com/watch?v=e2iDZXhAs-M) pentru testarea fluxurilor de autentificare folosind scripturi stateful (cu menținerea stării).

---

## 📰 Apariții Media

> Uneori, fața mi-a fost pixelată.  
> Uneori, numele mi-a fost schimbat.  
> Dar munca — și impactul — au fost reale.

#### **BDO Foresight 4/2024** — *"Ich gehöre zu den Guten!" – Motive eines Hackers*  
Intervievat sub pseudonim de echipa editorială BDO, acest articol de fond prezintă povestea mea, munca de hacking etic și descoperirea unui zero-day.  
[Citiți articolul complet (în germană)](https://www.bdo.de/de-de/insights/bdo-foresight/bdo-foresight-4-2024) sau [Descărcați PDF-ul](/pdfs/foresight_ausgabe04_final_digital.pdf)

#### **WELT / ComputerBild (2014)** — *"So leicht kommen Hacker an Ihre Urlaubsfotos"*  
Am fost angajat pentru a demonstra vulnerabilitățile chioșcurilor foto folosind hardware Raspberry Pi și Teensy. Articolul a fost publicat cu imagini blurate și fără atribuire.  
[Articolul Welt](https://www.welt.de/wirtschaft/webwelt/article130545951/So-leicht-kommen-Hacker-an-Ihre-Urlaubsfotos.html), [Articolul Spiegel](https://www.spiegel.de/netzwelt/apps/cewe-fotoautomaten-sicherheitsluecken-bei-w-lan-verbindung-a-978291.html), [Comunicat de presă Computerbild](https://www.computerbild.de/artikel/Pressemitteilung-28-Juni-2014-10269185.html) (toate în germană).

#### **PortSwigger (2023)** — *"Raider: A tool to test authentication in web applications"*  
Raider a apărut în Daily Swig de la PortSwigger, subliniind capacitatea sa de a automatiza testarea stateful a fluxurilor de autentificare web.  
[Citiți articolul](https://portswigger.net/daily-swig/raider-a-tool-to-test-authentication-in-web-applications)

#### **PortSwigger (2020)** — *"Tiny Tiny RSS developers act promptly to resolve big, big security problems"*  
Reportaj despre vulnerabilitățile critice pe care le-am descoperit în Tiny Tiny RSS, care au condus la CVE-2020-25787–89.  
[Citiți articolul](https://portswigger.net/daily-swig/tiny-tiny-rss-developers-act-promptly-to-resolve-big-big-security-problems)

---

## 🛡️ CVE-uri Notabile

- **[CVE-2020-25787](https://nvd.nist.gov/vuln/detail/CVE-2020-25787)**  
- **[CVE-2020-25788](https://nvd.nist.gov/vuln/detail/CVE-2020-25788)**  
- **[CVE-2020-25789](https://nvd.nist.gov/vuln/detail/CVE-2020-25789)**  
  > Serie de vulnerabilități în TinyTinyRSS ce permit ocolirea autentificării și execuția de cod. Un feed malițios special creat, care exploatează bug-uri în whitelist-ul de URL-uri, a condus la SSRF → LFI → RCE prin FastCGI — scrierea unui backdoor PHP care permite execuția arbitrară de comenzi pe configurațiile vulnerabile TT-RSS Docker. [Citiți articolul de pe blog](https://neagaru.substack.com/p/exploiting-tiny-tiny-rss-2020) și [raportul PDF](https://neagaru.com/pdfs/TinyTinyRSS.pdf).

- **[CVE-2019-11272](https://nvd.nist.gov/vuln/detail/CVE-2019-11272)**  
  > Vulnerabilitate de autentificare în Spring Security Framework de la Pivotal. Am identificat un defect logic în Spring Security 4.2.x cu PlaintextPasswordEncoder atunci când există mai multe coloane pentru parole hash-uite și una dintre ele este NULL. Acest lucru făcea ca autentificarea să reușească pentru orice nume de utilizator cu parola "null". Raportat echipei Spring — remediat în versiunea 4.2.13.

---

## 🛠️ Unelte & Contribuții

- **Pipeline-uri interne DevSecOps** — am proiectat și implementat verificări automate de securitate în fluxurile CI/CD.
- **[Materiale de training pentru Wireshark](https://www.howtonetwork.com/courses/wireshark/wireshark-certified-network-analyst-wcna/)** — am creat cursuri video originale și exerciții pentru certificarea WCNA.

---

## 📜 Certificări

- OSCE — Offensive Security Certified Expert (nu am finalizat examenul, deoarece [certificarea a fost retrasă](https://www.offsec.com/blog/retiring-ctp-intro-new-courses/))  
- [OSCP](https://www.offsec.com/courses/pen-200/) (2017) — Offensive Security Certified Professional  
- [OSWP](https://www.offsec.com/courses/pen-210/) (2018) — Offensive Security Wireless Professional  
- [WCNA](https://www.wcnacertification.com/) (2012) — Wireshark Certified Network Analyst  
- [CompTIA A+](https://partners.comptia.org/certifications/a) (2010)  
- Scrum Master ([PSM-i](https://www.scrum.org/assessments/professional-scrum-master-i-certification))

---

## 🧠 Competențe

Pentru o listă exhaustivă de unelte, tehnologii și competențe, consultați [pagina mea de competențe](/skills).

---

Doriți să colaborăm, să mă angajați sau să mă consultați pe un subiect de securitate?  
[Contactați-mă](/contact/) sau [programați o întâlnire](https://cal.com/neagaru)
