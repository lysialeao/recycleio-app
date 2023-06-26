import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.padding.large};
  padding: ${({ theme }) => theme.padding.large};

  align-items: center;
  justify-content: center;
`
export const EmptyImage = styled.img`
`