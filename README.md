# Maryohana — interactive client prototype

Public static design demonstration of the Maryohana scout system. Open the GitHub Pages site; no setup or login is required.

Choose group leader, sector leader, team leader, patrol leader or ordinary member from the demo toolbar. All records are synthetic. Changes are saved only in this browser using localStorage; use Reset demo to restore them. No production database, credentials or backend source is included.

Implemented flows: dashboards and scoped filters, team/member management, patrol appointments and permissions, weekly and general meetings, scoped attendance, goals and review, finance simulation, announcements, questions and answers, visitation assignment/completion, notifications, reports, CSV import/export, account role preview and demo reset. The public role switcher is a demonstration tool, not authentication. Finance and messages are simulations and are not transmitted to anyone.

Run locally: `python -m http.server 8770`, then open http://localhost:8770/ . Hash routes work directly on GitHub Pages. No build step or external dependencies.

Cairo font bundled under SIL Open Font License (assets/fonts/OFL.txt). Based on the private Maryohana application design; this repository contains only the public static demonstration.
