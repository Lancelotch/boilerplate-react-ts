import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100%",
    background: theme.palette.primary.main
  },
  title: {
    fontWeight: 700,
    color: theme.palette.white,
    marginBottom: theme.spacing(2)
  },
  value: {
    fontWeight: 700,
    color: theme.palette.white
  },
  progress: {
    height: theme.spacing(6),
    display: "flex",
    flexDirection: "row"
  },
  avatar: {
    backgroundColor: theme.palette.white,
    height: theme.spacing(3),
    width: theme.spacing(3)
  },
  contentRight: {
    paddingLeft: theme.spacing(3),
    flexDirection: "column",
    display: "flex",
    alignItems: "center"
  },
  progressValue: {
    color: theme.palette.white
  },
  progressUpIcon: {
    color: theme.palette.success.light
  },
  progressDownIcon: {
    color: theme.palette.error.light
  }
}));

export default useStyles;
