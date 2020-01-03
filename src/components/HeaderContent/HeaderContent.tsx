import React, { useState } from "react";
import useStyles from "./style";
import AddIcon from "@material-ui/icons/Add";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import CloudDownload from "@material-ui/icons/CloudDownload";
import {
  Paper,
  Button,
  Typography,
  Grid,
  Fab,
  ButtonGroup,
  Popover
} from "@material-ui/core";
import Select from "../CustomSelect";
import {
  DateRangePicker,
  DateRange
} from "@matharumanpreet00/react-daterange-picker";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

interface Props {
  onClickObject: () => void;
  onClickTopic: () => void;
  onSelectTopic: () => void;
  onChangeDate: () => void;
  onDownload: () => void;
}

const HeaderContent: React.FC<Props> = ({
  onClickObject,
  onClickTopic,
  onSelectTopic,
  onChangeDate,
  onDownload
}) => {
  const classes = useStyles();
  const [dateRange, setDateRange] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeDate = (date: any) => {
    const startDate = `${date.startDate.getDay()}/${date.startDate.getMonth()+1}/${date.startDate.getFullYear()}`;
    const endDate = `${date.endDate.getDay()}/${date.endDate.getMonth()+1}/${date.endDate.getFullYear()}`;
    setDateRange(`${startDate} - ${endDate}`);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.header}>
          Overview
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={2} md={2}>
            <Button
              variant="contained"
              color="primary"
              size="small"
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
          </Grid>
          <Grid item sm={2} md={2}>
            <Select onChange={e => console.log(e)} value={"10"} />
          </Grid>
          <Grid item sm={4} md={4} />
          <Grid item sm={4} md={4}>
            <Grid container spacing={3} justify="space-between">
              <Grid item sm={1} md={1} />
              <Grid item sm={9} md={9}>
                <ButtonGroup>
                  <Button size="small" startIcon={<DateRangeOutlinedIcon />}>
                    <Typography variant="subtitle2">
                      {dateRange}
                    </Typography>
                  </Button>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={handleClick}
                    className={classes.date}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item sm={2} md={2}>
                <Fab color="primary" size="small">
                  <CloudDownload />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <DateRangePicker
            open={true}
            onChange={handleChangeDate}
          />
        </Popover>
      </Paper>
    </div>
  );
};

export default HeaderContent;
