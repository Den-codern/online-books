import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { useLocation } from "react-router-dom";
import cn from "clsx";
function Header({ className, ...props }: HeaderProps) {
  const location = useLocation();

  return (
    <div className={cn(className, styles.header)} {...props}>
      <div className={styles.icon}>
        <ImBook size={70} color="var(--wt)" />
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link
              className={cn(styles.link, {
                [styles.active]: location.pathname === "/",
              })}
              to="/"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              className={cn(styles.link, {
                [styles.active]: location.pathname === "/add",
              })}
              to="/add"
            >
              New Book
            </Link>
          </li>
          <li>
            <Link
              className={cn(styles.link, {
                [styles.active]: location.pathname === "/favorite",
              })}
              to="/favorite"
            >
              Wish list
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
