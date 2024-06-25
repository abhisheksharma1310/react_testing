import { render, screen } from "@testing-library/react";
import { Users } from "./users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textELement = screen.getByText("Users");
    expect(textELement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(10);
  });
});
