import Comentario from '../m/Comentario';
import PopUp from '../c/PopUp';
import SQLite from 'react-native-sqlite-storage';

export const registrarComentario = (comentario: Comentario) => {

  SQLite.DEBUG(true);
  SQLite.enablePromise(true);

  let sqlite = SQLite.openDatabase({
    name: "db",
    createFromLocation: "../banco/db.sqlite"
  }).then((stmt) => {
    console.log("Database open!");

    let msg = new PopUp();

    if (!comentario) {
      msg.resultado = false;
      msg.texto = 'Comentario invalido!';
      return msg;
    }

    stmt.executeSql('insert into comentario(tag, nome) values (\'teste\', \'teste\');', [],
      (comando, retorno) => {

        if (retorno.rowsAffected > 0) {
          msg.resultado = true;
          msg.texto = 'Comentario registrado com sucesso!!!';
        } else {
          msg.resultado = false;
          msg.texto = 'Erro ao registrar novo comentario!!!';
        }
        return msg
      }, (e) => {
        msg.resultado = false;
        msg.texto = `${e.toString()}`;
        return msg
      })
  })
};