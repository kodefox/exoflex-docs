---
id: cardTitle
title: Card.Title
---

A component to show a title, subtitle and an avatar inside a Card.

## Usage

```tsx live
function CardTitleExample() {
  return (
    <Card.Title
      title="PIZZA4LYFE"
      style={{ justifyContent: 'center' }}
      titleStyle={{
        color: '#33bdd6',
        fontWeight: '700',
      }}
    />
  );
}
```

## Props

### title (required)

Type: `string`  
Text for the title.

### titleStyle

Type: `StyleProp<TextStyle>`  
Additional style for the title.

### subtitle

Type: `string`  
Text for the subtitle.

### subtitleStyle

Type: `StyleProp<TextStyle>`
Additional style for the subtitle.

### style

Type: `StyleProp<ViewStyle>`  
Additional style for the container.
