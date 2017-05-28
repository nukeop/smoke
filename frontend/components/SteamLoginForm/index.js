import React from 'react';
import FontAwesome from 'react-fontawesome';

import socket from '../../common/socket';
import steamData from '../../common/steamData';

import styles from './styles.css';

let loader = <Loader type="ball-grid-beat" />;

export default class SteamLoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            waiting: false,
            auth_code_required: false
        };
    }


    componentDidMount() {
        socket.on('json', (msg) => {
            if (msg.action == "auth_code_required"){
                this.setState({auth_code_required: true});
            }

            this.setState({waiting: false});
        });
    }


    handleSignIn() {
        this.setState({waiting: true});
        socket.emit('json',
                    {
                        action: 'sign_in',
                        username: this.usernameInput.value,
                        password: this.passwordInput.value
                    }
        );
    }


    handleAuthCode() {
        this.setState({waiting: true});
        socket.emit('json',
                    {
                        action: 'auth_code',
                        auth_code: this.authcodeInput.value
                    }
        );
    }


    renderSignIn() {
        return (
            <div className={styles.steam_login_form}>

                <div className={styles.steam_login_input_container}>
                    <label>Steam account name</label>
                    <span className={styles.steam_login_icon}><FontAwesome name='user-o'/></span>
                    <input
                        ref={(input) => {this.usernameInput = input; }}
                        type="text"
                        name="username"
                    />
                </div>

                <div className={styles.steam_login_input_container}>
                    <label>Password</label>
                    <span className={styles.steam_login_icon}><FontAwesome name='lock'/></span>
                    <input
                        ref={(input) => {this.passwordInput = input; }}
                        type="password"
                        name="password"
                    />
                </div>

                <button onClick={this.handleSignIn.bind(this)}>Sign in</button>
            </div>
        );
    }


    renderAuthCode() {
        return (
            <div className={styles.steam_login_form}>
                <h3>Authentication code is required</h3>
                <h4>Please enter the Steam authentication code sent to you by email.</h4>
                <div className={styles.steam_login_input_container}>
                    <label>Authentication code</label>
                    <span className={styles.steam_login_icon}><FontAwesome name='lock'/></span>
                    <input
                        ref={(input) => {this.authcodeInput = input; }}
                        type="text"
                        name="auth_code"
                    />
                </div>

                <button onClick={this.handleAuthCode.bind(this)}>Confirm</button>
            </div>
        );
    }


    render() {
        return (
            <div className={styles.steam_login_view}>
                <div className={styles.steam_login_modal}>
                    <div className={styles.steam_login_image_container}>
                        <img src="https://steamcommunity-a.akamaihd.net/public/images/chat/steam_logo.png" />
                    </div>
                    {
                        this.state.auth_code_required
                        ? this.renderAuthCode()
                        : this.renderSignIn()
                    }
                </div>
            </div>
        );
    }
}
