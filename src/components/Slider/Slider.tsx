import React from 'react';
import { Range, Direction } from 'react-range';

type TProps = {
  values: number;
  min: number;
  max: number;
  handleChange: (values: number[]) => void;
  vertical?: boolean;
};

const Slider: React.FC<TProps> = ({ handleChange, max, min, values, vertical }) => (
  <Range
    step={1}
    min={min}
    max={max}
    values={[values]}
    onChange={handleChange}
    direction={vertical ? Direction.Up : Direction.Left}
    renderTrack={({ props, children }) => (
      <div
        {...props}
        style={{
          ...props.style,
          height: vertical ? '100%' : 0,
          width: vertical ? 0 : '100%',
        }}
      >
        {children}
      </div>
    )}
    renderThumb={({ props }) => (
      <div
        {...props}
        style={{
          ...props.style,
          height: 15,
          width: 15,
          backgroundColor: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          borderRadius: '25%',
        }}
      />
    )}
  />
);

export default Slider;
