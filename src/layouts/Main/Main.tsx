import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
// import Topbar from "./components/Topbar";
// import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./style";
import { Sidebar, Topbar } from "./components";

interface Props {
  children: any;
}

const Main: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const handleSidebarOpen = function() {
    setOpenSidebar(true);
  };

  const handleSidebarClose = function() {
    setOpenSidebar(false);
  };
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} className={clsx({[classes.topBarDesktop]: isDesktop })} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};

export default Main;
