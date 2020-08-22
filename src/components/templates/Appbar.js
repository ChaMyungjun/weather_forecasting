import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            The Weather
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
