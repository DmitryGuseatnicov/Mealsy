import React from 'react';

import { Button, Logo } from 'shared/ui';
import './UiKit.scss';

const UiKit = () => {
  return (
    <div className="ui-kit">
      <div className="ui-kit__graphic">
        <div className="ui-kit__logo">
          <Logo />
        </div>
      </div>
      <div className="ui-kit__buttons">
        <div className="ui-kit__button-variant">
          <div className="ui-kit__button">
            <Button size="small" color="main" fill="second" outline="full">
              Добавить все
            </Button>
          </div>
          <div className="ui-kit__button">
            <Button size="medium" color="main" fill="second" outline="full">
              Применить
            </Button>
          </div>
          <div className="ui-kit__button">
            <Button size="big" color="main" fill="second" outline="full">
              Загрузить еще
            </Button>
          </div>
        </div>
        <div className="ui-kit__button-variant">
          <div className="ui-kit__button">
            <Button size="small" color="second" fill="main" outline="none">
              Добавить все
            </Button>
          </div>
          <div className="ui-kit__button">
            <Button size="medium" color="second" fill="main" outline="none">
              Применить
            </Button>
          </div>
          <div className="ui-kit__button">
            <Button size="big" color="second" fill="main" outline="none">
              Загрузить еще
            </Button>
          </div>
        </div>
        <div className="ui-kit__button-variant">
          <div className="ui-kit__button">
            <Button size="small" color="main" fill="second" outline="horizontal">
              Добавить все
            </Button>
          </div>
          <div className="ui-kit__button">
            <Button size="medium" color="main" fill="second" outline="horizontal">
              Применить
            </Button>
          </div>
          <div className="ui-kit__button">
            <Button size="big" color="main" fill="second" outline="horizontal">
              Загрузить еще
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiKit;
