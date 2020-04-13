(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),i=n(8),a=(n(0),n(250)),o={id:"activityIndicator",title:"Activity Indicator"},c={id:"activityIndicator",title:"Activity Indicator",description:"Activity indicator is used to present progress of some activity in the app.",source:"@site/docs/activity-indicator.md",permalink:"/exoflex/docs/activityIndicator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/activity-indicator.md",sidebar:"someSidebar",previous:{title:"Accordion",permalink:"/exoflex/docs/accordion"},next:{title:"Avatar.Icon",permalink:"/exoflex/docs/avatarIcon"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"animating",id:"animating",children:[]},{value:"color",id:"color",children:[]},{value:"size",id:"size",children:[]},{value:"hidesWhenStopped",id:"hideswhenstopped",children:[]},{value:"style",id:"style",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Activity indicator is used to present progress of some activity in the app."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),'function ActivityIndicatorExample() {\n  return (\n    <Provider>\n      <ActivityIndicator style={{ marginVertical: 10 }} />\n      <ActivityIndicator size="large" color="salmon" />\n    </Provider>\n  );\n}\n')),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"animating"},"animating"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"true"),Object(a.b)("br",{parentName:"p"}),"\n","Whether to show the indicator or hide it."),Object(a.b)("h3",{id:"color"},"color"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"string"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"Theme primary color"),Object(a.b)("br",{parentName:"p"}),"\n","The color of the spinner. Will use the primary color from the theme."),Object(a.b)("h3",{id:"size"},"size"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"'small'")," | ",Object(a.b)("inlineCode",{parentName:"p"},"'large'")," | ",Object(a.b)("inlineCode",{parentName:"p"},"number"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"'small'"),Object(a.b)("br",{parentName:"p"}),"\n","Size of the indicator."),Object(a.b)("h3",{id:"hideswhenstopped"},"hidesWhenStopped"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"true"),Object(a.b)("br",{parentName:"p"}),"\n","Whether the indicator should hide when not animating."),Object(a.b)("h3",{id:"style"},"style"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>"),Object(a.b)("br",{parentName:"p"}),"\n","Additional style for the container."))}b.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||a;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);