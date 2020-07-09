---
id: avatarIcon
title: Avatar.Icon
---

Avatars can be used to represent people in a graphical way.

## Usage

```tsx live
function AvatarIconExample() {
  let avatarStyles = {
    marginVertical: 24,
    marginHorizontal: 12,
  };

  return (
    <Provider>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar.Icon icon="home" style={avatarStyles} size={48} />
        <Avatar.Icon icon="home" style={avatarStyles} size={56} />
        <Avatar.Icon icon="home" style={avatarStyles} />
      </View>
    </Provider>
  );
}
```

## Props

### icon (require)

Type: `IconSource`  
Icon to display for the Avatar. Can only use `MaterialIcons` icons from the list. ([See icon list](https://oblador.github.io/react-native-vector-icons/)).  
But `IconSource` also includes `ImageSourcePropType`, so you can use image as the icon source.

### size

Type: `number`  
Default: `64`  
Size of the avatar.

### color

Type: `string`  
Custom color for the icon.

### style

Type: `StyleProp<ViewStye>`  
Style for the container.
