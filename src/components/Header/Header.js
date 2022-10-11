import classes from "./Header.module.css";
export default (props) => {
  function toggleTheme() {
    props.toggleTheme();
  }
  return (
    <div className={classes.header}>
      <span onClick={toggleTheme}>Theme Toggler</span>
    </div>
  );
};
