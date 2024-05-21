import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  padding: ${({ theme }) => `${theme.padding.medium} 0`};
  gap: ${({ theme }) => theme.padding.small};

  .p-float-label {
    width: 100%;

    .p-inputtext,
    .p-inputnumber {
      width: 100%;
    }
  }
`;
