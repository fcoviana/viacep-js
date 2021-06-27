class ViaCepModel {
  constructor(data) {
    this.cep = data.cep;
    this.logradouro = data.ogradouro;
    this.complemento = data.complemento;
    this.bairro = data.bairro;
    this.localidade = data.localidade;
    this.uf = data.uf;
    this.ibge = data.ibge;
    this.gia = data.gia;
    this.ddd = data.ddd;
    this.siafi = data.siafi;
  }
}

module.exports = ViaCepModel;