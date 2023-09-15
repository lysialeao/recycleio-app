import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;

  padding: ${({ theme }) => theme.padding.small};
  gap: ${({ theme }) => theme.padding.small};

  align-items: center;

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  span, button {
    width: 100%;
  }
`

export const Wrapper = styled