import { render, screen } from "@testing-library/react";
import HeaderComponent from "./header.component";

describe("<HeaderComponent />", () => {
  it("should render Header component", () => {
    render(<HeaderComponent />);
    expect(screen.getAllByAltText(/Github Logo/)).toBeInTheDocument();
  });
});
