import {themr} from 'react-css-themr';
import theme from './theme.scss';
import Kmc416 from './kmc416';
import {TAST_KMC_ID} from './constants';

import Kmc417 from '../task__kmc-417/kmc417';
import Kmc418 from '../task__kmc-418/kmc418';
import Kmc419 from '../task__kmc-419/kmc419';

const applyTheme = (Component)=>themr(TAST_KMC_ID, theme)(Component);

const ThemedKmc416 = applyTheme(Kmc416);
const ThemedKmc417 = applyTheme(Kmc417);
const ThemedKmc418 = applyTheme(Kmc418);
const ThemedKmc419 = applyTheme(Kmc419);

export {ThemedKmc416 as _Kmc416};
export {ThemedKmc417 as _Kmc417};
export {ThemedKmc418 as _Kmc418};
export {ThemedKmc419 as _Kmc419};
