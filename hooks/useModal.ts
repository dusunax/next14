import { useState, useCallback } from "react";

const useModal = (props) => {
  const { onOk = () => {}, onClose = () => {} } = props;
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);

  const hideModal = useCallback(() => {
    setIsVisible(false);
    onClose();
  }, [onClose]);

  const confirmModal = useCallback(() => {
    setIsVisible(false);
    onOk();
  }, [onOk]);

  return {
    isVisible,
    showModal,
    hideModal,
    confirmModal,
  };
};

export default useModal;
