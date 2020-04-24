import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%"
  },
  space: {
    marginTop: theme.spacing(3)
  },
  submit: {
    //background: theme.palette.primary.main,
    margin: theme.spacing(6, 0, 1)
  }
}));

export default useStyles;