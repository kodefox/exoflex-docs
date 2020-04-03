---
id: activityIndicator 
title: Activity Indicator 
---

Activity indicator is used to present progress of some activity in the app.

## Usage 

```tsx live
function ActivityIndicatorExample() {
  return (
    <Provider>
      <ActivityIndicator style={{ marginVertical: 10 }} />
      <ActivityIndicator size="large" color="salmon" />
    </Provider>
  );
}
```

## Props

### animating

Type: `boolean`  
Default: `true`  
Whether to show the indicator or hide it.

### color

Type: `string`  
Default: `Theme primary color`  
The color of the spinner. Will use the primary color from the theme.

### size

Type: `'small' | 'large' | number`  
Default: `'small'`  
Size of the indicator.

### hidesWhenStopped

Type: `boolean`  
Default: `true`  
Whether the indicator should hide when not animating.

### style

Type: `StyleProp<ViewStyle>`  
Additional style for the container.

