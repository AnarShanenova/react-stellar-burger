/* import React from 'react'; */
import React from "react";
import ReactDOM from "react-dom";
import modalStyle from "./modal.module.css";

import PropTypes from "prop-types";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";
import { modals } from "../../utils/constants";

function Modal({ header, children, onClose }) {
  React.useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", close);

    return () => {
      document.removeEventListener("keydown", close);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={`${modalStyle.root} pt-10 pr-10 pb-15 pl-10`}>
        <div className={modalStyle.header}>
          {header && <h2 className="text_type_main-large">{header}</h2>}
          <button className={modalStyle.closeButton} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    modals
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
