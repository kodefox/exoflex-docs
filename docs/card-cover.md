---
id: cardCover 
title: Card.Cover 
---

A component to show a cover image inside a Card.

## Usage

```tsx live
function CardCoverExample() {
  return (
    <Card.Cover
      source={{
        uri: 'https://media.giphy.com/media/4ayiIWaq2VULC/source.gif',
      }}
      style={{ height: 150 }}
    />
  );
}
```

## Props

> This component also inherit props of React Native [ImageProps](https://reactnative.dev/docs/image#props).

### style

Type: `StyleProp<ViewStyle`  
Additional style for the container

