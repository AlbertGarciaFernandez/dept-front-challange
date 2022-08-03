import { render, screen } from "@testing-library/react";

import NavBar from "../organism/NavBar/Navbar";

test("should render NavBar component", () => {
  render(<NavBar />);
  const NavBarElement = screen.getByTestId("navBar-1");
  expect(NavBarElement).toBeInTheDocument();
  expect(NavBarElement).toHaveTextContent(
    "Work",
    "Culture",
    "Services",
    "Insights",
    "Careers",
    "Contact"
  );
});
