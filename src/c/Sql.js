import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

export default class Sql {

  _sqlite: any;

  conectar() {
    console.log("Conexao aberta!");
    SQLite.openDatabase({
      name: "comentario",
      createFromLocation: "../banco/db.sqlite"
    }).then((conexao) => {
      this._sqlite = conexao
    }).catch((error) => {
      console.log("Nao foi possivel abrir a conexao.", error);
    });
  }

  desconectar() {
    if (this._sqlite) {
      this._sqlite.close()
        .then(() => {
          console.log("Conexao fechada!");
        }).catch(error => {
        console.log("Erro ao fechar a conexao: ", error);
      });
    }
  };

  listarComentario() {
    return false;
  };

};