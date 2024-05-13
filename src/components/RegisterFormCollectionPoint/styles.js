import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.padding.small};

  h2 {
    color: ${({ theme }) => theme.color.secondary.main};
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;

  padding: ${({ theme }) => `${theme.padding.medium} 0`};
  gap: ${({ theme }) => theme.padding.small};

  .p-float-label {
    width: 100%;

    .p-multiselect {
      width: 100%;
    }

    .p-inputtext {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: right;

  padding: ${({ theme }) => `${theme.padding.medium} 0`};
`;
