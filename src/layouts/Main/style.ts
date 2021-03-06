import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    //paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
     // paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: "100%"
  },
  topBarDesktop: {
    width: 240,
    left: 0
  }
}));

export default useStyles;
