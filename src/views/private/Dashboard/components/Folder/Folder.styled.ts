import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f8ff;
  border: 1px solid #f4f0fc;
  width: 250px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  padding: 15px 20px;
  background-color: #f9f8ff;
  display: flex;
  align-items: center;

  span {
    margin-right: 20px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const InfoContainer = styled.div`
  padding: 0px 20px;
`;

export const TagContainer = styled.div`
  padding: 15px 20px;
`;
