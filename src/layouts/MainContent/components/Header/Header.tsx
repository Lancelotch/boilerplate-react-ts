import React, { useState, useEffect } from "react";
import useStyles from "./style";
import CloudDownload from "@material-ui/icons/CloudDownload";
import {
  Paper,
  Typography,
  Grid,
  Fab,
  Popover
} from "@material-ui/core";
import { DateRangePicker } from "@matharumanpreet00/react-daterange-picker";
import { months } from "../../../../helpers";
import currentDate from "../../../../helpers/currentDate";
import Pdf from "react-to-pdf";
import { ObjectButton, TopicButton, ObjectCard } from "./components";
import DateButton from "./components/DateButton";

interface Props {
  onClickObject: () => void;
  onClickTopic: () => void;
  onSelectTopic: () => void;
  onChangeDate: () => void;
  onDownload: () => void;
  targetRef?: any;
}

const Header: React.FC<Props> = ({
  onClickObject,
  onClickTopic,
  onSelectTopic,
  onChangeDate,
  onDownload,
  targetRef
}) => {
  useEffect(() => {
    const today = `${currentDate()} - ${currentDate()}`;
    setDateRange(today);
  }, []);

  const classes = useStyles();

  //Date Range
  const [dateRange, setDateRange] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeDate = (date: any) => {
    const startDate = `${date.startDate.getDate()} ${months(
      date.startDate.getMonth()
    )} ${date.startDate.getFullYear()}`;
    const endDate = `${date.endDate.getDate()} ${months(
      date.endDate.getMonth()
    )} ${date.endDate.getFullYear()}`;
    setDateRange(`${startDate} - ${endDate}`);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const options = {
    unit: "px",
    format: [840, 1560]
  };
  
  //Object
  const [anchorElObject, setAnchorElObject] = React.useState<HTMLButtonElement | null>(null);
  const handleClickObject = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElObject(event.currentTarget);
  };
  const handleCloseObject = function(){
    setAnchorElObject(null);
  }
  const openObject = Boolean(anchorElObject);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.header}>
          Overview
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={2} md={2}>
            <ObjectButton onClick={handleClickObject} />
            <ObjectCard open={openObject} anchorEl={anchorElObject} onClose={handleCloseObject} onSubmit={()=>console.log('submit')}/>
          </Grid>
          <Grid item sm={2} md={2}>
            <TopicButton onClick={onClickTopic} />
          </Grid>
          <Grid item sm={2} md={4} />
          <Grid item sm={6} md={4}>
            <Grid container justify="space-between">
              <Grid item sm={2} md={2} />
              <Grid item sm={8} md={8}>
                <DateButton className={classes.float} onClick={ handleClick } dateRange={dateRange} />
              </Grid>
              <Grid item sm={2} md={2}>
                <Pdf
                  targetRef={targetRef}
                  filename="generate.pdf"
                  options={options}
                >
                  {({ toPdf }) => (
                    <Fab
                      color="primary"
                      size="small"
                      className={classes.float}
                      onClick={toPdf}
                    >
                      <CloudDownload />
                    </Fab>
                  )}
                </Pdf>
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
          <DateRangePicker open={true} onChange={handleChangeDate} />
        </Popover>
      </Paper>
    </div>
  );
};

export default Header;
