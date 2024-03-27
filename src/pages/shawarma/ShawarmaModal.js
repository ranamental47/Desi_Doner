import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import logo from '../../images/logo.png'
import minus from '../../images/minus.png'
import plus from '../../images/plus.png'
import { Link } from 'react-router-dom'
import {Left, PopUpDesc, Right, TotalContainer, ModalLogo, Image } from "./Shawarma.styles";

const ShawarmaModal = ({
  show,
  onHide,
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  selectedExtras,
  handleExtraCheckboxChange,
  totalPrice,
  title,
  desc,
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
        <Modal.Title id="contained-modal-title-vcenter">Desi-Doner</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>{desc}</p>
        </div>
        <PopUpDesc>
          <div>
            <strong>{title}</strong>
          </div>
          <Right>
            <Image src={minus} alt="minus-icon" onClick={handleDecreaseQuantity}/>
            <p>x {quantity}</p>
            <Image src={plus} alt="minus-icon" onClick={handleIncreaseQuantity}/>
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
        <Button variant="dark" size="sm" onClick={Ring}>Call Us</Button>
        <Link to="/cart">
          <Button variant="dark" size="sm">Add to Cart</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ShawarmaModal;
