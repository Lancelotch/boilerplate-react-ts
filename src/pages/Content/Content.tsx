import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import CardAnalytic from "../../components/CardAnalytic";
import LineChart from "../../components/LineChart";
import { CardItem, HeatMapChart, PieChart } from "../../components";
import { Header, Body } from "../../layouts/MainContent";
import { dummyAnalytics } from "../../helpers/dummyAnalytics";
import { TablePostmade } from "./components";
import { useObjectsContext } from "../../contexts/Objects/Objects";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

const Content: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const ref = React.useRef<HTMLDivElement>(null);
  const [isPostmadeLoading, setPostmadeLoading] = useState(false);
  const [isPostmadeRefresh, setPostmadeRefresh] = useState(false);
  const { handleShowObjects } = useObjectsContext();

  const handleClickObject = () => {
    handleShowObjects();
  };
  const handleClickTopic = () => {
    console.log("click");
  };
  const handleSelectTopic = () => {
    console.log("click");
  };
  const handleDownload = () => {
    console.log("test");
  };
  const handleChangeData = () => {
    console.log("click");
  };

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  const handlePostmadePositif = function() {
    setPostmadeLoading(true);
    setTimeout(() => {
      setPostmadeLoading(false);
      setPostmadeRefresh(false);
    }, 2000);
  };

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
            targetRef={ref}
          />
        </div>
        <div ref={ref} id="content-body">
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
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <LineChart />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardItem
                  title="What are your best posts?"
                  loading={isPostmadeLoading}
                  refresh={isPostmadeRefresh}
                  onClick={handlePostmadePositif}
                >
                  <TablePostmade title={"Top Postmade"} data={[]} />
                </CardItem>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardItem
                  title="What are your worst posts?"
                  loading={isPostmadeLoading}
                  refresh={isPostmadeRefresh}
                  onClick={handlePostmadePositif}
                >
                  <TablePostmade title={"Worst Postmade"} data={[]} />
                </CardItem>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardItem
                  title="When do your audiences engage?"
                  height={280}
                  loading={isPostmadeLoading}
                  refresh={isPostmadeRefresh}
                  onClick={handlePostmadePositif}
                >
                  <HeatMapChart title="Peak time" />
                </CardItem>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <CardItem
                  title="When do your audiences engage?"
                  height={280}
                  loading={isPostmadeLoading}
                  refresh={isPostmadeRefresh}
                  onClick={handlePostmadePositif}
                >
                  <PieChart title="Postmade from Media" />
                </CardItem>
              </Grid>
            </Grid>
          </Body>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
