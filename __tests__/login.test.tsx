import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/app/login/page";

// mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Login", () => {
  it("renders login form", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("E-post");
    const passwordInput = screen.getByLabelText("Passord");
    const loginButton = screen.getByRole("button", {
      name: "Logg inn",
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("allows user to type in email and password", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("E-post");
    const passwordInput = screen.getByLabelText("Passord");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password");
  });
});
