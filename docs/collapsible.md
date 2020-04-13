---
id: collapsible
title: Collapsible
---

Collapsible with animation.

## Usage

### Basic

```tsx live
function BasicCollapsible() {
  return (
    <Provider>
      <Collapsible title="Spoiler Alert">
        <Text>{COLLAPSED_SPOILER}</Text>
      </Collapsible>
    </Provider>
  );
}
```

### Without Icon

```tsx live
function WithoutIcon() {
  return (
    <Provider>
      <Collapsible title="Click for some spoiler" renderIconRight={null}>
        <Text>{COLLAPSED_SPOILER}</Text>
      </Collapsible>
    </Provider>
  );
}
```

### Left Icon

```tsx live
function LeftIcon() {
  return (
    <Provider>
      <Collapsible
        title="More spoiler"
        renderIconLeft={() => <IconButton icon="alert" style={{ margin: 0 }} />}
      >
        <Text>{COLLAPSED_SPOILER}</Text>
      </Collapsible>
    </Provider>
  );
}
```

### Custom Icon

```tsx live
function CustomIcon() {
  return (
    <Provider>
      <Collapsible
        title="Clik for more"
        renderIconRight={(value) => (
          <Animated.View
            style={{
              transform: [
                {
                  rotate: value.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['-45deg', '45deg'],
                  }),
                },
              ],
            }}
          >
            <IconButton icon="arrow-up" />
          </Animated.View>
        )}
      >
        <Text>{COLLAPSED_SPOILER}</Text>
      </Collapsible>
    </Provider>
  );
}
```

## Props

### children (required)

Type: `React.ReactNode`  
Content that'll be hidden when collapsed.

### title (required)

Type: `string`  
Text displayed as the title of the collapsible.

### disabled

Type: `boolean`  
Default: `false`  
Whether the collapsible can be toggle on header click.

### renderLeftIcon

Type: `(animatedValue: Animated.Value) => ReactNode` | `null`  
Custom icon to be display on the left of the title.

### renderRightIcon

Type: `(animatedValue: Animated.Value) => ReactNode` | `null`  
Default: `Arrow icon`  
Custom icon to be display on the right of the title. Set this to `null` if you don't want to display the icon.

### contentContainerStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ padding: 16 }`  
Additional style for the content container.

### titleContainerStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, height: 48}`  
Additional style for the title container.

### titleStyle

Type: `StyleProp<TextStyle>`  
Default: `{ marginRight: 24, flexWrap: 24, flex: 1 }`  
Additional style for the title.

### iconStyle

Type: `StyleProp<ViewStyle>`  
Default: `{ margin: 0, ...Platform.select({ web: {}, default: { position: 'absolute', right: 5, alignSelf: 'center' } }) }`  
Additional style for the icon.

### style

Type: `StyleProp<ViewStyle>`  
Default: `{ borderWidth: 1, width: '100%' }`  
Additional style for the outer container.
