import { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/select.module.scss";

interface SelectOptions {
  options: string[];
  width?: number;
  colorScheme?: string;
  className?: string;
  getValue: (value: string) => void;
}

const Select: React.FC<SelectOptions> = (props) => {
  const { options, width, colorScheme, getValue } = props;
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Select...");

  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    getValue(option);
  };

  const handleClickOutside = (e: any) => {
    if (null !== ref.current)
      if (!ref.current.contains(e.target)) {
        setToggleSelect(false);
      }
  };

  useEffect(() => {
    handleClickOutside;
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className={styles.select} ref={ref}>
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
                key={item}
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
