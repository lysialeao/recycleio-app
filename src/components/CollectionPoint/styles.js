import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  display: flex;
  flex-direction: column;
`
export const Header = styled.header`
  width: 100%;
  height: 100px;
  border-radius: 10px;

  background-image: url('https://cdn.dribbble.com/users/1450874/screenshots/14964728/media/dec18d9d0fbdc3c5e14eb544cb9d9e7e.jpg?compress=1&resize=768x576&vertical=center');
  background-position: center;
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px;
  gap: 10px;
`
export const WrapperTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap.small};
`