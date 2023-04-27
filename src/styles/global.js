import { createGlobalStyle } from 'styled-components'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

import 'primeicons/primeicons.css'


export default createGlobalStyle`
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
        background: #ececdd;
        color: #333;
        -web-kit-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    body::-webkit-scrollbar {
        width: 12px;
      }

      body::-webkit-scrollbar-track {
        background: #648a64;
      }

      body::-webkit-scrollbar-thumb {
        background-color: #e1e3ac;
        border-radius: 50px;
      }
`