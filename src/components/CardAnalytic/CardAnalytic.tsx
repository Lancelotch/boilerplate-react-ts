import React from "react";
import clsx from "clsx";
import useStyles from "./style";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Avatar
} from "@material-ui/core";

interface Props {
  title: string;
  value: number;
  progress: "up" | "down" | "netral" | string;
  progressValue: number;
  className?: string;
}

const CardAnalytic: React.FC<Props> = ({
  title,
  value,
  progress,
  progressValue,
  className,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="body1">
          {title}
        </Typography>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography className={classes.value} variant="h1">
              {value}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.progress}>
              <Divider orientation="vertical" variant="fullWidth" />
              <div className={classes.contentRight}>
                <Avatar className={classes.avatar}>
                  {progress === "up" ? (
                    <ArrowUpwardIcon className={classes.progressUpIcon} />
                  ) : (
                    <ArrowDownwardIcon className={classes.progressDownIcon} />
                  )}
                </Avatar>
                <Typography
                  className={classes.progressValue}
                  variant="subtitle1"
                >
                  {`${progressValue}%`}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardAnalytic;
