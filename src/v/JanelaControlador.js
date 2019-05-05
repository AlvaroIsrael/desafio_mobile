import React from 'react';

import {createStackNavigator, createAppContainer} from "react-navigation";
import JanelaPrincipal from './JanelaPrincipal';
import JanelaUm from './JanelaUm';
import JanelaDois from './JanelaDois';

const AppNavigator = createStackNavigator({
  JanelaPrincipal: {
    screen: JanelaPrincipal,
    navigationOptions: () => ({
      title: 'Janela Principal'
    })
  },
  JanelaUm: {
    screen: JanelaUm,
    navigationOptions: () => ({
      title: 'Janela Um'
    })
  },
  JanelaDois: {
    screen: JanelaDois,
    navigationOptions: () => ({
      title: 'Janela Dois'
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;