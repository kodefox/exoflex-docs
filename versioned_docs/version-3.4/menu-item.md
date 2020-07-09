---
id: menuItem
title: Menu.Item
---

A component to show a single list item inside a Menu.

## Usage

```tsx live
function MenuItemExample() {
  return (
    <Provider>
      <Menu.Item title="Cut" onPress={() => {}} />
      <Menu.Item title="Copy" onPress={() => {}} />
      <Menu.Item title="Paste" onPress={() => {}} />
    </Provider>
  );
}
```

## Props

### title (required)

Type: `React.ReactNode`  
Title text for the MenuItem.

### icon

Type: `IconSource`  
Icon to display for the MenuItem.

### disabled

Type: `boolean`  
Whether the 'item' is disabled. A disabled 'item' is greyed out and onPress is not called on touch.

### textPreset

Type: `string`  
Name of font preset that will be used on `Text` component inside the `Menu.Item`. This prop won't work with custom title.

### onPress

Type: `() => void`  
Function to execute on press.

### style

Type: `StyleProp<ViewStyle>`  
Style of the component.

### accessibility

Supports [accessibility props](https://reactnative.dev/docs/accessibility) from react native.
