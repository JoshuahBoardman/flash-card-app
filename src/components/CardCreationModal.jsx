import React from "react";

// React Bootstrap Components
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// TODO: Make sure names are self explaining and add description for each prop
const CardCreationModal = ({
  header,
  labelOne,
  lablelOneValue,
  setLabelOneValue,
  labelTwo,
  lablelTwoValue,
  setLabelTwoValue,
  showModal,
  handleCloseModal,
  createNewCard,
}) => {
  // TODO: Add auth text
  function handleUserInput() {
    if (lablelOneValue.length <= 0) return;
    createNewCard();
    setLabelOneValue("");
    setLabelTwoValue("");
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
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{labelOne}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter a ${labelOne}...`}
              autoFocus
              value={lablelOneValue}
              onChange={(e) => setLabelOneValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{labelTwo}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={lablelTwoValue}
              onChange={(e) => setLabelTwoValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleCloseModal()}>Close</Button>
        <Button onClick={() => handleUserInput()}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardCreationModal;
