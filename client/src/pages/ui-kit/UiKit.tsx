import React, { useState } from 'react';

import {
  Button,
  IButton,
  Icon,
  IIcon,
  IInput,
  Input,
  ITitle,
  Logo,
  Title,
  Select
} from 'shared/ui';
import './UiKit.scss';

const titleVariants: ITitle[] = [
  { level: 5, size: 'huge' },
  { level: 5, size: 'big' },
  { level: 5, size: 'medium' },
  { level: 5, size: 'small' }
];

const buttonData: IButton[] = [
  { size: 'small', color: 'main', fill: 'second', outline: 'full' },
  { size: 'medium', color: 'main', fill: 'second', outline: 'full' },
  { size: 'big', color: 'main', fill: 'second', outline: 'full' },
  { size: 'small', color: 'second', fill: 'main', outline: 'none' },
  { size: 'medium', color: 'second', fill: 'main', outline: 'none' },
  { size: 'big', color: 'second', fill: 'main', outline: 'none' },
  { size: 'small', color: 'main', fill: 'second', outline: 'horizontal' },
  { size: 'medium', color: 'main', fill: 'second', outline: 'horizontal' },
  { size: 'big', color: 'main', fill: 'second', outline: 'horizontal' }
];

const iconVariants: IIcon[] = [
  { name: 'add', size: 'standard' },
  { name: 'add-box', size: 'standard' },
  { name: 'arrow-down', size: 'standard' },
  { name: 'bookmark', size: 'standard' },
  { name: 'bookmark-fill', size: 'standard' },
  { name: 'edit', size: 'standard' },
  { name: 'ellipse', size: 'standard' },
  { name: 'ellipse-checked', size: 'standard' },
  { name: 'eye', size: 'standard' },
  { name: 'eye-slash', size: 'standard' },
  { name: 'heart', size: 'standard' },
  { name: 'ok', size: 'standard' },
  { name: 'pepper', size: 'standard' },
  { name: 'remove', size: 'standard' },
  { name: 'remove-box', size: 'standard' },
  { name: 'search', size: 'standard' },
  { name: 'settings', size: 'standard' },
  { name: 'star', size: 'standard' },
  { name: 'task-square', size: 'standard' },
  { name: 'telegram', size: 'standard' },
  { name: 'vk', size: 'standard' },
  { name: 'whatsapp', size: 'standard' }
];

const inputVariants: IInput[] = [
  {
    label: 'Default',
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    status: 'default',
    message: 'какое-то сообщение'
  },
  {
    label: 'Positive',
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    status: 'positive',
    message: 'какое-то сообщение'
  },
  {
    label: 'Error',
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    status: 'error',
    message: 'какое-то сообщение'
  },
  {
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    children: <Icon name="eye" size="standard" />
  },
  {
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    children: <Icon name="arrow-down" size="standard" />
  },
  {
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    children: <Icon name="edit" size="standard" />
  }
];

const UiKit = () => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="ui-kit">
      <div className="ui-kit__graphic">
        <div className="ui-kit__logo">
          <Logo />
        </div>
      </div>
      <div className="ui-kit__titles">
        {titleVariants.map((title) => (
          <div className="ui-kit__title" key={Math.random()}>
            <Title level={title.level} size={title.size}>
              Заголовок
            </Title>
          </div>
        ))}
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Buttons
        </Title>
      </div>
      <div className="ui-kit__buttons">
        <div className="ui-kit__button-variant">
          {buttonData.slice(0, 3).map((btn) => (
            <div className="ui-kit__button" key={Math.random()}>
              <Button size={btn.size} color={btn.color} fill={btn.fill} outline={btn.outline}>
                Добавить все
              </Button>
            </div>
          ))}
        </div>
        <div className="ui-kit__button-variant">
          {buttonData.slice(3, 6).map((btn) => (
            <div className="ui-kit__button" key={Math.random()}>
              <Button size={btn.size} color={btn.color} fill={btn.fill} outline={btn.outline}>
                Добавить все
              </Button>
            </div>
          ))}
        </div>
        <div className="ui-kit__button-variant">
          {buttonData.slice(6, 9).map((btn) => (
            <div className="ui-kit__button" key={Math.random()}>
              <Button size={btn.size} color={btn.color} fill={btn.fill} outline={btn.outline}>
                Добавить все
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Icons
        </Title>
      </div>
      <div className="ui-kit__icons">
        {iconVariants.map((icon) => (
          <div className="ui-kit__icon" key={Math.random()}>
            <Icon name={icon.name} size={icon.size} />
          </div>
        ))}
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Inputs
        </Title>
      </div>
      <div className="ui-kit__inputs">
        {inputVariants.map((input) => (
          <div className="ui-kit__input" key={Math.random()}>
            <Input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              label={input.label}
              status={input.status}
              message={input.message}>
              {input.children}
            </Input>
          </div>
        ))}
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Dropdowns
        </Title>
      </div>
      <div className="ui-kit__dropdowns">
        <div className="ui-kit__dropdown-select">
          <Select
            value={value}
            onChange={onChangeHandler}
            name="some"
            placeholder="Выбери число"
            items={[
              {
                value: 'Один',
                text: 'Один'
              },
              {
                value: 'Два',
                text: 'Два'
              },
              {
                value: 'Три',
                text: 'Три'
              },
              {
                value: 'Четыре',
                text: 'Четыре'
              },
              {
                value: 'Пять',
                text: 'Пять'
              },
              {
                value: 'Шесть',
                text: 'Шесть'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default UiKit;
