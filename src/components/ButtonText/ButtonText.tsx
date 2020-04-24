import React from "react";
import { Typography } from "@material-ui/core";
import useStyle from './style';

interface Props {
  children: any;
  variant?: "button" | "inherit" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "srOnly" | undefined;
  onClick: () => void;
}

const ButtonText: React.FC<Props> = ({children, variant, onClick}) => {
  const classes = useStyle();
  return (
    <span onClick={onClick} className={classes.button}>
      <Typography color="primary" variant={variant} className={classes.text}>
        {children}
      </Typography>
    </span>
  );
};

export default ButtonText;