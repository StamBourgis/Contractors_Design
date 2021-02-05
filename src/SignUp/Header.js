import React, { useState } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import LgHeaderButtons from "./lgUp/lgUpHeaderButtons";

const SignUpHeader = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={3}>
            <Paper>Label</Paper>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={6} m={0}>
              <Grid container justify="space-between" spacing={1}>
                <Grid item lgUp={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    Space
                  </Button>
                </Grid>
                <Grid item lgUp={4}>
                  <LgHeaderButtons />
                </Grid>
                <Grid item lgUp={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    More Space
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Grid item xs={3}>
            <Hidden mdDown>
              <Grid container justify="flex-end">
                <Button variant="contained" color="secondary">
                  Join Button
                </Button>
              </Grid>
            </Hidden>
            <Hidden lgUp>
              <Grid container justify="flex-end" spacing={3}>
                <Hidden smDown>
                  <Grid item>
                    <Button>Join Button</Button>
                  </Grid>
                </Hidden>
                <Grid item>
                  <MenuIcon></MenuIcon>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SignUpHeader;
