"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[f]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>a(e,l(t)),d=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$fileExists",description:"$fileExists will check if a given file exists.",id:"fileExists"},y=void 0,g={unversionedId:"functions/misc-related/fileExists",id:"version-6.4.0/functions/misc-related/fileExists",title:"$fileExists",description:"$fileExists will check if a given file exists.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/fileExists.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/fileExists",permalink:"/uk/docs/functions/misc-related/fileExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$fileExists",description:"$fileExists will check if a given file exists.",id:"fileExists"},sidebar:"docs",previous:{title:"$executionTime",permalink:"/uk/docs/functions/misc-related/executionTime"},next:{title:"$fileSize",permalink:"/uk/docs/functions/misc-related/fileSize"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:b},x="wrapper";function O(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(x,u(f(f({},k),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$fileExists")," will check if a given file exists."),(0,n.kt)("h2",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$fileExists[path]\n")),(0,n.kt)("h2",f({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",f({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"File path."),(0,n.kt)("td",f({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",f({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will check if a file called ",(0,n.kt)("inlineCode",{parentName:"p"},"index.js")," exists in your directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "fileExists",\n    code: `\n  $fileExists[./index.js]\n  `\n});\n')))}O.isMDXComponent=!0}}]);