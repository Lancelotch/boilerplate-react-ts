import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {lightGreen, yellow, orange} from '@material-ui/core/colors';
import useStyles from "./styles";

const data = {
  total: 128,
  engagements: [
    {
      id: 111,
      label: "Talk",
      value: 75
    },
    {
      id: 112,
      label: "Applause",
      value: 20
    },
    {
      id: 113,
      label: "Virality",
      value: 33
    }
  ]
};

interface PropsBar {
  length: number;
  index: number;
}

const Bar: React.FC<PropsBar> = ({ length, index }) => {
  const classes = useStyles();
  const getColor = function(index: number) {
    const colors = [lightGreen['A400'], yellow['A400'], orange['A400']];
    return colors[index];
  };
  return (
    <div
      style={{ width: `${length}%`, backgroundColor: getColor(index) }}
      className={classes.bar}
    />
  );
};

const FieldEngagement: React.FC = () => {
  const classes = useStyles();
  const getPercentage = function(total: number, value: number) {
    const percentage = ( value / total) * 100;
    return percentage;
  };

  return (
    <Grid container>
      <Grid item md={12} >
        <Typography variant="body1"className={classes.typography}>{`Total : ${data.total}`}</Typography>
      </Grid>
      <Grid item md={12}>
        <Grid container >
          {data.engagements.map((engagement, index) => (
            <React.Fragment key={engagement.id}>
              <Grid item md={4}>
                <Typography variant="body2" className={classes.typography}>{engagement.label}</Typography>
              </Grid>
              <Grid item md={6}>
                <Bar length={getPercentage(data.total, engagement.value)} index={index}/>
              </Grid>
              <Grid item md={2}>
                <Typography variant="body2">{engagement.value}</Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FieldEngagement;
