import "./styles/watch-styles.scss"
import * as React from 'react';
import {render} from 'react-dom';

import {Watch} from './watch';

render(<Watch />, document.querySelector('#watch-app'));
