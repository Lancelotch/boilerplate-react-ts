import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  button: {
    cursor: 'pointer'
  },
  text: {
    lineHeight: "20px",
    '&:hover': {
      color: theme.palette.primary.dark
   },
  }
}));

export default useStyles;