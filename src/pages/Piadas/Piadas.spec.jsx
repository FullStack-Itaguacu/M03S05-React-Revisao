import { render, screen } from "@testing-library/react";
import Piadas from "./Piadas";

const piadaFake = { value: "Eu sou uma piada" }

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(piadaFake)
  })
})

describe("Piadas", () => {
  test("renders Piadas component", async () => {
    render(<Piadas />);
    const piada = await screen.findByText("Eu sou uma piada");
    expect(piada).toBeInTheDocument();
  });
})
