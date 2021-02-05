import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const LgUpButtons = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          Link 1
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          Link 2
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          Link 3
        </Button>
      </Grid>
    </Grid>
  );
};

export default LgUpButtons;
