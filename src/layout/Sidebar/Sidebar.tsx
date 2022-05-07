import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "clsx";
import Genre from "../../component/Genre/Genre";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useLocation } from "react-router-dom";

function Sidebar({ className, ...props }: SidebarProps) {
  const genres = useSelector((state: RootState) => state.book.genres);
  const location = useLocation();

  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      {location.pathname !== "/add" ? (
        <ul className={styles.categories}>
          <div className={styles.name}>Все жанры книг :</div>
          {genres.map((item) => {
            return (
              <Genre key={Math.random()} name={item.name} count={item.count} />
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
export default Sidebar;
