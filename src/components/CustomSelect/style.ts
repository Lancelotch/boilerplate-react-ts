import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },
  select: {
    //padding: theme.spacing(1),
    height: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    //boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)"
  },
  button: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    minWidth: "0px"
  }
}));

export default useStyles;