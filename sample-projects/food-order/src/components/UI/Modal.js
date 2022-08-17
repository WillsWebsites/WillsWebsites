import ReactDOM from 'react-dom';
import { Fragment } from "react";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
  );
};


const modalElement = document.getElementById('modal');



const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalElement)}
        </Fragment>
    )
};

export default Modal;
