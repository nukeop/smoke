import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/createHashHistory';

import App from './App';
import SteamLoginForm from './components/SteamLoginForm';

import './app.global.css';

ReactDOM.render(
    <Router history={createHashHistory()}>
        <App>
            <Route path="/login-form" component={SteamLoginForm}/>
        </App>
    </Router>
        ,
    document.getElementById('react_container')
);

