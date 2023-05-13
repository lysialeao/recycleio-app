import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.primary.main}	;
  color: ${({ theme }) => theme.color.white};
`