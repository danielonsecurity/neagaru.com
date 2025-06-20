---
title: "Portfolio"
date: 2025-06-20
description: "Selected highlights of my work, contributions, and public projects"
type: "page"
---

# 💼 Projects

## [UTMS (Universal Time Modeling System)](https://utms.io/)
A radically new approach to time, habit, and task modeling. Configured
with programmable LISP entities, it tracks not just tasks but context,
conditions, interruptions, and emergent patterns. Designed to augment
human agency over time. The core is written in Python, the
configuration in Hy (LISP on Python), frontend in React + vite +
TypeScript.


## [OWASP Raider](https://github.com/DigeeX/raider)
A web authentication testing framework for exploring complex HTTP
session workflows. Built in Python, configurable with Hy (LISP on
Python).  Presented at multiple security conferences. Raider models
authentication as a programmable state machine, allowing security
researchers to script interactions across redirects, CSRF tokens, and
multi-step logins.


## Bug Bounties & Responsible Disclosure
Privately disclosed critical vulnerabilities in high-profile
applications and banking systems via the Synack Red Team and other
responsible channels.

---

# 🎤 Talks & Presentations

- **Ruby Unconf (2019)** — *"Attacking own APIs to find security bugs"*  
  [Talked about API security](https://www.youtube.com/watch?v=lGDETbe0b6w) at a Ruby Unconf event, explaining how web fuzzing works.

- **Several Security Conference Demos** *(OWASP Raider, 2023)*  
  [Presented Raider’s novel approach](https://www.youtube.com/watch?v=e2iDZXhAs-M&t=26s) to testing authentication flows using stateful scripting.

---

# 🛡️ Notable CVEs

- **[CVE-2020-25787](https://nvd.nist.gov/vuln/detail/CVE-2020-25787)**  
- **[CVE-2020-25788](https://nvd.nist.gov/vuln/detail/CVE-2020-25788)**  
- **[CVE-2020-25789](https://nvd.nist.gov/vuln/detail/CVE-2020-25789)**  
  > Series of vulnerabilities in TinyTinyRSS allowing authentication bypass and code execution. A carefully crafted malicious feed exploiting URL whitelist bugs led to SSRF → LFI → FastCGI RCE—writing a PHP backdoor that allows arbitrary command execution on vulnerable TT‑RSS Docker setups.



- **[CVE-2019-11272](https://nvd.nist.gov/vuln/detail/CVE-2019-11272)**  
  > Authentication vulnerability in Pivotal's Spring Security Framework. Identified a logic flaw in Spring Security 4.2.x with PlaintextPasswordEncoder when multiple hashed-password columns exist and one is NULL. This caused authentication to succeed for any username with password "null". Reported to the Spring team—patched in version 4.2.13.



---

# 🛠️ Tools & Contributions

- **Internal DevSecOps Pipelines** — designed and deployed automated security checks into CI/CD flows.
- **Wireshark Training Material** — authored original video courses and exercises for WCNA certification.

---

# 📜 Certifications

- OSCP (2017) — Offensive Security Certified Professional  
- OSWP (2018) — Offensive Security Wireless Professional  
- WCNA (2012) — Wireshark Certified Network Analyst  
- CompTIA A+ (2010)  
- Scrum Master (PSM-I)

---

# 🧠 Languages & Tech

**Programming:** Python, Hy (LISP), Emacs Lisp, Bash, C  
**Security Domains:** Web, Mobile, Infra, Reverse Engineering, Auth Flows  
**DevOps:** Linux, Docker, GitOps, Monitoring  
**Protocols:** OAuth2, OpenID Connect, SAML, LDAP  
**Tools:** Burp Suite, Metasploit, Wireshark, Nmap, Nessus

---

Want to collaborate, hire me, or consult on a security topic?  
[Contact me](/contact/) or [Schedule a meeting](https://cal.com/neagaru)
