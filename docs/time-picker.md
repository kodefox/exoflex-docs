---
id: timePicker
title: Time Picker
---

## Usage

```tsx live
function TimePickerExample() {
  let [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Provider>
      <TimePicker
        title='Start time'
        placeholder='Time'
        format='24'
        locale='en_US'
        style={{ fontSize: 10 }}
        date={selectedDate.toISOString()}
        onChangeTime={(date) => {
          let selected = new Date(date);
          selected = new Date(selected.setSeconds(0));
          setSelectedDate(selected);
        }}
      />
    </Provider>
  );
}
```

## Props

### date (required)

Type: `boolean`  
Current date and time in ISO string format.

### format

Type: `'12'` | `'24'`  
Default: `'12'`  
Format to show the time, between 12 hour and 24 hour.

### locale

Type: `'string'`  
To handle the format based on locale.

### onChangeTime

Type: `(isoString: string) => void`  
Callback when a time is picked. Can be used to set Time on TimePicker

### placeholder

Type: `string`  
Default: `''`  
Placeholder to show inside the TextInput. (For iOS and Android only)

### style

Type: `StyleProp<TextStyle>`  
Style for the text inside TimePicker. (For iOS and Android only)

### title

Type: `string`  
Default: `''`  
The title text on TimePicker. (For iOS only)
