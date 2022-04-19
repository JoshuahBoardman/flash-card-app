import React from "react";

// React Bootstrap Components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CardDeletionModal = ({
  itemType,
  showModal,
  handleCloseModal,
  deleteItem,
}) => {
  function handleConfirmation() {
    deleteItem();
    handleCloseModal();
  }

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {itemType} Deletion Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-danger">
          Are you sure you want to delete this {itemType}?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleConfirmation()}>Yes</Button>
        <Button onClick={() => handleCloseModal()}>No</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardDeletionModal;
