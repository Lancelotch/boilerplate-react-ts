import React, { forwardRef } from "react";
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { useLocation} from "react-router";
import clsx from "clsx";
import { List, ListItem, Button } from "@material-ui/core";
import useStyles from "./style";

const CustomRouterLink = forwardRef<any, RouterLinkProps>((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

interface IPages {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface IPropsNav {
  className?: string;
  pages: IPages[];
}

const SidebarNav: React.FC<IPropsNav> = props => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();
  const location = useLocation();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            className={`${classes.button} ${(page.href === location.pathname) && classes.active}` }
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
