/* eslint-disable no-unused-vars */
import React, { FC, useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import './Select.scss';

interface ISelectItemData {
  text: string;
  value: string;
}

interface ISelect {
  name: string;
  value?: string;
  placeholder?: string;
  onChange: (e: any) => void;
  items?: ISelectItemData[];
}

interface ISelectItem {
  children: React.ReactNode;
  value: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
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
  const { name, items, value, placeholder, onChange } = props;

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
      <div className="select__input">
        <Input
          name={name}
          type="text"
          value={value}
          readonly
          status={isOpen ? 'positive' : 'default'}
          onChange={onChange}
          placeholder={placeholder}
          onIconClick={handleSelectInputClick}
          onClick={handleSelectInputClick}>
          <Icon name="arrow-down" />
        </Input>
      </div>
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
