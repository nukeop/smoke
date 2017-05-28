import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

export default class SteamInputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.input_field_container}>
        {
          this.props.icon != undefined
          ? <div className={styles.icon_container}>
              <FontAwesome name={this.props.icon}/>
            </div>
          : null
        }
        <input
          className={styles.steam_input_field}
          ref={this.props.ref}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          ref={this.props.refFun}
        />
      </div>
    );
  }
}
