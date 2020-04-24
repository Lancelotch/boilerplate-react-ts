import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: theme.spacing(90)
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  container: {
    maxHeight: theme.spacing(30),
    width:"100%",
    marginTop: theme.spacing(1)
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  no: {
    padding: 10
  },
  moreVert: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
    cursor: 'pointer',
    marginLeft: theme.spacing(1)
  },
  wrap: {
    //padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row'
  },
}));

export default useStyles;