import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton:{
      root: {
        fontSize: '12px'
      }
    }
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;