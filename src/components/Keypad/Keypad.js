import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import Button from "../Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Keypad.module.css";

export default (props) => {
  const keys = [7, 8, 9, "del", 4, 5, 6, "+", 3, 2, 1, "-", ".", 0, "/", "x", "reset", "="];

  const buttons = keys.map((ele) => <Button value={ele} key={ele} buttonClickHandler={buttonClickHandler} />);

  const themeContext = useContext(ThemeContext);
  function buttonClickHandler(value) {
    // Passing to parent
    props.buttonClickHandler(value);
  }
  return (
    <Card type="keypad" theme={themeContext.theme}>
      <div className={classes.keypad}>{buttons}</div>
    </Card>
  );
};
