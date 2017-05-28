import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

class SocketReceiver extends React.Component {
  componentDidMount() {
    this.props.socket.on('json', (msg) => {
      this.props.actions.receiveSocketMessage(msg);

      if (msg.action == Actions.AUTH_CODE_REQUIRED) {
        this.props.actions.setAuthCodeRequired(true);
      }
    });
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
    return {
        socket: state.steam.socket,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketReceiver);
