import React from 'react';

import styles from './styles.css';

import SteamButton from '../SteamButton';
import SteamInputField from '../SteamInputField';

export default class SteamAuthCodeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignIn(e) {
    e.preventDefault();
    this.props.handleSignIn(
      this.props.username,
      this.props.password,
      this.authCodeInput.value
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img src="https://steamcommunity-a.akamaihd.net/public/images/chat/steam_logo.png" />
        </div>
        <span style={{marginBottom: "36px"}}></span>
        <h2>Authentication code required.</h2>
        <h3>Please check your email for the Steam Guard code and input it here.</h3>
        <span style={{marginBottom: "36px"}}></span>
        <form onSubmit={this.handleSignIn.bind(this)}>
          <SteamInputField
            icon="lock"
            placeholder="Authentication code"
            type="text"
            name="username"
            refFun={((input) => {this.authCodeInput = input; }).bind(this)}
          />
          <SteamButton
            type="submit"
            >Send authentication code</SteamButton>
          </form>
        </div>
    );
  }

}
