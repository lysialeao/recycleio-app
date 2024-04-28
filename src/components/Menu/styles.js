import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: ${({ extendedNavigation }) =>
    extendedNavigation ? "100vh" : "80px"};

  background-color: ${({ theme }) => theme.color.primary.main};
  display: flex;
  flex-direction: column;

  z-index: 999;
  position: fixed;

  @media (min-width: 1024px) {
    height: 80px;
  }
`;
export const LeftWrapper = styled.div`
  flex: 30%;
  display: flex;

  justify-content: flex-start;
  padding-left: 5%;
`;

export const RightWrapper = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5%;
`;

export const InnerNavigation = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

  a {
    color: ${({ theme }) => theme.color.white};
    font-size: medium;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const ExtendNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${({ theme }) => theme.color.white};
    font-size: medium;
    text-decoration: none;
    margin: 10px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  max-height: 180px;
  cursor: pointer;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;
