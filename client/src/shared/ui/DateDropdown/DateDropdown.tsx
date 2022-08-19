/* eslint-disable no-unused-vars */
import React, { FC, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import './DateDropdown.scss';

interface IDateDropdown {
  value: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateClick: (e: Date) => void;
}

registerLocale('ru', ru);

const DateDropdown: FC<IDateDropdown> = (props) => {
  const { value, label, onDateClick, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleInputIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };

  const handleOutSideClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleDaySelect = () => {
    setIsOpen(false);
  };

  return (
    <div className="date-dropdown">
      <Input
        value={value}
        name="date"
        label={label}
        type="text"
        mask="99.99.9999"
        placeholder="ДД.ММ.ГГГГ"
        status={isOpen ? 'positive' : 'default'}
        onChange={onChange}
        onIconClick={handleInputIconClick}>
        <Icon name="calendar" />
      </Input>
      <div className="date-dropdown__calendar-container">
        {isOpen && (
          <div className="date-dropdown__calendar">
            <DatePicker
              dateFormat="dd.MM.yyyy"
              locale="ru"
              inline
              nextMonthButtonLabel={<Icon name="arrow-forward" />}
              previousMonthButtonLabel={<Icon name="arrow-forward" />}
              onClickOutside={handleOutSideClick}
              onChange={onDateClick}
              onSelect={handleDaySelect}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export type { IDateDropdown };
export default DateDropdown;
