import { useState } from "react";
import Select from "../components/select/Select";
import btn from "../styles/components/btn.module.scss";
import layout from "../styles/components/layout.module.scss";

const SelectPage = () => {
  const [showText, setShowText] = useState({ description: true, usage: false });
  const [savedVal, setSavedVal] = useState<string>("");

  const handleText = (option: string) => {
    if (option === "description") {
      setShowText({ description: true, usage: false });
    } else {
      setShowText({ description: false, usage: true });
    }
  };

  const getValue = (value: string) => {
    setSavedVal(value);
  };

  console.log(savedVal);

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
        {showText.description && (
          <p>
            This Select component that has general functions of a select; user
            is able to add custom className to it as well as add a preset style
            that changes it's borders and selected option color.
          </p>
        )}
        {showText.usage && (
          <p>
            This Select Component can simply be implemented just by adding
            possible options in a <b>options</b> prop. Options are mapped in a
            dropdown and you can pass it's value with <b>getValue</b> prop.
            Width prop sets the component width, and is 150px minimum by
            default.
          </p>
        )}
      </header>
      <Select
        options={[
          "Option1",
          "Option2",
          "Option3",
          "Option4",
          "Option5",
          "Option6",
        ]}
        width={200}
        getValue={getValue}
      />
      <div>
        <pre>
          <h2>Selected option:</h2>
          {savedVal}
        </pre>
      </div>
    </main>
  );
};

export default SelectPage;
