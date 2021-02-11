import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import SignUpHeader from "./Header";
import MainContentCard from './MainContent/MainContentCard'

const SignupMain = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SignUpHeader />
      </Grid>
      <Grid item xs={12}>
        <MainContentCard/>
      </Grid>
      <Grid>
        <Paper> SignuP Footer</Paper>
      </Grid>
    </Grid>
  );
};

export default SignupMain;
