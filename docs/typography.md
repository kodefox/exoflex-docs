---
id: typography
title: Typography
---

A set of preconfigured Text components that has their own purpose.

## Usage

### Heading

```tsx live
function HeadingExample() {
  return (
    <View>
      <Heading style={{ marginBottom: 4 }}>Heading</Heading>
      <Typography.Heading>Heading</Typography.Heading>
    </View>
  );
}
```

### Subheading

```tsx live
function SubheadingExample() {
  return (
    <View>
      <Subheading style={{ marginBottom: 4 }}>Subheading</Subheading>
      <Typography.Subheading>Subheading</Typography.Subheading>
    </View>
  );
}
```

### LargeTitle

```tsx live
function LargeTitleExample() {
  return (
    <View>
      <LargeTitle style={{ marginBottom: 4 }}>LargeTitle</LargeTitle>
      <Typography.LargeTitle>LargeTitle</Typography.LargeTitle>
    </View>
  );
}
```

### Title

```tsx live
function TitleExample() {
  return (
    <View>
      <Title style={{ marginBottom: 4 }}>Title</Title>
      <Typography.Title>Title</Typography.Title>
    </View>
  );
}
```

### Subtitle

```tsx live
function SubtitleExample() {
  return (
    <View>
      <Subtitle style={{ marginBottom: 4 }}>Subtitle</Subtitle>
      <Typography.Subtitle>Subtitle</Typography.Subtitle>
    </View>
  );
}
```

### Paragraph

```tsx live
function ParagraphExample() {
  return (
    <View>
      <Paragraph style={{ marginBottom: 4 }}>Paragraph</Paragraph>
      <Typography.Paragraph>Paragraph</Typography.Paragraph>
    </View>
  );
}
```

### Label

```tsx live
function LabelExample() {
  return (
    <View>
      <Label style={{ marginBottom: 4 }}>Label</Label>
      <Typography.Label>Label</Typography.Label>
    </View>
  );
}
```

### Caption

```tsx live
function CaptionExample() {
  return (
    <View>
      <Caption style={{ marginBottom: 4 }}>Caption</Caption>
      <Typography.Caption>Caption</Typography.Caption>
    </View>
  );
}
```

## Props

> All of these components are using the same props as [Text](text).
