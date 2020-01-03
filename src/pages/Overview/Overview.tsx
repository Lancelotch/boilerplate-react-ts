import React from "react";
import { Body } from "./components";
import HideOnScroll from "../../components/HideOnScroll";
import {
  CssBaseline,
  Grid
} from "@material-ui/core";
import useStyles from "./style";
import CardAnalytic from "../../components/CardAnalytic";
import LineChart from "../../components/LineChart";
import { HeaderContent } from "../../components";

const Overview: React.FC = () => {
  const classes = useStyles();

  const handleClickObject = () => {
    console.log("click");
  };
  const handleClickTopic = () => {
    console.log("click");
  };
  const handleSelectTopic = () => {
    console.log("click");
  };
  const handleDownload = () => {
    console.log("click");
  };
  const handleChangeData = () => {
    console.log("click");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll threshold={80}>
        <div className={classes.header}>
          <HeaderContent
            onClickObject={handleClickObject}
            onClickTopic={handleClickTopic}
            onSelectTopic={handleSelectTopic}
            onDownload={handleDownload}
            onChangeDate={handleChangeData}
          />
        </div>
      </HideOnScroll>
      <Body>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <CardAnalytic
              title="Total Engagement"
              value={1500}
              progress="up"
              progressValue={2}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <CardAnalytic
              title="Total Engagement"
              value={1500}
              progress="down"
              progressValue={2}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <CardAnalytic
              title="Total Engagement"
              value={1500}
              progress="down"
              progressValue={2}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <CardAnalytic
              title="Total Engagement"
              value={1500}
              progress="up"
              progressValue={2}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LineChart />
          </Grid>
        </Grid>
      </Body>
    </React.Fragment>
  );
};

export default Overview;