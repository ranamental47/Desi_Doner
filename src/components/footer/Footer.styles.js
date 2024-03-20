import styled from 'styled-components';
import FooterBg from '../../images/dark_Tire.png'

export const FooterContainer = styled.div`
background-image: url(${FooterBg});
`;
export const Containers = styled.div`
justify-content: center !important;
align-items: center !important;
padding: ${({padding}) => padding ?padding: "20px"};
`;
export const Ftr = styled.div`
width: ${({width}) => width ?width: "100%"};
justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
img{
  max-width: ${({maxWidth}) => maxWidth ?maxWidth: "110px"};
  @media (max-width: 768px){
    max-width: ${({maxWidth}) => maxWidth ?maxWidth: "100px"};
  }
  @media (max-width: 397px){
    max-width: ${({maxWidth}) => maxWidth ?maxWidth: "75px"};
  }
  @media (max-width: 314px){
    max-width: ${({maxWidth}) => maxWidth ?maxWidth: "50px"};
  }
}
span,p{
  color: ${({color}) => color ?color: "white"};
  margin: ${({margin}) => margin ?margin: "0"};
  font-size: ${({fontSize}) => fontSize ?fontSize: "15px"};
  @media (max-width: 768px){
    font-size: ${({fontSize}) => fontSize ?fontSize: "10px"};
  }
  @media (max-width: 397px){
    font-size: ${({fontSize}) => fontSize ?fontSize: "7px"};
  }
}
`;
export const ContactUs = styled.div`
gap: ${({gap}) => gap ?gap: "20px"};
display: ${({display}) => display ?display: "flex"};
padding: 5px 0;
  img{
    object-fit: ${({objectFit}) => objectFit ?objectFit: "contain"};
    max-width: ${({maxWidth}) => maxWidth ?maxWidth: "25px"};
    cursor: pointer;
    @media (max-width: 768px){
      max-width: ${({maxWidth}) => maxWidth ?maxWidth: "18px"};
    }
    @media (max-width: 397px){
      max-width: ${({maxWidth}) => maxWidth ?maxWidth: "14px"};
    }
  }
  p{
    cursor: pointer;
  }
  @media (max-width: 768px){
    gap: ${({gap}) => gap ?gap: "10px"};
  }
`;
export const CopyRight = styled.div`
color: ${({color}) => color ?color: "white"};
text-align: ${({textAlign}) => textAlign ?textAlign: "center"};
padding: ${({padding}) => padding ?padding: "20px 0"};
font-size: ${({fontSize}) => fontSize ?fontSize: "15px"};
  @media (max-width: 768px){
    font-size: ${({fontSize}) => fontSize ?fontSize: "10px"};
  }
  @media (max-width: 397px){
    font-size: ${({fontSize}) => fontSize ?fontSize: "7px"};
  }
`;