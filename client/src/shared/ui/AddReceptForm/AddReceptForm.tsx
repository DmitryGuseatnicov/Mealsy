import React from 'react';

import Button from '../Button/Button';
import { Select } from '../Select/Select';
import './AddReceptForm.scss';

const AddReceptForm = () => {
  return (
    <form className="add-recept-form">
      <div className="add-recept-form__title">сохранить рецепт</div>
      <div className="add-recept-form__photo">
        <img src="" alt="" className="add-recept-form__img" />
      </div>
      <div className="add-recept-form__recept-name">Бефстроганов в одной кастрюле</div>
      <div className="add-recept-form__select-book">
        <Select
          name="kitchenType"
          onChange={() => {}}
          items={[
            {
              value: 'Вторые блюда',
              text: 'Вторые блюда'
            },
            {
              value: 'Гарниры',
              text: 'Гарниры'
            },
            {
              value: 'Каши',
              text: 'Каши'
            },
            {
              value: 'Для детей',
              text: 'Для детей'
            }
          ]}
        />
      </div>
      <div className="add-recept-form__buttons">
        <div className="add-recept-form__button">
          <Button size="small" color="main" fill="second" outline="full">
            Создать новую кулинарную книгу
          </Button>
        </div>
        <div className="add-recept-form__button">
          <Button size="small" color="second" fill="main" outline="full">
            Создать
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddReceptForm;
