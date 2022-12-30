import { useState } from "react";
import Toast from "../components/toast/Totast";
import btn from "../styles/components/btn.module.scss";
import layout from "../styles/components/layout.module.scss";
import Select from "../components/select/Select";

const ToastPage = () => {
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
        <h1>Custom Toast Component</h1>
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
      <Toast />
    </main>
  );
};

export default ToastPage;
