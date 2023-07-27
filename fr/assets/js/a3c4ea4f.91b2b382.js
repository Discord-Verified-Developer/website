"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>N,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$uri",description:"$uri va encoder ou d\xe9coder une URL.",id:"uri"},v=void 0,y={unversionedId:"functions/info-related/uri",id:"version-6.4.0/functions/info-related/uri",title:"$uri",description:"$uri va encoder ou d\xe9coder une URL.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/uri.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/uri",permalink:"/fr/docs/functions/info-related/uri",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$uri",description:"$uri va encoder ou d\xe9coder une URL.",id:"uri"},sidebar:"docs",previous:{title:"$uptime",permalink:"/fr/docs/functions/info-related/uptime"},next:{title:"$vanityUses",permalink:"/fr/docs/functions/info-related/vanityUses"}},b={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:g},O="wrapper";function N(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,s(d(d({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$uri")," va encoder ou d\xe9coder une URL."),(0,n.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$uri[texte;type?]\n")),(0,n.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type de texte"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Libell\xe9"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"texte"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Texte \xe0 encoder/d\xe9coder."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Que faire avec le texte donn\xe9. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"encode")," (par d\xe9faut) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"decode")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela va encoder un texte donn\xe9 :"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'encode',\n    code: `\n  $uri[aoi.js est g\xe9nial :);encode]\n  `\n});\n")),(0,n.kt)("p",null,"Ceci va d\xe9coder un texte donn\xe9 :"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'decode',\n    code: `\n  $uri[aoi.js%20est%20g\xe9nial%20%3A);decode]\n  `\n});\n")))}N.isMDXComponent=!0}}]);