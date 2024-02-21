import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  // height: 1500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding.large};
  padding: ${({ theme }) => theme.padding.large};
`
export const Content = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  height: 100%;

  gap: ${({ theme }) => theme.padding.large};

  @media (max-width: 768px) {
    grid-template-rows: 100%;
    grid-template-columns: none;
  }
`