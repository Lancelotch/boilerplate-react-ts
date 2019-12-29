import React from "react";
import useStyles from "./style";
import AddIcon from "@material-ui/icons/Add";
import {
  Paper,
  Button,
  Typography,
  Grid,
  Select,
  InputLabel
} from "@material-ui/core";

interface Props {
  onClickObject: () => void;
  onClickTopic: () => void;
  onSelectTopic: () => void;
  onChangeDate: () => void;
  onDownload: () => void;
}

const Header: React.FC<Props> = ({
  onClickObject,
  onClickTopic,
  onSelectTopic,
  onChangeDate,
  onDownload
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        Overview
      </Typography>
      <Grid container spacing={3} >
        <Grid item sm={2} md={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            fullWidth
            //className={classes.button}
            endIcon={<AddIcon />}
          >
            Object
          </Button>
        </Grid>
        <Grid item sm={2} md={2}>
          {/* <InputLabel id="topic-select-label">Topic</InputLabel> */}
          <Select
            native
            //labelId="topic-select-label"
            value={10}
            onChange={() => console.log("change")}
            fullWidth
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </Grid>
        <Grid item sm={2} md={2} />
        <Grid item sm={2} md={2} />
        <Grid item sm={2} md={2} />
      </Grid>
    </Paper>
  );
};

export default Header;
