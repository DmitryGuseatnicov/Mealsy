import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Icon, Input, Logo, Title } from 'shared/ui';
import './Footer.scss';

const socials: { link: string; icon: any }[] = [
  { link: '/change-me', icon: 'vk' },
  { link: '/change-me', icon: 'ok' },
  { link: '/change-me', icon: 'telegram' },
  { link: '/change-me', icon: 'whatsapp' }
];

const navLinks = [
  { link: '/', name: 'Главная' },
  { link: '/recept', name: 'Рецепты' },
  { link: '/manual', name: 'Справочник' },
  { link: '/profile', name: 'Мой профиль' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="footer__contacts">
            <div className="footer__title">
              <Title level={5} size="medium">
                Присоединяйтесь
              </Title>
            </div>
            <div className="footer__socials">
              <p className="footer__socials-title">Наши социальные сети:</p>
              <div className="footer__socials-links">
                {socials.map((social) => (
                  <Link className="footer__socials-link" to={social.link} key={social.icon}>
                    <Icon name={social.icon} />
                  </Link>
                ))}
              </div>
            </div>
            <form className="footer__subscribe">
              <p className="footer__subscribe-title">Подпишитесь на рассылку:</p>
              <div className="footer__subscribe-input">
                <Input name="mail" type="mail" placeholder="Ваш Email" />
              </div>
              <div className="footer__subscribe-button">
                <Button size="adaptive" color="second" fill="main" outline="none" type="submit">
                  Подписаться
                </Button>
              </div>
            </form>
          </div>
          <nav className="footer__nav">
            <div className="footer__nav-title">
              <Title level={5} size="medium">
                Находите
              </Title>
              <ul className="footer__nav-items">
                {navLinks.map((link) => (
                  <li className="footer__nav-item">
                    <Link className="footer__nav-link" to={link.link} key={link.name}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="footer__feedback">
            <div className="footer__feedback-title">
              <Title level={5} size="medium">
                Обратная связь
              </Title>
            </div>
            <p className="footer__feedback-info">
              Помогите нам стать лучше! Оставьте свои пожелания по улучшению сервиса. Мы стараемся
              для вас!
            </p>
            <a href="mailto:test.ru" className="footer__feedback-mail-link">
              Напишите нам
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
