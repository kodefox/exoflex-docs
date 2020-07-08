---
id: avatarText
title: Avatar.Text
---

Avatars can be used to represent people in a graphical way.

## Usage

```tsx live
function AvatarTextExample() {
  let avatarStyles = {
    marginVertical: 24,
    marginHorizontal: 12,
  };

  return (
    <Provider>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar.Text label="KF" style={avatarStyles} size={48} />
        <Avatar.Text label="KF" style={avatarStyles} size={56} />
        <Avatar.Text label="KF" style={avatarStyles} />
      </View>
    </Provider>
  );
}
```

## Props

### label (required)

Type: `string`  
Initials to show as the text in the Avatar.

### size

Type: `number`  
Default: `64`  
Size of the avatar.

### textPreset

Type: `string`  
Name of font preset that will be used on `Text` component inside the `Avatar`.

### style

Type: `StyleProp<ViewStye>`  
Style for the container.

### labelStyle

Type: `StyleProp<TextStyle>`  
Style for the text in the Avatar.
