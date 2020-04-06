---
id: iconButton 
title: IconButton 
---

An icon button is a button which displays only an icon without a label. By default button has 150% size of the icon.

## Usage 

```tsx live
function IconButtonExample() {
  return (
    <Provider>
      <IconButton icon="camera" />
      <IconButton icon="settings" onPress={() => {}} />
    </Provider>
  );
}
```

## Props

### icon (required)

Type: `IconSource`  
Icon to display. Can only use `MaterialCommunityIcons` icons from the list. [See icon list](https://oblador.github.io/react-native-vector-icons/)

### color

Type: `string`  
Color of the icon.

### size

Type: `number`  
Default: `24`  
Size of the icon.

### disabled

Type: `boolean`  
Whether the button is disabled. A disabled button is greyed out and onPress is not called on touch.

### animated

Type: `boolean`  
Default: `false`  
Whether an icon change is animated.

### accessibilityLabel

Type: `string`  
Accessibility label for the button. This is read by the screen reader when the user taps the button.

### onPress

Type: `(e: GestureResponderEvent) => void`  
Function to execute on press.

### style

Type: `StyleProp<ViewStyle>`  
Style for the icon.

