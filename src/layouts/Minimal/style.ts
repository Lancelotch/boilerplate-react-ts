import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:any) => ({
  root: {
    maxWidth: '100%',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    margin: 'auto',
    backgroundColor: theme.palette.white
  },
  header: {
    position: 'fixed',
    height: '15%',
    width: '100%',
    top: 0,
    left: 0
  },
  content: {
    position: 'fixed',
    height: '70%',
    width: '100%',
    top: '15%',
    left: 0
  },
  bottom: {
    position: 'fixed',
    height: '15%',
    width: '100%',
    bottom: '0',
    left: 0
  }
}));

export default useStyles;