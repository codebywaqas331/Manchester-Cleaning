(function () {
    var target = document.querySelector('[data-component="footer"]');
    if (!target) return;
    var path = window.location.pathname;
    var root =
        path.indexOf('/articles/') > -1 ||
            path.indexOf('/locations/') > -1 ||
            path.indexOf('/services/') > -1
            ? '../'
            : '';
    target.outerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a href="${root}index.html"
                        class="site-logo site-logo-dark"
                        aria-label="Manchester Cleaning home">
                            <img src="${root}assets/images/footer-logo.webp"
                                alt="Manchester Cleaning"
                                class="site-logo-mark">
                        </a>                       
                         <p>
                            Professional gutter cleaning, repairs, and guard installation
                            for residential and commercial properties across Manchester
                            and surrounding areas.
                        </p>
                        <div class="footer-social">
                            <a href="#" aria-label="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3.04 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-...
                                    </path>
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 1 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 1 1 0-6z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="${root}services/gutter-repair.html">Gutter Repair</a></li>
                            <li><a href="${root}services/gutter-guard-installation.html">Gutter Guard Installation</a></li>
                            <li><a href="${root}services/commercial-gutter-cleaning.html">Commercial Gutter Cleaning</a></li>
                            <li><a href="${root}services/residential-gutter-cleaning.html">Residential Gutter Cleaning</a></li>
                            <li><a href="${root}services/industrial-gutter-cleaning.html">Industrial Gutter Cleaning</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Locations</h4>
                        <ul>
                            <li><a href="${root}locations.html">Our Locations</a></li>
                            <li><a href="${root}locations/manchester.html">Manchester</a></li>
                            <li><a href="${root}locations/salford.html">Salford</a></li>
                        </ul>
                        <h4 style="margin-top: var(--space-3)">Company</h4>
                        <ul>
                            <li><a href="${root}about.html">About Us</a></li>
                            <li><a href="${root}faq.html">FAQs</a></li>
                            <li><a href="${root}articles.html">Articles</a></li>
                            <li><a href="${root}contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contact</h4>
                        <div class="footer-contact-item">
                            <a href="tel:01612345678">0161 234 5678</a>
                        </div>
                        <div class="footer-contact-item">
                            <a href="mailto:info@manchesterguttercleaning.co.uk">
                                info@manchesterguttercleaning.co.uk
                            </a>
                        </div>
                        <div class="footer-contact-item">
                            <span>Manchester, UK</span>
                        </div>
                        <div class="footer-contact-item">
                            <span>Mon–Sat: 8am–6pm</span>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>
                        &copy; 2026 Manchester Gutter Cleaning.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    `;
})();