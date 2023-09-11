import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  // gap: ${({ theme }) => theme.padding.large};
  padding: ${({ theme }) => theme.padding.large};

`

export const Content = styled.div`
  width: 100%;
  height: 1200px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  padding: ${({ theme }) => theme.padding.large};
  gap: ${({ theme }) => theme.padding.medium};

  h1 {
    color: ${({ theme }) => theme.color.primary.main};
  }
`

export const WrapperRow = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
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


`