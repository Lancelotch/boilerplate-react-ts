import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  children: any;
  title: string | undefined;
}

const TitleContent: React.FC<Props> = ({ children, title }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="subtitle2" className={classes.subTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid item md={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default TitleContent;
