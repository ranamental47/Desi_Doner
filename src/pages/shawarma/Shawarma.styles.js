import styled from 'styled-components';
import BgImage from '../../images/Rectangle9.png'

export const Container = styled.div`
  padding: ${({ padding }) => padding ? padding : "10px 0"};
`;
export const MenuHeading = styled.div`
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  text-align: ${({ textAlign }) => textAlign ? textAlign : "center"};
  h1 {
    padding: ${({ padding }) => padding ? padding : "10px"};
  }
`;
export const CardImage = styled.div`
  width: ${({ width }) => width ? width : "100%"};
  border-bottom: ${({ borderBottom }) => borderBottom ? borderBottom : "1px solid silver"};
`;
export const CardBody = styled.div`
  width: ${({ width }) => width ? width : "100%"};
  @media (max-width: 452px) {
    font-size: ${({ fontSize }) => fontSize ? fontSize : "10px"};
  }
`;
export const CardTitle = styled.div`
  @media (max-width: 452px) {
    font-size: ${({ fontSize }) => fontSize ? fontSize : "7px"};
  }
`;
export const CardContainer = styled.div`
  width: ${({ width }) => width ? width : "100%"};
  display: ${({ display }) => display ? display : "flex"};
  flex-wrap: ${({ flexWrap }) => flexWrap ? flexWrap : "wrap"};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
  gap: ${({ gap }) => gap ? gap : "10px"};
  /* background-image: url(${BgImage}); */
  background: rgba(252, 238, 213, 1);
  border-radius: 65% 35% 100% 0% / 24% 30% 70% 76% ;
  padding: 20px;
`;
export const MyCard = styled.div`
  flex-basis: 15%;
  margin-bottom: 20px;
 
  /* background: red; */
  @media (max-width: 1440px) {
    flex-basis: 22%;
  }
  @media (max-width: 768px) {
    font-size: ${({ fontSize }) => fontSize ? fontSize : "10px"};
    flex-basis: 30%;
  }
  @media (max-width: 452px) {
    font-size: ${({ fontSize }) => fontSize ? fontSize : "10px"};
    flex-basis: 47%;
  }
  
`;
export const PopUpDesc = styled.div`
  display: ${({ display }) => display ? display : "flex"};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "space-between"};
  border-top: ${({ borderTop }) => borderTop ? borderTop : "1px solid silver"};
  padding: ${({ padding }) => padding ? padding : "10px"};
  p {
    margin: ${({ margin }) => margin ? margin : "0"};
  }
`;
export const Right = styled.div`
  display: ${({ display }) => display ? display : "flex"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
  gap: ${({ gap }) => gap ? gap : "10px"};
  input {
    cursor: pointer;
  }
`;
export const Left = styled.div`
  display: ${({ display }) => display ? display : "flex"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
`;
export const TotalContainer = styled.div`
  display: ${({ display }) => display ? display : "flex"};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "space-between"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
  border-top: ${({ borderTop }) => borderTop ? borderTop : "1px solid silver"};
  border-bottom: ${({ borderBottom }) => borderBottom ? borderBottom : "1px solid silver"};
  h4, h5 {
    margin: ${({ margin }) => margin ? margin : "0"};
  }
`;
export const Image = styled.img`
  object-fit: ${({ objectFit }) => objectFit ? objectFit : "contain"};
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : "20px"};
  cursor: pointer;
`;