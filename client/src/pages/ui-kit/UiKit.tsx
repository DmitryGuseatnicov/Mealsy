import React, { useState } from 'react';

import dishPlaceholder from 'shared/assets/img/dish-placeholder.png';
import {
  Button,
  IButton,
  Icon,
  IIcon,
  IInput,
  Input,
  ITitle,
  Title,
  Select,
  DateDropdown,
  TagCollector,
  RangeSlider,
  IReceptCard,
  ReceptCard,
  CategoryFeed,
  IProductTypeCard,
  ProductTypeCard,
  IProductCard,
  ProductCard,
  IDescriptionCard,
  DescriptionCard,
  Radio,
  Checkbox,
  Dropdown,
  IRadio,
  PfsScoreboard,
  Popup,
  FormContainer,
  AddReceptForm,
  LoginForm,
  RegisterForm,
  SubscribeForm
} from 'shared/ui';
import './UiKit.scss';

const titleVariants: ITitle[] = [
  { level: 5, size: 'huge' },
  { level: 5, size: 'big' },
  { level: 5, size: 'medium' },
  { level: 5, size: 'small' }
];

const buttonData: IButton[] = [
  { size: 'small', color: 'main', fill: 'second', outline: 'full' },
  { size: 'medium', color: 'main', fill: 'second', outline: 'full' },
  { size: 'big', color: 'main', fill: 'second', outline: 'full' },
  { size: 'small', color: 'second', fill: 'main', outline: 'none' },
  { size: 'medium', color: 'second', fill: 'main', outline: 'none' },
  { size: 'big', color: 'second', fill: 'main', outline: 'none' },
  { size: 'small', color: 'main', fill: 'second', outline: 'horizontal' },
  { size: 'medium', color: 'main', fill: 'second', outline: 'horizontal' },
  { size: 'big', color: 'main', fill: 'second', outline: 'horizontal' }
];

const iconVariants: IIcon[] = [
  { name: 'add', size: 'standard' },
  { name: 'add-box', size: 'standard' },
  { name: 'arrow-down', size: 'standard' },
  { name: 'bookmark', size: 'standard' },
  { name: 'bookmark-fill', size: 'standard' },
  { name: 'edit', size: 'standard' },
  { name: 'ellipse', size: 'standard' },
  { name: 'ellipse-checked', size: 'standard' },
  { name: 'eye', size: 'standard' },
  { name: 'eye-slash', size: 'standard' },
  { name: 'heart', size: 'standard' },
  { name: 'ok', size: 'standard' },
  { name: 'pepper', size: 'standard' },
  { name: 'remove', size: 'standard' },
  { name: 'remove-box', size: 'standard' },
  { name: 'search', size: 'standard' },
  { name: 'settings', size: 'standard' },
  { name: 'star', size: 'standard' },
  { name: 'task-square', size: 'standard' },
  { name: 'telegram', size: 'standard' },
  { name: 'vk', size: 'standard' },
  { name: 'whatsapp', size: 'standard' }
];

const inputVariants: IInput[] = [
  {
    label: 'Default',
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    status: 'default',
    message: 'какое-то сообщение'
  },
  {
    label: 'Positive',
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    status: 'positive',
    message: 'какое-то сообщение'
  },
  {
    label: 'Error',
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    status: 'error',
    message: 'какое-то сообщение'
  },
  {
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    children: <Icon name="eye" size="standard" />
  },
  {
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    children: <Icon name="arrow-down" size="standard" />
  },
  {
    placeholder: 'Text',
    name: 'name',
    type: 'text',
    children: <Icon name="edit" size="standard" />
  }
];

const tagsData: any[] = [
  'Курица',
  'Молоко',
  'Сыр',
  'Куриное яйцо',
  'Абрикос',
  'Авокадо',
  'Баклажан',
  'Баварские сосиски',
  'Лосось'
];

const cards: IReceptCard[] = [
  {
    id: '1',
    img: dishPlaceholder,
    name: 'Яблочная крошка в стакане',
    isLiked: false,
    isAdded: false,
    likes: 2002,
    cokingTime: 20
  },
  {
    id: '2',
    img: dishPlaceholder,
    name: 'Вафли с ягодным вареньем',
    isLiked: false,
    isAdded: false,
    likes: 1110,
    cokingTime: 40
  },
  {
    id: '3',
    img: dishPlaceholder,
    name: 'Кокосовый рисовый пудинг с манговым соусом',
    isLiked: false,
    isAdded: false,
    likes: 32,
    cokingTime: 50
  },
  {
    id: '4',
    img: dishPlaceholder,
    name: 'ЯБезгютеновые тыквенно-черничные блинчики',
    isLiked: false,
    isAdded: false,
    likes: 5,
    cokingTime: 102
  }
];

const categories = [
  {
    img: dishPlaceholder,
    name: 'Русская кухня',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Азиатская кухня',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Британская кухня',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Китайская кухня',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Французская кухня',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Немецкая кухня',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Греческая кухня',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Индийская кухня',
    link: ''
  }
];

const productTypesData: IProductTypeCard[] = [
  {
    img: dishPlaceholder,
    name: 'Молочные продукты и яйца',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Рыба и морепродукты',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Овощи и корнеплоды',
    link: ''
  },
  {
    img: dishPlaceholder,
    name: 'Бакалея',
    link: ''
  }
];

const dropdownListDataFirst: IRadio[] = [
  {
    label: 'Диабетические рецепты',
    value: 'Диабетические рецепты',
    name: 'Тип питания'
  },
  {
    label: 'Низкокалорийные рецепты',
    value: 'Низкокалорийные рецепты',
    name: 'Тип питания'
  },
  { label: 'ПП-рецепты', value: 'ПП-рецепты', name: 'Тип питания' },
  { label: 'Сыроедение', value: 'Сыроедение', name: 'Тип питания' },
  {
    label: 'Безглютеновые рецепты',
    value: 'Безглютеновые рецепты',
    name: 'Тип питания'
  },
  { label: 'Калорийные рецепты', value: 'Калорийные рецепты', name: 'Тип питания', size: 'medium' }
];
const dropdownListDataSecond: IRadio[] = [
  { label: 'Бранч', value: 'Бранч', name: 'Время приема' },
  { label: 'Завтрак', value: 'Завтрак', name: 'Время приема' },
  { label: 'Ланч', value: 'Ланч', name: 'Время приема' },
  { label: 'Обед', value: 'Обед', name: 'Время приема' },
  { label: 'Перекус', value: 'Перекус', name: 'Время приема' }
];

const productCardsData: IProductCard[] = [
  {
    img: dishPlaceholder,
    name: 'Дорадо',
    link: '',
    pfs: {
      proteins: 12,
      fats: 30,
      carbohydrates: 50,
      energyValue: 230
    }
  },
  {
    img: dishPlaceholder,
    name: 'Лосось',
    link: '',
    pfs: {
      proteins: 12,
      fats: 30,
      carbohydrates: 50,
      energyValue: 230
    }
  },
  {
    img: dishPlaceholder,
    name: 'Икра чёрная',
    link: '',
    pfs: {
      proteins: 2,
      fats: 50,
      carbohydrates: 10,
      energyValue: 130
    }
  },
  {
    img: dishPlaceholder,
    name: 'Барабулька',
    link: '',
    pfs: {
      proteins: 24,
      fats: 30,
      carbohydrates: 108,
      energyValue: 800
    }
  }
];

const descriptionCardData: IDescriptionCard[] = [
  {
    img: dishPlaceholder,
    name: 'Малина',
    type: 'Ингредиент',
    link: '',
    description:
      'ценная ягода, в которой содержатся витамины A, B, C. Малину рекомендуют есть тем, чья работа связана с постоянным нервным напряжением, а также при малокровии и заболеваниях желудочно-кишечного тракта'
  },
  {
    img: dishPlaceholder,
    name: 'Клубника',
    type: 'Ингредиент',
    link: '',
    description:
      'ценная ягода, в которой содержатся витамины A, B, C. Малину рекомендуют есть тем, чья работа связана с постоянным нервным напряжением, а также при малокровии и заболеваниях желудочно-кишечного тракта'
  }
];

const UiKit = () => {
  const [simpleSelectValue, setSimpleSelectValue] = useState('');

  const handleSimpleSelectChange = (e: { value: string }) => {
    setSimpleSelectValue(e.value);
  };

  const [sortValue, setSortValue] = useState('Кухня');

  const handleSortSelectChange = (e: { value: string }) => {
    setSortValue(e.value);
  };

  const [date, setDate] = useState<string>('');

  const handleDateDropdownDateClick = (e: Date) => {
    setDate(e.toLocaleDateString());
  };

  const handleDateDropdownInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const [tagCollectorValue, setTagCollectorValue] = useState('');
  const [tagState, setTagState] = useState<string[]>([]);
  const [matchTags, setMatchTags] = useState<string[]>([]);

  const handleTagCollectorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagCollectorValue(e.target.value);

    if (e.target.value.length > 1) {
      setMatchTags(tagsData.filter((tag) => tag.toLowerCase().match(e.target.value.toLowerCase())));
    } else {
      setMatchTags([]);
    }
  };

  const handleTagCollectorSearchItemClick = (e: { value: string | undefined }) => {
    if (e.value) {
      setTagState([...tagState.filter((tag) => tag !== e.value), e.value]);
    }
    setTagCollectorValue('');
    setMatchTags([]);
  };

  const handleTagButtonClick = (e: { value: string }) => {
    setTagState(tagState.filter((tag) => tag !== e.value));
  };

  const [rangeValueSliderBig, setRangeValueSliderBig] = useState(20);
  const [rangeValueSliderSmall, setRangeValueSliderSmall] = useState(40);
  const marks = [
    [0, ''],
    [20, 'до 20 минут'],
    [40, 'до 40 минут'],
    [60, 'до 60 минут'],
    [80, 'болee 1 часа'],
    [100, '']
  ];

  const handleBigRangeSliderChange = (e: { value: number }) => {
    setRangeValueSliderBig(e.value);
  };

  const handleSmallRangeSliderChange = (e: { value: number }) => {
    setRangeValueSliderSmall(e.value);
  };

  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const handlePopupButtonClick = () => {
    setIsVisiblePopup(true);
  };
  const handlePopupClick = () => {
    setIsVisiblePopup(false);
  };

  return (
    <div className="ui-kit">
      <div className="ui-kit__titles">
        {titleVariants.map((title) => (
          <div className="ui-kit__title" key={Math.random()}>
            <Title level={title.level} size={title.size}>
              Заголовок
            </Title>
          </div>
        ))}
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Buttons
        </Title>
      </div>
      <div className="ui-kit__buttons">
        <div className="ui-kit__button-variant">
          {buttonData.slice(0, 3).map((btn) => (
            <div className="ui-kit__button" key={Math.random()}>
              <Button size={btn.size} color={btn.color} fill={btn.fill} outline={btn.outline}>
                Добавить все
              </Button>
            </div>
          ))}
        </div>
        <div className="ui-kit__button-variant">
          {buttonData.slice(3, 6).map((btn) => (
            <div className="ui-kit__button" key={Math.random()}>
              <Button size={btn.size} color={btn.color} fill={btn.fill} outline={btn.outline}>
                Добавить все
              </Button>
            </div>
          ))}
        </div>
        <div className="ui-kit__button-variant">
          {buttonData.slice(6, 9).map((btn) => (
            <div className="ui-kit__button" key={Math.random()}>
              <Button size={btn.size} color={btn.color} fill={btn.fill} outline={btn.outline}>
                Добавить все
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Icons
        </Title>
      </div>
      <div className="ui-kit__icons">
        {iconVariants.map((icon) => (
          <div className="ui-kit__icon" key={Math.random()}>
            <Icon name={icon.name} size={icon.size} />
          </div>
        ))}
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Inputs
        </Title>
      </div>
      <div className="ui-kit__inputs">
        {inputVariants.map((input) => (
          <div className="ui-kit__input" key={Math.random()}>
            <Input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              label={input.label}
              status={input.status}
              message={input.message}>
              {input.children}
            </Input>
          </div>
        ))}
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Checkbox & Radio
        </Title>
      </div>
      <div className="ui-kit__click-inputs">
        <div className="ui-kit__radio">
          <Radio label="radio-1" value="variant-1" name="radio" />
        </div>
        <div className="ui-kit__radio">
          <Radio label="radio-2" value="variant-2" name="radio" size="medium" />
        </div>
        <div className="ui-kit__checkbox">
          <Checkbox label="caheckbox-1" value="value-1" name="checkbox-1" size="small" />
        </div>
        <div className="ui-kit__checkbox">
          <Checkbox label="caheckbox-2" value="value-2" name="checkbox-2" size="medium" />
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Dropdowns
        </Title>
      </div>
      <div className="ui-kit__dropdowns">
        <div className="ui-kit__dropdown-select">
          <Select
            value={simpleSelectValue}
            onChange={handleSimpleSelectChange}
            name="number"
            label="Simple-select"
            placeholder="Выбери число"
            items={[
              {
                value: 'Один',
                text: 'Один'
              },
              {
                value: 'Два',
                text: 'Два'
              },
              {
                value: 'Три',
                text: 'Три'
              },
              {
                value: 'Четыре',
                text: 'Четыре'
              },
              {
                value: 'Пять',
                text: 'Пять'
              },
              {
                value: 'Шесть',
                text: 'Шесть'
              }
            ]}
          />
        </div>
        <div className="ui-kit__dropdown-select">
          <DateDropdown
            value={date}
            label="Date-picker"
            onChange={handleDateDropdownInputChange}
            onDateClick={handleDateDropdownDateClick}
          />
        </div>
        <div className="ui-kit__dropdown-select">
          <Select
            value={sortValue}
            onChange={handleSortSelectChange}
            name="number"
            label="сортировать по"
            type="sort"
            placeholder="Выбери число"
            items={[
              {
                value: 'Восточноевропейская кухня',
                text: 'Восточноевропейская кухня'
              },
              {
                value: 'Азиатская кухня',
                text: 'Азиатская кухня'
              },
              {
                value: 'Французская кухня',
                text: 'Французская кухня'
              },
              {
                value: 'Немецкая кухня',
                text: 'Немецкая кухня'
              }
            ]}
          />
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Tag & Tag-Collector
        </Title>
      </div>
      <div className="ui-kit__tags-block">
        <div className="ui-kit__tags-block-item">
          <TagCollector
            buttonText="Ингредиент"
            placeholder="Введите ингредиент"
            searchValue={tagCollectorValue}
            tags={tagState.map((tag) => ({ value: tag, onClick: handleTagButtonClick }))}
            searchItems={matchTags}
            onSearchValueChange={handleTagCollectorInputChange}
            onSelect={handleTagCollectorSearchItemClick}
          />
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Range Slider
        </Title>
      </div>
      <div className="ui-kit__range-sliders">
        <div className="ui-kit__range-slider">
          <RangeSlider
            min={0}
            max={100}
            value={rangeValueSliderBig}
            onChange={handleBigRangeSliderChange}
            marks={Object.fromEntries(marks)}
          />
        </div>
        <div className="ui-kit__range-slider">
          <RangeSlider
            min={0}
            max={100}
            value={rangeValueSliderSmall}
            onChange={handleSmallRangeSliderChange}
            marks={Object.fromEntries(marks)}
            size="small"
          />
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Cards
        </Title>
      </div>
      <div className="ui-kit__recept-cards">
        {cards.map((card) => (
          <div className="ui-kit__recept-card" key={card.id}>
            <ReceptCard
              id={card.id}
              name={card.name}
              img={card.img}
              isLiked={card.isLiked}
              isAdded={card.isAdded}
              likes={card.likes}
              cokingTime={card.cokingTime}
            />
          </div>
        ))}
      </div>
      <div className="ui-kit__product-type-cards">
        {productTypesData.map((card) => (
          <div className="ui-kit__product-type-card" key={card.name}>
            <ProductTypeCard name={card.name} img={card.img} link={card.link} />
          </div>
        ))}
      </div>
      <div className="ui-kit__product-type-cards">
        {productCardsData.map((card) => (
          <div className="ui-kit__product-type-card" key={card.name}>
            <ProductCard name={card.name} img={card.img} link={card.link} pfs={card.pfs} />
          </div>
        ))}
      </div>
      <div className="ui-kit__product-type-cards">
        {descriptionCardData.map((card) => (
          <div className="ui-kit__product-type-card" key={card.name}>
            <DescriptionCard
              name={card.name}
              img={card.img}
              link={card.link}
              type={card.type}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          CategoryFeed
        </Title>
      </div>
      <div className="ui-kit__category-feed">
        <CategoryFeed categories={categories} />
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Checkbox-list
        </Title>
      </div>
      <div className="ui-kit__dropdown-lists">
        <div className="ui-kit__dropdown-list">
          <Dropdown title="Тип питания" limited={4} isOpen>
            {dropdownListDataFirst.map((item) => (
              <Radio
                label={item.label}
                value={item.value}
                name={item.name}
                size="medium"
                key={item.value}
              />
            ))}
          </Dropdown>
        </div>
        <div className="ui-kit__dropdown-list">
          <Dropdown title="Время приема" isOpen>
            {dropdownListDataSecond.map((item) => (
              <Radio
                label={item.label}
                value={item.value}
                name={item.name}
                size="medium"
                key={item.value}
              />
            ))}
          </Dropdown>
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Pfs Scoreboard
        </Title>
      </div>
      <div className="ui-kit__pfs">
        <PfsScoreboard proteins={100} fats={100} carbohydrates={100} energyValue={100} />
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Popup
        </Title>
      </div>
      <div className="ui-kit__popup">
        <div className="ui-kit__popup-button-open">
          <Button
            size="small"
            color="second"
            fill="main"
            outline="full"
            onClick={handlePopupButtonClick}>
            Открыть
          </Button>
          <Popup isOpen={isVisiblePopup} onOutsideClick={handlePopupClick}>
            <FormContainer withImg>
              <div className="ui-kit__popup-children">
                <SubscribeForm type="popup" />
              </div>
            </FormContainer>
          </Popup>
        </div>
      </div>
      <div className="ui-kit__block-title">
        <Title level={3} size="big">
          Forms
        </Title>
      </div>
      <div className="ui-kit__forms">
        <div className="ui-kit__form">
          <AddReceptForm />
        </div>
        <div className="ui-kit__form">
          <LoginForm />
        </div>
        <div className="ui-kit__form">
          <RegisterForm />
        </div>
        <div className="ui-kit__form">
          <SubscribeForm type="static" />
        </div>
      </div>
    </div>
  );
};

export default UiKit;
