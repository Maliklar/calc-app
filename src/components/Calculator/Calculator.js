import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Keypad from "../Keypad/Keypad";
import Screen from "../Screen/Screen";
import classes from "./Calculator.module.css";

const OPERATIONS = ["+", "-", "x", "/"];
export default (props) => {
  // Component States
  const [leftSide, setLeftSide] = useState("");
  const [rightSide, setRightSide] = useState("");
  const [operation, setOperation] = useState("");

  // Keyboard strokes handling
  useEffect(() => {
    document.addEventListener("keydown", handleKeyStrokes, false);
    // Event Listener will be attached and then reattached to the real DOM each time a button is pressed.
    // Is there a better way?
    return () => {
      document.removeEventListener("keydown", handleKeyStrokes, false);
    };
  }, [leftSide, rightSide, operation]);

  const handleKeyStrokes = (e) => {
    const key = e.key === "*" ? "x" : e.key;
    if (OPERATIONS.includes(key) || Number.isInteger(+key) || key === ".") {
      buttonClickHandler(key);
    } else if (key === "Enter") {
      buttonClickHandler("=");
    } else if (key === "Backspace") {
      buttonClickHandler("del");
    } else if (key === "Escape") {
      buttonClickHandler("reset");
    }
  };

  // Theme Toggle
  function toggleTheme(theme) {
    props.toggleTheme(theme);
  }

  console.log("components reloaded");

  // Keypad Clicks
  function buttonClickHandler(value) {
    // Operations (+, -, *, /)
    if (OPERATIONS.includes(value)) {
      setOperation(value);
    } else if (value === "reset") {
      setOperation("");
      setRightSide("");
      setLeftSide("");
    }
    // Calculating the result and place it in left side
    else if (value === "=") {
      const number = calculateValue(leftSide, operation, rightSide);
      setLeftSide(Number.isInteger(number) ? number.toString() : number.toFixed(2).toString());
      setRightSide("");
      setOperation("");
    } else if (value === "del") {
      if (operation.length > 0) {
        if (rightSide.length > 0) setRightSide(rightSide.slice(0, -1));
        else setOperation("");
      } else {
        setLeftSide(leftSide.slice(0, -1));
      }
    } else {
      if (operation.length > 0) {
        setRightSide(rightSide + value);
      } else {
        setLeftSide(leftSide + value);
      }
    }
  }

  return (
    <div className={classes.calculator}>
      <Header toggleTheme={toggleTheme} />
      <Screen leftSide={leftSide} operation={operation} rightSide={rightSide} />
      <Keypad buttonClickHandler={buttonClickHandler} />
    </div>
  );
};

function calculateValue(left = 0, op, right = 0) {
  if (op === "+") return +left + +right;
  else if (op === "-") return +left - +right;
  else if (op === "x") return +left * +right;
  else if (op === "/") {
    if (+left === 0) return 0;
    else {
      return +right / +left;
    }
  } else if (op.length === 0) {
    return +left;
  }
}
