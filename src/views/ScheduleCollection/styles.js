import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.padding.large};
  padding: ${({ theme }) => theme.padding.large};

`
export const Header = styled.header`
  width: 100%;
  height: 250px;

  background-image: url('https://cdn.dribbble.com/users/1450874/screenshots/14964728/media/dec18d9d0fbdc3c5e14eb544cb9d9e7e.jpg?compress=1&resize=768x576&vertical=center');
  background-position: center;

  border-radius: 10px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;

  gap: ${({ theme }) => theme.padding.large};

  .p-button {
    background-color: ${({ theme }) => theme.color.secondary.main};
    border-color: ${({ theme }) => theme.color.secondary.main};
  }

  .p-button:hover {
    background-color: ${({ theme }) => theme.color.secondary.main};
    border-color: ${({ theme }) => theme.color.secondary.main};
  }
`