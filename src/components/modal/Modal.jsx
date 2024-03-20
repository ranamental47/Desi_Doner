import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const [modalShow, setModalShow] = useState(false);

const Modal = () => {
    
  return (
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            // {...props}
            show={props.show}
            onHide={() => setModalShow(false)}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton tog>
              <Modal.Title id="contained-modal-title-vcenter">Shawarma</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>
                  Some quick example text to build on the card title and make up the
                  bulk of the card content.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark">Home Delivery</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  )
}

export default Modal
