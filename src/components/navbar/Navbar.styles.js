import styled from 'styled-components';
import navBg from '../../images/dark_Tire.png'

export const Container = styled.div`
  width: ${({width}) => width ?width: "100%"};
  height: ${({height}) => height ?height: "auto"};
  margin-bottom: 50px;
 
`;
export const Nav = styled.nav`
  background-image: url(${navBg});
  width: ${({width}) => width ?width: "100%"};
  display: ${({display}) => display ?display: "flex"};
  align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
  justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "space-around"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  @media (max-width: 1024px){
    display: ${({display}) => display ?display: "flex"};
    flex-wrap: ${({wrap}) => wrap ?wrap: "wrap"};
    align-items: ${({alignItems}) => alignItems ?alignItems: "flex-start"};
    justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "left"};
  }
`;
export const NavLogo = styled.img`
  max-width: ${({maxWidth}) => maxWidth ?maxWidth: "200px"};
  cursor: pointer;
  @media (max-width: 768px){
    padding-left: ${({padding}) => padding ?padding: "20px"};
  }
`;
export const Icon = styled.img`
 max-width: ${({maxWidth}) => maxWidth ?maxWidth: "25px"};
display: ${({display}) => display ?display: "none"};
cursor: pointer;
  @media (max-width: 1024px){
    display: ${({display}) => display ?display: "block"};
    position: ${({position}) => position ?position: "absolute"};
    top: ${({top}) => top ?top: "3%"};
    right: ${({right}) => right ?right: "4%"};
  }
  @media (max-width: 768px){
    display: ${({display}) => display ?display: "block"};
    position: ${({position}) => position ?position: "absolute"};
    top: ${({top}) => top ?top: "2%"};
    right: ${({right}) => right ?right: "4%"};
  }
`;
export const Ul = styled.ul`
 color: ${({color}) => color ?color: "white"};
 list-style: ${({listStyle}) => listStyle ?listStyle: "none"};
 display: ${({display}) => display ?display: "flex"};
 flex-direction: ${({ showMenu }) => (showMenu ? 'column' : 'row')};
 gap: ${({gap}) => gap ?gap: "35px"};
 margin: ${({margin}) => margin ?margin: "0"};
 align-items: ${({align}) => align ?align: "center"};
 justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
    @media (max-width: 1024px) {
      width: ${({width}) => width ?width: "100%"};
      display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
      align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
      justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "left"};
      text-align: ${({textAlign}) => textAlign ?textAlign: "center"};
      margin: ${({margin}) => margin ?margin: "0"};
      gap: ${({gap}) => gap ?gap: "20px"};
      padding: 0 !important;
    }
`;
export const Li = styled.li`
 cursor: pointer;
 a{
    color: ${({color}) => color ?color: "white"};
    font-size: ${({fontSize}) => fontSize ?fontSize: "20px"};
    font-weight: ${({fontWeight}) => fontWeight ?fontWeight: "400"};
    text-decoration: ${({textDecoration}) => textDecoration ?textDecoration: "none"};
 }
 a:active,
  a:hover,
  a:focus {
    color: rgba(252, 238, 213, 1);
  }
`;