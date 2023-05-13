import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { Theme } from './styles/theme';
import { GlobalStyle } from './styles/global'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyle/>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </ThemeProvider>
  )
}

export default App
