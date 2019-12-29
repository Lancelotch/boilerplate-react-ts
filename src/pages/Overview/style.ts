import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  header: {
    height: theme.spacing(15),
    width: 'calc(100% - 240px)',
    position: 'fixed'
  }
}));

export default useStyles;