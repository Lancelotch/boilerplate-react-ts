import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {

  },
  form: {
    width: "100%",
    marginTop: theme.spacing(4)
  },
  textField: {
    marginTop: theme.spacing(3)
  },
  submit: {
    //background: theme.palette.primary.main,
    margin: theme.spacing(6, 0, 1)
  }
}));

export default useStyles;