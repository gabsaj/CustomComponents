import { useState } from "react";
import styles from "../../styles/components/select.module.scss";

interface SelectOptions {
  options: string[];
}

const Select: React.FC<SelectOptions> = (props) => {
  const { options } = props;
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);
  return (
    <div className={styles.select}>
      <div
        className={styles.select__bar}
        onClick={() => setToggleSelect(!toggleSelect)}
      >
        Select...
        {toggleSelect && (
          <ul>
            {options.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Select;
