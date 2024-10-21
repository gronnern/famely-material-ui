import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "@/app/dashboard/page";

// mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Dashboard", () => {
  it("renders dashboard heading", () => {
    render(<Dashboard />);

    const heading = screen.getByRole("heading", {
      name: "Familien Olsen",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders cards", () => {
    render(<Dashboard />);

    const createListCard = screen.getByText("Lag liste");
    const calendarCard = screen.getByText("Kalender");
    const messagesCard = screen.getByText("Ukemeny");

    expect(createListCard).toBeInTheDocument();
    expect(calendarCard).toBeInTheDocument();
    expect(messagesCard).toBeInTheDocument();
  });
});
