import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: '100vh'
  },
  header: {
    height: theme.spacing(12),
    width: '100%',
    position: 'sticky',
    zIndex: 2,
    top: 0
  },
  mobileSize: {
    top: theme.spacing(8)
  },
  card: {
    width: "100%",
    height: theme.spacing(50),
    padding: theme.spacing(3)
  }
}));

export default useStyles;