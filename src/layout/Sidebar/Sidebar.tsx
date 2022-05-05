import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "clsx";
import Genre from "../../component/Genre/Genre";
function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <ul className={styles.categories}>
        <Genre name="Horror" count={232} />
        <Genre name="Action" count={22} />
      </ul>
    </div>
  );
}
export default Sidebar;
