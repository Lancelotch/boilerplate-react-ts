import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    boxShadow: "none",
    background: theme.palette.primary.dark
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  logo: {
    width: theme.spacing(10)
  }
}));

export default useStyles;
