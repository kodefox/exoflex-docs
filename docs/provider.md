---
id: provider 
title: Provider 
---

Provider wraps the root component to provides theming capability to exoflex's components.

Exoflex will use "Rubik" font family when `useSystemFonts` is set to false.
You can override this by providing the font family name to use in the `theme.fonts` prop.

Provider also render `<ToastContainer />` to display a `<Toast />` using `Toast.showToast`. See Toast [docs](toast) for usage details.

## Usage

```tsx
<Provider theme={{
    roundness: 7,
    colors: {
      primary: '#fd8224'
    },
  }}
>
  <App />
</Provider>
```

## Props

### children (required)

Type: `React.ReactNode`  
The root component.

### theme

Type: `Partial<Theme>`  
Theme used to style exoflex's components. Will be merged recursively with the [default theme](https://github.com/kodefox/infra/blob/master/packages/exoflex/src/constants/themes.ts).

### fonts (deprecated)

Type: `Record<string, FontSource>`  
A record of custom fonts to load. Will be loaded together with the built in exoflex fonts. Fonts will be loaded only when `expo-font` modules is available.

:::caution Deprecated
Using `fonts` for loading fonts is no longer supported, please specify the font source on the theme instead.

Kindly refer to [Theming section](theming#loading-the-fonts) for further information regarding font loading.
:::

### useSystemFonts (deprecated)

Type: `boolean`  
Default: `true`  
To use only fonts available in the current platform, set to true. Implies `skipFontsLoading` is true.

:::caution Deprecated
Using `useSystemFonts` is no longer supported, now exoflex use system fonts by default.
:::

### skipFontsLoading

Type: `boolean`  
Default: `false`  
To disable the automatic fonts loading, set to true.

### LoadingPlaceholder

Type: `ComponentType<{ theme: Theme }>`  
Default: [LoadingPlaceholder](https://github.com/kodefox/infra/blob/898cb887fdf1db781de52a57ff40aa6564105f2c/packages/exoflex/src/components/LoadingPlaceholder.tsx)  
Component rendered during loading the custom fonts. Only relevant when `skipFontsLoading` is false.

