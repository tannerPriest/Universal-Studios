import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';
import VoltaireFont from "./Fonts/Voltaire-Regular.ttf";

const Voltaire = {
    fontFamily: 'Voltaire',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Voltaire'),
      local('Voltaire-Regular'),
      url(${VoltaireFont}) format('ttf')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Voltaire",
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [Voltaire],
          },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme