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
  legend: {
    width: '100%',
    justifyContent: "flex-end",
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: "row"
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  hashtag: {
    paddingLeft: theme.spacing(1)
  },
  fabGreen: {
    backgroundColor: "green",
    width: 16,
    height: 16
  },
  fabRed: {
    backgroundColor: "red",
    width: 16,
    height: 16
  },
  no: {
    padding: 10
  }
}));

export default useStyles;