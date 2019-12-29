import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: '100%',
    width: '100%',
    padding: theme.spacing(3)
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  button: {
    width: theme.spacing(18)
  }
}));

export default useStyles;
