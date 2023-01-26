import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import useOutsideClick from ".";

const MyComponent = () => {
  const callback = action("Outside Click");

  const [isClickedOutside, ref] = useOutsideClick<HTMLDivElement>({
    callback: () => callback,
  });

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      <div style={{ padding: "20px" }}>
        <h3>Click Outside</h3>
        <p>
          Click outside of this card to trigger the "Outside Click" action in
          the Storybook actions panel
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255,255,255,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={ref}
      >
        {isClickedOutside && (
          <div style={{ fontSize: "20px", color: "red" }}>Clicked outside</div>
        )}
      </div>
    </div>
  );
};

storiesOf("MyComponent", module).add("default", () => <MyComponent />);
