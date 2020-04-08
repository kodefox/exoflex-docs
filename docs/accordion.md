---
id: accordion
title: Accordion
---

A component used to display an/multiple expandable list item.

## Usage

```tsx live
function AccordionExample(props) {
  const drawerImage = {
    uri:
      'https://raw.githubusercontent.com/kodefox/infra/master/packages/exoflex/example/assets/drawer_header.png',
  };

  const SECTIONS = [
    {
      title: 'FIRST SECTION',
      text: 'This is the first section content',
      image: drawerImage,
    },
    {
      title: 'SECOND SECTION',
      text: 'This is the second section content',
      image: drawerImage,
    },
  ];

  let [activeSections, setActiveSections] = useState([]);

  return (
    <View>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        onChange={(sections) => setActiveSections(sections)}
        titleContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}
        titleStyle={{ fontWeight: 'bold' }}
        renderContent={(content, index) => (
          <View style={{ padding: 16 }}>
            <View
              style={{
                padding: 16,
                backgroundColor: '#e8ecf3',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 4,
              }}
            >
              <Image
                source={content.image}
                style={{ width: 50, height: 50, marginRight: 5 }}
              />
              <Text style={{ flex: 1 }}>{content.text}</Text>
            </View>
            {index === 0 && (
              <>
                <TextInput
                  label="First Name"
                  containerStyle={{ marginVertical: 10 }}
                />
                <TextInput
                  label="Last Name"
                  containerStyle={{ marginVertical: 10 }}
                />
                <TextInput
                  label="Address"
                  containerStyle={{ marginVertical: 10 }}
                />
                <Button onPress={() => setActiveSections([1])}>next</Button>
              </>
            )}
          </View>
        )}
        sectionContainerStyle={{
          borderWidth: 1,
          borderColor: '#454545',
          marginVertical: 5,
          borderRadius: 4,
        }}
      />
    </View>
  );
}
```

## Props

### sections (required)

Type: `Array<T extends { title: string }>`  
An array of sections passed to the render methods. In order.

### useRipple

Type: `boolean`  
Default: `false`  
Determine whether to use Material Ripple Effect or not.

### renderHeader (required)

Type: `(content: T, index: number, isActive: boolean, sections: Array<T>) => React.ReactNode`  
Default: `Exoflex custom header`  
A function that should return a renderable representing the header.

### renderContent (required)

Type: `(content: T, index: number, isActive: boolean, sections: Array<T>) => React.ReactNode`  
A function that should return a renderable representing the content.

### renderFooter

Type: `(content: T, index: number, isActive: boolean, sections: Array<T>) => React.ReactNode`  
A function that should return a renderable representing the footer.

### renderSectionTitle

Type: `(content: T, index: number, isActive: boolean) => React.ReactNode`  
A function that should return a renderable representing the title of the section outside the touchable element.

### renderIconLeft

Type: `(animation: Animated.Value) => void | null`  
Custom icon to be display on the left of the header.

### renderIconRight

Type: `(animation: Animated.Value) => void | null`  
Default: `Arrow Icon`  
Custom icon to be display on the right of the header.

### onChange

Type: `(indexes: Array<number>) => void`  
A function that is called when the currently active section(s) are updated.

### activeSections

Type: `Array<number>`  
Control which indices in the sections array are currently open. If empty, closes all sections.

### underlayColor

Type: `string`  
Default: `'black'`  
The color of the underlay that will show through when tapping on headers.

### touchableComponent

Type: `(content: T, index: number, isActive: boolean) => React.ReactNode`
Default: `TouchableOpacity`  
The touchable component used in the Accordion.

### touchableProps

Type: `{ [key: string]: any }`  
Properties for the touchableComponent.

### disabled

Type: `boolean`  
Default: `false`  
Set whether the user can interact with the Accordion.

### align

Type: `'top' | 'center' | 'bottom'`  
Default: `'top'`  
Alignment of the content when transitioning.

### duration

Type: `number`  
Default: `300`  
A function that should return a renderable representing the title of the section outside the touchable element.

### onAnimationEnd

Type: `() => void`  
Default: `() => {}`  
Callback when the toggle animation is done. Useful to avoid heavy layouting work during the animation.

### expandFromBottom

Type: `boolean`  
Expand content from the bottom instead of the top.

### expandMultiple

Type: `boolean`  
Default: `false`  
Allow more than one section to be expanded.

### sectionContainerStyle

Type: `StyleProp<ViewStyle>`  
Optional styling for the section container.

### containerStyle

Type: `StyleProp<ViewStyle>`  
Optional styling for the Accordion container.

### headerContainerStyle

Type: `StyleProp<ViewStyle>`  
Optional styling for the Accordion header container.

### headerStyle

Type: `StyleProp<TextStyle>`  
Optional styling for the Accordion header.

### iconStyle

Type: `StyleProp<ViewStyle>`  
Optional styling for the Header icon.
