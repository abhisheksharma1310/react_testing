import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

//describe.skip describe.next
describe("Greet", () => {
  //fit -> it.only || test.only , xit -> it.skip || test.skip
  it("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("nested", () => {
    test("Greet renders name", () => {
      render(<Greet name="Vivek" />);
      const textElement = screen.getByText("Hello Vivek");
      expect(textElement).toBeInTheDocument();
    });
  });
});

//test.next, test.next
test("Greet render passed value correctly", () => {
  render(<Greet name="Abhishek" />);
  const textElement = screen.getByText("Hello Abhishek");
  expect(textElement).toBeInTheDocument();
});
