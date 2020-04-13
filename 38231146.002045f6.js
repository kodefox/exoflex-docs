(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(8),a=(n(0),n(250)),i={id:"toastControlled",title:"Controlled Toast"},c={id:"toastControlled",title:"Controlled Toast",description:"Toast is an alert like component that shows from the bottom of the screen",source:"@site/docs/toast-controlled.md",permalink:"/exoflex/docs/toastControlled",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/toast-controlled.md",sidebar:"someSidebar",previous:{title:"Time Picker",permalink:"/exoflex/docs/timePicker"},next:{title:"Uncontrolled Toast",permalink:"/exoflex/docs/toastUncontrolled"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"children",id:"children",children:[]},{value:"mode",id:"mode",children:[]},{value:"colors",id:"colors",children:[]},{value:"visible (required)",id:"visible-required",children:[]},{value:"showIcon",id:"showicon",children:[]},{value:"style",id:"style",children:[]},{value:"textStyle",id:"textstyle",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Toast is an alert like component that shows from the bottom of the screen"),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),'function ToastExample() {\n  let [visible, setVisible] = useState(false);\n\n  return (\n    <Provider>\n      <Button onPress={() => setVisible((value) => !value)} preset="secondary">\n        TOGGLE CONTROLLED TOAST\n      </Button>\n      <Toast visible={visible} mode="success">\n        CONTROLLED TOAST EXAMPLE\n      </Toast>\n    </Provider>\n  );\n}\n')),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"children"},"children"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"string"),Object(a.b)("br",{parentName:"p"}),"\n","Text to display in the toast."),Object(a.b)("h3",{id:"mode"},"mode"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"'info'")," | ",Object(a.b)("inlineCode",{parentName:"p"},"'warning'")," | ",Object(a.b)("inlineCode",{parentName:"p"},"'error'")," | ",Object(a.b)("inlineCode",{parentName:"p"},"'success'"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"'info'"),Object(a.b)("br",{parentName:"p"}),"\n","Determine the color and icon display."),Object(a.b)("h3",{id:"colors"},"colors"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"Record<mode, string>"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"{ info: Themes.colors.accent, warning: '#ffce00', error: '#dc544b', success: '#27a163' }"),Object(a.b)("br",{parentName:"p"}),"\n","Configure the color to use for each mode."),Object(a.b)("h3",{id:"visible-required"},"visible (required)"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n","will only display the toast when set to true."),Object(a.b)("h3",{id:"showicon"},"showIcon"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"true"),Object(a.b)("br",{parentName:"p"}),"\n","Set to false to hide the icon."),Object(a.b)("h3",{id:"style"},"style"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>"),Object(a.b)("br",{parentName:"p"}),"\n","Additional props passed to the toast container."),Object(a.b)("h3",{id:"textstyle"},"textStyle"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"StyleProp<TextStyle>"),Object(a.b)("br",{parentName:"p"}),"\n","Additional props passed to text."))}b.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);