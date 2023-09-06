/*
Exemplo:
Criar uma função que receba uma string e devolva um objeto com as informações:
1 ) quantos caracteres a string possui
2) qual seu primeiro caracter
3) qual seu último caracter
*/

const obtemInformacoesDoTexto = (texto) => {
  const quantidadeDeCaracteres = texto.length
  const primeiroCaracter = texto[0]
  const ultimoCaracter = texto[quantidadeDeCaracteres - 1]

  const resultado = {
    quantidadeDeCaracteres,
    primeiroCaracter,
    ultimoCaracter
  }

  return resultado
}

describe("Informações de texto", () => {

  test("se o texto for Maria a quantidade de caracteres deve ser 5", () => {
    const resultado = obtemInformacoesDoTexto("Maria")
    const resultadoEsperado = 5

    expect(resultado.quantidadeDeCaracteres).toBe(resultadoEsperado)
  })

  test("se o texto for Maria o primeiro caracter vai ser M", () => {
    const resultado = obtemInformacoesDoTexto("Maria")
    const resultadoEsperado = "M"

    expect(resultado.primeiroCaracter).toBe(resultadoEsperado)
  })

  test("se o texto for Maria o último caracter vai ser a", () => {
    const resultado = obtemInformacoesDoTexto("Maria")
    const resultadoEsperado = "a"

    expect(resultado.ultimoCaracter).toBe(resultadoEsperado)
  })
})
