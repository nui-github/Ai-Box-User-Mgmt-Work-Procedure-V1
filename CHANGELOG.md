# Changelog

รูปแบบ: วันที่ (YYYY-MM-DD) · สิ่งที่เปลี่ยน · ไฟล์หลักที่แตะ

## [Unreleased]

### 2026-11-10 — ระยะห่าง 4.6
- เว้นระยะ 16px (`mt-4`) ระหว่างกล่อง "หากตรวจพบ Shared Account" กับกล่องหมายเหตุข้อจำกัดทางเทคนิค เปลี่ยนกล่องหมายเหตุจาก `<p>` เป็น `<div>` เพราะ ng-zorro รีเซ็ต margin ของ `<p>` (ไม่อยู่ใน layer) ทำให้ `mt-*` ไม่ทำงาน · `src/app/app.component.html`

### 2026-11-10 — แก้ UI
- 4.6 กล่องกฎ Shared Account: จัดไอคอนกับข้อความให้อยู่กึ่งกลางแนวตั้ง (`items-start` → `items-center` และ `!m-0` ที่ข้อความ เพราะ ng-zorro ใส่ `margin-bottom: 1em` ให้ `<p>` ทำให้กึ่งกลางเพี้ยน) · `src/app/app.component.html`

### 2026-11-10 — เริ่มโปรเจกต์
- สร้างโปรเจกต์ Angular 19 + ng-zorro-antd 19 + Tailwind CSS 4.1.18 + Lucide + Simple Icons font + IBM Plex Sans Thai
- ธีมสีตามรูป ref: Navy `#010136`, Blue `#1F5DF9`, Green `#16EA9E`, Grey `#666666`, gradient Blue→Green
- ใช้โลโก้ `logo-ai-box.svg` (จาก aibox-design-system) ใน header/footer และทำ `favicon.svg` จากตัว "Ai"
- หน้าเดียวแบ่งตามหัวข้อเอกสาร: 1–2, 3, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7–4.8
- Flow 4.2 / 4.3 / 4.4 / 4.7–4.8 เป็น SVG component (`flow-diagram`) คลิกกล่อง ↔ คลิกขั้นตอน ซิงก์กัน
- สารบัญด้านข้าง (`nz-anchor`) บนจอใหญ่ และ chip นำทางบนจอเล็ก
- ตั้ง `vercel.json`, git remote `origin` (SSH) — ยังไม่ push/deploy
- เพิ่ม `README.md`, `CHANGELOG.md`, `CLAUDE.md`
- pin `tailwindcss` / `@tailwindcss/postcss` ที่ `4.1.18` เพราะ Node 20.12 ใช้เวอร์ชันใหม่กว่าไม่ได้
- diagram standalone รุ่นแรกเก็บไว้ที่ `diagrams/`
