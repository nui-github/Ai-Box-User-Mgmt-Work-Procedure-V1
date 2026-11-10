// Page content, taken from "Ai-BOX User Access Management" Procedure Rev. 1.0 (effective 10 Nov 2026).
// Wording follows the source document; keep it in sync when the document is revised.

export interface DocMeta {
  companies: string[];
  titleEn: string;
  titleTh: string;
  effective: string;
  revision: string;
  refDoc: string;
  refDocCode: string;
}

export const DOC_META: DocMeta = {
  companies: ['NETBAY PUBLIC COMPANY LIMITED', 'CLOUD CREATION COMPANY LIMITED', 'FYNNET VENTURES COMPANY LIMITED'],
  titleEn: 'Ai-BOX User Access Management',
  titleTh: 'การบริหารจัดการสิทธิ์ผู้ใช้งานระบบ Ai-BOX',
  effective: '10 Nov 2026',
  revision: 'Rev. 1.0',
  refDoc: 'User Access Management',
  refDocCode: 'PC-08',
};

export interface NavItem {
  id: string;
  no: string;
  title: string;
}

export const NAV: NavItem[] = [
  { id: 'overview', no: '1–2', title: 'วัตถุประสงค์และขอบเขต' },
  { id: 'definitions', no: '3', title: 'คำนิยาม' },
  { id: 'principles', no: '4.1', title: 'หลักการควบคุม' },
  { id: 'request', no: '4.2', title: 'การขอสร้างบัญชีและสิทธิ์' },
  { id: 'modification', no: '4.3', title: 'การเปลี่ยนแปลงสิทธิ์' },
  { id: 'revocation', no: '4.4', title: 'การยกเลิกบัญชีหรือสิทธิ์' },
  { id: 'verification', no: '4.5', title: 'การตรวจสอบ Ticket' },
  { id: 'shared', no: '4.6', title: 'การควบคุม Shared Account' },
  { id: 'review', no: '4.7–4.8', title: 'การทบทวนสิทธิ์รายไตรมาส' },
];

export const PURPOSE: string[] = [
  'เพื่อกำหนดขั้นตอนปฏิบัติในการบริหารจัดการการควบคุมการเข้าถึงของผู้ใช้งาน ตั้งแต่การขออนุมัติเพื่อเข้าถึงระบบ การกำหนดสิทธิ การเปลี่ยนแปลงสิทธิ การยกเลิกสิทธิการเข้าถึง และการทบทวนสิทธิการเข้าถึงระบบ Ai-BOX สำหรับพนักงานและบุคคลภายนอก เช่น Outsource เป็นต้น',
  'เพื่อให้การปฏิบัติงานในการควบคุมการเข้าถึงระบบ Ai-BOX มีความสอดคล้องกับเอกสาร PC-08 User Access Management และสามารถตรวจสอบย้อนหลังได้',
];

export const SCOPE: string[] = [
  'เอกสารฉบับนี้ใช้เป็นแนวทางให้แก่ผู้รับผิดชอบในการบริหารจัดการบัญชีผู้ใช้งาน (User Account) หรือการให้สิทธิ์ต่างๆ แก่พนักงาน หรือบุคคลภายนอก เช่น Outsource ในการเข้าถึงระบบ Ai-BOX ทั้งในส่วนที่เป็น Service Provider และ NETbay Organization',
  'เอกสารนี้เป็นขั้นตอนปฏิบัติเฉพาะระบบ Ai-BOX ภายใต้ PC-08 User Access Management โดยไม่ใช้แทนหรือยกเว้นข้อกำหนดของ PC-08 และไม่ครอบคลุมการบริหารสิทธิ์ของบริการอื่นในองค์กร',
];

export interface Definition {
  no: number;
  term: string;
  meaning: string;
}

export const DEFINITIONS: Definition[] = [
  { no: 1, term: 'Requester', meaning: 'ผู้ยื่นคำขอสร้าง เปลี่ยนแปลง หรือยกเลิกบัญชีผู้ใช้งานและสิทธิ์การเข้าถึงผ่าน Service Desk' },
  { no: 2, term: 'Line Manager', meaning: 'ผู้บังคับบัญชาหรือผู้รับผิดชอบดูแลบุคลากรภายนอก ที่รับรองความจำเป็นในการเข้าถึงระบบตามหน้าที่และความรับผิดชอบ (R&R)' },
  { no: 3, term: 'Product Owner (Service Owner)', meaning: 'เจ้าของบริการ Ai-BOX ผู้รับผิดชอบพิจารณาและอนุมัติคำขอเข้าถึงระบบและสิทธิ์การใช้งานของพนักงาน NETbay และบุคลากรภายนอกที่ได้รับอนุญาต ตามหน้าที่และความรับผิดชอบ (R&R)' },
  { no: 4, term: 'Admin', meaning: 'ผู้ได้รับมอบหมายให้ดูแลและจัดการบัญชีผู้ใช้งานภายในระบบ Ai-BOX ตามคำขอที่ได้รับอนุมัติจาก Product Owner (Service Owner) รวมถึงตรวจสอบความถูกต้องของสิทธิ์และจัดเก็บหลักฐานการดำเนินการ' },
  { no: 5, term: 'Individual Account', meaning: 'บัญชีผู้ใช้งานเฉพาะบุคคลที่สามารถระบุตัวตนและตรวจสอบการดำเนินการย้อนหลังได้' },
  { no: 6, term: 'Shared Account', meaning: 'บัญชีผู้ใช้งานที่บุคคลหลายคนใช้ร่วมกันในการเข้าถึงระบบ โดยไม่สามารถระบุตัวผู้ดำเนินการแต่ละรายได้อย่างชัดเจน' },
  { no: 7, term: 'Ticket', meaning: 'รายการคำขอและหลักฐานการอนุมัติและดำเนินการผ่านระบบ Service Desk' },
];

export const SERVICE_PROVIDER_TEAMS = ['Engineering', 'Call Center', 'Customer Support', 'Security', 'Admin', 'NOC'];

export interface Principle {
  icon: 'ban' | 'shield' | 'layers';
  title: string;
  text: string;
}

export const PRINCIPLES: Principle[] = [
  {
    icon: 'ban',
    title: 'ห้ามใช้ Shared Account',
    text: 'ห้ามสร้างหรือใช้ Shared User Account สำหรับการเข้าสู่ระบบและปฏิบัติงานของบุคคลโดยไม่มีข้อยกเว้น ผู้ใช้งานต้องใช้ Individual User Account ที่สามารถระบุตัวตนและตรวจสอบย้อนหลังได้',
  },
  {
    icon: 'shield',
    title: 'Least Privilege',
    text: 'กำหนดสิทธิ์ตามหน้าที่จริงและหลัก Least Privilege โดยพิจารณารูปแบบการกำหนดสิทธิ์ของแต่ละ Organization',
  },
  {
    icon: 'layers',
    title: 'แบ่งสิทธิ์ตาม Organization',
    text: 'การกำหนดสิทธิ์การเข้าถึงระบบ Ai-BOX แบ่งตาม Organization ดังรายละเอียดด้านล่าง',
  },
];

export const ORG_SERVICE_PROVIDER =
  'กำหนดสิทธิ์ผ่าน Team/Group โดยตรวจสอบ Permission จากการตั้งค่าจริงเมื่อจำเป็น';
export const ORG_NETBAY =
  'กำหนดสิทธิ์การใช้งานตามหน้าที่และความรับผิดชอบ (R&R) โดยไม่มีการแบ่ง Team/Group';

// ---- Flow sections -------------------------------------------------------------------------

export interface FlowStep {
  node: string; // node id in FLOW_GEOMETRY
  actor: string;
  title: string;
  text: string;
  note?: string;
}

export interface FlowSection {
  id: string; // matches FLOW_GEOMETRY id
  anchor: string; // nav id
  no: string;
  title: string;
  en: string;
  lead: string;
  icon: 'user-plus' | 'user-cog' | 'user-minus' | 'calendar-clock';
  steps: FlowStep[];
  extra?: { title: string; items: string[] }[];
}

export const FLOW_SECTIONS: FlowSection[] = [
  {
    id: 'access-request',
    anchor: 'request',
    no: '4.2',
    title: 'การขอสร้างบัญชีและสิทธิ์',
    en: 'Access Request',
    lead: 'ทุกคำขอเริ่มจาก Ticket ใน Service Desk และต้องได้รับการรับรองจาก Line Manager กับการอนุมัติจาก Product Owner ก่อน Admin จะสร้างบัญชีหรือกำหนดสิทธิ์',
    icon: 'user-plus',
    steps: [
      {
        node: 'n1',
        actor: 'Requester',
        title: 'เปิด Ticket ขอสิทธิ์',
        text: 'เปิด Ticket ผ่าน Service Desk โดยระบุชื่อและอีเมลรายบุคคล หน่วยงานหรือผู้รับผิดชอบภายใน NETbay เหตุผลในการใช้งาน Organization ที่ต้องการเข้าถึง (Service Provider หรือ NETbay Organization) รวมถึง Team/Group (ถ้ามี) และสิทธิ์ที่ต้องการ',
      },
      {
        node: 'n2',
        actor: 'Line Manager',
        title: 'รับรองความจำเป็น',
        text: 'Line Manager หรือผู้รับผิดชอบดูแลบุคลากรภายนอกภายใน NETbay รับรองความจำเป็นในการใช้งานตามหน้าที่และความรับผิดชอบ (R&R)',
      },
      {
        node: 'n3',
        actor: 'Product Owner',
        title: 'ตรวจสอบและอนุมัติ',
        text: 'Product Owner ในฐานะ Service Owner ตรวจสอบตัวตนผู้ใช้งาน ความจำเป็นตาม R&R ความเหมาะสมของ Organization, Team/Group (ถ้ามี) และสิทธิ์ที่ร้องขอ รวมถึงตรวจสอบว่าเป็นบัญชีรายบุคคล ไม่ใช่ Shared User Account ก่อนอนุมัติผ่าน Ticket หรือหลักฐานที่เชื่อมโยงกับ Ticket ได้',
        note: 'หากเป็นสิทธิ์ระดับสูงให้ตรวจสอบเหตุผลความจำเป็นเป็นพิเศษ',
      },
      {
        node: 'n4',
        actor: 'Admin',
        title: 'ตรวจ Ticket ครบถ้วน?',
        text: 'Admin ตรวจสอบ Ticket รายละเอียดบัญชีและสิทธิ์ที่ร้องขอ รวมถึงหลักฐานรับรองจาก Line Manager และอนุมัติจาก Product Owner ก่อนสร้างบัญชีหรือกำหนดสิทธิ์',
        note: 'หากข้อมูลไม่ครบหรือพบข้อสงสัยเรื่องบัญชีร่วมต้องส่งกลับเพื่อชี้แจง ไม่ดำเนินการก่อนอนุมัติ',
      },
      {
        node: 'n5',
        actor: 'Admin',
        title: 'สร้างบัญชี / กำหนดสิทธิ์',
        text: 'สร้างบัญชีหรือกำหนดสิทธิ์ตามที่ได้รับอนุมัติ',
      },
      {
        node: 'n6',
        actor: 'Admin',
        title: 'บันทึกผลและปิด Ticket',
        text: 'บันทึกผล วันเวลา ผู้ดำเนินการ และหลักฐานการกำหนดสิทธิ์ใน Ticket ก่อนปิดงาน',
      },
    ],
  },
  {
    id: 'access-modification',
    anchor: 'modification',
    no: '4.3',
    title: 'การเปลี่ยนแปลงสิทธิ์',
    en: 'Access Modification',
    lead: 'เมื่อสถานะบุคลากรเปลี่ยน Admin ตรวจสอบสิทธิ์ทันทีโดยไม่รอรอบ Quarterly Review กรณีเปลี่ยนหน้าที่ทบทวนสิทธิ์ตาม R&R ใหม่ กรณีลาออกหรือสิ้นสุดสัญญาไปที่ขั้นตอนการยกเลิกสิทธิ์',
    icon: 'user-cog',
    steps: [
      {
        node: 'n1',
        actor: 'Admin',
        title: 'รับแจ้งการเปลี่ยนแปลง',
        text: 'เมื่อได้รับแจ้งการเปลี่ยนแปลงสถานะบุคลากร เช่น ย้ายหน่วยงาน เปลี่ยนตำแหน่ง เปลี่ยนหน้าที่ ลาออก หรือสิ้นสุดสัญญา ให้ Admin ตรวจสอบสิทธิ์โดยไม่รอรอบ Quarterly Review',
        note: 'ช่องทางแจ้ง: พนักงาน NETbay อ้างอิงอีเมลแจ้งจาก HR (ลาออก) หรือการแจ้งจาก HR/Line Manager (ย้ายหน่วยงานหรือเปลี่ยนหน้าที่) · Outsource ให้ Line Manager หรือผู้รับผิดชอบภายใน NETbay เปิด Service Desk Ticket',
      },
      {
        node: 'n2',
        actor: 'Admin',
        title: 'ลาออกหรือสิ้นสุดสัญญา?',
        text: 'กรณีเปลี่ยนหน้าที่ ให้ทบทวนสิทธิ์ตาม R&R ใหม่ ส่วนกรณีลาออกหรือสิ้นสุดการจ้างงาน/การปฏิบัติงาน ให้ดำเนินการยกเลิกบัญชีหรือสิทธิ์ตามข้อ 4.4',
      },
      {
        node: 'n3',
        actor: 'Admin',
        title: 'ไปขั้นตอน 4.4',
        text: 'ดำเนินการตามขั้นตอนการยกเลิกบัญชีหรือสิทธิ์ (Access Revocation)',
      },
      {
        node: 'n4',
        actor: 'Requester',
        title: 'ขอเปลี่ยนสิทธิ์',
        text: 'เปิดหรืออ้างอิง Ticket การเปลี่ยนแปลงสิทธิ์ โดยระบุวันที่มีผล หน่วยงาน/หน้าที่ใหม่ สิทธิ์เดิม และสิทธิ์ที่เสนอ (คง เพิ่ม ลด หรือยกเลิก) พร้อมเหตุผล',
      },
      {
        node: 'n5',
        actor: 'Line Manager',
        title: 'รับรองความจำเป็น',
        text: 'Line Manager หรือผู้รับผิดชอบดูแลบุคลากรภายนอกภายใน NETbay รับรองความจำเป็นตาม R&R',
      },
      {
        node: 'n6',
        actor: 'Product Owner',
        title: 'พิจารณาอนุมัติ',
        text: 'Product Owner (Service Owner) พิจารณาอนุมัติการเปลี่ยนแปลงสิทธิ์ตามหน้าที่และความรับผิดชอบ (R&R) โดยตรวจสอบหลักฐานการรับรองจาก Line Manager หรือผู้รับผิดชอบที่เกี่ยวข้องก่อนอนุมัติ',
      },
      {
        node: 'n7',
        actor: 'Admin',
        title: 'เปลี่ยนสิทธิ์และบันทึก',
        text: 'Admin ตรวจสอบการอนุมัติ ดำเนินการเปลี่ยนแปลงสิทธิ์ และบันทึกผลใน Ticket',
        note: 'กรณีจำเป็นต้องคงสิทธิ์เดิม ให้มีเหตุผลและหลักฐานการอนุมัติรองรับ',
      },
    ],
  },
  {
    id: 'access-revocation',
    anchor: 'revocation',
    no: '4.4',
    title: 'การยกเลิกบัญชีหรือสิทธิ์',
    en: 'Access Revocation',
    lead: 'เมื่อผู้ใช้งานลาออก สิ้นสุดการจ้างงานหรือการปฏิบัติงาน หรือหมดความจำเป็นในการใช้สิทธิ์ ให้ยกเลิกบัญชีหรือสิทธิ์ตามระยะเวลาที่กำหนดใน PC-08',
    icon: 'user-minus',
    steps: [
      {
        node: 'n1',
        actor: 'HR',
        title: 'แจ้งลาออก / สิ้นสุดการจ้าง',
        text: 'พนักงาน NETbay: อ้างอิงการแจ้งลาออกหรือสิ้นสุดการจ้างงานจาก HR ผ่าน Service Desk Plus ตามกระบวนการเดิม โดยให้ HR ส่งสำเนา (CC) อีเมลแจ้ง Ticket ดังกล่าวถึง Ai-BOX Admin เพื่อดำเนินการยกเลิกบัญชีหรือสิทธิ์ตาม PC-08',
      },
      {
        node: 'n2',
        actor: 'Line Manager',
        title: 'เปิด Ticket แจ้งสิ้นสุด',
        text: 'บุคลากรภายนอก (Outsource): Line Manager หรือผู้รับผิดชอบภายใน NETbay เปิด Service Desk Ticket แจ้งการสิ้นสุดการปฏิบัติงานหรือหมดความจำเป็นในการเข้าถึงระบบ เพื่อให้ Ai-BOX Admin ดำเนินการยกเลิกบัญชีหรือสิทธิ์',
      },
      {
        node: 'n3',
        actor: 'Admin',
        title: 'ตรวจสอบหลักฐานการแจ้ง',
        text: 'Admin ตรวจสอบหลักฐานการแจ้ง (Ticket หรืออีเมลจาก HR)',
      },
      {
        node: 'n4',
        actor: 'Admin',
        title: 'ยกเลิกบัญชี / สิทธิ์',
        text: 'ดำเนินการยกเลิกบัญชีหรือสิทธิ์ตามระยะเวลาที่กำหนดใน PC-08',
      },
      {
        node: 'n5',
        actor: 'Admin',
        title: 'บันทึกผลใน Ticket',
        text: 'บันทึกผลใน Ticket หรือหลักฐานที่สามารถตรวจสอบย้อนหลังได้',
      },
      {
        node: 'n6',
        actor: 'Admin',
        title: 'จัดเก็บหลักฐานสถานะ',
        text: 'จัดเก็บหลักฐานสถานะบัญชีหลังดำเนินการ โดยปกปิดข้อมูลส่วนบุคคลที่ไม่จำเป็น',
      },
    ],
  },
  {
    id: 'quarterly-review',
    anchor: 'review',
    no: '4.7–4.8',
    title: 'การทบทวนสิทธิ์รายไตรมาส',
    en: 'Quarterly Access Review',
    lead: 'Admin และ Product Owner ร่วมกับทีมที่เกี่ยวข้องทบทวนสิทธิ์ผู้ใช้งาน Ai-BOX อย่างน้อยทุก 3 เดือน หากพบความผิดปกติต้องตรวจสิทธิ์ที่ได้รับจริงและจัดเก็บหลักฐาน',
    icon: 'calendar-clock',
    steps: [
      {
        node: 'n1',
        actor: 'Admin + Product Owner',
        title: 'ประชุมทบทวนสิทธิ์',
        text: 'Admin และ Product Owner (Service Owner) ร่วมกับทีมที่เกี่ยวข้องประชุมทบทวนสิทธิ์ผู้ใช้งาน Ai-BOX อย่างน้อยทุก 3 เดือน',
      },
      {
        node: 'n2',
        actor: 'ผู้เข้าร่วมทบทวน',
        title: 'ตรวจบัญชีผู้ใช้งาน',
        text: 'ตรวจสอบบัญชีผู้ใช้งานของทั้ง Service Provider และ NETbay Organization รวมถึง Team/Group (ถ้ามี) ให้เหมาะสมกับหน้าที่และความรับผิดชอบ (R&R) โดยตรวจสอบบัญชีร่วม บัญชีที่ไม่ใช้งาน และผู้ที่ลาออกหรือเปลี่ยนหน้าที่',
      },
      {
        node: 'n3',
        actor: 'ผู้เข้าร่วมทบทวน',
        title: 'สิทธิ์เกินจำเป็นหรือสิทธิ์พิเศษ?',
        text: 'พิจารณาว่าพบสิทธิ์ที่อาจเกินความจำเป็น มีการอนุมัติสิทธิ์พิเศษ หรือมีการเปลี่ยนแปลงการกำหนดสิทธิ์ของกลุ่มผู้ใช้งานหรือไม่ (ข้อ 4.8)',
      },
      {
        node: 'n5',
        actor: 'ผู้เข้าร่วมทบทวน',
        title: 'ตรวจสิทธิ์ที่ได้รับจริง',
        text: 'ตรวจสอบสิทธิ์การเข้าถึงที่ได้รับจริง และจัดเก็บหลักฐานผลการตรวจสอบและการดำเนินการที่เกี่ยวข้อง',
      },
      {
        node: 'n6',
        actor: 'ผู้เข้าร่วมทบทวน',
        title: 'ตัดสิน คง · ปรับ · ยกเลิก',
        text: 'พิจารณาคง ปรับ หรือยกเลิกสิทธิ์ บันทึกผลการทบทวน และติดตามการแก้ไขจนแล้วเสร็จ (ถ้ามี)',
      },
      {
        node: 'n7',
        actor: 'Admin',
        title: 'ส่งอีเมลสรุปผล',
        text: 'ส่งสรุปผลทางอีเมลให้ทีม PD, T&D, TCS และ Admin',
      },
      {
        node: 'n8',
        actor: 'Admin',
        title: 'จัดเก็บหลักฐาน',
        text: 'จัดเก็บ Review Record, MoM และหลักฐานที่เกี่ยวข้อง',
      },
    ],
  },
];

export const TICKET_CHECKLIST: string[] = [
  'ผู้ขอและตัวผู้ใช้งานรายบุคคล ไม่ใช่ Shared Account',
  'เหตุผลและ R&R',
  'Organization, Team/Group (ถ้ามี) และสิทธิ์ที่ร้องขอ',
  'การรับรองจาก Line Manager ตาม PC-08',
  'การอนุมัติจาก Product Owner (Service Owner)',
  'สิทธิ์ที่กำหนดจริงตรงกับ Ticket ที่อนุมัติ และหลักฐานผลการดำเนินการก่อนปิด Ticket',
];
export const TICKET_MISMATCH = 'หากไม่ตรง ต้องแก้ไขและบันทึกผล';

export const SHARED_RULE =
  'ห้ามสร้างหรือใช้ Shared User Account สำหรับการเข้าสู่ระบบและปฏิบัติงานของบุคคลทุกกรณี โดยไม่มีข้อยกเว้น';
export const SHARED_STEPS: { title: string; text: string }[] = [
  { title: 'ระงับการใช้งาน', text: 'เมื่อตรวจพบ Shared Account ให้ระงับการใช้งานทันที' },
  { title: 'จัดสรร Individual Account', text: 'ประสาน Product Owner (Service Owner) เพื่อจัดสรร Individual User Account ให้ผู้เกี่ยวข้อง' },
  { title: 'ยกเลิกบัญชีร่วม', text: 'ยกเลิก Shared Account ที่พบ' },
  { title: 'จัดเก็บหลักฐาน', text: 'จัดเก็บหลักฐานการดำเนินการใน Ticket หรือ Review Record' },
];
export const SHARED_TECH_NOTE =
  'กรณีมีข้อจำกัดทางเทคนิค เช่น การใช้บัญชีข้าม Organization ต้องดำเนินการแก้ไขหรือกำหนดวิธีปฏิบัติทดแทนที่สามารถระบุตัวผู้ใช้งานรายบุคคลได้ โดยไม่ใช้ Shared User Account เป็นวิธีแก้ปัญหา';

export const REVIEW_EVIDENCE_NOTE =
  'การทบทวนสิทธิ์ให้พิจารณาจากรายชื่อผู้ใช้งาน Organization, Team/Group (ถ้ามี) และความเหมาะสมของสิทธิ์ตามหน้าที่และความรับผิดชอบ (R&R)';
