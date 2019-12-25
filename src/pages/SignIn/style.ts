import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  form: {
    margin: theme.spacing(0, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  divider: {
    width: "100%",
    margin: theme.spacing(5, 0, 1)
  }
}));

export default useStyles;
