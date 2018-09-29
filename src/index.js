import React from 'react';
import ReactDOM from 'react-dom';

import {init} from 'contentful-ui-extensions-sdk';

import './index.css';
import App from './App';

init((extension) => {
	ReactDOM.render(<App extension={extension} />, document.getElementById('root'));
});
