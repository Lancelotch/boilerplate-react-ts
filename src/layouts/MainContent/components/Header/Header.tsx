import React from "react";
import useStyles from "./styles";
import {
  Paper,
  Typography,
} from "@material-ui/core";

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({
  title
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.header}>
          {title}
        </Typography>
      </Paper>
    </div>
  );
};

export default Header;
