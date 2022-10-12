import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import Card from "../UI/Card/Card";
import classes from "./Screen.module.css";
export default (props) => {
  const themeContext = useContext(ThemeContext);

  // Prepare number to be displayed on screen (e.g. 1,382,43.2332)
  function numberWithCommas(number) {
    if (number.length === 0) return "";
    if (number.includes(".")) {
      let parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Card type="screen" theme={themeContext.theme}>
      <div className={classes.screen}>
        <span>
          {numberWithCommas(props.leftSide)}
          {props.operation}
          {numberWithCommas(props.rightSide)}
        </span>
      </div>
    </Card>
  );
};
