"use client";
import { Card } from "antd";
import ProfileList from "./profile-list";
import ProfileForm from "./profile-form";
import useModal from "hooks/useModal";
import CustomModal from "@components/common/custom-modal";

export default function Profile() {
  const onOk = () => {
    console.log("Confirmed!");
  };

  const onClose = () => {
    console.log("Modal closed.");
  };

  const { isVisible, showModal, hideModal, confirmModal } = useModal({
    onOk,
    onClose,
  });

  return (
    <Card title="Upload Profile Image" className="w-full max-w-3xl">
      <p>Choose an image to set as your profile picture.</p>

      <ProfileForm />
      <ProfileList />

      <CustomModal
        isVisible={isVisible}
        hideModal={hideModal}
        confirmModal={confirmModal}
        title="My Custom Modal"
      >
        <p>This is the content of the modal</p>
      </CustomModal>
    </Card>
  );
}
