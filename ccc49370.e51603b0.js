(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{246:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(302),l=t(361),c=t(276);var s=function(e){const{nextItem:a,prevItem:t}=e;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},n.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),n.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},n.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),n.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:r}=a;return n.a.createElement(i.a,{title:r.title,description:r.description},a&&n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(l.a,{frontMatter:t,metadata:r,isBlogPostPage:!0},n.a.createElement(a,null)),(r.nextItem||r.prevItem)&&n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(s,{nextItem:r.nextItem,prevItem:r.prevItem}))))))}},323:function(e,a,t){"use strict";t(22);var r=t(0),n=t.n(r),i=t(274),l=t(448),c=t(394),s=t(414),m=t(276),o=t(395),u=t(364),p=t(392),b=t(172),g=t.n(b);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const E={View:i.a,Animated:l.a,Image:c.a,TouchableOpacity:s.a};a.a={code:e=>{const{children:a}=e,t=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){h(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},n.a,{},E,{},p,{COLLAPSED_SPOILER:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ultricies erat, ut imperdiet orci. Vivamus accumsan elit orci, et facilisis ante molestie a. Pellentesque ut turpis lectus. Vestibulum metus elit, ultricies eu tellus a, imperdiet mollis ante. Integer pharetra odio eu ex malesuada dapibus. Nulla risus felis, imperdiet vitae vestibulum sed, feugiat sit amet risus. Vivamus quis auctor mauris. Nunc in auctor augue. Praesent maximus libero ac metus hendrerit tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sit amet pharetra metus. In lacinia nibh nunc, finibus ornare arcu accumsan tincidunt. Fusce quis varius magna. Ut malesuada nulla erat, eget vestibulum mi fermentum a. Nam mi urna, vestibulum sit amet pellentesque non, iaculis nec orci."});return"string"==typeof a?n.a.createElement(o.a,v({},e,{scope:t})):a},a:e=>/\.[^./]+$/.test(e.href)?n.a.createElement("a",e):n.a.createElement(m.a,e),pre:e=>n.a.createElement("div",v({className:g.a.mdxCodeBlock},e)),h1:Object(u.a)("h1"),h2:Object(u.a)("h2"),h3:Object(u.a)("h3"),h4:Object(u.a)("h4"),h5:Object(u.a)("h5"),h6:Object(u.a)("h6")}},361:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(272),l=t.n(i),c=t(250),s=t(276),m=t(323),o=t(173),u=t.n(o);const p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:i,isBlogPostPage:o=!1}=e,{date:b,permalink:g,tags:v}=r,{author:d,title:h}=t,E=t.author_url||t.authorURL,f=t.author_title||t.authorTitle,_=t.author_image_url||t.authorImageURL;return n.a.createElement("article",{className:o?void 0:"margin-bottom--xl"},(()=>{const e=o?"h1":"h2",a=b.substring(0,10).split("-"),t=a[0],r=p[parseInt(a[1],10)-1],i=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:l()("margin-bottom--sm",u.a.blogPostTitle)},o?h:n.a.createElement(s.a,{to:g},h)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},r," ",i,", ",t)),n.a.createElement("div",{className:"avatar margin-bottom--md"},_&&n.a.createElement("a",{className:"avatar__photo-link",href:E,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:_,alt:d})),n.a.createElement("div",{className:"avatar__intro"},d&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},d)),n.a.createElement("small",{className:"avatar__subtitle"},f)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:m.a},a)),(v.length>0||i)&&n.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),v.map(({label:e,permalink:a})=>n.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},e))),i&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(s.a,{to:r.permalink,"aria-label":`Read more about ${h}`},n.a.createElement("strong",null,"Read More")))))}}}]);