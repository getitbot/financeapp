// /**
//  * Finance Buddha Frontend Logic
//  * * This script handles:
//  * 1. Mock Data Integration (Simulating a database)
//  * 2. DOM Rendering (Building HTML from JSON)
//  * 3. Event Listeners for Interactivity
//  * 4. Slider/Carousel Logic
//  * 5. Mobile Menu Toggle
//  * 6. Footer Accordion Logic
//  */

// /* ==========================================================================
//    1. MOCK DATABASE (DATA STORE)
//    ========================================================================== */

// const APP_DATA = {
    
//     // Bank Logos for Marquee
//     banks: [
//         { name: "HDFC Bank", logo: "https://logo.clearbit.com/hdfcbank.com" },
//         { name: "SBI", logo: "https://logo.clearbit.com/sbi.co.in" },
//         { name: "ICICI Bank", logo: "https://logo.clearbit.com/icicibank.com" },
//         { name: "Axis Bank", logo: "https://logo.clearbit.com/axisbank.com" },
//         { name: "Kotak", logo: "https://logo.clearbit.com/kotak.com" },
//         { name: "IndusInd", logo: "https://logo.clearbit.com/indusind.com" },
//         { name: "Bajaj Finserv", logo: "https://logo.clearbit.com/bajajfinserv.in" },
//         { name: "Tata Capital", logo: "https://logo.clearbit.com/tatacapital.com" },
//     ],

//     // Trust Metrics
//     metrics: [
//         { icon: "fa-sack-dollar", value: "₹ 4000 Cr+", label: "Worth of loans Disbursed in last 4 years", color: "text-green-500" },
//         { icon: "fa-handshake", value: "Since 2012", label: "12 years of customer love & trust", color: "text-blue-500" },
//         { icon: "fa-map-location-dot", value: "1500+ Pincodes", label: "Serving you wherever you are", color: "text-red-500" },
//         { icon: "fa-clipboard-check", value: "Rs 0 COST", label: "Certified financial & trusted aid", color: "text-orange-500" },
//     ],

//     // Partners List
//     partners: [
//         "https://th.bing.com/th/id/OIP.FuJpixHMFVNprw0saw6zrgHaEK?w=302&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
//         "https://th.bing.com/th/id/OIP.E_a6xTAz3QXxRFz1JpcvMAHaEK?w=264&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
//         "https://th.bing.com/th/id/OIP.T88xKuLaCmLcu6dgdqdfVAHaEo?w=259&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
//         "https://www.logotaglines.com/wp-content/uploads/2021/06/Reserve-Bank-of-India-RBI-Tagline-Slogan-punchline-motto.png",
//         "https://th.bing.com/th/id/OIP.8_GccVWGCww3nYKaq5vG9wHaBe?w=315&h=69&c=7&r=0&o=7&pid=1.7&rm=3",
//         "https://th.bing.com/th/id/OIP.kjR1YLNqYAFtprq81UjTKQHaEo?w=290&h=181&c=7&r=0&o=7&pid=1.7&rm=3",
//         "https://th.bing.com/th/id/OIP.FQtY4NgeIVnBe909PfK1DwHaEK?w=295&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
//         "https://th.bing.com/th/id/OIP.VvkHou31J7erJbCNalfT-AHaEK?w=333&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
//         "https://th.bing.com/th/id/OIP.fmyyNPr65ppYt80AcSV46AHaC4?w=312&h=135&c=7&r=0&o=7&pid=1.7&rm=3",
//         "https://www.liblogo.com/img-logo/ax6638a7f6-axis-bank-logo-axis-bank-information-about-the-issuer-lei-549300hvnwmjpofvni41.png",
//         "https://th.bing.com/th/id/OIP.6WHoC1nriyXohiNeq74JpQHaBp?w=347&h=78&c=7&r=0&o=7&pid=1.7&rm=3",
//         "https://th.bing.com/th/id/OIP.TSUnsfmJHtTyjpY5gaH5PgHaE7?w=277&h=184&c=7&r=0&o=7&pid=1.7&rm=3"
//     ],
    


/**
 * Finance Buddha - Interaction Engine (v3.0)
 * -----------------------------------------------------
 * Features:
 * 1. IntersectionObserver for "Reveal on Scroll" animations
 * 2. Dynamic Content Rendering with Animation Classes
 * 3. Infinite Marquee Calculation
 * 4. Interactive Mobile Menus
 * 5. Testimonial Slider with Autoplay
 */

/* --- 1. DATA REPOSITORY --- */

/**
 * Finance Buddha - Universal Logic (v5.0)
 * -----------------------------------------------------
 * Features:
 * 1. centralized Data Management (using your provided data).
 * 2. Universal Page Handler (works on Home, About, Careers, Contact).
 * 3. Dynamic Arrow Hover Effects (Slide animation).
 * 4. Scroll Reveal Animations.
 */
/**
 * Finance Buddha - Universal Logic (v5.1 - Fixes)
 * -----------------------------------------------------
 * Updates:
 * 1. Fixed broken links (About, Careers, Contact now work).
 * 2. Removed "slide" hover effects.
 */

/**
 * Finance Buddha - Final Logic (v5.2)
 * -----------------------------------------------------
 * Updates:
 * 1. Mobile Menu now includes About Us & Careers.
 * 2. Centering logic support.
 */

/* --- 1. DATA REPOSITORY --- */
/**
 * Finance Buddha - Final Universal Logic (v6.0)
 * -----------------------------------------------------
 * Updates:
 * 1. Fixed Mobile Menu opening issues (Robust Animation).
 * 2. Updated Mobile Menu Item List.
 * 3. Tools redirect to Coming Soon.
 */
git
/* --- 1. DATA REPOSITORY --- */
const APP_DATA = {
    banks: [
        { name: "HDFC Bank", },
    ],
    metrics: [
        { icon: "fa-sack-dollar", value: "₹ 4000 Cr+", label: "Disbursed Value", color: "text-green-500" },
        { icon: "fa-handshake", value: "12 Years", label: "Customer Trust", color: "text-blue-500" },
        { icon: "fa-map-location-dot", value: "1500+", label: "Pincodes Covered", color: "text-red-500" },
        { icon: "fa-clipboard-check", value: "Zero Cost", label: "Service Fee", color: "text-orange-500" },
    ],
    partners: [
        "https://th.bing.com/th/id/OIP.FuJpixHMFVNprw0saw6zrgHaEK?w=302&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.E_a6xTAz3QXxRFz1JpcvMAHaEK?w=264&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.T88xKuLaCmLcu6dgdqdfVAHaEo?w=259&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
        "https://www.logotaglines.com/wp-content/uploads/2021/06/Reserve-Bank-of-India-RBI-Tagline-Slogan-punchline-motto.png",
        "https://th.bing.com/th/id/OIP.8_GccVWGCww3nYKaq5vG9wHaBe?w=315&h=69&c=7&r=0&o=7&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.kjR1YLNqYAFtprq81UjTKQHaEo?w=290&h=181&c=7&r=0&o=7&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.FQtY4NgeIVnBe909PfK1DwHaEK?w=295&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.VvkHou31J7erJbCNalfT-AHaEK?w=333&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.fmyyNPr65ppYt80AcSV46AHaC4?w=312&h=135&c=7&r=0&o=7&pid=1.7&rm=3",
        "https://www.liblogo.com/img-logo/ax6638a7f6-axis-bank-logo-axis-bank-information-about-the-issuer-lei-549300hvnwmjpofvni41.png",
        "https://th.bing.com/th/id/OIP.6WHoC1nriyXohiNeq74JpQHaBp?w=347&h=78&c=7&r=0&o=7&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.TSUnsfmJHtTyjpY5gaH5PgHaE7?w=277&h=184&c=7&r=0&o=7&pid=1.7&rm=3"
    ],
    testimonials: [
        { name: "Devendra K.", role: "Business Owner", text: "I was in a tight spot and needed capital fast. The digital process was surprisingly smooth. Funds hit my account in 48 hours.", rating: 5 },
        { name: "Priya Sharma", role: "Software Engineer", text: "Comparing interest rates is usually a headache. Finance Buddha made it transparent. I saved about 1.5% on my personal loan.", rating: 4.5 },
        { name: "Rahul Verma", role: "Entrepreneur", text: "The team guided me through the documentation perfectly. No hidden fees, no jargon. Highly recommended for startups.", rating: 5 },
        { name: "Amit Patel", role: "Salaried", text: "Honest advice. They actually told me to wait a month to improve my CIBIL before applying, which got me a better rate.", rating: 5 }
    ],
    blogs: [
        { title: "No Credit Check Loans: The Reality", excerpt: "Is the traditional financial ecosystem changing? We explore how your CIBIL score remains your digital financial identity.", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", tag: "Personal Loan", date: "Jan 15, 2026" },
        { title: "Self Employed Home Loans Guide", excerpt: "Getting a mortgage as a business owner shouldn't be a nightmare. Here is the documentation checklist you actually need.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", tag: "Home Loan", date: "Jan 12, 2026" },
        { title: "Instant Loans: Boom or Bubble?", excerpt: "From food delivery to credit, speed is everything. But are the high interest rates of instant loans worth the convenience?", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", tag: "Trends", date: "Jan 08, 2026" },
        { title: "Decoding Your CIBIL Report", excerpt: "A deep dive into what those three digits actually mean for your loan eligibility and how to improve them quickly.", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", tag: "Credit Score", date: "Jan 05, 2026" },
        { title: "5 Business Loan Mistakes", excerpt: "Applying for capital? Avoid these common rejection triggers that 60% of first-time applicants make.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", tag: "Business", date: "Jan 01, 2026" },
        { title: "Card EMI vs Personal Loan", excerpt: "We crunched the numbers on processing fees and interest rates to tell you which financing option wins.", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", tag: "Comparison", date: "Dec 28, 2025" }
    ],
    footerLinks: [
        { category: "LOANS", links: ["Personal Loan", "Business Loan", "Home Loan", "Loan Against Property", "Gold Loan", "Education Loan"] },
        { category: "TOOLS", links: ["EMI Calculator", "Eligibility Check", "Balance Transfer", "CIBIL Score", "IFSC Finder", "Holidays"] },
        { category: "COMPANY", links: ["About Us", "Careers", "Contact Us", "Partner With Us", "Blog", "Press", "Sitemap"] },
        { category: "LEGAL", links: ["Privacy Policy", "Terms of Use", "Disclaimer", "Fair Practices", "Grievance Redressal", "RBI Data"] }
    ]
};

/* --- 2. INITIALIZATION --- */

document.addEventListener('DOMContentLoaded', () => {
    // These functions check if the element exists before running
    renderBankMarquee();
    renderMetrics();
    renderPartners();
    renderTestimonials();
    renderBlogs();
    renderFooter();
    
    // Interactions
    setupMobileMenu(); // FIXED MOBILE MENU
    setupScrollReveal(); 
    setupHeaderScroll();
});

/* --- 3. RENDERING LOGIC --- */

// 1. Hero Marquee (Home)
function renderBankMarquee() {
    const container = document.getElementById('hero-bank-logos');
    if (!container) return; 

    const logoHtml = APP_DATA.banks.map(bank => `
        <div class="px-8 flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300">
            <img src="${bank.logo}" alt="${bank.name}" class="h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
        </div>
    `).join('');

    container.className = "marquee-track";
    container.innerHTML = logoHtml.repeat(4);
}

// 2. Metrics Grid (Home)
function renderMetrics() {
    const container = document.getElementById('metrics-grid');
    if (!container) return;

    container.innerHTML = APP_DATA.metrics.map((metric, index) => `
        <div class="metric-card flex flex-col items-center p-6 text-center reveal-hidden reveal-up" style="transition-delay: ${(index+1)*100}ms">
            <div class="metric-icon-box mb-4 transform transition-transform duration-300 hover:rotate-12">
                <i class="fa-solid ${metric.icon} ${metric.color} text-4xl"></i>
            </div>
            <h3 class="font-bold text-3xl text-gray-800 mb-1 tracking-tight">${metric.value}</h3>
            <p class="text-sm text-gray-500 font-medium uppercase tracking-wide opacity-80">${metric.label}</p>
        </div>
    `).join('');
}

// 3. Partners Grid (Home)
function renderPartners() {
    const container = document.getElementById('partners-grid');
    if (!container) return;

    container.innerHTML = APP_DATA.partners.map((url, index) => `
        <div class="logo-bw-container reveal-hidden reveal-pop p-4 border border-gray-100 rounded-lg hover:shadow-lg bg-white transition-all duration-300 flex items-center justify-center" style="transition-delay: ${(index % 4)*50}ms">
            <img src="${url}" alt="Partner" class="h-12 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
        </div>
    `).join('');
}

// 4. Blogs (Home)
function renderBlogs() {
    const container = document.getElementById('blog-grid');
    if (!container) return;

    container.innerHTML = APP_DATA.blogs.map((blog, index) => `
        <article class="card-glass flex flex-col h-full reveal-hidden reveal-up" style="transition-delay: ${(index % 3)*100}ms">
            <div class="blog-image-wrapper relative overflow-hidden rounded-t-xl h-48">
                <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
                <div class="badge absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">${blog.tag}</div>
            </div>
            <div class="p-6 flex-1 flex flex-col bg-white">
                <div class="text-gray-400 text-xs font-semibold mb-3 flex items-center gap-2">
                    <i class="fa-regular fa-calendar text-blue-500"></i> ${blog.date}
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-3 leading-snug hover:text-blue-600 transition cursor-pointer">
                    ${blog.title}
                </h3>
                <p class="text-sm text-gray-500 mb-6 flex-1 leading-relaxed">
                    ${blog.excerpt}
                </p>
                <a href="blog-single.html" class="text-blue-600 font-bold text-sm inline-flex items-center gap-2 mt-auto hover:text-blue-800 transition-colors">
                    Read Full Story 
                    <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
        </article>
    `).join('');
}

// 5. Testimonials (Home)
let currentSlide = 0;
function renderTestimonials() {
    const track = document.getElementById('testimonial-track');
    if (!track) return;

    track.innerHTML = APP_DATA.testimonials.map(t => `
        <div class="min-w-full px-4 flex justify-center items-center">
            <div class="max-w-3xl text-center">
                <div class="mb-6 flex justify-center gap-1 text-yellow-400 text-xl">
                    ${getStarRating(t.rating)}
                </div>
                <p class="text-2xl md:text-3xl text-gray-700 italic mb-10 leading-relaxed font-light font-serif">
                    "${t.text}"
                </p>
                <div class="flex flex-col items-center">
                    <div class="w-12 h-1 bg-blue-500 rounded mb-4"></div>
                    <h4 class="font-bold text-gray-900 text-lg">${t.name}</h4>
                    <span class="text-blue-500 text-xs uppercase tracking-widest font-bold mt-1">${t.role}</span>
                </div>
            </div>
        </div>
    `).join('');

    const prevBtn = document.getElementById('prev-testim');
    const nextBtn = document.getElementById('next-testim');
    
    if(prevBtn && nextBtn) {
        prevBtn.onclick = () => changeSlide(-1);
        nextBtn.onclick = () => changeSlide(1);
    }
}

function changeSlide(dir) {
    currentSlide = (currentSlide + dir + APP_DATA.testimonials.length) % APP_DATA.testimonials.length;
    const track = document.getElementById('testimonial-track');
    if(track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function getStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars += '<i class="fa-solid fa-star"></i>';
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) stars += '<i class="fa-solid fa-star-half-stroke"></i>';
        else stars += '<i class="fa-regular fa-star text-gray-200"></i>';
    }
    return stars;
}

// 6. Footer (Redirections)
function renderFooter() {
    const container = document.getElementById('footer-links-container');
    if (!container) return;

    container.innerHTML = APP_DATA.footerLinks.map((section, index) => `
        <div class="mb-8 md:mb-0">
            <div class="flex justify-between items-center cursor-pointer md:cursor-default pb-2 border-b border-white/10 md:border-none" onclick="toggleAccordion(${index})">
                <h4 class="font-bold text-lg text-white tracking-wide">${section.category}</h4>
                <i class="fa-solid fa-chevron-down md:hidden text-blue-300 transition-transform duration-300" id="icon-${index}"></i>
            </div>
            <ul class="space-y-3 mt-4 accordion-content md:h-auto md:opacity-100 md:block hidden" id="content-${index}">
                ${section.links.map(link => {
                    let href = "#";
                    
                    // 1. Pages
                    if (link === "About Us") href = "about.html";
                    if (link === "Careers") href = "careers.html";
                    if (link === "Contact Us") href = "contact.html";
                    
                    // 2. Apps
                    if (link === "Personal Loan" || link === "Business Loan" || link === "Home Loan" || link === "Loan Against Property" || link === "Gold Loan" || link === "Education Loan") {
                        href = "loan-application.html";
                    }

                    // 3. Calculator
                    if (link === "EMI Calculator") {
                        href = "emi-calculator.html";
                    } 

                    // 4. Coming Soon
                    const comingSoonPages = [
                        "Eligibility Check", "Balance Transfer", "CIBIL Score", "IFSC Finder", 
                        "Holidays", "Partner With Us", "Press", "Sitemap", "Newsroom", "Credit Cards"
                    ];
                    if (comingSoonPages.includes(link)) {
                        href = "coming-soon.html";
                    }

                    // 5. Legal
                    if (link === "Privacy Policy") href = "legal.html#privacy";
                    if (link === "Terms of Use") href = "legal.html#terms";
                    if (link === "Disclaimer") href = "legal.html#disclaimer";
                    if (link === "RBI Data" || link === "Fair Practices") href = "legal.html#rbi";
                    if (link === "Grievance Redressal") href = "legal.html#grievance";
                    
                    return `
                        <li>
                            <a href="${href}" class="text-blue-100 hover:text-white inline-flex items-center gap-1 transition-colors text-sm">
                                <span>${link}</span>
                            </a>
                        </li>
                    `;
                }).join('')}
            </ul>
        </div>
    `).join('');
}

function toggleAccordion(index) {
    if (window.innerWidth >= 768) return;
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    
    document.querySelectorAll('.accordion-content').forEach(el => {
        if(el.id !== `content-${index}`) {
            el.classList.remove('block', 'open');
            el.classList.add('hidden');
        }
    });
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        setTimeout(() => content.classList.add('block', 'open'), 10);
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.remove('block', 'open');
        setTimeout(() => content.classList.add('hidden'), 300);
        icon.style.transform = 'rotate(0deg)';
    }
}

/* --- 4. INTERACTIONS & ANIMATIONS --- */

function setupScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal-hidden');
    hiddenElements.forEach(el => observer.observe(el));
    
    document.querySelectorAll('section h2').forEach(h2 => {
        h2.classList.add('reveal-hidden', 'reveal-up');
        observer.observe(h2);
    });
}

function setupHeaderScroll() {
    const header = document.getElementById('header-bg');
    if(!header) return;

    window.addEventListener('scroll', () => {
        if(window.scrollY > 20) {
            header.classList.add('bg-white/95', 'shadow-md');
            header.classList.remove('bg-white/70', 'shadow-sm');
        } else {
            header.classList.remove('bg-white/95', 'shadow-md');
            header.classList.add('bg-white/70', 'shadow-sm');
        }
    });
}

// --------------------------------------------------------
// FIXED MOBILE MENU LOGIC (Use this exact function)
// --------------------------------------------------------
function setupMobileMenu() {
    const openBtn = document.getElementById('open-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const navList = document.getElementById('mobile-nav-list');

    // 1. Define the Exact Menu Items & Links
    const menuItems = [
        { name: "Personal Loan", link: "loan-application.html" },
        { name: "EMI Calculator", link: "emi-calculator.html" },
        { name: "About Us", link: "about.html" },
        { name: "Contact Us", link: "contact.html" },
        { name: "CIBIL Score", link: "coming-soon.html" },
        { name: "Careers", link: "careers.html" },
        { name: "Blogs", link: "blog.html" },
        { name: "Disclaimer", link: "legal.html#disclaimer" },
        { name: "RBI Data", link: "legal.html#rbi" },
        { name: "Eligibility Check", link: "coming-soon.html" }
    ];

    // 2. Populate the Mobile Menu HTML
    if (navList) {
        navList.innerHTML = menuItems.map(item => `
            <li class="border-b border-gray-100 last:border-0">
                <a href="${item.link}" class="block py-4 px-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 transition rounded flex justify-between items-center group">
                    ${item.name}
                    <i class="fa-solid fa-chevron-right text-xs text-gray-300 group-hover:text-blue-500 transition-colors"></i>
                </a>
            </li>
        `).join('');
    }

    // 3. Robust Open/Close Logic
    if (!openBtn || !sidebar || !overlay) return;

    // Ensure initial state is hidden properly
    sidebar.style.transition = 'transform 0.3s ease-in-out';
    sidebar.style.transform = 'translateX(100%)'; 

    const openMenu = () => {
        sidebar.style.transform = 'translateX(0)';
        overlay.classList.remove('hidden');
        // Use requestAnimationFrame to ensure the transition happens
        requestAnimationFrame(() => {
            overlay.classList.remove('opacity-0');
        });
        document.body.style.overflow = 'hidden'; // Lock scroll
    };

    const closeMenu = () => {
        sidebar.style.transform = 'translateX(100%)';
        overlay.classList.add('opacity-0');
        // Wait for transition before hiding display
        setTimeout(() => {
            overlay.classList.add('hidden');
            document.body.style.overflow = ''; // Unlock scroll
        }, 300);
    };

    // 4. Attach Event Listeners
    openBtn.onclick = (e) => { 
        e.preventDefault(); 
        openMenu(); 
    };
    
    closeBtn.onclick = (e) => { 
        e.preventDefault(); 
        closeMenu(); 
    };
    
    overlay.onclick = closeMenu;
}




















