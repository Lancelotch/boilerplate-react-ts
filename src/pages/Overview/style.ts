import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  header: {
    height: theme.spacing(15),
    width: '100%',
    position: 'sticky',
    zIndex: 1,
    top: 0
  },
  mobileSize: {
    top: theme.spacing(8)
  }
}));

export default useStyles;