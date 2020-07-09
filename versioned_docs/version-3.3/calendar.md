---
id: calendar
title: Calendar
---

A component used to show a calendar to pick a date.

## Usage

### Basic

```tsx live
function BasicCalendar() {
  let [selectedDate, setSelectedDate] = useState(new Date().toISOString());

  let changeDate = (dateObject) => {
    setSelectedDate(new Date(dateObject.timestamp).toISOString());
  };

  let arrow = useCallback(
    (direction) =>
      direction === 'left' ? (
        <IconButton icon="chevron-left" />
      ) : (
        <IconButton icon="chevron-right" />
      ),
    [],
  );

  return (
    <Provider>
      <Calendar
        markedDates={{ [selectedDate.split('T')[0]]: { selected: true } }}
        current={new Date(selectedDate)}
        onDayPress={changeDate}
        // On web, you have to declare the arrow manually
        renderArrow={arrow}
      />
    </Provider>
  );
}
```

### Marked Dates

```tsx live
function MarkedCalendar() {
  const createDate = (increaseDays = 0) => {
    let date = new Date();
    let result = date.setDate(date.getDate() + increaseDays);
    return new Date(result).toISOString().split('T')[0];
  };

  const MARKED_DATES = {
    [createDate()]: {
      selected: true,
      marked: true,
    },
    [createDate(1)]: { marked: true },
    [createDate(2)]: {
      marked: true,
      dotColor: 'red',
      activeOpacity: 0,
    },
    [createDate(3)]: { disabled: true, disableTouchEvent: true },
  };

  let arrow = useCallback(
    (direction) =>
      direction === 'left' ? (
        <IconButton icon="chevron-left" />
      ) : (
        <IconButton icon="chevron-right" />
      ),
    [],
  );

  return (
    <Calendar
      // Collection of dates that have to be marked. Default = {}
      markedDates={MARKED_DATES}
      renderArrow={arrow}
    />
  );
}
```

## Props

> NOTE: You can check this page for more information. https://github.com/wix/react-native-calendars

### textPreset

Type: `string`  
A preset of font to use when determining the font style.

### current

Type: `Date` | `DateObject` | `number` | `string` | `XDate`  
Default: `Date`  
Initially visible month.

### minDate

Type: `string`  
Minimum date that can be selected, dates before minDate will be grayed out.

### maxDate

Type: `string`
Maximum date that can be selected, dates after maxDate will be grayed out.

### monthFormat

Type: `string`  
Default: `'MMMM yyyy'`  
Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting

### markingType

Type: `'custom' | 'simple' | 'multi-dot' | 'multi-period' | 'period'`  
Default: `'simple'`  
Marking style on the date.

### markedDates

Type: `{ [date: string]: Marking }`  
Marking style on the date.

### firstDay

Type: `number`  
Default: `0`  
If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.

### hideArrows

Type: `boolean`  
Default: `false`  
Hide month navigation arrows.

### hideExtraDays

Type: `boolean`
Default: `false`  
Do not show days of other months in month page.

### disableMonthChange

Type: `boolean`  
Default: `false`  
If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out day from another month that is visible in calendar page.

### disabledByDefault

Type: `boolean`  
Default: `false`  
Disable days by default.

### hideDayNames

Type: `boolean`  
Default: `false`  
Hide day names.

### showWeekNumbers

Type: `boolean`  
Default: `false`  
Show week numbers to the left.

### displayLoadingIndicator

Type: `boolean`  
Default: `false`  
Display loading indicator.

### dayComponent

Type: `React.Component` | `React.SFC`  
Provide custom day rendering component.

### renderArrow

Type: `(direction: 'left' | 'right') => JSXElement`  
Replace default arrows with custom ones.

### style

Type: `StyleProp<ViewStyle>`  
Calendar container style.

### onDayPress

Type: `(day: DateObject) => void`  
Handler which gets executed on day press.

### onDayLongPress

Type: `(day: DateObject) => void`  
Handler which gets executed on day long press.

### onMonthChange

Type: `(month: DateObject) => void`  
Handler which gets executed when visible month changes in calendar.

### onPressArrowLeft

Type: `(substractMonth: () => void) => void`  
Handler which gets executed when press arrow icon left. It receive a callback that can go back month.

### onPressArrowRight

Type: `(addMonth: () => void) => void`  
Handler which gets executed when press arrow icon left. It receive a callback that can go next month.

### onVisibleMonthsChange

Type: `(months: DateObject[]) => void`  
Callback which gets executed when visible months change in scroll view.

## Internal Props

### DateObject

```tsx
type DateObject = {
  day: number; // day of month (1-31)
  month: number; // month of year (1-12)
  year: number; // year
  timestamp: number; // UTC timestamp representing 00:00 AM of this date
  dateString: string; // date formatted as 'YYYY-MM-DD' string
};
```

### Marking

```tsx
export type Marking =
  | CustomMarking
  | DotMarking
  | MultiDotMarking
  | MultiPeriodMarking
  | PeriodMarking;
```

### MarkedDateCustomStyles

```tsx
export interface MarkedDateCustomStyles {
  container: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
}
```

### CalendarDot

```tsx
export interface CalendarDot {
  key: string;
  color: string;
  selectedDotColor?: string;
}
```

### CustomMarking

```tsx
export interface CustomMarking {
  customStyles: MarkedDateCustomStyles;
}
```

### DotMarking

```tsx
export interface DotMarking {
  activeOpacity?: number;
  disabled?: boolean;
  disableTouchEvent?: boolean;
  dotColor?: string;
  marked?: boolean;
  selected?: boolean;
  selectedColor?: string;
}
```

### MultiDotMarking

```tsx
export interface MultiDotMarking {
  disabled?: boolean;
  dots: CalendarDot[];
  selected?: boolean;
  selectedColor?: string;
}
```

### MultiPeriodMarking

```tsx
export interface MultiPeriodMarking {
  periods: Array<{
    startingDay?: boolean;
    endingDay?: boolean;
    color?: string;
  }>;
}
```

### PeriodMarking

```tsx
export interface PeriodMarking {
  textColor?: string;
  startingDay?: boolean;
  color?: string;
  selected?: boolean;
  endingDay?: boolean;
  disabled?: boolean;
}
```
