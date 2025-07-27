import { useState, useEffect } from "react";
import "../styles/About.css";
import BackgroundSlider from "../components/BackgroundSlider";
import { backgroundImages } from "../utils/backgroundImages";

const About = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollY >= sectionTop - 100 &&
          scrollY < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(sectionId || "");
        }
      });

      // Animate elements on scroll
      const animateElements = document.querySelectorAll(".animate-on-scroll");
      animateElements.forEach((element) => {
        const elementTop = (element as HTMLElement).offsetTop;
        const elementHeight = (element as HTMLElement).offsetHeight;
        const windowHeight = window.innerHeight;

        if (scrollY + windowHeight > elementTop + elementHeight / 4) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about">
      {/* Floating Side Navigation */}
      <div className="side-nav">
        <div
          className={`side-nav-item ${
            activeSection === "hero" ? "active" : ""
          }`}
          onClick={() => scrollToSection("hero")}
          title="About"
        >
          <span className="side-nav-icon">🏢</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "mission" ? "active" : ""
          }`}
          onClick={() => scrollToSection("mission")}
          title="Mission"
        >
          <span className="side-nav-icon">🎯</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "team" ? "active" : ""
          }`}
          onClick={() => scrollToSection("team")}
          title="Team"
        >
          <span className="side-nav-icon">👥</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "services" ? "active" : ""
          }`}
          onClick={() => scrollToSection("services")}
          title="Services"
        >
          <span className="side-nav-icon">🔧</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "values" ? "active" : ""
          }`}
          onClick={() => scrollToSection("values")}
          title="Values"
        >
          <span className="side-nav-icon">💎</span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <BackgroundSlider images={backgroundImages.about} />
        <div className="hero-content animate-on-scroll">
          <div className="hero-text">
            <h1>
              About <span className="highlight">Neuraa AI</span>
            </h1>
            <h2>Transforming E-commerce with AI Innovation</h2>
            <p>
              Founded in 2020, Neura AI is revolutionizing the way customers
              shop online by leveraging cutting-edge artificial intelligence to
              create immersive, personalized shopping experiences that bridge
              the gap between physical and digital retail.
            </p>
            <div className="company-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15M+</div>
                <div className="stat-label">Users Impacted</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="mission">
        <div className="mission-content">
          <div className="mission-item animate-on-scroll">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To eliminate the uncertainty in online shopping by providing
              customers with AI-powered tools that let them virtually try
              products before purchasing, significantly reducing return rates
              and increasing customer satisfaction.
            </p>
          </div>
          <div className="mission-item animate-on-scroll">
            <div className="mission-icon">🔮</div>
            <h3>Our Vision</h3>
            <p>
              To become the global leader in AI-powered retail solutions, making
              every online shopping experience as confident and satisfying as
              shopping in person.
            </p>
          </div>
          <div className="mission-item animate-on-scroll">
            <div className="mission-icon">⚡</div>
            <h3>Our Goal</h3>
            <p>
              Reduce global e-commerce return rates by 50% through intelligent
              virtual try-on technology and personalized product
              recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="team">
        <h2 className="animate-on-scroll">Meet Our Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Dr. Sarah Chen"
            />
            <h3>Dr. Sarah Chen</h3>
            <p className="team-role">Chief Executive Officer & Co-Founder</p>
            <p className="team-bio">
              Former AI researcher at Google DeepMind with 15+ years in computer
              vision and machine learning. PhD in Computer Science from MIT.
            </p>
            <div className="team-achievements">
              <span>• 50+ Published Papers</span>
              <span>• TEDx Speaker</span>
              <span>• Forbes 30 Under 30</span>
            </div>
          </div>
          <div className="team-member animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b9a24b3e?w=300&h=300&fit=crop&crop=face"
              alt="Maria Rodriguez"
            />
            <h3>Maria Rodriguez</h3>
            <p className="team-role">Chief Technology Officer & Co-Founder</p>
            <p className="team-bio">
              Former Lead Engineer at Apple's AR/VR division. Expert in
              real-time 3D rendering and mobile optimization.
            </p>
            <div className="team-achievements">
              <span>• 12 Patents Filed</span>
              <span>• Ex-Apple Engineer</span>
              <span>• Stanford MS CS</span>
            </div>
          </div>
          <div className="team-member animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
              alt="James Wilson"
            />
            <h3>James Wilson</h3>
            <p className="team-role">VP of Engineering</p>
            <p className="team-bio">
              Full-stack architect with expertise in scalable systems and cloud
              infrastructure. Previously at Netflix and Spotify.
            </p>
            <div className="team-achievements">
              <span>• 20+ Years Experience</span>
              <span>• Ex-Netflix Engineer</span>
              <span>• System Architecture Expert</span>
            </div>
          </div>
          <div className="team-member animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
              alt="Dr. Priya Patel"
            />
            <h3>Dr. Priya Patel</h3>
            <p className="team-role">Head of Data Science</p>
            <p className="team-bio">
              PhD in Machine Learning from Carnegie Mellon. Specializes in
              fashion analytics and consumer behavior prediction.
            </p>
            <div className="team-achievements">
              <span>• CMU PhD</span>
              <span>• 30+ ML Models</span>
              <span>• Fashion Tech Expert</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2 className="animate-on-scroll">Our Comprehensive Services</h2>
        <div className="services-grid">
          <div className="service-card animate-on-scroll">
            <div className="service-icon">🛒</div>
            <h3>E-commerce Platform Integration</h3>
            <p>
              Seamlessly integrate our AI-powered virtual try-on technology into
              your existing e-commerce platform. Support for Shopify,
              WooCommerce, Magento, and custom solutions.
            </p>
            <ul>
              <li>One-click integration</li>
              <li>Custom API development</li>
              <li>24/7 technical support</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          <div className="service-card animate-on-scroll">
            <div className="service-icon">📱</div>
            <h3>Mobile App Development</h3>
            <p>
              Custom mobile applications with built-in AI features for iOS and
              Android. Native performance with cross-platform compatibility.
            </p>
            <ul>
              <li>Native iOS & Android apps</li>
              <li>AR/VR integration</li>
              <li>Real-time try-on features</li>
              <li>Cloud synchronization</li>
            </ul>
          </div>
          <div className="service-card animate-on-scroll">
            <div className="service-icon">📊</div>
            <h3>Project Management Solutions</h3>
            <p>
              End-to-end project management from concept to deployment. Agile
              methodology with regular updates and transparent communication.
            </p>
            <ul>
              <li>Agile project management</li>
              <li>Regular sprint reviews</li>
              <li>Dedicated project managers</li>
              <li>Timeline optimization</li>
            </ul>
          </div>
          {/* <div className="service-card animate-on-scroll">
            <div className="service-icon">🎨</div>
            <h3>Custom AI Model Training</h3>
            <p>Develop custom AI models tailored to your specific products and customer base. Continuous learning and improvement capabilities.</p>
            <ul>
              <li>Custom dataset creation</li>
              <li>Model fine-tuning</li>
              <li>Performance monitoring</li>
              <li>Continuous updates</li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* Company Values */}
      <section id="values" className="values">
        <h2 className="animate-on-scroll">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item animate-on-scroll">
            <div className="value-icon">🎯</div>
            <h3>Innovation First</h3>
            <p>
              We constantly push the boundaries of what's possible with AI
              technology, staying ahead of industry trends and customer needs.
            </p>
          </div>
          <div className="value-item animate-on-scroll">
            <div className="value-icon">🤝</div>
            <h3>Customer Success</h3>
            <p>
              Our clients' success is our success. We provide comprehensive
              support and continuously improve our solutions based on feedback.
            </p>
          </div>
          <div className="value-item animate-on-scroll">
            <div className="value-icon">🔒</div>
            <h3>Privacy & Security</h3>
            <p>
              We implement enterprise-grade security measures and respect user
              privacy in all our AI-powered solutions.
            </p>
          </div>
          <div className="value-item animate-on-scroll">
            <div className="value-icon">🌍</div>
            <h3>Global Impact</h3>
            <p>
              We aim to make a positive impact on the global e-commerce
              ecosystem by reducing waste and improving customer satisfaction.
            </p>
          </div>
          <div className="value-item animate-on-scroll">
            <div className="value-icon">⚡</div>
            <h3>Agility & Excellence</h3>
            <p>
              We embrace rapid adaptation and maintain the highest standards in
              everything we do, from code quality to customer service delivery.
            </p>
          </div>
          <div className="value-item animate-on-scroll">
            <div className="value-icon">🚀</div>
            <h3>Collaborative Growth</h3>
            <p>
              We believe in the power of teamwork and partnerships, fostering an
              environment where innovation thrives through collective expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="timeline">
        <h2 className="animate-on-scroll">Our Journey & Roadmap</h2>
        <div className="timeline-content">
          <div className="timeline-item animate-on-scroll">
            <div className="timeline-year">2024</div>
            <div className="timeline-content-item">
              <h3>R&D Foundation</h3>
              <p>
                Intensive research and development phase focusing on advanced AI
                algorithms and virtual try-on technologies for next-generation
                e-commerce solutions.
              </p>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <div className="timeline-year">2025</div>
            <div className="timeline-content-item">
              <h3>Product Development & First Trials</h3>
              <p>
                Complete core product development and launch beta trials with
                select partners to refine our AI-powered virtual shopping
                experience.
              </p>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <div className="timeline-year">2026</div>
            <div className="timeline-content-item">
              <h3>Local Market Launch & E-commerce Integration</h3>
              <p>
                Official product launch in domestic markets with localized
                features and strategic partnerships with regional e-commerce
                platforms. Begin comprehensive integration with major online
                retailers.
              </p>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <div className="timeline-year">2027</div>
            <div className="timeline-content-item">
              <h3>Global Expansion</h3>
              <p>
                Scale internationally across North America, Europe, and
                Asia-Pacific regions, establishing Neura AI as a leading virtual
                try-on solution provider worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
