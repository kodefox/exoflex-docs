(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(8),a=(n(0),n(250)),i={id:"contributing",title:"Contributing"},c={id:"contributing",title:"Contributing",description:"Exoflex is hosted in our Infra repo and that repo houses several packages, so this guide only covers the general direction.",source:"@site/docs/contributing.md",permalink:"/exoflex/docs/contributing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/contributing.md",sidebar:"someSidebar",previous:{title:"Theming",permalink:"/exoflex/docs/theming"},next:{title:"Accordion",permalink:"/exoflex/docs/accordion"}},l=[{value:"General development workflow",id:"general-development-workflow",children:[]},{value:"Commit message convention",id:"commit-message-convention",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Exoflex is hosted in our Infra repo and that repo houses several packages, so this guide only covers the general direction.\nFor details, please refer to specific package contribution guidelines."),Object(a.b)("h2",{id:"general-development-workflow"},"General development workflow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Fork the repo."),Object(a.b)("li",{parentName:"ol"},"Make your changes in your local branch."),Object(a.b)("li",{parentName:"ol"},"If applicable, also add test to your changes."),Object(a.b)("li",{parentName:"ol"},"Make sure the tests are passing before creating a PR."),Object(a.b)("li",{parentName:"ol"},"Push and then create a PR in the repo."),Object(a.b)("li",{parentName:"ol"},"Wait for status checks to pass before requesting a review.")),Object(a.b)("h2",{id:"commit-message-convention"},"Commit message convention"),Object(a.b)("p",null,"This repo follows ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.conventionalcommits.org/en"}),"conventional commits specification")," for the commit message."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"build"),": build related changes, e.g. change tsconfig target."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"chore"),": non-user facing code and tooling changes, e.g. update dependencies."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ci"),": CI related changes, e.g. change circle CI config."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"docs"),": changes in documentation, e.g. add Button example usage."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"feat"),": new features, e.g. add Carousel component."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fix"),": bug fixes, e.g. fix missing icon in Toast."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"perf"),": changes for improving performance, e.g. optimize Carousel render."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"refactor"),": code refactor, e.g. refactor navigation history."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"revert"),': revert commits, e.g. revert "use momentjs for date formatting".'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"style"),": code styling changes, e.g. run prettier on the repo."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"test"),": add or updating tests, e.g. add test for init command.")),Object(a.b)("p",null,"Make sure the commit message and PR title matches the commit message convention format."))}p.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);