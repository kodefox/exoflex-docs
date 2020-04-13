(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(8),o=(n(0),n(250)),a={id:"iconButton",title:"IconButton"},c={id:"iconButton",title:"IconButton",description:"An icon button is a button which displays only an icon without a label. By default button has 150% size of the icon.",source:"@site/docs/icon-button.md",permalink:"/exoflex/docs/iconButton",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/icon-button.md",sidebar:"someSidebar",previous:{title:"Drawer.Item",permalink:"/exoflex/docs/drawerItem"},next:{title:"Menu",permalink:"/exoflex/docs/menu"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"icon (required)",id:"icon-required",children:[]},{value:"color",id:"color",children:[]},{value:"size",id:"size",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"animated",id:"animated",children:[]},{value:"accessibilityLabel",id:"accessibilitylabel",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"style",id:"style",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An icon button is a button which displays only an icon without a label. By default button has 150% size of the icon."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),'function IconButtonExample() {\n  return (\n    <Provider>\n      <IconButton icon="camera" />\n      <IconButton icon="settings" onPress={() => {}} />\n    </Provider>\n  );\n}\n')),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"icon-required"},"icon (required)"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"IconSource"),Object(o.b)("br",{parentName:"p"}),"\n","Icon to display. Can only use ",Object(o.b)("inlineCode",{parentName:"p"},"MaterialCommunityIcons")," icons from the list. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://oblador.github.io/react-native-vector-icons/"}),"See icon list")),Object(o.b)("h3",{id:"color"},"color"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Color of the icon."),Object(o.b)("h3",{id:"size"},"size"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"24"),Object(o.b)("br",{parentName:"p"}),"\n","Size of the icon."),Object(o.b)("h3",{id:"disabled"},"disabled"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),Object(o.b)("br",{parentName:"p"}),"\n","Whether the button is disabled. A disabled button is greyed out and onPress is not called on touch."),Object(o.b)("h3",{id:"animated"},"animated"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"false"),Object(o.b)("br",{parentName:"p"}),"\n","Whether an icon change is animated."),Object(o.b)("h3",{id:"accessibilitylabel"},"accessibilityLabel"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Accessibility label for the button. This is read by the screen reader when the user taps the button."),Object(o.b)("h3",{id:"onpress"},"onPress"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"(e: GestureResponderEvent) => void"),Object(o.b)("br",{parentName:"p"}),"\n","Function to execute on press."),Object(o.b)("h3",{id:"style"},"style"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>"),Object(o.b)("br",{parentName:"p"}),"\n","Style for the icon."))}p.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||s[d]||o;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);