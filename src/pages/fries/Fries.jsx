import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fries1 from "../../images/Deals.png";
import {
  CardBody,
  CardContainer,
  CardImage,
  Container,
  MenuHeading,
  MyCard,
} from "../shawarma/Shawarma.styles";
import ShawarmaModal from "../shawarma/ShawarmaModal"; // Import the modal component

const Fries = () => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setselectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedExtras, setSelectedExtras] = useState([]);
  
    const FriesMenu = [
      {
        id: 1,
        title: "Fries  1",
        image: Fries1,
        desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
        btn: "Order now",
        amount: "Rs: 500.00",
      },
      {
        id: 2,
        title: "Fries  2",
        image: Fries1,
        desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
        btn: "Order now",
        amount: "Rs: 700.00",
      },
      {
        id: 3,
        title: "Fries  3",
        image: Fries1,
        desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
        btn: "Order now",
        amount: "Rs: 800.00",
      },
      {
        id: 4,
        title: "Fries  4",
        image: Fries1,
        desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
        btn: "Order now",
        amount: "Rs: 770.00",
      },
      {
        id: 5,
        title: "Fries  5",
        image: Fries1,
        desc:"Some quick example text to build on the card title and make up the bulk of the card content.",
        btn: "Order now",
        amount: "Rs: 890.00",
      },
      {
        id: 6,
        title: "Fries  6",
        image: Fries1,
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
  
    return (
      <>
        <Container>
          <MenuHeading>
            <h1>FRIES</h1>
          </MenuHeading>
          <CardContainer>
            {FriesMenu.map((item, index) => (
              <MyCard>
                <Card style={{ flexBasis: "22%" }} key={index}>
                  <CardImage>
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
              </MyCard>
            ))}
          </CardContainer>
        </Container>
        <ShawarmaModal
          show={modalShow}
          onHide={() => setModalShow(false)}
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
export default Fries
