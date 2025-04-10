/// --- สร้างไฟล์ใหม่: ../data/places.js ---

export const PLACES = [
  {
    id: 1,
    name: "ท้าวมหาพรหมเอราวัณ สี่แยกราชประสงค์",
    status: "06.00 – 22.30 น. ",
    latitude: 13.744552118980423,
    longitude: 100.54043393814239,
    rating: 2,
    description:
      "ด้วยความเชื่อที่ว่า พระพรหม คือเป็นผู้สร้างในทุกๆ สิ่ง เป็นมหาเทพผู้ยิ่งใหญ่ที่จะดลบันดาลทุกอย่างเป็นไปได้ด้วยดีตามที่ปรารถนา และโด่งดังมากโดยเฉพาะในเรื่องของการงาน มีประชาชนคนไทยและชาวต่างประเทศต่างให้ความเลื่อมใสศรัทธาพากันแวะเวียนไปกราบไหว้บูชา  ",
    address: "494 ถนน ราชดำริ แขวงลุมพินี เขตปทุมวัน กรุงเทพมหานคร 10330",
    directions: "หน้าโรงแรมแกรนด์ ไฮแอท เอราวัณ สี่แยกราชประสงค์ ใกล้กับ BTS ชิดลม",
    buses: "140 (ปอ.), 1517 (ปอ.), 511 (ปอ.)ม 7479 (ปอ.), 40 (ปอ.)",
    pier: "-",
    open: "เปิด 06.00",
    locationNote:
      "",
    offerings: [
      "ดอกบัวสีชมพู 8 ดอก",
      "ธูปหอม น้ำเปล่า น้ำนม น้ำผลไม้ หรือ นม",
      "ผลไม้มงคล 9 หรือ 5 อย่าง เช่น แอปเปิ้ล 5-8 ลูก",
      "ขนมหวาน เช่น ขนมถ้วยฟู ขนมเปี๊ยะ ขนมชั้น ขนมต้มแดง ขนมต้มขาว",
      "เหรียญ 2 บาท ช่อบูชาดอกไม้ ธูปเทียน เครื่องหอม",
    ],
    howToPray: [
      "พักตร์ที่ 1 : ใช้ธูป 16 ดอก เทียน 9 เล่ม ดอกบัว 9 ดอก น้ำ 1 ขวด ขอพรเกี่ยวกับเรื่องงาน การเรียน การสอบแข่งขัน ขออำนาจบารมี ขอความก้าวหน้าในชีวิต และขอพรให้บิดา",
      "พักตร์ที่ 2 : ใช้ธูป 36 ดอก เทียน 9 เล่ม ดอกบัว 9 ดอก น้ำ 1 ขวด ขอพรเรื่องทรัพย์สิน อสังหาริมทรัพย์ ที่ดิน บ้าน รถ หนี้สินที่มีคนยืมแล้วไม่คืน",
      "พักตร์ที่ 3 : ใช้ธูป 39 ดอก เทียน 9 เล่ม ดอกบัว 9 ดอก น้ำ 1 ขวด ขอพรเกี่ยวกับสุขภาพ ครอบครัว คู่ชีวิต และขอพรให้มารดา ",
      "พักตร์ที่ 4 : ใช้ธูป 19 ดอก เทียน 9 เล่ม ดอกบัว 9 ดอก น้ำ 1 ขวด ขอพรขอโชคลาภ เงินทอง ขอเรื่องเกี่ยวกับการเสี่ยงดวง",
    ],
    mantras: [
      "โอมปะระเมสะนะมัสการัม องการะนิสสะวะ รังพรหมเรสสะยัม ภูปัสสะวะวิษณุ ไวยะทานะโมโทติลูกปัมทะระมา ยิกยานัง ยะไวยะลา คะมุลัมสะทา นันตะระ วิมุสะตินันนะมัตเต นะมัตเตร จะ อะการัง ตโถวาจะเอตามาตาระยัต ตะมัน ตะรามากัตถะนารัมลา จะสะระวะ ปะติตัมสัมโภพะกลโล ทิวะทิยัม มะตัมยะ",
      "คาถาพระแม่ลักษมีแบบสั้น: โอม ศรี มหาลักษมี เย นะมะฮา",
      "คาถาพระแม่ลักษมีแบบเต็ม: นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ (3 จบ) โอม ศรี มหาลักษมี เย นะมะฮา (3 จบ) ...",
    ],
    images: [
      require("../assets/love/1_1.jpg"),
      require("../assets/love/1_2.jpg"),
      require("../assets/love/1_3.jpg"),
      require("../assets/love/1_4.jpg"),
    ],
  },
  {
    id: 2,
    name: "สมเด็จพระปิยมหาราช พระบรมรูปทรงม้า",
    status: "เปิด 06.00 ปิด 22:00",
    latitude: 13.768851971413708, 
    longitude: 100.51167027843276,
    rating: 2,
    description:
      "เป็นอนุสาวรีย์พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว ตั้งอยู่ ณ ลานพระราชวังดุสิต (ลานพระบรมรูปทรงม้า) หน้าพระที่นั่งอนันตสมาคม พระราชวังดุสิต แขวงดุสิต เขตดุสิต กรุงเทพมหานคร โดยสร้างขึ้นในรัชสมัยของพระองค์ มีพิธีเปิดเมื่อวันที่ 11 พฤศจิกายน พ.ศ. 2451",
    address: "แขวงดุสิต เขตดุสิต กรุงเทพมหานคร 10300",
    directions: "สถานีรถไฟฟ้า BTS สุขุมวิท ",
    buses: "2-14 (70), 3-46 (72), 4-69, 503 (ปอ.) (AC), 509 (ปอ.) (AC).",
    pier: "เรือคลองผดุงกรุงเกษม",
    open: "เปิด 6.00",
    locationNote:
      "",
    offerings: [
      "1.	น้ำมะพร้าวอ่อน",
      "2.	กล้วยน้ำว้า",
      "3.	ทองหยิบ",
      "4.	ทองหยอด",
      "5.	บรั่นดี",
      "6.	ซิการ์  ",
      "7.	ข้าวคลุกกะปิ",
      "8.	ดอกกุหลาบสีชมพู",
    ],
    howToPray: [
      "•  ผู้บูชาครั้งแรกให้จุดธูป 16 ดอก ส่วนครั้งต่อไปจุด 9 ดอก",
      "•  ให้ขอพร ห้ามบนเด็ดขาด ส่วนใหญ่นิยมขอพรเรื่อง ทำมาค้าคล่อง การงานเจริญรุ่งเรืองก้าวหน้า โชคลาภในการประกอบอาชีพ ปลดหนี้",
      "•  สถานที่ยอดนิยม เดินทางไปไหว้สักการะขอพร คือ พระบรมราชานุสาวรีย์ ลานพระบรมรูปทรงม้า หรือที่ ป้อมพระจุลจอมเกล้า, พระบรมราชานุสาวรีย์ รัชกาลที่ 5 วัดราชบพิธฯ ก็เป็นที่นิยมเช่นกัน",
    ],
    mantras: [
      "นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ (3 จบ)",
      "พระสะยามะมินโท วะโร อิติ พุทธะสังมิ อิติ อะระหัง สะหัสสะกายัง วะรัง พุทโธ นะโม พุทธายะ ปิยะ มะมะ นะโม พุทธายะ (กล่าว 3 ครั้ง)",
      "คาถาพระแม่ลักษมีแบบเต็ม: นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ (3 จบ) โอม ศรี มหาลักษมี เย นะมะฮา (3 จบ) ...",
    ],
    images: [
      require("../assets/work/2_1.jpg"),
      require("../assets/work/2_2.jpg"),
      require("../assets/work/2_3.jpg"),
      require("../assets/work/2_4.jpg"),
    ],
  },
  {
    id: 3,
    name: "ศาลเจ้าพ่อเสือ เสาชิงช้า",
    status: "เปิด 06.00 ปิด 17:00",
    latitude: 13.753914310824925, 
    longitude: 100.49846391155833, 
    rating: 2,
    description:
      "ศาลเจ้าจีนแต้จิ๋วที่ถือว่าเก่าแก่และมีชื่อเสียงมากที่สุดแห่งหนึ่ง คนจีนเรียกว่า ตั่วเล่าเอี้ย เป็นศาลเจ้าที่ประดิษฐาน เฮี้ยงเทียนเซียงตี่, รูปเจ้าพ่อเสือ, เจ้าพ่อกวนอู และ เจ้าแม่ทับทิม ซึ่งเป็นที่เคารพนับถือของทั้งคนไทยและจีนเป็นอย่างมาก ศาลเจ้าพ่อเสือ มีประวัติความเป็นมาตั้งแต่สมัย พระบาทสมเด็จพระนั่งเกล้าเจ้าอยู่หัว รัชกาลที่ 3 เดิมตั้งอยู่ริมถนนบำรุงเมือง ต่อมาในสมัยรัชกาลที่ 5 ทรงโปรดให้ขยายถนนบำรุงเมือง และให้พระยาโชฎีกราชเศรษฐีย้ายศาลมาไว้ที่ทางสามแพร่ง",
    address: "468 ถนนตะนาว พระนคร, กรุงเทพมหานคร",
    directions: "MRT สถานีสามยอด ทางออก 3",
    buses: "1-8 (59), 12, 12 (AC), 3-53, 4-10 (42L)",
    pier: "-",
    open: "เปิด 06.00",
    locationNote:
      "เฟซบุ๊ก : พระแม่ลักษมี ชั้น 4 ศูนย์การค้าเกษร - Lakshmi Shrine at Gaysorn",
    offerings: [
      "1.	ธูป 18 ดอก",
      "2.	เทียนแดง 1 คู่",
      "3.	พวงมาลัย 1 พวง",
      "4.	เครื่องเซ่นไหว้ ได้แก่ หมูสามชั้น, ไข่สด และข้าวเหนียวหวาน",
      "5.	ผลไม้ นิยมใช้ผลไม้มงคล 5 ชนิด เช่น กล้วย แก้วมังกร องุ่นแดง ลูกพลับ และส้ม ถวายแล้วนำกลับรับประทานเสริมสิริมงคล",
      "6.	น้ำมันเติมตะเกียง",
      "7.	ชุดกระดาษไหว้เจ้า (เพ้า)",
      "8.	ชุดปัดตัวสะเดาะเคราะห์สำหรับผู้ที่จะแก้ชง",
    ],
    howToPray: [
      "1.  ซื้อชุดไหว้ จะมีแบบขอพรและแก้ปีชง ชุดละ 100 บาท",
      "2.  เข้าด้านใน นำชุดขอพรปัดตัว เริ่มจากศีรษะลงล่างของร่างกายตัวเอง ",
      "3.  จุดธูปไหว้ เริ่มจากเทพเจ้าทีกง ขอพรให้คุ้มครองตัวเองและครอบครัว",
      "4.  ไหว้องค์ประธานเจ้าพ่อใหญ่ คุกเข่าไหว้น้อมบุญถวายสักการะ ปักธูปทิศละ 3 ดอก",
      "5.  ไหว้องครักษ์เจ้าพ่อที่ด้านหน้าประตูทางเข้า",
      "6.  ไหว้ขอพรเทพเจ้าเห้งเจีย ด้านขวามือของทางเข้า ไม่ต้องจุดธูป",
      "7.  ไหว้ ร. 5 ด้านซ้ายของประตู สวดนะโม 3 จบ แล้วท่องคาถาไหว้ ร. 5 ไม่ต้องจุดธูป",
      "8.  นำกระดาษที่ปัดตัวมาเผา แล้วเติมน้ำมันตะเกียง 4 ตะเกียง",
    ],
    mantras: [
      "ปัก เก็ก จิง บู้ เหี่ยง เทียง เสี่ยง ตี่",
      "เทียง เอียง เอียง จุ้ย เหมี่ยง เมี้ยง",
      "ปัก เทียง จุ้ย เต็ก เหล่ง ขี่ เชียง",
      "จิง บู้ สิ่ง เจี่ยง เง็ก ฮือ ห่วย",
      "เจี่ย บู้ สิ่ง เจี่ยง เง็ก ฮือ ห่วย",
      "เจี่ย เต็ง กิม ขวก ตี่ หง่วง เที่ยง",
      "จี๋ เพ้า กิม ตั๋ว เง็ก กวง เหยี่ยว",
      "โหลว ลุ้ย สิ่ง เปีย หู่ แก่ เปี่ยง",
      "หลัก เต็ก เง็ก นึ่ง สุ่ย จอ อิ๋ว",
      "โปย สั่วะ เจียง กุง อ่วย เอ่า เชี้ยง",
      "โปย ข่วย สิ่ง กู กื่อ จั่ว เจี่ยง",
      "กั่ง หง เซี่ย จก เท้ง ปวย เซี้ยง",
      "เสียะ ซี ฮก เจ็ก บ่วง มิ้ง เตียม",
      "เหียง เก็ง หุก เกาะ แจ่ สก สก",
      "เจ้ง เล้ง เหียก สิ่ว ห่วย จวง",
      "เงี้ยม กิม ซี้ อู้ อี่ ห่ง ฮุก เสี่ย",
      "จี เซียว เล้า เจี๋ย เยี่ยว เชง เฮียง",
      "ซำ กุ๋ย กิว ไป่ คึง เค่า เชีย",
      "เหียง เทียง เสี่ยง ตี่ เกี้ย เหมี่ยว",
      "เฮี้ยง ฮก หง่วง ไต่ ชื้อ เทียง กุง กั่ง",
      "อี๋ ตื้ เอียว ม้อ เจง สุ่ย เซี้ยง",
      "กิ้บ กิบ หยู่ หลุง เหลง",
    ],
    images: [
      require("../assets/work/3_1.jpg"),
      require("../assets/work/3_2.jpg"),
      require("../assets/work/3_3.jpg"),
      require("../assets/work/3_4.jpg"),
    ],
  },
  {
    id: 4,
    name: "วัดศาลเจ้า (เซียนแปะโรงสี)",
    status: "เปิด 07.00 ปิด 17:00",
    latitude: 14.003114336505833, 
    longitude: 100.54171969563717, 
    rating: 2,
    description:
      "“ยันต์ฟ้าประทานพร” ซึ่งเชื่อกันว่าจะช่วยปรับฮวงจุ้ยจากร้ายให้กลายเป็นดี เรียกเงิน เรียกทองในการค้าขาย ให้การค้าเจริญก้าวหน้า และนำพาโชคลาภมาสู่ผู้ที่บูชา โดยผู้ที่บูชานั้น ต้องเป็นคนทำมาหากินสุจริต ตั้งใจค้าขาย เซียนแปะโรงสี ก็จะช่วยประทานพรให้เจริญก้าวหน้ายิ่งขึ้น",
    address: "2 1 ตำบล บ้านกลาง อำเภอเมืองปทุมธานี ปทุมธานี 12000",
    directions: "-",
    buses: "1-27 (90), 6249, 1147",
    pier: "-",
    open: "เปิด 07.00",
    locationNote:
      "เฟซบุ๊ก : วัดศาลเจ้า ปทุมธานี ",//
    offerings: [
      "1. ส้ม 5 ลูก",
      "2. น้ำชา 5 ถ้วย",
      "3. ธูป 5 ดอก",
      "4. ขนมแต้เหลียว 1 จาน",
      "5. กิมฮวย 1 คู่",
      "6. พวงมาลัยพลาสติก 1 คู่",
    ],
    howToPray: [
      "1. จุดธูป 5 ดอก",
      "2. ตั้งนะโม 3 จบ​",
      "3. ท่องคาถาบูชาเซียนแปะโรงสี",
      "4. อธิษฐานขอพรตามความปรารถนา โดยไม่ควรบนบาน",
    ],
    mantras: [
      "(ตั้งนะโม 3 จบ) นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุท ธัสสะ",
      "ระลึกถึงเซียนแปะโรงสี จากนั้นจึงเริ่มสวด",
      "(สวด 5 จบ) เทียน กัว สื่อ ฮก โหงว ลี่เทียน",
      "ขอให้ฟ้าประทานพรให้แก่ (บอกชื่อ - นามสกุล, วันเดือนปีเกิด และที่อยู่ของตนเอง) โชคลาภ ความมั่งคั่ง ร่ำรวย สุขภาพแข็งแรง อายุยืนยาว (หากใครอยากขอเรื่องการเงิน ธุรกิจ หรือเรื่องส่วนตัวเพิ่มเติม ก็สามารถอธิฐานต่อได้เลย)",
    ],
    images: [
      require("../assets/work/4_1.jpg"),
      require("../assets/work/4_2.jpg"),
      require("../assets/work/4_3.jpg"),
      require("../assets/work/4_4.jpg"),
    ],
  },
];
