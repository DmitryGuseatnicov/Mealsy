import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CategoryFeed.scss';

interface ICategoryLink {
  img: string;
  name: string;
  link: string;
}

interface ICategoryFeed {
  categories: ICategoryLink[];
}

const CategoryLink: FC<ICategoryLink> = (props) => {
  const { img, name, link } = props;
  return (
    <Link className="category-feed__item" to={link}>
      <div className="category-feed__photo">
        <img className="category-feed__img" src={img} alt="" />
      </div>
      <div className="category-feed__name">{name}</div>
    </Link>
  );
};

const CategoryFeed: FC<ICategoryFeed> = (props) => {
  const { categories } = props;

  return (
    <div className="category-feed">
      <Slider
        slidesToShow={7}
        swipeToSlide
        infinite
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 3
            }
          }
        ]}>
        {categories.map((category) => (
          <CategoryLink
            img={category.img}
            name={category.name}
            link={category.link}
            key={category.name}
          />
        ))}
      </Slider>
    </div>
  );
};

export type { ICategoryFeed };
export default CategoryFeed;
