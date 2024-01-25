import styled from "styled-components"
export const Card = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  color: #314a30;

  padding: ${({ theme }) => theme.padding.medium};

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

`

export const CardTile = styled.div`
  height: 30px;
`

export const CardInfo = styled.div`
  height: 100px;
`