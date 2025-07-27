import { useState, useEffect } from 'react';
import '../../styles/products/Hair.css';
import BackgroundSlider from '../../components/BackgroundSlider';
import { backgroundImages } from '../../utils/backgroundImages';

const Hair = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(sectionId || '');
        }
      });

      // Animate elements on scroll
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((element) => {
        const elementTop = (element as HTMLElement).offsetTop;
        const elementHeight = (element as HTMLElement).offsetHeight;
        const windowHeight = window.innerHeight;

        if (scrollY + windowHeight > elementTop + elementHeight / 4) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hair">
      {/* Floating Side Navigation */}
      <div className="side-nav">
        <div 
          className={`side-nav-item ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() => scrollToSection('hero')}
          title="Hair AI"
        >
          <span className="side-nav-icon">💇</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'features' ? 'active' : ''}`}
          onClick={() => scrollToSection('features')}
          title="Features"
        >
          <span className="side-nav-icon">✨</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'styles' ? 'active' : ''}`}
          onClick={() => scrollToSection('styles')}
          title="Styles"
        >
          <span className="side-nav-icon">🎨</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'benefits' ? 'active' : ''}`}
          onClick={() => scrollToSection('benefits')}
          title="Benefits"
        >
          <span className="side-nav-icon">📊</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'demo' ? 'active' : ''}`}
          onClick={() => scrollToSection('demo')}
          title="Demo"
        >
          <span className="side-nav-icon">🚀</span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <BackgroundSlider images={backgroundImages.hair} />
        <div className="hero-content animate-on-scroll">
          <div className="hero-text">
            <h1>Hair AI <span className="highlight">Studio</span></h1>
            <h2>Revolutionary Hair Styling Experience</h2>
            <p>Transform how customers discover and try different hairstyles with our AI-powered virtual hair styling, color simulation, and personalized recommendations. Perfect hair decisions every time.</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Realistic Results</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50%</div>
                <div className="stat-label">Styling Time Saved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3x</div>
                <div className="stat-label">Customer Engagement</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="animate-on-scroll">Advanced Hair AI Features</h2>
        <div className="features-grid">
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">🎨</div>
            <h3>Virtual Hair Coloring</h3>
            <p>Real-time hair color simulation with accurate shade matching and natural-looking results on different hair types.</p>
            <ul>
              <li>Realistic color blending</li>
              <li>Multiple color techniques</li>
              <li>Hair texture adaptation</li>
              <li>Lighting simulation</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">✂️</div>
            <h3>Hairstyle Try-On</h3>
            <p>Instantly try different haircuts and styles using advanced 3D modeling and face shape analysis.</p>
            <ul>
              <li>Face shape detection</li>
              <li>Hair length simulation</li>
              <li>Style recommendations</li>
              <li>Trend integration</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">🧬</div>
            <h3>Hair Analysis</h3>
            <p>AI-powered hair health analysis providing insights on hair type, damage, and personalized care recommendations.</p>
            <ul>
              <li>Hair type identification</li>
              <li>Damage assessment</li>
              <li>Scalp condition analysis</li>
              <li>Care recommendations</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">👤</div>
            <h3>Face Shape Matching</h3>
            <p>Intelligent face shape analysis to recommend the most flattering hairstyles for each individual.</p>
            <ul>
              <li>Facial feature analysis</li>
              <li>Personalized suggestions</li>
              <li>Style compatibility</li>
              <li>Trend adaptation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hair Styles Section */}
      <section id="styles" className="styles">
        <h2 className="animate-on-scroll">Hair Style Categories</h2>
        <div className="styles-grid">
          <div className="style-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=200&fit=crop" alt="Short Hair Styles" />
            <h3>Short Hair</h3>
            <p>Pixie cuts, bobs, and modern short styles</p>
            <div className="style-features">
              <span>• Pixie Cuts</span>
              <span>• Bob Styles</span>
              <span>• Asymmetrical Cuts</span>
              <span>• Textured Styles</span>
            </div>
          </div>
          <div className="style-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1522339728625-50901d8d5de3?w=300&h=200&fit=crop" alt="Medium Hair Styles" />
            <h3>Medium Hair</h3>
            <p>Shoulder-length versatile styling options</p>
            <div className="style-features">
              <span>• Layered Cuts</span>
              <span>• Wavy Styles</span>
              <span>• Straight Looks</span>
              <span>• Curly Textures</span>
            </div>
          </div>
          <div className="style-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=200&fit=crop" alt="Long Hair Styles" />
            <h3>Long Hair</h3>
            <p>Elegant long hairstyles and braids</p>
            <div className="style-features">
              <span>• Flowing Styles</span>
              <span>• Braided Looks</span>
              <span>• Updos</span>
              <span>• Romantic Curls</span>
            </div>
          </div>
          <div className="style-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=300&h=200&fit=crop" alt="Color Styles" />
            <h3>Color Styles</h3>
            <p>Creative coloring and highlighting</p>
            <div className="style-features">
              <span>• Highlights</span>
              <span>• Ombre Effects</span>
              <span>• Balayage</span>
              <span>• Fantasy Colors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2 className="animate-on-scroll">Why Choose Our Hair AI?</h2>
        <div className="benefits-content">
          <div className="benefits-grid">
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">70%</div>
              <p>Client satisfaction increase</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">3x</div>
              <p>Faster styling decisions</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">90%</div>
              <p>Style recommendation accuracy</p>
            </div>
          </div>
          <div className="benefits-features">
            <div className="feature-list animate-on-scroll">
              <h3>For Customers</h3>
              <ul>
                <li>✓ Risk-free style experimentation</li>
                <li>✓ Personalized recommendations</li>
                <li>✓ Hair health insights</li>
                <li>✓ Save time and money</li>
                <li>✓ Confidence in decisions</li>
              </ul>
            </div>
            <div className="feature-list animate-on-scroll">
              <h3>For Salons</h3>
              <ul>
                <li>✓ Increase customer satisfaction</li>
                <li>✓ Reduce consultation time</li>
                <li>✓ Showcase expertise</li>
                <li>✓ Attract new clients</li>
                <li>✓ Differentiate services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <h2 className="animate-on-scroll">Try Our Hair AI Technology</h2>
        <div className="demo-options">
          <div className="demo-card animate-on-scroll">
            <div className="demo-icon">🛒</div>
            <h3>E-commerce Hair Demo</h3>
            <p>Experience our hair AI integrated into a hair care and styling products e-commerce platform. Perfect for online beauty retailers.</p>
            <div className="demo-features">
              <span>• Product catalog browsing</span>
              <span>• Hair color matching</span>
              <span>• Style recommendations</span>
              <span>• Purchase integration</span>
            </div>
            <button className="demo-btn" onClick={() => window.open('https://demo-ecommerce-hair.neura-ai.com', '_blank')}>
              Try E-commerce Demo
            </button>
          </div>
          <div className="demo-card animate-on-scroll">
            <div className="demo-icon">💺</div>
            <h3>Salon Kiosk Demo</h3>
            <p>Interactive salon kiosk experience optimized for hair salons, beauty studios, and consultation areas.</p>
            <div className="demo-features">
              <span>• Touch-optimized interface</span>
              <span>• Salon service integration</span>
              <span>• Client consultation tools</span>
              <span>• Appointment booking</span>
            </div>
            <button className="demo-btn" onClick={() => window.open('https://demo-salon-kiosk.neura-ai.com', '_blank')}>
              Try Salon Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content animate-on-scroll">
          <h2>Ready to Transform Your Hair Business?</h2>
          <p>Join leading salons and beauty brands using our hair AI technology to revolutionize customer experiences</p>
          <div className="cta-buttons">
            <button className="cta-primary">
              Start Free Trial
            </button>
            <button className="cta-secondary">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hair;
