// Flow diagram geometry (coordinates in SVG units). Edit here to move nodes/edges.
// Node ids (n1..) are referenced by FLOW_STEPS in content.ts.
import { FlowSpec } from '../flow-diagram/flow.types';

export const FLOW_GEOMETRY: FlowSpec[] = [
  {
    "id": "access-request",
    "viewBox": [
      1260,
      520
    ],
    "lanes": [
      {
        "name": "REQUESTER",
        "cy": 70
      },
      {
        "name": "LINE MANAGER",
        "cy": 170
      },
      {
        "name": "PRODUCT OWNER",
        "cy": 270
      },
      {
        "name": "ADMIN",
        "cy": 370
      }
    ],
    "laneTop": 20,
    "laneH": 100,
    "left": 160,
    "x0": 40,
    "x1": 1220,
    "title": "การขอสร้างบัญชีและสิทธิ์ (Access Request)",
    "nodes": [
      {
        "id": "n1",
        "kind": "step",
        "cx": 260,
        "cy": 70,
        "w": 140,
        "h": 56,
        "title": "เปิด Ticket ขอสิทธิ์",
        "subs": [
          "ผ่าน Service Desk"
        ]
      },
      {
        "id": "n2",
        "kind": "step",
        "cx": 400,
        "cy": 170,
        "w": 140,
        "h": 56,
        "title": "รับรองความจำเป็น",
        "subs": [
          "ตามหน้าที่ R&R"
        ]
      },
      {
        "id": "n3",
        "kind": "focal",
        "cx": 570,
        "cy": 270,
        "w": 180,
        "h": 56,
        "title": "ตรวจสอบและอนุมัติ",
        "subs": [
          "Individual · Least Privilege"
        ]
      },
      {
        "id": "n4",
        "kind": "decision",
        "cx": 740,
        "cy": 370,
        "w": 140,
        "h": 76,
        "title": "",
        "lines": [
          "ตรวจ Ticket",
          "ครบถ้วน?"
        ],
        "subs": []
      },
      {
        "id": "n5",
        "kind": "step",
        "cx": 950,
        "cy": 370,
        "w": 160,
        "h": 56,
        "title": "สร้างบัญชี / กำหนดสิทธิ์",
        "subs": [
          "ตามที่ได้รับอนุมัติ"
        ]
      },
      {
        "id": "n6",
        "kind": "result",
        "cx": 1140,
        "cy": 370,
        "w": 160,
        "h": 56,
        "title": "บันทึกผลและปิด Ticket",
        "subs": [
          "วันเวลา · ผู้ทำ · หลักฐาน"
        ]
      }
    ],
    "edges": [
      {
        "pts": [
          [
            330,
            70
          ],
          [
            400,
            70
          ],
          [
            400,
            142
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            470,
            170
          ],
          [
            570,
            170
          ],
          [
            570,
            242
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            660,
            270
          ],
          [
            740,
            270
          ],
          [
            740,
            332
          ]
        ],
        "style": "accent"
      },
      {
        "pts": [
          [
            810,
            370
          ],
          [
            870,
            370
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            1030,
            370
          ],
          [
            1060,
            370
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            670,
            370
          ],
          [
            260,
            370
          ],
          [
            260,
            98
          ]
        ],
        "style": "dashed"
      }
    ],
    "labels": [
      {
        "x": 840,
        "y": 355,
        "text": "ครบ",
        "accent": false
      },
      {
        "x": 480,
        "y": 355,
        "text": "ไม่ครบ / สงสัย Shared → ส่งกลับชี้แจง",
        "accent": false
      }
    ]
  },
  {
    "id": "access-modification",
    "viewBox": [
      1260,
      520
    ],
    "lanes": [
      {
        "name": "REQUESTER",
        "cy": 70
      },
      {
        "name": "LINE MANAGER",
        "cy": 170
      },
      {
        "name": "PRODUCT OWNER",
        "cy": 270
      },
      {
        "name": "ADMIN",
        "cy": 370
      }
    ],
    "laneTop": 20,
    "laneH": 100,
    "left": 160,
    "x0": 40,
    "x1": 1220,
    "title": "การเปลี่ยนแปลงสิทธิ์ (Access Modification)",
    "nodes": [
      {
        "id": "n1",
        "kind": "terminal",
        "cx": 285,
        "cy": 370,
        "w": 190,
        "h": 52,
        "title": "รับแจ้งการเปลี่ยนแปลง",
        "subs": [
          "HR / Line Manager / Ticket"
        ]
      },
      {
        "id": "n2",
        "kind": "decision",
        "cx": 490,
        "cy": 370,
        "w": 170,
        "h": 76,
        "title": "",
        "lines": [
          "ลาออกหรือ",
          "สิ้นสุดสัญญา?"
        ],
        "subs": []
      },
      {
        "id": "n3",
        "kind": "terminal",
        "cx": 725,
        "cy": 370,
        "w": 170,
        "h": 52,
        "title": "ไปขั้นตอน 4.4",
        "subs": [
          "Access Revocation"
        ]
      },
      {
        "id": "n4",
        "kind": "step",
        "cx": 490,
        "cy": 70,
        "w": 190,
        "h": 56,
        "title": "ขอเปลี่ยนสิทธิ์",
        "subs": [
          "วันที่มีผล · สิทธิ์ใหม่ · เหตุผล"
        ]
      },
      {
        "id": "n5",
        "kind": "step",
        "cx": 675,
        "cy": 170,
        "w": 150,
        "h": 56,
        "title": "รับรองความจำเป็น",
        "subs": [
          "ตามหน้าที่ R&R"
        ]
      },
      {
        "id": "n6",
        "kind": "focal",
        "cx": 875,
        "cy": 270,
        "w": 190,
        "h": 56,
        "title": "พิจารณาอนุมัติ",
        "subs": [
          "ตรวจหลักฐานรับรองจาก LM"
        ]
      },
      {
        "id": "n7",
        "kind": "result",
        "cx": 1110,
        "cy": 370,
        "w": 200,
        "h": 56,
        "title": "เปลี่ยนสิทธิ์และบันทึก",
        "subs": [
          "ตรวจการอนุมัติ · บันทึกใน Ticket"
        ]
      }
    ],
    "edges": [
      {
        "pts": [
          [
            380,
            370
          ],
          [
            405,
            370
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            575,
            370
          ],
          [
            640,
            370
          ]
        ],
        "style": "dashed"
      },
      {
        "pts": [
          [
            490,
            332
          ],
          [
            490,
            98
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            585,
            70
          ],
          [
            675,
            70
          ],
          [
            675,
            142
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            750,
            170
          ],
          [
            875,
            170
          ],
          [
            875,
            242
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            970,
            270
          ],
          [
            1110,
            270
          ],
          [
            1110,
            342
          ]
        ],
        "style": "accent"
      }
    ],
    "labels": [
      {
        "x": 610,
        "y": 355,
        "text": "ใช่",
        "accent": false
      },
      {
        "x": 546,
        "y": 274,
        "text": "เปลี่ยนหน้าที่",
        "accent": false
      }
    ]
  },
  {
    "id": "access-revocation",
    "viewBox": [
      1320,
      420
    ],
    "lanes": [
      {
        "name": "HR",
        "cy": 70
      },
      {
        "name": "LINE MANAGER",
        "cy": 170
      },
      {
        "name": "ADMIN",
        "cy": 270
      }
    ],
    "laneTop": 20,
    "laneH": 100,
    "left": 200,
    "x0": 40,
    "x1": 1280,
    "title": "การยกเลิกบัญชีหรือสิทธิ์ (Access Revocation)",
    "nodes": [
      {
        "id": "n1",
        "kind": "step",
        "cx": 325,
        "cy": 70,
        "w": 210,
        "h": 56,
        "title": "แจ้งลาออก / สิ้นสุดการจ้าง",
        "subs": [
          "Service Desk Plus · CC Admin"
        ]
      },
      {
        "id": "n2",
        "kind": "step",
        "cx": 325,
        "cy": 170,
        "w": 210,
        "h": 56,
        "title": "เปิด Ticket แจ้งสิ้นสุด",
        "subs": [
          "การปฏิบัติงาน / หมดความจำเป็น"
        ]
      },
      {
        "id": "n3",
        "kind": "step",
        "cx": 605,
        "cy": 270,
        "w": 190,
        "h": 56,
        "title": "ตรวจสอบหลักฐานการแจ้ง",
        "subs": [
          "Ticket / อีเมลจาก HR"
        ]
      },
      {
        "id": "n4",
        "kind": "focal",
        "cx": 825,
        "cy": 270,
        "w": 170,
        "h": 56,
        "title": "ยกเลิกบัญชี / สิทธิ์",
        "subs": [
          "ตามระยะเวลา PC-08"
        ]
      },
      {
        "id": "n5",
        "kind": "step",
        "cx": 1025,
        "cy": 270,
        "w": 170,
        "h": 56,
        "title": "บันทึกผลใน Ticket",
        "subs": [
          "ตรวจสอบย้อนหลังได้"
        ]
      },
      {
        "id": "n6",
        "kind": "result",
        "cx": 1225,
        "cy": 270,
        "w": 170,
        "h": 56,
        "title": "จัดเก็บหลักฐานสถานะ",
        "subs": [
          "ปกปิดข้อมูลส่วนบุคคล"
        ]
      }
    ],
    "edges": [
      {
        "pts": [
          [
            430,
            70
          ],
          [
            640,
            70
          ],
          [
            640,
            242
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            430,
            170
          ],
          [
            550,
            170
          ],
          [
            550,
            242
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            700,
            270
          ],
          [
            740,
            270
          ]
        ],
        "style": "accent"
      },
      {
        "pts": [
          [
            910,
            270
          ],
          [
            940,
            270
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            1110,
            270
          ],
          [
            1140,
            270
          ]
        ],
        "style": "flow"
      }
    ],
    "labels": [
      {
        "x": 535,
        "y": 55,
        "text": "พนักงาน NETbay",
        "accent": false
      },
      {
        "x": 485,
        "y": 155,
        "text": "Outsource",
        "accent": false
      }
    ]
  },
  {
    "id": "quarterly-review",
    "viewBox": [
      1300,
      380
    ],
    "lanes": [],
    "laneTop": 20,
    "laneH": 100,
    "left": 160,
    "x0": 40,
    "x1": 1260,
    "title": "การทบทวนสิทธิ์รายไตรมาส (Quarterly Access Review)",
    "nodes": [
      {
        "id": "n1",
        "kind": "step",
        "cx": 115,
        "cy": 130,
        "w": 150,
        "h": 68,
        "title": "ประชุมทบทวนสิทธิ์",
        "subs": [
          "Admin + Product Owner",
          "อย่างน้อยทุก 3 เดือน"
        ]
      },
      {
        "id": "n2",
        "kind": "step",
        "cx": 315,
        "cy": 130,
        "w": 190,
        "h": 68,
        "title": "ตรวจบัญชีผู้ใช้งาน",
        "subs": [
          "Service Provider + NETbay",
          "Shared · ไม่ใช้งาน · ลาออก"
        ]
      },
      {
        "id": "n3",
        "kind": "focal-decision",
        "cx": 540,
        "cy": 130,
        "w": 180,
        "h": 88,
        "title": "",
        "lines": [
          "สิทธิ์เกินจำเป็น",
          "หรือสิทธิ์พิเศษ?"
        ],
        "subs": []
      },
      {
        "id": "n4",
        "kind": "merge",
        "cx": 690,
        "cy": 130,
        "w": 8,
        "h": 8,
        "title": "",
        "subs": []
      },
      {
        "id": "n5",
        "kind": "step",
        "cx": 540,
        "cy": 250,
        "w": 170,
        "h": 56,
        "title": "ตรวจสิทธิ์ที่ได้รับจริง",
        "subs": [
          "เก็บหลักฐานผลตรวจสอบ"
        ]
      },
      {
        "id": "n6",
        "kind": "step",
        "cx": 825,
        "cy": 130,
        "w": 170,
        "h": 68,
        "title": "ตัดสิน คง · ปรับ · ยกเลิก",
        "subs": [
          "บันทึกผล",
          "ติดตามจนแล้วเสร็จ"
        ]
      },
      {
        "id": "n7",
        "kind": "step",
        "cx": 1020,
        "cy": 130,
        "w": 160,
        "h": 56,
        "title": "ส่งอีเมลสรุปผล",
        "subs": [
          "PD · T&D · TCS · Admin"
        ]
      },
      {
        "id": "n8",
        "kind": "result",
        "cx": 1195,
        "cy": 130,
        "w": 130,
        "h": 68,
        "title": "จัดเก็บหลักฐาน",
        "subs": [
          "Review Record",
          "MoM"
        ]
      }
    ],
    "edges": [
      {
        "pts": [
          [
            190,
            130
          ],
          [
            220,
            130
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            410,
            130
          ],
          [
            450,
            130
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            630,
            130
          ],
          [
            686,
            130
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            694,
            130
          ],
          [
            740,
            130
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            540,
            174
          ],
          [
            540,
            222
          ]
        ],
        "style": "accent"
      },
      {
        "pts": [
          [
            625,
            250
          ],
          [
            690,
            250
          ],
          [
            690,
            134
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            910,
            130
          ],
          [
            940,
            130
          ]
        ],
        "style": "flow"
      },
      {
        "pts": [
          [
            1100,
            130
          ],
          [
            1130,
            130
          ]
        ],
        "style": "flow"
      }
    ],
    "labels": [
      {
        "x": 645,
        "y": 115,
        "text": "ไม่พบ",
        "accent": false
      },
      {
        "x": 564,
        "y": 198,
        "text": "พบ",
        "accent": true
      }
    ]
  }
];
