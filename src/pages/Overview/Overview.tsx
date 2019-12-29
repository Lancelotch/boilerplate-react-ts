import React, {useState} from "react";
import { Header } from "./components";
import HideOnScroll from "../../components/HideOnScroll";
import { CssBaseline } from "@material-ui/core";
import useStyles from './style';

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
      <HideOnScroll threshold={200}>
        <div className={classes.header}>
          <Header
            onClickObject={handleClickObject}
            onClickTopic={handleClickTopic}
            onSelectTopic={handleSelectTopic}
            onDownload={handleDownload}
            onChangeDate={handleChangeData}
          />
        </div>
      </HideOnScroll>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
      <p>TEst</p>
    </React.Fragment>
  );
};

export default Overview;
