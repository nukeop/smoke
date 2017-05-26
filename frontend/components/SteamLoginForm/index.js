import React from 'react';

import styles from './styles.css';

export default class SteamLoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.steam_login_view}>
                <div className={styles.steam_login_modal}>
                    <div className={styles.steam_login_image_container}>
                        <img src="https://steamcommunity-a.akamaihd.net/public/images/chat/steam_logo.png" />
                    </div>
                    <div className={styles.steam_login_form}>
                        <label>Steam account name</label>
                        <input type="text" />

                        <label>Password</label>
                        <input type="password" />

                        <button onClick={this.props.handleSignIn}>Sign in</button>
                    </div>
                </div>
            </div>
        );
    }
}
