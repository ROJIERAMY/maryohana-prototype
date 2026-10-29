# Maryohana — interactive client prototype

Public static design demonstration of the Maryohana scout system. Open the GitHub Pages site; no setup or login is required.

Choose group leader, sector leader, team leader, patrol leader or ordinary member from the demo toolbar. All records are synthetic. Changes are saved only in this browser using localStorage; use Reset demo to restore them. No production database, credentials or backend source is included.

Implemented flows: dashboards and scoped filters, team/member management, patrol appointments and permissions, weekly and general meetings, scoped attendance, goals and review, finance simulation, announcements, questions and answers, visitation assignment/completion, notifications, reports, CSV import/export, account role preview and demo reset. The public role switcher is a demonstration tool, not authentication. Finance and messages are simulations and are not transmitted to anyone.

Run locally: `python -m http.server 8770`, then open http://localhost:8770/ . Hash routes work directly on GitHub Pages. No build step or external dependencies.

Cairo font bundled under SIL Open Font License (assets/fonts/OFL.txt). Based on the private Maryohana application design; this repository contains only the public static demonstration.

## Team-first navigation

Open Teams & Sectors, open a team, then use its Members, Appointments, Job titles and Patrols tabs. Team leaders define their own job labels (including patrol leader, assistant patrol leader and budget officer) and separately choose members, permissions and patrol membership. Patrol officers are automatically included in their own patrol, and all selections are limited to the same team. Job names do not automatically grant budget or dashboard permissions.

Sector preview supports Boys, Girls and Leaders. Boys shows Cubs, Junior and Advanced; Girls shows Buds, Flowers, Guides and Rangers as defined in the demo team structure. The administrative Goals/Curricula area is visible to group and sector leaders; member-facing published goals remain in the member portal.
