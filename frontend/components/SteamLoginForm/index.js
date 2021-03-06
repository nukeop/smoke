import React from 'react';

import styles from './styles.css';

import SteamButton from '../SteamButton';
import SteamInputField from '../SteamInputField';

export default class SteamLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignIn(e) {
    e.preventDefault();
    this.props.handleSignIn(
      this.usernameInput.value,
      this.passwordInput.value
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img src="https://steamcommunity-a.akamaihd.net/public/images/chat/steam_logo.png" />
        </div>
        <span style={{marginBottom: "36px"}}></span>
        <form onSubmit={this.handleSignIn.bind(this)}>
          <SteamInputField
            icon="user-o"
            placeholder="Username"
            type="text"
            name="username"
            refFun={((input) => {this.usernameInput = input; }).bind(this)}
          />
          <SteamInputField
            icon="lock"
            placeholder="Password"
            type="password"
            name="password"
            refFun={((input) => {this.passwordInput = input; }).bind(this)}
          />
          <SteamButton
            type="submit"
          >Sign in</SteamButton>
        </form>
      </div>
    );
  }
}
