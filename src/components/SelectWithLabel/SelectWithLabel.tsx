import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

interface IOptions {
  label: string;
  value: string;
}

interface Props {
  id?: string;
  name?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  value: string | undefined;
  options: Array<IOptions>;
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: React.ReactNode
  ) => void;
}

const SelectWithLabel: React.FC<Props> = ({
  id,
  name,
  label,
  value,
  error,
  options,
  errorMessage,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.container}>
      <InputLabel shrink id="select-placeholder-label">
        {label}
      </InputLabel>
      <Select
        labelId="select-placeholder-label"
        id={id}
        name={name}
        style={{ fontSize: 18 }}
        value={value}
        onChange={onChange}
        error={error}
        displayEmpty
        fullWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default SelectWithLabel;
