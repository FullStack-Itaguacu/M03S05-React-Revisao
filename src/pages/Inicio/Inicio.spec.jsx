import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Inicio from "./Inicio";

const usuario = userEvent.setup();

describe("Inicio", () => {
  it("renders com a logo do React", () => {
    render(<Inicio />);
    // GET - elemento está presente
    const logo = screen.getByAltText(/react logo/i);

    // QUERY - elemento não está presente
    const textoRuim = screen.queryByText(/react é ruim: 0/i);

    expect(logo).toBeInTheDocument();
    expect(textoRuim).not.toBeInTheDocument();
  });

  it("renderiza com um botão com o texto 'Contador: 0'", async () => {
    render(<Inicio />);
    const botao = screen.getByRole("button", { name: /contador: 0/i });
    expect(botao).toBeInTheDocument();

    // usuario.click(botao)

    // // FIND - elemento não está presente, mas vai estar
    // const novoBotao = await screen.findByRole("button", { name: /contador: 1/i });
    // expect(novoBotao).toBeInTheDocument();

    // Não precisamos usar o findBy, mas colocar o await no evento
    await usuario.click(botao);

    const novoBotao = screen.getByRole("button", { name: /contador: 1/i });
    expect(novoBotao).toBeInTheDocument();

    // fireEvent não é mais recomendado pelo testing-library: https://testing-library.com/docs/dom-testing-library/api-events
    // // clique no botão com fireEvent
    // fireEvent.click(botao)

    // const novoBotao = screen.getByRole("button", { name: /contador: 1/i });
    // expect(novoBotao).toBeInTheDocument();
  });
});
