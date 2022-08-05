import { render, screen } from "@testing-library/react";

import HeroSection from "../organism/HeroSection/HeroSection";

test("should render HeroSection component", () => {
  render(<HeroSection />);
  const NavBarElement = screen.getByTestId("heroSection-1");
  expect(NavBarElement).toBeInTheDocument();
  expect(NavBarElement).toHaveTextContent(
    "Work",
    " A selection of projects that pioneer tech and marketing to help brands stay ahead."
  );
});
