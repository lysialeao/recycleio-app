import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  padding: ${({ theme }) => `${theme.padding.medium} 0`};
  gap: ${({ theme }) => theme.padding.small};

  padding: ${({ theme }) => `${theme.padding.medium} 0`};
  gap: ${({ theme }) => theme.padding.small};

  .p-float-label {
    width: 100%;

    .p-inputtext {
      width: 100%
    }
  }


`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: right;

  padding: ${({ theme }) => `${theme.padding.medium} 0`};
`