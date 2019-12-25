import React from "react";
import { Grid, Box, Hidden } from "@material-ui/core";
import useStyles from "./style";
import Image from "../../components/Image";
import imageLogin from "../../assets/images/image1.png";

interface Props {
  children: any;
}

const Authentication: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        {children}
      </Grid>
      <Grid item md={7} lg={7}>
        <Hidden only={["xs", "sm"]}>
        <Box borderLeft={2} className={classes.root} borderColor="primary.light">
          <Grid item container alignItems="center" justify="center" spacing={2}>
            <Image
              src={imageLogin}
              alt={"image Login"}
              width={480}
              height={460}
            />
          </Grid>
        </Box>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Authentication;
