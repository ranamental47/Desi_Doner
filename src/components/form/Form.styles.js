import styled from 'styled-components';
import BgImage from '../../images/Rectangle9.png'

export const Container = styled.div`
  display: ${({display}) => display ?display: "flex"};
  justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
  align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
  padding: ${({padding}) => padding ?padding: "30px"};
  background: rgba(252, 238, 213, 1);
  /* border-radius: 65% 35% 100% 0% / 24% 30% 70% 76% ; */
`;

export const MyForm = styled.div`
  width: ${({width}) => width ?width: "90%"};
  max-width: ${({maxWidth}) => maxWidth ?maxWidth: "400px"};
  padding: ${({padding}) => padding ?padding: "20px"};
  text-align: ${({textAlign}) => textAlign ?textAlign: "left"};
  border-radius: ${({bRadius}) => bRadius ?bRadius: "15px"};
  /* background-image: url(${BgImage}); */
  background: #fff; 
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  h1{
    color: black;
    padding-top: 20px;
    padding-bottom: 30px;
    text-align: center;
  }
`;
export const AnchorTags = styled.div`
  display: ${({display}) => display ?display: "flex"};
  justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "space-between"};
  align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
   a{
    padding-top: 20px;
    color: black;
  }
  a:hover{
    opacity: 0.75;
  }
`;
// export const Btn = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: black;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   width:100%;
//   font-size: 25px;
//   :hover{
//     opacity: 0.75;
//   }
// `;
export const LoginBtn = styled.div`
  display: ${({display}) => display ?display: "flex"};
  flex-direction: column;
  justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
  align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
  padding: ${({padding}) => padding ?padding: "30px"};
`;
export const SignupBtn = styled.div`
  display: ${({display}) => display ?display: "flex"};
  flex-direction: column;
  justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
  align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
`;