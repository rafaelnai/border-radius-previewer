import React from "react";
import { Range, Direction } from "react-range";

interface Props {
  values: number[];
  min: number;
  max: number;
  handleChange: (values: number[]) => void;
  vertical?: boolean;
}

function Slider(props: Props) {
  const { values, min, max, handleChange, vertical } = props;

  const trackStyles = (style: any) => ({
    ...style,
    height: vertical ? "100%" : 10,
    width: vertical ? 10 : "100%",
    backgroundColor: "#a5b1c2",
  });

  const thumbStyles = (style: any) => ({
    ...style,
    height: 15,
    width: 15,
    backgroundColor: "#4b6584",
  });

  return (
    <Range
      step={1}
      min={min}
      max={max}
      values={values}
      onChange={handleChange}
      direction={vertical ? Direction.Up : Direction.Left}
      renderTrack={({ props, children }) => (
        <div {...props} style={trackStyles(props.style)}>
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div {...props} style={thumbStyles(props.style)} />
      )}
    />
  );
}

export default Slider;
