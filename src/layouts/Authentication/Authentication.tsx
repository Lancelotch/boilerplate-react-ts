import React from "react";
import { Grid, Box } from "@material-ui/core";
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
      <Grid item md={4}>
        {children}
      </Grid>
      <Grid item md={8}>
        <Box borderLeft={2} borderColor="primary.main">
          <Grid item container alignItems="center" justify="center" spacing={2}>
            <Image
              src={imageLogin}
              alt={"image Login"}
              width={460}
              height={460}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Authentication;
