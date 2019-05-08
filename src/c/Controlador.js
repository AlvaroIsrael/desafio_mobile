import Comentario from '../m/Comentario';
import PopUp from '../c/PopUp';
//import SQLite from 'react-native-sqlite-storage';

let SQLite = require('react-native-sqlite-storage');
let sqlite = SQLite.openDatabase({name: 'db', createFromLocation: '~banco/db.sqlite'});

export const registrarComentario = (comentario: Comentario) => {

  return new Promise((resolve, reject) => {
    let msg = new PopUp();

    if (!comentario) {
      msg.resultado = false;
      msg.texto = 'Comentario invalido!';
      resolve({resultado: msg.resultado, texto: msg.texto});
    }

    sqlite.transaction((stmt) => {
      stmt.executeSql('insert into comentario(tag, nome) values (?, ?);', [],
        (stmt, retorno) => {

          if (retorno.rowsAffected > 0) {
            msg.resultado = true;
            msg.texto = 'Comentario registrado com sucesso!!!';
          } else {
            msg.resultado = false;
            msg.texto = 'Erro ao registrar novo comentario!!!';
          }

          resolve({resultado: msg.resultado, texto: msg.texto});
        }, (e) => {
          msg.resultado = false;
          msg.texto = `${e.message}`;

          resolve({resultado: msg.resultado, texto: msg.texto});
        })
    })
  })
};