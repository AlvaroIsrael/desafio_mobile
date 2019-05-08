export default class Comentario {
  id: number;
  tag: string;
  nome: string;

  constructor(id = 1, tag = '', nome = '') {
    this.id = id;
    this.tag = tag;
    this.nome = nome;
  }

  getRealmObject() {
    return {
      id: this.id,
      tag: this.tag,
      nome: this.nome
    };
  }

  updateObjectInfo(comentario: any) {
    if (!comentario)
      return;

    comentario['tag'] = this.tag;
    comentario['nome'] = this.nome;
  }

  clone() {
    return new Comentario(this.id, this.tag, this.nome);
  }
}

const ComentarioSchema = {
  name: 'Comentario',
  properties: {
    id: 'int',
    tag: 'string',
    nome: 'string'
  }
};

Comentario.schema = ComentarioSchema;