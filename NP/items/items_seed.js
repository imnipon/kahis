/* Auto-generated/enriched seed for Items Manager redesign */
const ITEMS_SEED_META = {
  "source": "resource/order_tx-2026-07-24.xlsx",
  "sheet": "order_tx-2026-07-17020734",
  "uniqueCount": 298,
  "note": "Demo seed: pricing A/B/C, rx/txDefault, availability, commonName from category, trade from desc when possible",
  "updated": "2026-08-18T19:30:00"
};
const ITEMS_SEED = [
  {
    "itemCode": "30000000096",
    "name": "Barium sulphate",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี",
    "formula": "C",
    "unit": "ซีซี",
    "unitPrice": 400,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Barium sulphate",
    "tradeName": "",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "C - Every-N price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "C",
      "everyQty": 5,
      "price": 400
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "10/08/2026 09:00",
      "note": "ค้างส่งจากผู้จำหน่าย"
    }
  },
  {
    "itemCode": "50000000164",
    "name": "CD x-ray/DVD สำหรับเก็บภาพเอ็กซ์เรย์",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "CD x-ray/DVD สำหรับเก็บภาพเอ็กซ์เรย์",
    "tradeName": "",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000081",
    "name": "Iohexal (Omnipaque 300) (inj.)",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "Dilute with NSS to a total volume of …...cc",
    "alsoCategories": [
      "ยาฉีดที่ใช้บ่อย"
    ],
    "description": "Iohexal (Omnipaque 300) (inj.)",
    "tradeName": "Omnipaque 300",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000061",
    "name": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี Xray : series (<6 ฟิล์ม)",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี Xray : series (<6 ฟิล์ม)",
    "tradeName": "<6 ฟิล์ม",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000063",
    "name": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี Xray : series (>6 ฟิล์ม)",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี Xray : series (>6 ฟิล์ม)",
    "tradeName": ">6 ฟิล์ม",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000059",
    "name": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี(ต่อฟิล์ม) x-ray",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี",
    "formula": "B",
    "unit": "ครั้ง",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี(ต่อฟิล์ม) x-ray",
    "tradeName": "ต่อฟิล์ม",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000062",
    "name": "ค่าวินิจฉัยด้วยภาพถ่ายรังสีต่อฟิล์ม(ไม่รวมค่าเปิดเครื่อง)",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าวินิจฉัยด้วยภาพถ่ายรังสีต่อฟิล์ม(ไม่รวมค่าเปิดเครื่อง)",
    "tradeName": "ไม่รวมค่าเปิดเครื่อง",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000067",
    "name": "ค่าวินิจฉัยด้วยอัลตร้าซาวด์ (Ultrasound) U/S",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าวินิจฉัยด้วยอัลตร้าซาวด์ (Ultrasound) U/S",
    "tradeName": "Ultrasound",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000060",
    "name": "ค่าเปิดเครื่อง xray",
    "categoryName": "X-rays / Ultrasound",
    "receiptCategory": "ค่าวินิจฉัยด้วยภาพถ่ายรังสี",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าเปิดเครื่อง xray",
    "tradeName": "",
    "commonName": "วินิจฉัยภาพ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000158",
    "name": "Acetar for s/c",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Acetar for s/c",
    "tradeName": "",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 30,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000142",
    "name": "Acetated Ringer's 1000 ml (R-Cetate 1000 ml) (Acetar 1000 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Acetated Ringer's 1000 ml (R-Cetate 1000 ml) (Acetar 1000 ml)",
    "tradeName": "Acetar 1000 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000141",
    "name": "Acetated Ringer's 500 ml (Acetar 500 ml)*ใช้ในห้องตรวจ**",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Acetated Ringer's 500 ml (Acetar 500 ml)*ใช้ในห้องตรวจ**",
    "tradeName": "Acetar 500 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000108",
    "name": "Biocat (inj)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 132,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Biocat (inj)",
    "tradeName": "",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": 132,
    "priceMax": 220,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 132
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 220
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000131",
    "name": "Dextrose 5% in 1/2 Str.Saline 1000 ml (D 5 1/2 s 1000 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Dextrose 5% in 1/2 Str.Saline 1000 ml (D 5 1/2 s 1000 ml)",
    "tradeName": "D 5 1/2 s 1000 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "10/08/2026 22:00",
      "note": "สต็อกหมดชั่วคราว — ใช้ตัวทดแทนชั่วคราว"
    }
  },
  {
    "itemCode": "50000000146",
    "name": "Dextrose 5% in Acetated Ringer's 1000 ml  (Acetar-5 1000 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Dextrose 5% in Acetated Ringer's 1000 ml  (Acetar-5 1000 ml)",
    "tradeName": "Acetar-5 1000 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000057",
    "name": "Fercobsang (inj.)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Fercobsang (inj.)",
    "tradeName": "",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000133",
    "name": "Lcatate Ringer's 1000 ml (LRI 1000 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ขวด",
    "unitPrice": 132,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Lcatate Ringer's 1000 ml (LRI 1000 ml)",
    "tradeName": "LRI 1000 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": 132,
    "priceMax": 330,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 132
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 220
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 330
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000109",
    "name": "Metabolase (ยาบำรุง)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Metabolase (ยาบำรุง)",
    "tradeName": "ยาบำรุง",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000157",
    "name": "NSS for s/c",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 54,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "NSS for s/c",
    "tradeName": "",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": 54,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 54
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000136",
    "name": "Normal Saline 0.9% 100 ml (NSS ขวดละ 100 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Normal Saline 0.9% 100 ml (NSS ขวดละ 100 ml)",
    "tradeName": "NSS ขวดละ 100 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000138",
    "name": "Normal Saline 0.9% 1000 ml (NSS ขวดละ 1000 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Normal Saline 0.9% 1000 ml (NSS ขวดละ 1000 ml)",
    "tradeName": "NSS ขวดละ 1000 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000137",
    "name": "Normal Saline 0.9% 500 ml (NSS ขวดละ 500 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Normal Saline 0.9% 500 ml (NSS ขวดละ 500 ml)",
    "tradeName": "NSS ขวดละ 500 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000058",
    "name": "Vitamin B12 (1000 mcg)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 66,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vitamin B12 (1000 mcg)",
    "tradeName": "1000 mcg",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": 66,
    "priceMax": 165,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 66
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 110
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 165
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000167",
    "name": "ขายยกขวด Dextrose 5% in Str.water 1000 ml (D5W 1000 ml)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "ขายยกขวด Dextrose 5% in Str.water 1000 ml (D5W 1000 ml)",
    "tradeName": "D5W 1000 ml",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000025",
    "name": "ค่าบริการให้น้ำเกลือ s/c",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการให้น้ำเกลือ s/c",
    "tradeName": "",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000026",
    "name": "ค่าแก้น้ำเกลือ",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าแก้น้ำเกลือ",
    "tradeName": "",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000019",
    "name": "ค่าใช้บริการเครื่องให้น้ำเกลืออัตโนมัติ (Infusion pump)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าใช้บริการเครื่องให้น้ำเกลืออัตโนมัติ (Infusion pump)",
    "tradeName": "Infusion pump",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "11/08/2026 11:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "30000000094",
    "name": "ค่าใช้บริการเครื่องให้น้ำเกลืออัตโนมัติ (Infusion pump)**24hr**",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "วัสดุการแพทย์",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ค่าใช้บริการเครื่องให้น้ำเกลืออัตโนมัติ (Infusion pump)**24hr**",
    "tradeName": "Infusion pump",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000034",
    "name": "จุกปิดน้ำเกลือ (injection plug/heparin plug)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "จุกปิดน้ำเกลือ (injection plug/heparin plug)",
    "tradeName": "injection plug/heparin plug",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000035",
    "name": "ปลั๊ก 3 ทาง (3 way valve)",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ปลั๊ก 3 ทาง (3 way valve)",
    "tradeName": "3 way valve",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000159",
    "name": "วิตามินบำรุงในน้ำเกลือ(metabolase+biocat) ตามน้ำหนักตัว",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "กิโลกรัม",
    "unitPrice": 54,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "วิตามินบำรุงในน้ำเกลือ(metabolase+biocat) ตามน้ำหนักตัว",
    "tradeName": "metabolase+biocat",
    "commonName": "สารน้ำ",
    "formulaLabel": "B - Range price",
    "priceMin": 54,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 54
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000001",
    "name": "สายต่อน้ำเกลือ 6 นิ้ว (Extension 6\")",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "สายต่อน้ำเกลือ 6 นิ้ว (Extension 6\")",
    "tradeName": "Extension 6\"",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000038",
    "name": "เข็มให้น้ำเกลือ เบอร์ 22 (ฟ้า) IV catheter No.22",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เข็มให้น้ำเกลือ เบอร์ 22 (ฟ้า) IV catheter No.22",
    "tradeName": "ฟ้า",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000037",
    "name": "เข็มให้น้ำเกลือ เบอร์ 24 (เหลือง) IV catheter No.24",
    "categoryName": "น้ำเกลือ IV / SC",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เข็มให้น้ำเกลือ เบอร์ 24 (เหลือง) IV catheter No.24",
    "tradeName": "เหลือง",
    "commonName": "สารน้ำ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000065",
    "name": "Bupivacaine 5 mg (Marcaine Spinal Heavy 5 mg) (inj.)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bupivacaine 5 mg (Marcaine Spinal Heavy 5 mg) (inj.)",
    "tradeName": "Marcaine Spinal Heavy 5 mg",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000034",
    "name": "Diazepam (inj.)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 54,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "per rectum",
    "alsoCategories": [
      "ยาฉุกเฉิน"
    ],
    "description": "Diazepam (inj.)",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 54,
    "priceMax": 135,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 54
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 90
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 135
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000067",
    "name": "Isofurane (ยาดมสลบ)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ชั่วโมง",
    "unitPrice": 66,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IH",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Isofurane (ยาดมสลบ)",
    "tradeName": "ยาดมสลบ",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 66,
    "priceMax": 110,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 66
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 110
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000068",
    "name": "Ketamine 50 mg (inj.)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "dilute IV",
    "alsoCategories": [],
    "description": "Ketamine 50 mg (inj.)",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 525,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 525
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000118",
    "name": "Lidocaine 2 %",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 132,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "epidural/regional",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Lidocaine 2 %",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 132,
    "priceMax": 330,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 132
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 220
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 330
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000152",
    "name": "Midazolam inj (ยานำสลบ)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Midazolam inj (ยานำสลบ)",
    "tradeName": "ยานำสลบ",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 60,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "12/08/2026 00:00",
      "note": "สงวนไว้เคส CCU เท่านั้น"
    }
  },
  {
    "itemCode": "20000000069",
    "name": "Propofol (inj.)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "C",
    "unit": "ซีซี",
    "unitPrice": 400,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [
      "ยาฉุกเฉิน"
    ],
    "description": "Propofol (inj.)",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "C - Every-N price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "C",
      "everyQty": 5,
      "price": 400
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000153",
    "name": "Sevoflurane",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ชั่วโมง",
    "unitPrice": 27,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IH",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Sevoflurane",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 27,
    "priceMax": 67.5,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 27
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 45
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 67.5
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000107",
    "name": "Xylazine (Inj)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Xylazine (Inj)",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 30,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000070",
    "name": "Xylocaine 2 % (inj.)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "regional",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Xylocaine 2 % (inj.)",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000077",
    "name": "Zoletil 100 (VAC)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 27,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "dilute IV",
    "alsoCategories": [],
    "description": "Zoletil 100 (VAC)",
    "tradeName": "VAC",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 27,
    "priceMax": 67.5,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 27
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 45
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 67.5
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000079",
    "name": "ค่าบริการผ่าตัดฉุกเฉินนอกเวลาราชการ",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการผ่าตัดฉุกเฉินนอกเวลาราชการ",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000076",
    "name": "ค่าบริการผ่าตัดนอกเวลาราชการ",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการผ่าตัดนอกเวลาราชการ",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000082",
    "name": "ค่าบริการศัลยกรรม",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการศัลยกรรม",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000084",
    "name": "ค่าหัตถการส่องกล้อง (endoscope)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่าตรวจวินิจฉัยส่องกล้อง",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการส่องกล้อง (endoscope)",
    "tradeName": "endoscope",
    "commonName": "ผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000125",
    "name": "วางยาสลบสุนัขด้วยยาฉีด",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "กิโลกรัม",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "วางยาสลบสุนัขด้วยยาฉีด",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000124",
    "name": "วางยาสลบแมวด้วยยาฉีด",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "กิโลกรัม",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "วางยาสลบแมวด้วยยาฉีด",
    "tradeName": "",
    "commonName": "ผ่าตัด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000020",
    "name": "เข็มฉีดยาเข้าไขสันหลัง (Spinal needle g23 1/2)",
    "categoryName": "ผ่าตัด และวางยา",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เข็มฉีดยาเข้าไขสันหลัง (Spinal needle g23 1/2)",
    "tradeName": "Spinal needle g23 1/2",
    "commonName": "ผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000026",
    "name": "Acetylcysteine (Flumucil inj 300 mg ) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 54,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Acetylcysteine (Flumucil inj 300 mg ) (inj.)",
    "tradeName": "Flumucil inj 300 mg",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 54,
    "priceMax": 135,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 54
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 90
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 135
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "10/08/2026 21:00",
      "note": "สต็อกหมดชั่วคราว — ใช้ตัวทดแทนชั่วคราว"
    }
  },
  {
    "itemCode": "20000000028",
    "name": "Aminophyline 0.25 gm (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 132,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Aminophyline 0.25 gm (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 132,
    "priceMax": 330,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 132
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 220
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 330
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000131",
    "name": "Amoxicillin 500 mg + Clavulanate 100 mg (cavumox 0.6g) (inj)IV",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Amoxicillin 500 mg + Clavulanate 100 mg (cavumox 0.6g) (inj)IV",
    "tradeName": "cavumox 0.6g",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000105",
    "name": "Ampicillin 1g/vial (Inj)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "q2h",
    "alsoCategories": [
      "ผ่าตัด และวางยา"
    ],
    "description": "Ampicillin 1g/vial (Inj)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000115",
    "name": "Berenil 7 % 20 ml",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Berenil 7 % 20 ml",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000015",
    "name": "Butasyl (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Butasyl (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 180,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000158",
    "name": "Cavumox 1.2g (inj) IV",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cavumox 1.2g (inj) IV",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000002",
    "name": "Cefazolin (Cefaben) (inj)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "q90min",
    "alsoCategories": [
      "ผ่าตัด และวางยา"
    ],
    "description": "Cefazolin (Cefaben) (inj)",
    "tradeName": "Cefaben",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000003",
    "name": "Ceftriaxone 1 g (Trixophin 1 g) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Ceftriaxone 1 g (Trixophin 1 g) (inj.)",
    "tradeName": "Trixophin 1 g",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000033",
    "name": "Chlorpheniramine (CPM) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 66,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Chlorpheniramine (CPM) (inj.)",
    "tradeName": "CPM",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 66,
    "priceMax": 165,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 66
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 110
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 165
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "24",
    "name": "Cytopoint 40 mg/ml (lokivetmabi)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ขวด",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cytopoint 40 mg/ml (lokivetmabi)",
    "tradeName": "lokivetmabi",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000023",
    "name": "Dexamethasone (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Dexamethasone (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 350,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000066",
    "name": "Dexdomitor (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ซีซี",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Dexdomitor (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000017",
    "name": "Dipyrone (inj.) (novacilan)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Dipyrone (inj.) (novacilan)",
    "tradeName": "novacilan",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "11/08/2026 10:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "20000000161",
    "name": "Doxorubicin 50mg/25ml (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "C",
    "unit": "ขวด",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV CRI",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Doxorubicin 50mg/25ml (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "C - Every-N price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "C",
      "everyQty": null,
      "price": null
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000102",
    "name": "Enrofloxacin 100 mg/ml (Inj) (Syvaquinol)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Enrofloxacin 100 mg/ml (Inj) (Syvaquinol)",
    "tradeName": "Syvaquinol",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000006",
    "name": "Enrofloxacin 5% (Baytril 5%) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Enrofloxacin 5% (Baytril 5%) (inj.)",
    "tradeName": "Baytril 5%",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000018",
    "name": "Flunixin Meglumine (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 54,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Flunixin Meglumine (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 54,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 54
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000036",
    "name": "Furosemide 10 mg/ml (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IV ",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Furosemide 10 mg/ml (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000100",
    "name": "Gentamycin (inj)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "Nebulized",
    "defaultFrequency": "Dilute with NSS to a total volume of 20cc",
    "alsoCategories": [],
    "description": "Gentamycin (inj)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000038",
    "name": "Glucose 50 % (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [
      "ยาฉุกเฉิน"
    ],
    "description": "Glucose 50 % (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 350,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000039",
    "name": "Hemaccele (inj.)(Gelofusine)ขายยกขวด",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "กระปุก",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Hemaccele (inj.)(Gelofusine)ขายยกขวด",
    "tradeName": "Gelofusine",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000040",
    "name": "Heparin (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Heparin (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000111",
    "name": "Infervac 10 ml (กระตุ้นภูมิ)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ซีซี",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Infervac 10 ml (กระตุ้นภูมิ)",
    "tradeName": "กระตุ้นภูมิ",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000074",
    "name": "Insugen-R (Regular) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM / SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Insugen-R (Regular) (inj.)",
    "tradeName": "Regular",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000155",
    "name": "L-asparaginase  *เคมีบำบัด ม.กึ้ง*",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "L-asparaginase  *เคมีบำบัด ม.กึ้ง*",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000042",
    "name": "Laurabolin (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Laurabolin (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 180,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "ห้องยา (นิพนธ์)",
      "at": "11/08/2026 23:00",
      "note": "ค้างส่งจากผู้จำหน่าย"
    }
  },
  {
    "itemCode": "20000000154",
    "name": "Librela (bedinvetmab30mg/ml) For dog",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "C",
    "unit": "ขวด",
    "unitPrice": 900,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Librela (bedinvetmab30mg/ml) For dog",
    "tradeName": "bedinvetmab30mg/ml",
    "commonName": "ยาฉีด",
    "formulaLabel": "C - Every-N price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "C",
      "everyQty": 5,
      "price": 900
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000044",
    "name": "Manitol 20 % 500 ml (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Manitol 20 % 500 ml (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000010",
    "name": "Marbofloxacin 2% (Marbocyl 2 %) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Marbofloxacin 2% (Marbocyl 2 %) (inj.)",
    "tradeName": "Marbocyl 2 %",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 350,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "10000000306",
    "name": "Meloxicam inj.",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Meloxicam inj.",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000045",
    "name": "Metoclopramide (Met - Sil) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 132,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Metoclopramide (Met - Sil) (inj.)",
    "tradeName": "Met - Sil",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 132,
    "priceMax": 330,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 132
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 220
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 330
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000011",
    "name": "Metronidazole (Metrolex) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IV /CRI",
    "defaultFrequency": "Rate    ml/hr",
    "alsoCategories": [],
    "description": "Metronidazole (Metrolex) (inj.)",
    "tradeName": "Metrolex",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 60,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000021",
    "name": "Morphine sulfate (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 54,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [
      "ผ่าตัด และวางยา"
    ],
    "description": "Morphine sulfate (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 54,
    "priceMax": 135,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 54
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 90
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 135
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000114",
    "name": "Niketamine",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 66,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "dilute IV",
    "alsoCategories": [],
    "description": "Niketamine",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 66,
    "priceMax": 165,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 66
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 110
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 165
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000160",
    "name": "Norepinephrine inj",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Norepinephrine inj",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "10000000001",
    "name": "Novaclav (Amoxicillin 140 mg + Calvulanic 35 mg)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Novaclav (Amoxicillin 140 mg + Calvulanic 35 mg)",
    "tradeName": "Amoxicillin 140 mg + Calvulanic 35 mg",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000047",
    "name": "Omeprazole 40 mg (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 66,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Omeprazole 40 mg (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 66,
    "priceMax": 165,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 66
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 110
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 165
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "10000000315",
    "name": "Onsior 20mg/ml Inj  SC",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 66,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Onsior 20mg/ml Inj  SC",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 66,
    "priceMax": 110,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 66
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 110
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000106",
    "name": "Oxytetracyclin as HCL and Lidocain 40 mg/2ml (Oxytet)(Inj)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Oxytetracyclin as HCL and Lidocain 40 mg/2ml (Oxytet)(Inj)",
    "tradeName": "Oxytet",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "10/08/2026 20:00",
      "note": "สงวนไว้เคส CCU เท่านั้น"
    }
  },
  {
    "itemCode": "20000000079",
    "name": "Oxytocin (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM /SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Oxytocin (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000024",
    "name": "Prednisolone (inj.) IM",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 66,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Prednisolone (inj.) IM",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 66,
    "priceMax": 110,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 66
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 110
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "10000000142",
    "name": "Retromed *แบบแบ่งขาย* SC/PO",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC / PO",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Retromed *แบบแบ่งขาย* SC/PO",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000016",
    "name": "Rimadyl (Carprofen)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 27,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Rimadyl (Carprofen)",
    "tradeName": "Carprofen",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 27,
    "priceMax": 67.5,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 27
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 45
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 67.5
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000143",
    "name": "Shotapen (benzylpenicillin+streptomycin)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 54,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Shotapen (benzylpenicillin+streptomycin)",
    "tradeName": "benzylpenicillin+streptomycin",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 54,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 54
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000054",
    "name": "Sterile water (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "Ampule",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Sterile water (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000101",
    "name": "Sulfa-Trimethropim 240 mg/ml (STMP) (Inj)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Sulfa-Trimethropim 240 mg/ml (STMP) (Inj)",
    "tradeName": "STMP",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000019",
    "name": "Tolfenamic acid 4% (Tolfedine 4%)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tolfenamic acid 4% (Tolfedine 4%)",
    "tradeName": "Tolfedine 4%",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 60,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000020",
    "name": "Tramadol (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM ",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tramadol (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000055",
    "name": "Transamin (Tranex - 250) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [
      "ยาฉุกเฉิน"
    ],
    "description": "Transamin (Tranex - 250) (inj.)",
    "tradeName": "Tranex - 250",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "10000000303",
    "name": "Tx: Meropenem 1g.",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx: Meropenem 1g.",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000171",
    "name": "Tx:Amioplasmal 500 ml.(parenteral amino acid)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx:Amioplasmal 500 ml.(parenteral amino acid)",
    "tradeName": "parenteral amino acid",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000151",
    "name": "Tx:Clexane (Enoxaparine 8000 IU/0.8ml)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx:Clexane (Enoxaparine 8000 IU/0.8ml)",
    "tradeName": "Enoxaparine 8000 IU/0.8ml",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000022",
    "name": "Vescopolamine (Hyoscine) (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vescopolamine (Hyoscine) (inj.)",
    "tradeName": "Hyoscine",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000110",
    "name": "Vinblastin 10 ml",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vinblastin 10 ml",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000014",
    "name": "Vincristin (inj.)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vincristin (inj.)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000062",
    "name": "Vitamin ADE",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vitamin ADE",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 60,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000117",
    "name": "Vitamin B complex",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 27,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vitamin B complex",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 27,
    "priceMax": 67.5,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 27
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 45
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 67.5
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000059",
    "name": "Vitamin C (inj) 250 mg/ml",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vitamin C (inj) 250 mg/ml",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 525,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 525
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000061",
    "name": "Vitamin K1 (10 mg/ml)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ซีซี",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vitamin K1 (10 mg/ml)",
    "tradeName": "10 mg/ml",
    "commonName": "ยาฉีด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000116",
    "name": "Yohimbin (Inj)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 18,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "slow IV/IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Yohimbin (Inj)",
    "tradeName": "",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 18,
    "priceMax": 45,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 18
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 30
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 45
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000129",
    "name": "atipam (atipamezole)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "dilute IV",
    "alsoCategories": [],
    "description": "atipam (atipamezole)",
    "tradeName": "atipamezole",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 90,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 90
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "19",
    "name": "cerenia (maropitant 10mg/mL)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "cerenia (maropitant 10mg/mL)",
    "tradeName": "maropitant 10mg/mL",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000127",
    "name": "convenia (cefovecin sodium 80 mg./ml)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "convenia (cefovecin sodium 80 mg./ml)",
    "tradeName": "cefovecin sodium 80 mg./ml",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 525,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 525
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000134",
    "name": "dimenhydrinate(divomit)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "C",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "dimenhydrinate(divomit)",
    "tradeName": "divomit",
    "commonName": "ยาฉีด",
    "formulaLabel": "C - Every-N price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "C",
      "everyQty": null,
      "price": null
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000141",
    "name": "fentanyl (injection)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM ",
    "defaultFrequency": "IV",
    "alsoCategories": [
      "ผ่าตัด และวางยา"
    ],
    "description": "fentanyl (injection)",
    "tradeName": "injection",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 350,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "11/08/2026 22:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "20000000130",
    "name": "medetomidine (sedator)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IM",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "medetomidine (sedator)",
    "tradeName": "sedator",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000126",
    "name": "ondansetron(onsia)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 27,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ondansetron(onsia)",
    "tradeName": "onsia",
    "commonName": "ยาฉีด",
    "formulaLabel": "B - Range price",
    "priceMin": 27,
    "priceMax": 67.5,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 27
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 45
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 67.5
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000136",
    "name": "virbagen injection (TX)",
    "categoryName": "ยาฉีดที่ใช้บ่อย",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "C",
    "unit": "ซีซี",
    "unitPrice": 1500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "PO",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "virbagen injection (TX)",
    "tradeName": "TX",
    "commonName": "ยาฉีด",
    "formulaLabel": "C - Every-N price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "C",
      "everyQty": 5,
      "price": 1500
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000027",
    "name": "Adrenaline (inj.)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ซีซี",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "dilute iv",
    "alsoCategories": [],
    "description": "Adrenaline (inj.)",
    "tradeName": "",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000029",
    "name": "Atropine sulfate (inj.)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "IV",
    "defaultFrequency": "dilute iv",
    "alsoCategories": [],
    "description": "Atropine sulfate (inj.)",
    "tradeName": "",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000031",
    "name": "Calcium (Cal-gluconate) (inj.)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 210,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "slow IV",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Calcium (Cal-gluconate) (inj.)",
    "tradeName": "Cal-gluconate",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "B - Range price",
    "priceMin": 210,
    "priceMax": 350,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 210
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 350
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000113",
    "name": "Cobra Antivenin 10 ml (เซรุ่มงูเห่า)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "slow IV",
    "defaultFrequency": "ผสมในน้ำเกลือ drip iv",
    "alsoCategories": [],
    "description": "Cobra Antivenin 10 ml (เซรุ่มงูเห่า)",
    "tradeName": "เซรุ่มงูเห่า",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000112",
    "name": "Green pit Viper (เซรุ่มงูเขียวหางไหม้)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "slow IV",
    "defaultFrequency": "ผสมในน้ำเกลือ drip iv",
    "alsoCategories": [],
    "description": "Green pit Viper (เซรุ่มงูเขียวหางไหม้)",
    "tradeName": "เซรุ่มงูเขียวหางไหม้",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000050",
    "name": "Potassium 1.5 g/10 ml (inj.)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "CRI",
    "defaultFrequency": "PO",
    "alsoCategories": [],
    "description": "Potassium 1.5 g/10 ml (inj.)",
    "tradeName": "",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 60,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        }
      ]
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000052",
    "name": "Sodium Bicarbonate 10 ml",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 132,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "slow IV",
    "defaultFrequency": "ผสมในน้ำเกลือ drip iv ",
    "alsoCategories": [],
    "description": "Sodium Bicarbonate 10 ml",
    "tradeName": "",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "B - Range price",
    "priceMin": 132,
    "priceMax": 330,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 132
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 220
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 330
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000023",
    "name": "ค่าช่วยชีวิต (CPR)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าช่วยชีวิต (CPR)",
    "tradeName": "CPR",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000018",
    "name": "ค่าบริการดมอ๊อกซิเจน รายชั่วโมง (oxygen  per hour)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ค่าบริการดมอ๊อกซิเจน รายชั่วโมง (oxygen  per hour)",
    "tradeName": "oxygen  per hour",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000017",
    "name": "ค่าบริการดมอ๊อกซิเจน แบบเหมา 12 ชม.(oxygen 12 hr.)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ค่าบริการดมอ๊อกซิเจน แบบเหมา 12 ชม.(oxygen 12 hr.)",
    "tradeName": "oxygen 12 hr.",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "ห้องยา (นิพนธ์)",
      "at": "10/08/2026 19:00",
      "note": "ค้างส่งจากผู้จำหน่าย"
    }
  },
  {
    "itemCode": "30000000083",
    "name": "ค่าบริการดมอ๊อกซิเจน แบบเหมา 24 ชม.(oxygen 24 hr.)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ค่าบริการดมอ๊อกซิเจน แบบเหมา 24 ชม.(oxygen 24 hr.)",
    "tradeName": "oxygen 24 hr.",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000021",
    "name": "ค่าใช้บริการเครื่องติดตามสัญญาณชีพ (Mornitor)",
    "categoryName": "ยาฉุกเฉิน",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าใช้บริการเครื่องติดตามสัญญาณชีพ (Mornitor)",
    "tradeName": "Mornitor",
    "commonName": "ยาฉุกเฉิน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000095",
    "name": "Feline Leukemia vaccine (Nobivac:Feline 2-FeLV) วัคซีนลิวคีเมีย",
    "categoryName": "วัคซีน",
    "receiptCategory": "ค่าวัคซีน",
    "formula": "A",
    "unit": "dose",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Feline Leukemia vaccine (Nobivac:Feline 2-FeLV) วัคซีนลิวคีเมีย",
    "tradeName": "Nobivac:Feline 2-FeLV",
    "commonName": "วัคซีน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000094",
    "name": "Feline Rhinotracheitis-Calici-Panleukopenia-Chlamydia Psittaci vaccine (Novibac:Feline 1-HCPCh) วัคซีนไข้หัด-หวัดแมว",
    "categoryName": "วัคซีน",
    "receiptCategory": "ค่าวัคซีน",
    "formula": "A",
    "unit": "dose",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Feline Rhinotracheitis-Calici-Panleukopenia-Chlamydia Psittaci vaccine (Novibac:Feline 1-HCPCh) วัคซีนไข้หัด-หวัดแมว",
    "tradeName": "Novibac:Feline 1-HCPCh",
    "commonName": "วัคซีน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000041",
    "name": "Ivermectin (inj.) (IVM)",
    "categoryName": "วัคซีน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 36,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Ivermectin (inj.) (IVM)",
    "tradeName": "IVM",
    "commonName": "วัคซีน",
    "formulaLabel": "B - Range price",
    "priceMin": 36,
    "priceMax": 60,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 36
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 60
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "10000000184",
    "name": "Pyrapam syrub (Pyrantel)",
    "categoryName": "วัคซีน",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "B",
    "unit": "ซีซี",
    "unitPrice": 108,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "PO",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Pyrapam syrub (Pyrantel)",
    "tradeName": "Pyrantel",
    "commonName": "วัคซีน",
    "formulaLabel": "B - Range price",
    "priceMin": 108,
    "priceMax": 270,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": [
        {
          "from": 0.01,
          "to": 0.5,
          "price": 108
        },
        {
          "from": 0.51,
          "to": 1,
          "price": 180
        },
        {
          "from": 1.01,
          "to": 3,
          "price": 270
        }
      ]
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000091",
    "name": "Rabies vaccine (Rabisin) วัคซีนพิษสุนัขบ้า",
    "categoryName": "วัคซีน",
    "receiptCategory": "ค่าวัคซีน",
    "formula": "A",
    "unit": "dose",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Rabies vaccine (Rabisin) วัคซีนพิษสุนัขบ้า",
    "tradeName": "Rabisin",
    "commonName": "วัคซีน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "20000000092",
    "name": "Vanguard HTLP 5/CV-L vaccine (วัคซีนรวม 5 โรค)",
    "categoryName": "วัคซีน",
    "receiptCategory": "ค่าวัคซีน",
    "formula": "A",
    "unit": "dose",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "SC",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Vanguard HTLP 5/CV-L vaccine (วัคซีนรวม 5 โรค)",
    "tradeName": "วัคซีนรวม 5 โรค",
    "commonName": "วัคซีน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000099",
    "name": "(Sx) Maxon 2/0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "(Sx) Maxon 2/0",
    "tradeName": "Sx",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000100",
    "name": "(Sx) Maxon 3/0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "(Sx) Maxon 3/0",
    "tradeName": "Sx",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000104",
    "name": "(Sx) Monosyn 3/0 (cutting)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "(Sx) Monosyn 3/0 (cutting)",
    "tradeName": "cutting",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000088",
    "name": "(Sx) Nylon 2/0 (24 mm.)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "(Sx) Nylon 2/0 (24 mm.)",
    "tradeName": "24 mm.",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000089",
    "name": "(Sx) Nylon 2/0 (39 mm.)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "(Sx) Nylon 2/0 (39 mm.)",
    "tradeName": "39 mm.",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "11/08/2026 08:00",
      "note": "ค้างส่งจากผู้จำหน่าย"
    }
  },
  {
    "itemCode": "50000000090",
    "name": "(Sx) Nylon 3/0 (24 mm.)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "(Sx) Nylon 3/0 (24 mm.)",
    "tradeName": "24 mm.",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000091",
    "name": "(Sx) Nylon 4/0 (19 mm.)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "(Sx) Nylon 4/0 (19 mm.)",
    "tradeName": "19 mm.",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000217",
    "name": "Bone Graft",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone Graft",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000211",
    "name": "Bone Plate 1.2 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone Plate 1.2 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000212",
    "name": "Bone Plate 1.5 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone Plate 1.5 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000213",
    "name": "Bone Plate 2.0 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone Plate 2.0 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000220",
    "name": "Bone Plate 2.4 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone Plate 2.4 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000221",
    "name": "Bone Plate 2.7 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone Plate 2.7 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000216",
    "name": "Bone Plate 3.5 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone Plate 3.5 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "26",
    "name": "Bone pin",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Bone pin",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000207",
    "name": "Cortical Screw 1.2 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 1.2 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000187",
    "name": "Cortical Screw 1.5 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 1.5 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000188",
    "name": "Cortical Screw 2.0 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 2.0 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "11/08/2026 21:00",
      "note": "สงวนไว้เคส CCU เท่านั้น"
    }
  },
  {
    "itemCode": "50000000208",
    "name": "Cortical Screw 2.0 ปกรภัณฑ์",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 2.0 ปกรภัณฑ์",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000189",
    "name": "Cortical Screw 2.4 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 2.4 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000190",
    "name": "Cortical Screw 2.7 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 2.7 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000191",
    "name": "Cortical Screw 2.7 ปกรภัณฑ์",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 2.7 ปกรภัณฑ์",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000194",
    "name": "Cortical Screw 3.5 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 3.5 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000195",
    "name": "Cortical Screw 3.5 ปกรภัณฑ์",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Cortical Screw 3.5 ปกรภัณฑ์",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000147",
    "name": "Irrigation 1000 ml (Saline Irrigate 1000 ml) สำหรับล้างท้อง",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการ,ทำแผล",
      "หัตถการอื่นๆ"
    ],
    "description": "Irrigation 1000 ml (Saline Irrigate 1000 ml) สำหรับล้างท้อง",
    "tradeName": "Saline Irrigate 1000 ml",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000205",
    "name": "Locking Screw 1.2 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Locking Screw 1.2 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000206",
    "name": "Locking Screw 1.5 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Locking Screw 1.5 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000192",
    "name": "Locking Screw 2.0 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Locking Screw 2.0 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000193",
    "name": "Locking Screw 2.4 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Locking Screw 2.4 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000196",
    "name": "Locking Screw 2.7 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Locking Screw 2.7 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000197",
    "name": "Locking Screw 3.5 Arix",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Locking Screw 3.5 Arix",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "10/08/2026 18:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "50000000150",
    "name": "Maxon 6/0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ห่อ",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Maxon 6/0",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000103",
    "name": "Monoplus 3-0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Monoplus 3-0",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000177",
    "name": "Monoplus 4-0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Monoplus 4-0",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000178",
    "name": "Monoplus 5-0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Monoplus 5-0",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000105",
    "name": "Monosyn Quick 4/0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Monosyn Quick 4/0",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000108",
    "name": "PDS 3/0",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ซอง",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "PDS 3/0",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000225",
    "name": "Plate ปกรภัณฑ์",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Plate ปกรภัณฑ์",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000132",
    "name": "Saline Irrigate 500 ml (น้ำเกลือล้างแผล)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่ายานำกลับ",
    "formula": "A",
    "unit": "ขวด",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Saline Irrigate 500 ml (น้ำเกลือล้างแผล)",
    "tradeName": "น้ำเกลือล้างแผล",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000170",
    "name": "abdominal gauze 12x12",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการ,ทำแผล"
    ],
    "description": "abdominal gauze 12x12",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000083",
    "name": "ท่อเดรน (Penrose)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ชิ้น",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ท่อเดรน (Penrose)",
    "tradeName": "Penrose",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000005",
    "name": "ปลอกคอกันเลียเบอร์ 10 (Collar No.10)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ปลอกคอกันเลียเบอร์ 10 (Collar No.10)",
    "tradeName": "Collar No.10",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000006",
    "name": "ปลอกคอกันเลียเบอร์ 12.5 (Collar No.12.5)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ปลอกคอกันเลียเบอร์ 12.5 (Collar No.12.5)",
    "tradeName": "Collar No.12.5",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000007",
    "name": "ปลอกคอกันเลียเบอร์ 15 (Collar No. 15)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ปลอกคอกันเลียเบอร์ 15 (Collar No. 15)",
    "tradeName": "Collar No. 15",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "ห้องยา (นิพนธ์)",
      "at": "11/08/2026 07:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "50000000008",
    "name": "ปลอกคอกันเลียเบอร์ 20 (Collar No.20)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ปลอกคอกันเลียเบอร์ 20 (Collar No.20)",
    "tradeName": "Collar No.20",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000009",
    "name": "ปลอกคอกันเลียเบอร์ 25 (Collar No.25)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ปลอกคอกันเลียเบอร์ 25 (Collar No.25)",
    "tradeName": "Collar No.25",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000010",
    "name": "ปลอกคอกันเลียเบอร์ 30 (Collar No.30)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ปลอกคอกันเลียเบอร์ 30 (Collar No.30)",
    "tradeName": "Collar No.30",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000004",
    "name": "ปลอกคอกันเลียเบอร์ 7.5 (Collar No. 7.5)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ปลอกคอกันเลียเบอร์ 7.5 (Collar No. 7.5)",
    "tradeName": "Collar No. 7.5",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000092",
    "name": "เครื่องจี้ตาด้วยความเย็น (Cyo)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เครื่องจี้ตาด้วยความเย็น (Cyo)",
    "tradeName": "Cyo",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000089",
    "name": "เครื่องจี้ห้ามเลือด (Electrocautery)",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เครื่องจี้ห้ามเลือด (Electrocautery)",
    "tradeName": "Electrocautery",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000223",
    "name": "เสื้อหลังผ่าตัด 2XL",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เสื้อหลังผ่าตัด 2XL",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000224",
    "name": "เสื้อหลังผ่าตัด 3XL",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เสื้อหลังผ่าตัด 3XL",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000054",
    "name": "เสื้อหลังผ่าตัด L",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เสื้อหลังผ่าตัด L",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000053",
    "name": "เสื้อหลังผ่าตัด M",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เสื้อหลังผ่าตัด M",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000052",
    "name": "เสื้อหลังผ่าตัด S",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เสื้อหลังผ่าตัด S",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000055",
    "name": "เสื้อหลังผ่าตัด XL",
    "categoryName": "วัสดุผ่าตัด",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เสื้อหลังผ่าตัด XL",
    "tradeName": "",
    "commonName": "วัสดุผ่าตัด",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000029",
    "name": "CCU box รายชั่วโมง",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าฝากสัตว์ป่วย",
    "formula": "A",
    "unit": "ชั่วโมง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "CCU box รายชั่วโมง",
    "tradeName": "",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "11/08/2026 20:00",
      "note": "ค้างส่งจากผู้จำหน่าย"
    }
  },
  {
    "itemCode": "30000000028",
    "name": "CCU box แบบเหมาคืน",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าฝากสัตว์ป่วย",
    "formula": "A",
    "unit": "คืน",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "CCU box แบบเหมาคืน",
    "tradeName": "",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "90000000034",
    "name": "Meo 400 g อาหารกระป๋องแมว",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าอาหารกระป๋อง",
    "formula": "A",
    "unit": "กระป๋อง",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Meo 400 g อาหารกระป๋องแมว",
    "tradeName": "",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "90000000030",
    "name": "Recovery can อาหารสำหรับสุนัข และแมวระยะพักฟื้น 195 กรัม",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าอาหารกระป๋อง",
    "formula": "A",
    "unit": "กระป๋อง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Recovery can อาหารสำหรับสุนัข และแมวระยะพักฟื้น 195 กรัม",
    "tradeName": "",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "90000000035",
    "name": "pedigree1.15 kg  อาหารกระป๋องสุนัข",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าอาหารกระป๋อง",
    "formula": "A",
    "unit": "กระป๋อง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "pedigree1.15 kg  อาหารกระป๋องสุนัข",
    "tradeName": "",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "100000000002",
    "name": "ค่าตรวจสัตว์ป่วยใน",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าตรวจ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจสัตว์ป่วยใน",
    "tradeName": "",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000006",
    "name": "ค่าฝากสัตว์ป่วย(สุนัข:คิดตามน้ำหนักตัว)",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าฝากสัตว์ป่วย",
    "formula": "B",
    "unit": "กิโลกรัม",
    "unitPrice": null,
    "priceStatus": "pending",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าฝากสัตว์ป่วย(สุนัข:คิดตามน้ำหนักตัว)",
    "tradeName": "สุนัข:คิดตามน้ำหนักตัว",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "B - Range price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "B",
      "ranges": []
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000008",
    "name": "ค่าฝากสัตว์ป่วย(แมว)",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าฝากสัตว์ป่วย",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าฝากสัตว์ป่วย(แมว)",
    "tradeName": "แมว",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000015",
    "name": "ค่าหัตถการเช็ดหูแบบรุนแรง (Ear dressing severe)",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการเช็ดหูแบบรุนแรง (Ear dressing severe)",
    "tradeName": "Ear dressing severe",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000050",
    "name": "แผ่นรองซับ L",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "แผ่นรองซับ L",
    "tradeName": "",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000051",
    "name": "แผ่นรองซับ L (ขายยกห่อ)",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "แผ่นรองซับ L (ขายยกห่อ)",
    "tradeName": "ขายยกห่อ",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000165",
    "name": "ไซริงค์ 50 ซีซี (Syringe 50 ml) ป้อนอาหาร",
    "categoryName": "สัตว์ป่วยใน / CCU",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ไซริงค์ 50 ซีซี (Syringe 50 ml) ป้อนอาหาร",
    "tradeName": "Syringe 50 ml",
    "commonName": "สัตว์ป่วยใน",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000080",
    "name": "ค่าตรวจ Somatic cell count",
    "categoryName": "สัตว์ใหญ่",
    "receiptCategory": "ค่าตรวจทางห้องปฎิบัติการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจ Somatic cell count",
    "tradeName": "",
    "commonName": "สัตว์ใหญ่",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "980000000004",
    "name": "ค่าที่ปรึกษา",
    "categoryName": "สัตว์ใหญ่",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าที่ปรึกษา",
    "tradeName": "",
    "commonName": "สัตว์ใหญ่",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "10/08/2026 17:00",
      "note": "สต็อกหมดชั่วคราว — ใช้ตัวทดแทนชั่วคราว"
    }
  },
  {
    "itemCode": "980000000003",
    "name": "ค่าบริการฟาร์ม",
    "categoryName": "สัตว์ใหญ่",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการฟาร์ม",
    "tradeName": "",
    "commonName": "สัตว์ใหญ่",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "980000000002",
    "name": "ค่าปาดแต่งกีบโค",
    "categoryName": "สัตว์ใหญ่",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าปาดแต่งกีบโค",
    "tradeName": "",
    "commonName": "สัตว์ใหญ่",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000086",
    "name": "ค่าอุปกรณ์สำหรับการวิเคราะห์โซมาติกเซลล์",
    "categoryName": "สัตว์ใหญ่",
    "receiptCategory": "ค่าตรวจทางห้องปฎิบัติการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าอุปกรณ์สำหรับการวิเคราะห์โซมาติกเซลล์",
    "tradeName": "",
    "commonName": "สัตว์ใหญ่",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "990000000007",
    "name": "โครงการให้คำปรึกษาทางด้านการจัดการสุขภาพและผลผลิตระดับฝูง",
    "categoryName": "สัตว์ใหญ่",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "โครงการให้คำปรึกษาทางด้านการจัดการสุขภาพและผลผลิตระดับฝูง",
    "tradeName": "",
    "commonName": "สัตว์ใหญ่",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000059",
    "name": "Coban 2\"/ผ้ายืดพันแผล 2 นิ้ว",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ม้วน",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Coban 2\"/ผ้ายืดพันแผล 2 นิ้ว",
    "tradeName": "",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000060",
    "name": "Coban 3\"/ผ้ายืดพันแผล 3 นิ้ว",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ม้วน",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Coban 3\"/ผ้ายืดพันแผล 3 นิ้ว",
    "tradeName": "",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000167",
    "name": "Fentanyl patch (25 mcg/hr)",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Fentanyl patch (25 mcg/hr)",
    "tradeName": "25 mcg/hr",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000170",
    "name": "Fentanyl patch (50mcg/hr) ยาลดปวด",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Fentanyl patch (50mcg/hr) ยาลดปวด",
    "tradeName": "50mcg/hr",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000058",
    "name": "Fixomull (ซ.ม.)",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่ายานำกลับ",
    "formula": "A",
    "unit": "เซนติเมตร",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Fixomull (ซ.ม.)",
    "tradeName": "ซ.ม.",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000094",
    "name": "Foley catheter 2 ways CH 6 ตัวผู้",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "เส้น",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Foley catheter 2 ways CH 6 ตัวผู้",
    "tradeName": "",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000093",
    "name": "Foley catheter 8 Fr x 22\" (male)",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "เส้น",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Foley catheter 8 Fr x 22\" (male)",
    "tradeName": "male",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000042",
    "name": "Stomach Tube 18/125cm",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "อัน",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Stomach Tube 18/125cm",
    "tradeName": "",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000048",
    "name": "ก๊อซม้วน 3 นิ้ว (Gauze roll 3\")",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ม้วน",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ก๊อซม้วน 3 นิ้ว (Gauze roll 3\")",
    "tradeName": "Gauze roll 3\"",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร อรทัย",
      "at": "11/08/2026 06:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "80000000005",
    "name": "ค่าพันเฝือกอ่อน (Soft bandage )",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าพันเฝือกอ่อน (Soft bandage )",
    "tradeName": "Soft bandage",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000008",
    "name": "ค่าพันเฝือกใช้ Exlite",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าพันเฝือกใช้ Exlite",
    "tradeName": "",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000011",
    "name": "ผ้าก๊อซ แบบห่อสเตอร์ไรด์ (Gauze pack)",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ห่อ",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ผ้าก๊อซ แบบห่อสเตอร์ไรด์ (Gauze pack)",
    "tradeName": "Gauze pack",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000073",
    "name": "สำลีรองเฝือก",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ม้วน",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "สำลีรองเฝือก",
    "tradeName": "",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000070",
    "name": "เทปเหนียว 1 นิ้ว (Neoplast 1\")",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ม้วน",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เทปเหนียว 1 นิ้ว (Neoplast 1\")",
    "tradeName": "Neoplast 1\"",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000171",
    "name": "แผ่นแปะกันน้ำ",
    "categoryName": "หัตถการ,ทำแผล",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "แผ่นแปะกันน้ำ",
    "tradeName": "",
    "commonName": "ทำแผล",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000053",
    "name": "Grid Keratotomy",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Grid Keratotomy",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000178",
    "name": "Tx: Revolution 12 % 2.0 ml สุนัข 20.1- 40 kg(สีเขียว)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx: Revolution 12 % 2.0 ml สุนัข 20.1- 40 kg(สีเขียว)",
    "tradeName": "สีเขียว",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000179",
    "name": "Tx: Revolution PLUS 0.5ml แมว 2.6-5 kg สีส้ม",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx: Revolution PLUS 0.5ml แมว 2.6-5 kg สีส้ม",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000175",
    "name": "Tx:Revolution 12 % 0.25 ml สุนัข 2.6-5.0 kg (สีม่วง)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx:Revolution 12 % 0.25 ml สุนัข 2.6-5.0 kg (สีม่วง)",
    "tradeName": "สีม่วง",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000176",
    "name": "Tx:Revolution 12 % 0.5 ml สุนัข 5.1-10kg(สีน้ำตาล)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx:Revolution 12 % 0.5 ml สุนัข 5.1-10kg(สีน้ำตาล)",
    "tradeName": "สีน้ำตาล",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000177",
    "name": "Tx:Revolution 12 % 1.0 ml สุนัข 10.1-20 kg(สีแดง)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx:Revolution 12 % 1.0 ml สุนัข 10.1-20 kg(สีแดง)",
    "tradeName": "สีแดง",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "40000000173",
    "name": "Tx:Revolution 6 % 0.25 ml สุนัขและแมวไม่เกิน 2.5 kg",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx:Revolution 6 % 0.25 ml สุนัขและแมวไม่เกิน 2.5 kg",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "11/08/2026 19:00",
      "note": "สต็อกหมดชั่วคราว — ใช้ตัวทดแทนชั่วคราว"
    }
  },
  {
    "itemCode": "40000000174",
    "name": "Tx:Revolution 6 % 0.75 ml แมว 2.6-7.5 kg(สีน้ำเงิน)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "หลอด",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "Tx:Revolution 6 % 0.75 ml แมว 2.6-7.5 kg(สีน้ำเงิน)",
    "tradeName": "สีน้ำเงิน",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000013",
    "name": "ค่าตรวจอุจจาระ (Fecal smear)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจอุจจาระ (Fecal smear)",
    "tradeName": "Fecal smear",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000012",
    "name": "ค่าตรวจเซลล์ช่องหู (Ears Cytology)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจเซลล์ช่องหู (Ears Cytology)",
    "tradeName": "Ears Cytology",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000011",
    "name": "ค่าตรวจเซลล์ผิวหนัง (Skin cytology)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจเซลล์ผิวหนัง (Skin cytology)",
    "tradeName": "Skin cytology",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000050",
    "name": "ค่าบริการตรวจตา, ย้อมสี, วัดระดับน้ำตา,วัดความดันตา (eye exam, Flu, STT,IOP)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการตรวจตา, ย้อมสี, วัดระดับน้ำตา,วัดความดันตา (eye exam, Flu, STT,IOP)",
    "tradeName": "eye exam, Flu, STT,IOP",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000077",
    "name": "ค่าบริการย้อมสีตา(fluorescin)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการย้อมสีตา(fluorescin)",
    "tradeName": "fluorescin",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000051",
    "name": "ค่าบริการวัดความดันลูกตา (IOP)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการวัดความดันลูกตา (IOP)",
    "tradeName": "IOP",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000014",
    "name": "ค่าบริการวัดความดันเลือด (Blood Pressure) BP",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการอื่นๆ"
    ],
    "description": "ค่าบริการวัดความดันเลือด (Blood Pressure) BP",
    "tradeName": "Blood Pressure",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000078",
    "name": "ค่าบริการวัดระดับน้ำตา (STT)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการวัดระดับน้ำตา (STT)",
    "tradeName": "STT",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000054",
    "name": "ค่าบริการสวนล้างท่อน้ำตา (Lacrymal duct flushing)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ข้าง",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการสวนล้างท่อน้ำตา (Lacrymal duct flushing)",
    "tradeName": "Lacrymal duct flushing",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000072",
    "name": "ค่าส่องตรวจขี้หู(ear wax smear)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าส่องตรวจขี้หู(ear wax smear)",
    "tradeName": "ear wax smear",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000073",
    "name": "ค่าส่องตรวจเชื้อรา(wood's lamp)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าส่องตรวจเชื้อรา(wood's lamp)",
    "tradeName": "wood's lamp",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000016",
    "name": "ค่าหัตถการตัดเล็บ (Nail cutting)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการอื่นๆ"
    ],
    "description": "ค่าหัตถการตัดเล็บ (Nail cutting)",
    "tradeName": "Nail cutting",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "ห้องยา (นิพนธ์)",
      "at": "10/08/2026 16:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "80000000032",
    "name": "ค่าหัตถการบีบต่อมก้นธรรมดา",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการบีบต่อมก้นธรรมดา",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000017",
    "name": "ค่าหัตถการบีบต่อมก้นแบบรุนแรง",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการอื่นๆ"
    ],
    "description": "ค่าหัตถการบีบต่อมก้นแบบรุนแรง",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000030",
    "name": "ป้อนยา",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการอื่นๆ",
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ป้อนยา",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000037",
    "name": "เลเซอร์บำบัด(laser therapy)",
    "categoryName": "หัตถการทำในห้อง",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "เลเซอร์บำบัด(laser therapy)",
    "tradeName": "laser therapy",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "60000000079",
    "name": "ค่าตรวจโรคโปรโตซัวในกระต่าย",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ตัวอย่าง",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจโรคโปรโตซัวในกระต่าย",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "60000000077",
    "name": "ค่าบริการตรวจ glucose curve",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการตรวจ glucose curve",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000015",
    "name": "ค่าบริการตรวจคลื่นไฟฟ้าหัวใจ (Electrocardiogram) ECG EKG",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการตรวจคลื่นไฟฟ้าหัวใจ (Electrocardiogram) ECG EKG",
    "tradeName": "Electrocardiogram",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000058",
    "name": "ค่าบริการตรวจหัวใจด้วยคลื่นสะท้อนความถี่สูง  Echo **ครั้งแรก**",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการตรวจหัวใจด้วยคลื่นสะท้อนความถี่สูง  Echo **ครั้งแรก**",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000016",
    "name": "ค่าบริการตรวจหัวใจด้วยคลื่นสะท้อนความถี่สูง  Echo **ต่อเนื่อง**",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการตรวจหัวใจด้วยคลื่นสะท้อนความถี่สูง  Echo **ต่อเนื่อง**",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000023",
    "name": "ค่าหัดถการดีทอกซ์ Detox",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัดถการดีทอกซ์ Detox",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000004",
    "name": "ค่าหัตถการล้างปาก",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ค่าหัตถการล้างปาก",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000012",
    "name": "ค่าหัตถการสวนปัสสาวะ",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการสวนปัสสาวะ",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000011",
    "name": "ค่าหัตถการสวนปัสสาวะสุนัข +เย็บคาท่อ (Catheter+nylon)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการสวนปัสสาวะสุนัข +เย็บคาท่อ (Catheter+nylon)",
    "tradeName": "Catheter+nylon",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "เภสัชกร วราภรณ์",
      "at": "11/08/2026 05:00",
      "note": "รอของเข้า สัปดาห์หน้า"
    }
  },
  {
    "itemCode": "80000000036",
    "name": "ค่าหัตถการสวนปัสสาวะแมว+เย็บคาท่อ (urinary catheter+nylon)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการสวนปัสสาวะแมว+เย็บคาท่อ (urinary catheter+nylon)",
    "tradeName": "urinary catheter+nylon",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000018",
    "name": "ค่าหัตถการสวนอุจจาระไม่รวมวางยา (Enema)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการสวนอุจจาระไม่รวมวางยา (Enema)",
    "tradeName": "Enema",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000002",
    "name": "ค่าหัตถการอาบน้ำ",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการอาบน้ำ",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000006",
    "name": "ค่าหัตถการเจาะกระเพาะปัสสาวะผ่านหน้าท้อง (Cystocentesis)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการเจาะกระเพาะปัสสาวะผ่านหน้าท้อง (Cystocentesis)",
    "tradeName": "Cystocentesis",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000020",
    "name": "ค่าหัตถการเจาะช่องท้อง (Abdominal paracentesis)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการเจาะช่องท้อง (Abdominal paracentesis)",
    "tradeName": "Abdominal paracentesis",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000019",
    "name": "ค่าหัตถการเจาะช่องอก (Thoracocentesis)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการเจาะช่องอก (Thoracocentesis)",
    "tradeName": "Thoracocentesis",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000014",
    "name": "ค่าหัตถการเช็ดหู ธรรมดา (Ear dressing normal) ED",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 500,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ค่าหัตถการเช็ดหู ธรรมดา (Ear dressing normal) ED",
    "tradeName": "Ear dressing normal",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 500
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000013",
    "name": "ค่าหัตถการเย็บแผล (หัตถการขนาดเล็ก)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการเย็บแผล (หัตถการขนาดเล็ก)",
    "tradeName": "หัตถการขนาดเล็ก",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000026",
    "name": "ค่าหัตถการเย็บแม๊ค",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ตัว",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการเย็บแม๊ค",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000020",
    "name": "ค่าใช้บริการเครื่องเป่าลมร้อน (Bair Hugger)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าใช้บริการเครื่องเป่าลมร้อน (Bair Hugger)",
    "tradeName": "Bair Hugger",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000090",
    "name": "ตู้กกจีน *รายชั่วโมง*",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "ชั่วโมง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ตู้กกจีน *รายชั่วโมง*",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000091",
    "name": "ตู้กกจีน *เหมาคืน*",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "คืน",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ตู้กกจีน *เหมาคืน*",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "50000000163",
    "name": "ถุงปัสสาวะ (urine bag)",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าเวชภัณฑ์ / วัสดุการแพทย์",
    "formula": "A",
    "unit": "ถุง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ถุงปัสสาวะ (urine bag)",
    "tradeName": "urine bag",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "ห้องยา (นิพนธ์)",
      "at": "11/08/2026 18:00",
      "note": "ค้างส่งจากผู้จำหน่าย"
    }
  },
  {
    "itemCode": "80000000029",
    "name": "ป้อนอาหาร",
    "categoryName": "หัตถการอื่นๆ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ป้อนอาหาร",
    "tradeName": "",
    "commonName": "หัตถการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "990000000003",
    "name": "ค่าที่พัก",
    "categoryName": "อื่นๆ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าที่พัก",
    "tradeName": "",
    "commonName": "อื่นๆ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "990000000005",
    "name": "ค่าฝึกงานนักศึกษาสัตวแพทย์ต่างสถาบัน",
    "categoryName": "อื่นๆ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าฝึกงานนักศึกษาสัตวแพทย์ต่างสถาบัน",
    "tradeName": "",
    "commonName": "อื่นๆ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "990000000002",
    "name": "ค่าสาธารณูปโภค",
    "categoryName": "อื่นๆ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 100,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าสาธารณูปโภค",
    "tradeName": "",
    "commonName": "อื่นๆ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 100
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "990000000001",
    "name": "ค่าเช่าพื้นที่",
    "categoryName": "อื่นๆ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 300,
    "priceStatus": "priced",
    "status": "Disabled",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าเช่าพื้นที่",
    "tradeName": "",
    "commonName": "อื่นๆ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 300
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "990000000004",
    "name": "จำหน่ายวัสดุต่างๆ",
    "categoryName": "อื่นๆ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "จำหน่ายวัสดุต่างๆ",
    "tradeName": "",
    "commonName": "อื่นๆ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000002",
    "name": "ค่าตรวจ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าตรวจ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": true,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000007",
    "name": "ค่าตรวจทางห้องปฏิบัติการ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าตรวจทางห้องปฎิบัติการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 250,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจทางห้องปฏิบัติการ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 250
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000055",
    "name": "ค่าตรวจนอกเวลาราชการ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าตรวจ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจนอกเวลาราชการ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000068",
    "name": "ค่าตรวจพิเศษ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าตรวจ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าตรวจพิเศษ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000056",
    "name": "ค่าบริการดมละอองยา (Nebulization) (ดมตู้คิด 1.5 ครั้ง)",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการทำในห้อง",
      "หัตถการอื่นๆ"
    ],
    "description": "ค่าบริการดมละอองยา (Nebulization) (ดมตู้คิด 1.5 ครั้ง)",
    "tradeName": "ดมตู้คิด 1.5 ครั้ง",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000070",
    "name": "ค่าบริการตรวจฉุกเฉิน",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าตรวจ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 50,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการตรวจฉุกเฉิน",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 50
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000081",
    "name": "ค่าบริการทางการแพทย์",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบริการทางการแพทย์",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "out_of_stock",
    "outOfStock": {
      "by": "ห้องยา (นิพนธ์)",
      "at": "10/08/2026 15:00",
      "note": "ค้างส่งจากผู้จำหน่าย"
    }
  },
  {
    "itemCode": "30000000001",
    "name": "ค่าบัตร",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าบัตร",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าบัตร",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000097",
    "name": "ค่าปรึกษาอาการ (100)",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าปรึกษาอาการ (100)",
    "tradeName": "100",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000005",
    "name": "ค่าผ่าตัด",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าผ่าตัด",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "ผ่าตัด และวางยา"
    ],
    "description": "ค่าผ่าตัด",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000065",
    "name": "ค่ายาฉีด",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 800,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่ายาฉีด",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 800
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000003",
    "name": "ค่ายานำกลับ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่ายานำกลับ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 120,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่ายานำกลับ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 120
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000064",
    "name": "ค่าวางยาสลบ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่ายาฉีด / สารน้ำ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 150,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าวางยาสลบ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 150
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000035",
    "name": "ค่าหัตการพ่นยากำจัดเห็บหมัด",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "ครั้ง",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการอื่นๆ"
    ],
    "description": "ค่าหัตการพ่นยากำจัดเห็บหมัด",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000022",
    "name": "ค่าหัตถการ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX",
      "RX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ค่าหัตถการ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": true,
    "txDefaultNote": "",
    "rxDefaultNote": "มีค่าเริ่มต้น RX",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "80000000024",
    "name": "ค่าหัตถการทำแผล",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าหัตถการ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 200,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [
      "หัตถการ,ทำแผล",
      "สัตว์ป่วยใน / CCU"
    ],
    "description": "ค่าหัตถการทำแผล",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 200
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000009",
    "name": "อื่นๆ",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "อื่นๆ",
    "formula": "A",
    "unit": "บาท",
    "unitPrice": 1000,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "อื่นๆ",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 1000
    },
    "txDefault": true,
    "rxDefault": false,
    "txDefaultNote": "มีค่าเริ่มต้น TX",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  },
  {
    "itemCode": "30000000048",
    "name": "ใบส่งตัว",
    "categoryName": "ใบเสร็จ",
    "receiptCategory": "ค่าบริการทางการแพทย์",
    "formula": "A",
    "unit": "แผ่น",
    "unitPrice": 80,
    "priceStatus": "priced",
    "status": "Active",
    "usedIn": [
      "TX"
    ],
    "defaultRoute": "",
    "defaultFrequency": "",
    "alsoCategories": [],
    "description": "ใบส่งตัว",
    "tradeName": "",
    "commonName": "ค่าบริการ",
    "formulaLabel": "A - Unit price",
    "priceMin": null,
    "priceMax": null,
    "alertMin": 0,
    "alertMax": 0,
    "pricing": {
      "type": "A",
      "unitPrice": 80
    },
    "txDefault": false,
    "rxDefault": false,
    "txDefaultNote": "",
    "rxDefaultNote": "",
    "availability": "available",
    "outOfStock": null
  }
];
