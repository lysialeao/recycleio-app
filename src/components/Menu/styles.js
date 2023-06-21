import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 60px;

  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.white};

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`