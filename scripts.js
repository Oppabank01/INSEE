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
    function handleBackToTopButton() {
        if (backtopButton) { // ทำงานต่อเมื่อมีปุ่ม
            if (window.scrollY > 300) {
                backtopButton.classList.add('show');
            } else {
                backtopButton.classList.remove('show');
            }
        }
    }

    window.addEventListener('scroll', () => {
        handleBackToTopButton();
    });

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
        en: {
            'company-name': 'INSEE Ecocycle Company Limited',
            'hero-title': 'INSEE Ecocycle Sustainable Waste Management and Innovative Industrial Services',
            'hero-description': 'We provide sustainable waste management solutions to help achieve your sustainability goals, along with innovative industrial services that support every stage of a project’s lifecycle from commissioning and operation to decommissioning.',
            'explore-btn': 'Explore More About Us',
            'services-solutions-label': 'SERVICES & SOLUTIONS',
            'services-solutions-title': 'Explore our Services & Solutions',
            'services-solutions-desc': 'We offer sustainable waste management solutions and innovative industrial services to support your sustainability goals and operational efficiency. Our solutions ensure the safe and assured destruction of waste, help industrial clients meet regulatory compliance, and effectively manage complex waste streams. From responsible waste treatment to specialized industrial services, we support every stage of a project’s lifecycle, including commissioning, operation, and decommissioning. Throughout each phase, we deliver safety, reliability, and strong environmental performance.',
            'card-label-waste': 'Sustainable Integrated Waste Management Service',
            'card-title-waste': 'Waste Analysis and Laboratory Services',
            'card-label-industrial': 'Specialized Industrial Services Across the Project Lifecycle',
            'card-title-industrial': 'Shutdown and Turnaround Service',
            'card-label-other': 'OTHER SERVICES & SOLUTIONS',
            'card-title-other': 'Explore Our Solutions',
            'card-btn-learn-more': 'Learn More',
            'wm-label-green': 'WASTE MANAGEMENT',
            'wm-title': 'Sustainable Integrated Waste Management Service​',
            'industrial-desc': 'INSEE Ecocycle delivers expert waste management solutions for a wide range of industrial sectors, using co-processing technology to transform waste into alternative fuels and raw materials for cement kilns. This process replaces fossil fuels like coal, lowering overall carbon emissions. Co-processing safely treats waste at high temperatures, leaving no residual ash and achieving zero waste to landfill. To address growing waste challenges, INSEE Ecocycle has also pioneered energy recovery from Municipal Solid Waste (MSW), including mining dumpsites for combustible materials such as plastic to produce Refuse-Derived Fuel (RDF). This approach recovers valuable resources, extends landfill lifespans, and helps prevent plastic waste from leaking into oceans and water sources.',
            'industrial-services-label': 'INDUSTRIAL SERVICES',
            'industrial-services-title': 'Specialized Industrial Services Across the Project Lifecycle',
            'industrial-services-desc': 'INSEE Ecocycle specializes in industrial cleaning services, particularly for the oil & gas, petrochemical, and power generation sectors— covering the entire project lifecycle, from commissioning and operation to maintenance and decommissioning. Our innovative solutions include robotic tank cleaning and the safe removal of contaminants from decommissioned assets. With proven expertise, we also handle all waste generated from industrial cleaning in a fully compliant and environmentally responsible manner.',
            'service-cards-title': 'Explore Our Solutions',
            'main-website-btn': 'Click to main website',
            'service-card-modern2-title-waste': 'Waste Management Services',
            'service-card-modern2-list-waste-title': 'Our waste management services include:',
            'service-card-modern2-list-waste': [
                'Waste Treatment and Destruction',
                'Waste Analysis and Laboratory Services',
                'Waste Collection and Transportation',
                'Secure Destruction',
                'Soil and Groundwater Remediation',
                'Consulting and Field Services'
            ],
            'service-card-modern2-title-industrial': 'Industrial Services',
            'service-card-modern2-list-industrial-title': 'Our industrial services team can provide specialized solutions as following:',
            'service-card-modern2-list-industrial': [
                'Shutdown & Turnaround Service',
                'Chemical Cleaning',
                'Mechanical Cleaning',
                'Decontamination',
                'Decommissioning',
                'Tank Cleaning',
                'Catalyst Handling',
                'Mechanical Works',
                'Pipeline & Process Services',
                'Skilled Manpower Supply'
            ],
            'service-card-modern2-title-additional': 'Additional Services',
            'service-card-modern2-list-additional-title': 'Other services we provided:',
            'service-card-modern2-list-additional': [
                'Activated Carbon',
                'Food Waste Composter',
                'Disinfection service'
            ],
            // Individual service waste keys (EN)
            'service-waste-1': 'Waste Treatment and Destruction',
            'service-waste-2': 'Waste Analysis and Laboratory Services',
            'service-waste-3': 'Waste Collection and Transportation',
            'service-waste-4': 'Secure Destruction',
            'service-waste-5': 'Soil and Groundwater Remediation',
            'service-waste-6': 'Consulting and Field Services',
            // Individual service industrial keys (EN)
            'service-industrial-1': 'Shutdown & Turnaround Service',
            'service-industrial-2': 'Chemical Cleaning',
            'service-industrial-3': 'Mechanical Cleaning',
            'service-industrial-4': 'Decontamination',
            'service-industrial-5': 'Decommissioning',
            'service-industrial-6': 'Tank Cleaning',
            'service-industrial-7': 'Catalyst Handling',
            'service-industrial-8': 'Mechanical Works',
            'service-industrial-9': 'Pipeline & Process Services',
            'service-industrial-10': 'Skilled Manpower Supply',
            // Individual service additional keys (EN)
            'service-additional-1': 'Activated Carbon',
            'service-additional-2': 'Food Waste Composter',
            'service-additional-3': 'Disinfection service',
            'expertise-ref-title-experts': 'EXPERTS',
            'expertise-ref-desc-experts': 'We are committed to creating a positive, sustainable future. We leverage our knowledge to create clean and waste management processes that help us achieve greater sustainability.',
            'expertise-ref-title-specialists': 'SPECIALISTS',
            'expertise-ref-desc-specialists': 'We offer our customers a wide range of specialist industrial services. We manage residuals and hazardous waste generated from cleaning processes in a sustainable manner within full compliance with all regulatory requirements.',
            'expertise-ref-title-service': 'SERVICE DRIVEN',
            'expertise-ref-desc-service': 'Our team is committed to partners by offering quality driven operations. We deliver the highest quality work and ensure complete customer satisfaction by constantly improving our services.',
            'expertise-ref-title-safety': 'SAFETY LEADERS',
            'expertise-ref-desc-safety': 'Safety is of paramount importance to us. We believe that Zero Harm is attainable and strive to build the most efficient organization. Safety leadership is critical to our Zero Harm culture. We continuously conduct specialized safety leadership development programs while all INSEE Ecocycle employees are mentored to drive our health and safety performance with passion, energy and a clear vision.',
            'brochure-title': 'INSEE ECOCYCLE',
            'brochure-download-btn': 'DOWNLOAD BROCHURE',
            'how-to-get-started-title': 'HOW TO GET STARTED?',
            'how-to-get-started-desc': 'We have a team of skilled experts ready to answer your questions and help you get exactly what you need.',
            'give-us-a-call-btn': 'Give us a call',
            'contact-section-title': 'Contact Us',
            'contact-section-subtitle': 'We\'re here to help with your sustainable waste management needs',
            'contact-office-title-head': 'Head Office (Bangkok)',
            'contact-office-title-rayong': 'Rayong Office',
            'contact-office-company': 'INSEE Ecocycle Company Limited',
            'contact-office-address-head': 'Column Tower, 3rd, 10th, 12th fl., 199 Ratchadapisek Rd. Klongtoey, Bangkok 10110, Thailand',
            'contact-office-address-rayong': '318 Makhamkoo sub-district, Nikompattana district, Rayong 21180',
            'contact-office-label-phone': 'Telephone :',
            'contact-office-label-email': 'Email :',
            'contact-office-btn-download-map': 'DOWNLOAD MAP',
            'contact-office-btn-google-map': 'GOOGLE MAP',
            'contact-form-title': 'Get Started',
            'contact-form-desc': 'Fill out the form below and we\'ll get back to you shortly',
            'form-label-name': 'Name-Surname *',
            'form-label-email': 'E-mail *',
            'form-label-phone': 'Phone Number *',
            'form-label-country': 'Country *',
            'form-label-hearabout': 'How did you hear about us?',
            'form-select-please-select': 'Please select...',
            'form-select-facebook': 'Facebook',
            'form-select-google': 'Google/Search Engine',
            'form-select-news': 'News',
            'form-select-linkedin': 'LinkedIn',
            'form-select-referrals': 'Peer Referrals',
            'form-select-others': 'Others',
            'form-label-service': 'Service you may be interested in *',
            'form-select-general': 'General Enquiries',
            'form-select-waste': 'Waste management service',
            'form-select-industrial': 'Industrial service',
            'form-select-career': 'Career',
            'form-select-suggestion': 'Suggestion',
            'form-label-message': 'Message',
            'form-placeholder-message': 'Please describe your requirements or questions...',
            'consent-text': 'I have thoroughly read and agreed with <a href="https://www.siamcitycement.com/thailand/en/policy" target="_blank" data-translate="consent-policy-link">Privacy Policy</a>, and I hereby grant my consent to SCCC Group Companies accordingly.<br>If you would like to gain access to personal data that SCCC Group Companies has about you, please complete the <a href="https://www.siamcitycement.com/thailand/en/policy" target="_blank" data-translate="consent-dsr-link">Data Subject Request Form</a>.',
            'consent-policy-link': 'Privacy Policy',
            'consent-dsr-link': 'Data Subject Request Form',
            'contact-form-submit': 'Send Message',
            'btn-text-send': 'Send Message',
            'back-to-top-text': 'TOP',
            'footer-title-follow': 'INSEE ECOCYCLE<br>FOLLOW US',
            'footer-title-call': 'INSEE ECOCYCLE<br>CALL CENTER',
            'phone-number': '1732 Press 6',
            'copyright': '2023 INSEE Ecocycle Company Limited. All rights reserved.',
            'section-description-1': 'As a subsidiary of Siam City Cement Group, INSEE Ecocycle operates throughout South and Southeast Asia, including Sri Lanka, Vietnam, and Cambodia.',
            'section-description-2': 'We specialize in sustainable waste management through co-processing technology, transforming waste into alternative fuels and raw materials for cement production. This process safely treats both hazardous and non-hazardous waste with zero landfill residue.',
            'section-description-3': 'Beyond waste management, we offer innovative industrial services to oil & gas and petrochemical sectors. Our approach maximizes operational safety and efficiency while minimizing environmental impact, supporting our clients’ sustainability goals at every stage.'
        },
        cn: {
            'company-name': '鹰牌环境服务公司',
            'hero-title': 'INSEE Ecocycle（鹰牌环境）可持续的废弃物管理及创新的工业服务',
            'hero-description': '我们提供可持续废弃物管理的解决方案，以助力您实现可持续发展目标，并提供创新的工业服务，全程支持项目生命周期的各个阶段----从调式，运营直至退役的各个环节。',
            'explore-btn': 'Explore More About Us',
            'services-solutions-label': '服务与解决方案',
            'services-solutions-title': '探索我们的服务与解决方案',
            'services-solutions-desc': '我们提供可持续的废弃物解决方案和创新的工业服务，旨在助力贵司实现可持续发展目标并提升运营效率。我们的解决方案能确保废弃物得到安全可靠的销毁，协助工业客户符合各项法规的要求，并有有效地管理复杂的废弃物。从负责任的废弃物处理到专业的工业服务，我们为项目生命周期的每个阶段提供支持，包括调式，运营和退役。在每个阶段，我们都致力于实现安全性，可靠性以及优异环境效率。',
            'card-label-waste': '可持续综合废弃物管理服务',
            'card-title-waste': '废弃物分析及实验室服务',
            'card-label-industrial': '贯穿项目生命周期的专业工业服务',
            'card-title-industrial': '停机大修服务',
            'card-label-other': '我们的其他服务与解决方案',
            'card-title-other': '如需了解更多解决方案，请访问我们的网络',
            'card-btn-learn-more': '了解更多',
            'wm-label-green': '废弃物管理',
            'wm-title': '废弃物分析及实验室服务',
            'industrial-desc': 'INSEE Ecocycle（鹰牌环境）为广泛的工业领域提供专业的废弃物管理的解决方案。我们运用协同处理技术（co-processing ）将废弃物转化为水泥窑的替代燃料和原材料。此过程可替代煤炭等化石燃料，从而降低整体碳排放。协同处理技术能在高温下安全地处理废弃物，不产生残余灰烬，实现零废弃物填埋。为应对日益严峻的废弃物挑战，INSEE Ecocycle（鹰牌环境）还开创了从城市固体废弃物（MSW）中回收能源，包括从垃圾填埋场中提取可燃材料（如塑料）来生产垃圾衍生燃料（RDF）。这种方法能够回收宝贵资源，延长垃圾填埋场的使用寿命，并有助于防止塑料垃圾泄漏到海洋和水源中。',
            'industrial-services-label': '工业服务',
            'industrial-services-title': '贯穿项目生命周期的专业工业服务',
            'industrial-services-desc': 'INSEE Ecocycle（鹰牌环境）专注于工业清洗服务，特别是针对石油天然气，石化和发电行业，涵盖整个项目生命周期，从调试，运营到维护和退役。我们的创新解决方案包括机器人储罐清洗以及安全清除退役资产中的污染物。凭借成熟的专业知识，我们还能以完全合规且对环境负责的方式处理的工业清洗过程中产生的所有废弃物。',
            'service-cards-title': '我们的其他服务与解决方案',
            'main-website-btn': '如需了解更多解决方案，请访问我们的网络',
            'service-card-modern2-title-waste': '废弃物管理服务',
            'service-card-modern2-list-waste-title': '我们的废弃物管理服务包括：',
            'service-card-modern2-list-waste': [
                '废弃物处理处置',
                '废弃物分析及实验室服务',
                '废弃物收集和运输',
                '安全销毁服务',
                '土壤和地下水污染整治',
                '咨询及现场服务'
            ],
            'service-card-modern2-title-industrial': '工业服务',
            'service-card-modern2-list-industrial-title': '我们的工业服务团队可以提供以下专业解决方案：',
            'service-card-modern2-list-industrial': [
                '停机大修服务',
                '化学清洗',
                '物理清洗',
                '净化服务',
                '除役工作',
                '罐体清洗',
                '催化剂处理',
                '机械工作',
                '管线及流程服务',
                '熟练劳动力供给'
            ],
            'service-card-modern2-title-additional': '其他服务',
            'service-card-modern2-list-additional-title': '我们提供的其他服务：',
            'service-card-modern2-list-additional': [
                '活性炭',
                '厨余堆肥机',
                '消毒服务'
            ],
            // Individual service waste keys (CN)
            'service-waste-1': '废弃物处理处置',
            'service-waste-2': '废弃物分析及实验室服务',
            'service-waste-3': '废弃物收集和运输',
            'service-waste-4': '安全销毁服务',
            'service-waste-5': '土壤和地下水污染整治',
            'service-waste-6': '咨询及现场服务',
            // Individual service industrial keys (CN)
            'service-industrial-1': '停机大修服务',
            'service-industrial-2': '化学清洗',
            'service-industrial-3': '物理清洗',
            'service-industrial-4': '净化服务',
            'service-industrial-5': '除役工作',
            'service-industrial-6': '罐体清洗',
            'service-industrial-7': '催化剂处理',
            'service-industrial-8': '机械工作',
            'service-industrial-9': '管线及流程服务',
            'service-industrial-10': '熟练劳动力供给',
            // Individual service additional keys (CN)
            'service-additional-1': '活性炭',
            'service-additional-2': '厨余堆肥机',
            'service-additional-3': '消毒服务',
            'expertise-ref-title-experts': '专业性',
            'expertise-ref-desc-experts': '我们致力于创造美好及可持续的未来，利用我们的专业知识来设计废弃物管理及清洁流程，以便协助客户达到更大的可持续性。',
            'expertise-ref-title-specialists': '精通',
            'expertise-ref-desc-specialists': '我们为客户提供广泛而专业的工业服务，按照可持续的方式管理废物残渣和清洁流程中产生的有害废物以完全达到合规性要求。',
            'expertise-ref-title-service': '服务导向',
            'expertise-ref-desc-service': '我们团队为合作伙伴们提供品质导向的运营操作。通过不断地发展与改善自己的服务，我们致力于提供最优质的服务以确保满足客户的需求。',
            'expertise-ref-title-safety': '安全模范',
            'expertise-ref-desc-safety': '安全对我们而言是至关重要的。我们相信零伤害（Zero Harm）的目标是可实现的，并努力打造最有效的组织。安全至上是我们零伤害文化不可或缺的因素。我们持续开展作为行业安全服务模范的各种专业发展项目，并对所有鹰牌环境员工进行指导，以激情、活力和清晰的愿景推动我们的健康和安全绩效。',
            'brochure-title': '下载宣传册',
            'brochure-download-btn': '下载宣传册',
            'how-to-get-started-title': '如何开始？',
            'how-to-get-started-desc': '我们有一支专业团队，随时准备回答您的问题，帮助您获得所需的服务。',
            'give-us-a-call-btn': '联系我们',
            'contact-section-title': '联系我们',
            'contact-section-subtitle': '我们随时为您的可持续废弃物管理需求提供帮助',
            'contact-office-title-head': '总部（曼谷）',
            'contact-office-title-rayong': '罗勇办事处',
            'contact-office-company': '鹰牌环境服务公司',
            'contact-office-address-head': '泰国曼谷空堤区拉差达披色路199号Column Tower大厦3、10、12楼，邮编10110',
            'contact-office-address-rayong': '泰国罗勇府尼空帕塔纳县玛坎库分区318号',
            'contact-office-label-phone': '电话：',
            'contact-office-label-email': '电子邮件：',
            'contact-office-btn-download-map': '下载地图',
            'contact-office-btn-google-map': '谷歌地图',
            'contact-form-title': '联络表格',
            'contact-form-desc': '请填写下列表格，我们会尽快与您联系',
            'form-label-name': '姓名',
            'form-label-email': '电子邮件',
            'form-label-phone': '电话号码',
            'form-label-country': '国家',
            'form-label-hearabout': '您是如何得知我们的信息？',
            'form-select-please-select': '请选择...',
            'form-select-facebook': 'Facebook',
            'form-select-google': 'Google/搜索引擎',
            'form-select-news': '新闻',
            'form-select-linkedin': 'LinkedIn',
            'form-select-referrals': '同行推荐',
            'form-select-others': '其他',
            'form-label-service': '您可能感兴趣我们的服务',
            'form-select-general': '一般咨询',
            'form-select-waste': '废弃物管理服务',
            'form-select-industrial': '工业服务',
            'form-select-career': '人才招聘',
            'form-select-suggestion': '您的建议',
            'form-label-message': '留言',
            'form-placeholder-message': '请描述您的需求或问题...',
            'consent-text': '本人同意 Insee Ecocycle Company Limited 收集，使用和与相关第三方共享我的个人数据，以便与我联系并履行所要求的服务或查询。本人理解资料将根据贵公司的隐私政策进行处理。<br>本人已仔细阅读并同意贵司的隐私政策，特此授权贵司进行相关处理。<br>如您希望查阅本公司特有的关于您的个人资料，请您填写数据主体请求表。',
            'consent-policy-link': '隐私政策',
            'consent-dsr-link': '数据主体请求表',
            'contact-form-submit': '发送信息',
            'btn-text-send': '发送信息',
            'back-to-top-text': '顶部',
            'footer-title-follow': '鹰牌环境关注我们',
            'footer-title-call': '鹰牌环境呼叫中心',
            'phone-number': '1732 转 6',
            'copyright': '2023 鹰牌环境服务公司版权所有',
            'section-description-1': '鹰牌环境服务公司（简称“鹰牌环境”）是鹰牌水泥集团旗下的子公司，其业务覆盖南亚及东南亚地区，包括斯里兰卡，越南以及柬埔寨。',
            'section-description-2': '我们专注于通过协同处理技术（co-processing）实现可持续的废弃物管理，将废弃物转化为水泥生产的替代燃料和原材料。此过程可安全处理有害和无害的废弃物，实现零废弃物填埋残留。',
            'section-description-3': '除了废弃物管理，我们还为石油天然气和石化行业提供创新的工业服务。我们致力于在各个阶段最大程度地提高运营的安全性和效率，同时最大限度的减少对环境的影响，全力支持客户实现可持续发展目标。'
        }
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
                const value = translations[lang][key];
                if (Array.isArray(value)) {
                    // For lists, render each item as <li>
                    element.innerHTML = '';
                    value.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        element.appendChild(li);
                    });
                } else if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.placeholder = value;
                } else if (element.classList.contains('consent-text') || key === 'consent-text') {
                    element.innerHTML = value;
                } else if (element.classList.contains('footer-title') || key === 'footer-title-follow' || key === 'footer-title-call') {
                    element.innerHTML = value;
                } else {
                    element.textContent = value;
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
            // Fix: skip if href is just "#"
            if (href === "#") return;
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

    // Modal for map
    const openMapModalBtn = document.getElementById('openMapModal');
    const mapModal = document.getElementById('mapModal');
    const closeMapModalBtn = document.getElementById('closeMapModal');

    if (openMapModalBtn && mapModal && closeMapModalBtn) {
      openMapModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mapModal.classList.add('show');
      });
      closeMapModalBtn.addEventListener('click', function() {
        mapModal.classList.remove('show');
      });
      window.addEventListener('click', function(event) {
        if (event.target === mapModal) {
          mapModal.classList.remove('show');
        }
      });
    }

    // Modal for Rayong map
    const openMapModalRayongBtn = document.getElementById('openMapModalRayong');
    const mapModalRayong = document.getElementById('mapModalRayong');
    const closeMapModalRayongBtn = document.getElementById('closeMapModalRayong');

    if (openMapModalRayongBtn && mapModalRayong && closeMapModalRayongBtn) {
      openMapModalRayongBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mapModalRayong.classList.add('show');
      });
      closeMapModalRayongBtn.addEventListener('click', function() {
        mapModalRayong.classList.remove('show');
      });
      window.addEventListener('click', function(event) {
        if (event.target === mapModalRayong) {
          mapModalRayong.classList.remove('show');
        }
      });
    }

    // Modal for Chonburi map
    const openMapModalChonburiBtn = document.getElementById('openMapModalChonburi');
    const mapModalChonburi = document.getElementById('mapModalChonburi');
    const closeMapModalChonburiBtn = document.getElementById('closeMapModalChonburi');
    if (openMapModalChonburiBtn && mapModalChonburi && closeMapModalChonburiBtn) {
      openMapModalChonburiBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mapModalChonburi.classList.add('show');
      });
      closeMapModalChonburiBtn.addEventListener('click', function() {
        mapModalChonburi.classList.remove('show');
      });
      window.addEventListener('click', function(event) {
        if (event.target === mapModalChonburi) {
          mapModalChonburi.classList.remove('show');
        }
      });
    }
    // Modal for Saraburi map
    const openMapModalSaraburiBtn = document.getElementById('openMapModalSaraburi');
    const mapModalSaraburi = document.getElementById('mapModalSaraburi');
    const closeMapModalSaraburiBtn = document.getElementById('closeMapModalSaraburi');
    if (openMapModalSaraburiBtn && mapModalSaraburi && closeMapModalSaraburiBtn) {
      openMapModalSaraburiBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mapModalSaraburi.classList.add('show');
      });
      closeMapModalSaraburiBtn.addEventListener('click', function() {
        mapModalSaraburi.classList.remove('show');
      });
      window.addEventListener('click', function(event) {
        if (event.target === mapModalSaraburi) {
          mapModalSaraburi.classList.remove('show');
        }
      });
    }
    // Modal for Songkhla map
    const openMapModalSongkhlaBtn = document.getElementById('openMapModalSongkhla');
    const mapModalSongkhla = document.getElementById('mapModalSongkhla');
    const closeMapModalSongkhlaBtn = document.getElementById('closeMapModalSongkhla');
    if (openMapModalSongkhlaBtn && mapModalSongkhla && closeMapModalSongkhlaBtn) {
      openMapModalSongkhlaBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mapModalSongkhla.classList.add('show');
      });
      closeMapModalSongkhlaBtn.addEventListener('click', function() {
        mapModalSongkhla.classList.remove('show');
      });
      window.addEventListener('click', function(event) {
        if (event.target === mapModalSongkhla) {
          mapModalSongkhla.classList.remove('show');
        }
      });
    }

    // === Change hero text color if main1.png is active ===
    (function() {
      // Map realIndex ไปที่ชื่อไฟล์
      var heroFilenames = ['main1.png', 'main2.png', 'main3.png'];
      function updateHeroTextColor() {
        var realIndex = window.heroSwiper ? window.heroSwiper.realIndex : 0;
        var filename = heroFilenames[realIndex];
        var heroTitles = document.querySelectorAll('.hero-title');
        var heroDescs = document.querySelectorAll('.hero-description');
        var heroContent = document.querySelector('.hero-content');
        console.log('Active hero realIndex:', realIndex, 'filename:', filename);
        heroTitles.forEach(function(el){ el.classList.remove('insee-green-text'); });
        heroDescs.forEach(function(el){ el.classList.remove('insee-green-text'); });
        if (filename === 'main1.png') {
          heroTitles.forEach(function(el){ el.classList.add('insee-green-text'); });
          heroDescs.forEach(function(el){ el.classList.add('insee-green-text'); });
        }
        // ข้อความขวาเฉพาะ main2.png
        if (heroContent) {
          heroContent.classList.remove('right-align');
          if (filename === 'main2.png') {
            heroContent.classList.add('right-align');
          }
        }
      }
      function bindSwiperEvent() {
        if (window.heroSwiper && window.heroSwiper.on) {
          window.heroSwiper.on('slideChange', updateHeroTextColor);
          window.heroSwiper.on('init', updateHeroTextColor);
          updateHeroTextColor();
        } else {
          setTimeout(bindSwiperEvent, 300);
        }
      }
      window.addEventListener('load', bindSwiperEvent);
    })();

});