import styled from 'styled-components';
import BgImage from '../../images/dark_Tire.png'

export const Container = styled.div`
  display: ${({display}) => display ?display: "flex"};
  justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
  align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
  padding: ${({padding}) => padding ?padding: "30px"};
`;

export const MyForm = styled.div`
  width: ${({width}) => width ?width: "90%"};
  max-width: ${({maxWidth}) => maxWidth ?maxWidth: "400px"};
  padding: ${({padding}) => padding ?padding: "20px"};
  text-align: ${({textAlign}) => textAlign ?textAlign: "center"};
  border-radius: ${({bRadius}) => bRadius ?bRadius: "15px"};
  background-image: url(${BgImage});
  h1{
    color: white;
  }
`;