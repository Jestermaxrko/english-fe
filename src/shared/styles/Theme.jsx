
import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { color } from './color';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },

  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpointsun
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },

  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      text: { // Name of the rule
        color: color.dark, // Some CSS
        fontWeight: 600
      },
      contained: {
        // primary: {
        //   // color: '#32353a'
        //   color: '#fff'
        // },
        // color: `${color.light}!important`,
        fontWeight: 600,
        boxShadow: 'none'
      },
    },
  },

  layout: {
    row: {
      display: 'flex',
    },
    column: {
      display: 'flex',
      flexDirection: 'column'
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  color,
  palette: {
    primary: {
      main: '#5a95e6',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#3a465a',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    action: {
      disabledBackground: '#9da7b4'
    },
    // error: will use the default color

    //custom colors

  },
});

const ThemeWrapper = props => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  );
};
export default ThemeWrapper;
