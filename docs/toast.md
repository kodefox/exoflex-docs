---
id: toast
title: Toast
---

Toast is an alert like component that shows from the bottom of the screen

## Preview

```tsx live
function TimePickerExample() {
  let [visible, setVisible] = useState(false);

  return (
    <Provider>
      <View style={{ height: 350, justifyContent: 'space-between' }}>
        <Button
          onPress={() =>
            Toast.showToast({
              message: `I'm uncontrolled!`,
              duration: 750,
              mode: `error`,
            })
          }
        >
          SHOW UNCONTROLLED ERROR TOAST
        </Button>
        <Button
          onPress={() =>
            Toast.showToast({
              message: `Warning! Toast doesn't have icon!`,
              duration: 1000,
              mode: `warning`,
              showIcon: false,
            })
          }
        >
          SHOW UNCONTROLLED WARNING TOAST
        </Button>
        <Button
          onPress={() => setVisible((value) => !value)}
          preset="secondary"
        >
          TOGGLE CONTROLLED Info TOAST
        </Button>
        <Toast visible={visible} mode="success">
          CONTROLLED TOAST EXAMPLE
        </Toast>
      </View>
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

## Normal Toast Usage

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

## Static (Uncontrolled Toast)

For the static method to work root component must be wrapped by `<Provider />`, since it needs rendered `<ToastContainer />` to work properly.

- `showToast(params)` - show a Toast and the dismiss it after the specified duration has passed
- `hideToast()` - dismiss the currently visible toast. Does nothing when there's no visible toast.

### Params

### message (required)

Type: `string`  
Text to display in the toast.

### mode

Type: `'info'` | `'warning'` | `'error'` | `'success'`  
Default: `'info'`  
Determine the color and icon to display.

### duration

Type: `number`  
Default: `4000`  
How long the toast stay in the screen (in ms).

### showIcon

Type: `boolean`  
Default: `true`  
Show mode Icon in the toast.

### style

Type: `StyleProp<ViewStyle>`  
Style passed to the toast container.

### textStyle

Type: `StyleProp<TextStyle>`  
Style passed to the toast message.

## Static Usage

### Uncontrolled / Static Toast

```tsx live
function TimePickerExample() {
  return (
    <Provider>
      <Button
        onPress={() =>
          Toast.showToast({
            message: `I'm uncontrolled!`,
            duration: 1000,
            mode: `error`,
          })
        }
      >
        SHOW UNCONTROLLED TOAST
      </Button>
    </Provider>
  );
}
```
