import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Velkommen til Famely",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a login button", () => {
    render(<Home />);

    const button = screen.getByRole("button", {
      name: "Logg inn",
    });

    expect(button).toBeInTheDocument();
  });
});
