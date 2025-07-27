import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/components_styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const productOptions = [
    {
      name: "Cloth Virtual Try-On",
      description:
        "Experience virtual clothing fitting with AI-powered technology.",
      path: "/products/dressing",
    },
    {
      name: "Beauty",
      description: "Explore our range of premium skincare and makeup products.",
      path: "/products/beauty",
    },
    {
      name: "Hair Style",
      description: "Discover professional haircare and styling solutions.",
      path: "/products/hairstyle",
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarGlass}>
        <div className={styles.container}>
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

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              Home
            </NavLink>

            <div
              className={styles.navLinkContainer}
              onMouseEnter={toggleModal}
              onMouseLeave={toggleModal}
            >
              <button
                onClick={toggleModal}
                className={`${styles.navLink} ${
                  isModalOpen ? styles.active : ""
                }`}
              >
                Products
              </button>
              {isModalOpen && (
                <div className={styles.productModal}>
                  {productOptions.map((option) => (
                    <NavLink
                      key={option.name}
                      to={option.path}
                      className={styles.modalLink}
                      onClick={toggleModal}
                    >
                      <span className={styles.modalTitle}>{option.name}</span>
                      <p className={styles.modalDescription}>
                        {option.description}
                      </p>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              Contact us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={styles.mobileToggle}
            aria-label="Toggle menu"
          >
            <svg
              className={styles.toggleIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={styles.mobileMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>

              <div className={styles.navLinkContainer}>
                <button
                  onClick={toggleModal}
                  className={`${styles.navLink} ${
                    isModalOpen ? styles.active : ""
                  }`}
                >
                  Products
                </button>
                {isModalOpen && (
                  <div className={styles.productModal}>
                    {productOptions.map((option) => (
                      <NavLink
                        key={option.name}
                        to={option.path}
                        className={styles.modalLink}
                        onClick={() => {
                          toggleModal();
                          toggleMenu();
                        }}
                      >
                        <span className={styles.modalTitle}>{option.name}</span>
                        <p className={styles.modalDescription}>
                          {option.description}
                        </p>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
              
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
