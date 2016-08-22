import {themr} from 'react-css-themr';
import theme from './theme.scss';

import Kmc427 from '../task__kmc-427/kmc427';

const applyTheme = (Component)=>themr(theme)(Component);

const ThemedKmc427 = applyTheme(Kmc427);

export {ThemedKmc427 as _Kmc427};
