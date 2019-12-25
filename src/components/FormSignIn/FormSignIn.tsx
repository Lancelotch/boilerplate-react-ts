import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { useTranslation } from "react-i18next"; 
import useStyles from './style';

interface Props{
    onSubmit: (payload: object)=> void
}

const FormSignIn:React.FC<Props> = ({onSubmit}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values: object) => {
      console.log(values);
      onSubmit(values)
    }
  });
  const { handleSubmit, handleChange, values, errors, touched } = formik;
  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className={classes.form}
      >
        <TextField
          name="email"
          label={t('authentication:signin.placeholder_email')}
          onChange={handleChange}
          value={values.email}
          autoComplete="email"
          error={touched.email && errors.email ? true : false}
          helperText={touched.email && errors.email ? errors.email : ""}
          className={classes.textField}
          fullWidth
        />
        <TextField
          name="password"
          type="password"
          label={t('authentication:signin.placeholder_password')}
          onChange={handleChange}
          value={values.password}
          variant='standard'
          autoComplete="current-password"
          error={touched.password && errors.password ? true : false}
          helperText={
            touched.password && errors.password ? errors.password : ""
          }
          className={classes.textField}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          aria-label="add"
          type="submit"
          className={classes.submit}
          fullWidth
        >
          {t('authentication:signin.submit')}
        </Button>
      </form>
    </React.Fragment>
  );
}

export default FormSignIn; 