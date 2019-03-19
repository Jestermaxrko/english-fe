
import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { color } from './color';

const theme = createMuiTheme({

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
      main: '#ffcd50',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#3a465a',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    action: {
      disabledBackground: '#ffd77388'
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