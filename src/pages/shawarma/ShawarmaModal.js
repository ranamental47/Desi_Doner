import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Btn, Left, PopUpDesc, Right, TotalContainer } from "./Shawarma.styles";

const ShawarmaModal = ({
  show,
  onHide,
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  selectedExtras,
  handleExtraCheckboxChange,
  totalPrice,
}) => {
    const PopUpMenu = [
        { id: 1, name: "Extra 1", price: "Rs: 20.00" },
        { id: 2, name: "Extra 2", price: "Rs: 30.00" },
        { id: 3, name: "Extra 3", price: "Rs: 40.00" },
        { id: 4, name: "Extra 3", price: "Rs: 50.00" },
        { id: 5, name: "Extra 3", price: "Rs: 60.00" }
    ];

    const Ring = () => {
        window.open("tel:+923181424147");
    };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Shawarma</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </div>
        <PopUpDesc>
          <div>
            <strong>Quantity: </strong>
          </div>
          <Right>
            <Btn onClick={handleDecreaseQuantity}> - </Btn>
            <p>{quantity}</p>
            <Btn onClick={handleIncreaseQuantity}> + </Btn>
          </Right>
        </PopUpDesc>
        {PopUpMenu.map((item, index) => (
          <PopUpDesc key={index}>
            <Right>
              <input
                type="checkbox"
                onChange={() => handleExtraCheckboxChange(item)}
                checked={selectedExtras?.find((_) => _?.id === item?.id)}
              />
              <p>{item.name}</p>
            </Right>
            <Left>
              <p>{item.price}</p>
            </Left>
          </PopUpDesc>
        ))}
        <TotalContainer>
          <h4>Total:</h4>
          <h5>Rs: {totalPrice.toFixed(2)}</h5>
        </TotalContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={Ring}>
          Ring
        </Button>
        <Button variant="dark">Home Delivery</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShawarmaModal;
