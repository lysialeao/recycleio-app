import { createGlobalStyle } from 'styled-components'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

import 'primeicons/primeicons.css'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: (--font-family);
        font: 14px 'Roboto', sans-serif;
        background: ${({ theme }) => theme.color.white};
        color:  ${({ theme }) => theme.color.black};
        -web-kit-smoothing: antialiased !important;

        .p-multiselect-token {
          background: ${({ theme }) => theme.color.secondary.main} !important;
          color: ${({ theme }) => theme.color.secondary.contrastText} !important;
        }

        .p-checkbox .p-checkbox-box.p-highlight {
          color: ${({ theme }) => theme.color.secondary.main} !important;
        }
    }

    ul {
        list-style: none;
    }

    body::-webkit-scrollbar {
        width: 12px;
      }

      body::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.color.primary.main};
      }

      body::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.primary.contrastText};
        border-radius: 50px;
      }
`