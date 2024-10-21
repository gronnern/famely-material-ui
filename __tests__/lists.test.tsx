import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Lists from "@/app/dashboard/lists/page";

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Lists", () => {
  it("renders lists heading", () => {
    render(<Lists />);

    const heading = screen.getByRole("heading", {
      name: "Lag en ny liste",
    });

    expect(heading).toBeInTheDocument();
  });

  it("allows user to add a new list", () => {
    render(<Lists />);

    const input = screen.getByLabelText("Liste tittel");
    const addButton = screen.getByRole("button", {
      name: "Legg til liste",
    });

    fireEvent.change(input, { target: { value: "Handleliste" } });
    fireEvent.click(addButton);

    const newList = screen.getByText("Handleliste");
    expect(newList).toBeInTheDocument();
  });

  it("allows user to add items to a list", () => {
    render(<Lists />);

    const input = screen.getByLabelText("Liste tittel");
    const addButton = screen.getByRole("button", {
      name: "Legg til liste",
    });

    fireEvent.change(input, { target: { value: "Handleliste" } });
    fireEvent.click(addButton);

    const addItemButton = screen.getByText("Legg til element");
    fireEvent.click(addItemButton);

    const itemInput = screen.getByLabelText("Element");
    const addItemDialogButton = screen.getByRole("button", {
      name: "Legg til",
    });

    fireEvent.change(itemInput, { target: { value: "Melk" } });
    fireEvent.click(addItemDialogButton);

    const newItem = screen.getByText("Melk");
    expect(newItem).toBeInTheDocument();
  });
});
