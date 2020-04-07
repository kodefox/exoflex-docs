---
id: portalHost 
title: Portal.Host 
---

Portal host renders all of its children Portal elements. For example, you can wrap a screen in Portal.Host to render items above the screen. If you're using the Provider component, it already includes `Portal.Host`.

:::note NOTE
Here any Portal elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a Modal.
:::

## Props

### children (required)

Type: `React.ReactNode`  
Component inside the Portal Host.

