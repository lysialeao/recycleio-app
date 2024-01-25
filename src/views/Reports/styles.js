import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

`

export const Content = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  padding: ${({ theme }) => theme.padding.large};
  gap: ${({ theme }) => theme.padding.medium};

`

export const WrapperRow = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;

  @media(max-width: 768px) {
    flex-wrap: wrap;
  }

  gap: ${({ theme }) => theme.padding.medium};
`

export const Card = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.lightGreen};
  border-radius: 10px;

  color: #314a30;

  padding: ${({ theme }) => theme.padding.medium}


`
