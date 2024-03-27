import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Sandwich1 from "../../images/Shawarma-1.png";
import {CardBody, CardContainer, CardImage, Container, CardTitle, MenuHeading , MyCard} from '../shawarma/Shawarma.styles'
import ShawarmaModal from "../shawarma/ShawarmaModal";

const Sandwich = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);

  
  const SandwichMenu = [
    {
      id: 1,
      title: "Sandwich 1",
      image: Sandwich1,
      desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 500.00",
    },
    {
      id: 2,
      title: "Sandwich 2",
      image: Sandwich1,
      desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 700.00",
    },
    {
      id: 3,
      title: "Sandwich 3",
      image: Sandwich1,
      desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 800.00",
    },
    {
      id: 4,
      title: "Sandwich 4",
      image: Sandwich1,
      desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 770.00",
    },
    {
      id: 5,
      title: "Sandwich 5",
      image: Sandwich1,
      desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 890.00",
    },
    {
      id: 6,
      title: "Sandwich 6",
      image: Sandwich1,
      desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
      btn: "Order now",
      amount: "Rs: 650.00",
    },
  ];

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleExtraCheckboxChange = (item) => {
    if (selectedExtras.some((extra) => extra.id === item.id)) {
      setSelectedExtras((prevExtras) =>
        prevExtras.filter((extra) => extra.id !== item.id)
      );
    } else {
      setSelectedExtras((prevExtras) => [...prevExtras, item]);
    }
  };

  let totalPrice = selectedItem
    ? parseFloat(selectedItem.amount.replace("Rs: ", "")) * quantity
    : 0;
  selectedExtras.forEach((extra) => {
    totalPrice += parseFloat(extra.price.replace("Rs: ", ""));
  });   
 
  const orderNow = (item) => { 
   setselectedItem(item)
   setModalShow(true)
  }
const hideModal = ()=>{
  setselectedItem(null);
  setQuantity(1);
  setSelectedExtras([]);
  setModalShow(false);
}
  return (
    <>
      <Container>
        <MenuHeading>
          <h1>SANDWICH</h1>
        </MenuHeading>
        <CardContainer>
          {SandwichMenu.map((item) => (
            <MyCard>
              <Card style={{ flexBasis: "22%" }}>
                <CardImage>
                  <Card.Img variant="top" src={item.image} alt="shawrma_1" />
                </CardImage>
                <CardBody>
                  <Card.Body>
                    <CardTitle>
                      <Card.Title>{item.title}</Card.Title>
                    </CardTitle>
                    <Card.Text>{item.desc}</Card.Text>
                    <p>{item.amount}</p>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={()=>{
                        orderNow(item)
                        }}
                    >
                      {item.btn}
                    </Button>
                  </Card.Body>
                </CardBody>
              </Card>
            </MyCard>
          ))}
        </CardContainer>
      </Container>
      <ShawarmaModal
        show={modalShow}
        onHide={hideModal}
        quantity={quantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        title={selectedItem ? selectedItem.title : ""}
        desc={selectedItem ? selectedItem.desc : ""}
        selectedExtras={selectedExtras}
        handleExtraCheckboxChange={handleExtraCheckboxChange}
        totalPrice={totalPrice}
      />
    </>
  );
};

export default Sandwich
