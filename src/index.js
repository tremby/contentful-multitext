import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

window.contentfulExtension.init((extension) => {
	ReactDOM.render(<App extension={extension} />, document.getElementById('root'));
});
