---
id: card 
title: Card 
---

A card is a sheet of material that serves as an entry point to more detailed information.

## Usage

### Basic

```tsx live
function Basic() {
  return (
    <Provider>
      <Card
        style={{
          marginVertical: 16,
          backgroundColor: '#f8f8f8',
        }}
      >
        <Card.Title
          title="PIZZA4LYFE"
          style={{ justifyContent: 'center' }}
          titleStyle={{
            color: '#33bdd6',
            fontWeight: '700',
          }}
        />
        <Card.Cover
          source={{
            uri: 'https://media.giphy.com/media/4ayiIWaq2VULC/source.gif',
          }}
          style={{ height: 150 }}
        />
        <Card.Content>
          <Card style={{ borderRadius: 10 }}>
            <Card.Content>
              <Text>
                This is the description or content that you want to show in this
                card component. This is the description or content that you want
                to show in this card component.
              </Text>
            </Card.Content>
          </Card>
        </Card.Content>
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
      </Card>
    </Provider>
  );
}
```

### Rounded 

```tsx live
function Rounded() {
  return (
    <Provider>
      <Card
        rounded
        style={{
          marginVertical: 16,
          backgroundColor: '#f8f8f8',
        }}
      >
        <Card.Title
          title="PIZZA4LYFE"
          style={{ justifyContent: 'center' }}
          titleStyle={{
            color: '#33bdd6',
            fontWeight: '700',
          }}
        />
        <Card.Cover
          source={{
            uri: 'https://media.giphy.com/media/4ayiIWaq2VULC/source.gif',
          }}
          style={{ height: 150 }}
        />
        <Card.Content>
          <Card style={{ borderRadius: 10 }}>
            <Card.Content>
              <Text>
                This is the description or content that you want to show in this
                card component. This is the description or content that you want
                to show in this card component.
              </Text>
            </Card.Content>
          </Card>
        </Card.Content>
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
      </Card>
    </Provider>
  );
}
```

## Props

> This component also inherit props of React Native [ViewProps](https://reactnative.dev/docs/view#props).

### children

Type: `React.ReactNode`  
Items inside the Card.Content.

### rounded

Type: `boolean`  
Whether to make the container become rounded or not. If `true`, it will use `theme.roundness` for the rounded value.

