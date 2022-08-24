import React, { FC } from 'react';

import './FormContainer.scss';

interface IFormContainer {
  withImg?: boolean;
  children: React.ReactNode;
}

const FormContainer: FC<IFormContainer> = (props) => {
  const { withImg, children } = props;

  return (
    <div className="form-container">
      {withImg && <div className="form-container__img" />}
      <div className="form-container__children">{children}</div>
    </div>
  );
};

export type { IFormContainer };
export default FormContainer;
