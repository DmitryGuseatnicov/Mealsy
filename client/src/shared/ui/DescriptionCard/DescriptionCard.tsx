import React, { FC } from 'react';

import Button from '../Button/Button';
import './DescriptionCard.scss';

interface IDescriptionCard {
  img: string;
  name: string;
  type: string;
  description: string;
  link: string;
}

const DescriptionCard: FC<IDescriptionCard> = (props) => {
  const { img, name, type, description, link } = props;

  return (
    <div className="description-card">
      <div className="description-card__header">
        <div className="description-card__photo">
          <img className="description-card__img" src={img} alt="" />
        </div>
        <div className="description-card__name">{name}</div>
        <div className="description-card__type">{type}</div>
        <p className="description-card__info">{description}</p>
      </div>
      <div className="description-card__link">
        <Button link={link} size="medium" color="second" fill="main" outline="none">
          Читать больше
        </Button>
      </div>
    </div>
  );
};

export type { IDescriptionCard };
export default DescriptionCard;
