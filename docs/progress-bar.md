---
id: progressBar 
title: ProgressBar 
---

An indicator used to present progress of some activity in the app.

## Usage 

### Basic

```tsx live
function Basic() {
  return (
    <Provider>
      <ProgressBar progress={0.4} />
    </Provider>
  );
}
```

### Custom Color

```tsx live
function CustomColor() {
  return (
    <Provider>
      <ProgressBar progress={0.6} color="tomato" />
    </Provider>
  );
}
```

### Indeterminate

```tsx live
function Indeterminate() {
  return (
    <Provider>
      <ProgressBar indeterminate />
    </Provider>
  );
}
```

## Props

### progress

Type: `number`  
Default: `0`  
Progress value (between 0 and 1).

### color

Type: `string`  
Default: `Theme primary color`  
Color of the progress bar.

### visible

Type: `boolean`  
Default: `true`  
Whether to show the ProgressBar (true, the default) or hide it (false).

### indeterminate

Type: `boolean`  
Default: `false`  
Whether the progress bar will show indeterminate progress.

### style

Type: `StyleProp<ViewStyle>`  
Optional style for the progress bar.

