import { useRef, useState, useEffect, useMemo } from "react";

/**
 * A custom hook that attaches a div element to an input field.
 * The div will be positioned directly below the input and will be hidden or shown depending on the input value
 *
 * @returns {[React.RefObject<HTMLInputElement>, React.RefObject<HTMLDivElement>, boolean, {x: number, y: number}]} - An array containing the ref objects for the input and div elements, boolean value to show/hide the div and an object to store the position of the div
 */

export default function useTriggeredSuggestion(): [
  React.RefObject<HTMLInputElement>,
  React.RefObject<HTMLDivElement>,
  boolean,
  { x: number; y: number }
] {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [showDiv, setShowDiv] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const input = inputRef.current;
    const div = divRef.current;

    /**
     * A function that updates the position of the div based on the input element
     */
    const updateDivPosition = () => {
      if (input) {
        const inputRect = input.getBoundingClientRect();
        setPosition({ x: inputRect.left, y: inputRect.bottom });
      }
    };

    /**
     * A function that handles the input event and updates the state of the div
     * @param {InputEvent} e - The input event
     */
    const handleInput = (e: Event) => {
      const inputEvent = e as InputEvent;
      if ((e.target as HTMLInputElement).value.endsWith("@")) {
        setShowDiv(true);
        updateDivPosition();
      } else {
        setShowDiv(false);
      }
    };

    input?.addEventListener("input", handleInput);

    window?.addEventListener("resize", updateDivPosition);

    return () => {
      input?.removeEventListener("input", handleInput);
      window.removeEventListener("resize", updateDivPosition);
    };
  }, []);

  return [inputRef, divRef, showDiv, position];
}
