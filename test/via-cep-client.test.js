const ViaCepClient = require("../lib/via-cep-client");

const makeSut = () => {
  const sut = new ViaCepClient({
    cep: "any-cep",
  });

  return { sut };
};

describe("ViaCepClient", () => {
  const { sut } = makeSut();
  jest.spyOn(sut, sut.get.name);
  sut.get = jest.fn().mockImplementation(() => true);

  test("Should call get", async () => {
    await sut.get();

    expect(sut.get).toHaveBeenCalled();
    expect(sut.get).toHaveBeenCalledTimes(1);
  });
});
