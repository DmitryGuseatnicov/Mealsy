import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Icon, Input, LinkList, Logo } from 'shared/ui';
import './Header.scss';

const linksData = [
  {
    title: 'По времени приема',
    links: [
      {
        link: ' /change-me',
        name: 'Завтрак'
      },
      {
        link: ' /change-me',
        name: 'Обед'
      },
      {
        link: ' /change-me',
        name: 'Ужин'
      }
    ]
  },
  {
    title: 'Кухни мира',
    links: [
      {
        link: ' /change-me',
        name: 'Азиатская кухня'
      },
      {
        link: ' /change-me',
        name: 'Британская кухня'
      },
      {
        link: ' /change-me',
        name: 'Китайская кухня'
      },
      {
        link: ' /change-me',
        name: 'Французская кухня'
      },
      {
        link: ' /change-me',
        name: 'Британская кухня'
      },
      {
        link: ' /change-me',
        name: 'Немецкая кухня'
      },
      {
        link: ' /change-me',
        name: 'Индийская кухня'
      }
    ]
  },
  {
    title: 'По типу блюда',
    links: [
      {
        link: ' /change-me',
        name: 'Мясные блюда'
      },
      {
        link: ' /change-me',
        name: 'Блюда из рыбы'
      },
      {
        link: ' /change-me',
        name: 'Пицца и паста'
      },
      {
        link: ' /change-me',
        name: 'Салаты'
      }
    ]
  },
  {
    title: 'По типу блюда',
    links: [
      {
        link: ' /change-me',
        name: 'Мясные блюда'
      },
      {
        link: ' /change-me',
        name: 'Блюда из рыбы'
      },
      {
        link: ' /change-me',
        name: 'Пицца и паста'
      },
      {
        link: ' /change-me',
        name: 'Салаты'
      }
    ]
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuOpenButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBurgerClick = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = !isNavOpen ? 'hidden' : '';
  };

  const isAuth = false;
  return (
    <header className="header">
      <div className="container-small">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <Logo />
          </Link>
          <div className={`header__panel ${isNavOpen ? 'header__panel_visible' : ''}`}>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <button
                    className="header__nav-open-menu-button"
                    type="button"
                    onClick={handleMenuOpenButtonClick}>
                    Рецепты
                  </button>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/manual">
                    Справочник
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header__search-input">
              <Input name="search" type="text" placeholder="Поиск рецептов">
                <Icon name="search" />
              </Input>
            </div>
            <div className="header__auth-button">
              <Button size="adaptive" color="second" fill="main" outline="none">
                {isAuth ? 'Выйти' : 'Войти'}
              </Button>
            </div>
          </div>
          <button
            className={`header__burger ${isNavOpen ? 'header__burger_variant-open' : ''}`}
            type="button"
            onClick={handleBurgerClick}>
            <span className="header__burger-line" />
            <span className="header__burger-line" />
            <span className="header__burger-line" />
          </button>
        </div>
      </div>
      <div className="header__menu">
        {isMenuOpen && (
          <div className="header__menu-inner">
            <div className="container-small">
              <div className="header__menu-items">
                {linksData.map((list) => (
                  <div className="header__menu-item" key={list.title}>
                    <LinkList title={list.title} links={list.links} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
