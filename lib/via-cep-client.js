const http = require("http");

class ViaCepClient {
  constructor({ cep, type }) {
    this.url = "http://viacep.com.br/ws";
    this.cep = cep;
    this.type = type;
  }

  get() {
    const data = new Promise((resolve, reject) => {
      http.get(
        `${this.url}/${this.cep}/${this.type}`,
        this.#handler({ resolve, reject })
      );
    });

    return data;
  }

  #handler({ resolve, reject }) {
    return (response) => {
      response
        .on("data", (chunk) => {
          if (response.statusCode === 400) reject("Erro 400");
          else resolve(JSON.parse(chunk));
        })
        .on("error", (error) => reject(error));
    };
  }
}

module.exports = ViaCepClient;
