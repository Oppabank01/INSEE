# คู่มือการแก้ไขเว็บไซต์ INSEE Ecocycle

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

### 1. **Header Section (บรรทัด 12-50)**

#### แก้ไขชื่อบริษัท:
```html
<!-- บรรทัด 15 -->
<span class="company-name" data-translate="company-name">INSEE Ecocycle Company Limited</span>
```

#### แก้ไขโลโก้:
```html
<!-- บรรทัด 42 -->
<img src="image/INSEE-LOGO.png" alt="INSEE Ecocycle" class="logo-img">
```

### 2. **Hero Banner Section (บรรทัด 52-70)**

#### แก้ไขลิงก์ Hero Banner:
```html
<!-- บรรทัด 55-65 -->
<a href="https://siamcitycement.com/thailand/inseeecocycle/en/home" target="_blank" class="link">
```

**หมายเหตุ:** รูปภาพ Hero Banner ถูกควบคุมโดย JavaScript ใน `scripts.js`

### 3. **Sustainable Solutions Section (บรรทัด 72-105)**

#### แก้ไขรูปภาพ:
```html
<!-- บรรทัด 80 -->
<img src="image/Sustainability5.jpg" alt="Sustainable Solutions" class="sustainable-img white-border">
```

#### แก้ไขข้อความ:
```html
<!-- บรรทัด 85-105 -->
<p class="section-description" data-translate="section-description-1">
    As a subsidiary of Siam City Cement Group, INSEE Ecocycle operates throughout South and Southeast Asia, including Sri Lanka, Vietnam, and Cambodia.
</p>
```

### 4. **Services & Solutions Section (บรรทัด 107-145)**

#### แก้ไขรูปภาพหลัก:
```html
<!-- บรรทัด 110 -->
<img src="https://siamcitycement.com/ckeditor/upload/files/1745315727__DSC3267%20(1).jpg" alt="Industrial Storage Tanks" />
```

#### แก้ไขหัวข้อและคำอธิบาย:
```html
<!-- บรรทัด 115-125 -->
<span class="services-solutions-label" data-translate="services-solutions-label">SERVICES & SOLUTIONS</span>
<h2 class="services-solutions-title" data-translate="services-solutions-title">Explore our Services & Solutions</h2>
```

#### แก้ไขรูปภาพการ์ดบริการ:
```html
<!-- บรรทัด 130-145 -->
<img src="image/WasetManagement4.jpg" alt="Waste Analysis and Laboratory Services" />
<img src="image/WasetManagement3.jpg" alt="Shutdown & Turnaround Service" />
<img src="image/WasetManagement2.jpg" alt="Disinfection service" />
```

### 5. **Industrial Services Section (บรรทัด 147-185)**

#### แก้ไขหัวข้อและคำอธิบาย:
```html
<!-- บรรทัด 155-175 -->
<span class="wm-label-green" data-translate="wm-label-green">WASTE MANAGEMENT</span>
<h3 class="wm-title" data-translate="wm-title">Sustainable Integrated Waste Management Service​</h3>
```

#### แก้ไขรูปภาพ:
```html
<!-- บรรทัด 180 -->
<img src="image/WasetManagement3.jpg" alt="Industrial Service" />
```

### 6. **Specialized Industrial Services Section (บรรทัด 187-200)**

#### แก้ไขรูปภาพ:
```html
<!-- บรรทัด 190 -->
<img class="industrial-services-img" src="https://siamcitycement.com//upload/prod-serv/real/pic-202308041680898540_81565_25-86.jpg" alt="Oil & Gas Industry" style="border-radius:0;" />
```

### 7. **Service Cards Section (บรรทัด 202-280)**

#### แก้ไขหัวข้อ:
```html
<!-- บรรทัด 210 -->
<h2 class="service-cards-title" data-translate="service-cards-title" style="font-size: 3rem;">Explore Our Solutions</h2>
```

### 8. **Expertise Section (บรรทัด 282-320)**

#### แก้ไขไอคอนและข้อความ:
```html
<!-- บรรทัด 285-320 -->
<img alt="" class="img-cover" src="https://www.siamcitycement.com/ckeditor/upload/files/1680901484_company-why-peace-list01.png">
<div class="expertise-ref-title" data-translate="expertise-ref-title-experts">EXPERTS</div>
```

### 9. **Brochure Download Section (บรรทัด 322-340)**

#### แก้ไขรูปภาพและลิงก์:
```html
<!-- บรรทัด 325-335 -->
<img src="image/download.png" alt="INSEE Ecocycle Brochure" class="brochure-img" />
<a href="download/Ecocycle_Corporate_Brochure_CN.pdf" class="brochure-download-btn" download target="_blank" data-translate="brochure-download-btn">
```

### 10. **How to Get Started Section (บรรทัด 342-360)**

#### แก้ไขรูปภาพและข้อความ:
```html
<!-- บรรทัด 345-355 -->
<img src="https://siamcitycement.com/ckeditor/upload/files/1745378198__DSC3267%20(1).jpg" alt="How to Get Started" class="how-to-get-started-img" />
<h2 class="how-to-get-started-title" data-translate="how-to-get-started-title">HOW TO GET STARTED?</h2>
```

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

#### แก้ไขฟอร์มติดต่อ:
```html
<!-- หัวข้อฟอร์ม (บรรทัด 490-495) -->
<h3 class="contact-form-title" data-translate="contact-form-title"><i class="fa-solid fa-clipboard-list"></i> Get Started</h3>

<!-- ฟิลด์ในฟอร์ม (บรรทัด 500-550) -->
<label for="name" class="form-label" data-translate="form-label-name">Name-Surname *</label>
<label for="email" class="form-label" data-translate="form-label-email">E-mail *</label>
<label for="phone" class="form-label" data-translate="form-label-phone">Phone Number *</label>
```

### 12. **Footer Section (บรรทัด 502-600)**

#### แก้ไขข้อมูลติดต่อ:
```html
<!-- บรรทัด 520-530 -->
<span class="phone-number" data-translate="phone-number">1732 Press 6</span>
```

#### แก้ไขลิงก์ Social Media:
```html
<!-- บรรทัด 540-560 -->
<a href="https://lin.ee/ye3hMUs" target="_blank" class="social-link" aria-label="Line">
<a href="https://www.youtube.com/channel/UC1iRwD_yrbKJ1gHgu-4l1-w/featured" target="_blank" class="social-link" aria-label="YouTube">
<a href="https://www.linkedin.com/company/insee-ecocycle-company-limited/" target="_blank" class="social-link" aria-label="LinkedIn">
```

---

## 📚 ไฟล์คู่มือ

### 1. คู่มือการแก้ไขข้อมูลและรูปภาพ.md
**ไฟล์คู่มือฉบับเต็ม** - มีรายละเอียดครบถ้วนสำหรับการแก้ไขทุกส่วนของเว็บไซต์

### 2. คู่มือการแก้ไขแบบย่อ.md
**ไฟล์คู่มือสรุปย่อ** - สำหรับการแก้ไขด่วนและการใช้งานประจำวัน

---

## 🎯 ใครควรใช้คู่มือนี้

### 👥 ผู้ใช้หลัก
- **ผู้ดูแลเว็บไซต์** - สำหรับการอัปเดตเนื้อหาและรูปภาพ
- **ผู้ดูแลระบบ** - สำหรับการแก้ไขฟังก์ชันและลิงก์
- **ผู้ดูแลเนื้อหา** - สำหรับการแก้ไขข้อความและข้อมูล

### 🛠️ ระดับความเชี่ยวชาญ
- **ผู้เริ่มต้น** - ใช้คู่มือแบบย่อ
- **ผู้มีประสบการณ์** - ใช้คู่มือฉบับเต็ม
- **ผู้เชี่ยวชาญ** - ใช้ทั้งสองไฟล์ตามความเหมาะสม

---

## ⚠️ ข้อควรระวังสำคัญ

### 🔒 ความปลอดภัย
- **สำรองข้อมูลเสมอ** ก่อนแก้ไข
- **ไม่แก้ไขไฟล์โดยตรง** บนเซิร์ฟเวอร์
- **ทดสอบในเครื่อง** ก่อนอัปโหลด

### 📏 มาตรฐานการตั้งชื่อ
- ใช้ **ภาษาอังกฤษ** เท่านั้น
- ไม่ใช้ **ช่องว่าง** ในชื่อไฟล์
- ใช้ **ตัวพิมพ์เล็ก** ทั้งหมด
- ใช้ **นามสกุลไฟล์** ที่ถูกต้อง

### 📱 การทดสอบ
- ทดสอบใน **เบราว์เซอร์หลายตัว**
- ทดสอบบน **มือถือและแท็บเล็ต**
- ตรวจสอบ **การทำงานของฟอร์ม**
- ตรวจสอบ **การเปลี่ยนภาษา**

---

## 🆘 การขอความช่วยเหลือ

### 📞 ติดต่อฉุกเฉิน
หากมีปัญหาด่วน กรุณาติดต่อ:
- **เบอร์โทร:** [เบอร์โทรฉุกเฉิน]
- **Line:** [Line ID]
- **Email:** [อีเมลฉุกเฉิน]

### 🔍 การแก้ไขปัญหาด้วยตนเอง
1. ตรวจสอบ **Console errors** ในเบราว์เซอร์
2. ดูส่วน **ปัญหาที่พบบ่อย** ในคู่มือ
3. ตรวจสอบ **การเชื่อมต่ออินเทอร์เน็ต**
4. ล้าง **Cache เบราว์เซอร์**

---

## 📝 การอัปเดตคู่มือ

### 🔄 เวอร์ชันปัจจุบัน
- **คู่มือฉบับเต็ม:** v1.0
- **คู่มือแบบย่อ:** v1.0
- **อัปเดตล่าสุด:** [วันที่]

### 📋 การอัปเดตในอนาคต
- เพิ่มฟีเจอร์ใหม่
- แก้ไขข้อผิดพลาด
- เพิ่มตัวอย่างการใช้งาน
- อัปเดตข้อมูลการติดต่อ

---

## 📄 ใบอนุญาต

คู่มือนี้จัดทำขึ้นสำหรับการใช้งานภายในองค์กร **INSEE Ecocycle Company Limited** เท่านั้น

**ข้อจำกัด:**
- ห้ามเผยแพร่ภายนอกองค์กร
- ห้ามแก้ไขโดยไม่ได้รับอนุญาต
- ใช้สำหรับการทำงานเท่านั้น

---

## 🙏 ขอบคุณ

ขอขอบคุณทุกท่านที่ใช้คู่มือนี้ หากมีข้อเสนอแนะหรือคำติชม กรุณาติดต่อทีมพัฒนา

---

**สร้างโดย:** [ชื่อผู้พัฒนา]  
**วันที่:** [วันที่สร้าง]  
**เวอร์ชัน:** 1.0 