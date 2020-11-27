import React from 'react';
import Switch from 'react-switch';
import useStyles from './styles';

type TProps = {
  handleChange: () => void;
  active: boolean;
};

const BorderOption: React.FC<TProps> = ({ handleChange, active }) => {
  const classes = useStyles();

  return (
    <label className={classes.elliptical}>
      <span>Simple</span>
      <Switch
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#3867d6"
        offColor="#778ca3"
        onChange={handleChange}
        checked={active}
      />
      <span>Complex</span>
    </label>
  );
};

export default BorderOption;
