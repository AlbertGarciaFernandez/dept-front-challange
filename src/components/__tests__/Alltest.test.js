import { render, screen } from "@testing-library/react";

import HeroSection from "../organism/HeroSection/HeroSection";
import ButtonSend from "../atoms/ButtonSend/ButtonSend";
import QuestionForm from "../organism/QuestionForm/QuestionForm";

test("should render HeroSection component", () => {
  render(<HeroSection />);
  const HeroSectionElement = screen.getByTestId("heroSection-1");
  expect(HeroSectionElement).toBeInTheDocument();
  expect(HeroSectionElement).toHaveTextContent(
    "Work",
    " A selection of projects that pioneer tech and marketing to help brands stay ahead."
  );
});

test("should render Button component with submit ", () => {
  render(<ButtonSend />);
  const ButtonSendElement = screen.getByTestId("buttonSubmit-1");
  expect(ButtonSendElement).toHaveTextContent("Send");
});

test("should render Question Form component with placeholder name", () => {
  render(<QuestionForm />);
  const QuestionFormElement = screen.getByLabelText(/name/i);
  expect(QuestionFormElement).toBeInTheDocument();
});
