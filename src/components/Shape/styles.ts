import { createUseStyles } from 'react-jss';
import { TProps } from './Shape';

export default createUseStyles({
  shape: ({ radius }: TProps) => ({
    borderRadius: radius,
    display: 'block',
    background: '#fff',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  }),
});
