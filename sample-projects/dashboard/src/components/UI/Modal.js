import ReactDOM from 'react-dom';
import { Fragment } from "react";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalContent = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
        <div className={classes['modal-content']}>{props.children}</div>
    </div>
  );
};


const modalElement = document.getElementById('modal');



const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalElement)}
            {ReactDOM.createPortal(<ModalContent className={props.className}>{props.children}</ModalContent>, modalElement)}
        </Fragment>
    )
};

export default Modal;