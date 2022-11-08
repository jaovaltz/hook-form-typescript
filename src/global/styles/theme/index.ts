import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

export const theme = createTheme(
  {
    palette: {
      secondary: {
        main: '#655B59',
        light: '#655B59',
        dark: '#655B59'
      }
    },
    typography: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeightRegular: 550,
      h1: {
        fontWeight: 800,
        fontSize: '38px'
      }
    }
  },
  ptBR
)
