import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import CardAnalytic from "../../components/CardAnalytic";
import LineChart from "../../components/LineChart";
import { Header, Body } from "../../layouts/MainContent";
import { dummyAnalytics } from "../../helpers/dummyAnalytics";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

const Overview: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

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

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  return (
    <React.Fragment>
      <div>
        <div
          className={clsx({
            [classes.header]: true,
            [classes.mobileSize]: !isDesktop
          })}
        >
          <Header
            onClickObject={handleClickObject}
            onClickTopic={handleClickTopic}
            onSelectTopic={handleSelectTopic}
            onDownload={handleDownload}
            onChangeDate={handleChangeData}
          />
        </div>
        <Body>
          <Grid container spacing={3}>
            {dummyAnalytics.map(
              ({ id, title, value, progress, progressValue }) => (
                <Grid item xs={12} sm={6} md={3} lg={3} key={id}>
                  <CardAnalytic
                    title={title}
                    value={value}
                    progress={progress}
                    progressValue={progressValue}
                  />
                </Grid>
              )
            )}
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
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <LineChart />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <LineChart />
            </Grid>
          </Grid>
        </Body>
      </div>
    </React.Fragment>
  );
};

export default Overview;
