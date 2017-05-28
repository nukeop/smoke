import React from 'react';
import Navbar from './components/Navbar';
import NavbarItem from './components/Navbar/NavbarItem';
import SteamDataManager from './components/SteamDataManager';

import {Link} from 'react-router-dom';

import styles from './styles.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }


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
                <SteamDataManager />
            </div>
        );
    }
}
