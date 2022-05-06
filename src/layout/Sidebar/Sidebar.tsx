import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "clsx";
import Genre from "../../component/Genre/Genre";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

function Sidebar({ className, ...props }: SidebarProps) {
  const genres = useSelector((state: RootState) => state.book.genres);
  console.log(genres);

  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <ul className={styles.categories}>
        {genres.map((item) => {
          return <Genre name={item.name} count={item.count}/>;
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
