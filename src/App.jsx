import { ThemeProvider } from 'styled-components';
import { Routes } from './routes'
import { Theme } from './styles/theme';
import { GlobalStyle } from './styles/global'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
