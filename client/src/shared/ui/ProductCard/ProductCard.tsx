import React, { FC } from 'react';
import Button from '../Button/Button';
import './ProductCard.scss';

interface IProductCard {
  img: string;
  link: string;
  name: string;
  pfs: {
    proteins: string | number;
    fats: string | number;
    carbohydrates: string | number;
    energyValue: string | number;
  };
}

const ProductCard: FC<IProductCard> = (props) => {
  const { img, link, name, pfs } = props;
  return (
    <div className="product-card">
      <div className="product-card__photo">
        <img className="product-card__img" src={img} alt="" />
      </div>
      <div className="product-card__name">{name}</div>
      <div className="product-card__pfs">
        <div className="product-card__pfs-item">Калорийность на 100 гр.: {pfs.energyValue}Ккал</div>
        <div className="product-card__pfs-item">Белки: {pfs.proteins} гр.</div>
        <div className="product-card__pfs-item">Жири: {pfs.fats} гр.</div>
        <div className="product-card__pfs-item">Углеводы: {pfs.carbohydrates} гр.</div>
      </div>
      <div className="product-card__link">
        <Button size="adaptive" color="second" fill="main" outline="none" link={link}>
          Посмотреть
        </Button>
      </div>
    </div>
  );
};

export type { IProductCard };
export default ProductCard;
