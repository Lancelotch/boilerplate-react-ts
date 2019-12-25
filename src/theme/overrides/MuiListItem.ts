import palette from '../palette';
//import typography from '../typography';

export default {
  root: {
    //font: typography.subtitle1,
    "&:hover": {
        backgroundColor: `${palette.primary.light}!important`
    },
    "&$selected": {
        backgroundColor: palette.primary.light,
        "&:hover": {
            backgroundColor: `${palette.primary.light}!important`
        },
    }
  }
};
