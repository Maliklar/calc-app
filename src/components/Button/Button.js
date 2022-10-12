import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import classes from "./Button.module.css";

export default (props) => {
  let class_name;
  if (props.value === "=") {
    class_name = "equal";
  } else {
    class_name = props.value;
  }

  function buttonClickHandler() {
    // Passing to parent
    props.buttonClickHandler(props.value);
  }
  const themeContext = useContext(ThemeContext);
  return (
    <button
      onClick={buttonClickHandler}
      className={`${classes.button} ${classes[class_name]} ${classes[themeContext.theme]}`}>
      {props.value}
    </button>
  );
};
