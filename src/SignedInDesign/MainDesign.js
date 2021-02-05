import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import Header from "./Header";

const MainDesign = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper> Sidebar </Paper>
      </Grid>
      <Grid item xs={12} sm={10}>
        <Paper> Main Content </Paper>
      </Grid>
      <Grid>
        <Paper>Footer</Paper>
      </Grid>
    </Grid>
  );
};

export default MainDesign;
