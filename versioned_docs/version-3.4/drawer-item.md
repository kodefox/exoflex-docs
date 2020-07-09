---
id: drawerItem
title: Drawer.Item
---

A component used to show an action item with an icon and a label in a navigation drawer.

## Usage

### Basic

```tsx live
function Basic() {
  return (
    <Provider>
      <Drawer.Item label="Home" onPress={() => {}} />
      <Drawer.Item label="Profile" onPress={() => {}} />
      <Drawer.Item label="Setting" onPress={() => {}} />
    </Provider>
  );
}
```

### Highlight

```tsx live
function Basic() {
  let [active, setActive] = useState('Home');

  return (
    <Provider>
      <Drawer.Item
        active={active === 'Home'}
        label="Home"
        onPress={() => setActive('Home')}
      />
      <Drawer.Item
        active={active === 'Profile'}
        label="Profile"
        onPress={() => setActive('Profile')}
      />
      <Drawer.Item
        active={active === 'Setting'}
        label="Setting"
        onPress={() => setActive('Setting')}
      />
    </Provider>
  );
}
```

### With icon

```tsx live
function WithIcon() {
  return (
    <Provider>
      <Drawer.Item label="Home" icon="home" onPress={() => {}} />
      <Drawer.Item label="Profile" icon="account" onPress={() => {}} />
      <Drawer.Item label="Setting" icon="settings" onPress={() => {}} />
    </Provider>
  );
}
```

## Props

### label (required)

Type: `string`  
The label text of the item.

### active

Type: `boolean`  
Default: `false`  
Whether to highlight the drawer item as active.

### icon

Type: `string`  
Icon to display for the DrawerItem. Only MaterialIcons is available.

### onPress (required)

Type: `() => void`  
Function to execute on press.

### style

Type: `StyleProp<ViewStyle>`  
Style of the container.

### labelStyle

Type: `StyleProp<TextStyle>`  
Style of the label text.

### accessibility

Supports [accessibility props](https://reactnative.dev/docs/accessibility) from react native.
