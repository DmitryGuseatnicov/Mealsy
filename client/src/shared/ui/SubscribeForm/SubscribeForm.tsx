import React, { FC } from 'react';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Title from '../Title/Title';

import subscribeImg from './assets/img/subscribe-image.png';
import './SubscribeForm.scss';

interface ISubscribeForm {
  type: 'static' | 'popup';
}

const SubscribeForm: FC<ISubscribeForm> = (props) => {
  const { type } = props;
  return (
    <form className="subscribe-form">
      <div className="subscribe-form__content">
        <div className="subscribe-form__title">
          <Title level={4} size="big">
            Каждую неделю подборка новых рецептов у вас на почте!
          </Title>
        </div>
        <div className="subscribe-form__input">
          <Input name="name" type="text" placeholder="Ваше имя" />
        </div>
        <div className="subscribe-form__input">
          <Input name="mail" type="mail" placeholder="Ваш Email" />
        </div>
        <div className="subscribe-form__checkbox">
          <Checkbox
            label="Я подтверждаю согласие на обработку персональных данных"
            value=""
            name="data-processing"
            size="medium"
          />
        </div>
        <div className="subscribe-form__button">
          <Button size="medium" color="second" fill="main" outline="full">
            Подписаться
          </Button>
        </div>
      </div>
      {type === 'static' && (
        <div className="subscribe-form__photo">
          <img className="subscribe-form__img" src={subscribeImg} alt="" />
        </div>
      )}
    </form>
  );
};

export default SubscribeForm;
