import React, {Component} from 'react';
import {
  Text,
  View,
  ToastAndroid,
  ActivityIndicator, StyleSheet,
  FlatList
} from 'react-native';
import {kGitHubSails} from '../m/Contantes';
import moment from 'moment-timezone/builds/moment-timezone-with-data';

export default class JanelaUm extends Component {

  state = {
    isLoading: true,
    releases: []
  };

  componentDidMount() {
    fetch(kGitHubSails)
      .then((response) => response.json())
      .then((repos) => {

        repos.sort(function (a, b) {
          let dateA = new Date(a.release);
          let dateB = new Date(b.release);
          return dateB - dateA;
        });

        let item = 0;
        let releases = [9].fill('');

        for (const repo of repos.slice(0, 10)) {
          releases[item] = moment(repo.created_at).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') + ' - ' + repo.tag_name;
          item++
        }

        this.setState({isLoading: false, releases: releases});
      })
      .catch((error) => {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
      });
  }

  render() {

    const releases = this.state.releases;

    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator style={styles.button}/>
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={releases}
            renderItem={({item}) => {
              return (
                <View>
                  <Text>{item}</Text>
                </View>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    paddingTop: 15,
    justifyContent: 'center',
    backgroundColor: '#2a8ab7',
    alignItems: 'center'
  }
});