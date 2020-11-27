import React from "react";
import Slider from "components/Slider";
import useStyles from "./styles";
import Shape from "components/Shape";

interface Props {
  currentRadius: string;
  controls: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  handleChange: (item: string) => (values: number[]) => void;
}

const BorderControl: React.SFC<Props> = (props) => {
  const classes = useStyles();
  const { controls, currentRadius, handleChange } = props;

  const isVertical = (item: string) => {
    return item === "left" || item === "right";
  };

  return (
    <div className={classes.control}>
      <Shape radius={currentRadius} />
      {Object.keys(controls).map((item) => (
        <div className={classes[item as keyof typeof controls]} key={item}>
          <Slider
            handleChange={handleChange(item)}
            min={0}
            max={100}
            values={controls[item as keyof typeof controls]}
            vertical={isVertical(item)}
          />
        </div>
      ))}
    </div>
  );
};

BorderControl.defaultProps = {
  currentRadius: "",
  controls: {
    top: 0,
    left: 100,
    bottom: 100,
    right: 0,
  },
  handleChange: (item: string) => (values: number[]) => {
    console.log(item, values);
  },
};

export default React.memo(BorderControl);
