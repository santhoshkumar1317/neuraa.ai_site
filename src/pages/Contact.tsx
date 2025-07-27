/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import BackgroundSlider from "../components/BackgroundSlider";
import { backgroundImages } from "../utils/backgroundImages";

/* -------------------------------------------------
   🔑  MAILGUN CREDENTIALS FROM ENVIRONMENT VARIABLES
   -------------------------------------------------*/
const MAILGUN_DOMAIN = import.meta.env.VITE_MAILGUN_DOMAIN;
const MAILGUN_API_KEY = import.meta.env.VITE_MAILGUN_API_KEY;
const DESTINATION_EMAIL = import.meta.env.VITE_DESTINATION_EMAIL;

const contact = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    agreeMarketing: false,
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required terms agreement
    if (!formData.agreeTerms) {
      alert(
        "Please agree to the Terms & Conditions and Privacy Policy to continue."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData for Mailgun API
      const mailgunData = new FormData();
      mailgunData.append(
        "from",
        "Neuraa AI Contact <noreply@sandbox3630f3a8da314fbda6c1f5b8252cc1f0.mailgun.org>"
      );
      mailgunData.append("to", DESTINATION_EMAIL);
      mailgunData.append(
        "subject",
        `New Contact Form Submission from ${formData.name}`
      );
      mailgunData.append("h:Reply-To", formData.email);
      mailgunData.append(
        "html",
        `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              border-radius: 12px; 
              overflow: hidden; 
              box-shadow: 0 8px 32px rgba(0,0,0,0.1); 
              background: white;
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 30px 20px; 
              text-align: center;
            }
            .header h2 { 
              margin: 0; 
              font-size: 24px; 
              font-weight: 600; 
            }
            .header p { 
              margin: 8px 0 0 0; 
              opacity: 0.9; 
              font-size: 14px; 
            }
            .content { 
              padding: 30px 20px; 
              background: #fafafa; 
            }
            .field { 
              margin-bottom: 20px; 
              background: white; 
              border-radius: 8px; 
              overflow: hidden; 
              box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            .label { 
              font-weight: 600; 
              color: #555; 
              background: #f8f9fa; 
              padding: 12px 16px; 
              border-bottom: 1px solid #e9ecef; 
              font-size: 14px;
            }
            .value { 
              padding: 16px; 
              word-wrap: break-word; 
              white-space: pre-wrap;
            }
            .value a { 
              color: #667eea; 
              text-decoration: none; 
            }
            .footer { 
              background: #2c3e50; 
              color: #ecf0f1; 
              padding: 20px; 
              text-align: center; 
              font-size: 12px; 
            }
            .footer p { 
              margin: 0; 
              opacity: 0.8; 
            }
            .timestamp { 
              margin-top: 8px; 
              font-weight: 500; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚀 New Contact Form Submission</h2>
              <p>Neuraa AI Website Contact Form</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Full Name</div>
                <div class="value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email Address</div>
                <div class="value"><a href="mailto:${formData.email}">${
          formData.email
        }</a></div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Company Name</div>
                <div class="value">${formData.company || "Not provided"}</div>
              </div>
              
              <div class="field">
                <div class="label">📱 Phone Number</div>
                <div class="value">${formData.phone || "Not provided"}</div>
              </div>
              
              <div class="field">
                <div class="label">🎯 Service Interested In</div>
                <div class="value">${formData.service}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Project Details & Message</div>
                <div class="value">${formData.message}</div>
              </div>
              
              <div class="field">
                <div class="label">📢 Marketing Communications</div>
                <div class="value">${
                  formData.agreeMarketing
                    ? "Yes, agreed to receive marketing communications"
                    : "No, declined marketing communications"
                }</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was automatically generated from the Neuraa AI contact form</p>
              <p class="timestamp">📅 Received: ${new Date().toLocaleString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                }
              )}</p>
            </div>
          </div>
        </body>
        </html>
      `
      );

      // Send email using Mailgun API with your real sandbox domain
      const response = await fetch(
        `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
          },
          body: mailgunData,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
          agreeMarketing: false,
          agreeTerms: false,
        });

        // Scroll to top of form to show success message
        document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
      } else {
        const errorData = await response.text();
        console.error("Mailgun error:", errorData);
        console.error("Response status:", response.status);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* Floating Side Navigation */}
      <div className="side-nav">
        <div
          className={`side-nav-item ${
            activeSection === "hero" ? "active" : ""
          }`}
          onClick={() => scrollToSection("hero")}
          title="Contact"
        >
          <span className="side-nav-icon">📞</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "form" ? "active" : ""
          }`}
          onClick={() => scrollToSection("form")}
          title="Contact Form"
        >
          <span className="side-nav-icon">📝</span>
        </div>
        {/* <div
          className={`side-nav-item ${
            activeSection === "offices" ? "active" : ""
          }`}
          onClick={() => scrollToSection("offices")}
          title="Our Offices"
        >
          <span className="side-nav-icon">🏢</span>
        </div> */}
        <div
          className={`side-nav-item ${activeSection === "faq" ? "active" : ""}`}
          onClick={() => scrollToSection("faq")}
          title="FAQ"
        >
          <span className="side-nav-icon">❓</span>
        </div>
        <div
          className={`side-nav-item ${
            activeSection === "support" ? "active" : ""
          }`}
          onClick={() => scrollToSection("support")}
          title="Support"
        >
          <span className="side-nav-icon">🛠️</span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <BackgroundSlider images={backgroundImages.contact} />
        <div className="hero-content animate-on-scroll">
          <div className="hero-text">
            <h1>
              Get In Touch With <span className="highlight">Neuraa AI</span>
            </h1>
            <h2>Let's Transform Your Business Together</h2>
            <p>
              Ready to revolutionize your e-commerce experience? Our team of AI
              experts is here to help you implement cutting-edge virtual try-on
              technology and reduce return rates by up to 50%.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">&lt;24hrs</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <h2 className="animate-on-scroll">Multiple Ways to Reach Us</h2>
        <div className="methods-grid">
          <div className="method-card animate-on-scroll">
            <div className="method-icon">📧</div>
            <h3>Email Support</h3>
            <p>
              Get detailed responses to your technical questions and
              implementation needs.
            </p>
            <div className="method-details">
              <span>General: info@neuraa.ai</span>
              <span>Technical: support@neuraa.ai</span>
              <span>Sales: sales@neuraa.ai</span>
            </div>
          </div>
          <div className="method-card animate-on-scroll">
            <div className="method-icon">📱</div>
            <h3>Phone & Video Calls</h3>
            <p>
              Schedule a direct consultation with our AI specialists for
              immediate assistance.
            </p>
            <div className="method-details">
              <span>US: +1 (555) 123-4567</span>
              <span>UK: +44 20 7123 4567</span>
              <span>India: +91 98765 43210</span>
            </div>
          </div>
          <div className="method-card animate-on-scroll">
            <div className="method-icon">💬</div>
            <h3>Live Chat</h3>
            <p>
              Instant support for quick questions and real-time assistance
              during business hours.
            </p>
            <div className="method-details">
              <span>Available: Mon-Fri 9AM-6PM EST</span>
              <span>Response: Within 5 minutes</span>
              <span>Languages: English, Spanish, French</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" className="contact-form-section">
        <div className="form-container">
          <div className="form-header animate-on-scroll">
            <h2>Send Us a Message</h2>
            <p>
              Tell us about your project and we'll get back to you with a
              customized solution
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="status-message success-message animate-on-scroll">
              <div className="status-icon">✅</div>
              <div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for your inquiry! We will get back to you within 24
                  hours.
                </p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="status-message error-message animate-on-scroll">
              <div className="status-icon">❌</div>
              <div>
                <h3>Failed to Send Message</h3>
                <p>
                  There was an error sending your message. Please try again or
                  contact us directly at neuraa2025@gmail.com
                </p>
              </div>
            </div>
          )}

          <form
            className="contact-form animate-on-scroll"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interested In *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                <option value="virtual-tryon">Virtual Try-On Technology</option>
                <option value="ai-mirror">Smart Mirror Solutions</option>
                <option value="ecommerce-integration">
                  E-commerce Integration
                </option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="custom-ai">Custom AI Model Training</option>
                <option value="consultation">Free Consultation</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Tell us about your project, requirements, timeline, and any specific challenges you're facing..."
                disabled={isSubmitting}
              />
            </div>
            <div className="form-checkboxes">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <span className="checkbox-text">
                  I agree to receive marketing communications from Neuraa AI
                  about product updates and industry insights.
                </span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <span className="checkbox-text">
                  I have read and agree to the{" "}
                  <a href="/terms">Terms & Conditions</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>. *
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <h2 className="animate-on-scroll">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item animate-on-scroll">
            <h3>How long does implementation take?</h3>
            <p>
              Typical implementation ranges from 2-8 weeks depending on
              complexity. Simple e-commerce integrations can be completed in 2-3
              weeks, while custom enterprise solutions may take 6-8 weeks
              including testing and optimization.
            </p>
          </div>
          <div className="faq-item animate-on-scroll">
            <h3>What platforms do you support?</h3>
            <p>
              We support all major e-commerce platforms including Shopify,
              WooCommerce, Magento, BigCommerce, as well as custom-built
              solutions. Our APIs work with iOS, Android, and web applications.
            </p>
          </div>
          <div className="faq-item animate-on-scroll">
            <h3>Do you offer free trials?</h3>
            <p>
              Yes! We offer a 30-day free trial with up to 1,000 virtual try-on
              sessions. This allows you to test our technology with your
              products and measure the impact on your conversion rates.
            </p>
          </div>
          <div className="faq-item animate-on-scroll">
            <h3>How accurate is the virtual try-on technology?</h3>
            <p>
              Our AI models achieve 95%+ accuracy in size recommendations and
              fit predictions. We continuously train our models with new data to
              improve accuracy for different body types and product categories.
            </p>
          </div>
          <div className="faq-item animate-on-scroll">
            <h3>What kind of ROI can I expect?</h3>
            <p>
              Our clients typically see 25-50% increase in conversion rates,
              30-60% reduction in return rates, and 15-35% increase in average
              order value within the first 3 months of implementation.
            </p>
          </div>
          <div className="faq-item animate-on-scroll">
            <h3>Is my customer data secure?</h3>
            <p>
              Absolutely. We follow enterprise-grade security standards
              including SOC 2 compliance, GDPR compliance, and end-to-end
              encryption. Customer data is never stored longer than necessary
              for processing.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section id="support" className="support">
        <h2 className="animate-on-scroll">Technical Support & Resources</h2>
        <div className="support-grid">
          <div className="support-card animate-on-scroll">
            <div className="support-icon">📚</div>
            <h3>Documentation</h3>
            <p>
              Comprehensive guides, API references, and integration tutorials to
              help you get started quickly.
            </p>
            <ul>
              <li>Quick Start Guide</li>
              <li>API Documentation</li>
              <li>SDK References</li>
              <li>Best Practices</li>
            </ul>
            <button className="support-btn">View Docs</button>
          </div>
          <div className="support-card animate-on-scroll">
            <div className="support-icon">🔧</div>
            <h3>Technical Support</h3>
            <p>
              Direct access to our engineering team for troubleshooting and
              optimization assistance.
            </p>
            <ul>
              <li>24/7 Emergency Support</li>
              <li>Dedicated Support Manager</li>
              <li>Performance Monitoring</li>
              <li>Regular Health Checks</li>
            </ul>
            <button className="support-btn">Contact Support</button>
          </div>
          <div className="support-card animate-on-scroll">
            <div className="support-icon">💼</div>
            <h3>Professional Services</h3>
            <p>
              Expert consulting and custom development services to extend our
              platform for your unique needs.
            </p>
            <ul>
              <li>Custom Integration</li>
              <li>AI Model Customization</li>
              <li>Performance Optimization</li>
              <li>Strategic Consulting</li>
            </ul>
            <button className="support-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content animate-on-scroll">
          <h2>Ready to Get Started?</h2>
          <p>
            Join hundreds of leading brands using Neuraa AI to transform their
            customer experience
          </p>
          <div className="cta-buttons">
            <button
              className="cta-primary"
              onClick={() => scrollToSection("form")}
            >
              Start Free Trial
            </button>
            <button className="cta-secondary">Schedule Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
