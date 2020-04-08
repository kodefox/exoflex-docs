---
id: toastControlled
title: Controlled
---

Toast is an alert like component that shows from the bottom of the screen

## Usage

### Controlled Toast

```tsx live
function TimePickerExample() {
  let [visible, setVisible] = useState(false);

  return (
    <Provider>
      <Button onPress={() => setVisible((value) => !value)} preset="secondary">
        TOGGLE CONTROLLED TOAST
      </Button>
      <Toast visible={visible} mode="success">
        CONTROLLED TOAST EXAMPLE
      </Toast>
    </Provider>
  );
}
```

## Props

### children

Type: `string`  
Text to display in the toast.

### mode

Type: `'info'` | `'warning'` | `'error'` | `'success'`  
Default: `'info'`  
Determine the color and icon display.

### colors

Type: `Record<mode, string>`  
Default: `{info: Themes.colors.accent, warning: '#ffce00', error: '#dc544b', success: '#27a163'}`  
Configure the color to use for each mode.

### visible (required)

Type: `boolean`  
will only display the toast when set to true.

### showIcon

Type: `boolean`  
Default: `true`  
Set to false to hide the icon.

### style

Type: `StyleProp<ViewStyle>`  
Additional props passed to the toast container.

### textStyle

Type: `StyleProp<TextStyle>`  
Additional props passed to text.
