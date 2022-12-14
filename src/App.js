import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import ThemeContext from "./store/theme-context";
function App() {
  const [currTheme, setCurrTheme] = useState("theme1");
  function toggleTheme(theme) {
    setCurrTheme(theme);
  }
  return (
    <ThemeContext.Provider value={{ theme: currTheme }}>
      <div className={`App ${currTheme}`}>
        <Calculator toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
