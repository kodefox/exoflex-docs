---
id: textInput
title: TextInput
---

TextInput is used to allow user input using keyboard.

## Usage

### Basic

```tsx live
function Basic() {
  return (
    <Provider>
      <TextInput
        label="Name"
        placeholder="e.g. John Doe"
        containerStyle={{ marginVertical: 10 }}
      />
    </Provider>
  );
}
```

### Flat

```tsx live
function Flat() {
  return (
    <Provider>
      <TextInput
        mode="flat"
        label="Name"
        placeholder="e.g. John Doe"
        containerStyle={{ marginVertical: 10 }}
      />
    </Provider>
  );
}
```

### Without Label

```tsx live
function WithoutLabel() {
  return (
    <Provider>
      <TextInput placeholder="Name" containerStyle={{ marginVertical: 10 }} />
      <TextInput
        mode="flat"
        placeholder="Email"
        containerStyle={{ marginVertical: 10 }}
      />
    </Provider>
  );
}
```

### Disabled

```tsx live
function Disabled() {
  return (
    <Provider>
      <TextInput
        disabled
        label="Name"
        placeholder="e.g. John Doe"
        value="Jane Doe"
        containerStyle={{ marginVertical: 10 }}
      />
      <TextInput
        disabled
        mode="flat"
        label="Name"
        placeholder="e.g. John Doe"
        value="Jane Doe"
        containerStyle={{ marginVertical: 10 }}
      />
    </Provider>
  );
}
```

### Error

```tsx live
function Error() {
  return (
    <Provider>
      <TextInput
        label="Name"
        placeholder="e.g. John Doe"
        errorMessage="Please enter your name"
        containerStyle={{ marginVertical: 10 }}
      />
      <TextInput
        mode="flat"
        label="Name"
        placeholder="e.g. John Doe"
        errorMessage="Please enter your name"
        containerStyle={{ marginVertical: 10 }}
      />
    </Provider>
  );
}
```

### Without Error Icon

```tsx live
function WithoutErrorIcon() {
  return (
    <Provider>
      <TextInput
        showErrorIcon={false}
        label="Name"
        placeholder="e.g. John Doe"
        errorMessage="Please enter your name"
        containerStyle={{ marginVertical: 10 }}
      />
      <TextInput
        showErrorIcon={false}
        mode="flat"
        label="Name"
        placeholder="e.g. John Doe"
        errorMessage="Please enter your name"
        containerStyle={{ marginVertical: 10 }}
      />
    </Provider>
  );
}
```

## Props

> This component also inherit props [TextInputProps](https://facebook.github.io/react-native/docs/textinput.html#props).

### mode

Type: `'flat'` | `'outlined'`  
Default: `'outlined'`  
Determine how the text input is displayed.

### label

Type: `string`  
Label for the text input.

### errorMessage

Type: `string`  
When provided, will use the error styling for the text input and display the error message below the text input.

### disabled

Type: `boolean`  
Default: `false`  
When set to true, will disable all interaction with the text input.

### uppercase

Type: `boolean`  
Default: `false`  
Determine whether the text content is uppercase or not.

### showErrorIcon

Type: `boolean`  
Default: `true`  
Determine to use error icon or not.

### containerStyle

Type: `StyleProp<ViewStyle>`  
Additional style passed to the container.

### labelStyle

Type: `StyleProp<TextStyle>`  
Additional style passed to the label.

### errorStyle

Type: `StyleProp<TextStyle>`  
Additional style passed to the error message.
