import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  // gap: ${({ theme }) => theme.padding.large};
 
  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

`
export const Header = styled.header`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background-position: center;

  background-image: url('https://cdn.dribbble.com/users/1450874/screenshots/14964728/media/dec18d9d0fbdc3c5e14eb544cb9d9e7e.jpg?compress=1&resize=768x576&vertical=center');
  background-position: center;

  border-radius: 10px;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.padding.large};
  margin-bottom:  ${({ theme }) => theme.padding.large};

  // background-color: ${({ theme }) => theme.color.primary.contrastText};
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.padding.small};
  padding: ${({ theme }) => theme.padding.small};

  
  @media (max-width: 1024px) {
    flex-direction: column;
    }

  .p-calendar, .p-multiselect, .p-calendar, button {
    width: 100%;
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
  height: auto;

  align-items: center;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.padding.small};
  

  h1 {
    color: ${({ theme }) => theme.color.primary.main};
  }
`