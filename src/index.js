import React from 'react';          // react(x) -> React(o)
import { render } from 'react-dom';

import { App } from './containers';

render(
  <div>
    <App/>
  </div>,
  document.getElementById('root')
);