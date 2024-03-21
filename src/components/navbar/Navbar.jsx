import React, { useState } from 'react'
import logo from '../../images/logo.png'
import hamburger from '../../images/hamburger.png'
import { Container, Icon, Li, Nav, NavLogo, Ul } from './Navbar.styles'
import { Link } from 'react-router-dom'

const Navbar = ({
    background,
    width,
    padding,
    color,
    display,
    alignItems,
    justifyContent,
    ...rest
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const hideMenu = () => {
        setShowMenu(false);
    };
    const NavLinks = [
        {text: 'Menu', path: '/'},
        {text: 'Shawarma', path: 'shawarma'},
        {text: 'Burger', path: 'burger'},
        {text: 'Drinks', path: 'drinks'},
        {text: 'Sandwich', path: 'sandwich'},
        {text: 'Login', path: 'login'},
        {text: 'Sign up', path: 'signup'},
    ];
  return (
    <>
        <Container>
            <Nav background={background}
                width={width}
                padding={padding}
                color={color}
                display={display}
                alignItems={alignItems}
                justifyContent={justifyContent}
                {...rest}
                >
                <div>
                    <NavLogo src={logo} alt='nav-logo'></NavLogo>
                </div>
                <Icon onClick={toggleMenu} src={hamburger} alt='hamburger'/>
                <Ul showMenu={showMenu}>
                    {NavLinks.map((item)=>(
                    <Li>
                        <Link to={item.path} onClick={hideMenu}>{item.text}</Link>
                    </Li>
                    ))}
                </Ul>
            </Nav>
        </Container>
    </>
  )
}

export default Navbar
