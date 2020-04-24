import React, { useEffect } from "react";
import useStyle from "./style";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

interface Props {
  children: any;
}

const Body: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyle();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.mobileSize]: !isDesktop,
      })}
    >
      {children}
    </div>
  );
};

export default Body;
