(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(8),a=(n(0),n(250)),o={id:"richRadioGroup",title:"RichRadio.Group"},l={id:"richRadioGroup",title:"RichRadio.Group",description:"Controlled Rich Radio Button group allows to control a group of rich radio items. Similar with radio button group but with a richer looks.",source:"@site/docs/rich-radio-group.md",permalink:"/exoflex/docs/richRadioGroup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/rich-radio-group.md",sidebar:"someSidebar",previous:{title:"Radio.Group",permalink:"/exoflex/docs/radioGroup"},next:{title:"RichRadio.Item",permalink:"/exoflex/docs/richRadioItem"}},c=[{value:"Usage",id:"usage",children:[{value:"Basic",id:"basic",children:[]},{value:"Custom",id:"custom",children:[]}]},{value:"Props",id:"props",children:[{value:"data (required)",id:"data-required",children:[]},{value:"keyExtractor (required)",id:"keyextractor-required",children:[]},{value:"renderItem (required)",id:"renderitem-required",children:[]},{value:"style",id:"style",children:[]},{value:"contentContainerStyle",id:"contentcontainerstyle",children:[]},{value:"testID",id:"testid",children:[]}]}],d={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Controlled Rich Radio Button group allows to control a group of rich radio items. Similar with radio button group but with a richer looks."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"basic"},"Basic"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"function Basic() {\n  let [size, setSize] = useState('');\n  let [color, setColor] = useState('');\n\n  const DATA = [\n    { label: 'S', value: 'small' },\n    { label: 'M', value: 'medium' },\n    { label: 'L', value: 'large' },\n  ];\n\n  const COLORS = [\n    { label: 'Red', value: 'red' },\n    { label: 'Green', value: 'green' },\n    { label: 'Blue', value: 'blue' },\n    { label: 'Purple', value: 'purple' },\n    { label: 'Orange', value: 'orange' },\n    { label: 'Yellow', value: 'yellow' },\n    { label: 'Maroon', value: 'maroon' },\n    { label: 'Grey', value: 'grey' },\n    { label: 'Black', value: 'black' },\n    { label: 'Brown', value: 'brown' },\n  ];\n\n  return (\n    <Provider>\n      <Title style={{ marginBottom: 10 }}>Sizes</Title>\n      <RichRadio.Group\n        data={DATA}\n        keyExtractor={(item) => item.label}\n        renderItem={({ item, index }) => (\n          <RichRadio.Item\n            firstItem={index === 0}\n            label={item.label}\n            selected={item.value === size}\n            onPress={() => setSize(item.value)}\n          />\n        )}\n        style={{ marginBottom: 30 }}\n      />\n      <Title style={{ marginBottom: 10 }}>Colors</Title>\n      <RichRadio.Group\n        data={COLORS}\n        keyExtractor={(item) => item.label}\n        renderItem={({ item, index }) => (\n          <RichRadio.Item\n            firstItem={index === 0}\n            label={item.label}\n            selected={item.value === color}\n            onPress={() => setColor(item.value)}\n          />\n        )}\n      />\n    </Provider>\n  );\n}\n")),Object(a.b)("h3",{id:"custom"},"Custom"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"function Custom() {\n  let [size, setSize] = useState('');\n\n  const DATA = [\n    { label: 'S', value: 'small' },\n    { label: 'M', value: 'medium' },\n    { label: 'L', value: 'large' },\n  ];\n\n  return (\n    <Provider>\n      <RichRadio.Group\n        data={DATA}\n        keyExtractor={(item) => item.label}\n        renderItem={({ item, index }) => (\n          <TouchableOpacity\n            activeOpacity={0.7}\n            onPress={() => setSize(item.value)}\n            style={{\n              flexDirection: 'row',\n              borderWidth: 1,\n              borderColor: item.value === size ? 'blue' : 'gray',\n              paddingVertical: 10,\n              paddingHorizontal: 15,\n              marginLeft: index === 0 ? 0 : 15,\n            }}\n          >\n            <IconButton\n              icon=\"home\"\n              size={14}\n              style={{\n                padding: 0,\n                margin: 0,\n                justifyContent: 'center',\n                alignItems: 'center',\n              }}\n            />\n\n            <Text weight=\"bold\" fontStyle=\"italic\" style={{ marginLeft: 10 }}>\n              {item.label}\n            </Text>\n          </TouchableOpacity>\n        )}\n      />\n    </Provider>\n  );\n}\n")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"data-required"},"data (required)"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"Array<T>"),Object(a.b)("br",{parentName:"p"}),"\n","Data that will be rendered as the items."),Object(a.b)("h3",{id:"keyextractor-required"},"keyExtractor (required)"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"(item: T, index: number) => string"),Object(a.b)("br",{parentName:"p"}),"\n","Used to extract a unique key for a given item at the specified index."),Object(a.b)("h3",{id:"renderitem-required"},"renderItem (required)"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"({ item, index }: { item: T; index: number }) => ReactNode"),Object(a.b)("br",{parentName:"p"}),"\n","Takes an item from ",Object(a.b)("inlineCode",{parentName:"p"},"data")," and renders it into the list."),Object(a.b)("h3",{id:"style"},"style"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>"),Object(a.b)("br",{parentName:"p"}),"\n","Additional style for ",Object(a.b)("inlineCode",{parentName:"p"},"ScrollView")," under the hood."),Object(a.b)("h3",{id:"contentcontainerstyle"},"contentContainerStyle"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>"),Object(a.b)("br",{parentName:"p"}),"\n","Additional style for the ",Object(a.b)("inlineCode",{parentName:"p"},"ScrollView")," under the hood."),Object(a.b)("h3",{id:"testid"},"testID"),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"string"),Object(a.b)("br",{parentName:"p"}),"\n","Used to locate this component in end-to-end tests."))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),u=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(o,".").concat(s)]||b[s]||p[s]||a;return n?i.a.createElement(m,l({ref:t},d,{components:n})):i.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);