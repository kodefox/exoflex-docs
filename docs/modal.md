---
id: modal
title: Modal
---

The Modal component is a simple way to present content above an enclosing view. To render the Modal above other components, you'll need to wrap it with the `Portal` component.

## Usage

### Basic

```tsx live
function Basic() {
  let [visible, setVisible] = useState(false);

  let toggleModal = () => setVisible(!visible);

  return (
    <Provider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button onPress={toggleModal}>Open Modal</Button>
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={toggleModal}
          contentContainerStyle={{
            backgroundColor: "white",
            textAlign: "center",
            alignSelf: "center",
            height: 150,
            width: 400
          }}
        >
          <Text>Howdy, Modal!</Text>
          <Text>You can click the overlay to close this modal.</Text>
        </Modal>
      </Portal>
    </Provider>
  );
}
```

## Props

### dismissable

Type: `boolean`  
Default: `true`  
Whether clicking outside the Modal dismiss it.

### visible

Type: `boolean`  
Default: `false`  
Whether the Modal is currently visible.

### onDismiss

Type: `() => void`  
Callback called when Modal is dismissed. The visible prop needs to be updated when this is called.

### children (required)

Type: `React.ReactNode`  
Content of the Menu.

### contentContainerStyle

Type: `StyleProp<ViewStyle>`  
Style of modal's content.
