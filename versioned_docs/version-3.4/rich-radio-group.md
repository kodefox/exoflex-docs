---
id: richRadioGroup
title: RichRadio.Group
---

Controlled Rich Radio Button group allows to control a group of rich radio items. Similar with radio button group but with a richer looks.

## Usage

### Basic

```tsx live
function Basic() {
  let [size, setSize] = useState('');
  let [color, setColor] = useState('');

  const DATA = [
    { label: 'S', value: 'small' },
    { label: 'M', value: 'medium' },
    { label: 'L', value: 'large' },
  ];

  const COLORS = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Purple', value: 'purple' },
    { label: 'Orange', value: 'orange' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Maroon', value: 'maroon' },
    { label: 'Grey', value: 'grey' },
    { label: 'Black', value: 'black' },
    { label: 'Brown', value: 'brown' },
  ];

  return (
    <Provider>
      <Title style={{ marginBottom: 10 }}>Sizes</Title>
      <RichRadio.Group
        data={DATA}
        keyExtractor={(item) => item.label}
        renderItem={({ item, index }) => (
          <RichRadio.Item
            firstItem={index === 0}
            label={item.label}
            selected={item.value === size}
            onPress={() => setSize(item.value)}
          />
        )}
        style={{ marginBottom: 30 }}
      />
      <Title style={{ marginBottom: 10 }}>Colors</Title>
      <RichRadio.Group
        data={COLORS}
        keyExtractor={(item) => item.label}
        renderItem={({ item, index }) => (
          <RichRadio.Item
            firstItem={index === 0}
            label={item.label}
            selected={item.value === color}
            onPress={() => setColor(item.value)}
          />
        )}
      />
    </Provider>
  );
}
```

### Custom

```tsx live
function Custom() {
  let [size, setSize] = useState('');

  const DATA = [
    { label: 'S', value: 'small' },
    { label: 'M', value: 'medium' },
    { label: 'L', value: 'large' },
  ];

  return (
    <Provider>
      <RichRadio.Group
        data={DATA}
        keyExtractor={(item) => item.label}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSize(item.value)}
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: item.value === size ? 'blue' : 'gray',
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginLeft: index === 0 ? 0 : 15,
            }}
          >
            <IconButton
              icon="home"
              size={14}
              style={{
                padding: 0,
                margin: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />

            <Text weight="bold" fontStyle="italic" style={{ marginLeft: 10 }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </Provider>
  );
}
```

## Props

### data (required)

Type: `Array<T>`  
Data that will be rendered as the items.

### keyExtractor (required)

Type: `(item: T, index: number) => string`  
Used to extract a unique key for a given item at the specified index.

### renderItem (required)

Type: `({ item, index }: { item: T; index: number }) => ReactNode`  
Takes an item from `data` and renders it into the list.

### style

Type: `StyleProp<ViewStyle>`  
Additional style for `ScrollView` under the hood.

### contentContainerStyle

Type: `StyleProp<ViewStyle>`  
Additional style for the `ScrollView` under the hood.

### accessibility

Supports [accessibility props](https://reactnative.dev/docs/accessibility) from react native.

### testID

Type: `string`  
Used to locate this component in end-to-end tests.
