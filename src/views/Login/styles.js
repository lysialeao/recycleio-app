import styled from "styled-components"

export const Container = styled.div`
  widht: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`
export const ImageContent = styled.div`
  width: 50%;

  background-image: url('https://plus.unsplash.com/premium_photo-1664283229483-cc9f3920e5b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80');

  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
`
export const Content = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

`