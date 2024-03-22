import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width ? width : "100%"};
  height: ${({ height }) => height ? height : "auto"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
`;

export const Btn = styled.div`
  margin-top: 20px;
`;

