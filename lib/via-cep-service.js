const ViaCepClient = require("./via-cep-client");
const ViaCepModel = require("./via-cep-model");

class ViaCepService {
  /*
   * @param {cep} string
   * @param {type} string; validos: json | xml | piped | querty
   * @return {ViaCep}
   */
  static async getAddress(cep, type = "json") {
    try {
      const viaCepClient = new ViaCepClient({ cep, type });
      const address = await viaCepClient.get();

      return new ViaCepModel(address);
    } catch (error) {
      return { data: error };
    }
  }
}

module.exports = ViaCepService;
