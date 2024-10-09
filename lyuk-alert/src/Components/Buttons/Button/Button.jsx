import classes from "./Button.module.scss";

export default function Button({ children, onClick }) {
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}