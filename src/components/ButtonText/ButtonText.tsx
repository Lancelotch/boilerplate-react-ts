import React from "react";
import { Typography } from "@material-ui/core";
import useStyle from './style';

interface Props {
  children: any,
  onClick: () => void
}

const ButtonText: React.FC<Props> = ({children, onClick}) => {
  const classes = useStyle();
  return (
    <span onClick={onClick} className={classes.text}>
      <Typography variant="button">
        {children}
      </Typography>
    </span>
  );
};

export default ButtonText;