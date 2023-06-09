import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  display: flex;
  flex-direction: column;
`