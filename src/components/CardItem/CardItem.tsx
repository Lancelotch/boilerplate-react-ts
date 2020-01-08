import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  CircularProgress,
  Fab
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import useStyles from "./styles";

interface Props {
  title: string;
  children: any;
  height?: any;
  loading?: boolean | false;
  refresh?: boolean | false;
  onClick?: () => void;
}

const CardItem: React.FC<Props> = ({
  title,
  children,
  height,
  loading,
  refresh,
  onClick
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <CardContent
        style={{ maxHeight: height }}
        className={
          loading || refresh ? classes.contentLoading : classes.content
        }
      >
        {loading ? (
          <CircularProgress
            disableShrink
            className={classes.loading}
            size={80}
          />
        ) : refresh ? (
          <Fab
            color="primary"
            className={classes.refreshButton}
            onClick={onClick}
          >
            <RefreshIcon className={classes.refreshIcon} />
          </Fab>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
};

export default CardItem;
