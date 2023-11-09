import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({

  palette: {
    type: 'light',
    primary: {

      main: '#00C3FF',
    },
    secondary: {
      main: '#01FF5A',
    },
    success: {
      main: '#004EE0',
    },
  },
  typography: {
      fontFamily: 'Roboto'
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
