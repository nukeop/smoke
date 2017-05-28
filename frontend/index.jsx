import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './App';
import SteamLoginFormContainer from './containers/SteamLoginFormContainer';

import './app.global.css';


const store = configureStore();

ReactDOM.render(

    <Provider store={store}>
        <Router history={createHashHistory()}>
            <App>
                <Route path="/login-form" component={SteamLoginFormContainer}/>
            </App>
        </Router>
    </Provider>
    ,
    document.getElementById('react_container')
);
