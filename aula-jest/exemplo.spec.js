describe("Exemplo", () => {
  it("deveria testar o funcionamento do jest", () => {
    const condicao = 1 + 1
    const resutado = 2

    expect(condicao).toBe(resutado);
  });

  describe("Soma", function () {
    it("deveria somar dois números", () => {
      expect(1 + 1).toBe(2);
    });

    it("deveria somar dois números em formato texto", () => {
      expect("1" + "1").toBe("11");
    });
   })

  describe("Subtração", () => { 
    it("deveria subtrair dois números", () => {
      expect(1 - 1).toBe(0);
    });
  })
});
