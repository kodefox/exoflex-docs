---
id: radio
title: Radio
---

A radio button with text. Radio buttons allow the selection a single option from a set.

## Usage

```tsx live
function RadioExample() {
  let [radioButtonValue, setRadioButtonValue] = useState('');
  let [radioButtonValue2, setRadioButtonValue2] = useState('');

  return (
    <Provider>
      <RadioButton
        checked={radioButtonValue === 'first'}
        value="first"
        label="First Radio"
        onPress={(_isChecked, newValue) => {
          setRadioButtonValue(newValue);
        }}
        style={{ marginBottom: 15 }}
      />
      <RadioButton
        checked={radioButtonValue2 === 'second'}
        value="second"
        label="Second Radio"
        onPress={(_isChecked, newValue) => {
          setRadioButtonValue2(newValue);
        }}
      />
    </Provider>
  );
}
```

## Props

### checked

Type: `boolean`  
Default: `false`  
Boolean whether the radio button is checked or not.

### disabled

Type: `boolean`  
Default: `false`  
Boolean whether the checkbox is disabled or not. If disabled, no press event will be triggered.

### label

Type: `string`  
Default: `''`  
The text/string for the radio button.

### value

Type: `string`  
Default: `''`  
The value of the radio button.

### color

Type: `string`  
Default: `Theme primary color`  
The color of the radio button icon. Default to theme primary color.

### size

Type: `number`  
Default: `24`  
The size of the radio button icon.

### onPress

Type: `() => void`  
Default: `() => {}`  
Callback function to be called when radio button is pressed.

### style

Type: `StyleProp<ViewStyle>`  
Additional style for the radio button container.

### textStyle

Type: `StyleProp<TextStyle>`  
Additional style for the text.
