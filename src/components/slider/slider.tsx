import React from "react";
import { Range, Direction } from "react-range";

interface Props {
  values: number;
  min: number;
  max: number;
  handleChange: (values: number[]) => void;
  vertical?: boolean;
}

function Slider(props: Props) {
  const { values, min, max, handleChange, vertical } = props;

  const trackStyles = (style: any) => ({
    ...style,
    height: vertical ? "100%" : 0,
    width: vertical ? 0 : "100%",
  });

  const thumbStyles = (style: any) => ({
    ...style,
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    borderRadius: "25%",
  });

  return (
    <Range
      step={1}
      min={min}
      max={max}
      values={[values]}
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
