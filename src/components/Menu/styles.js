import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 999;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 20px 60px;

  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.white};

  & a {
    color:${({ theme }) => theme.color.white};
    text-decoration: none;
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  
`

