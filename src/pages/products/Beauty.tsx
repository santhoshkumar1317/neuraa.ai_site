import { useState, useEffect } from 'react';
import '../../styles/products/Beauty.css';
import BackgroundSlider from '../../components/BackgroundSlider';
import { backgroundImages } from '../../utils/backgroundImages';

const Beauty = () => {
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
    <div className="beauty">
      {/* Floating Side Navigation */}
      <div className="side-nav">
        <div 
          className={`side-nav-item ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() => scrollToSection('hero')}
          title="Beauty AI"
        >
          <span className="side-nav-icon">💄</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'features' ? 'active' : ''}`}
          onClick={() => scrollToSection('features')}
          title="Features"
        >
          <span className="side-nav-icon">✨</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'products' ? 'active' : ''}`}
          onClick={() => scrollToSection('products')}
          title="Products"
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
        <BackgroundSlider images={backgroundImages.beauty} />
        <div className="hero-content animate-on-scroll">
          <div className="hero-text">
            <h1>Beauty AI <span className="highlight">Solutions</span></h1>
            <h2>Transform Your Beauty Experience</h2>
            <p>Revolutionize the way customers discover and try beauty products with our AI-powered virtual makeup, skin analysis, and personalized recommendations. Reduce returns by 60% and increase customer satisfaction.</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">60%</div>
                <div className="stat-label">Return Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2.5x</div>
                <div className="stat-label">Conversion Boost</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="animate-on-scroll">AI-Powered Beauty Features</h2>
        <div className="features-grid">
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">💄</div>
            <h3>Virtual Makeup Try-On</h3>
            <p>Real-time makeup application using advanced AR technology. Try lipstick, eyeshadow, foundation, and more instantly.</p>
            <ul>
              <li>Real-time face tracking</li>
              <li>Color matching technology</li>
              <li>Multiple product layers</li>
              <li>Lighting adaptation</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">🔍</div>
            <h3>Smart Skin Analysis</h3>
            <p>AI-powered skin analysis that identifies skin type, concerns, and provides personalized product recommendations.</p>
            <ul>
              <li>Skin tone detection</li>
              <li>Acne and blemish analysis</li>
              <li>Aging assessment</li>
              <li>Hydration level measurement</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">🎨</div>
            <h3>Color Matching</h3>
            <p>Precise color matching for foundation, concealer, and other makeup products based on your unique skin tone.</p>
            <ul>
              <li>Advanced color science</li>
              <li>Undertone detection</li>
              <li>Seasonal adaptation</li>
              <li>Brand compatibility</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">🎭</div>
            <h3>Look Creation</h3>
            <p>AI-suggested makeup looks based on face shape, skin tone, and personal style preferences.</p>
            <ul>
              <li>Personalized recommendations</li>
              <li>Trend-based suggestions</li>
              <li>Occasion-appropriate looks</li>
              <li>Style matching</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <h2 className="animate-on-scroll">Beauty Product Categories</h2>
        <div className="products-grid">
          <div className="product-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=200&fit=crop" alt="Makeup Products" />
            <h3>Makeup</h3>
            <p>Complete virtual makeup experience</p>
            <div className="product-features">
              <span>• Foundation & Concealer</span>
              <span>• Lipstick & Lip Gloss</span>
              <span>• Eyeshadow & Eyeliner</span>
              <span>• Blush & Bronzer</span>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1570194065650-d99815d0e2f4?w=300&h=200&fit=crop" alt="Skincare Products" />
            <h3>Skincare</h3>
            <p>AI-powered skincare analysis</p>
            <div className="product-features">
              <span>• Skin Analysis</span>
              <span>• Product Recommendations</span>
              <span>• Routine Planning</span>
              <span>• Progress Tracking</span>
            </div>
          </div>
          <div className="product-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop" alt="Beauty Tools" />
            <h3>Beauty Tools</h3>
            <p>Smart beauty device integration</p>
            <div className="product-features">
              <span>• Smart Mirrors</span>
              <span>• Beauty Cameras</span>
              <span>• Lighting Systems</span>
              <span>• Mobile Apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2 className="animate-on-scroll">Why Choose Our Beauty AI?</h2>
        <div className="benefits-content">
          <div className="benefits-grid">
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">60%</div>
              <p>Reduction in product returns</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">2.5x</div>
              <p>Increase in conversion rates</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">95%</div>
              <p>Customer satisfaction rate</p>
            </div>
          </div>
          <div className="benefits-features">
            <div className="feature-list animate-on-scroll">
              <h3>Customer Benefits</h3>
              <ul>
                <li>✓ Try before you buy experience</li>
                <li>✓ Personalized recommendations</li>
                <li>✓ Skin analysis and advice</li>
                <li>✓ Save time and money</li>
                <li>✓ Discover new products</li>
              </ul>
            </div>
            <div className="feature-list animate-on-scroll">
              <h3>Business Benefits</h3>
              <ul>
                <li>✓ Reduce return rates</li>
                <li>✓ Increase customer engagement</li>
                <li>✓ Boost conversion rates</li>
                <li>✓ Collect valuable data</li>
                <li>✓ Differentiate from competitors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <h2 className="animate-on-scroll">Experience Our Beauty AI</h2>
        <div className="demo-options">
          <div className="demo-card animate-on-scroll">
            <div className="demo-icon">🛒</div>
            <h3>E-commerce Demo</h3>
            <p>Experience our beauty AI integrated into a complete e-commerce platform. Perfect for online retailers and beauty brands.</p>
            <div className="demo-features">
              <span>• Product catalog integration</span>
              <span>• Shopping cart functionality</span>
              <span>• Customer reviews</span>
              <span>• Payment processing</span>
            </div>
            <button className="demo-btn" onClick={() => window.open('https://demo-ecommerce-beauty.neura-ai.com', '_blank')}>
              Try E-commerce Demo
            </button>
          </div>
          <div className="demo-card animate-on-scroll">
            <div className="demo-icon">📱</div>
            <h3>Tablet/Kiosk Demo</h3>
            <p>Interactive kiosk experience optimized for retail stores, beauty counters, and in-store demonstrations.</p>
            <div className="demo-features">
              <span>• Touch-optimized interface</span>
              <span>• Store integration</span>
              <span>• Product scanning</span>
              <span>• Offline capabilities</span>
            </div>
            <button className="demo-btn" onClick={() => window.open('https://demo-kiosk-beauty.neura-ai.com', '_blank')}>
              Try Kiosk Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content animate-on-scroll">
          <h2>Ready to Transform Your Beauty Business?</h2>
          <p>Join leading beauty brands using our AI technology to create exceptional customer experiences</p>
          <div className="cta-buttons">
            <button className="cta-primary">
              Start Free Trial
            </button>
            <button className="cta-secondary">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beauty;
