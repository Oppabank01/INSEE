# คู่มือการแก้ไขเว็บไซต์ INSEE Ecocycle

## 🚀 สำหรับผู้เริ่มต้น - การติดตั้งและเตรียมเครื่อง

### 📥 ติดตั้ง Visual Studio Code (VS Code)

#### ขั้นตอนที่ 1: ดาวน์โหลด VS Code
1. เปิดเบราว์เซอร์ไปที่: https://code.visualstudio.com/
2. คลิกปุ่ม **"Download for Windows"** (สีฟ้า)
3. รอการดาวน์โหลดเสร็จ

#### ขั้นตอนที่ 2: ติดตั้ง VS Code
1. เปิดไฟล์ที่ดาวน์โหลดมา (ชื่อไฟล์ประมาณ `VSCodeUserSetup-x64-1.xx.x.exe`)
2. คลิก **"Next"** ไปเรื่อยๆ
3. ติ๊กถูกที่ **"Add to PATH"** และ **"Register Code as an editor for supported file types"**
4. คลิก **"Install"**
5. รอการติดตั้งเสร็จแล้วคลิก **"Finish"**

#### ขั้นตอนที่ 3: เปิด VS Code
1. เปิด VS Code จาก Start Menu หรือ Desktop
2. หน้าต่าง VS Code จะเปิดขึ้นมา

### 📁 เปิดโปรเจคเว็บไซต์

#### วิธีที่ 1: เปิดจาก VS Code
1. ใน VS Code คลิก **File** → **Open Folder**
2. เลือกโฟลเดอร์ `fastwork2` ที่มีไฟล์เว็บไซต์
3. คลิก **"Select Folder"**

#### วิธีที่ 2: เปิดจาก Windows Explorer
1. เปิดโฟลเดอร์ `fastwork2` ใน Windows Explorer
2. คลิกขวาในโฟลเดอร์
3. เลือก **"Open with Code"**

---

## 📁 โครงสร้างไฟล์เว็บไซต์

```
fastwork2/
├── 📄 index.html              # ไฟล์หลักของเว็บไซต์ (600 บรรทัด)
├── 🎨 styles.css              # ไฟล์ CSS สำหรับการจัดรูปแบบ
├── ⚙️ scripts.js              # ไฟล์ JavaScript สำหรับฟังก์ชันต่างๆ
├── 🖼️ background/             # รูปภาพ Hero Banner
│   ├── main1-com.jpg         # รูปที่ 1 สำหรับคอมพิวเตอร์ (EN)
│   ├── main2-com.jpg         # รูปที่ 2 สำหรับคอมพิวเตอร์ (EN)
│   ├── main3-com.jpg         # รูปที่ 3 สำหรับคอมพิวเตอร์ (EN)
│   ├── main1-com-cn.jpg      # รูปที่ 1 สำหรับคอมพิวเตอร์ (CN)
│   ├── main2-com-cn.jpg      # รูปที่ 2 สำหรับคอมพิวเตอร์ (CN)
│   ├── main3-com-cn.jpg      # รูปที่ 3 สำหรับคอมพิวเตอร์ (CN)
│   ├── main1-mobile.jpg      # รูปที่ 1 สำหรับมือถือ (EN)
│   ├── main2-mobile.jpg      # รูปที่ 2 สำหรับมือถือ (EN)
│   ├── main3-mobile.jpg      # รูปที่ 3 สำหรับมือถือ (EN)
│   ├── main1-mobile-cn.jpg   # รูปที่ 1 สำหรับมือถือ (CN)
│   ├── main2-mobile-cn.jpg   # รูปที่ 2 สำหรับมือถือ (CN)
│   └── main3-mobile-cn.jpg   # รูปที่ 3 สำหรับมือถือ (CN)
├── 🖼️ image/                 # รูปภาพทั่วไป
│   ├── INSEE-LOGO.png        # โลโก้บริษัท
│   ├── Sustainability5.jpg   # รูปภาพเกี่ยวกับความยั่งยืน
│   ├── WasetManagement2.jpg  # รูปภาพการจัดการขยะ
│   ├── WasetManagement3.jpg  # รูปภาพการจัดการขยะ
│   ├── WasetManagement4.jpg  # รูปภาพการจัดการขยะ
│   └── download.png          # รูปภาพสำหรับส่วนดาวน์โหลด
├── 🎯 icons/                 # ไอคอนต่างๆ
│   └── expertise/
│       ├── experts.png       # ไอคอนผู้เชี่ยวชาญ
│       ├── safety.png        # ไอคอนความปลอดภัย
│       ├── service.png       # ไอคอนบริการ
│       └── specialists.png   # ไอคอนผู้เชี่ยวชาญเฉพาะ
├── 📄 download/              # ไฟล์ PDF และเอกสาร
│   └── Ecocycle_Corporate_Brochure_CN.pdf  # ไฟล์ Brochure
└── 🔤 INSEE Font/            # ฟอนต์ของ INSEE
    ├── INSEE Display/        # ฟอนต์สำหรับหัวข้อ
    └── INSEE Text/           # ฟอนต์สำหรับเนื้อหา
```

---

## 🎯 วิธีการแก้ไขแต่ละ Section ใน index.html

### 🔍 วิธีค้นหาบรรทัดใน VS Code

#### วิธีที่ 1: ใช้ Ctrl+G
1. กด **Ctrl+G** ใน VS Code
2. พิมพ์หมายเลขบรรทัด (เช่น 15)
3. กด **Enter**

#### วิธีที่ 2: ใช้ Ctrl+F ค้นหาข้อความ
1. กด **Ctrl+F** ใน VS Code
2. พิมพ์ข้อความที่ต้องการหา
3. กด **Enter**

### 📝 วิธีแก้ไขข้อความ

#### ขั้นตอนการแก้ไข:
1. **เปิดไฟล์** `index.html` ใน VS Code
2. **ค้นหาบรรทัด** ที่ต้องการแก้ไข
3. **คลิกที่ข้อความ** ที่ต้องการเปลี่ยน
4. **พิมพ์ข้อความใหม่**
5. **กด Ctrl+S** เพื่อบันทึก

---

### 1. **Header Section (บรรทัด 12-50)**

#### แก้ไขชื่อบริษัท:
```html
<!-- บรรทัด 15 -->
<span class="company-name" data-translate="company-name">INSEE Ecocycle Company Limited</span>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+G** แล้วพิมพ์ **15**
2. ค้นหาข้อความ `INSEE Ecocycle Company Limited`
3. ลบข้อความเก่าและพิมพ์ชื่อบริษัทใหม่
4. กด **Ctrl+S** เพื่อบันทึก

#### แก้ไขโลโก้:
```html
<!-- บรรทัด 42 -->
<img src="image/INSEE-LOGO.png" alt="INSEE Ecocycle" class="logo-img">
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. เตรียมไฟล์โลโก้ใหม่
2. เปลี่ยนชื่อไฟล์เป็น `INSEE-LOGO.png`
3. คัดลอกไฟล์ไปยังโฟลเดอร์ `image/`
4. แทนที่ไฟล์เก่า

### 2. **Hero Banner Section (บรรทัด 52-70)**

#### แก้ไขลิงก์ Hero Banner:
```html
<!-- บรรทัด 55-65 -->
<a href="https://siamcitycement.com/thailand/inseeecocycle/en/home" target="_blank" class="link">
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `siamcitycement.com`
2. ค้นหา URL ที่ต้องการเปลี่ยน
3. ลบ URL เก่าและพิมพ์ URL ใหม่
4. กด **Ctrl+S** เพื่อบันทึก

**หมายเหตุ:** รูปภาพ Hero Banner ถูกควบคุมโดย JavaScript ใน `scripts.js`

### 3. **Sustainable Solutions Section (บรรทัด 72-105)**

#### แก้ไขรูปภาพ:
```html
<!-- บรรทัด 80 -->
<img src="image/Sustainability5.jpg" alt="Sustainable Solutions" class="sustainable-img white-border">
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. เตรียมรูปภาพใหม่
2. เปลี่ยนชื่อไฟล์เป็น `Sustainability5.jpg`
3. คัดลอกไฟล์ไปยังโฟลเดอร์ `image/`
4. แทนที่ไฟล์เก่า

#### แก้ไขข้อความ:
```html
<!-- บรรทัด 85-105 -->
<p class="section-description" data-translate="section-description-1">
    As a subsidiary of Siam City Cement Group, INSEE Ecocycle operates throughout South and Southeast Asia, including Sri Lanka, Vietnam, and Cambodia.
</p>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `Siam City Cement Group`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

### 4. **Services & Solutions Section (บรรทัด 107-145)**

#### แก้ไขรูปภาพหลัก:
```html
<!-- บรรทัด 110 -->
<img src="https://siamcitycement.com/ckeditor/upload/files/1745315727__DSC3267%20(1).jpg" alt="Industrial Storage Tanks" />
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `1745315727__DSC3267`
2. ค้นหา URL รูปภาพ
3. ลบ URL เก่าและพิมพ์ URL รูปภาพใหม่
4. กด **Ctrl+S** เพื่อบันทึก

#### แก้ไขหัวข้อและคำอธิบาย:
```html
<!-- บรรทัด 115-125 -->
<span class="services-solutions-label" data-translate="services-solutions-label">SERVICES & SOLUTIONS</span>
<h2 class="services-solutions-title" data-translate="services-solutions-title">Explore our Services & Solutions</h2>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `SERVICES & SOLUTIONS`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

#### แก้ไขรูปภาพการ์ดบริการ:
```html
<!-- บรรทัด 130-145 -->
<img src="image/WasetManagement4.jpg" alt="Waste Analysis and Laboratory Services" />
<img src="image/WasetManagement3.jpg" alt="Shutdown & Turnaround Service" />
<img src="image/WasetManagement2.jpg" alt="Disinfection service" />
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. เตรียมรูปภาพใหม่ 3 ไฟล์
2. เปลี่ยนชื่อไฟล์เป็น `WasetManagement4.jpg`, `WasetManagement3.jpg`, `WasetManagement2.jpg`
3. คัดลอกไฟล์ไปยังโฟลเดอร์ `image/`
4. แทนที่ไฟล์เก่า

### 5. **Industrial Services Section (บรรทัด 147-185)**

#### แก้ไขหัวข้อและคำอธิบาย:
```html
<!-- บรรทัด 155-175 -->
<span class="wm-label-green" data-translate="wm-label-green">WASTE MANAGEMENT</span>
<h3 class="wm-title" data-translate="wm-title">Sustainable Integrated Waste Management Service​</h3>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `WASTE MANAGEMENT`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

#### แก้ไขรูปภาพ:
```html
<!-- บรรทัด 180 -->
<img src="image/WasetManagement3.jpg" alt="Industrial Service" />
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. เตรียมรูปภาพใหม่
2. เปลี่ยนชื่อไฟล์เป็น `WasetManagement3.jpg`
3. คัดลอกไฟล์ไปยังโฟลเดอร์ `image/`
4. แทนที่ไฟล์เก่า

### 6. **Specialized Industrial Services Section (บรรทัด 187-200)**

#### แก้ไขรูปภาพ:
```html
<!-- บรรทัด 190 -->
<img class="industrial-services-img" src="https://siamcitycement.com//upload/prod-serv/real/pic-202308041680898540_81565_25-86.jpg" alt="Oil & Gas Industry" style="border-radius:0;" />
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `pic-202308041680898540_81565_25-86`
2. ค้นหา URL รูปภาพ
3. ลบ URL เก่าและพิมพ์ URL รูปภาพใหม่
4. กด **Ctrl+S** เพื่อบันทึก

### 7. **Service Cards Section (บรรทัด 202-280)**

#### แก้ไขหัวข้อ:
```html
<!-- บรรทัด 210 -->
<h2 class="service-cards-title" data-translate="service-cards-title" style="font-size: 3rem;">Explore Our Solutions</h2>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `Explore Our Solutions`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

### 8. **Expertise Section (บรรทัด 282-320)**

#### แก้ไขไอคอนและข้อความ:
```html
<!-- บรรทัด 285-320 -->
<img alt="" class="img-cover" src="https://www.siamcitycement.com/ckeditor/upload/files/1680901484_company-why-peace-list01.png">
<div class="expertise-ref-title" data-translate="expertise-ref-title-experts">EXPERTS</div>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `EXPERTS`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

### 9. **Brochure Download Section (บรรทัด 322-340)**

#### แก้ไขรูปภาพและลิงก์:
```html
<!-- บรรทัด 325-335 -->
<img src="image/download.png" alt="INSEE Ecocycle Brochure" class="brochure-img" />
<a href="download/Ecocycle_Corporate_Brochure_CN.pdf" class="brochure-download-btn" download target="_blank" data-translate="brochure-download-btn">
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. เตรียมไฟล์ PDF ใหม่
2. เปลี่ยนชื่อไฟล์เป็น `Ecocycle_Corporate_Brochure_CN.pdf`
3. คัดลอกไฟล์ไปยังโฟลเดอร์ `download/`
4. แทนที่ไฟล์เก่า

### 10. **How to Get Started Section (บรรทัด 342-360)**

#### แก้ไขรูปภาพและข้อความ:
```html
<!-- บรรทัด 345-355 -->
<img src="https://siamcitycement.com/ckeditor/upload/files/1745378198__DSC3267%20(1).jpg" alt="How to Get Started" class="how-to-get-started-img" />
<h2 class="how-to-get-started-title" data-translate="how-to-get-started-title">HOW TO GET STARTED?</h2>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `HOW TO GET STARTED?`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

### 11. **Contact Section (บรรทัด 362-500)**

#### แก้ไขข้อมูลสำนักงานหลัก:
```html
<!-- บรรทัด 365-385 -->
<h3 class="contact-office-title">HEAD OFFICE</h3>
<p class="contact-office-company">INSEE ECOCYCLE COMPANY LIMITED</p>
<p class="contact-office-address">Column Tower, 3rd, 10th, 12th fl., 199 Ratchadapisek Rd. Klongtoey, Bangkok 10110, Thailand</p>
<span class="contact-office-value">1732 press 6</span>
<a href="mailto:inseeecocycle@siamcitycement.com">inseeecocycle@siamcitycement.com</a>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `HEAD OFFICE`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

#### แก้ไขข้อมูลสำนักงานอื่นๆ:
```html
<!-- สำนักงาน Rayong (บรรทัด 390-410) -->
<h3 class="contact-office-title">Rayong Office</h3>
<p class="contact-office-address">318 Makhamkoo sub-district, Nikompattana district, Rayong 21180</p>

<!-- สำนักงาน Chonburi (บรรทัด 415-435) -->
<h3 class="contact-office-title">Chonburi Office</h3>
<p class="contact-office-address">199/1 Moo 5, Thungsukla, Sriracha, Chonburi 20230</p>

<!-- สำนักงาน Saraburi (บรรทัด 440-460) -->
<h3 class="contact-office-title">Saraburi Platform</h3>
<p class="contact-office-address">99 Moo 8, Talingchan, Muang, Saraburi 18000</p>

<!-- สำนักงาน Songkhla (บรรทัด 465-485) -->
<h3 class="contact-office-title">Songkhla Office</h3>
<p class="contact-office-address">123 Moo 8, T.Kuanlang, Hatyai, Songkhla 90110</p>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ชื่อสำนักงาน (เช่น `Rayong Office`)
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

#### แก้ไขฟอร์มติดต่อ:
```html
<!-- หัวข้อฟอร์ม (บรรทัด 490-495) -->
<h3 class="contact-form-title" data-translate="contact-form-title"><i class="fa-solid fa-clipboard-list"></i> Get Started</h3>

<!-- ฟิลด์ในฟอร์ม (บรรทัด 500-550) -->
<label for="name" class="form-label" data-translate="form-label-name">Name-Surname *</label>
<label for="email" class="form-label" data-translate="form-label-email">E-mail *</label>
<label for="phone" class="form-label" data-translate="form-label-phone">Phone Number *</label>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `Name-Surname`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

### 12. **Footer Section (บรรทัด 502-600)**

#### แก้ไขข้อมูลติดต่อ:
```html
<!-- บรรทัด 520-530 -->
<span class="phone-number" data-translate="phone-number">1732 Press 6</span>
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `1732 Press 6`
2. ค้นหาข้อความที่ต้องการเปลี่ยน
3. ลบข้อความเก่าและพิมพ์ข้อความใหม่
4. กด **Ctrl+S** เพื่อบันทึก

#### แก้ไขลิงก์ Social Media:
```html
<!-- บรรทัด 540-560 -->
<a href="https://lin.ee/ye3hMUs" target="_blank" class="social-link" aria-label="Line">
<a href="https://www.youtube.com/channel/UC1iRwD_yrbKJ1gHgu-4l1-w/featured" target="_blank" class="social-link" aria-label="YouTube">
<a href="https://www.linkedin.com/company/insee-ecocycle-company-limited/" target="_blank" class="social-link" aria-label="LinkedIn">
```

**วิธีแก้ไขสำหรับผู้เริ่มต้น:**
1. กด **Ctrl+F** แล้วพิมพ์ `lin.ee/ye3hMUs`
2. ค้นหา URL ที่ต้องการเปลี่ยน
3. ลบ URL เก่าและพิมพ์ URL ใหม่
4. กด **Ctrl+S** เพื่อบันทึก

---

## 🖼️ วิธีเปลี่ยนรูปภาพสำหรับผู้เริ่มต้น

### ขั้นตอนการเปลี่ยนรูปภาพ:

#### 1. เตรียมรูปภาพใหม่
- ใช้โปรแกรมแก้ไขรูปภาพ (เช่น Paint, Photoshop, Canva)
- บันทึกเป็นนามสกุลไฟล์ที่ถูกต้อง (.jpg, .png, .gif)
- ใช้ชื่อไฟล์ภาษาอังกฤษ ไม่มีช่องว่าง

#### 2. คัดลอกไฟล์
- เปิดโฟลเดอร์ `image/` ใน Windows Explorer
- คัดลอกไฟล์รูปภาพใหม่ไปยังโฟลเดอร์นี้
- แทนที่ไฟล์เก่าที่มีชื่อเดียวกัน

#### 3. ตรวจสอบผลลัพธ์
- เปิดไฟล์ `index.html` ในเบราว์เซอร์
- ตรวจสอบว่ารูปภาพแสดงผลถูกต้อง

### 📏 ขนาดรูปภาพที่แนะนำ:
- **โลโก้:** 200x80 pixels
- **รูปภาพทั่วไป:** 800x600 pixels
- **รูปภาพ Hero Banner:** 1920x1080 pixels (คอมพิวเตอร์), 768x1024 pixels (มือถือ)

---

## 📝 วิธีเปลี่ยนข้อความสำหรับผู้เริ่มต้น

### ขั้นตอนการเปลี่ยนข้อความ:

#### 1. เปิดไฟล์ใน VS Code
- เปิด VS Code
- เปิดไฟล์ `index.html`

#### 2. ค้นหาข้อความ
- กด **Ctrl+F**
- พิมพ์ข้อความที่ต้องการหา
- กด **Enter**

#### 3. แก้ไขข้อความ
- คลิกที่ข้อความที่ต้องการเปลี่ยน
- ลบข้อความเก่า
- พิมพ์ข้อความใหม่

#### 4. บันทึกไฟล์
- กด **Ctrl+S**
- ตรวจสอบว่าไฟล์ถูกบันทึกแล้ว

### ⚠️ ข้อควรระวัง:
- **ไม่ลบ** เครื่องหมาย `<` และ `>`
- **ไม่ลบ** คำว่า `class=`, `id=`, `src=` ฯลฯ
- **เปลี่ยนเฉพาะ** ข้อความที่อยู่ระหว่าง `>` และ `<`

---

## 🧪 การทดสอบหลังแก้ไข

### ขั้นตอนการทดสอบ:

#### 1. เปิดเว็บไซต์ในเบราว์เซอร์
- เปิดไฟล์ `index.html` ในเบราว์เซอร์
- หรือกด **F5** ใน VS Code

#### 2. ตรวจสอบการเปลี่ยนแปลง
- ดูว่าข้อความที่แก้ไขแสดงผลถูกต้อง
- ดูว่ารูปภาพที่เปลี่ยนแสดงผลถูกต้อง
- ตรวจสอบลิงก์ต่างๆ ทำงานได้

#### 3. ทดสอบบนมือถือ
- เปิดเว็บไซต์บนมือถือหรือแท็บเล็ต
- ตรวจสอบการแสดงผลบนหน้าจอเล็ก

#### 4. ทดสอบฟอร์ม
- กรอกข้อมูลในฟอร์มติดต่อ
- กดส่งและตรวจสอบว่าส่งได้

---

## 🆘 ปัญหาที่พบบ่อยและวิธีแก้ไข

### รูปภาพไม่แสดง
**สาเหตุ:** ชื่อไฟล์ไม่ถูกต้อง หรือไฟล์ไม่อยู่ในโฟลเดอร์ที่ถูกต้อง
**วิธีแก้:** ตรวจสอบชื่อไฟล์และตำแหน่งไฟล์

### ข้อความไม่เปลี่ยน
**สาเหตุ:** แก้ไขผิดตำแหน่ง หรือไม่ได้บันทึกไฟล์
**วิธีแก้:** ตรวจสอบตำแหน่งที่แก้ไขและกด Ctrl+S

### เว็บไซต์ไม่ทำงาน
**สาเหตุ:** แก้ไขโค้ดผิด หรือลบเครื่องหมายสำคัญ
**วิธีแก้:** ใช้ไฟล์สำรองหรือขอความช่วยเหลือ

---

## 📞 ติดต่อขอความช่วยเหลือ

หากมีปัญหาหรือไม่เข้าใจ กรุณาติดต่อ:
- **เบอร์โทร:** [เบอร์โทรฉุกเฉิน]
- **Line:** [Line ID]
- **Email:** [อีเมลฉุกเฉิน]

---

## 📚 ไฟล์คู่มือเพิ่มเติม

### 1. คู่มือการแก้ไขข้อมูลและรูปภาพ.md
**ไฟล์คู่มือฉบับเต็ม** - มีรายละเอียดครบถ้วนสำหรับการแก้ไขทุกส่วนของเว็บไซต์

### 2. คู่มือการแก้ไขแบบย่อ.md
**ไฟล์คู่มือสรุปย่อ** - สำหรับการแก้ไขด่วนและการใช้งานประจำวัน 