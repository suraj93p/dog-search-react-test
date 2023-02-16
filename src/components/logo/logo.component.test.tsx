import { render, screen } from "@testing-library/react";
import Logo from "./logo.component";

describe("<HeaderComponent />", () => {
  it("should render Header component", () => {
    const func = jest.fn();

    render(<Logo handleLogoClick={func} />);

    expect(screen.getAllByAltText(/Github Logo/)).toBeInTheDocument();
  });
});
