---
id: text
title: Text
---

Text with preconfigured font family when used inside the `Provider`.

For using custom font families, please refer to [theming](theming.md) docs.

## Usage

### Basic

```tsx live
function Basic() {
  return (
    <Provider>
      <Text style={{ color: 'green' }}>Hello, I'm Rubik</Text>
      <Text style={{ color: 'green' }} weight='500'>
        My weight is 500.
      </Text>
      <Text style={{ color: 'green' }} weight='700' fontStyle='italic'>
        I'm bold and italic.
      </Text>
    </Provider>
  );
}
```

## Props

:::note
This component also inherit props [TextInputProps](https://reactnative.dev/docs/text.html#props).
:::

### children

Type: `string`  
String to display.

### preset

Type: `string`  
Default: `'default'`  
A preset of font to use when determining the font style.

### weight

Type: `'300'` | `'400'` | `'500'` | `'700'` | `'light'` | `'normal'` | `'medium'` | `'bold'`  
Default: `'400'`  
Set the font weight of the text.

### fontStyle

Type: `'normal'` | `'italic'`  
Default: `'normal'`  
Set the font style of the text.

:::important
To override the font family used for `fontStyle.italic`, specify a font preset called `italic` in `Provider.theme.fonts`.
:::
