---
id: cardActions
title: Card.Actions
---

A component to show a list of actions inside a Card.

## Usage

```tsx live
function CardContentExample() {
  return (
    <Card.Actions>
      <Button
        preset="invisible"
        onPress={() => {}}
        contentStyle={{
          minWidth: 50,
        }}
      >
        Tekan 1
      </Button>
      <Button
        preset="invisible"
        onPress={() => {}}
        contentStyle={{
          minWidth: 50,
        }}
      >
        Tekan 2
      </Button>
    </Card.Actions>
  );
}
```

## Props

> This component also inherit props of React Native [ViewProps](https://reactnative.dev/docs/view#props).

### children

Type: `React.ReactNode`  
Items inside the Card.Content.
