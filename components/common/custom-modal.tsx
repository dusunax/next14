import React from "react";
import { Modal, Button } from "antd";

export default function CustomModal({
  isVisible,
  hideModal,
  confirmModal,
  title,
  children,
}) {
  return (
    <Modal
      title={title}
      visible={isVisible}
      onCancel={hideModal}
      footer={[
        <Button key="back" onClick={hideModal}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={confirmModal}>
          OK
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
}
