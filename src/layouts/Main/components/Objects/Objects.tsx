import React from "react";
import { Drawer, Grid, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

interface IProps {
  open: boolean;
  variant: "permanent" | "persistent" | "temporary" | undefined;
}
const Objects: React.FC<IProps> = ({ open, variant }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={open}
      variant={variant}
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.root}>
        <Grid container>
          <Grid item md={12}>
            <TextField
              placeholder="search"
              margin="normal"
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position="start">
              //       <SearchIcon />
              //     </InputAdornment>
              //   )
              // }}
            />
          </Grid>
          <Grid item md={12}>
            <div className={classes.objects}>Object</div>
            <div className={classes.objects}>Object</div>
            <div className={classes.objects}>Object</div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

export default Objects;
