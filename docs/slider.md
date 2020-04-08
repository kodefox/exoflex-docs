---
id: slider
title: Slider
---

A component used to select a single/multiple value(s) from a range of values.
Modified from [@ptomasroos/react-native-multi-slider](https://github.com/ptomasroos/react-native-multi-slider)

## Usage

### Basic

```tsx live
function Basic() {
  return (
    <Provider>
      <Slider values={[7]} />
    </Provider>
  );
}
```

### Range

```tsx live
function Range() {
  return (
    <Provider>
      <Slider values={[3, 9]} />
    </Provider>
  );
}
```

## Props

### values

Type: `Array<number>`  
Default: `[0]`  
Values for the slider. When values length > 1, it becomes multislider. Maximum 2 markers.

### showLabel

Type: `boolean`  
Default: `true`  
Boolean whether slider should display label on marker pressed.

### isMarkersSeparated

Type: `boolean`  
Default: `false`  
In order to make different styles on markers you can set this to true.

### enabledOne

Type: `boolean`  
Default: `true`  
Enables the first marker.

### enabledTwo

Type: `boolean`  
Default: `true`
Enables the second marker.

### allowOverlap

Type: `boolean`  
Default: `false`  
Allow the overlap within the markers.

### snapped

Type: `boolean`  
Default: `false`  
Use this when you want a fixed position for your markers, this will split the slider in N specific positions.

### sliderLength

Type: `number`  
Default: `280`  
Length of the slider.

### min

Type: `number`  
Default: `0`  
Minimum value available in the slider.

### max

Type: `number`  
Default: `10`  
Maximum value available in the slider.

### step

Type: `number`  
Default: `1`  
Step value of the slider.

### markerOffsetX

Type: `number`  
Default: `0`  
Offset first marker.

### markerOffsetY

Type: `number`  
Default: `0`  
Offset second marker.

### minMarkerOverlapDistance

Type: `number`  
Default: `0`  
If this is > 0 and `allowOverlap` is false, this value will determine the closest two markers can come to each other. This can be used for cases where you have two markers large cursors and you don't want them to overlap.

### valuePrefix

Type: `string`  
Prefix added to the value.

### valueSuffix

Type: `string`  
Suffix added to the value.

### optionsArray

Type: `Array<number>`  
Possible values of the slider. Ignores min and max.

### touchDimensions

Type: `{ height: number, width: number, borderRadius: number, slipDisplacement: number }`  
Default: `{ height: 50, width: 50, borderRadius: 15, slipDisplacement: 200 }`  
Area to be touched, should enclose the whole marker. Will be automatically centered and contain the marker.

### onValuesChangeStart

Type: `() => void`  
Default: `() => {}`  
Callback when the value starts changing.

### onValuesChange

Type: `(values: Array<number>) => void`  
Default: `(values: Array<number>) => {}`  
Callback when the value changes.

### onValuesChangeFinish

Type: `(values: Array<number>) => void`  
Default: `(values: Array<number>) => {}`  
Callback when the value stops changing.

### onToggleOne

Type: `() => void`  
Callback when first marker toggles.

### onToggleTwo

Type: `() => void`  
Callback when second marker toggles.

### imageBackgroundSource

Type: `ImageSourcePropType`  
Specifies the source as required by ImageBackground.

### customMarker

Type: `React.ReactNode`  
Component used for the marker.

### customMarkerLeft

Type: `React.ReactNode`  
Component used for the left marker.

### customMarkerRight

Type: `React.ReactNode`  
Component used for the right marker.

### containerStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ position:'relative', height: 50, justifyContent:'center' }`  
Style for the container.

### trackStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ height: 8, borderRadius: 4, borderWidth: 1 }`  
Style for the track.

### selectedStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ backgroundColor: theme.colors.primary }`  
Style for the selected track.

### unselectedStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ backgroundColor: theme.colors.background }`  
Style for the unselected track.

### markerContainerStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ marginTop: 4 }`  
Style for the marker container.

### markerStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ borderColor: ThemeColor.primary, backgroundColor: theme.colors.background }`  
Style for the marker.

### pressedMarkerStyle

Type: `StyleProp<ViewStyle>`  
Style for the pressed marker.

```tsx
<Provider>
  <Slider values={[3, 9]} showLabel={false} />
  <Slider values={[5]} />
</Provider>
```
