import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";

interface Props {
  children: any;
}

const Authentication: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Authentication;
