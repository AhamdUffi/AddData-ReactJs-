import React from "react";
import ReactDOM from "react-dom";
import Button from "../InputData/UI/Button/Button";
import styles from "./Validation.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const BoxMassage = (props) => {
  return (
    <div className={styles.boxMassage}>
      <header>
        <h1>{props.title}</h1>
      </header>
      <div className={styles.massage}>
        <span>{props.massage}</span>
      </div>
      <footer className={styles.exit}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </div>
  );
};

const Validation = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <BoxMassage
          title={props.title}
          massage={props.massage}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("boxMassage")
      )}
    </React.Fragment>
  );
};
export default Validation;
