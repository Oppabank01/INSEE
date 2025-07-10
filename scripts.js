document.addEventListener('DOMContentLoaded', () => {

    // --- ส่วนของการตั้งค่าเริ่มต้น (Setup) ---
    const header = document.querySelector('.header');
    const backtopButton = document.getElementById('backtop');
    const animatedElements = document.querySelectorAll('.animate-up');
    const langLinks = document.querySelectorAll('.lang-menu a');
    let headerHeight = 0;

    // ตรวจสอบว่ามี header หรือไม่ ก่อนจะคำนวณความสูง
    if (header) {
        headerHeight = header.offsetHeight;
    }

    // --- ส่วนของฟังก์ชัน (Functions) ---



    // ฟังก์ชันสำหรับปุ่ม Back to Top
    function handleBackToTopButton() {
        if (backtopButton) { // ทำงานต่อเมื่อมีปุ่ม
            if (window.scrollY > 300) {
                backtopButton.classList.add('show');
            } else {
                backtopButton.classList.remove('show');
            }
        }
    }


    
    // --- ส่วนของการทำงานตอน Scroll (Event Listener หลัก) ---
    // *** เราจะรวมทุกอย่างที่ทำงานตอน scroll มาไว้ในนี้ที่เดียว ***
    window.addEventListener('scroll', () => {
        handleBackToTopButton();
    });


    // --- ส่วนที่ทำงานตอน Click หรือโหลดหน้าเสร็จ (ทำงานแค่ครั้งเดียว) ---

    // Hero Section Animation
    animatedElements.forEach((element, index) => {
        const delay = index * 200;
        element.style.setProperty('--delay', delay);
    });

    // Back to Top Button Click
    if (backtopButton) {
        backtopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Language Switching
    const translations = {
        en: { 'hero-title': 'Sustainable Waste Management Solutions', 'hero-description': 'Leading provider of sustainable waste management and industrial services, supporting your business with environmental solutions', 'company-name': 'INSEE Ecocycle Company Limited', 'explore-btn': 'Explore our solutions', 'section-description': 'As a subsidiary of Siam City Cement Group, INSEE Ecocycle operates throughout South and Southeast Asia, including Sri Lanka, Vietnam, and Cambodia. We specialize in sustainable waste management through co-processing technology, transforming waste into alternative fuels and raw materials for cement production. This process safely treats both hazardous and non-hazardous waste with zero landfill residue.' },
        th: { 'hero-title': 'โซลูชั่นการจัดการของเสียอย่างยั่งยืน', 'hero-description': 'ผู้นำด้านการจัดการของเสียอย่างยั่งยืนและบริการอุตสาหกรรม สนับสนุนธุรกิจของคุณด้วยโซลูชั่นด้านสิ่งแวดล้อม', 'company-name': 'บริษัท อินทรี อีโคไซเคิล จำกัด', 'explore-btn': 'สำรวจโซลูชั่นของเรา', 'section-description': 'ในฐานะบริษัทในเครือของกลุ่มบริษัทปูนซีเมนต์นครหลวง อินทรี อีโคไซเคิล ดำเนินงานทั่วเอเชียใต้และเอเชียตะวันออกเฉียงใต้ รวมถึงศรีลังกา เวียดนาม และกัมพูชา เราเชี่ยวชาญในการจัดการของเสียอย่างยั่งยืนผ่านเทคโนโลยีการผลิตร่วม เปลี่ยนของเสียให้เป็นเชื้อเพลิงทางเลือกและวัตถุดิบสำหรับการผลิตปูนซีเมนต์ กระบวนการนี้บำบัดของเสียทั้งที่เป็นอันตรายและไม่เป็นอันตรายอย่างปลอดภัยโดยไม่มีกากของเสียในหลุมฝังกลบ' },
        cn: { 'hero-title': '可持续废物管理解决方案', 'hero-description': '可持续废物管理和工业服务的领先提供商，通过环境解决方案支持您的业务', 'company-name': '印西生态循环有限公司', 'explore-btn': '探索我们的解决方案', 'section-description': '作为暹罗城市水泥集团的子公司，印西生态循环在南亚和东南亚地区运营，包括斯里兰卡、越南和柬埔寨。我们专注于通过协同处理技术进行可持续废物管理，将废物转化为水泥生产的替代燃料和原材料。这一过程安全处理危险和非危险废物，实现零填埋残留。' }
    };

    function updateContent(lang) {
        localStorage.setItem('selectedLanguage', lang);
        const langToggle = document.querySelector('.lang-toggle-btn');
        const selectedLangData = document.querySelector(`[data-lang="${lang}"]`);

        if (langToggle && selectedLangData) {
            const imgSrc = selectedLangData.querySelector('img').src;
            const spanText = selectedLangData.querySelector('span').textContent;
            langToggle.querySelector('img').src = imgSrc;
            langToggle.querySelector('span').textContent = spanText;
        }

        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            updateContent(lang);
        });
    });
    updateContent(savedLang);

    // Smooth scrolling for navigation links
    document.addEventListener('click', (e) => {
        if (e.target.closest('a[href^="#"]')) {
            e.preventDefault();
            const link = e.target.closest('a[href^="#"]');
            const href = link.getAttribute('href');
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    });

});