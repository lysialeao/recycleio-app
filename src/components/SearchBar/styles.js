import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-items: center;

  padding: ${({ theme }) => theme.padding.small};
  gap: ${({ theme }) => theme.padding.small};

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

`