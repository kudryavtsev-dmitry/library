import React from "react";
import { Modal } from "@material-ui/core";

export const ModalWrapper = ({ open, onClose, children }) => {
  return (
    <Modal className="bookEditorModal-container" open={open} onClose={onClose}>
      <div className="bookEditorModal-paper">{children}</div>
    </Modal>
  );
};
