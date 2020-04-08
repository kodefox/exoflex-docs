---
id: segmentedControl
title: SegmentedControl
---

## Usage

### Basic

```tsx live
function Basic() {
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Provider>
      <SegmentedControl
        activeIndex={selectedIndex}
        values={['Small', 'Medium', 'Large', 'Extra Large']}
        onIndexChange={(selectedIndex) => setSelectedIndex(selectedIndex)}
      />
    </Provider>
  );
}
```

### Border

```tsx live
function Border() {
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Provider>
      <SegmentedControl
        mode="border"
        activeIndex={selectedIndex}
        values={['Small', 'Medium', 'Large', 'Extra Large']}
        onIndexChange={(selectedIndex) => setSelectedIndex(selectedIndex)}
      />
    </Provider>
  );
}
```

### iOS 13

```tsx live
function iOS() {
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Provider>
      <SegmentedControl
        mode="ios-13"
        activeIndex={selectedIndex}
        values={['Small', 'Medium', 'Large', 'Extra Large']}
        onIndexChange={(selectedIndex) => setSelectedIndex(selectedIndex)}
      />
    </Provider>
  );
}
```

## Props

### mode

Type: `'default'` | `'border'` | `'ios-13'`  
Default: `'default'`  
Variant of the segmented control.

### values

Type: `Array<string>`  
List of segment value/label.

### disabled

Type: `boolean`  
Default: `false`  
Whether the segmented control is disabled.

### activeIndex

Type: `number`  
Active index of the segmented control.

### dividerWidth

Type: `number`  
Default: `1`  
The width of the divider.

### dividerColor

Type: `string`
The color of the divider.

### onIndexChange

Type: `(newActiveIndex: number) => void`  
Callback executed on active index change.

### activeTextStyle

Type: `StyleProp<TextStyle>`  
Style for the active segment text.

### indicatorStyle

Type: `StyleProp<ViewStyle>`  
Style for the indicator.

### segmentStyle

Type: `StyleProp<ViewStyle>`  
Style for the inner segmented control content.

### textStyle

Type: `StyleProp<TextStyle>`  
Style for the segment text.

### style

Type: `StyleProp<ViewStyle>`  
Style for the outer segmented control.
