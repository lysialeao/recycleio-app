import styled from "styled-components"

export const Container = styled.form`
  width: 100%;
  min-height: 80px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.padding.small};
  gap: ${({ theme }) => theme.padding.small};

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .p-button {
    width: 100%;
  }


`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.padding.small};

  @media (max-width: 768px) {
    flex-direction: column;
  }

`