import React from "react";
import clsx from "clsx";
import { Drawer } from "@material-ui/core";
import { SidebarNav } from "./components";
import useStyles from "./style";
import pages from './pageList';

interface Props {
  open: boolean;
  variant: "permanent" | "persistent" | "temporary" | undefined;
  onClose: () => void;
  className?: string;
}

const Sidebar: React.FC<Props> = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
