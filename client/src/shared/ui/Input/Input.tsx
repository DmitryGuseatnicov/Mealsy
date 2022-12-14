/* eslint-disable no-unused-vars */
import React, { FC } from 'react';
import InputMask from 'react-input-mask';
import './Input.scss';

interface IInput {
  value?: string;
  placeholder?: string;
  name: string;
  type: string;
  message?: string;
  status?: 'default' | 'error' | 'positive';
  label?: string;
  id?: string;
  readonly?: boolean;
  mask?: string;
  inputRef?: React.ForwardedRef<any>;
  onIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const statusVariants = {
  default: 'input_status-default',
  error: 'input_status-error',
  positive: 'input_status-positive'
};

const Input: FC<IInput> = (props) => {
  const {
    value,
    placeholder,
    name,
    type,
    label,
    id,
    message,
    readonly,
    mask,
    inputRef,
    onIconClick,
    onFocus,
    onBlur,
    onChange,
    onInput,
    onClick,
    children,
    status = 'default'
  } = props;

  const classes = [
    'input',
    statusVariants[status],
    children ? 'input_with-icon' : '',
    readonly ? 'input_readonly' : ''
  ].join(' ');

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classes}>
      <span className="input__label">{label}</span>
      <div className="input__container">
        {mask ? (
          <InputMask
            className="input__input"
            value={value}
            name={name}
            type={type}
            id={id}
            mask={mask}
            placeholder={placeholder}
            readOnly={readonly}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onInput={onInput}
          />
        ) : (
          <input
            className="input__input"
            value={value}
            placeholder={placeholder}
            name={name}
            type={type}
            id={id}
            ref={inputRef}
            readOnly={readonly}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onInput={onInput}
          />
        )}
        {children && (
          <button className="input__icon" onClick={onIconClick} type="button">
            {children}
          </button>
        )}
      </div>
      {message && <div className="input__message">{message}</div>}
    </label>
  );
};

export type { IInput };
export default Input;
