import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import useStyles from "./styles";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  dateRange: string;
  className: any;
}

const DateButton: React.FC<Props> = ({ onClick, dateRange, className }) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      onClick={onClick}
      fullWidth
      className={className}
    >
      <Grid container justify="space-between">
        <Grid item className={classes.icon}>
          <DateRangeOutlinedIcon />
        </Grid>
        <Grid item>
          <Typography className={classes.object}>{dateRange}</Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default DateButton;
