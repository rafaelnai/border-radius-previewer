import React, { forwardRef } from "react";
import useStyles from "./styles";
import { ReactComponent as CopyIcon } from "./copy.svg";

export interface Props {
  value: string;
  handleCopy: React.ReactEventHandler;
}

const Output = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const classes = useStyles(props);

  return (
    <div className={classes.wrapper}>
      <input
        ref={ref}
        className={classes.output}
        value={props.value}
        name="output"
        readOnly
      />
      <button onClick={props.handleCopy} className={classes.button}>
        <CopyIcon height={25} width={25} />
      </button>
    </div>
  );
});

Output.defaultProps = {
  value: "",
  handleCopy: () => {},
};

export default Output;
