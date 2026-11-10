# Ai-BOX User Access Management — Procedure Flow

หน้าเว็บหน้าเดียวรวมโฟลว์ทั้งหมดของเอกสาร **Procedure: Ai-BOX User Access Management (Rev. 1.0, Effective 10 Nov 2026)** แบ่งตามหัวข้อในเอกสาร

| หัวข้อ | เนื้อหา | รูปแบบ |
|---|---|---|
| 1–2 | วัตถุประสงค์และขอบเขต | การ์ด |
| 3 | คำนิยาม | ตาราง (ng-zorro `nz-table`) |
| 4.1 | หลักการควบคุมบัญชีและกลุ่มผู้ใช้งาน | การ์ด + tag |
| 4.2 | การขอสร้างบัญชีและสิทธิ์ | Swimlane + ขั้นตอน |
| 4.3 | การเปลี่ยนแปลงสิทธิ์ | Swimlane + ขั้นตอน |
| 4.4 | การยกเลิกบัญชีหรือสิทธิ์ | Swimlane + ขั้นตอน |
| 4.5 | การตรวจสอบ Ticket ก่อนให้สิทธิ์ | Checklist |
| 4.6 | การควบคุม Shared Account | กฎ + ขั้นตอน (`nz-steps`) |
| 4.7–4.8 | การทบทวนสิทธิ์รายไตรมาส | Flowchart + ขั้นตอน |

คลิกกล่องในแผนภาพ ↔ คลิกขั้นตอน จะ highlight คู่กัน

ใต้ hero มีการ์ด **เอกสารต้นฉบับ (PDF)** แสดง URL (ตัดด้วย `...`) พร้อมปุ่ม คัดลอกลิงก์ (มี toast) และ เปิดดูเอกสาร (tab ใหม่) — URL อยู่ที่ `DOC_META.docUrl` ใน `src/app/data/content.ts`

ปุ่ม **ขยาย** บนการ์ด diagram เปิด modal เต็มจอ: ลากเพื่อเลื่อน (pan), ล้อเมาส์ซูมที่ตำแหน่งเมาส์, ปุ่ม − / + / Reset (fit) ช่วง 25%–250%

## Stack

- Angular 19 (standalone components, signals) — ใช้ Angular 19 เพราะ Node บนเครื่อง dev คือ 20.12
- UI: [ng-zorro-antd](https://ng.ant.design) 19 (ธีม `primaryColor` = `#1F5DF9`)
- CSS: Tailwind CSS 4 (pin `4.1.18` — เวอร์ชันใหม่กว่าต้องใช้ Node ≥ 20.19)
- Icon: [Lucide](https://lucide.dev) (`lucide-angular`), โลโก้แบรนด์: [Simple Icons font](https://github.com/simple-icons/simple-icons-font)
- ฟอนต์: IBM Plex Sans Thai (`@fontsource/ibm-plex-sans-thai`, self-host)
- Deploy: Vercel (static output)

## สี (ตามรูป ref)

| Token | Hex | ใช้กับ |
|---|---|---|
| Navy (Primary) | `#010136` | ตัวอักษรหลัก, เส้น/กรอบ diagram |
| Blue (Primary) | `#1F5DF9` | ลิงก์, จุดอนุมัติ, เส้นเน้น |
| Green (Primary) | `#16EA9E` | ผลลัพธ์/ปิดงาน, ไฮไลต์ |
| Gradient | `#1F5DF9 → #16EA9E` | ป้ายเลขหัวข้อ, ชื่อ Ai-BOX |
| Grey (Secondary) | `#666666` | ข้อความรอง |
| White (Secondary) | `#FFFFFF` | พื้นการ์ด |

Token อยู่ใน `src/styles.css` (`:root` และ `@theme`)

## รันบนเครื่อง

```bash
npm install
npm start          # http://localhost:4200  (hot reload)
npm run build      # output: dist/ai-box-user-access/browser
```

ใน Claude Code มี preview config ที่ `.claude/launch.json` (ชื่อ `dev`)

## โครงสร้าง

```
src/app/
  app.component.*            หน้าเดียว: hero, สารบัญ (nz-anchor), ทุกหัวข้อ, footer
  data/content.ts            เนื้อหาทั้งหมดจากเอกสาร (ข้อความ, ขั้นตอน, checklist)
  data/flows.geometry.ts     พิกัด node/เส้นของแต่ละ diagram (id n1.. อ้างอิงจาก content.ts)
  flow-diagram/              component วาด SVG (swimlane, diamond, connector มุมโค้ง) + flowBounds() crop viewBox
  flow-viewer/               modal viewer: toolbar, pan, wheel zoom (sizer/stage 2 ชั้น)
diagrams/                    ไฟล์ HTML diagram แบบ standalone รุ่นแรก (อ้างอิง)
public/                      logo-ai-box.svg, favicon.svg
```

### แก้ diagram

- ข้อความ/คำอธิบายขั้นตอน → `src/app/data/content.ts` (`FLOW_SECTIONS[].steps`, ผูกกับ node ด้วย `node: 'n4'`)
- ตำแหน่งกล่อง/เส้น → `src/app/data/flows.geometry.ts` (เส้นเป็นมุมฉากเท่านั้น, กล่องเรียงบนกริด 4px)
- สี/ฟอนต์ใน diagram → `src/app/flow-diagram/flow-diagram.component.css`

## Git & Deploy

- Remote (SSH): `git@github.com:nui-github/Ai-Box-User-Mgmt-Work-Procedure-V1.git` (branch `main`)
- Vercel: import repo → framework **Angular** (ตั้งค่าไว้ใน `vercel.json` แล้ว: `npm ci` → `npm run build` → `dist/ai-box-user-access/browser`)
- ยังไม่ได้ push / deploy — รอสั่ง

## กติกาการทำงาน

อัปเดต `README.md` และ `CHANGELOG.md` ทุกครั้งที่มีการเปลี่ยนแปลง (ดู `CLAUDE.md`)

## ที่มาของเนื้อหา

เอกสาร _Ai-BOX User Access Management Procedure Rev. 1.0_ (NETBAY PUBLIC COMPANY LIMITED, CLOUD CREATION COMPANY LIMITED, FYNNET VENTURES COMPANY LIMITED) อ้างอิง PC-08 User Access Management ข้อความในหน้าเว็บสรุป/คัดจากเอกสาร หากเอกสารแก้ไขให้ปรับ `content.ts` ตาม
