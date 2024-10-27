import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8A0039',
      contrastText: '#FFDB03',
    },
    secondary: {
      main: '#FFDB03',
      contrastText: '#8A0039',
    },
  },
  typography: {
    h1: {
      fontSize: '2em',
    },
    h2: {
      fontSize: '1.8em',
    },
  },
  components: {
    MuiButton: {},
  },
});

export default theme;
