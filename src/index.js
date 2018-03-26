import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
