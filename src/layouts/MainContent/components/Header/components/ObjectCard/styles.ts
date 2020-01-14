import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: theme.spacing(42)
  },
  header: {
    padding: theme.spacing(0,2)
  },
  body: {
    padding: theme.spacing(0,3),
    height: theme.spacing(16)
  },
  footer: {
    paddingTop: theme.spacing(0)
  },
  buttonSubmit: {
    borderRadius: 0,
    background: theme.palette.primary.main
  },
  buttonAddAccount: {
    borderRadius: 0,
    background: theme.palette.primary.light
  }
}));

export default useStyles;