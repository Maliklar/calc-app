import classes from "./Card.module.css";
export default (props) => {
  return (
    <div
      className={`${classes.card} ${classes[props.type]} ${
        classes[props.theme]
      }`}>
      {props.children}
    </div>
  );
};
