---
id: dateTimePicker
title: DateTimePicker
---

Modal based Picker for choosing Date and Time.

## Usage

### Date

```tsx live
function DateOnly() {
  let [isDatePickerVisible, setDatePickerVisible] = useState(false);
  let [date, setDate] = useState('');

  let textDate =
    date === '' ? 'Open DatePicker' : new Date(date).toLocaleString('id-ID');

  return (
    <Provider>
      <Button onPress={() => setDatePickerVisible(true)}>{textDate}</Button>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        date={date}
        mode="date"
        onCancel={() => setDatePickerVisible(false)}
        onConfirm={(date) => {
          setDatePickerVisible(false);
          setDate(date);
        }}
      />
    </Provider>
  );
}
```

### Time

```tsx live
function TimeOnly() {
  let [isTimePickerVisible, setTimePickerVisible] = useState(false);
  let [date, setDate] = useState('');

  let textDate =
    date === '' ? 'Open TimePicker' : new Date(date).toLocaleString('id-ID');

  return (
    <Provider>
      <Button onPress={() => setTimePickerVisible(true)}>{textDate}</Button>
      <DateTimePicker
        isVisible={isTimePickerVisible}
        date={date}
        mode="time"
        onCancel={() => setTimePickerVisible(false)}
        onConfirm={(date) => {
          setTimePickerVisible(false);
          setDate(date);
        }}
      />
    </Provider>
  );
}
```

### DateTime

```tsx live
function DateTime() {
  let [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  let [date, setDate] = useState('');

  let textDate =
    date === ''
      ? 'Open DateTimePicker'
      : new Date(date).toLocaleString('id-ID');

  return (
    <Provider>
      <Button onPress={() => setDateTimePickerVisible(true)}>{textDate}</Button>
      <DateTimePicker
        isVisible={isDateTimePickerVisible}
        date={date}
        mode="datetime"
        onCancel={() => setDateTimePickerVisible(false)}
        onConfirm={(date) => {
          setDateTimePickerVisible(false);
          setDate(date);
        }}
      />
    </Provider>
  );
}
```

## Props

### mode

Type: `'date'` | `'time'` | `'datetime'`  
Default: `'datetime'`  
Determines whether to displaying a `DatePicker`, `TimePicker`, or both.

### date

Type: `string`  
Current date and time in ISO string format. (Empty string also accepted.)

### locale

Type: `string`  
Set the date picker locale.

### isVisible

Type: `boolean`  
Whether to show the picker or not.

### use24Hour

Type: `boolean`  
Whether to show the time in 24h or 12h format.

### minimumDate

Type: `Date`  
Set the minimum date that can be selected.

### maximumDate

Type: `Date`  
Set the maximum date that can be selected.

### format

Type: `'12'` | `'24'` | `'12'`  
Format to show the time, between 12 hour and 24 hour.

### placeholder

Type: `string`  
Default: `''`  
Placeholder to show inside the TextInput. (For iOS and Android only)

### title

Type: `string`  
Default: `''`  
The title text on iOS and web.

### dateTitleWeb

Type: `string`  
Default: `''`  
The title text on web for date picker.

### timeTitleWeb

Type: `string`  
Default: `''`  
The title text on web for time picker.

### cancelTextWeb

Type: `string`  
Default: `'CANCEL'`  
The label for the cancel button on the web.

### confirmTextWeb

Type: `string`  
Default: `'CONFIRM'`  
The label for the confirm button on the web.

### datePickerModeAndroid

Type: `'spinner'` | `'calendar'` | `'default'`  
Default: `'default'`  
Toggles the date mode on Android between spinner and calendar views. (Android only.)

### timePickerModeAndroid

Type: `'spinner'` | `'clock'` | `'default'`  
Default: `'default'`  
Toggles the time mode on Android between spinner and clock views. (Android only.)

### onCancel (required)

Type: `() => void`  
Callback when the cancel button pressed.

### onConfirm (required)

Type: `(date: string) => void`  
Callback when the confirm pressed. It returns the selected date in ISO string format.

### onChangeTime

Type: `(isoString: string) => void`  
Callback when a time is picked. It returns an ISO string.

### style

Type: `StyleProp<TextStyle>`  
Style for the TextInput. (For iOS and Android only)
