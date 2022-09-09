import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Title from '../Title/Title';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="login-form__title">
        <Title level={4} size="big">
          Добро пожаловать в клуб Mealsy!
        </Title>
      </div>
      <div className="login-form__sub-title">Войти в профиль</div>
      <div className="login-form__input">
        <Input name="mail" type="mail" placeholder="Ваш Email" />
      </div>
      <div className="login-form__input">
        <Input name="mail" type="mail" placeholder="Ваш Email" />
      </div>
      <div className="login-form__help-buttons">
        <div className="login-form__checkbox">
          <Checkbox label="Запомнить меня" value="" name="" size="medium" />
        </div>
        <Link className="login-form__link-recover-button" to="/">
          Забыли пароль?
        </Link>
        <link rel="stylesheet" href="" />
      </div>
      <div className="login-form__login-button">
        <Button size="medium" color="second" fill="main" outline="full">
          Войти
        </Button>
      </div>
      <div className="login-form__register-link-block">
        <span>Не зарегестрированы? </span>
        <Link className="login-form__register-link" to="/">
          Зарегестрироваться
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
