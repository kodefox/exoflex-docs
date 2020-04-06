---
id: menu 
title: Menu 
---

Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.

:::tip NOTE
If you get a problem with the menu component rendered on a wrong coord on the web, kindly refer to this link https://github.com/kodefox/infra/pull/291#issuecomment-577075898.
:::

## Usage 

### Basic

```tsx
function Basic() {
  let [visible, setVisible] = useState(false);

  return (
    <Provider>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Button onPress={() => setVisible(true)}>Show menu</Button>
          }
        >
          <Menu.Item title="Cut" onPress={() => {}} />
          <Menu.Item title="Copy" onPress={() => {}} />
          <Divider />
          <Menu.Item title="Paste" onPress={() => {}} />
        </Menu>
      </View>
    </Provider>
  );
}
```

### Custom Position

```tsx live
function CustomPosition() {
  let [visible, setVisible] = useState(false);
  let [contextualMenuCoord, setMenuCoord] = useState({ x: 0, y: 0 });

  return (
    <Provider>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <Button
          onPress={(event) => {
            setMenuCoord({
              x: event.nativeEvent.pageX / 2,
              y: 50,
            });
            setVisible(true);
          }}
        >
          Show menu
        </Button>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={contextualMenuCoord}
        >
          <Menu.Item title="Cut" onPress={() => {}} />
          <Menu.Item title="Copy" onPress={() => {}} />
          <Divider />
          <Menu.Item title="Paste" onPress={() => {}} />
        </Menu>
      </View>
    </Provider>
  );
}
```

## Props

### visible (required)

Type: `boolean`  
Whether the Menu is currently visible.

### statusBarHeight

Type: `number`  
Default: `expo.Constants.statusBarHeight` | `0`  
Extra margin to add at the top of the menu to account for translucent status bar on Android. If you are using Expo, we assume translucent status bar and set a height for status bar automatically. Pass 0 or a custom value to customize it. This is automatically handled on iOS.

### anchor (required)

Type: `React.ReactNode` | `{ x: number, y: number }`  
The anchor to open the menu from. In most cases, it will be a button that opens the menu.

### children (required)

Type: `React.ReactNode`  
Content of the Menu.

### onDismiss (required)

Type: `() => void`  
Callback called when Menu is dismissed. The visible prop needs to be updated when this is called.

### contentStyle

Type: `StyleProp<ViewStyle>`  
Style of menu's inner content.

### style

Type: `StyleProp<ViewStyle>`  
Style of menu's container.


