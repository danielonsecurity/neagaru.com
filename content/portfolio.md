---
title: "Portfolio"
date: 2025-06-20
description: "Selected highlights of my work, contributions, and public projects"
type: "page"
---

## 💼 Projects

### [UTMS (Universal Time Modeling System)](https://utms.io/)
A radically new approach to time, habit, and task modeling. Configured
with programmable LISP entities, it tracks not just tasks but context,
conditions, interruptions, and emergent patterns. Designed to augment
human agency over time. The core is written in Python, the
configuration in Hy (LISP on Python), frontend in React + vite +
TypeScript.


### [OWASP Raider](https://github.com/DigeeX/raider)
A web authentication testing framework for exploring complex HTTP
session workflows. Built in Python, configurable with Hy (LISP on
Python).  Presented at multiple security conferences. Raider models
authentication as a programmable state machine, allowing security
researchers to script interactions across redirects, CSRF tokens, and
multi-step logins.


### Bug Bounties & Responsible Disclosure
Privately disclosed critical vulnerabilities in high-profile
applications and banking systems via the [Synack Red Team](https://www.synack.com/red-team/) and other
responsible channels.

---

## 🎤 Talks & Presentations

- **Ruby Unconf (2019)** — *"Attacking own APIs to find security bugs"*  
  [Talked about API security](https://www.youtube.com/watch?v=lGDETbe0b6w) at a Ruby Unconf event, explaining how web fuzzing works.

- **Several Security Conference Demos** *(OWASP Raider, 2023)*  
  [Presented Raider’s novel approach](https://www.youtube.com/watch?v=e2iDZXhAs-M&t=26s) to testing authentication flows using stateful scripting.

---

## 📰 Media Features

> Sometimes, my face was pixelated.  
> Sometimes, my name was changed.  
> But the work—and the impact—was real.

#### **BDO Foresight 4/2024** — *"Ich gehöre zu den Guten!" – Motive eines Hackers*  
Interviewed under a pseudonym by BDO’s editorial team, this long-form feature profiles my story, ethical hacking work, and zero-day discovery.  
[Read full article (German)](https://www.bdo.de/de-de/insights/bdo-foresight/bdo-foresight-4-2024) or [Download PDF](/pdfs/foresight_ausgabe04_final_digital.pdf)

#### **WELT / ComputerBild (2014)** — *"So leicht kommen Hacker an Ihre Urlaubsfotos"*  
Commissioned to demonstrate photo kiosk vulnerabilities using Raspberry Pi and Teensy hardware. The piece was published with blurred images and without attribution.  
[Welt article](https://www.welt.de/wirtschaft/webwelt/article130545951/So-leicht-kommen-Hacker-an-Ihre-Urlaubsfotos.html), [Spiegel article](https://www.spiegel.de/netzwelt/apps/cewe-fotoautomaten-sicherheitsluecken-bei-w-lan-verbindung-a-978291.html), [Computerbild press release](https://www.computerbild.de/artikel/Pressemitteilung-28-Juni-2014-10269185.html) (all in German).

#### **PortSwigger (2023)** — *"Raider: A tool to test authentication in web applications"*  
Raider featured in PortSwigger’s Daily Swig, highlighting its capability to automate stateful testing of web authentication flows.  
[Read article](https://portswigger.net/daily-swig/raider-a-tool-to-test-authentication-in-web-applications)

#### **PortSwigger (2020)** — *"Tiny Tiny RSS developers act promptly to resolve big, big security problems"*  
Coverage of the critical vulnerabilities I discovered in Tiny Tiny RSS, leading to CVE-2020-25787–89.  
[Read article](https://portswigger.net/daily-swig/tiny-tiny-rss-developers-act-promptly-to-resolve-big-big-security-problems)

---

## 🛡️ Notable CVEs

- **[CVE-2020-25787](https://nvd.nist.gov/vuln/detail/CVE-2020-25787)**  
- **[CVE-2020-25788](https://nvd.nist.gov/vuln/detail/CVE-2020-25788)**  
- **[CVE-2020-25789](https://nvd.nist.gov/vuln/detail/CVE-2020-25789)**  
  > Series of vulnerabilities in TinyTinyRSS allowing authentication bypass and code execution. A carefully crafted malicious feed exploiting URL whitelist bugs led to SSRF → LFI → FastCGI RCE—writing a PHP backdoor that allows arbitrary command execution on vulnerable TT‑RSS Docker setups. [Read blog article](https://neagaru.substack.com/p/exploiting-tiny-tiny-rss-2020) and the [PDF report](https://neagaru.com/pdfs/TinyTinyRSS.pdf).



- **[CVE-2019-11272](https://nvd.nist.gov/vuln/detail/CVE-2019-11272)**  
  > Authentication vulnerability in Pivotal's Spring Security Framework. Identified a logic flaw in Spring Security 4.2.x with PlaintextPasswordEncoder when multiple hashed-password columns exist and one is NULL. This caused authentication to succeed for any username with password "null". Reported to the Spring team—patched in version 4.2.13.



---

## 🛠️ Tools & Contributions

- **Internal DevSecOps Pipelines** — designed and deployed automated security checks into CI/CD flows.
- **[Wireshark Training Material](https://www.howtonetwork.com/courses/wireshark/wireshark-certified-network-analyst-wcna/)** — authored original video courses and exercises for WCNA certification.

---

## 📜 Certifications

- OSCE — Offensive Security Certified Expert (didn't finish exam since [certification was deprecated](https://www.offsec.com/blog/retiring-ctp-intro-new-courses/))  
- [OSCP](https://www.offsec.com/courses/pen-200/) (2017) — Offensive Security Certified Professional  
- [OSWP](https://www.offsec.com/courses/pen-210/) (2018) — Offensive Security Wireless Professional  
- [WCNA](https://www.wcnacertification.com/) (2012) — Wireshark Certified Network Analyst  
- [CompTIA A+](https://partners.comptia.org/certifications/a) (2010)  
- Scrum Master ([PSM-i](https://www.scrum.org/assessments/professional-scrum-master-i-certification))

---

## 🧠 Skills

For an exhaustive list of tools, technologies and skills, see [my skills page](/skills)

---

Want to collaborate, hire me, or consult on a security topic?  
[Contact me](/contact/) or [Schedule a meeting](https://cal.com/neagaru)
