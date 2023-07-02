"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=o,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={title:"$mentionedRoles",description:"$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.",id:"mentionedRoles"},i=void 0,l={unversionedId:"functions/util-related/mentionedRoles",id:"version-6.3.0/functions/util-related/mentionedRoles",title:"$mentionedRoles",description:"$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.",source:"@site/versioned_docs/version-6.3.0/functions/util-related/mentionedRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedRoles",permalink:"/docs/functions/util-related/mentionedRoles",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Leref",lastUpdatedAt:1688325984,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$mentionedRoles",description:"$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.",id:"mentionedRoles"},sidebar:"docs",previous:{title:"$mentionedChannelsCount",permalink:"/docs/functions/util-related/mentionedChannelsCount"},next:{title:"$mentionedRolesCount",permalink:"/docs/functions/util-related/mentionedRolesCount"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:m},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$mentionedRoles")," will return the ID of a role retrieved from a message."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$mentionedRoles[index]\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"index"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The index of the argument."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will return the ID of the ",(0,o.kt)("strong",{parentName:"p"},"first")," role mention if you attempt to mention any role in this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'mentionedRoles',\n    code: `\n  $mentionedRoles[1]\n  `\n});\n")))}p.isMDXComponent=!0}}]);