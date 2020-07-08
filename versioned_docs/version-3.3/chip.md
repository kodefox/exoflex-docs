---
id: chip
title: Chip
---

Chips can be used to display entities in small blocks.

## Usage

### Basic

```tsx live
function BasicChip() {
  return (
    <Provider>
      <Chip onPress={() => {}} style={{ alignSelf: 'flex-start' }}>
        Active
      </Chip>
    </Provider>
  );
}
```

### Inactive

```tsx live
function BasicChip() {
  return (
    <Provider>
      <Chip
        mode="inactive"
        onPress={() => {}}
        style={{ alignSelf: 'flex-start' }}
      >
        Inactive
      </Chip>
    </Provider>
  );
}
```

### With Icon

```tsx live
function BasicChip() {
  return (
    <Provider>
      <Chip icon="star" onPress={() => {}} style={{ alignSelf: 'flex-start' }}>
        Star
      </Chip>
    </Provider>
  );
}
```

## Props

> This component also inherit props from [TouchableOpacityProps](https://facebook.github.io/react-native/docs/touchableopacity#props).

### children

Type: `string`  
String to display inside the chip.

### mode

Type: `'active'` | `'inactive'`  
Default: `'active'`  
Determine how the chip is displayed.

### icon

Type: `IconSource`  
Icon to display. Accept the same `icon` as [IconButton](IconButton.md)

### iconStyle

Type: `StyleProp<ViewStyle>`  
Additional style passed to the icon.

### textStyle

Type: `StyleProp<TextStyle>`  
Additional style passed to the text inside the chip.
