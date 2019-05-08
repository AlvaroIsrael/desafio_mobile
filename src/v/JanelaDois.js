import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Keyboard
} from 'react-native';
import Comentario from '../m/Comentario';
import PopUp from '../c/PopUp';
import {registrarComentario} from '../c/Controlador';

export default class JanelaDois extends Component <Props> {

  state = {
    comentario: new Comentario(),
    disableButtonCreate: true,
    disableColor: '#87D9FF',
    enableColor: '#2A8AB7',
    currentButtonColor: '#87D9FF',
    event: this.props.event,
  };

  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    if (!this.state.comentario)
      return;

    if (''.includes(this.state.comentario.tag))
      this.setState({disableButtonCreate: true, currentButtonColor: this.state.disableColor});
    else this.setState({disableButtonCreate: false, currentButtonColor: this.state.enableColor});
  }

  alterarTag = (tagName: string) => {
    let comentario = this.state.comentario;
    if (!comentario)
      return;

    comentario.tag = tagName;
    if (''.includes(this.state.comentario.tag))
      this.setState({comentario, disableButtonCreate: true, currentButtonColor: this.state.disableColor});
    else this.setState({comentario, disableButtonCreate: false, currentButtonColor: this.state.enableColor});
  };

  registrarComentario = () => {
    if (!this.state.comentario)
      return;

    let retorno = registrarComentario(this.state.comentario);

    ToastAndroid.show(retorno.texto, ToastAndroid.SHORT);

    if (retorno.resultado) {

      this.setState({comentario: new Comentario()});

      Keyboard.dismiss();

      if (this.state.event)
        this.state.event.emit('onCreateComentario');
    }
  };

  render() {
    if (!this.state.comentario)
      return <Text style={styles.generalFontSize}>Comentario Invalido!</Text>;

    return (
      <View style={styles.container}>
        <Text style={[styles.generalFontSize, styles.text]}>Tag:</Text>
        <TextInput
          style={[styles.input, styles.generalFontSize]}
          placeholder='Comentario Nome...'
          value={this.state.comentario.tag}
          onChangeText={(text) => this.alterarTag(text)}
          onSubmitEditing={this.registrarComentario}
        />
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: this.state.currentButtonColor}]}
          onPress={this.registrarComentario}>
          <Text style={[styles.buttonText, styles.generalFontSize]}>Comentar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    width: '90%',
    height: '10%',
    marginTop: 10,
  },
  generalFontSize: {
    fontSize: 20,
  },
  input: {
    height: 50,
    width: '45%',
    borderBottomWidth: 1,
    borderBottomColor: '#2A8AB7',
    marginHorizontal: 5,
  },
  text: {
    width: '30%',
  },
  buttonContainer: {
    width: '25%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});