import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Routes from "./Routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Routes />
      </Paper>
    </ThemeProvider>
  );
}
