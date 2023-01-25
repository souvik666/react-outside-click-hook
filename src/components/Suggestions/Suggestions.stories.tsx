
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
 
import React from "react";
import AutoSuggestionInput from ".";

storiesOf("AutoSuggestionInput", module)
  .add("with default suggestions", () => (
    <AutoSuggestionInput
      suggestions={["apple", "banana", "orange"]}
      onSelect={action("onSelect")}
    />
  ))
  .add("with custom suggestions", () => (
    <AutoSuggestionInput
      suggestions={["custom1", "custom2", "custom3"]}
      onSelect={action("onSelect")}
    />
  ))
  .add("with no suggestions", () => (
    <AutoSuggestionInput suggestions={[]} onSelect={action("onSelect")} />
  ));
