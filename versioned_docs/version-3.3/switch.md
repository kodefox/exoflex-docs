---
id: switch
title: Switch
---

A selection control component which values are either on/off (true/false).

## Usage

```tsx live
function SwitchExample() {
  let [switchValue, setSwitchValue] = useState(false);
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ marginVertical: 10, alignItems: 'center' }}>
        <Text>Default Switch</Text>
        <Switch
          value={switchValue}
          onValueChange={(newValue) => {
            setSwitchValue(newValue);
          }}
        />
      </View>
      <Text>Disabled Switch</Text>
      <Switch
        value={switchValue}
        onValueChange={(newValue) => {
          setSwitchValue(newValue);
        }}
        width={40}
        disabled={true}
      />
    </View>
  );
}
```

## Props

### value

Type: `boolean`  
Default: `true`  
Indicator whether the switch is on (`true`) or off (`false`).

### onValueChange

Type: `(newValue: boolean) => void`  
Default: `() => {}`  
Callback that is called when the switch is pressed.

### disabled

Type: `boolean`  
Default: `false`  
If true, switch cannot be pressed.

### width

Type: `number`  
Default: `48`  
Width of the switch.

### thumbStyle

Type: `StyleProp<ViewStyle>`  
Additional view style for the switch thumb.

### trackStyle

Type: `StyleProp<ViewStyle>`  
Additional view style for the switch track.
