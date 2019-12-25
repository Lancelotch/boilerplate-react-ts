import React from 'react';
import { useTranslation } from 'react-i18next';
import FormLogin from '../../components/FormSignIn';
import logoNoLimit from '../../assets/images/image2.png';
import { Typography, Divider } from '@material-ui/core';
import AuthenticationLayout from '../../layouts/Authentication';
import useStyles from './style';
import ButtonText from '../../components/ButtonText';

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handleSubmit = function(){
    console.log('submit');
  }

  const handleForgotPassword = function(){
    console.log('forgot');
  }

  const handleSignup = function(){
    console.log('sign up');
  }

  return (
    <AuthenticationLayout>
      <div className={classes.form}>
        <img src={logoNoLimit} alt='logo_no_limit' />
        <FormLogin onSubmit={handleSubmit} />
        <ButtonText onClick={handleForgotPassword}>{t('authentication:signin.forgot_password')}</ButtonText>
        <Divider
          orientation='horizontal'
          variant='middle'
          className={classes.divider}
        />
        <Typography variant='subtitle1'>
          {`${t('authentication:signin.accountless')} `}
          <ButtonText onClick={handleSignup}>{t("authentication:signin.signup")}</ButtonText>
        </Typography>
      </div>
    </AuthenticationLayout>
  );
};

export default SignIn;
