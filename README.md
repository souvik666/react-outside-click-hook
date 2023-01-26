# useOutsideClick

A React hook for capturing outside click events. The `useOutsideClick` hook allows you to detect when a user clicks outside of a specific element on your website. It returns a reference to the element, which you can attach to a DOM node using the `ref` attribute, and a boolean indicating whether the user has clicked outside of the element.

## Installation

```bash
npm i @souvik666/react-outside-click-hook

```

## Usage

```tsx
import { useOutsideClick } from "@souvik666/react-outside-click-hook";

const MyComponent = () => {

  const [isClickedOutside, ref] = useOutsideClick<HTMLDivElement>({
    callback: () => console.log("clicked outside"),
  });

  return (
    <>
      <div ref={ref}>Click outside of me</div>
      {isClickedOutside && <div>clicked outside</div>}
    </>
  );
};
export default MyComponent;

```

## Parameters

| Parameter | Type     | Description                                                                                |
| --------- | -------- | ------------------------------------------------------------------------------------------ |
| callback  | function | A function that will be called when a user clicks outside of the element.                  |
| isOpen    | boolean  | (optional) A boolean variable that indicate whether the element should be open or closed.  |
| return    | ref      | A ref that should be attached to the DOM element that you want to detect clicks outside of |

Note that, the `isOpen` parameter is optional and you can use it to conditionally render the elements based on whether it's open or closed. If you don't pass this parameter, the hook will assume that the element is always open and will call the callback function whenever a click outside of the element occurs.

Also, the `return` is the `ref` variable that should be attached to the DOM element that you want to detect clicks outside of, you can use this variable to attach to the DOM element using `ref` attribute.

## Example

```tsx
import { useOutsideClick } from "@souvik666/react-outside-click-hook";

const MyComponent = () => {

  const [isClickedOutside, ref] = useOutsideClick<HTMLDivElement>({
    callback: () => console.log("clicked outside"),
  });

  return (
    <>
      <div ref={ref}>Click outside of me</div>
      {isClickedOutside && <div>clicked outside</div>}
    </>
  );
};

export default MyComponent;

```

## FAQ

`Q: How do I attach the returned ref to a DOM element?`

A: You can attach the ref to a DOM element using the `ref` attribute. For example, if your component has a div that you want to detect clicks outside of, you can do something like this:

```tsx
const ref = useOutsideClick<HTMLDivElement>(myCallback);
return <div ref={ref}>Content goes here</div>;
```

`Q: What is the second parameter for?`

A: The second parameter is an optional boolean that indicates whether the element is open or closed. If you pass `true`, the hook will call the callback function when a click outside of the element occurs. If you pass `false`, the hook will do nothing. If you don't pass this parameter, the hook will assume that the element is always open.

`Q: Can I use this hook with a class component? `

A: No, this hook can only be used in functional components.

## Please note that, you should use this hook in a functional component.
