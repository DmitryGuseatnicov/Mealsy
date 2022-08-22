import React, { FC } from 'react';
import Slider from 'rc-slider';
import './RangeSlider.scss';

interface IRangeSlider {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: { value: number }) => void;
  value: number;
  marks: { [x: number]: string | number };
  min?: number;
  max?: number;
  step?: number | null;
  size?: 'standard' | 'small';
}

const sizeVariants = {
  small: 'range-slider_size-small',
  standard: 'range-slider_size-standard'
};

const RangeSlider: FC<IRangeSlider> = (props) => {
  const { value, min = 0, max = 100, step = null, marks, size = 'standard', onChange } = props;

  const handleSliderChange = (e: number | number[]) => {
    if (!Array.isArray(e)) {
      onChange({ value: e });
    }
  };

  const classes = ['range-slider', sizeVariants[size]].join(' ');

  return (
    <div className={classes}>
      <Slider
        min={min}
        max={max}
        value={value}
        defaultValue={value}
        marks={marks}
        step={step}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export type { IRangeSlider };
export default RangeSlider;
