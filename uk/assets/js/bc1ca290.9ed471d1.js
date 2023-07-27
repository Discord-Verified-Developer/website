"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||l;return r?a.createElement(m,u(u({ref:t},c),{},{components:r})):a.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,u[1]=s;for(var i=2;i<l;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>D,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>l(e,u(t)),d=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$userDefaultAvatar",description:"$userDefaultAvatar will return the given user's default Discord User Avatar.",id:"userDefaultAvatar"},v=void 0,y={unversionedId:"functions/user-related/userDefaultAvatar",id:"version-6.4.0/functions/user-related/userDefaultAvatar",title:"$userDefaultAvatar",description:"$userDefaultAvatar will return the given user's default Discord User Avatar.",source:"@site/versioned_docs/version-6.4.0/functions/user-related/userDefaultAvatar.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userDefaultAvatar",permalink:"/uk/docs/functions/user-related/userDefaultAvatar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$userDefaultAvatar",description:"$userDefaultAvatar will return the given user's default Discord User Avatar.",id:"userDefaultAvatar"},sidebar:"docs",previous:{title:"$userCustomStatus",permalink:"/uk/docs/functions/user-related/userCustomStatus"},next:{title:"$userExists",permalink:"/uk/docs/functions/user-related/userExists"}},g={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:b},k="wrapper";function D(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,a.kt)(k,f(p(p({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$userDefaultAvatar")," will return the given user's default Discord User Avatar."),(0,a.kt)("h2",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$userDefaultAvatar[userID?]\n")),(0,a.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userID?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The ID of the user."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return your default Discord User Avatar:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userDefaultAvatar',\n    code: `\n  $userDefaultAvatar[$authorID]\n  `\n});\n")))}D.isMDXComponent=!0}}]);