import styled from 'styled-components';

export const Container = styled.div`
padding: ${({padding}) => padding ?padding: "10px 0"};
`;

export const MenuHeading = styled.div`
justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
text-align: ${({textAlign}) => textAlign ?textAlign: "center"};
h1{
    padding: ${({padding}) => padding ?padding: "10px"};
}
`;
export const CardImage = styled.div`
width: ${({width}) => width ?width: "100%"};
max-width: ${({maxWidth}) => maxWidth ?maxWidth: "18rem"};
border-bottom: ${({borderBottom}) => borderBottom ?borderBottom: "1px solid silver"};
@media (max-width: 768px){
    max-width: ${({maxWidth}) => maxWidth ?maxWidth: "10rem"};
  }
`;
export const CardBody = styled.div`
width: ${({width}) => width ?width: "100%"};
max-width: ${({maxWidth}) => maxWidth ?maxWidth: "18rem"};
@media (max-width: 768px){
    max-width: ${({maxWidth}) => maxWidth ?maxWidth: "10rem"};
    font-size: ${({fontSize}) => fontSize ?fontSize: "10px"};
  }
`;
export const CardContainer = styled.div`
width: ${({width}) => width ?width: "100%"};
display: ${({display}) => display ?display: "flex"};
flex-wrap: ${({flexWrap}) => flexWrap ?flexWrap: "wrap"};
justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "center"};
align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
gap: ${({gap}) => gap ?gap: "10px"};
`;
export const PopUpDesc = styled.div`
display: ${({display}) => display ?display: "flex"};
justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "space-between"};
border-top: ${({borderTop}) => borderTop ?borderTop: "1px solid silver"};
padding: ${({padding}) => padding ?padding: "10px"};
p{
    margin: ${({margin}) => margin ?margin: "0"};
}
`;
export const Btn = styled.div`
width: ${({width}) => width ?width: "25px"};
border-radius: ${({radius}) => radius ?radius: "5px"};
text-align: ${({textAlign}) => textAlign ?textAlign: "center"};
background: ${({background}) => background ?background: "silver"};
cursor: pointer;
`;
export const Right = styled.div`
display: ${({display}) => display ?display: "flex"};
align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
gap: ${({gap}) => gap ?gap: "10px"};
input{
    cursor: pointer;
}
`;
export const Left = styled.div`
display: ${({display}) => display ?display: "flex"};
align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
`;
export const TotalContainer = styled.div`
display: ${({display}) => display ?display: "flex"};
justify-content: ${({justifyContent}) => justifyContent ?justifyContent: "space-between"};
align-items: ${({alignItems}) => alignItems ?alignItems: "center"};
border-top: ${({borderTop}) => borderTop ?borderTop: "1px solid silver"};
border-bottom: ${({borderBottom}) => borderBottom ?borderBottom: "1px solid silver"};
h4,h5{
    margin: ${({margin}) => margin ?margin: "0"};
}
`;