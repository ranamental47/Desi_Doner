import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width ? width : "100%"};
  height: ${({ height }) => height ? height : "auto"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(252, 238, 213, 1);
  @media (max-width: 425px){
    min-height: 65vh;
  }
`;
export const CartHeading = styled.div`
  padding: 30px 0;
`;

export const MyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  margin: 20px 0;
  @media (max-width: 768px){
    padding: 20px 15px;
    margin:20px;
  }
`;

export const Btn = styled.div`
  margin-top: 20px;
`;

