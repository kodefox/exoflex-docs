---
id: installation
title: Installation
sidebar_label: Installation
---

## Pre-requisites

This library uses `hooks` so you need to use at least:

- `react` version >= `16.8.0`
- `react-native` version >= `0.59.0`

This library also required you to use `react-native-svg` >= `9.3.3`. But if you use `Expo` you could install it by running:

```sh
expo install react-native-svg
```

If you are not using `Expo`, you should install it by following [this step](https://github.com/react-native-community/react-native-svg/#installation).

Exoflex includes automatic fonts loading using `expo-font`. If you want to opt-out and handle the font loading manually, use [babel-plugin-optional-require](https://github.com/satya164/babel-plugin-optional-require).

## Installation

To install this library, you could use npm or yarn:

```bash npm2yarn
npm install exoflex
```

For bare React Native project, you also need to install `react-native-vector-icons`. For `react-native<0.60.0`, you need to link the library first.

If you are using TypeScript, naviflex is built using TypeScript and we shipped it along with the `.d.ts` file, so you do not have to install `@types/exoflex`.
