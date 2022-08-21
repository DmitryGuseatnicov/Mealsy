import React, { FC, useRef, useState } from 'react';

import Icon from '../Icon/Icon';
import Tag, { ITag } from '../Tag/Tag';
import { useOutsideHandler } from '../../hooks';
import './TagCollector.scss';

interface ITagCollector {
  buttonText: string;
  searchValue: string;
  tags: ITag[];
  placeholder?: string;
  searchItems?: string[];
  // eslint-disable-next-line no-unused-vars
  onSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onSelect: (e: { value: string | undefined }) => void;
}

const TagCollector: FC<ITagCollector> = (props) => {
  const { tags, buttonText, searchValue, placeholder, onSearchValueChange, searchItems, onSelect } =
    props;

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOutSideTarget = () => setIsOpen(false);
  const { addOutSideListener } = useOutsideHandler(inputRef, handleOutSideTarget);

  const handleButtonClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        inputRef.current?.focus();
        addOutSideListener();
      });
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      onSelect({ value: target.value });
    }
  };

  const handleSearchItemClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    onSelect({ value: target.dataset.value });
    setIsOpen(false);
  };

  const handleSearchItemKeydown = (e: React.KeyboardEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (e.key === 'Enter') {
      onSelect({ value: target.dataset.value });
      setIsOpen(false);
    }
  };

  return (
    <div className="tag-collector">
      <div className="tag-collector__tags">
        {tags.map((tag) => (
          <div className="tag-collector__tag" key={tag.value}>
            <Tag value={tag.value} onClick={tag.onClick} />
          </div>
        ))}
      </div>
      <button className="tag-collector__button" type="button" onClick={handleButtonClick}>
        <Icon name="add-box" />
        <span className="tag-collector__button-text">{buttonText}</span>
      </button>
      {isOpen && (
        <>
          <div className="tag-collector__input-container">
            <div className="tag-collector__input-icon">
              <Icon name="search" />
            </div>
            <input
              className="tag-collector__input"
              type="text"
              value={searchValue}
              placeholder={placeholder}
              onChange={onSearchValueChange}
              ref={inputRef}
              onKeyDown={handleInputKeyDown}
            />
          </div>
          <div className="tag-collector__search-items">
            {searchItems &&
              searchItems.map((item) => (
                <div
                  key={item}
                  className="tag-collector__search-item"
                  tabIndex={0}
                  role="button"
                  onClick={handleSearchItemClick}
                  onKeyDown={handleSearchItemKeydown}
                  data-value={item}>
                  {item}
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export type { ITagCollector };
export default TagCollector;
