import React from 'react';
import Navbar from './components/Navbar';
import NavbarItem from './components/Navbar/NavbarItem';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

import styles from './styles.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <NavbarItem><Link to="/login-form"> Log in </Link></NavbarItem>
                    <NavbarItem>Store</NavbarItem>
                    <NavbarItem>Library</NavbarItem>
                    <NavbarItem>Community</NavbarItem>
                    <NavbarItem>Profile</NavbarItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
