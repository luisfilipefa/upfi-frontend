import Modal from "react-modal";
import { NewPostForm } from "../NewPostForm";
import { useNewPostModal } from "../../hooks/useNewPostModal";

export function NewPostModal() {
  const { isOpen, onClose } = useNewPostModal();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      background: "rgba(0,0,0, 0.8)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Modal de criação de post"
      ariaHideApp={false}
    >
      <NewPostForm />
    </Modal>
  );
}
