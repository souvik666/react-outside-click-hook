
# Triggered Suggestion

This package provides a custom React hook, `useTriggeredSuggestion`, that attaches a div element to an input field and allows you to create an auto-suggestion feature that is triggered by a specific character entered in the input field.

## Features
- Attaches a div element to an input field and positions it directly below the input
- Hides and shows the div element based on the input value
- Allows you to specify a trigger character to trigger the auto-suggestion feature
- Provides a search function to filter suggestions
- Includes an onSelect callback function to handle selection of a suggestion

## Installation
``` npm install triggered-suggestion ```


## Usage
```jsx
import useTriggeredSuggestion from 'triggered-suggestion';

const suggestions = ['suggestion1', 'suggestion2', 'suggestion3'];

const Example = () => {
  const [inputRef, divRef, showDiv, position, filteredSuggestions, setSearchTerm] = useTriggeredSuggestion(suggestions, '@');
  const [searchTerm, setSearchTermState] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (suggestion) => {
    setSearchTermState('');
    setSearchTerm('');
    console.log(`Selected: ${suggestion}`);
  };
  
  return (
    <div>
      <input ref={inputRef} value={searchTerm} onChange={handleSearch} />
      {showDiv && (
        <div ref={divRef} style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px` }}>
          {filteredSuggestions.map(suggestion => (
            <div key={suggestion} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

## Props
- `suggestions` (required): An array of suggestions to show
- `onSelect` (required): A callback function that is called when a suggestion is selected. It will be called with the selected suggestion as the argument
- `triggerCharacter` (optional): A string that specifies the trigger character to show suggestions. Default value is `@`
- `divStyles` (optional): An object that contains the styles for the suggestion div
- `inputStyles` (optional): An object that contains the styles for the input field


## Future Work
- Add ability to navigate through suggestions using arrow keys
- Add ability to customize the appearance of the suggestion list


## Acknowledgements
- Inspired by the auto-suggestion feature in Apple's Mail app
- Built with [React](https://reactjs.org/)


Made with ❤ by [souvik](souvik666)
