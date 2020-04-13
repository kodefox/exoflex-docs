(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{235:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(1),o=t(8),a=(t(0),t(250)),i={id:"progressBar",title:"ProgressBar"},c={id:"progressBar",title:"ProgressBar",description:"An indicator used to present progress of some activity in the app.",source:"@site/docs/progress-bar.md",permalink:"/exoflex/docs/progressBar",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/progress-bar.md",sidebar:"someSidebar",previous:{title:"Portal.Host",permalink:"/exoflex/docs/portalHost"},next:{title:"Provider",permalink:"/exoflex/docs/provider"}},l=[{value:"Usage",id:"usage",children:[{value:"Basic",id:"basic",children:[]},{value:"Custom Color",id:"custom-color",children:[]},{value:"Indeterminate",id:"indeterminate",children:[]}]},{value:"Props",id:"props",children:[{value:"progress",id:"progress",children:[]},{value:"color",id:"color",children:[]},{value:"visible",id:"visible",children:[]},{value:"indeterminate",id:"indeterminate-1",children:[]},{value:"style",id:"style",children:[]}]}],p={rightToc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"An indicator used to present progress of some activity in the app."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"basic"},"Basic"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"function Basic() {\n  return (\n    <Provider>\n      <ProgressBar progress={0.4} />\n    </Provider>\n  );\n}\n")),Object(a.b)("h3",{id:"custom-color"},"Custom Color"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),'function CustomColor() {\n  return (\n    <Provider>\n      <ProgressBar progress={0.6} color="tomato" />\n    </Provider>\n  );\n}\n')),Object(a.b)("h3",{id:"indeterminate"},"Indeterminate"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"function Indeterminate() {\n  return (\n    <Provider>\n      <ProgressBar indeterminate />\n    </Provider>\n  );\n}\n")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"progress"},"progress"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"number"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"0"),Object(a.b)("br",{parentName:"p"}),"\n","Progress value (between 0 and 1)."),Object(a.b)("h3",{id:"color"},"color"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"string"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"Theme primary color"),Object(a.b)("br",{parentName:"p"}),"\n","Color of the progress bar."),Object(a.b)("h3",{id:"visible"},"visible"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"true"),Object(a.b)("br",{parentName:"p"}),"\n","Whether to show the ProgressBar (true, the default) or hide it (false)."),Object(a.b)("h3",{id:"indeterminate-1"},"indeterminate"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false"),Object(a.b)("br",{parentName:"p"}),"\n","Whether the progress bar will show indeterminate progress."),Object(a.b)("h3",{id:"style"},"style"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>"),Object(a.b)("br",{parentName:"p"}),"\n","Optional style for the progress bar."))}s.isMDXComponent=!0},250:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},b=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(m,c({ref:r},p,{components:t})):o.a.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);