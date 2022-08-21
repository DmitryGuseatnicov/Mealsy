import React from 'react';

const useOutsideHandler = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  onOutsideTarget: () => void
) => {
  const handleWindowClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!ref.current?.contains(target)) {
      // eslint-disable-next-line no-use-before-define
      removeWindowEventListener();
      onOutsideTarget();
    }
  };

  const handleWindowKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (!ref.current?.contains(target)) {
      // eslint-disable-next-line no-use-before-define
      removeWindowEventListener();
      onOutsideTarget();
    }
  };

  const addOutSideListener = () => {
    window.addEventListener('click', handleWindowClick);
    window.addEventListener('keydown', handleWindowKeyDown);
  };

  const removeWindowEventListener = () => {
    window.removeEventListener('click', handleWindowClick);
    window.removeEventListener('keydown', handleWindowKeyDown);
  };

  return { addOutSideListener };
};

export default useOutsideHandler;
