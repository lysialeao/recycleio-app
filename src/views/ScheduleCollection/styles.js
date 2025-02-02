import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) =>
    `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
  }
`;
export const Header = styled.header`
  width: 100%;
  height: 100vh;
  border-radius: 10px;
  background-position: center;

  background-image: url("https://cdn.dribbble.com/users/2024671/screenshots/5454098/media/b9f345266ff578a296f0d01c5e3697c9.jpg?resize=768x576&vertical=center");
  background-repeat: no-repeat;
  margin: auto;

  border-radius: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.large};
  gap: ${({ theme }) => theme.padding.large};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  gap: ${({ theme }) => theme.padding.small};
  padding: ${({ theme }) => theme.padding.small};

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .p-calendar,
  .p-multiselect,
  .p-dropdown,
  .p-calendar,
  button {
    width: 100%;
  }

  border-radius: 10px;
  -webkit-box-shadow: ${({ theme }) =>
    `5px 5px 15px 5px ${theme.color.lightGray}`};
  box-shadow: ${({ theme }) => `5px 5px 15px 5px ${theme.color.lightGray}`};

  .p-button {
    background-color: ${({ theme }) => theme.color.secondary.main};
    border-color: ${({ theme }) => theme.color.secondary.main};
  }

  .p-button:hover {
    background-color: ${({ theme }) => theme.color.secondary.main};
    border-color: ${({ theme }) => theme.color.secondary.main};
  }
`;
export const ProfilePoint = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 12px;
  gap: 18px;

  h1 {
    color: ${({ theme }) => theme.color.primary.main};
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
  }
`;

export const WrapperCards = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 4px;
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;

  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: solid 2px green;
  background-color: white;

  h1 {
    margin-top: 12px;
    font-size: 14px;
  }
`;

export const GoBack = styled.div`
  display: flex;
  flex-direction: row;

  /* padding: 48px; */
  padding-left: 48px;
  padding-top: 12px;
  color: ${({ theme }) => theme.color.primary.main};
  font-weight: 600;
  font-size: 20px;

  cursor: pointer;

  &:hover {
    font-weight: 700;
    font-size: 21px;
  }
`;
