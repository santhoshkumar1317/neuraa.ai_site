import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../styles/layout_styles/Layout.module.css";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
