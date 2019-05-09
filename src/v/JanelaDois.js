import React, {Component} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View, Text} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import Sql from '../c/Sql';

export default class JanelaDois extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      comentarios: [],
      semComentarios: 'Sem comentarios.\nClique em (+) para comentar!'
    };
  }

  componentDidMount(): void {
    const db = new Sql();

    db.conectar();
    let teste = db.listarComentario();
    console.log(teste);
    db.desconectar();

  }

  render() {
    /*    if(this.state.isLoading){
          return(
            <View>
              <ActivityIndicator size="large" color="#0000ff"/>
            </View>
          )
        }
        if(this.state.comentarios.length === 0){
          return(
            <View>
              <Text>{this.state.semComentarios}</Text>
            </View>
          )
        }*/
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.comentarios}
        renderItem={this.renderItem}
      />
    );
  }
}
