import React, { useState } from "react";
import { useCardCollection } from "../context/CardCollectionContext";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateCollectionModal = ({ show, handleClose }) => {
  const [cardCollection, setCardCollection] = useCardCollection();
  const [titleValue, setTitleValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  //TODO: Add auth text for collection title
  function createNewCollection() {
    if (titleValue.length <= 0) return
    setCardCollection([
      ...cardCollection,
      {
        title: `${titleValue}`,
        cards: [],
        description: `${textAreaValue}`,
      },
    ]);
    setTitleValue("");
    setTextAreaValue("");
    handleClose();
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          New Collection
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Collection Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a title..."
              autoFocus
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Collection Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleClose();
          }}
        >
          Close
        </Button>
        <Button onClick={() => createNewCollection()}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCollectionModal;
