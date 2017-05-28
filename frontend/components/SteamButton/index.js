import React from 'react';

import styles from './styles.css';

export default class SteamButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={styles.steam_button}
        onClick={this.props.onClick}
        type={this.props.type}
        >
        {this.props.children}
      </button>
    );
  }
}
