---
id: richRadioItem 
title: RichRadio.Item 
---

A controlled rich radio button with text. Similar with radio button but with a richer looks.

## Usage

```tsx live
function RichRadioItemExample() {
  const DATA = [
    { label: 'S', value: 'small' },
    { label: 'M', value: 'medium' },
    { label: 'L', value: 'large' },
  ];

  return (
    <Provider>
      {
        DATA.map((item) => (
          <RichRadio.Item
            label={item.label}
            selected={item.value === 'small'}
          />
        ))
      }
    </Provider>
  );
}
```

## Props

### label (required)

Type: `string`  
The text/string for the item.

### selectedColor

Type: `string`  
Custom color for the selected item.

### selected

Type: `boolean`  
Whether to mark the item as selected or not. 

### uppercase

Type: `boolean`  
Transform every text/string into an uppercase.

### firstItem

Type: `boolean`  
If `true`, mark the item as the first item and the item won't have `marginLeft` anymore.

### onPress

Type; `() => void`  
Callback that will be triggered when the item is pressed.

### style

Type: `StyleProp<ViewStyle>`  
Additional style for the item container.

### textStyle

Type: `StyleProp<TextStyle>`  
Additional style for the text.

### firstItemCustomStyle

Type: `StyleProp<ViewStyle>`  
Custom style for the first item. This will only work when `firstItem` is set to `true`.

### testID

Type: `string`  
Used to locate this item in end-to-end tests.

