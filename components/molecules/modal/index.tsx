import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type AppModalProps = {
  show: boolean;
  onHide: () => void;
};

function AppModal(props: AppModalProps) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppModal;
