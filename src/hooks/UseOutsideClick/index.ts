import { useEffect, useRef, useCallback, useState } from "react";

interface UseOutsideClickProps<T extends HTMLElement> {
  callback: () => void;
}

/**
 * useOutsideClick is a custom hook that provides a way to detect if a click event occurred outside of an element.
 *
 * @param {UseOutsideClickProps} props - an object that contains the callback function that will be called when a click outside of the element is detected
 *
 * @returns {[boolean, React.MutableRefObject<T | null>]} - a tuple that contains a boolean indicating whether a click outside the element has been detected and a ref object that can be used to reference the element that the hook is used in.
 *
 * @example
 *
 * const MyComponent = () => {
 *  const [isClickedOutside, ref] = useOutsideClick<HTMLDivElement>({
 *    callback: () => console.log('clicked outside'),
 *  });
 *
 *  return (
 *    <>
 *      <div ref={ref}>Click outside of me</div>
 *      {isClickedOutside && <div>clicked outside</div>}
 *    </>
 *  );
 * };
 */

export default function useOutsideClick<T extends HTMLElement>({
  callback,
}: UseOutsideClickProps<T>): [boolean, React.MutableRefObject<T | null>] {
  const ref = useRef<T | null>(null);
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  return [isClickedOutside, ref];
}
