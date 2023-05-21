import React, { useState } from "react";
import Translator from "./translator";
import TermsList from "./termslist";
import OffcanvasExample from "./navbar";

function App() {
  const [activeMode, setActiveMode] = useState(true);
  const toggleMode = (mode) => {
    setActiveMode(mode);
  };

  return (
    <div>
      <div style={{ position: "sticky", top: 0, height: "5vh" }}>
        <OffcanvasExample toggleMode={toggleMode} />
      </div>
      {activeMode ? <Translator /> : <TermsList />}
    </div>
  );
}

export default App;
