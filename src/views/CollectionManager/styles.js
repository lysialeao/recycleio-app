import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.padding.large};
  padding: ${({ theme }) => theme.padding.large};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  widht: 100%:
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: right;
`