import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%'
  },
  paper: {
    height: '100%',
    padding: '22px'
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  button: {
    width: theme.spacing(18)
  },
  icon: {
    height: '24px'
  },
  object: {
    color: '#FFFFFF',
    paddingLeft: theme.spacing(1)
  },
  date: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  float: {
    float: 'right'
  }
}));

export default useStyles;
