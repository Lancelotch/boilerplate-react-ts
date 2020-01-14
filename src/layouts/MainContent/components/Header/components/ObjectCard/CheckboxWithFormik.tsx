import React from "react";
import { Field } from "formik";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";

interface Props {
  name: string;
  value: string;
}

const CheckboxWithFormik: React.FC<Props> = ({ name, value }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              checked={field.value.includes(value)}
              onChange={() => {
                const set = new Set(field.value);
                if (set.has(value)) {
                  set.delete(value);
                } else {
                  set.add(value);
                }
                field.onChange(field.name)(Array.from(set));
                form.setFieldTouched(field.name, true);
              }}
            />
          }
          label={<Typography>{value}</Typography>}
        />
      )}
    </Field>
  );
};

export default CheckboxWithFormik;
