import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  .p-multiselect-token {
    background: ${({ theme }) => theme.color.secondary.main} !important;
    color: ${({ theme }) => theme.color.secondary.contrastText} !important;
  }

  .p-multiselect {
    width: 100%;
  }

`