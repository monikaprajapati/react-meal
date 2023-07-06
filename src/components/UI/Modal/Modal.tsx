import * as React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode
  onClose: ()=>void
};

const BackDrop = (props: any) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("modal"))}
    </>
  );
};

export default Modal;
