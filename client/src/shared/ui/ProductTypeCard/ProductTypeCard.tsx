import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './ProductTypeCard.scss';

interface IProductTypeCard {
  link: string;
  img: string;
  name: string;
}

const ProductTypeCard: FC<IProductTypeCard> = (props) => {
  const { link, img, name } = props;

  return (
    <Link to={link} className="product-type-card">
      <div className="product-type-card__photo">
        <img className="product-type-card__img" src={img} alt="" />
      </div>
      <div className="product-type-card__name">{name}</div>
    </Link>
  );
};

export type { IProductTypeCard };
export default ProductTypeCard;
