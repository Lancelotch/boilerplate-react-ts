import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import useStyles from "./style";
import { Button, Typography } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

interface Props {
  label?: string;
  onChange: (event: any) => void;
  value?: string;
}

const CustomSelect: React.FC<Props> = ({ onChange, label, value }) => {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event);
  };
  return (
    <div className={classes.root}>
      <Select
        className={classes.select}
        fullWidth
        value={value}
        onChange={handleChange}
        variant="outlined"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        <MenuItem value={"10"}><Typography variant="subtitle2">Ten</Typography></MenuItem>
        <MenuItem value={"20"}><Typography variant="subtitle2">Twenty</Typography></MenuItem>
        <MenuItem value={"30"}><Typography variant="subtitle2">Thirty</Typography></MenuItem>
      </Select>
      <Button size="small" color="primary" variant="contained" className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  );
};

export default CustomSelect;
