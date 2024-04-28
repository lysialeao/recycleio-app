import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) =>
    `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  /* background-color: #fff2ee; */

  // align-items: center;
  // justify-content: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 50vw;
  background-image: url("https://cdn.dribbble.com/userupload/2919966/file/original-2a080412ff0831144d09c7c7f0fa87b1.png?compress=1&resize=1024x767");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  background-attachment: fixed;
`;

export const WrapperCards = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  padding: ${({ theme }) => theme.padding.medium};
  gap: ${({ theme }) => theme.padding.medium};
`;
export const Section = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
  gap: 12px;

  font-size: 22px;

  button {
    max-width: 350px;
  }

  h1 {
    font-family: "League Spartan", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;

    font-size: 48px;

    span {
      text-decoration: underline #ff6c50;
    }
  }
`;
