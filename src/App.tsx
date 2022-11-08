import { Home } from 'pages/Home'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'global/styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
