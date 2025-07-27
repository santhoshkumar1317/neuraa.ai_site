import { NavLink } from "react-router-dom";
import styles from "../styles/components_styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <NavLink to="/" className={styles.logo}>
              <svg
                className={styles.logoIcon}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Neuraa.ai</span>
            </NavLink>
            <p className={styles.tagline}>
              Your one-stop shop for fashion and beauty.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.navSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <NavLink to="/products/modern-wear" className={styles.footerLink}>
              Modern Wear
            </NavLink>
            <NavLink to="/products/traditional" className={styles.footerLink}>
              Traditional
            </NavLink>
            <NavLink to="/products/beauty" className={styles.footerLink}>
              Beauty
            </NavLink>
            <NavLink to="/products/hairstyle" className={styles.footerLink}>
              Hair Style
            </NavLink>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <p className={styles.contactInfo}>Email: support@neuraa.ai</p>
            <p className={styles.contactInfo}>Phone: +1 (555) 987-6543</p>
            <p className={styles.contactInfo}>
              Address: 456 AI Avenue, Tech City
            </p>
          </div>

          {/* Social Media */}
          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg
                  className={styles.socialIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <svg
                  className={styles.socialIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482 13.944 13.944 0 01-10.141-5.132 4.916 4.916 0 001.523 6.557 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.917 4.917 0 004.6 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209-.005-.418-.014-.626a9.816 9.816 0 002.421-2.504z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg
                  className={styles.socialIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.148 3.252-1.691 4.771-4.919 4.919-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.069-4.849c.148-3.252 1.691-4.771 4.919-4.919 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.072 1.689-.072 4.948s.014 3.667.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.948-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.948c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} NEURAA.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
