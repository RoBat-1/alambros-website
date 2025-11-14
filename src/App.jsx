import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    {
      title: 'Windows & Doors',
      description: 'Custom aluminium windows and doors with modern designs and superior quality.',
      icon: '🪟'
    },
    {
      title: 'Glass Facades',
      description: 'Stunning glass and aluminium facades for commercial and residential buildings.',
      icon: '🏢'
    },
    {
      title: 'Railings & Balustrades',
      description: 'Elegant and durable aluminium railings for safety and aesthetic appeal.',
      icon: '🛡️'
    },
    {
      title: 'Partitions',
      description: 'Office and residential partitions with sleek aluminium frames.',
      icon: '📐'
    },
    {
      title: 'Curtain Walls',
      description: 'Energy-efficient curtain wall systems for modern architecture.',
      icon: '🏗️'
    },
    {
      title: 'Custom Fabrication',
      description: 'Bespoke aluminium solutions tailored to your specific requirements.',
      icon: '⚙️'
    }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🔧</span>
            <span className="logo-text">ALAM BROS</span>
          </div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>Services</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">ALAM BROS</h1>
          <h2 className="hero-subtitle">Professional Aluminium Workshop</h2>
          <p className="hero-description">
            Crafting Excellence in Aluminium Since Years
          </p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Get a Quote
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Quality aluminium solutions for every need</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Alam Bros</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Alam Bros is a leading aluminium workshop dedicated to delivering exceptional quality 
                and craftsmanship. With years of experience in the industry, we specialize in creating 
                custom aluminium solutions for residential, commercial, and industrial projects.
              </p>
              <p>
                Our team of skilled craftsmen combines traditional techniques with modern technology 
                to produce aluminium products that are not only functional but also aesthetically pleasing. 
                We take pride in our attention to detail and commitment to customer satisfaction.
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Quality Craftsmanship</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Timely Delivery</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Competitive Pricing</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We'd love to hear about your project</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone / WhatsApp</h3>
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
                  <h3>Email</h3>
                  <p>info@alambros.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>123 Industrial Avenue, Workshop District</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted! This is a demo.'); }}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Alam Bros Aluminium Workshop. All rights reserved.</p>
          <p>Crafting Excellence, Building Trust</p>
        </div>
      </footer>
    </div>
  )
}

export default App
