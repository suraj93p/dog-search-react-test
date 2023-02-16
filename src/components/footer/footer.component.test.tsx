import { render, screen } from "@testing-library/react";
import FooterComponent from "./footer.component";

describe("<FooterComponent />", () => {
  it("should render Footer component", () => {
    render(<FooterComponent />);
    expect(screen.getByText(/All Rights Reserved/)).toBeInTheDocument();
  });
});
