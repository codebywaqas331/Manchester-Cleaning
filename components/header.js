(function () {
    var target = document.querySelector('[data-component="header"]');
    if (!target) return;
    var pageDirectory = window.location.pathname.substring(
        0,
        window.location.pathname.lastIndexOf('/') + 1
    );
    var root =
        pageDirectory.indexOf('/articles/') > -1 ||
            pageDirectory.indexOf('/locations/') > -1 ||
            pageDirectory.indexOf('/services/') > -1
            ? '../'
            : '';
    var html = `
        <a href="#main" class="skip-link">Skip to main content</a>
<div class="top-bar">
    <div class="container">
        <div class="top-bar-info">
            <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                Mon–Sat: 8am–6pm
            </span>
            <a href="tel:01612345678">
                0161 234 5678
            </a>
        </div>
        <div class="top-bar-cta">
            <a href="${root}contact.html" class="btn btn-primary btn-sm">
                Contact Us
            </a>
        </div>
    </div>
</div>
<header class="header">
    <div class="container">
        <a href="${root}index.html" class="site-logo site-logo-light" aria-label="Manchester Cleaning home">
            <img src="${root}assets/images/header-logo.webp" alt="Manchester Cleaning" class="site-logo-mark" />
        </a>
        <nav class="nav" aria-label="Main navigation">
            <div class="nav-item">
                <a href="${root}index.html" class="nav-link">
                    Home
                </a>
            </div>
            <div class="nav-item">
                <a href="${root}about.html" class="nav-link">
                    About
                </a>
            </div>
            <div class="nav-item has-dropdown">
                <a href="#" class="nav-link" aria-haspopup="true" aria-expanded="false">
                    Services
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                </a>
                <div class="dropdown">
                    <a href="${root}services/gutter-repair.html">Gutter Repair</a>
                    <a href="${root}services/gutter-guard-installation.html">Gutter Guard Installation</a>
                    <a href="${root}services/commercial-gutter-cleaning.html">Commercial Gutter Cleaning</a>
                    <a href="${root}services/residential-gutter-cleaning.html">Residential Gutter Cleaning</a>
                    <a href="${root}services/industrial-gutter-cleaning.html">Industrial Gutter Cleaning</a>
                </div>
            </div>
            <div class="nav-item has-dropdown">
                <a href="#" class="nav-link" aria-haspopup="true" aria-expanded="false">
                    Locations
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                </a>
                <div class="dropdown">
                    <a href="${root}locations/manchester.html">Manchester</a>
                    <a href="${root}locations/salford.html">Salford</a>
                    <a href="${root}locations/trafford.html">Trafford</a>
                    <a href="${root}locations/stockport.html">Stockport</a>
                    <a href="${root}locations/altrincham.html">Altrincham</a>
                    <a href="${root}locations/bolton.html">Bolton</a>
                    <a href="${root}locations/cheshire.html">Cheshire</a>
                    <a href="${root}locations/gutter-cleaning-sale.html">Sale</a>
                </div>
            </div>
            <div class="nav-item">
                <a href="${root}faq.html" class="nav-link">
                    FAQs
                </a>
            </div>
            <div class="nav-item">
                <a href="${root}articles.html" class="nav-link">
                    Articles
                </a>
            </div>
            <div class="nav-item">
                <a href="${root}contact.html" class="nav-link">
                    Contact
                </a>
            </div>
        </nav>
        <div class="header-actions">
            <a href="tel:01612345678" class="header-phone">
                0161 234 5678
            </a>
            <a href="${root}contact.html" class="btn btn-primary btn-sm" data-open-modal="quote">
                Get a Free Quote
            </a>
        </div>
        <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobileNav">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>
<div class="mobile-nav" id="mobileNav">
    <div class="mobile-nav-inner">
        <a href="${root}index.html" class="mobile-nav-link">
            Home
        </a>
        <a href="${root}about.html" class="mobile-nav-link">
            About
        </a>
        <button class="mobile-nav-toggle">
            Services
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
            </svg>
        </button>
        <div class="mobile-nav-sub">
            <a href="${root}services/gutter-repair.html">Gutter Repair</a>
            <a href="${root}services/gutter-guard-installation.html">Gutter Guard Installation</a>
            <a href="${root}services/commercial-gutter-cleaning.html">Commercial Gutter Cleaning</a>
            <a href="${root}services/residential-gutter-cleaning.html">Residential Gutter Cleaning</a>
            <a href="${root}services/industrial-gutter-cleaning.html">Industrial Gutter Cleaning</a>
        </div>
        <button class="mobile-nav-toggle">
            Locations
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
            </svg>
        </button>
        <div class="mobile-nav-sub">
            <a href="${root}locations/manchester.html">Manchester</a>
            <a href="${root}locations/salford.html">Salford</a>
            <a href="${root}locations/trafford.html">Trafford</a>
            <a href="${root}locations/stockport.html">Stockport</a>
            <a href="${root}locations/altrincham.html">Altrincham</a>
            <a href="${root}locations/bolton.html">Bolton</a>
            <a href="${root}locations/cheshire.html">Cheshire</a>
            <a href="${root}locations/gutter-cleaning-sale.html">Sale</a>
        </div>
        <a href="${root}faq.html" class="mobile-nav-link">
            FAQs
        </a>
        <a href="${root}articles.html" class="mobile-nav-link">
            Articles
        </a>
        <a href="${root}contact.html" class="mobile-nav-link">
            Contact
        </a>
        <div class="mobile-nav-cta">
            <a href="tel:01612345678" class="btn btn-outline btn-block">
                Call 0161 234 5678
            </a>
            <a href="${root}contact.html" class="btn btn-primary btn-block">
                Get a Free Quote
            </a>
        </div>
    </div>
</div>
    `;
    target.outerHTML = html;
})();