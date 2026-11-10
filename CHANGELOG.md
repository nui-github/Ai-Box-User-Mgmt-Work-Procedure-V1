# Changelog

รูปแบบ: วันที่ (YYYY-MM-DD) · สิ่งที่เปลี่ยน · ไฟล์หลักที่แตะ

## [Unreleased]

### 2026-11-10 — Flow diagram แบบ modal (ขยายเต็มจอ)
- เพิ่มปุ่ม "ขยาย" บนการ์ดของแต่ละ diagram เปิด modal (`nz-modal`) กว้าง 92vw, top 24px, title "Flow Diagram", ไม่ลากได้, มีปุ่ม X
- Toolbar กึ่งกลาง: ซูมออก (−) · % · ซูมเข้า (+) · Reset (fit width) ช่วง 25%–250% ปุ่มไม่มีขอบ ไอคอนกึ่งกลาง
- Canvas ลายจุด, padding 16px, scroll ได้ทั้งสองแกน, diagram อยู่กึ่งกลางเมื่อเล็กกว่า canvas
- Pan: คลิกค้างแล้วลาก (`pointer*` events + `setPointerCapture` เมื่อลากเกิน 3px, cursor `grab`/`grabbing`); คลิกหลังลากไม่ถูกนับเป็นการเลือกกล่อง
- Zoom ด้วยล้อเมาส์แบบ exponential (`exp(-deltaY * 0.0015)`) ยึดตำแหน่งเมาส์เป็นจุดอ้างอิง ปิด transition ระหว่างหมุนล้อ
- Layout 2 ชั้น (`.sizer` = ขนาด natural × zoom, `.stage` = `transform: scale`) กันพื้นที่ว่างเกิน/scroll ผิดขนาด
- crop viewBox ให้พอดีเนื้อหา เผื่อ 32px เท่ากันทุกด้าน (`flowBounds()` ใน `flow.types.ts`) ขนาด natural อ่านจาก viewBox; diagram ในหน้าหลักใช้ crop เดียวกันที่ 16px
- ไฟล์ใหม่: `src/app/flow-viewer/*`; แก้ `flow-diagram` (input `pad`, `natural`), `app.component.*`, `app.config.ts` (`provideAnimationsAsync`, `provideNzIcons([CloseOutline])`)
- Dark mode: ตัวแปรสีของ canvas/จุด/toolbar แยกเป็น CSS variable พร้อมสลับธีม แต่เว็บนี้ยังไม่มีธีมมืด จึงยังไม่เปิดใช้

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
