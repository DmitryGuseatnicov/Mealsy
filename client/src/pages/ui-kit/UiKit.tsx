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
  AddReceptForm
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
    img: './https://s3-alpha-sig.figma.com/img/5dba/c2bf/ff28867c6439c0d9005ed61ec3039391?Expires=1662336000&Signature=ZGU2b0EcCcq6J5PAGroE6kaULE91WSKCQ96Ts~Y1Rf7-3vpbsACWdXmnynn23otuPxRxkOKrM99J6GOu0sChvfjlQ7Zzioh6NQJpHd1sj05bufzYXK1M2eGM9hrR2L40hU1pTDed-UE0MjCbI47umugyELplQMvCXatb7861z1RUYUqrXp4bMXatZG51cNUcDbFLuAqTq26KdVE-ANzQtMDmxewOAURIoMOIkbiWJzxEHWB8bfEMTerxQRcIKk4CJHrCfj3FwwzMNfjfYlBehpKQlfMwpnr~NpM4W0qOitOx1mM3MMSdChZXPXfTWFPL-RKG5vrbJGK9PnhsudmCrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Яблочная крошка в стакане',
    isLiked: false,
    isAdded: false,
    likes: 2002,
    cokingTime: 20
  },
  {
    id: '2',
    img: './https://s3-alpha-sig.figma.com/img/e7c5/696a/8d421771d89038c800703c3681a42e68?Expires=1662336000&Signature=HHLORbvk7URYcobuedR9lZUq9H2eK-jK-XsCXaxwyz7PQbbX8pvGfg1tqH44KSrFfZXrEm6f-t4j96RvYaDFj3dWNyp0oeTrlhloPk2GzmpOqlnRZoKU6u1IeVd9XJQXxlZ6UWY6y79LbB~HE8ui-L4m7f929DB1Bd60aoT-gVvpRBKwvUXo4EBr~YCmjJRnFFSHe8rOik~alenRJCswG3OYcV9U7ioFtbKUsDrJqn46yKGuuhw6eHj3vABHivokHWuW7BXhcYEwmnBI0y4EgfY9IcbyTNVN0Mi9bNn2puXMADEKLSlEXwCi-TrKSuXoouWNsAkJGgFQzN87K64ddg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Вафли с ягодным вареньем',
    isLiked: false,
    isAdded: false,
    likes: 1110,
    cokingTime: 40
  },
  {
    id: '3',
    img: './https://s3-alpha-sig.figma.com/img/547f/e4c9/f9583a350f0eef16f7d1015113f5db8c?Expires=1662336000&Signature=JLW1G~A7~c7hChzvrRjvesoaqBYaDSf5eThvEDbTgp401uC9eYGQ7dtO6zJkdD2cIEXgfQ4sX~MA9mihqKiYKiksCLcMf50tLmVM~kSiMGmDPpjxZINNUAcMhGSDJ~vKFWO-JCljV71FYjsA2wt0UR18Kb~HWrMizBSIsE~rrYbMTcW1Gf9JjYKmp8B3ucziUhKUrqRuMrMNsiIDwMuwUS9jBlAf~iO9qt2cuq60Tyt41CRrPsZ8nUowCPxQTJ5u6d98lMI0aCgo3nE99IlOsquFIxhJv8ThMjVOjOIQjiIPNDsoMBY6ZpuoFBCDmJHJd9ZLulfq3W5xNwUkundNzA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Кокосовый рисовый пудинг с манговым соусом',
    isLiked: false,
    isAdded: false,
    likes: 32,
    cokingTime: 50
  },
  {
    id: '4',
    img: './https://s3-alpha-sig.figma.com/img/ac64/7fb8/4727ecdf9c926bee669abf600d53f20a?Expires=1662336000&Signature=hk3JLUdMY-cRYop2CC5pxu4ne6cOu8dosJuVhlmPnFYpwSRAsENH-iC9SDDpOVMTRmR6~IoVTVmUrWK9iANElvhAeiyg0hL4cmdHbSqNCMmRM42GUpV3LlPe~bcT9dpVA5B9BYxMC-alJm9zn8KkPTpGJUhIKBv0-VLd29PEy7n5mUes6MVMaJn-8i6Msv5zhyN1dgcdI0jkKJThouLa9hl4Dm6Tvl459fCXabmx2jwlscU1LtmRCRgEihhRFoBaFh30Dgv6aqWUIKt6vZPDCLbOpjquCcciPIM2ErRUDxr6Pb68Ugj2-HjbrflOYgyd6GONniRsffeDjqvByVzQCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'ЯБезгютеновые тыквенно-черничные блинчики',
    isLiked: false,
    isAdded: false,
    likes: 5,
    cokingTime: 102
  }
];

const categories = [
  {
    img: './https://s3-alpha-sig.figma.com/img/0b0f/ea67/38a8c444a9a339c44ed37e2f958748ca?Expires=1662336000&Signature=YheXOeQ80My-4ogagkbWKEDJHrO5jcJEbRy-4LPYP~-rLBG~~HOrWQ0JGspkd4cth1Vinzq1nB-xE8vS0zO3GYb0V8aTGw-Dg17ppSkk7l5wfLJJ-vzGAI9qAd9QuYBi5DFXD0AOab~CkAqbqk5LrFRLilpdfSUiMlWp-3tXFIZnMhIEBvkzONP34nmBv-DP8N90cZKf-x972NIeGSunBbgfWZkV3MGUakxdq0q6T2WRbShRsQnv97uCIxdJjMINo6PNsBKI56tzsb8crxvyCZ~K0NoUWnu3G~H6HOkPd-fjIBLEBPhOHsxXashQBDfAhj4uJTA0FQ3oFEMrZxX2iA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Русская кухня',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/ef46/55d0/9a88a4ef2d6f63de4b040ec4caee788b?Expires=1662336000&Signature=DqWo17kAv8TmNjCnhJNAFLGuykGJ6Ls8Y~Hl9q5kyn86uyhNxbSd3Uau6WNNxcL6aOrnPrRqyu40LyrQrRFoIJUrkAdoB54uNcTFmh3hRCrPABuDqRE6yYQ75cE-SRyPhqn16fplA9TzJRFlWSD8VOKIegf2VyDmctuNz5fdSlwymaBx5eYnc-E-tX1~zG1WEeLOnCQc3rlYvU54NTQL70JuUPaXHVXO5ekryvMXlGPhU0fxZycOB5leYSgYhHrJZDHy00d0kwDQRe0duFhUW6I0TZNSP~ofIdtEqcwgWTO6pi2b~0YtN42hSAJj~Nlkd14J5uzHaij5rSdLGvdTwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Азиатская кухня',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/e5fd/864a/69a929f80b0881164d4a8e998cc45957?Expires=1662336000&Signature=Chh530YlAVOHDhw8fwNNKxM6I85HSWyp4Pt9vdFZpb5xbYyOcX~tWOpiWWhrWygWMddwuqX32Kq2BYAU1X4JVm6MLRlX06h1-iqomaSSMqaPaHZ1pAx9Cvws7p7ue501sqkbhYx1YWWr~h-TiK~ADTh-ZoZY0azZ8h4CwNjvs65Qkozneq2zeGFoPm9Z8MnsF5G1uQTAW-QDb7iZY48LJBB54OMJEK9R5kj5LWxF46YiFhDB6Ex6OP4Qxb74i8CR6p1JRS39ujxTzqy-HksOplOf14TG7ZVrsQtT6PkAr-6nSjXjjk0P4Nhx0wZz3nFt7FXnAhg~eFRighV33vQLnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Британская кухня',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/0a65/36c0/9116f5a88b4407b5d579f220c53324d5?Expires=1662336000&Signature=PAcRs2D1Q~5UjoLd4LVYssmKdHRaurEKuH6hZFuvN-rd8M5qCeq6KTTEetICexh2hIjbmusAgiycmBl1KHCX~8sM61nQVk7kggpJFaeAqgkzZG6LLD67NVLaWwZebrp4DGg9fEZwDrZih7C4DAG~hHcUzD~W0CLjbO8nbK2i8GFTQH6IAI~yeajuniItd4~PmLhnNyHusMrel0lNL37jyfU00oUle-h9IHtV70g~-egl2XmAWF551Fch6UVbKU0164qcMlVsrGvHi~9mNNiluW8FKqKmtSTJXaFw14caRw8uQTx46NMsKRzrZvnRTl5WUQNGG4V6Ciw8IAegCirflg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Китайская кухня',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/b28c/3035/60a9bc4d70e6c788d097a00e6c6b4458?Expires=1662336000&Signature=eyCZ~7pxqziBCg8uC1V6nLB16YrSQFRNHXjmh6y9DLgkNCPxMhyK3sb35dWCTjf1ttdy0hNG0lF82Ok8u~05RMhCSEKox4narRyWJHgulnnpks~-UrpsEK51M56gAP~hTWuFJFqlALzWuL~Cdt8nQHmIOaIw8Dbo5SDCY6FCulaEsRRS4R6Y9r2v-mg4sCzYa3t67sq2qFzBBsrYn7Zr4vdYKLpgIbfgD6k-dGR3Qm0dL7L~mdl9mrQxhrsc0OFq39fOydX2tYwfO3QLtrTpg~cliLqgsBlrsE7gyy69~g1VWLbVE9NDn9VphpWl6kqt~GfL14c1MigUdbDGlHw2QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Французская кухня',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/03aa/c69b/38509793a7a1492ddc20505967d11257?Expires=1662336000&Signature=XA9Nd0uP1TXhnegDM-mhe2jT18k2YWIA4u6~m62EsTMK2diOwegSTUQrOY6SanrwmR7ajORJreK6z0-sUM5gK1cCPJfCbC~Y28Mu62ATMD3vT0uOdXVLCsJSCPV5YnWeDmc9rNDH0SnmE0prhEwi~bsUFQc3KB4aRKyNGwt96lFalu888Oth53clcEPjx5s0pFJeuQ-7NqixvS3rlV8bhebECkGWOM6iCpGcsNwuKdHNHg8JWK-7KdCt2NyKCgDY~2ZG6cxba08E0ybZCOGXvdNkL93sMR7XVMTMXMmVvplADJzjhcK1cDzHXaKP4Q6TOG1hiJMA79fktiR6OLQxAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Немецкая кухня',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/5618/71ca/d0ca33ba3a750597b5e8c10f172ad1a3?Expires=1662336000&Signature=eHqVzy3squNp1vYOKiQTr47NCujWmZWW7~T~2mnR4DxM85x13fSIL8TnXBPgqIaunXO7gpwwBT6MclXvPzOZpTYk2VsAdBDdpCT6hRUNgDOzfJ37IgbRIspKkj3aFEucu8Ar4OBfULixuPow9Whza0aUd2EspV9-TqjO0TP9Lac4etT8l-5VySeUUemYbVhk~xLoAJqHcJ7PoJrb1c1i064Bo4ytliiooFq2dMfdXQ-j8beGVjS6KPCd52hf3DZ5D-Ve3cr42QMnlrdlo1jZGaS1xQZGbtZ7LF4f2w4p5zRQCC3hvPwc14BSCBnFL8tnaBPE9qM4Fo0rz~aZroANng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Греческая кухня',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/a1d9/3a9b/d748d7eb83f4dcc61509380e32cb0168?Expires=1662336000&Signature=BRwWHd3C9bbtD0kDj8Rc~iKiIoPE4NvwJcnjkHB8NxrbWfHXzopiL2mOXrBRMqSH6d3RYRnlEtranuyWq-si4oE2mh2UoIU~Nr6e5wQqmfqyTWHIVD8uI7mCRPn9v7iAH4jTyMKPgqvzENSQDzLdwpvxYRKunfyvoE~OKyVYevDWr8yWOxNf0dFfjMRLuj~ncA~laFluE0-TPiONBvJ5adOQy8UKFCvtphdDxvN~y-trW9yP2PaSXOsU1GddocXJonAP2ZwaeGzwHOCtJKMn8aEW7Bz3w9pUNq9QFy3rLHrjQ9REsKVPo3q0~NpEJU4vr65KNPDNntrMH-sRKPHS9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Индийская кухня',
    link: ''
  }
];

const productTypesData: IProductTypeCard[] = [
  {
    img: './https://s3-alpha-sig.figma.com/img/2273/b732/2cd437e6c94b11da7c2742026feef59e?Expires=1662336000&Signature=DEWIbdsyDyPrvsvieHT0wwCDA59QKZkVK~WLCjTpgLWJolLrkA-eRLHWP-opwdUeWyFKDq8eQU9l02qyjOuxErWLG985hPoca0uAkWGShGfbfSqFLbcHjDHjjMeKdl1yMsNN0lLPDBhCY1UeCcEEFoRtRmt5fAROAH3GWkElkU2C9qutKmoG3qN0j8uWyHJQPwSpBamtOwbJVXS9i2D62oD58Wkor235mAb4md26HqgiadSAuhYvqEl3P-rUhOWHZseX1YYSOUdwoW6javlxvvbDSsm-HM2cokvkUYU2gQnTWLIr5nmNbbdD1AfiT5KnGoo50ycmZPwqs1nSjEJ9XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Молочные продукты и яйца',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/5394/a71a/13a55f84f73e05ea10e7155cdd5257f0?Expires=1662336000&Signature=AIGMjcuiSGbZ5QI5FYynbSgPZ5sVKDJXetGhcqHhUPBG9jSXIdqkF6ShtX3zzAoqyumH38HGMEiJ2QgGRPW41bJe0LzDOG5HK807fSc67vzp0P7EXb3LNXce0CmhjK7nW~s~Pz52mBzZKN-NCBTigLrvqU~mWrV1kzbkag0Utvw~7Ao1IoCGVeCFHk3aTAy6CajQkC51645hbiNA1iA-vVLQ3JOrOTJuRUJ8-Xp-DAkCt1X~Ytl6I5i6H1i8VJ5X~Sci6yOyVhFaF2Y-noLpgndhh~bODlbNeIBut4a9GuDv5v50xOLbLv0VU8OuTmADI4FmJdw40lu97IsXwC6k1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Рыба и морепродукты',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/80f5/c256/145075658d47f1bd847a51c787825f85?Expires=1662336000&Signature=TSKcZtPYsrYL1tGoDkNTeT5minX9x-KloVVztEXVSTIxa0U0tc2HL25VuDRpSoq5q-2U7VaVUwuIsWKK8x1tPDV5Gjb0WwMEYwQGfbfy-9-n~~ZvDfxnufvfI-y5FLWX5XHFCXhx6TjLCUOBl17nrONKzgA403-YAZItiYEoISwN0L1iTpWDc0Q56wFNAMc7y0iM-Thihl44M-y5Q0mmu9ElO14wMThp-jryar8Jmnp7jMSJ23Gyo1R1fVkxsQe4hCmZuCkR-BLB69oWn0i6EkSHUbmH0DraEG35CtPyBmbWsM28NJe9o39ZhyMyIUip43TlG3RZhcSRGgwC8HTRDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Овощи и корнеплоды',
    link: ''
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/80f5/c256/145075658d47f1bd847a51c787825f85?Expires=1662336000&Signature=TSKcZtPYsrYL1tGoDkNTeT5minX9x-KloVVztEXVSTIxa0U0tc2HL25VuDRpSoq5q-2U7VaVUwuIsWKK8x1tPDV5Gjb0WwMEYwQGfbfy-9-n~~ZvDfxnufvfI-y5FLWX5XHFCXhx6TjLCUOBl17nrONKzgA403-YAZItiYEoISwN0L1iTpWDc0Q56wFNAMc7y0iM-Thihl44M-y5Q0mmu9ElO14wMThp-jryar8Jmnp7jMSJ23Gyo1R1fVkxsQe4hCmZuCkR-BLB69oWn0i6EkSHUbmH0DraEG35CtPyBmbWsM28NJe9o39ZhyMyIUip43TlG3RZhcSRGgwC8HTRDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
    img: './https://s3-alpha-sig.figma.com/img/2273/b732/2cd437e6c94b11da7c2742026feef59e?Expires=1662336000&Signature=DEWIbdsyDyPrvsvieHT0wwCDA59QKZkVK~WLCjTpgLWJolLrkA-eRLHWP-opwdUeWyFKDq8eQU9l02qyjOuxErWLG985hPoca0uAkWGShGfbfSqFLbcHjDHjjMeKdl1yMsNN0lLPDBhCY1UeCcEEFoRtRmt5fAROAH3GWkElkU2C9qutKmoG3qN0j8uWyHJQPwSpBamtOwbJVXS9i2D62oD58Wkor235mAb4md26HqgiadSAuhYvqEl3P-rUhOWHZseX1YYSOUdwoW6javlxvvbDSsm-HM2cokvkUYU2gQnTWLIr5nmNbbdD1AfiT5KnGoo50ycmZPwqs1nSjEJ9XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
    img: './https://s3-alpha-sig.figma.com/img/2273/b732/2cd437e6c94b11da7c2742026feef59e?Expires=1662336000&Signature=DEWIbdsyDyPrvsvieHT0wwCDA59QKZkVK~WLCjTpgLWJolLrkA-eRLHWP-opwdUeWyFKDq8eQU9l02qyjOuxErWLG985hPoca0uAkWGShGfbfSqFLbcHjDHjjMeKdl1yMsNN0lLPDBhCY1UeCcEEFoRtRmt5fAROAH3GWkElkU2C9qutKmoG3qN0j8uWyHJQPwSpBamtOwbJVXS9i2D62oD58Wkor235mAb4md26HqgiadSAuhYvqEl3P-rUhOWHZseX1YYSOUdwoW6javlxvvbDSsm-HM2cokvkUYU2gQnTWLIr5nmNbbdD1AfiT5KnGoo50ycmZPwqs1nSjEJ9XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
    img: './https://s3-alpha-sig.figma.com/img/2273/b732/2cd437e6c94b11da7c2742026feef59e?Expires=1662336000&Signature=DEWIbdsyDyPrvsvieHT0wwCDA59QKZkVK~WLCjTpgLWJolLrkA-eRLHWP-opwdUeWyFKDq8eQU9l02qyjOuxErWLG985hPoca0uAkWGShGfbfSqFLbcHjDHjjMeKdl1yMsNN0lLPDBhCY1UeCcEEFoRtRmt5fAROAH3GWkElkU2C9qutKmoG3qN0j8uWyHJQPwSpBamtOwbJVXS9i2D62oD58Wkor235mAb4md26HqgiadSAuhYvqEl3P-rUhOWHZseX1YYSOUdwoW6javlxvvbDSsm-HM2cokvkUYU2gQnTWLIr5nmNbbdD1AfiT5KnGoo50ycmZPwqs1nSjEJ9XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
    img: './https://s3-alpha-sig.figma.com/img/2273/b732/2cd437e6c94b11da7c2742026feef59e?Expires=1662336000&Signature=DEWIbdsyDyPrvsvieHT0wwCDA59QKZkVK~WLCjTpgLWJolLrkA-eRLHWP-opwdUeWyFKDq8eQU9l02qyjOuxErWLG985hPoca0uAkWGShGfbfSqFLbcHjDHjjMeKdl1yMsNN0lLPDBhCY1UeCcEEFoRtRmt5fAROAH3GWkElkU2C9qutKmoG3qN0j8uWyHJQPwSpBamtOwbJVXS9i2D62oD58Wkor235mAb4md26HqgiadSAuhYvqEl3P-rUhOWHZseX1YYSOUdwoW6javlxvvbDSsm-HM2cokvkUYU2gQnTWLIr5nmNbbdD1AfiT5KnGoo50ycmZPwqs1nSjEJ9XA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
    img: './https://s3-alpha-sig.figma.com/img/fea5/39b8/24e3c25677119c2b63f8a42b22f337db?Expires=1662336000&Signature=Fm6CxOduiMNdihNXVwxWnToobUSbYX8C5iz7YSiXnVlrdvV9soYmsim~Tt60Nz9m4bcniY~3Kfz-7wza-y1wDAvdzUu9wE7WqlMnXFmgENQzpOlkbOWcsWIpZ6dqNGDioOWKRl33M-267YrpEJHreGFQ~lDg3ivgjPtUiIO3qMQZfw2sg7I1CBszYfCOuf6ZljcJImo-e~DgUxPvIx4c9r8IZYFc~uFD~kT9pP4vlpTqWEdP775FGF1Jzw7k9OYwuTgYGKOwH-AmOoH1-oaSUVWKaKelkyfjuW590bq-PjqYsw5hePIXkc~hp7epaXg4CmdK1pxqa8NvmhWZNix4uQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Малина',
    type: 'Ингредиент',
    link: '',
    description:
      'ценная ягода, в которой содержатся витамины A, B, C. Малину рекомендуют есть тем, чья работа связана с постоянным нервным напряжением, а также при малокровии и заболеваниях желудочно-кишечного тракта'
  },
  {
    img: './https://s3-alpha-sig.figma.com/img/fea5/39b8/24e3c25677119c2b63f8a42b22f337db?Expires=1662336000&Signature=Fm6CxOduiMNdihNXVwxWnToobUSbYX8C5iz7YSiXnVlrdvV9soYmsim~Tt60Nz9m4bcniY~3Kfz-7wza-y1wDAvdzUu9wE7WqlMnXFmgENQzpOlkbOWcsWIpZ6dqNGDioOWKRl33M-267YrpEJHreGFQ~lDg3ivgjPtUiIO3qMQZfw2sg7I1CBszYfCOuf6ZljcJImo-e~DgUxPvIx4c9r8IZYFc~uFD~kT9pP4vlpTqWEdP775FGF1Jzw7k9OYwuTgYGKOwH-AmOoH1-oaSUVWKaKelkyfjuW590bq-PjqYsw5hePIXkc~hp7epaXg4CmdK1pxqa8NvmhWZNix4uQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
                <AddReceptForm />
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
      </div>
    </div>
  );
};

export default UiKit;
