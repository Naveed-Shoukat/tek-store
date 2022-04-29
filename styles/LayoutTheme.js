import { createTheme } from '@mui/material/styles';

const LayoutTheme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#202045',
    },
    secondary: {
      main: '#208080',
    },
  },
});

export default LayoutTheme;
