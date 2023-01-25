import React from "react";
import { storiesOf } from "@storybook/react";
import useTriggeredSuggestion from "./useTriggeredSuggestion";

const DemoComponent = ({
  suggestions,
  triggerCharacter = "@",
}: {
  suggestions: string[];
  triggerCharacter?: string;
}) => {
  const [inputRef, divRef, showDiv, position] = useTriggeredSuggestion();
  return (
    <div>
      <input ref={inputRef} />
      {showDiv && (
        <div
          ref={divRef}
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {suggestions.map((suggestion: string) => (
            <div key={suggestion}>{suggestion}</div>
          ))}
        </div>
      )}
    </div>
  );
};

storiesOf("useTriggeredSuggestion", module)
  .add("default", () => (
    <DemoComponent
      suggestions={["suggestion1", "suggestion2", "suggestion3"]}
    />
  ))
  .add("with custom trigger character", () => (
    <DemoComponent
      suggestions={["suggestion1", "suggestion2", "suggestion3"]}
      triggerCharacter="#"
    />
  ));
