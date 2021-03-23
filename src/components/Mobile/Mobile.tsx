import React, { Component } from 'react';
import { AppState } from 'react-native';





class Mobile extends Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState: string) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      //console.log('App has come to the foreground!');
      
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    return <></>;
  }
}

export default Mobile;