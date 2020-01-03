import React from "react";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  image?: string;
  account?: string;
  message?: string;
  link?: string;
}

const FieldContent: React.FC<Props> = ({ image, account, message, link }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={3}>
        <img
          src="https://scontent-cgk1-1.xx.fbcdn.net/v/t1.0-9/13925303_10205956941596839_2278238187831400628_n.jpg?_nc_cat=100&_nc_ohc=zQKn-omks6gAQk3PDLg_I8dVRaXEnWkWATMhNM77tIwCIRaZ5OPgNmGsg&_nc_ht=scontent-cgk1-1.xx&oh=8a10209a36ab2756a13c84e4c006611b&oe=5E9A1853"
          alt=""
          className={classes.image}
        />
      </Grid>
      <Grid item md={9}>
        <Grid container>
          <Grid item md={12}>
            @account
          </Grid>
          <Grid item md={12}>
            Harga 415jt Mumpung masih diskon 40jt ya gaes. Cukup 375jt aja udah
            free shm pajak dan notaris
          </Grid>
          <Grid item md={12}>
            <Link href="facebook.com/barnas.nasrulloh.5">
              facebook.com/barnas.nasrulloh.5
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FieldContent;
