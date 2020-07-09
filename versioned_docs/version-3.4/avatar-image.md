---
id: avatarImage
title: Avatar.Image
---

Avatars can be used to represent people in a graphical way.

## Usage

```tsx live
function AvatarImageExample() {
  const avatarImage = {
    uri:
      'https://raw.githubusercontent.com/kodefox/infra/master/packages/exoflex/example/assets/drawer_header.png',
  };

  let avatarStyles = {
    marginVertical: 24,
    marginHorizontal: 12,
  };

  return (
    <Provider>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar.Image source={avatarImage} style={avatarStyles} size={48} />
        <Avatar.Image source={avatarImage} style={avatarStyles} size={56} />
        <Avatar.Image source={avatarImage} style={avatarStyles} />
      </View>
    </Provider>
  );
}
```

## Props

### source (required)

Type: `ImageSourcePropType`  
Image to display for the Avatar.

### size

Type: `number`  
Default: `64`  
Size of the avatar.

### style

Type: `StyleProp<ViewStye>`  
Style for the container.
