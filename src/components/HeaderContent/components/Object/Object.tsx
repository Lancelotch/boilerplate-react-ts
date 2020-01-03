import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";

interface Props {
  onClick: () => void;
}

const Object: React.FC<Props> = ({ onClick }) => {
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
          <Typography variant="inherit" className={classes.object}>
            Object
          </Typography>
        </Grid>
        <Grid item className={classes.icon}>
          <AddIcon />
        </Grid>
      </Grid>
    </Button>
  );
};

export default Object;
