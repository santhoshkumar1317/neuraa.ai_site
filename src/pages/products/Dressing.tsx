import { useState, useEffect } from 'react';
import '../../styles/products/Dressing.css';
import BackgroundSlider from '../../components/BackgroundSlider';
import { backgroundImages } from '../../utils/backgroundImages';

const Dressing = () => {
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
    <div className="dressing">
      {/* Floating Side Navigation */}
      <div className="side-nav">
        <div 
          className={`side-nav-item ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() => scrollToSection('hero')}
          title="Virtual Try-On"
        >
          <span className="side-nav-icon">👔</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'features' ? 'active' : ''}`}
          onClick={() => scrollToSection('features')}
          title="Features"
        >
          <span className="side-nav-icon">✨</span>
        </div>
        <div 
          className={`side-nav-item ${activeSection === 'clothing' ? 'active' : ''}`}
          onClick={() => scrollToSection('clothing')}
          title="Clothing"
        >
          <span className="side-nav-icon">🎽</span>
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
        <BackgroundSlider images={backgroundImages.dressing} />
        <div className="hero-content animate-on-scroll">
          <div className="hero-text">
            <h1>Virtual <span className="highlight">Try-On</span></h1>
            <h2>Revolutionary Clothing Experience</h2>
            <p>Transform how customers shop for clothing with our AI-powered virtual try-on technology. Perfect fit predictions, style recommendations, and zero returns guarantee. Experience the future of fashion retail.</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Fit Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">70%</div>
                <div className="stat-label">Return Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4x</div>
                <div className="stat-label">Engagement Boost</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="animate-on-scroll">AI-Powered Clothing Features</h2>
        <div className="features-grid">
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">📏</div>
            <h3>Perfect Fit Prediction</h3>
            <p>Advanced AI algorithms analyze body measurements and clothing specifications to predict perfect fit with 95% accuracy.</p>
            <ul>
              <li>3D body scanning</li>
              <li>Size recommendation engine</li>
              <li>Fit visualization</li>
              <li>Body type analysis</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">🎨</div>
            <h3>Style Matching</h3>
            <p>Intelligent style recommendations based on personal preferences, body type, and current fashion trends.</p>
            <ul>
              <li>Personal style analysis</li>
              <li>Color coordination</li>
              <li>Trend integration</li>
              <li>Occasion-based suggestions</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">🔄</div>
            <h3>Mix & Match</h3>
            <p>Create complete outfits by combining different pieces and see how they look together in real-time.</p>
            <ul>
              <li>Outfit combinations</li>
              <li>Wardrobe integration</li>
              <li>Style coordination</li>
              <li>Seasonal adaptation</li>
            </ul>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">📱</div>
            <h3>AR Try-On</h3>
            <p>Augmented reality technology that overlays clothing onto your body in real-time for an authentic try-on experience.</p>
            <ul>
              <li>Real-time visualization</li>
              <li>Motion tracking</li>
              <li>Lighting adaptation</li>
              <li>360° view</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clothing Categories */}
      <section id="clothing" className="clothing">
        <h2 className="animate-on-scroll">Clothing Categories</h2>
        <div className="clothing-grid">
          <div className="clothing-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop" alt="Casual Wear" />
            <h3>Casual Wear</h3>
            <p>Everyday comfort and style</p>
            <div className="clothing-features">
              <span>• T-shirts & Tops</span>
              <span>• Jeans & Pants</span>
              <span>• Hoodies & Sweaters</span>
              <span>• Casual Dresses</span>
            </div>
          </div>
          <div className="clothing-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" alt="Formal Wear" />
            <h3>Formal Wear</h3>
            <p>Professional and elegant attire</p>
            <div className="clothing-features">
              <span>• Business Suits</span>
              <span>• Dress Shirts</span>
              <span>• Formal Dresses</span>
              <span>• Blazers & Jackets</span>
            </div>
          </div>
          <div className="clothing-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=300&h=200&fit=crop" alt="Traditional Wear" />
            <h3>Traditional Wear</h3>
            <p>Cultural and ethnic clothing</p>
            <div className="clothing-features">
              <span>• Ethnic Dresses</span>
              <span>• Cultural Suits</span>
              <span>• Traditional Accessories</span>
              <span>• Ceremonial Wear</span>
            </div>
          </div>
          <div className="clothing-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=200&fit=crop" alt="Sports Wear" />
            <h3>Sports Wear</h3>
            <p>Active and athletic clothing</p>
            <div className="clothing-features">
              <span>• Athletic Wear</span>
              <span>• Sports Shoes</span>
              <span>• Workout Gear</span>
              <span>• Outdoor Clothing</span>
            </div>
          </div>
          <div className="clothing-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1566479179817-0ac4a0ea092e?w=300&h=200&fit=crop" alt="Accessories" />
            <h3>Accessories</h3>
            <p>Complete your look</p>
            <div className="clothing-features">
              <span>• Bags & Purses</span>
              <span>• Jewelry & Watches</span>
              <span>• Hats & Caps</span>
              <span>• Belts & Scarves</span>
            </div>
          </div>
          <div className="clothing-card animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=200&fit=crop" alt="Footwear" />
            <h3>Footwear</h3>
            <p>Perfect shoe fitting</p>
            <div className="clothing-features">
              <span>• Casual Shoes</span>
              <span>• Formal Shoes</span>
              <span>• Sports Shoes</span>
              <span>• Boots & Sandals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2 className="animate-on-scroll">Why Choose Our Virtual Try-On?</h2>
        <div className="benefits-content">
          <div className="benefits-grid">
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">70%</div>
              <p>Reduction in clothing returns</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">4x</div>
              <p>Increase in customer engagement</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">95%</div>
              <p>Fit prediction accuracy</p>
            </div>
          </div>
          <div className="benefits-features">
            <div className="feature-list animate-on-scroll">
              <h3>Customer Benefits</h3>
              <ul>
                <li>✓ Try before you buy confidence</li>
                <li>✓ Perfect fit guaranteed</li>
                <li>✓ Style recommendations</li>
                <li>✓ Save time and money</li>
                <li>✓ Discover new styles</li>
                <li>✓ Sustainable shopping</li>
              </ul>
            </div>
            <div className="feature-list animate-on-scroll">
              <h3>Business Benefits</h3>
              <ul>
                <li>✓ Dramatically reduce returns</li>
                <li>✓ Increase conversion rates</li>
                <li>✓ Enhance customer satisfaction</li>
                <li>✓ Reduce inventory costs</li>
                <li>✓ Gather valuable size data</li>
                <li>✓ Competitive advantage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <h2 className="animate-on-scroll">Experience Our Virtual Try-On Technology</h2>
        <div className="demo-options">
          <div className="demo-card animate-on-scroll">
            <div className="demo-icon">🛒</div>
            <h3>E-commerce Platform Demo</h3>
            <p>Experience our virtual try-on technology integrated into a complete e-commerce platform. Perfect for online fashion retailers and clothing brands.</p>
            <div className="demo-features">
              <span>• Full product catalog</span>
              <span>• Shopping cart integration</span>
              <span>• Size recommendation</span>
              <span>• Payment processing</span>
              <span>• Order management</span>
              <span>• Customer reviews</span>
            </div>
            <button className="demo-btn" onClick={() => window.open('https://demo-ecommerce-clothing.neura-ai.com', '_blank')}>
              Try E-commerce Demo
            </button>
          </div>
          <div className="demo-card animate-on-scroll">
            <div className="demo-icon">📱</div>
            <h3>Kiosk/Tablet Demo</h3>
            <p>Interactive kiosk experience optimized for retail stores, fitting rooms, and in-store customer engagement.</p>
            <div className="demo-features">
              <span>• Touch-optimized interface</span>
              <span>• Store inventory sync</span>
              <span>• Barcode scanning</span>
              <span>• Offline capabilities</span>
              <span>• Customer profiles</span>
              <span>• Analytics dashboard</span>
            </div>
            <button className="demo-btn" onClick={() => window.open('https://demo-kiosk-clothing.neura-ai.com', '_blank')}>
              Try Kiosk Demo
            </button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology">
        <h2 className="animate-on-scroll">Cutting-Edge Technology</h2>
        <div className="technology-grid">
          <div className="tech-card animate-on-scroll">
            <div className="tech-icon">🤖</div>
            <h3>AI & Machine Learning</h3>
            <p>Advanced algorithms for size prediction, style matching, and personalized recommendations.</p>
          </div>
          <div className="tech-card animate-on-scroll">
            <div className="tech-icon">📱</div>
            <h3>Augmented Reality</h3>
            <p>Real-time AR visualization for authentic try-on experiences across all devices.</p>
          </div>
          <div className="tech-card animate-on-scroll">
            <div className="tech-icon">🔍</div>
            <h3>3D Body Scanning</h3>
            <p>Precise body measurements and fit analysis using advanced 3D scanning technology.</p>
          </div>
          <div className="tech-card animate-on-scroll">
            <div className="tech-icon">☁️</div>
            <h3>Cloud Computing</h3>
            <p>Scalable cloud infrastructure ensuring fast processing and global accessibility.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content animate-on-scroll">
          <h2>Ready to Transform Your Fashion Business?</h2>
          <p>Join leading fashion brands using our virtual try-on technology to revolutionize customer experiences and reduce returns</p>
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

export default Dressing;
