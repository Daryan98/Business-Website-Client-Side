import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import CurrencySelector from '../../Components/Selelcts';
import image from '../../Images/2.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      height: '80vh',
      background: `url(${image}) rgba(0,0,0,0.5)`,
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay',
      position: 'relative',
      color: '#FFFFFF',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    navItems: {
      margin: '0 auto',
    },
    navbar: {
      color: '#FFFFFF',
      background: 'transparent',
    },
    toolBar: {
      height: 100,
    },
    navbarRoot: {
      boxShadow: '0px 5px 5px -6px rgba(0,0,0,0.2)',
    },
    message: {
      position: 'absolute',
      bottom: 50,
      left: 30,
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    openDrewer: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, openDrewer: open });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'All Products', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar 
        classes={{
          root: classes.navbarRoot,
          colorPrimary: classes.navbar
          }}>
        <Toolbar 
        classes={{root: classes.toolBar}}>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Shop
          </Typography>
          <div className={classes.navItems}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Shop</Button>
          </div>

          {/* <CurrencySelector withOutLabel={false}/> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div className={classes.message}>
          <h1>Welcome to My Shop</h1>
          <span>my message</span>
      </div>

      <Drawer 
        open={state.openDrewer} 
        onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}