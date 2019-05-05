import React, {Component} from 'react';
import {
  Text,
  View,
  ToastAndroid,
  ActivityIndicator
} from 'react-native';
import {kGitHubSails} from '../m/Contantes';

export default class JanelaUm extends Component {

  state = {
    isLoading: true,
    info: []
  };

  componentDidMount() {
    fetch(kGitHubSails)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({isLoading: false, info: responseJson.results[0]});
        console.log(responseJson)
      })
      .catch((error) => {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
      });
  }

  render() {
    const estado = [...this.state];

    if (estado.isLoading || !estado.info) {
      return (
        <View>
          <Text>{}</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>{estado.info.name.first}</Text>
        </View>
      );
    }
  }
}