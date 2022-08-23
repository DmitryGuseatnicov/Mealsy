import React, { FC } from 'react';
import './Checkbox.scss';

interface ICheckbox {
  label: string;
  value: string;
  name: string;
  disabled?: boolean;
  size?: 'small' | 'medium';
  checked?: boolean;
  id?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeVariants = {
  small: 'checkbox_size-small',
  medium: 'checkbox_size-medium'
};

const Checkbox: FC<ICheckbox> = (props) => {
  const { label, value, name, id, checked, disabled, onChange, size = 'small' } = props;

  const classes = ['radio', sizeVariants[size]].join(' ');

  return (
    <div className={classes}>
      <label htmlFor={id} className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          name={name}
          value={value}
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className="checkbox__text">{label}</span>
      </label>
    </div>
  );
};

export type { ICheckbox };
export default Checkbox;
