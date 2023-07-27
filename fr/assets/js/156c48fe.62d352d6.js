"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>P,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$cpu",description:"$cpu retournera l'utilisation CPU d'un processeur ou d'un syst\xe8me d'exploitation.",id:"cpu"},y=void 0,b={unversionedId:"functions/info-related/cpu",id:"version-6.4.0/functions/info-related/cpu",title:"$cpu",description:"$cpu retournera l'utilisation CPU d'un processeur ou d'un syst\xe8me d'exploitation.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/cpu.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/cpu",permalink:"/fr/docs/functions/info-related/cpu",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$cpu",description:"$cpu retournera l'utilisation CPU d'un processeur ou d'un syst\xe8me d'exploitation.",id:"cpu"},sidebar:"docs",previous:{title:"$commandsCount",permalink:"/fr/docs/functions/info-related/commandsCount"},next:{title:"$customEmoji",permalink:"/fr/docs/functions/info-related/customEmoji"}},v={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:g},k="wrapper";function P(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(k,d(s(s({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$cpu")," retournera l'utilisation du processeur d'un processeur ou d'un syst\xe8me d'exploitation."),(0,n.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$cpu[option?]\n")),(0,n.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L'option dont l'utilisation du CPU sera retourn\xe9e. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"os")," - renvoie l'utilisation du CPU du bot ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"process")," - retourne l'utilisation du processeur."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci retournera l'utilisation du CPU de votre bot :"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cpu',\n    code: `\n  OS : $cpu[os] \n  Processeur : $cpu[process] \n  `\n});\n")))}P.isMDXComponent=!0}}]);