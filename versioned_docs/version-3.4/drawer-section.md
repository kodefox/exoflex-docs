---
id: drawerSection
title: Drawer.Section
---

A component to group content inside a navigation drawer.

## Usage

### Basic

```tsx live
function Basic() {
  let [active, setActive] = useState('Home');

  return (
    <Drawer.Section headerSource={{ uri: 'https://picsum.photos/300' }}>
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
    </Drawer.Section>
  );
}
```

### Circle Header

```tsx live
function Basic() {
  let [active, setActive] = useState('Home');

  return (
    <Drawer.Section
      headerMode="circle"
      headerSource={{ uri: 'https://picsum.photos/300' }}
    >
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
    </Drawer.Section>
  );
}
```

### With footer

```tsx live
function Basic() {
  let [active, setActive] = useState('Home');

  return (
    <View style={{ height: 500 }}>
      <Drawer.Section
        headerSource={{ uri: 'https://picsum.photos/300' }}
        footerLabel="Sign out"
        footerOnPress={() => {}}
      >
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
      </Drawer.Section>
    </View>
  );
}
```

## Props

### headerMode (required)

Type: `'full'` | `'circle'`  
Default: `'full'`  
The mode of header image.

### headerSource (required)

Type: `ImageURISource`  
Image to display for the header.

### children (required)

Type; `React.ReactNode`  
Content of the Drawer.Section.

### footerLabel

Type: `string`  
The label text of footer item.

### footerIcon

Type: `string`  
Icon to display for the footer item. Only `MaterialCommunityIcons` is available.

### footerOnPress

Type: `() => void`  
Function to execute footer item on press.

### accessibility

Supports [accessibility props](https://reactnative.dev/docs/accessibility) from react native.
