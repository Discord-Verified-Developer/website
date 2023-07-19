"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49071],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),y=n,f=s["".concat(u,".").concat(y)]||s[y]||d[y]||o;return t?a.createElement(f,l(l({ref:r},p),{},{components:t})):a.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},84815:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&p(e,t,r[t]);return e},d=(e,r)=>o(e,l(r)),y=(e,r)=>{var t={};for(var a in e)u.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$arrayLength",description:"$arrayLength retournera la longueur d'un tableau donn\xe9.",id:"arrayLength"},m=void 0,g={unversionedId:"functions/array-related/arrayLength",id:"version-6.4.0/functions/array-related/arrayLength",title:"$arrayLength",description:"$arrayLength retournera la longueur d'un tableau donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayLength.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayLength",permalink:"/fr/docs/functions/array-related/arrayLength",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$arrayLength",description:"$arrayLength retournera la longueur d'un tableau donn\xe9.",id:"arrayLength"},sidebar:"docs",previous:{title:"$arrayLastIndexOf",permalink:"/fr/docs/functions/array-related/arrayLastIndexOf"},next:{title:"$arrayMap",permalink:"/fr/docs/functions/array-related/arrayMap"}},b={},h=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],v={toc:h},O="wrapper";function k(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(O,d(s(s({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayLength")," retournera la longueur d'un tableau donn\xe9."),(0,a.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayLength[nom]\n")),(0,a.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-length",\n    code: `\n  $arrayLength[tableau]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n});\n')))}k.isMDXComponent=!0}}]);