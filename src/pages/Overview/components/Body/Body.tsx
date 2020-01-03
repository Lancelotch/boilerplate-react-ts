import React from "react";
import useStyle from "./style";

interface Props {
  children: any;
}

const Body: React.FC<Props> = ({ children }) => {
  const classes = useStyle();
  return <div className={classes.root}>{children}</div>;
};

export default Body;
