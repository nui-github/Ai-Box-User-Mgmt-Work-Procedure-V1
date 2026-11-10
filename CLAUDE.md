# Ai-BOX User Access Management — Procedure Flow (Angular)

หน้าเว็บหน้าเดียวรวมโฟลว์ของเอกสาร Ai-BOX User Access Management Rev. 1.0 ดู `README.md` สำหรับ stack, สี, โครงสร้าง

## กติกา
- **อัปเดต `README.md` และ `CHANGELOG.md` ทุกครั้งที่มีการเปลี่ยนแปลง** (เพิ่มรายการใต้ `## [Unreleased]` ใน CHANGELOG พร้อมวันที่)
- Stack ที่ผู้ใช้กำหนด: Angular + ng-zorro-antd, Tailwind CSS, Lucide icon, Simple Icons font, ฟอนต์ IBM Plex Sans Thai, สีตาม ref (`src/styles.css`)
- ใช้โลโก้จาก `public/logo-ai-box.svg` เท่านั้น ห้ามวาดใหม่
- เนื้อหามาจากเอกสารต้นฉบับ (`src/app/data/content.ts`) อย่าเพิ่มขั้นตอนที่เอกสารไม่ได้ระบุ
- Node บนเครื่องคือ 20.12 → ใช้ Angular 19 และ Tailwind 4.1.18 (อย่าอัปเกรดโดยไม่เช็ก Node)
- Dev server: `npm start` (พอร์ต 4200, config ใน `.claude/launch.json`)
- `git push` และ deploy Vercel ทำเมื่อผู้ใช้สั่งเท่านั้น remote เป็น SSH
