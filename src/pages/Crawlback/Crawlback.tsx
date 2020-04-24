import React from "react";
import { Grid, Card } from "@material-ui/core";
import {
  DateRangePicker,
} from "@matharumanpreet00/react-daterange-picker";
import useStyles from "./styles";
import CrawlbackContainer, { FormContainer } from "./CrawlbackContainer";
import FormCrawlback from "./components/FormCrawlback";
import TableOngoingCrawlback from './components/TableOngoingCrawlback';
import TableFinishedCrawlback from "./components/TableFinishedCrawlback";

const Crawlback: React.FC = () => {
  const classes = useStyles();
  return (
    <CrawlbackContainer>
      <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <Card className={classes.card}>
            <FormContainer>
              <FormCrawlback />
            </FormContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={8} xl={8}>
          <DateRangePicker
            open={true}
            onChange={(range) => console.log(range)}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Card className={classes.card}>
            <TableOngoingCrawlback data={[{id: "1", job: "job", progress: "progress", status: "status", worker: "worker"}]} title="Ongoing Crawlback"/>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Card className={classes.card}>
            <TableFinishedCrawlback data={[{id: "1", job: "job", start: "start", finish: "finish", dataCount: 24}]} title="Finished Crawlback"/>
          </Card>
        </Grid>
      </Grid>
      {/* <Project>
        <ProjectV />
      </Project> */}
      </div>
    </CrawlbackContainer>
  );
};

export default Crawlback;
