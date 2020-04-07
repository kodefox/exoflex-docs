---
id: portal 
title: Portal 
---

Portal allows rendering a component at a different place in the parent tree. You can use it to render content which should appear above other elements, similar to Modal. It requires a Portal.Host component to be rendered somewhere in the parent tree.

## Usage 

```tsx live
function PortalExample() {
  let [showPortal, setShowPortal] = useState(false);

  let portalWrapperStyle = {
    flex: 1,
    backgroundColor: '#0f0f0f',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  };
  let textStyle = { color: 'tomato' };
  let rootStyle = { padding: 20, alignItems: 'flex-start' };

  return (
    <Provider>
      {showPortal && (
        <Portal>
          <View style={portalWrapperStyle}>
            <Text style={textStyle} onPress={() => setShowPortal(false)}>
              {'Hello from the portal.\nPress me to dismiss.'}
            </Text>
          </View>
        </Portal>
      )}
      <View style={rootStyle}>
        <Button onPress={() => setShowPortal(true)}>
          Show Portal
        </Button>
      </View>
    </Provider>
  );
}
```

## Props

### children (required)

Type: `React.ReactNode`  
Content of the Portal.

