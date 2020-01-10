import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    //color: colors.blueGrey[800],
    color: theme.palette.white,
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.white,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(3)
  },
  active: {
    //color: theme.palette.primary.main,
    borderRadius: "0px",
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: 'rgba(38, 50, 56, 0.08)',  //theme.palette.primary.light,
    "& $icon": {
      color: theme.palette.white
    }
  }
}));

export default useStyles;