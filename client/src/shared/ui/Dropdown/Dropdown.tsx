import React, { FC, useState } from 'react';

import Icon from '../Icon/Icon';
import './Dropdown.scss';

interface IDropdown {
  title: string;
  underlined?: boolean;
  limited?: number;
  isOpen?: boolean;
  children: React.ReactNode[];
}

const Dropdown: FC<IDropdown> = (props) => {
  const { title, underlined, limited, children, isOpen = false } = props;

  const [visibleState, setVisibleState] = useState({
    isOpen,
    isShowAllItems: false
  });

  const handleButtonOpenClick = () => {
    setVisibleState({ ...visibleState, isOpen: !visibleState.isOpen });
  };

  const handleButtonShowAllClick = () => {
    setVisibleState({ ...visibleState, isShowAllItems: !visibleState.isShowAllItems });
  };

  const classes = [
    'dropdown',
    visibleState.isOpen ? 'dropdown_open' : '',
    underlined ? 'dropdown_underlined' : '',
    limited ? 'dropdown_limited' : ''
  ].join(' ');

  return (
    <div className={classes}>
      <div className="dropdown__header">
        <div className="dropdown__title">{title}</div>
        <button className="dropdown__button-open" type="button" onClick={handleButtonOpenClick}>
          <Icon name="arrow-down" />
        </button>
      </div>
      <div className="dropdown__content">
        <div className="dropdown__items">
          {visibleState.isShowAllItems
            ? children.map((el) => (
                <div className="dropdown__item" key={Math.random()}>
                  {el}
                </div>
              ))
            : children.map((el, i) =>
                limited && i < limited ? (
                  <div className="dropdown__item" key={Math.random()}>
                    {el}
                  </div>
                ) : (
                  ''
                )
              )}
          {!limited &&
            children.map((el) => (
              <div className="dropdown__item" key={Math.random()}>
                {el}
              </div>
            ))}
        </div>
        {limited && (
          <button
            className="dropdown__button-show-all"
            type="button"
            onClick={handleButtonShowAllClick}>
            {visibleState.isShowAllItems ? 'Свернуть' : 'Смотреть все'}
          </button>
        )}
      </div>
    </div>
  );
};

export type { IDropdown };
export default Dropdown;
