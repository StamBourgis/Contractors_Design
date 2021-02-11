import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundPicBeach from "../../Media/Background_Beach.jpeg";
import BackgroundPicDesk from "../../Media/Background_pic_desk.jpg";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "500px",
    backgroundImage: `url(${BackgroundPicDesk})`,
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: { backgroundSize: "contain" },
    [theme.breakpoints.up("md")]: { backgroundSize: "cover" }
  }
}));

const MainContent = () => {
  const classes = useStyles();

  return <Paper className={classes.root}></Paper>;
};

export default MainContent;
