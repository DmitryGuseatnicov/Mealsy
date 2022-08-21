/* eslint-disable no-unused-vars */
import React, { FC, useRef, useState } from 'react';

import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import { useOutsideHandler } from '../../hooks';
import './Select.scss';

interface ISelectItemData {
  text: string;
  value: string;
}

interface ISelectItem {
  children: React.ReactNode;
  value: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
}

interface ISelect {
  name: string;
  onChange: (e: { value: string }) => void;
  value?: string;
  label?: string;
  placeholder?: string;
  type?: 'simple' | 'sort';
  items?: ISelectItemData[];
}

const SelectItem: FC<ISelectItem> = (props) => {
  const { value, children, onClick, onKeyDown } = props;
  return (
    <div
      className="select__item"
      data-value={value}
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={onKeyDown}>
      {children}
    </div>
  );
};

const Select: FC<ISelect> = (props) => {
  const { name, items, value, placeholder, label, onChange, type = 'simple' } = props;

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutSideTarget = () => setIsOpen(false);
  const { addOutSideListener } = useOutsideHandler(ref, handleOutSideTarget);

  const handleSelectInputClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      addOutSideListener();
      setIsOpen(true);
    }
  };

  const handleSelectItemClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (!target.dataset.value) {
      return;
    }

    handleSelectInputClick();
    onChange({ value: target.dataset.value });
  };

  const handleSelectItemKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (!target.dataset.value) {
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      handleSelectInputClick();
      onChange({ value: target.dataset.value });
    }
  };

  const classes = ['select', isOpen ? 'select_open' : ''].join(' ');

  return (
    <div className={classes} ref={ref}>
      {type === 'simple' && (
        <div className="select__input">
          <Input
            name={name}
            type="text"
            value={value}
            label={label}
            readonly
            status={isOpen ? 'positive' : 'default'}
            placeholder={placeholder}
            onIconClick={handleSelectInputClick}
            onClick={handleSelectInputClick}>
            <Icon name="arrow-down" />
          </Input>
        </div>
      )}
      {type === 'sort' && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className="select__label">
          {label && <span className="select__label-text">{label}:</span>}
          <input
            type="text"
            className="select__sort-input"
            readOnly
            value={value}
            onClick={handleSelectInputClick}
          />
          <button
            className="select__sort-input-icon"
            type="button"
            onClick={handleSelectInputClick}>
            <Icon name="arrow-down" />
          </button>
        </label>
      )}
      <div className="select__items">
        {items?.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            onClick={handleSelectItemClick}
            onKeyDown={handleSelectItemKeyDown}>
            {item.text}
          </SelectItem>
        ))}
      </div>
    </div>
  );
};

export type { ISelect, ISelectItem };
export { Select, SelectItem };
