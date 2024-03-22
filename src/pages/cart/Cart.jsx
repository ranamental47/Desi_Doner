import React from 'react';
import { Btn, Container, MyCart } from './Cart.styles';
import { Button, Table } from 'react-bootstrap';

const Cart = () => {
  const CartMenu = [
    { id: 1, name: "Shawarma 1 Shawarma 1 Shawarma 1 Shawarma 1",itemPrice: "Rs:500.00" },
    { id: 2, name: "Burger 1", itemPrice: "Rs:400.00" },
    { id: 3, name: "Sandwich 1", itemPrice: "Rs:300.00" },
    { id: 4, name: "Sandwich 1", itemPrice: "Rs:300.00" }
  ];

  const calculatecartTotalPrice = () => {
    let cartTotal = 0;
    CartMenu.forEach((item) => {
      cartTotal += parseFloat(item.itemPrice.replace("Rs:",""));
    });
    return `Rs:${cartTotal.toFixed(2)}`;
  };

  const ConfirmOrder = () => {
    alert("Your Order has been placed!");
  };

  return (
    <>
      <Container>
        <MyCart>
          <Table>
            <thead>
            <tr>
              <th>Id</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
            </thead>
            <tbody>
              {CartMenu.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.itemPrice}</td>
              </tr>
              ))}
              <tr>
                <td colSpan="2"><strong>Total Items Price =</strong></td>
                <td><strong>{calculatecartTotalPrice()}</strong></td>
              </tr>
            </tbody>
            <Btn>
              <Button variant='dark' onClick={ConfirmOrder}>Confirm</Button>
            </Btn>
          </Table>
        </MyCart>
      </Container>
    </>
  );
};

export default Cart;
