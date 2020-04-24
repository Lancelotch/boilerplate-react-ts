import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing(4),
    padding: theme.spacing(4, 7)
  },
  mobileSize: {
    paddingTop: theme.spacing(11)
  }
}));

export default useStyles;
