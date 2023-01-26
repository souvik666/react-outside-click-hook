import React, { useMemo } from "react";
import useTriggeredSuggestion from "../../hooks/useTriggeredSuggestion";

interface Props {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  triggerCharacter?: string;
  divStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
}

const AutoSuggestionInput: React.FC<Props> = ({
  suggestions,
  onSelect,
  triggerCharacter = "@",
  divStyles,
  inputStyles,
}) => {
  const [inputRef, divRef, showDiv, position] = useTriggeredSuggestion();
  const styles: React.CSSProperties = {
    position: "fixed",
    top: position.y,
    left: position.x,
    padding: "10px",
    background: "white",
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    width: "150px",
    ...divStyles,
  };

  return (
    <div>
      <input ref={inputRef} id="my-input" style={inputStyles} />
      {showDiv && (
        <div ref={divRef} style={styles}>
          {suggestions.map((suggestion, index) => (
            <div key={index} onClick={() => onSelect(suggestion)}>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSuggestionInput;
