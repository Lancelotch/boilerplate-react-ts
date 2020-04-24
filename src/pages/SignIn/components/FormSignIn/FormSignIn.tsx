import React from "react";
import { Button, OutlinedInput } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useFormik } from "formik";
//import validationSchema from "./validationSchema";
import { useTranslation } from "react-i18next";
import useStyles from "./style";

const Input = withStyles((theme: any) => ({
  input: {
    padding: theme.spacing(0, 2),
    height: theme.spacing(6),
  },
}))(OutlinedInput);

interface SignInPayload {
  email: string;
  password: string;
  companyName: string;
}

interface Props {
  onSubmit: (payload: SignInPayload) => void;
  onClickForgotPassoword: () => void;
}

const FormCrawlback: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const formik = useFormik<SignInPayload>({
    initialValues: {
      email: "",
      password: "",
      companyName: "demo",
    },
    //validationSchema: validationSchema,
    onSubmit: (values: SignInPayload) => {
      onSubmit(values);
    }
  });
  const { handleSubmit, handleChange, values, errors, touched } = formik;
  return (
    <div className={classes.root}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className={classes.form}
      >
        <Input
          name="email"
          onChange={handleChange}
          value={values.email}
          autoComplete="email"
          placeholder="Email / Phone Number"
          error={touched.email && errors.email ? true : false}
          className={classes.textField}
          fullWidth
        />
        <Input
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
          placeholder="Password"
          autoComplete="current-password"
          error={touched.password && errors.password ? true : false}
          className={classes.textField}
          fullWidth
        />
        <div className={classes.submit}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            aria-label="add"
            type="submit"
            fullWidth
          >
            {t("authentication:signin.submit")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCrawlback;
