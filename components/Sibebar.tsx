import Link from "next/link";
import styles from "../styles/components/sidebar.module.scss";
import { routes } from "../constants/Routes";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {routes.map((item: string) => (
          <li>
            <Link href={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
