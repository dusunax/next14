import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "./nav";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navigation Component", () => {
  const mockedUsePathname = usePathname as jest.Mock<string>;

  beforeEach(() => {
    global.scrollTo = jest.fn();
    (global.scrollTo as jest.Mock).mockClear();
  });

  it("should render navigation links and indicate current path", () => {
    mockedUsePathname.mockReturnValue("/");

    const { getByText: getByTextHome } = render(<Navigation />);

    expect(getByTextHome("Home 👈")).toBeInTheDocument();
    expect(getByTextHome("About Us")).toBeInTheDocument();

    mockedUsePathname.mockReturnValue("/about-us");

    const { getByText: getByTextAbout } = render(<Navigation />);

    expect(getByTextAbout("Home")).toBeInTheDocument();
    expect(getByTextAbout("About Us 👈")).toBeInTheDocument();
  });

  it('should add "sticky" class to nav when scrolled down', () => {
    mockedUsePathname.mockReturnValue("/");
    const { container } = render(<Navigation />);

    fireEvent.scroll(window, { target: { scrollY: 101 } });

    expect(container.querySelector("nav")).toHaveClass("sticky");
  });

  it('should remove "sticky" class from nav when scrolled up', () => {
    mockedUsePathname.mockReturnValue("/");
    const { container } = render(<Navigation />);

    fireEvent.scroll(window, { target: { scrollY: 0 } });

    expect(container.querySelector("nav")).not.toHaveClass("sticky");
  });

  it('should render "Go Back" button', () => {
    mockedUsePathname.mockReturnValue("/");

    const { getByText } = render(<Navigation />);

    expect(getByText("←")).toBeInTheDocument();
  });
});
