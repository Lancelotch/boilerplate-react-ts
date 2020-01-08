import React, { useState } from "react";
import HideOnScroll from "../../components/HideOnScroll";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import CardAnalytic from "../../components/CardAnalytic";
import LineChart from "../../components/LineChart";
import {
  HeaderContent,
  CardItem,
  HeatMapChart,
  PieChart
} from "../../components";
import { Body } from "../../layouts/MainContent";
import { dummyAnalytics } from "../../helpers/dummyAnalytics";
import { TablePostmade } from "./components";
import { useObjectsContext } from "../../contexts/Objects/Objects";
import Pdf from "react-to-pdf";

const Content: React.FC = () => {
  const classes = useStyles();
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

  const options = {
    unit: "px",
    format: [840, 1560]
  };

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
        <div ref={ref}>
          <Body>
            <Pdf targetRef={ref} filename="generate.pdf" options={options}>
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
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
