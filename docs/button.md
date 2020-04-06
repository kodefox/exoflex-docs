---
id: button 
title: Button 
---

Button with three presets. Use within the `Provider` component to be able to change the button color as it depends on the theme.

## Usage

### Basic

```tsx live
function BasicButton() {
  return (
    <Provider>
      <Button
        preset="primary"
        onPress={() => {}}
        style={{ marginVertical: 10 }}
      >
        Primary button
      </Button>
      <Button
        preset="secondary"
        onPress={() => {}}
        style={{ marginVertical: 10 }}
      >
        Secondary button
      </Button>
      <Button
        preset="invisible"
        onPress={() => {}}
        style={{ marginVertical: 10 }}
      >
        Invisible button
      </Button>
    </Provider>
  );
}
```

### Disabled

```tsx live
function DisabledButton() {
  return (
    <Provider>
      <Button
        disabled
        preset="primary"
        onPress={() => {}}
        style={{ marginVertical: 10 }}
      >
        Primary button
      </Button>
      <Button
        disabled
        preset="secondary"
        onPress={() => {}}
        style={{ marginVertical: 10 }}
      >
        Secondary button
      </Button>
      <Button
        disabled
        preset="invisible"
        onPress={() => {}}
        style={{ marginVertical: 10 }}
      >
        Invisible button
      </Button>
    </Provider>
  );
}
```

### With Icon

```tsx live
function WithIconButton() {
  return (
    <Provider>
      <Button icon="home" onPress={() => {}} style={{ marginVertical: 10 }}>
        With Icon
      </Button>
    </Provider>
  );
}
```

## Props

### children (required)

Type: `React.ReactNode`  
Label text of the button

### preset

Type: `'primary'` | `'secondary'` | `'invisible'`  
Default: `'primary'`    
Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.  
- `primary` - button with a background color and elevation shadow (high emphasis)  
- `secondary` - button with an outline (medium emphasis)  
- `invisible` - flat button without background or outline (low emphasis)

### textPreset

Type: `string`  
Name of font preset that will be used on `Text` component inside the `Button`. This prop won't work with custom children.

### onPress

Type: `() => void`  
Function that will be invoked when the `Button` pressed.

### useRipple

Type: `boolean`  
Default: `false`  
Whether to use Material Ripple Effect or not. Only for Android and Web.

### disabled

Type: `boolean`  
Whether to disable the press functionality.

### loading

Type: `boolean`  
Whether to show a loading indicator.

### icon

Type: `string` | `number` | `ImageURISource` | `Array<ImageURISource>` | `({color: string, size: number}) => React.ReactNode`  
Icon to display for the `Button`.

### uppercase

Type: `boolean`  
Make the label text uppercased. Note that this won't work if you pass React elements as children.

### contentStyle

Type: `StyleProp<ViewStyle>`  
Style of button's inner content.


### style

Type: `StyleProp<ViewStyle>`  
Style of button's outer content.

### labelStyle

Type: `StyleProp<TextStyle>`  
Style for the button text. This is only work when the children is a string, not a custom component.

