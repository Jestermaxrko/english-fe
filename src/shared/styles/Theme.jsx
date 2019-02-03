
import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

  layout: {
    row: {
      display: 'flex',
    },
    column: {
      display: 'flex',
      flexDirection: 'column'
    }
  },

  colors: {
    darkPastelGreen: '#43c43e',
    greyishBrown: '#4a4a4a',
    grayBlue: '#4a90e2',
    orangeyYellow: '#f5a623',
    darkMint: '#41bf6b',
    lightBlueGrey: '#bfcbde',
    blueGrey: '#7b8dab',
    textColorModalWindow: '#323642',
    lightGreyBlue: '#a4b3ca',
    grapefruit: '#f15d5d',
    grey: '#3a465a',
    lightGrey: '#4b576c',
    mediumGrey: '#2d3747',
    darkGrey: '#202938',
    blue: '#4e95fe',
    lightPeriwinkle: '#d9e0ed',
    veryLightBlue: '#eaedf3',
    aqua: '#17d1c8',
    white: '#fff',
    inputBorder: '#9eb8d6',
    selectedBox: '#515b6e',
    inputPlaceholder: '#4d5d77',
    green: '#42f477',
    darkGreen: '#248c43'
  },

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