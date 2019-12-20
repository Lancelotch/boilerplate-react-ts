import React from "react";
import { useTranslation } from "react-i18next";
import {} from "@material-ui/core";
import AuthenticationLayout from "../../layouts/Authentication";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AuthenticationLayout>
      <div>{t("authentication:signin.placeholder_email")}</div>;
    </AuthenticationLayout>
  );
};

export default SignIn;