import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  contentLoading: {
    minHeight: theme.spacing(30),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.disabled, opacity: "0.5"
  },
  content: {
    minHeight: theme.spacing(30),
    display: "flex"
  },
  loading: {
    color: theme.palette.primary.main
  },
  refreshButton: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  refreshIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

export default useStyles;
