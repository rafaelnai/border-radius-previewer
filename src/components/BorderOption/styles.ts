import { createUseStyles } from 'react-jss';

export default createUseStyles({
  elliptical: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginLeft: 8,
      marginRight: 8,
      fontWeight: 500,
    },
  },
});
