---
title: "Portfolio"
date: 2025-06-20
description: "Ausgewählte Highlights meiner Arbeit, Beiträge und öffentlichen Projekte"
type: "page"
---

## 💼 Projekte

### [UTMS (Universal Time Modeling System)](https://utms.io/)
Ein radikal neuer Ansatz zur Modellierung von Zeit, Gewohnheiten und Aufgaben. Konfiguriert mit programmierbaren LISP-Entitäten, verfolgt es nicht nur Aufgaben, sondern auch Kontext, Bedingungen, Unterbrechungen und emergente Muster. Entwickelt, um die menschliche Handlungsfähigkeit über die Zeit zu erweitern. Der Kern ist in Python geschrieben, die Konfiguration in Hy (LISP auf Python), das Frontend in React + vite + TypeScript.

### [OWASP Raider](https://github.com/OWASP/raider)
Ein Test-Framework für Web-Authentifizierung zur Erkundung komplexer HTTP-Sitzungsabläufe. In Python erstellt, konfigurierbar mit Hy (LISP auf Python). Präsentiert auf mehreren Sicherheitskonferenzen. Raider modelliert Authentifizierung als programmierbare Zustandsmaschine, die es Sicherheitsforschern ermöglicht, Interaktionen über Weiterleitungen, CSRF-Token und mehrstufige Anmeldungen hinweg zu skripten.

### Bug Bounties & Responsible Disclosure
Privat gemeldete kritische Schwachstellen in hochkarätigen Anwendungen und Banksystemen über das [Synack Red Team](https://www.synack.com/red-team/) und andere verantwortungsvolle Kanäle.

---

## 🎤 Vorträge & Präsentationen

- **Ruby Unconf (2019)** — *"Attacking own APIs to find security bugs"*  
  [Habe bei einer Ruby Unconf über API-Sicherheit gesprochen](https://www.youtube.com/watch?v=lGDETbe0b6w) und erklärt, wie Web-Fuzzing funktioniert.

- **Mehrere Demos auf Sicherheitskonferenzen** *(OWASP Raider, 2023)*  
  [Präsentierte Raiders neuartigen Ansatz](https://www.youtube.com/watch?v=e2iDZXhAs-M) zum Testen von Authentifizierungsabläufen mittels zustandsorientiertem Scripting.

---

## 📰 Medienberichte

> Manchmal wurde mein Gesicht verpixelt.  
> Manchmal wurde mein Name geändert.  
> Aber die Arbeit – und ihre Wirkung – war echt.

#### **BDO Foresight 4/2024** — *"Ich gehöre zu den Guten!" – Motive eines Hackers*  
Unter einem Pseudonym von der BDO-Redaktion interviewt, porträtiert dieser ausführliche Artikel meine Geschichte, meine Arbeit im ethischen Hacking und die Entdeckung eines Zero-Days.  
[Vollständigen Artikel lesen (Deutsch)](https://www.bdo.de/de-de/insights/bdo-foresight/bdo-foresight-4-2024) oder [PDF herunterladen](/pdfs/foresight_ausgabe04_final_digital.pdf)

#### **WELT / ComputerBild (2014)** — *"So leicht kommen Hacker an Ihre Urlaubsfotos"*  
Beauftragt, Schwachstellen in Fotokiosken mit Raspberry Pi und Teensy-Hardware zu demonstrieren. Der Artikel wurde mit unscharfen Bildern und ohne Namensnennung veröffentlicht.  
[Welt-Artikel](https://www.welt.de/wirtschaft/webwelt/article130545951/So-leicht-kommen-Hacker-an-Ihre-Urlaubsfotos.html), [Spiegel-Artikel](https://www.spiegel.de/netzwelt/apps/cewe-fotoautomaten-sicherheitsluecken-bei-w-lan-verbindung-a-978291.html), [Computerbild-Pressemitteilung](https://www.computerbild.de/artikel/Pressemitteilung-28-Juni-2014-10269185.html) (alle auf Deutsch).

#### **PortSwigger (2023)** — *"Raider: A tool to test authentication in web applications"*  
Raider wurde im Daily Swig von PortSwigger vorgestellt, wobei die Fähigkeit zur Automatisierung von zustandsorientierten Tests von Web-Authentifizierungsabläufen hervorgehoben wurde.  
[Artikel lesen](https://portswigger.net/daily-swig/raider-a-tool-to-test-authentication-in-web-applications)

#### **PortSwigger (2020)** — *"Tiny Tiny RSS developers act promptly to resolve big, big security problems"*  
Berichterstattung über die kritischen Schwachstellen, die ich in Tiny Tiny RSS entdeckt habe und die zu CVE-2020-25787–89 führten.  
[Artikel lesen](https://portswigger.net/daily-swig/tiny-tiny-rss-developers-act-promptly-to-resolve-big-big-security-problems)

---

## 🛡️ Nennenswerte CVEs

- **[CVE-2020-25787](https://nvd.nist.gov/vuln/detail/CVE-2020-25787)**  
- **[CVE-2020-25788](https://nvd.nist.gov/vuln/detail/CVE-2020-25788)**  
- **[CVE-2020-25789](https://nvd.nist.gov/vuln/detail/CVE-2020-25789)**  
  > Serie von Schwachstellen in TinyTinyRSS, die eine Umgehung der Authentifizierung und Codeausführung ermöglichten. Ein sorgfältig präparierter bösartiger Feed, der URL-Whitelist-Bugs ausnutzte, führte zu SSRF → LFI → FastCGI RCE – dem Schreiben einer PHP-Backdoor, die beliebige Befehlsausführung auf anfälligen TT-RSS Docker-Setups erlaubt. [Blogartikel lesen](https://neagaru.substack.com/p/exploiting-tiny-tiny-rss-2020) und den [PDF-Bericht](https://neagaru.com/pdfs/TinyTinyRSS.pdf).

- **[CVE-2019-11272](https://nvd.nist.gov/vuln/detail/CVE-2019-11272)**  
  > Authentifizierungsschwachstelle im Spring Security Framework von Pivotal. Ein Logikfehler in Spring Security 4.2.x mit PlaintextPasswordEncoder wurde identifiziert, wenn mehrere Spalten für gehashte Passwörter existieren und eine davon NULL ist. Dies führte dazu, dass die Authentifizierung für jeden Benutzernamen mit dem Passwort "null" erfolgreich war. An das Spring-Team gemeldet – in Version 4.2.13 behoben.

---

## 🛠️ Werkzeuge & Beiträge

- **Interne DevSecOps-Pipelines** — Entwurf und Bereitstellung automatisierter Sicherheitsprüfungen in CI/CD-Flows.
- **[Wireshark-Schulungsmaterial](https://www.howtonetwork.com/courses/wireshark/wireshark-certified-network-analyst-wcna/)** — Erstellung von originalen Videokursen und Übungen für die WCNA-Zertifizierung.

---

## 📜 Zertifizierungen

- OSCE — Offensive Security Certified Expert (Prüfung nicht abgeschlossen, da die [Zertifizierung veraltet ist](https://www.offsec.com/blog/retiring-ctp-intro-new-courses/))  
- [OSCP](https://www.offsec.com/courses/pen-200/) (2017) — Offensive Security Certified Professional  
- [OSWP](https://www.offsec.com/courses/pen-210/) (2018) — Offensive Security Wireless Professional  
- [WCNA](https://www.wcnacertification.com/) (2012) — Wireshark Certified Network Analyst  
- [CompTIA A+](https://partners.comptia.org/certifications/a) (2010)  
- Scrum Master ([PSM-i](https://www.scrum.org/assessments/professional-scrum-master-i-certification))

---

## 🧠 Fähigkeiten

Eine vollständige Liste der Werkzeuge, Technologien und Fähigkeiten finden Sie auf [meiner Kompetenz-Seite](/skills).

---

Möchten Sie zusammenarbeiten, mich beauftragen oder zu einem Sicherheitsthema beraten?  
[Kontaktieren Sie mich](/contact/) oder [vereinbaren Sie ein Meeting](https://cal.com/neagaru)
