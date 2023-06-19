import styled from 'styled-components'

import logo from '../../assets/logo.png'

export const Container = styled.div`
  widht: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.padding.xlarge};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;
  height: 160px;
  border-radius: 10px;

  background-image: url('https://cdn.dribbble.com/users/1565012/screenshots/6337189/ecology_0.jpg?compress=1&resize=768x576&vertical=center');
  background-position: center;
`

export const Avatar = styled.div`
  width: 120px;
  height: 120px;

  border-radius: 50%;
  position: absolute;

  margin: 0;

  margin-top: 80px;
  margin-left: 50px;

  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.color.white};

  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};
  -webkit-box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

`

export const Information = styled.div`
  width: 100%;
  margin-top: 40px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.padding.large};
  gap: ${({ theme }) => theme.padding.small};

  input {
    width: 100%;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  gap: ${({ theme }) => theme.padding.small};
`