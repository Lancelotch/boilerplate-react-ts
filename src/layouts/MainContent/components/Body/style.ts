import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(3)
  },
  mobileSize: {
    paddingTop: theme.spacing(11)
  }
}));

export default useStyles;
