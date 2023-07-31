"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25408],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(y,i(i({ref:r},s),{},{components:t})):a.createElement(y,i({ref:r},s))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51619:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>y,metadata:()=>g,toc:()=>v});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&s(e,t,r[t]);if(o)for(var t of o(r))p.call(r,t)&&s(e,t,r[t]);return e},d=(e,r)=>l(e,i(r)),m=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$createArray",description:"$createArray will create a new array with given elements.",id:"createArray"},f=void 0,g={unversionedId:"functions/array-related/createArray",id:"version-6.4.0/functions/array-related/createArray",title:"$createArray",description:"$createArray will create a new array with given elements.",source:"@site/versioned_docs/version-6.4.0/functions/array-related/createArray.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/createArray",permalink:"/docs/functions/array-related/createArray",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{title:"$createArray",description:"$createArray will create a new array with given elements.",id:"createArray"},sidebar:"docs",previous:{title:"$arrayUnshift",permalink:"/docs/functions/array-related/arrayUnshift"},next:{title:"$deleteArray",permalink:"/docs/functions/array-related/deleteArray"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:v},O="wrapper";function w(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(O,d(u(u({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createArray")," will create a new array with given elements."),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$createArray[name;...elements]\n")),(0,a.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"...elements"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Elements to add."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-create",\n    code: `\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}w.isMDXComponent=!0}}]);