# Manchester Gutter Cleaning — Website
A professional, responsive website for a local gutter cleaning business serving Manchester and surrounding areas. Built with pure HTML5, CSS3, and Vanilla JavaScript — no frameworks, no dependencies.
## File Structure
```
├── index.html                  # Homepage
├── about.html                  # About page
├── faq.html                    # Searchable FAQ page with categories
├── contact.html                # Contact page with quote form
├── articles.html               # Article listing page
├── services/
│   ├── gutter-cleaning.html
│   ├── gutter-repair.html
│   ├── gutter-guard-installation.html
│   ├── residential-gutter-cleaning.html
│   ├── commercial-gutter-cleaning.html
│   └── industrial-gutter-cleaning.html
├── locations/
│   ├── manchester.html
│   └── salford.html
├── articles/
│   ├── gutter-cleaning-autumn.html
│   ├── benefits-of-gutter-cleaning.html
│   ├── hiring-gutter-cleaning-service.html
│   └── gutter-cleaning-guide.html
├── components/
│   ├── header.js               # Shared header and mobile navigation
│   └── footer.js               # Shared footer
├── assets/
│   ├── css/
│   │   └── style.css           # Complete design system
│   ├── js/
│   │   └── main.js             # All interactive features
│   └── images/
└── README.md
```
## Features
### Design
- Professional navy/blue/green colour palette
- Inter + Poppins typography (Google Fonts)
- CSS variables for consistent theming
- 8px spacing system
- Responsive at 1440px, 1200px, 992px, 768px, 480px, and 375px
- Subtle scroll-reveal animations
- Hover states on all interactive elements
### JavaScript (Vanilla — no dependencies)
- Sticky header with scroll detection
- Mobile hamburger menu with slide-down navigation
- Desktop dropdown menus (hover + keyboard)
- FAQ accordion (smooth open/close, keyboard accessible)
- FAQ search and category filtering (faq.html)
- Smooth scrolling for anchor links
- Form validation (name, phone, email, postcode, selects)
- Back-to-top floating button
- Scroll-reveal animations via IntersectionObserver
- Quote modal on homepage
### SEO
- Unique title and meta description per page
- Canonical URLs
- Open Graph and Twitter Card metadata
- Semantic HTML5 (header, nav, main, section, article, footer)
- Breadcrumb navigation on sub-pages
- LocalBusiness / Service JSON-LD schema
- Descriptive image alt text
- Proper H1/H2/H3 hierarchy
### Accessibility
- Skip-to-content link
- ARIA labels and expanded states
- Keyboard-accessible accordion and navigation
- Visible focus states
- Reduced-motion support
- No-JS fallback (content visible without JavaScript)
### Form
- Frontend validation for required fields, email format, UK phone, and UK postcode
- Clear error messages
- Success message on valid submission
- Placeholder backend integration point (clearly marked in main.js for PHP, Formspree, API, or Supabase connection)
## Running Locally
Run the site through a local HTTP server so the shared components can be loaded with `fetch()`.
For local development with a server:
```bash
npx serve
```
Or use any static file server.
## Deployment
Upload all files to any shared hosting provider or static hosting service (Netlify, Vercel, GitHub Pages, etc.). No server-side processing required.
## Connecting the Quote Form
The form currently shows a success message on valid submission. To connect it to a backend, edit the placeholder section in `assets/js/main.js` — search for `PLACEHOLDER: Connect to backend`.
## Images
All images are from Pexels (license-free stock photography) and referenced via their CDN URLs. Replace with your own photography for production use.