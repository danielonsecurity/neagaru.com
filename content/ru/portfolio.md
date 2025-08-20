---
title: "Портфолио"
date: 2025-06-20
description: "Избранные примеры моих работ, вкладов и публичных проектов"
type: "page"
---

## 💼 Проекты

### [UTMS (Universal Time Modeling System)](https://utms.io/)

Радикально новая система для моделирования времени, привычек и
задач. В отличие от обычных приложений для продуктивности, UTMS
программируемая: построена на слое конфигурации LISP (Hy), моделирует
не только события, но и контекст, условия, прерывания и возникающие
закономерности. Цель: расширить человеческую способность управлять
временем через композиционную, событийно-ориентированную временную
систему.

UTMS — это экосистема взаимосвязанных компонентов:

- **Frontend (React + Vite + TypeScript)** — [utms-frontend](https://github.com/danielonsecurity/utms-frontend)  
  Интерактивный веб-интерфейс для визуализации и редактирования временных сущностей.

- **Core Backend (Python + Hy)** — [utms-core](https://github.com/danielonsecurity/utms-core)  
  Основной движок, включая программируемые сущности, CLI, агент/heartbeat, сервер Arduino и систему оценки.

- **Mobile Companion (Kotlin, Android)** — [utms-android](https://github.com/danielonsecurity/utms-android)  
  Нативный Android-клиент для уведомлений, отслеживания и мобильной интеграции.

- **Hardware Integration (Arduino, C++)** — [utms-arduino](https://github.com/danielonsecurity/utms-arduino)  
  Прошивка для взаимодействия с IoT/встроенными устройствами (сенсоры, часы, физические якори).

Дополнительные инструменты:

- **Glowbot (Python)** — [glowbot](https://github.com/danielonsecurity/glowbot)  
  Библиотека автоматизации умных ламп, интегрированная в среду UTMS.

⚑ Несколько приватных компонентов и экспериментальных модулей
находятся в разработке и пока не доступны публично.


### [OWASP Raider](https://github.com/OWASP/raider)
Фреймворк для тестирования веб-аутентификации, предназначенный для исследования сложных рабочих процессов HTTP-сессий. Создан на Python, настраивается с помощью Hy (LISP на Python). Представлен на нескольких конференциях по безопасности. Raider моделирует аутентификацию как программируемую конечный автомат, позволяя исследователям безопасности создавать сценарии взаимодействий с редиректами, CSRF-токенами и многоэтапными входами.

### Bug Bounties и Ответственное Раскрытие
В частном порядке раскрывал критические уязвимости в известных приложениях и банковских системах через [Synack Red Team](https://www.synack.com/red-team/) и другие каналы ответственного раскрытия.

---

## 🎤 Доклады и Презентации

- **Ruby Unconf (2019)** — *"Attacking own APIs to find security bugs"*  
  [Рассказал о безопасности API](https://www.youtube.com/watch?v=lGDETbe0b6w) на мероприятии Ruby Unconf, объяснив, как работает веб-фаззинг.

- **Несколько демонстраций на конференциях по безопасности** *(OWASP Raider, 2023)*  
  [Представил новый подход Raider](https://www.youtube.com/watch?v=e2iDZXhAs-M) к тестированию потоков аутентификации с использованием stateful-скриптов (с сохранением состояния).

---

## 📰 Упоминания в СМИ

> Иногда мое лицо было скрыто пикселями.  
> Иногда мое имя меняли.  
> Но работа — и ее результат — были реальны.

#### **BDO Foresight 4/2024** — *"Ich gehöre zu den Guten!" – Motive eines Hackers*  
Интервью под псевдонимом для редакции BDO; в этой большой статье рассказывается моя история, работа в области этичного хакинга и обнаружение уязвимости нулевого дня.  
[Читать полную статью (на немецком)](https://www.bdo.de/de-de/insights/bdo-foresight/bdo-foresight-4-2024) или [Скачать PDF](/pdfs/foresight_ausgabe04_final_digital.pdf)

#### **WELT / ComputerBild (2014)** — *"So leicht kommen Hacker an Ihre Urlaubsfotos"*  
По заказу продемонстрировал уязвимости фотокиосков с использованием оборудования Raspberry Pi и Teensy. Статья была опубликована с размытыми изображениями и без указания авторства.  
[Статья в Welt](https://www.welt.de/wirtschaft/webwelt/article130545951/So-leicht-kommen-Hacker-an-Ihre-Urlaubsfotos.html), [статья в Spiegel](https://www.spiegel.de/netzwelt/apps/cewe-fotoautomaten-sicherheitsluecken-bei-w-lan-verbindung-a-978291.html), [пресс-релиз Computerbild](https://www.computerbild.de/artikel/Pressemitteilung-28-Juni-2014-10269185.html) (все на немецком).

#### **PortSwigger (2023)** — *"Raider: A tool to test authentication in web applications"*  
Raider был представлен в Daily Swig от PortSwigger, где подчеркивалась его способность автоматизировать stateful-тестирование потоков веб-аутентификации.  
[Читать статью](https://portswigger.net/daily-swig/raider-a-tool-to-test-authentication-in-web-applications)

#### **PortSwigger (2020)** — *"Tiny Tiny RSS developers act promptly to resolve big, big security problems"*  
Освещение критических уязвимостей, которые я обнаружил в Tiny Tiny RSS, что привело к CVE-2020-25787–89.  
[Читать статью](https://portswigger.net/daily-swig/tiny-tiny-rss-developers-act-promptly-to-resolve-big-big-security-problems)

---

## 🛡️ Значимые CVE

- **[CVE-2020-25787](https://nvd.nist.gov/vuln/detail/CVE-2020-25787)**  
- **[CVE-2020-25788](https://nvd.nist.gov/vuln/detail/CVE-2020-25788)**  
- **[CVE-2020-25789](https://nvd.nist.gov/vuln/detail/CVE-2020-25789)**  
  > Серия уязвимостей в TinyTinyRSS, позволяющая обойти аутентификацию и выполнить код. Специально созданный вредоносный фид, эксплуатирующий ошибки в белом списке URL-адресов, приводил к SSRF → LFI → FastCGI RCE — записи PHP-бэкдора, который позволяет выполнять произвольные команды на уязвимых Docker-установках TT-RSS. [Читать статью в блоге](https://neagaru.substack.com/p/exploiting-tiny-tiny-rss-2020) и [PDF-отчет](https://neagaru.com/pdfs/TinyTinyRSS.pdf).

- **[CVE-2019-11272](https://nvd.nist.gov/vuln/detail/CVE-2019-11272)**  
  > Уязвимость аутентификации в Spring Security Framework от Pivotal. Была обнаружена логическая ошибка в Spring Security 4.2.x с PlaintextPasswordEncoder при наличии нескольких столбцов с хэшированными паролями, один из которых равен NULL. Это приводило к успешной аутентификации для любого пользователя с паролем "null". Сообщено команде Spring — исправлено в версии 4.2.13.

---

## 🛠️ Инструменты и Вклад

- **Внутренние конвейеры DevSecOps** — проектировал и внедрял автоматизированные проверки безопасности в процессы CI/CD.
- **[Учебные материалы по Wireshark](https://www.howtonetwork.com/courses/wireshark/wireshark-certified-network-analyst-wcna/)** — автор оригинальных видеокурсов и упражнений для сертификации WCNA.

---

## 📜 Сертификаты

- OSCE — Offensive Security Certified Expert (не завершил экзамен, так как [сертификация была упразднена](https://www.offsec.com/blog/retiring-ctp-intro-new-courses/))  
- [OSCP](https://www.offsec.com/courses/pen-200/) (2017) — Offensive Security Certified Professional  
- [OSWP](https://www.offsec.com/courses/pen-210/) (2018) — Offensive Security Wireless Professional  
- [WCNA](https://www.wcnacertification.com/) (2012) — Wireshark Certified Network Analyst  
- [CompTIA A+](https://partners.comptia.org/certifications/a) (2010)  
- Scrum Master ([PSM-i](https://www.scrum.org/assessments/professional-scrum-master-i-certification))

---

## 🧠 Навыки

Полный список инструментов, технологий и навыков смотрите на [странице моих навыков](/skills).

---

Хотите сотрудничать, нанять меня или проконсультироваться по вопросам безопасности?  
[Свяжитесь со мной](/contact/) или [запланируйте встречу](https://cal.com/neagaru)
