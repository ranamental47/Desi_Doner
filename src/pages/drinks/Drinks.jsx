import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Drink1 from '../../images/Drinksslider.png'
import {Btn, CardBody, CardContainer, CardImage, Container, Left, MenuHeading, PopUpDesc, Right, TotalContainer} from '../burger/Burger.styles'

const Drinks  = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1); // State to track quantity of selected item
  const [selectedExtras, setSelectedExtras] = useState([]); // State to track selected extras and their quantities

  const DrinkMenu = [
    {
      id: 1,
      title: "Drink 1",
      image: Drink1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 500.00",
    },
    {
      id: 2,
      title: "Drink 2",
      image: Drink1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 680.75",
    },
    {
      id: 3,
      title: "Drink 3",
      image: Drink1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 750.75",
    },
    {
      id: 4,
      title: "Drink 4",
      image: Drink1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 700.00",
    },
    {
      id: 5,
      title: "Drink 5",
      image: Drink1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 800.75",
    },
    {
      id: 6,
      title: "Drink 6",
      image: Drink1,
      desc: "Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 850.75",
    },
  ];
  const PopUpMenu = [
    { id: 1, name: "Extra 1", price: "Rs: 20.00" },
    { id: 2, name: "Extra 2", price: "Rs: 30.00" },
    { id: 3, name: "Extra 3", price: "Rs: 40.00" },
    { id: 4, name: "Extra 4", price: "Rs: 50.00" },
    { id: 5, name: "Extra 5", price: "Rs: 60.00" },
  ];

  const Ring = () => {
    window.open("tel:+923181424147");
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleExtraCheckboxChange = (item) => {
    if (selectedExtras.some((extra) => extra.name === item.name)) {
      // If the extra is already selected, remove it
      setSelectedExtras((prevExtras) =>
        prevExtras.filter((extra) => extra.name !== item.name)
      );
    } else {
      // Otherwise, add it to the selected extras
      setSelectedExtras((prevExtras) => [...prevExtras, item]);
    }
  };
  let totalPrice = selectedItem
    ? parseFloat(selectedItem.amount.replace("Rs: ", "")) * quantity
    : 0;
  // Add the prices of selected extras to the total price
  selectedExtras.forEach((extra) => {
    totalPrice += parseFloat(extra.price.replace("Rs: ", ""));
  });

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
          <Modal.Title id="contained-modal-title-vcenter">Drink</Modal.Title>
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
  }

  return (
    <>
      <Container>
        <MenuHeading>
          <h1>Drink</h1>
        </MenuHeading>
        <CardContainer>
          {DrinkMenu.map((item, index) => (
            <Card key={index}>
              <CardImage>
                <Badge bg="danger">20% OFF</Badge>
                <Card.Img variant="top" src={item.image} alt="shawrma_1" />
              </CardImage>
              <CardBody>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <p>{item.amount}</p>
                  <Button
                    variant="dark"
                    onClick={() => {
                      setselectedItem(item);
                      setModalShow(true);
                    }}
                  >
                    {item.btn}
                  </Button>
                </Card.Body>
              </CardBody>
            </Card>
          ))}
        </CardContainer>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        setModalShow={setModalShow}
        // onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default Drinks
