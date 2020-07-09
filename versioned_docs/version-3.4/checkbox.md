---
id: checkbox
title: Checkbox
---

A checkbox with text. Checkboxes allow the user to select one or more items from a set.

## Usage

### Basic

```tsx live
function BasicCheckbox() {
  let [checkboxValue, setCheckboxValue] = useState(false);
  let [genre, setGenre] = useState({
    jazz: false,
    rock: false,
    pop: false,
  });

  return (
    <Provider>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox
          label="Jazz"
          checked={genre.jazz}
          onPress={() => setGenre({ ...genre, jazz: !genre.jazz })}
          style={{ marginRight: 20 }}
        />
        <Checkbox
          label="Rock"
          checked={genre.rock}
          onPress={() => setGenre({ ...genre, rock: !genre.rock })}
          style={{ marginRight: 20 }}
        />
        <Checkbox
          label="Pop"
          checked={genre.pop}
          onPress={() => setGenre({ ...genre, pop: !genre.pop })}
        />
      </View>
    </Provider>
  );
}
```

### Disabled

```tsx live
function DisabledCheckbox() {
  let [checkboxValue, setCheckboxValue] = useState(false);
  let [genre, setGenre] = useState({
    jazz: false,
    rock: false,
    pop: false,
  });

  return (
    <Provider>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox
          disabled
          label="Jazz"
          checked={genre.jazz}
          onPress={() => setGenre({ ...genre, jazz: !genre.jazz })}
          style={{ marginRight: 20 }}
        />
        <Checkbox
          disabled
          label="Rock"
          checked={genre.rock}
          onPress={() => setGenre({ ...genre, rock: !genre.rock })}
          style={{ marginRight: 20 }}
        />
        <Checkbox
          disabled
          label="Pop"
          checked={genre.pop}
          onPress={() => setGenre({ ...genre, pop: !genre.pop })}
        />
      </View>
    </Provider>
  );
}
```

## Props

### checked

Type: `boolean`  
Default: `false`  
Boolean whether the checkbox is checked or not.

### label

Type: `string`  
Default: `''`  
The text/string for the checkbox.

### onPress

Type: `(newValue: boolean) => void`  
Default: `() => {}`  
Callback function to be called when checkbox is pressed.

### color

Type: `string`  
Default: `Theme primary color`  
The color of the checkbox icon. Default to theme primary color.

### disabled

Type: `boolean`  
Default: `false`  
Boolean whether the checkbox is disabled or not. If disabled, no press event will be triggered.

### size

Type: `number`  
Default: `24`  
The size of the check icon.

### style

Type: `StyleProp<ViewStyle>`  
Additional style for the checkbox container.

### textStyle

Type: `StyleProp<TextStyle>`  
Additional style for the text.

### accessibility

Supports [accessibility props](https://reactnative.dev/docs/accessibility) from react native.
