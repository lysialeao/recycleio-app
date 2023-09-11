import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  // gap: ${({ theme }) => theme.padding.large};
  padding: ${({ theme }) => theme.padding.large};

`
export const Header = styled.header`
  width: 100%;
  height: 250px;

  background-image: url('https://cdn.dribbble.com/users/1450874/screenshots/14964728/media/dec18d9d0fbdc3c5e14eb544cb9d9e7e.jpg?compress=1&resize=768x576&vertical=center');
  background-position: center;

  border-radius: 10px;
`
export const Content = styled.div`
  width: 100%;
  height: 250px;
  // background-color: ${({ theme }) => theme.color.primary.contrastText};
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.padding.small};
  padding: ${({ theme }) => theme.padding.small};

  .p-calendar {
    width: 30%;
  }

  .p-multiselect {
    width: 50%;
  }

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  .p-button {
    background-color: ${({ theme }) => theme.color.secondary.main};
    border-color: ${({ theme }) => theme.color.secondary.main};

  }

  .p-button:hover {
    background-color: ${({ theme }) => theme.color.secondary.main};
    border-color: ${({ theme }) => theme.color.secondary.main};
  }

`
export const ProfilePoint = styled.div`
  width: 100%;
  height: 100px;

  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.color.primary.main};
  }
`