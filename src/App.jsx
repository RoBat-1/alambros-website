import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('ar') // Default to Arabic

  // Translations
  const translations = {
    ar: {
      home: 'الرئيسية',
      servicesNav: 'الخدمات',
      about: 'عن الشركة',
      contact: 'اتصل بنا',
      heroTitle: 'العلم إخوان',
      heroSubtitle: 'ورشة الألمنيوم المحترفة',
      heroDescription: 'صناعة التميز في الألمنيوم منذ سنوات',
      getQuote: 'احصل على عرض سعر',
      ourServices: 'خدماتنا',
      servicesSubtitle: 'حلول الألمنيوم عالية الجودة لكل احتياج',
      aboutTitle: 'عن إخوان العلم',
      aboutText1: 'العلم إخوان هي ورشة رائدة في مجال الألمنيوم ملتزمة بتقديم جودة استثنائية وحرفية عالية. مع سنوات من الخبرة في هذا المجال، نحن متخصصون في إنشاء حلول الألمنيوم المخصصة للمشاريع السكنية والتجارية والصناعية.',
      aboutText2: 'يجمع فريقنا من الحرفيين المهرة بين التقنيات التقليدية والتكنولوجيا الحديثة لإنتاج منتجات ألمنيوم ليست فقط عملية ولكن أيضًا جذابة من الناحية الجمالية. نحن نفخر باهتمامنا بالتفاصيل والتزامنا برضا العملاء.',
      qualityCraftsmanship: 'صناعة يدوية عالية الجودة',
      timelyDelivery: 'تسليم في الوقت المحدد',
      competitivePricing: 'أسعار تنافسية',
      customSolutions: 'حلول مخصصة',
      getInTouch: 'ابق على تواصل',
      contactSubtitle: 'يسعدنا أن نسمع عن مشروعك',
      phoneWhatsApp: 'الهاتف / واتساب',
      email: 'البريد الإلكتروني',
      location: 'الموقع',
      businessHours: 'ساعات العمل',
      monSat: 'الإثنين - السبت: 8:00 صباحًا - 6:00 مساءً',
      sunday: 'الأحد: مغلق',
      yourName: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      phoneNumber: 'رقم الهاتف',
      projectMessage: 'أخبرنا عن مشروعك...',
      sendMessage: 'إرسال الرسالة',
      footerText: '© 2025 ورشة العلم إخوان للألمنيوم. جميع الحقوق محفوظة.',
      footerSlogan: 'صناعة التميز، بناء الثقة',
      services: [
        { title: 'النوافذ والأبواب', description: 'نوافذ وأبواب ألمنيوم مخصصة بتصاميم عصرية وجودة فائقة.', icon: '🪟' },
        { title: 'واجهات زجاجية', description: 'واجهات زجاجية وألمنيوم مذهلة للمباني التجارية والسكنية.', icon: '🏢' },
        { title: 'الدرابزين والحواجز', description: 'درابزين ألمنيوم أنيق ومتين للسلامة والجاذبية الجمالية.', icon: '🛡️' },
        { title: 'الفواصل', description: 'فواصل للمكاتب والمنازل بإطارات ألمنيوم أنيقة.', icon: '📐' },
        { title: 'الجدران الساترة', description: 'أنظمة جدران ساترة موفرة للطاقة للعمارة الحديثة.', icon: '🏗️' },
        { title: 'التصنيع المخصص', description: 'حلول ألمنيوم مخصصة مصممة حسب متطلباتك الخاصة.', icon: '⚙️' }
      ]
    },
    en: {
      home: 'Home',
      servicesNav: 'Services',
      about: 'About',
      contact: 'Contact',
      heroTitle: 'ALAM BROS',
      heroSubtitle: 'Professional Aluminium Workshop',
      heroDescription: 'Crafting Excellence in Aluminium Since Years',
      getQuote: 'Get a Quote',
      ourServices: 'Our Services',
      servicesSubtitle: 'Quality aluminium solutions for every need',
      aboutTitle: 'About Alam Bros',
      aboutText1: 'Alam Bros is a leading aluminium workshop dedicated to delivering exceptional quality and craftsmanship. With years of experience in the industry, we specialize in creating custom aluminium solutions for residential, commercial, and industrial projects.',
      aboutText2: 'Our team of skilled craftsmen combines traditional techniques with modern technology to produce aluminium products that are not only functional but also aesthetically pleasing. We take pride in our attention to detail and commitment to customer satisfaction.',
      qualityCraftsmanship: 'Quality Craftsmanship',
      timelyDelivery: 'Timely Delivery',
      competitivePricing: 'Competitive Pricing',
      customSolutions: 'Custom Solutions',
      getInTouch: 'Get In Touch',
      contactSubtitle: 'We\'d love to hear about your project',
      phoneWhatsApp: 'Phone / WhatsApp',
      email: 'Email',
      location: 'Location',
      businessHours: 'Business Hours',
      monSat: 'Mon - Sat: 8:00 AM - 6:00 PM',
      sunday: 'Sunday: Closed',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      phoneNumber: 'Phone Number',
      projectMessage: 'Tell us about your project...',
      sendMessage: 'Send Message',
      footerText: '© 2025 Alam Bros Aluminium Workshop. All rights reserved.',
      footerSlogan: 'Crafting Excellence, Building Trust',
      services: [
        { title: 'Windows & Doors', description: 'Custom aluminium windows and doors with modern designs and superior quality.', icon: '🪟' },
        { title: 'Glass Facades', description: 'Stunning glass and aluminium facades for commercial and residential buildings.', icon: '🏢' },
        { title: 'Railings & Balustrades', description: 'Elegant and durable aluminium railings for safety and aesthetic appeal.', icon: '🛡️' },
        { title: 'Partitions', description: 'Office and residential partitions with sleek aluminium frames.', icon: '📐' },
        { title: 'Curtain Walls', description: 'Energy-efficient curtain wall systems for modern architecture.', icon: '🏗️' },
        { title: 'Custom Fabrication', description: 'Bespoke aluminium solutions tailored to your specific requirements.', icon: '⚙️' }
      ]
    },
    fr: {
      home: 'Accueil',
      servicesNav: 'Services',
      about: 'À propos',
      contact: 'Contact',
      heroTitle: 'ALAM BROS',
      heroSubtitle: 'Atelier d\'Aluminium Professionnel',
      heroDescription: 'Créer l\'Excellence en Aluminium Depuis des Années',
      getQuote: 'Demander un Devis',
      ourServices: 'Nos Services',
      servicesSubtitle: 'Solutions d\'aluminium de qualité pour tous les besoins',
      aboutTitle: 'À Propos d\'Alam Bros',
      aboutText1: 'Alam Bros est un atelier d\'aluminium de premier plan dédié à la livraison d\'une qualité et d\'un savoir-faire exceptionnels. Avec des années d\'expérience dans l\'industrie, nous nous spécialisons dans la création de solutions d\'aluminium personnalisées pour les projets résidentiels, commerciaux et industriels.',
      aboutText2: 'Notre équipe d\'artisans qualifiés combine des techniques traditionnelles avec la technologie moderne pour produire des produits en aluminium qui sont non seulement fonctionnels mais aussi esthétiquement agréables. Nous sommes fiers de notre attention aux détails et de notre engagement envers la satisfaction du client.',
      qualityCraftsmanship: 'Artisanat de Qualité',
      timelyDelivery: 'Livraison Ponctuelle',
      competitivePricing: 'Prix Compétitifs',
      customSolutions: 'Solutions Personnalisées',
      getInTouch: 'Contactez-Nous',
      contactSubtitle: 'Nous aimerions en savoir plus sur votre projet',
      phoneWhatsApp: 'Téléphone / WhatsApp',
      email: 'E-mail',
      location: 'Emplacement',
      businessHours: 'Heures d\'Ouverture',
      monSat: 'Lun - Sam: 8h00 - 18h00',
      sunday: 'Dimanche: Fermé',
      yourName: 'Votre Nom',
      yourEmail: 'Votre E-mail',
      phoneNumber: 'Numéro de Téléphone',
      projectMessage: 'Parlez-nous de votre projet...',
      sendMessage: 'Envoyer le Message',
      footerText: '© 2025 Atelier d\'Aluminium Alam Bros. Tous droits réservés.',
      footerSlogan: 'Créer l\'Excellence, Construire la Confiance',
      services: [
        { title: 'Fenêtres et Portes', description: 'Fenêtres et portes en aluminium sur mesure avec des designs modernes et une qualité supérieure.', icon: '🪟' },
        { title: 'Façades Vitrées', description: 'Magnifiques façades en verre et aluminium pour les bâtiments commerciaux et résidentiels.', icon: '🏢' },
        { title: 'Garde-corps et Balustrades', description: 'Garde-corps en aluminium élégants et durables pour la sécurité et l\'attrait esthétique.', icon: '🛡️' },
        { title: 'Cloisons', description: 'Cloisons de bureau et résidentielles avec des cadres en aluminium élégants.', icon: '📐' },
        { title: 'Murs-rideaux', description: 'Systèmes de murs-rideaux économes en énergie pour l\'architecture moderne.', icon: '🏗️' },
        { title: 'Fabrication Sur Mesure', description: 'Solutions en aluminium sur mesure adaptées à vos besoins spécifiques.', icon: '⚙️' }
      ]
    }
  }

  const t = translations[language]
  const services = t.services

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <div className={`app ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🔧</span>
            <span className="logo-text" dir={language === 'ar' ? 'rtl' : 'ltr'}>{language === 'ar' ? 'العلم إخوان' : 'ALAM BROS'}</span>
          </div>
          
          {/* Language Selector */}
          <div className="language-selector">
            <span className="globe-icon">🌐</span>
            <select 
              value={language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-dropdown"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>{t.home}</button></li>
            <li><button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>{t.servicesNav}</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>{t.about}</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>{t.contact}</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title" dir={language === 'ar' ? 'rtl' : 'ltr'}>{t.heroTitle}</h1>
          <h2 className="hero-subtitle" dir={language === 'ar' ? 'rtl' : 'ltr'}>{t.heroSubtitle}</h2>
          <p className="hero-description" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {t.heroDescription}
          </p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            {t.getQuote}
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">{t.ourServices}</h2>
          <p className="section-subtitle">{t.servicesSubtitle}</p>
          <div className="services-grid">{services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${service.link ? 'clickable' : ''}`}
                onClick={() => service.link && (window.location.href = service.link)}
                style={service.link ? { cursor: 'pointer' } : {}}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                {service.link && <p className="service-link">Click to access →</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t.aboutTitle}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                {t.aboutText1}
              </p>
              <p>
                {t.aboutText2}
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>{t.qualityCraftsmanship}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>{t.timelyDelivery}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>{t.competitivePricing}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>{t.customSolutions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">{t.getInTouch}</h2>
          <p className="section-subtitle">{t.contactSubtitle}</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>{t.phoneWhatsApp}</h3>
                  <p>
                    <a 
                      href="https://wa.me/96171873635" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      +961 71 873 635
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>{t.email}</h3>
                  <p>
                    <a 
                      href="mailto:alamgroup7541@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      alamgroup7541@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>{t.location}</h3>
                  <p>123 Industrial Avenue, Workshop District</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>{t.businessHours}</h3>
                  <p>{t.monSat}</p>
                  <p>{t.sunday}</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => { 
                e.preventDefault(); 
                const name = e.target.elements[0].value;
                const email = e.target.elements[1].value;
                const phone = e.target.elements[2].value;
                const message = e.target.elements[3].value;
                
                const whatsappMessage = `Hello, my name is ${name}.%0A%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage: ${message}`;
                window.open(`https://wa.me/96171873635?text=${whatsappMessage}`, '_blank');
              }}>
                <div className="form-group">
                  <input type="text" placeholder={t.yourName} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder={t.yourEmail} required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder={t.phoneNumber} />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder={t.projectMessage} required></textarea>
                </div>
                <button type="submit" className="submit-button">{t.sendMessage}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{t.footerText}</p>
          <p>{t.footerSlogan}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
