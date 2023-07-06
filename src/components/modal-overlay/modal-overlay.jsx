/* import React from 'react'; */
import modalOverlayStyle from "./modal-overlay.module.css";

import PropTypes from "prop-types";

function ModalOverlay({ onClick }) {
  return <div className={modalOverlayStyle.root} onClick={onClick}></div>;
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
