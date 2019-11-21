import React from "react";
import { Modal, Input } from "antd";

const { TextArea } = Input;

export default function PostReplyModal({
  handleOk,
  handleCancel,
  visible,
  tweet,
  value,
  handleChange,
}) {
  return (
    <Modal
      title="Reply"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <TextArea rows={2} onChange={handleChange} value={value} />
    </Modal>
  );
}
