import React, { FC } from 'react';
import './Radio.scss';

interface IRadio {
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
  small: 'radio_size-small',
  medium: 'radio_size-medium'
};

const Radio: FC<IRadio> = (props) => {
  const { label, value, name, id, checked, disabled, onChange, size = 'small' } = props;

  const classes = ['radio', sizeVariants[size]].join(' ');

  return (
    <div className={classes}>
      <label htmlFor={id} className="radio__label">
        <input
          className="radio__input"
          type="radio"
          name={name}
          value={value}
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className="radio__text">{label}</span>
      </label>
    </div>
  );
};

export type { IRadio };
export default Radio;
