import { useState } from "react";
import Header from "../Header/Header";
import Keypad from "../Keypad/Keypad";
import Screen from "../Screen/Screen";
import classes from "./Calculator.module.css";
export default (props) => {
  function toggleTheme() {
    console.log("from calculator");
    props.toggleTheme();
  }
  function buttonClickHandler(value) {
    console.log("calculator", value);
    setLeftSide(leftSide + value);
  }
  const [leftSide, setLeftSide] = useState("");
  const [rightSide, setRightSide] = useState("");
  const [operation, setOperation] = useState("");

  return (
    <div className={classes.calculator}>
      <Header toggleTheme={toggleTheme} />
      <Screen
        leftSide={leftSide}
        operation={operation}
        rightSide={rightSide}
      />
      <Keypad buttonClickHandler={buttonClickHandler} />
    </div>
  );
};
