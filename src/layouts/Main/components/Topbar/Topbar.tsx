import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';

interface Props {
    className?: string;
    onSidebarOpen?: () => void
}

const Topbar:React.FC<Props> = (props) => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="NoLimit"
            src="http://nolimit.id/assets/img/logo.png"
            className={classes.logo}
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
