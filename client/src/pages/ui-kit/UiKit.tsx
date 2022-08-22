import React, { useState } from 'react';

import {
  Button,
  IButton,
  Icon,
  IIcon,
  IInput,
  Input,
  ITitle,
  Logo,
  Title,
  Select,
  DateDropdown,
  TagCollector,
  RangeSlider,
  ICard,
  Card
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

const cards: ICard[] = [
  {
    id: '1',
    img: 'https://s3-alpha-sig.figma.com/img/5dba/c2bf/ff28867c6439c0d9005ed61ec3039391?Expires=1662336000&Signature=ZGU2b0EcCcq6J5PAGroE6kaULE91WSKCQ96Ts~Y1Rf7-3vpbsACWdXmnynn23otuPxRxkOKrM99J6GOu0sChvfjlQ7Zzioh6NQJpHd1sj05bufzYXK1M2eGM9hrR2L40hU1pTDed-UE0MjCbI47umugyELplQMvCXatb7861z1RUYUqrXp4bMXatZG51cNUcDbFLuAqTq26KdVE-ANzQtMDmxewOAURIoMOIkbiWJzxEHWB8bfEMTerxQRcIKk4CJHrCfj3FwwzMNfjfYlBehpKQlfMwpnr~NpM4W0qOitOx1mM3MMSdChZXPXfTWFPL-RKG5vrbJGK9PnhsudmCrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Яблочная крошка в стакане',
    isLiked: false,
    isAdded: false,
    likes: 2002,
    cokingTime: 20
  },
  {
    id: '2',
    img: 'https://s3-alpha-sig.figma.com/img/e7c5/696a/8d421771d89038c800703c3681a42e68?Expires=1662336000&Signature=HHLORbvk7URYcobuedR9lZUq9H2eK-jK-XsCXaxwyz7PQbbX8pvGfg1tqH44KSrFfZXrEm6f-t4j96RvYaDFj3dWNyp0oeTrlhloPk2GzmpOqlnRZoKU6u1IeVd9XJQXxlZ6UWY6y79LbB~HE8ui-L4m7f929DB1Bd60aoT-gVvpRBKwvUXo4EBr~YCmjJRnFFSHe8rOik~alenRJCswG3OYcV9U7ioFtbKUsDrJqn46yKGuuhw6eHj3vABHivokHWuW7BXhcYEwmnBI0y4EgfY9IcbyTNVN0Mi9bNn2puXMADEKLSlEXwCi-TrKSuXoouWNsAkJGgFQzN87K64ddg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Вафли с ягодным вареньем',
    isLiked: false,
    isAdded: false,
    likes: 1110,
    cokingTime: 40
  },
  {
    id: '3',
    img: 'https://s3-alpha-sig.figma.com/img/547f/e4c9/f9583a350f0eef16f7d1015113f5db8c?Expires=1662336000&Signature=JLW1G~A7~c7hChzvrRjvesoaqBYaDSf5eThvEDbTgp401uC9eYGQ7dtO6zJkdD2cIEXgfQ4sX~MA9mihqKiYKiksCLcMf50tLmVM~kSiMGmDPpjxZINNUAcMhGSDJ~vKFWO-JCljV71FYjsA2wt0UR18Kb~HWrMizBSIsE~rrYbMTcW1Gf9JjYKmp8B3ucziUhKUrqRuMrMNsiIDwMuwUS9jBlAf~iO9qt2cuq60Tyt41CRrPsZ8nUowCPxQTJ5u6d98lMI0aCgo3nE99IlOsquFIxhJv8ThMjVOjOIQjiIPNDsoMBY6ZpuoFBCDmJHJd9ZLulfq3W5xNwUkundNzA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Кокосовый рисовый пудинг с манговым соусом',
    isLiked: false,
    isAdded: false,
    likes: 32,
    cokingTime: 50
  },
  {
    id: '4',
    img: 'https://s3-alpha-sig.figma.com/img/ac64/7fb8/4727ecdf9c926bee669abf600d53f20a?Expires=1662336000&Signature=hk3JLUdMY-cRYop2CC5pxu4ne6cOu8dosJuVhlmPnFYpwSRAsENH-iC9SDDpOVMTRmR6~IoVTVmUrWK9iANElvhAeiyg0hL4cmdHbSqNCMmRM42GUpV3LlPe~bcT9dpVA5B9BYxMC-alJm9zn8KkPTpGJUhIKBv0-VLd29PEy7n5mUes6MVMaJn-8i6Msv5zhyN1dgcdI0jkKJThouLa9hl4Dm6Tvl459fCXabmx2jwlscU1LtmRCRgEihhRFoBaFh30Dgv6aqWUIKt6vZPDCLbOpjquCcciPIM2ErRUDxr6Pb68Ugj2-HjbrflOYgyd6GONniRsffeDjqvByVzQCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'ЯБезгютеновые тыквенно-черничные блинчики',
    isLiked: false,
    isAdded: false,
    likes: 5,
    cokingTime: 102
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

  return (
    <div className="ui-kit">
      <div className="ui-kit__graphic">
        <div className="ui-kit__logo">
          <Logo />
        </div>
      </div>
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
      <div className="ui-kit__cards">
        {cards.map((card) => (
          <div className="ui-kit__card" key={card.id}>
            <Card
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
    </div>
  );
};

export default UiKit;
