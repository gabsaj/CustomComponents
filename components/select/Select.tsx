import { useState } from "react";
import styles from "../../styles/components/select.module.scss";

interface SelectOptions {
  options: string[];
  width?: number;
  colorScheme?: string;
}

const Select: React.FC<SelectOptions> = (props) => {
  const { options, width, colorScheme } = props;
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Select...");

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <div className={styles.select}>
      <div
        className={styles.select__bar}
        onClick={() => setToggleSelect(!toggleSelect)}
        style={{ width: width, backgroundColor: colorScheme }}
      >
        {selected}
        {toggleSelect && (
          <ul style={{ border: `1px solid ${colorScheme}`, borderTop: "none" }}>
            {options.map((item) => (
              <li
                onClick={() => handleSelect(item)}
                style={{ borderTop: `1px solid ${colorScheme}` }}
              >
                {item}
              </li>
            ))}
            <li></li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Select;
