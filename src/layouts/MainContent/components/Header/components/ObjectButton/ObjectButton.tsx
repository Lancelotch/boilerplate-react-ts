import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useStyles from "./styles";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ObjectButton: React.FC<Props> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      onClick={onClick}
      fullWidth
      //className={classes.button}
    >
      <Grid container justify="space-between">
        <Grid item>
          <Typography className={classes.object}>
            Object
          </Typography>
        </Grid>
        <Grid item className={classes.icon}>
          <ArrowDropDownIcon />
        </Grid>
      </Grid>
    </Button>
  );
};

export default ObjectButton;
