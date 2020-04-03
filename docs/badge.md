---
id: badge 
title: Badge 
---

## Usage 

### Basic

```tsx live
function BadgeBasic() {
  return (
    <Provider>
      <Badge>2</Badge>
      <Badge style={{ backgroundColor: 'cyan' }}>999+</Badge>
    </Provider>
  );
}
```

### Custom

```tsx live
function BadgeCustom() {
  let [visible, setVisibility] = useState(true);
  let Spacing = () => <View style={{ height: 10 }} />;

  return (
    <Provider>
      <Badge visible={visible}>2</Badge>
      <Spacing />
      <Badge
        visible={visible}
        style={{ backgroundColor: 'blue', color: 'tomato' }}
        size={30}
      >
        10
      </Badge>
      <Spacing />
      <Badge visible={visible} style={{ backgroundColor: 'cyan' }}>
        999+
      </Badge>
      <Spacing />
      <Button onPress={() => setVisibility(!visible)}>
        Toggle Visibility
      </Button>
    </Provider>
  );
}
```

## Props

### children

Type: `string | number`  
Content of the `Badge`.

### visible

Type: `boolean`  
Default: `true`  
Whether the badge is visible.

### size

Type: `number`  
Default: `20`  
Size of the badge.

### textPreset

Type: `string`  
Name of font preset that will be used on `Text` component inside the `Badge`.

### style

Type: `StyleProp<TextStyle>`  
Additional style passed to the text inside the Badge.

