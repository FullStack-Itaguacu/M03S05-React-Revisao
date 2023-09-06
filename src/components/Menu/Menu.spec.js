import { render, screen } from "@testing-library/react";
import Menu from "./Menu"

describe("Menu", () => {

  test("renderiza o componente com o título 'Projeto Escolas do Amanhã'", () => {
    render(<Menu />)
    const title = screen.getByRole("heading", { name: /Projeto Escolas do Amanhã/i })

    expect(title).toBeInTheDocument()
  })
})
