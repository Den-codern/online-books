import { LayoutProps } from "./layout.props";
import styles from "./Layout.module.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.slider} />
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;
