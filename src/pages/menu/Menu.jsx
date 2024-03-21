import React from 'react'
import Shawarma from '../shawarma/Shawarma';
import Burger from '../burger/Burger';
import Drinks from '../drinks/Drinks';
import Carousel from 'react-bootstrap/Carousel';
import hello from '../../images/fig4.jpg';
import Sandwich from '../sandwich/Sandwich';
import Fries from '../fries/Fries';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Menu = () => {
  return (
   <>
   
   <Shawarma/>
   <Burger/>
   <Sandwich/>
   <Fries/>
   <Drinks/>
   </>
  )
}

export default Menu
