import {themr} from 'react-css-themr';
import theme from './theme.scss';
import Kmc416 from './kmc416';
import {TAST_KMC_ID} from './constants';

const applyTheme = (Component)=>themr(TAST_KMC_ID, theme)(Component);

const ThemedKmc416 = applyTheme(Kmc416);

export {ThemedKmc416 as _Kmc416};
