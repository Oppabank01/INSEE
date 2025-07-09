// Hero Section Animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate title and description with slight delay
    const animatedElements = document.querySelectorAll('.animate-up');
    animatedElements.forEach((element, index) => {
        const delay = index * 200;
        element.style.setProperty('--delay', delay);
    });
});

// Back to top button functionality
let isScrolling = false;

// Show/hide button based on scroll position with throttling
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const backtopButton = document.getElementById('backtop');
            if (window.scrollY > 300) {
                backtopButton?.classList.add('show');
            } else {
                backtopButton?.classList.remove('show');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Smooth scroll to top with easing
document.getElementById('backtop')?.addEventListener('click', (e) => {
    e.preventDefault();
    
    const duration = 800; // Duration in milliseconds
    const start = window.scrollY;
    const startTime = performance.now();

    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start * (1 - easeInOutCubic(progress)));

        if (progress < 1) {
            window.requestAnimationFrame(scrollStep);
        }
    }

    window.requestAnimationFrame(scrollStep);
});

// Navbar scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// Language switching functionality
const translations = {
    en: {
        'hero-title': 'Sustainable Waste Management Solutions',
        'hero-description': 'Leading provider of sustainable waste management and industrial services, supporting your business with environmental solutions',
        'company-name': 'INSEE Ecocycle Company Limited',
        'explore-btn': 'Explore our solutions',
        'section-description': 'As a subsidiary of Siam City Cement Group, INSEE Ecocycle operates throughout South and Southeast Asia, including Sri Lanka, Vietnam, and Cambodia. We specialize in sustainable waste management through co-processing technology, transforming waste into alternative fuels and raw materials for cement production. This process safely treats both hazardous and non-hazardous waste with zero landfill residue.'
    },
    th: {
        'hero-title': 'โซลูชั่นการจัดการของเสียอย่างยั่งยืน',
        'hero-description': 'ผู้นำด้านการจัดการของเสียอย่างยั่งยืนและบริการอุตสาหกรรม สนับสนุนธุรกิจของคุณด้วยโซลูชั่นด้านสิ่งแวดล้อม',
        'company-name': 'บริษัท อินทรี อีโคไซเคิล จำกัด',
        'explore-btn': 'สำรวจโซลูชั่นของเรา',
        'section-description': 'ในฐานะบริษัทในเครือของกลุ่มบริษัทปูนซีเมนต์นครหลวง อินทรี อีโคไซเคิล ดำเนินงานทั่วเอเชียใต้และเอเชียตะวันออกเฉียงใต้ รวมถึงศรีลังกา เวียดนาม และกัมพูชา เราเชี่ยวชาญในการจัดการของเสียอย่างยั่งยืนผ่านเทคโนโลยีการผลิตร่วม เปลี่ยนของเสียให้เป็นเชื้อเพลิงทางเลือกและวัตถุดิบสำหรับการผลิตปูนซีเมนต์ กระบวนการนี้บำบัดของเสียทั้งที่เป็นอันตรายและไม่เป็นอันตรายอย่างปลอดภัยโดยไม่มีกากของเสียในหลุมฝังกลบ'
    },
    cn: {
        'hero-title': '可持续废物管理解决方案',
        'hero-description': '可持续废物管理和工业服务的领先提供商，通过环境解决方案支持您的业务',
        'company-name': '印西生态循环有限公司',
        'explore-btn': '探索我们的解决方案',
        'section-description': '作为暹罗城市水泥集团的子公司，印西生态循环在南亚和东南亚地区运营，包括斯里兰卡、越南和柬埔寨。我们专注于通过协同处理技术进行可持续废物管理，将废物转化为水泥生产的替代燃料和原材料。这一过程安全处理危险和非危险废物，实现零填埋残留。'
    }
};

// Function to update content based on selected language
function updateContent(lang) {
    console.log('Changing language to:', lang); // Debug log

    // Save selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update the language toggle button
    const langToggle = document.querySelector('.lang-toggle-btn');
    const selectedLangData = document.querySelector(`[data-lang="${lang}"]`);
    
    if (langToggle && selectedLangData) {
        const imgSrc = selectedLangData.querySelector('img').src;
        const spanText = selectedLangData.querySelector('span').textContent;
        langToggle.querySelector('img').src = imgSrc;
        langToggle.querySelector('span').textContent = spanText;
    }

    // Update content for each translatable element
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            console.log('Updating element:', key, 'with:', translations[lang][key]); // Debug log
            if (element.tagName.toLowerCase() === 'input' || 
                element.tagName.toLowerCase() === 'textarea') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Initialize language switching
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded'); // Debug log
    
    // Set initial language from localStorage or default to English
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    console.log('Initial language:', savedLang); // Debug log
    
    // Add click event listeners to language options
    const langLinks = document.querySelectorAll('.lang-menu a');
    console.log('Found language links:', langLinks.length); // Debug log
    
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            console.log('Language link clicked:', lang); // Debug log
            updateContent(lang);
        });
    });

    // Initial content update
    updateContent(savedLang);
});
