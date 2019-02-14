import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers'
import App from './component/App';

// add bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
)