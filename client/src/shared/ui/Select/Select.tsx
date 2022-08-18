/* eslint-disable no-unused-vars */
import React, { FC, useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
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
  value?: string;
  label?: string;
  placeholder?: string;
  type?: 'simple' | 'sort';
  onChange: (e: any) => void;
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

  const classes = ['select', isOpen ? 'select_open' : ''].join(' ');

  const handleWindowClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!ref.current?.contains(target)) {
      // eslint-disable-next-line no-use-before-define
      removeWindowEventListener();
      setIsOpen(false);
    }
  };

  const handleWindowKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (e.key === 'Tab' || e.key === 'Shift') {
      return;
    }
    if (!ref.current?.contains(target)) {
      // eslint-disable-next-line no-use-before-define
      removeWindowEventListener();
      setIsOpen(false);
    }
  };

  const bindWindowEventListener = () => {
    window.addEventListener('click', handleWindowClick);
    window.addEventListener('keydown', handleWindowKeyDown);
  };

  const removeWindowEventListener = () => {
    window.removeEventListener('click', handleWindowClick);
    window.removeEventListener('keydown', handleWindowKeyDown);
  };

  const handleSelectInputClick = () => {
    if (isOpen) {
      removeWindowEventListener();
      return setIsOpen(false);
    }
    bindWindowEventListener();
    return setIsOpen(true);
  };

  const handleSelectItemClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    const event = {
      target: {
        ...target,
        value: target.dataset.value
      }
    };
    handleSelectInputClick();
    onChange(event);
  };

  const handleSelectItemKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (e.key === 'Enter') {
      e.preventDefault();
      const event = {
        target: {
          ...target,
          value: target.dataset.value
        }
      };
      handleSelectInputClick();
      onChange(event);
    }
  };

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
            onChange={onChange}
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
            onChange={onChange}
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
