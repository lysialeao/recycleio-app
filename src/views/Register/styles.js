import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.padding.small};

  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    color: ${({ theme }) => theme.color.secondary.main};
    border-color: ${({ theme }) => theme.color.secondary.main};
  }

  .p-tabview .p-tabview-nav .p-tabview-ink-bar {
    background-color: ${({ theme }) => theme.color.secondary.main};
  }
`