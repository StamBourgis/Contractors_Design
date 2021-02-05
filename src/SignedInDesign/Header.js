import React, { useState } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Grid from "@material-ui/core";
// import Drawer from "@material-ui/core/Drawer";

// import List from "@material-ui/core/List";
// // import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";

// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  function hideDrawer() {
    setOpenDrawer((prevState) => !prevState);
  }

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon onClick={hideDrawer} />
        </IconButton>
        {openDrawer ? "Open" : "Closed"}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
