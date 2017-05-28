import React from 'react';
import Navbar from './components/Navbar';
import NavbarItem from './components/Navbar/NavbarItem';
import SocketReceiver from './containers/SocketReceiver';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import { withRouter } from 'react-router-dom';

import styles from './styles.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <SocketReceiver />
                <Navbar>
                    <NavbarItem><Link to="/login">Log in</Link></NavbarItem>
                    <NavbarItem>Store</NavbarItem>
                    <NavbarItem>Library</NavbarItem>
                    <NavbarItem>Community</NavbarItem>
                    <NavbarItem>Profile</NavbarItem>
                    <NavbarItem><Link to="/chat">Chat</Link></NavbarItem>
                </Navbar>
                <div className={styles.app_container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
