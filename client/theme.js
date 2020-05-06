import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        light: '#fce4ec',
        main: '#f48fb1',
        dark: '#ec407a',        
      },      
    }
  })

  export default theme