import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import classes from "./Header.module.css";
export default (props) => {
  const themeContext = useContext(ThemeContext);
  function toggleTheme(theme, d) {
    console.log(theme, d);
    props.toggleTheme(theme);
  }
  return (
    <div className={`${classes.header} ${classes[themeContext.theme]}`}>
      <span onClick={toggleTheme}>Calc</span>

      <div className={classes.togglerContainer}>
        <div className={`${classes.numbers} ${classes[themeContext.theme]}`}>
          <span onClick={() => toggleTheme("theme1")}>1</span>
          <span onClick={() => toggleTheme("theme2")}>2</span>
          <span onClick={() => toggleTheme("theme3")}>3</span>
        </div>
        <div className={`${classes.toggler} ${classes[themeContext.theme]}`}>
          <div onClick={() => toggleTheme("theme1")}></div>
          <div onClick={() => toggleTheme("theme2")}></div>
          <div onClick={() => toggleTheme("theme3")}></div>
        </div>
      </div>
    </div>
  );
};
