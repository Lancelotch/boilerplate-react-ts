/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import FormLogin from "./components/FormSignIn";
import logoNoLimit from "../../assets/images/image2.png";
import AuthenticationLayout from "../../layouts/Authentication";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

interface SignInPayload {
  email: string;
  password: string;
  companyName: string;
}

const SignIn: React.FC = () => {
  const { push } = useHistory();
  const classes = useStyles();

  const handleSubmit = function (request: SignInPayload) {
    push("/crawlback");
  };

  const handleForgotPassword = function () {
    console.log("forgot");
  };

  return (
    <React.Fragment>
      <AuthenticationLayout>
        <div className={classes.form}>
          <img src={logoNoLimit} alt="logo_no_limit" />
          <FormLogin
            onSubmit={handleSubmit}
            onClickForgotPassoword={handleForgotPassword}
          />
        </div>
      </AuthenticationLayout>
    </React.Fragment>
  );
};

export default SignIn;
