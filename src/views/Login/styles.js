import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 50vw;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`
export const ImageContent = styled.div`
  width: 50%;
  height: 100%;

  background-image: url('https://cdn.dribbble.com/users/1565012/screenshots/6337189/ecology_0.jpg?compress=1&resize=768x576&vertical=top');

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.8;

  @media (max-width: 1024px) {
    display: none;
  }
`
export const Content = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

`