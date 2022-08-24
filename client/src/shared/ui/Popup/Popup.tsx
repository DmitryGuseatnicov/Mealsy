/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import './Popup.scss';

interface IPopup {
  isOpen: boolean;
  onOutsideClick: () => void;
  children: React.ReactNode;
}

const Popup: FC<IPopup> = (props) => {
  const { children, isOpen, onOutsideClick } = props;

  const handlePopupChildrenClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (isOpen) {
    document.body.style.overflow = 'hidden';
    return (
      <div className="popup" onClick={onOutsideClick}>
        <div className="popup__children" onClick={handlePopupChildrenClick}>
          {children}
        </div>
      </div>
    );
  }
  document.body.style.overflow = '';
  return null;
};

export type { IPopup };
export default Popup;
