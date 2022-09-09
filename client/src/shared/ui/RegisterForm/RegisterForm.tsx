import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './RegisterForm.scss';

const RegisterForm = () => {
  return (
    <form className="register-form">
      <div className="register-form__title">
        <Title level={4} size="big">
          Добро пожаловать в клуб Mealsy!
        </Title>
      </div>
      <div className="register-form__sub-title">Создайте учётную запись</div>
      <div className="register-form__input">
        <Input name="name" type="text" placeholder="Ваше имя" />
      </div>
      <div className="register-form__input">
        <Input name="mail" type="mail" placeholder="Ваш Email" />
      </div>
      <div className="register-form__input">
        <Input name="password" type="password" placeholder="Ваш Email">
          <Icon name="eye-slash" color="dark" />
        </Input>
      </div>
      <div className="register-form__input">
        <Input name="password2" type="password" placeholder="Ваш Email">
          <Icon name="eye-slash" color="dark" />
        </Input>
      </div>
      <div className="register-form__register-button">
        <Button size="medium" color="second" fill="main" outline="full">
          Создать аккаунт
        </Button>
      </div>
      <div className="register-form__checkbox">
        <Checkbox
          label="Я подтверждаю согласие на обработку персональных данных"
          value=""
          name="data-processing"
          size="medium"
        />
      </div>
      <div className="register-form__login-link-block">
        <span>Уже есть аккаут </span>
        <Link className="register-form__register-link" to="/">
          Войти
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
