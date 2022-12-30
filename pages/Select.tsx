import { useState } from "react";
import Select from "../components/select/Select";
import btn from "../styles/components/btn.module.scss";
import layout from "../styles/components/layout.module.scss";

const SelectPage = () => {
  const [showText, setShowText] = useState({ description: true, usage: false });

  const handleText = (option: string) => {
    if (option === "description") {
      setShowText({ description: true, usage: false });
    } else {
      setShowText({ description: false, usage: true });
    }
  };
  return (
    <main>
      <header>
        <h1>Custom Select Component</h1>
        <div className={layout.container}>
          <button
            className={`${btn.btn} ${btn.btn__primary}`}
            onClick={() => handleText("description")}
          >
            Description
          </button>
          <button
            className={`${btn.btn} ${btn.btn__primary}`}
            onClick={() => handleText("usage")}
          >
            Usage
          </button>
        </div>
        {showText.description && <p>Some description</p>}
        {showText.usage && <p>Some usage</p>}
      </header>
      <Select
        options={["Option1", "option2", "Something", "Something2"]}
        width={200}
      />
    </main>
  );
};

export default SelectPage;
