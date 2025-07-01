import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: { fontFamily: 'Sarcolenta, sans-serif', color: "#b98a2d" },
    h2: { fontFamily: 'Sarcolenta, sans-serif', color: "#b98a2d" },
    h3: { fontFamily: 'Sarcolenta, sans-serif', color: "#b98a2d" },
    h4: { fontFamily: 'Sarcolenta, sans-serif', color: "#b98a2d" },
    h5: { fontFamily: 'Sarcolenta, sans-serif', color: "#b98a2d" },
    h6: { fontFamily: 'Sarcolenta, sans-serif', color: "#b98a2d" },
    body1: { fontFamily: 'Montserrat, sans-serif', color: "#a2a2a2" },
    body2: { fontFamily: 'Montserrat, sans-serif', color: "#a2a2a2" },
  },
  palette: {
    primary: {
      main: "#b98a2d",
    },
    secondary: {
      main: "#a2a2a2"
    }
  }
});

export default theme;
