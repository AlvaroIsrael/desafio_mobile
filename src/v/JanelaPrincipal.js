import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class JanelaPrincipal extends Component {

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={[styles.autorText]} >Álvaro Israel Nunes Leite</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigate('JanelaUm')}>
          <Text style={styles.buttonText}>Primeira Tela</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigate('JanelaDois')}>
          <Text style={styles.buttonText}>Segunda Tela</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7',
    alignItems: 'center'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  autorText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center'
  },
});

