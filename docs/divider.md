---
id: divider
title: Divider
---

## Usage

### Basic

```tsx live
function Basic() {
  let textStyles = {
    marginVertical: 10,
  };

  return (
    <Provider>
      <View>
        <Text style={textStyles}>Item 1</Text>
        <Divider />
        <Text style={textStyles}>Item 2</Text>
        <Divider inset={20} style={{ backgroundColor: 'tomato', height: 2 }} />
        <Text style={textStyles}>Item 3</Text>
      </View>
    </Provider>
  );
}
```

### Vertical

```tsx live
function Basic() {
  let wrapperStyle = {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  };
  let textStyles = {
    marginVertical: 10,
  };

  return (
    <Provider>
      <View style={wrapperStyle}>
        <Text style={textStyles}>Item 1</Text>
        <Divider mode="vertical" />
        <Text style={textStyles}>Item 2</Text>
        <Divider
          mode="vertical"
          style={{ backgroundColor: 'tomato', width: 2 }}
        />
        <Text style={textStyles}>Item 3</Text>
      </View>
    </Provider>
  );
}
```

## Props

### mode

Type: `'horizontal'` | `'vertical'`  
Default: `'horizontal'`  
Whether the divider direction is horizontal or vertical.

### inset

Type: `number`  
Left inset for the horizontal divider.

### style

Type: `StyleProp<ViewStyle>`  
Additional style passed to the divider. To change the color of the divider, you can pass backgroundColor property.
