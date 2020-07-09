---
id: radioGroup
title: Radio.Group
---

Radio button group allows to control a group of radio buttons.

## Usage

```tsx live
function RadioGroupExample() {
  let [radioButtonValue, setRadioButtonValue] = useState('');

  let verticalStyles = { marginVertical: 5 };

  return (
    <Provider>
      <Text>Gender</Text>
      <RadioButton.Group
        value={radioButtonValue}
        onValueChange={(newValue) => setRadioButtonValue(newValue)}
      >
        <RadioButton value="male" label="Male" style={verticalStyles} />
        <RadioButton value="female" label="Female" style={verticalStyles} />
        <RadioButton value="both" label="Both" style={verticalStyles} />
        <RadioButton
          value="none"
          label="Prefer not to say"
          style={verticalStyles}
        />
      </RadioButton.Group>
    </Provider>
  );
}
```

## Props

### value

Type: `string`  
Default: `''`  
Value of the selected radio button.

### children

Type: `React.ReactNode`  
Any react node, preferable `RadioButton` component(s), If no `RadioButton` is found, children will still be rendered, but `onValueChange` prop will not receive anything.

### onValueChange

Type: `(newValue: string) => void`  
Callback function to be called when radio button is pressed.

### accessibility

Supports [accessibility props](https://reactnative.dev/docs/accessibility) from react native.
