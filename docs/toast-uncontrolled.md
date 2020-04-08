---
id: toastUncontrolled
title: Uncontrolled Toast
---

## Static

For the static method to work the root component must be wrapped by `<Provider />`, since it needs rendered `<ToastContainer />` to work properly.

- `showToast(params)` - show a Toast and then dismiss it after the specified duration has passed

## Usage

```tsx live
function ToastExample() {
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

## Params

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

- `hideToast()` - dismiss the currently visible toast. Does nothing when there's no visible toast.
