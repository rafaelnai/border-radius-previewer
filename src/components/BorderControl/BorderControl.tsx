import React, { useMemo } from 'react';
import Slider from 'components/Slider';
import useStyles from './styles';
import Shape from 'components/Shape';

export interface IControl {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

type TProps = {
  currentRadius: string;
  controls: IControl;
  handleChange: (item: keyof IControl) => (values: number[]) => void;
};

const BorderControl: React.FC<TProps> = ({ controls, currentRadius, handleChange }) => {
  const classes = useStyles();

  const isVertical = (item: keyof IControl) => item === 'left' || item === 'right';
  const controlKeys = Object.keys(controls) as Array<keyof typeof controls>;

  return (
    <div className={classes.control}>
      <Shape radius={currentRadius} />
      {useMemo(
        () =>
          controlKeys.map((key) => (
            <div className={classes[key]} key={key}>
              <Slider
                handleChange={handleChange(key)}
                min={0}
                max={100}
                values={controls[key]}
                vertical={isVertical(key)}
              />
            </div>
          )),
        [controlKeys, isVertical, handleChange]
      )}
    </div>
  );
};

export default React.memo(BorderControl);
