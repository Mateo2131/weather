import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  colors: {
    bg: {
      light: '#ffffff',
      dark: '#13111c',
    },
    text: {
      light: '#1d1d1d',
      dark: '#e5e7eb',
    },
    border: {
      light: '#18181b',
      dark: '#6b7280',
    }
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Lato, sans-serif',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        minHeight: '100vh',
        fontSize: '1rem',
        backgroundColor: mode('bg.light', 'bg.dark')(props),
        color: mode('text.light', 'text.dark')(props),
      },
    }
    )
  }
})

export default theme