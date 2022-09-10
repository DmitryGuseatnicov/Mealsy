import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import './LinkList.scss';

interface ILinkList {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}

const LinkList: FC<ILinkList> = ({ title, links }) => {
  return (
    <div className="link-list">
      <div className="link-list__title">
        <Title level={5} size="medium">
          {title}
        </Title>
      </div>
      <ul className="link-list__items">
        {links.map((link) => (
          <li className="link-list__item">
            <Link className="link-list__link" to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export type { ILinkList };
export default LinkList;
