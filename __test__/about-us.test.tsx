import { render, screen } from "@testing-library/react";
import AboutUs from "@app/about-us/page";
import "@testing-library/jest-dom";

describe("About Us", () => {
  it("Should render about-us page", () => {
    const { container } = render(<AboutUs />);

    expect(screen.getByText(/nextjs/)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
