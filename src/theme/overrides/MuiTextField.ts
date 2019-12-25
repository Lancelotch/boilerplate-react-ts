import palette from "../palette";

export default {
  root: {
    "& label.Mui-focused": {
      color: palette.primary.main
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: palette.primary.main
    },
    "& .MuiInput-underline:before": {
        borderBottomColor: palette.primary.main
    },
    "& .MuiInput-underline:hover:before": {
        borderBottomColor: palette.primary.main
    },
    "& .MuiOutlineInput-root": {
      "& fieldset": {
        borderColor: palette.primary.main
      },
      "&:hover fieldset": {
        borderColor: palette.primary.main
      },
      "&.Mui-focused fieldset": {
        borderColor: palette.primary.main
      }
    }
  }
};
