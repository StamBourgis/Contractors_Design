import { createMuiTheme } from "@material-ui/core";
import { indigo, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#d50000"
    }
  }
});

theme.props = {
  MuiDrawer: {
    variant: "persistent"
  },
  MuiIconButton: {
    color: "inherit"
  },
  MuiAppBar: {
    position: "relative",
    color: "primary"
  },
  MuiButton: {
    disableElevation: true
  },
  MuiInputLabel: {
    shrink: true
  }
};

theme.overrides = {
  MuiDrawer: {
    Paper: {
      width: 36
    }
  },
  MuiIconButton: {
    root: {
      marginRight: 36
    }
  },

  MuiButton: {
    root: {
      borderRadius: 0
    },
    // containedPrimary: {
    //   "&:hover": {
    //     backgroundColor: amber[500],
    //     color: indigo[500]
    //   }
    // }
  },
  MuiTypography: {
    root: {
      flex: 1
    }
  }
};

export default theme;
