import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    height: '24px'
  },
  object: {
    color: '#FFFFFF',
    paddingLeft: theme.spacing(1)
  }
}));

export default useStyles;
