import React, { FC } from 'react';

import Icon from '../Icon/Icon';
import './ReceptCard.scss';

interface IReceptCard {
  id: string;
  name: string;
  img: string;
  isLiked: boolean;
  isAdded: boolean;
  likes: number;
  cokingTime: string | number;
}

const ReceptCard: FC<IReceptCard> = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { id, name, img, isAdded, isLiked, likes, cokingTime } = props;
  return (
    <div className="recept-card">
      <div className="recept-card__photo">
        <img className="recept-card__img" src={img} alt="" />
      </div>
      <div className="recept-card__inner">
        <div className="recept-card__bookmark">
          <button className="recept-card__button" type="button">
            <Icon name={isAdded ? 'bookmark' : 'bookmark-fill'} color="lighter" />
          </button>
        </div>
        <div className="recept-card__info">
          <div className="recept-card__favorite">
            <button className="recept-card__button" type="button">
              <Icon name={isLiked ? 'heart' : 'heart-fill'} color="lighter" />
            </button>
            <div className="recept-card__like-count">{likes}</div>
          </div>
          <div className="recept-card__coking-time">{cokingTime} минут</div>
        </div>
      </div>
      <div className="recept-card__name">{name}</div>
    </div>
  );
};

export type { IReceptCard };
export default ReceptCard;
