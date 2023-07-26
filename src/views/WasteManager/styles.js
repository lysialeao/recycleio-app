import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.padding.large};
  padding: ${({ theme }) => theme.padding.large};

`

export const Bar = styled.nav`
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
    width: 30%;
  }

  .p-dropdown {
    width: 70%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .p-button, .p-dropdown {
      width: 100%;
    }

  }

`