import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 20px;
  gap: 30px;

  .card {
    width: 100%;
    .p-button {
      width: 50%;
    }
  }

  .p-button {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #d2691e;
  }
`;
