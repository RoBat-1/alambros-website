====================================
ALAM BROS ALUMINIUM WORKSHOP WEBSITE
====================================

PROJECT OVERVIEW
================
Professional website for Alam Bros Aluminium Workshop featuring a complete business showcase and invoice management system.

LIVE WEBSITE
============
https://alam-bros-items-9qu6jm2qo-robat-1s-projects.vercel.app

GitHub Repository: https://github.com/RoBat-1/alambros-website


FEATURES
========
✓ Responsive Design - Works on all devices (desktop, tablet, mobile)
✓ Modern UI - Professional gradient designs and animations
✓ Navigation Menu - Smooth scrolling with hamburger menu for mobile
✓ Services Showcase - 6 core services + invoice system
✓ About Section - Company information and features
✓ Contact Integration - WhatsApp and email links
✓ Professional Invoice System - Manual entry with calculations
✓ Mobile Optimized - Touch-friendly with breakpoints at 1024px, 768px, 480px


CONTACT INFORMATION
===================
Phone/WhatsApp: +961 71 873 635
Email: alamgroup7541@gmail.com
Business Hours: Mon - Sat: 8:00 AM - 6:00 PM (Sunday: Closed)


SERVICES OFFERED
================
1. Windows & Doors - Custom aluminium windows and doors
2. Glass Facades - Commercial and residential building facades
3. Railings & Balustrades - Safety and aesthetic appeal
4. Partitions - Office and residential partitions
5. Curtain Walls - Energy-efficient systems
6. Custom Fabrication - Bespoke aluminium solutions
7. Invoice System - Professional invoicing for projects


INVOICE SYSTEM FEATURES
=======================
✓ Manual item entry (name, price, length, quantity)
✓ Automatic calculations (price × length × quantity)
✓ 11% tax calculation
✓ Real-time total updates
✓ WhatsApp invoice sending
✓ Professional table layout
✓ Mobile responsive design
✓ Clear invoice button


TECHNOLOGY STACK
================
- Frontend: React 19.2.0
- Build Tool: Vite (rolldown-vite 7.2.2)
- Routing: React Router DOM
- Styling: CSS3 (gradients, animations, flexbox, grid)
- Hosting: Vercel
- Version Control: Git + GitHub


PROJECT STRUCTURE
=================
alam-bros-items/
├── public/
├── src/
│   ├── App.jsx                    # Main landing page
│   ├── App.css                    # Main page styles
│   ├── main.jsx                   # App entry point with routing
│   ├── index.css                  # Global styles
│   ├── pages/
│   │   ├── InvoicePage.jsx        # Invoice system component
│   │   └── InvoicePage.css        # Invoice page styles
│   └── assets/
├── index.html                     # HTML entry point
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── vercel.json                    # Vercel deployment config
└── README.txt                     # This file


INSTALLATION & SETUP
====================
1. Clone the repository:
   git clone https://github.com/RoBat-1/alam-bros-items.git

2. Navigate to project directory:
   cd alam-bros-items

3. Install dependencies:
   npm install

4. Run development server:
   npm run dev

5. Build for production:
   npm run build

6. Preview production build:
   npm run preview


DEPLOYMENT
==========
The website is deployed on Vercel. To deploy updates:

1. Make your changes
2. Commit to Git:
   git add .
   git commit -m "Your message"
   git push

3. Deploy to Vercel:
   vercel --prod

The site will automatically update at the live URL.


CUSTOM DOMAIN SETUP
===================
Domain: alambros.com (configured in Vercel)

To activate the custom domain:
1. Add DNS A record at your domain registrar
2. Name: @ (or leave blank)
3. Value: 76.76.21.21
4. TTL: 3600 or Auto
5. Wait 5-30 minutes for DNS propagation


RESPONSIVE BREAKPOINTS
======================
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile Large: 480px - 768px
- Mobile: < 480px


KEY PAGES
=========
1. Home (/) - Main landing page with all sections
2. Invoice (/invoice) - Professional invoice management system


FUTURE ENHANCEMENTS
===================
- Gallery section with project photos
- Customer testimonials
- Blog/News section
- Multi-language support (English/Arabic)
- Product catalog with detailed specifications
- Online quote request form
- Project portfolio showcase


BROWSER COMPATIBILITY
=====================
✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)


SUPPORT & MAINTENANCE
======================
For website updates or issues:
- Email: alamgroup7541@gmail.com
- WhatsApp: +961 71 873 635


LICENSE
=======
© 2025 Alam Bros Aluminium Workshop. All rights reserved.


DEVELOPER NOTES
===============
- All form inputs use proper validation
- WhatsApp links use wa.me API format
- Email links use mailto protocol
- Mobile menu uses CSS transitions
- Invoice calculations handle edge cases (no length = price × quantity only)
- All external links open in new tab (target="_blank")
- Images and icons use emoji for simplicity and compatibility


VERSION HISTORY
===============
v1.0.0 (November 14, 2025)
- Initial release
- Complete website with all sections
- Mobile-responsive design
- WhatsApp and email integration
- Professional invoice system
- Vercel deployment

====================================
END OF README
====================================
