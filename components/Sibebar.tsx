import Link from "next/link";
import styles from "../styles/components/sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href={"/Select"}>Select</Link>
        </li>
        <li>
          <Link href={"/Toast"}>Toast</Link>
        </li>
        <li>
          <Link href={"/Calendar"}>Calendar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
