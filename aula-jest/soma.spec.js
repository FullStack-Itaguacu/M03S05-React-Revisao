function soma(num1, num2) {
  return num1 + num2
}

describe("Soma", function () {
  it("quando somar 1 + 1, o resultado deveria ser 2", () => {
    const resultado = soma(1, 1)
    const resultadoEsperado = 2

    expect(resultado).toBe(resultadoEsperado)
  })
})
