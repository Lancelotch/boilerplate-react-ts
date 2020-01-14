import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  icon: {
    height: '24px',
    paddingLeft: theme.spacing(1)
  },
  object: {
    color: theme.palette.black,
    paddingRight: theme.spacing(1)
  }
}));

export default useStyles;
