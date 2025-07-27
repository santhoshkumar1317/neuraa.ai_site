import { useState, useEffect } from "react";
import "../styles/Home.css";
import BackgroundSlider from "../components/BackgroundSlider";
import { backgroundImages } from "../utils/backgroundImages";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-slide-in-left, .animate-slide-in-right"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      {/* Floating Side Navigation */}
      <div className="side-nav">
        <div
          className={`side-nav-item ${
            activeSection === "hero" ? "active" : ""
          }`}
          onClick={() => scrollToSection("hero")}
          title="Hero"
        >
          <span className="side-nav-icon">🏠</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "features" ? "active" : ""
          }`}
          onClick={() => scrollToSection("features")}
          title="Features"
        >
          <span className="side-nav-icon">✨</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "benefits" ? "active" : ""
          }`}
          onClick={() => scrollToSection("benefits")}
          title="Benefits"
        >
          <span className="side-nav-icon">📊</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "why-choose" ? "active" : ""
          }`}
          onClick={() => scrollToSection("why-choose")}
          title="Why Choose"
        >
          <span className="side-nav-icon">💡</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "integration" ? "active" : ""
          }`}
          onClick={() => scrollToSection("integration")}
          title="Integration"
        >
          <span className="side-nav-icon">🔗</span>
        </div>
      
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <BackgroundSlider images={backgroundImages.home} />
        <div className="hero-content animate-on-scroll">
          <div className="hero-text">
            <h1>
              Welcome to <span className="highlight">Neuraa AI</span>
            </h1>
            <h2>AI Visual Solution Platform</h2>
            <p>
              Transform your business with cutting-edge AI technology for
              fashion, beauty, and lifestyle. Experience the future of virtual
              try-on, smart mirrors, and personalized customer experiences.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">AI Models</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
            <button className="cta-button">Request Demo</button>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features">
        <div className="features-header animate-on-scroll">
          <h2>Our AI-Powered Solutions</h2>
          <p>
            Discover how Neura AI revolutionizes the way customers interact with
            fashion, beauty, and lifestyle products
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=200&fit=crop"
              alt="Modern Wear AI"
            />
            <h3>Modern Wear Virtual Try-On</h3>
            <p>
              Experience the future of fashion with our AI-powered virtual
              try-on technology. See how clothes fit and look on you without
              physically trying them on.
            </p>
            <div className="feature-icon">👔</div>

            <div className="feature-highlights">
              <span>✓ Real-time fitting</span>
              <span>✓ Size recommendations</span>
              <span>✓ Style matching</span>
            </div>
            <button className="feature-btn">Try it now</button>
          </div>
          <div className="feature-card animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=300&h=200&fit=crop"
              alt="Traditional Wear AI"
            />
            <h3>Traditional Wear Collection</h3>
            <p>
              Celebrate cultural heritage with our traditional wear collection.
              AI-powered styling suggestions and virtual draping for ethnic
              outfits.
            </p>
            <div className="feature-icon">🥻</div>

            <div className="feature-highlights">
              <span>✓ Cultural authenticity</span>
              <span>✓ Custom tailoring</span>
              <span>✓ Style guidance</span>
            </div>
            <button className="feature-btn">Try it now</button>
          </div>
          <div className="feature-card animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop"
              alt="Beauty AI Solutions"
            />
            <h3>Beauty & Skincare AI</h3>
            <p>
              Transform your beauty routine with AI-powered skin analysis,
              makeup try-on, and personalized product recommendations to make
              out best version of you.
            </p>
            <div className="feature-icon">💄</div>

            <div className="feature-highlights">
              <span>✓ Skin analysis</span>
              <span>✓ Makeup simulation</span>
              <span>✓ Product matching</span>
            </div>
            <button className="feature-btn">Try it now</button>
          </div>
          <div className="feature-card animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=200&fit=crop"
              alt="Hair Styling AI"
            />
            <h3>AI Hair Styling Studio</h3>
            <p>
              Discover your perfect hairstyle with our AI-powered hair styling
              solutions. Virtual hair color, cut simulations, and style
              recommendations.
            </p>
            <div className="feature-icon">💇</div>

            <div className="feature-highlights">
              <span>✓ Hair color preview</span>
              <span>✓ Style simulation</span>
              <span>✓ Face shape analysis</span>
            </div>
            <button className="feature-btn">Try it now</button>
          </div>
          <div className="feature-card animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop"
              alt="Smart Mirror Technology"
            />
            <h3>Smart Mirror Technology</h3>
            <p>
              Experience the future of retail with our AI-powered smart mirrors.
              Interactive displays with virtual try-on and personalized
              recommendations.
            </p>
            <div className="feature-icon">🪞</div>

            <div className="feature-highlights">
              <span>✓ Interactive display</span>
              <span>✓ Gesture control</span>
              <span>✓ Real-time analysis</span>
            </div>
            <button className="feature-btn">Try it now</button>
          </div>
          <div className="feature-card animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
              alt="Facial Analysis AI"
            />
            <h3>Advanced Face Analysis</h3>
            <p>
              Cutting-edge facial recognition and analysis technology for beauty
              enhancement, age progression, and personalized recommendations.
            </p>
            <div className="feature-icon">🤖</div>

            <div className="feature-highlights">
              <span>✓ Facial recognition</span>
              <span>✓ Beauty scoring</span>
              <span>✓ Age analysis</span>
            </div>
            <button className="feature-btn">Try it now</button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2 className="animate-on-scroll">
          How Our Solutions Benefit Our Partners
        </h2>
        <div className="benefits-content">
          <div className="benefits-grid">
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">48%</div>
              <p>Average increase in basket size</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">2.5x</div>
              <p>Increase in conversion rate</p>
            </div>
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-number">12%</div>
              <p>Decrease in product return rate</p>
            </div>
          </div>
          <div className="mission-section animate-on-scroll">
            <h3>Our Mission: Reducing Product Returns</h3>
            <p>
              At Neura AI, we're committed to solving one of e-commerce's
              biggest challenges - product returns. Our AI-powered virtual
              try-on technology helps customers make confident purchasing
              decisions, reducing return rates and increasing customer
              satisfaction.
            </p>
            <div className="mission-features">
              <div className="mission-item">
                <span className="mission-icon">🎯</span>
                <span>95% accurate size recommendations</span>
              </div>
              <div className="mission-item">
                <span className="mission-icon">📊</span>
                <span>Real-time fit analysis</span>
              </div>
              <div className="mission-item">
                <span className="mission-icon">💡</span>
                <span>AI-powered style suggestions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="why-choose">
        <h2 className="animate-on-scroll">Why Neura AI?</h2>
        <div className="why-grid">
          <div className="why-item animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
              alt="User Experience"
            />
            <h3>User Experience</h3>
            <p>
              Our design team combines technology with creativity to create an
              impactful user experience
            </p>
          </div>
          <div className="why-item animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
              alt="Free Support"
            />
            <h3>Free Support</h3>
            <p>
              Be it a bug fix, or adding a new shade or style, our support team
              is always available at your request
            </p>
          </div>
          <div className="why-item animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
              alt="Affordable Pricing"
            />
            <h3>Affordable Pricing</h3>
            <p>
              We want to democratize AI so that every brand can utilize it and
              deliver value to their customers
            </p>
          </div>
        </div>
      </section>

      {/* Omnichannel Deployment Section */}
      <section id="integration" className="integration">
        <div className="integration-header animate-on-scroll">
          <h2>Omnichannel Deployment</h2>
          <p>
            Easily integrates with your website, mobile app, digital kiosk, and
            smart mirror
          </p>
        </div>
        <div className="omnichannel-container">
          <div className="omnichannel-row-1">
            <div className="channel-item animate-slide-in-left">
              <div className="channel-icon">🌐</div>
              <h3>Web</h3>
              <p>Seamless integration with your website and web applications</p>
            </div>
            <div className="channel-item animate-on-scroll">
              <div className="channel-icon">📱</div>
              <h3>Android</h3>
              <p>Native Android app integration with full SDK support</p>
            </div>
            <div className="channel-item animate-slide-in-right">
              <div className="channel-icon">🍎</div>
              <h3>iOS</h3>
              <p>Optimized for iOS devices with smooth performance</p>
            </div>
          </div>
          <div className="omnichannel-row-2">
            <div className="channel-item animate-slide-in-left">
              <div className="channel-icon">🪞</div>
              <h3>Smart Mirror</h3>
              <p>Interactive smart mirror solutions for retail environments</p>
            </div>
            <div className="channel-item animate-slide-in-right">
              <div className="channel-icon">🏬</div>
              <h3>Kiosk</h3>
              <p>Digital kiosk integration for enhanced customer experience</p>
            </div>
          </div>
        </div>

        <div className="integration-features">
          <div className="integration-item animate-on-scroll">
            <div className="integration-icon">⚡</div>
            <h3>Easy To Integrate Cross-platform API</h3>
            <p>
              Plug-and-play API integration that works across all platforms with
              minimal setup time
            </p>
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
              alt="API Integration"
            />
          </div>
          <div className="integration-item animate-on-scroll">
            <div className="integration-icon">🚀</div>
            <h3>Fast And Lightweight SDK For Optimal Performance</h3>
            <p>
              Optimized SDK that delivers lightning-fast performance without
              compromising on features
            </p>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
              alt="SDK Performance"
            />
          </div>
          <div className="integration-item animate-on-scroll">
            <div className="integration-icon">💰</div>
            <h3>Accelerate Conversions On Your E-commerce Store</h3>
            <p>
              Proven to increase conversion rates and reduce return rates for
              e-commerce businesses
            </p>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
              alt="E-commerce Integration"
            />
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
