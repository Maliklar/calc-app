import { useContext, useEffect } from "react";
import ThemeContext from "../../store/theme-context";
import Card from "../UI/Card/Card";
import classes from "./Screen.module.css";
export default (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Card type="screen" theme={themeContext.theme}>
      <div className={classes.screen}>
        <span>{props.leftSide}</span>
        <span>{props.operation}</span>
        <span>{props.rightSide}</span>
      </div>
    </Card>
  );
};
