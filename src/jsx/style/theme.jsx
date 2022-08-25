import { createTheme } from '@mui/material/styles';

// import Breakpoint from './breakpoint';

const Theme = createTheme({
  typography: {
    h1: {
      fontSize: "44px",
      lineHeight: "52px",
      letterSpacing: "-0.01em",
      fontWeight: 400,
      color: '#042d43', // Logo Primary
      
    },
    h2: {
      fontSize: "35px",
      lineHeight: "42px",
      fontWeight: 400,
      color: '#042d43', // Logo Primary
    },
    h3: {
      fontSize: "28px",
      lineHeight: "34px",
      fontWeight: 400,
      color: '#042d43', // Logo Primary
    },
    h4: {
      fontSize: "25px",
      lineHeight: "32px",
      letterSpacing: '-0.01em',
      fontWeight: 400,
      color: '#042d43', // Logo Primary
    },
    h5: {
      fontSize: "18px",
      lineHeight: "auto",
      letterSpacing: '0.03em',
      fontWeight: 500,
      color: '#042d43', // Logo Primary
    },
    h6: {
      fontSize: "16px",
      lineHeight: "auto",
      fontWeight: 500,
      color: '#042d43', // Logo Primary
    },
    subtitle1: {
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "0.0056em",
      fontWeight: 300
    },
    subtitle2: {
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "0.0056em",
      fontWeight: 400
    }, 
    body1: {
      // fontSize: "16px",
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 300,
      color: '#011824', // Logo Primary
    }, 
    body2: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: 400
    }, 
    caption: {
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: '-0.02em',
      fontWeight: 400
    },
  },
});

export default Theme;


