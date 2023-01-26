
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import useOutsideClick from ".";
 
describe("useOutsideClick hook", () => {
  it("should call the callback function when clicking outside the ref element", () => {
    const callback = jest.fn();
    const TestComponent = () => {
      const [isClickedOutside, ref] = useOutsideClick<HTMLDivElement>({ callback });
      return <div ref={ref} />;
    };
    const { container } = render(<TestComponent />);
    const div = container.firstChild;
    fireEvent.mouseDown(document.body, { target: div });
    expect(callback).toHaveBeenCalled();
  });
});
