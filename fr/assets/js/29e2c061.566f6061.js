"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,b=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>C,frontMatter:()=>b,metadata:()=>v,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$banCount",description:"$banCount renverra le nombre d'utilisateurs bannis d'un serveur sp\xe9cifique.",id:"banCount"},m=void 0,v={unversionedId:"functions/info-related/banCount",id:"version-6.4.0/functions/info-related/banCount",title:"$banCount",description:"$banCount renverra le nombre d'utilisateurs bannis d'un serveur sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/banCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/banCount",permalink:"/fr/docs/functions/info-related/banCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$banCount",description:"$banCount renverra le nombre d'utilisateurs bannis d'un serveur sp\xe9cifique.",id:"banCount"},sidebar:"docs",previous:{title:"$allMembersCount",permalink:"/fr/docs/functions/info-related/allMembersCount"},next:{title:"$boostingSince",permalink:"/fr/docs/functions/info-related/boostingSince"}},y={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Veuillez noter que votre bot n\xe9cessite des autorisations pour <code>VIEW_AUDIT_LOG</code>",id:"veuillez-noter-que-votre-bot-n\xe9cessite-des-autorisations-pour-view_audit_log",level:4},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:g},k="wrapper";function C(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(c(c({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$banCount")," renverra le nombre d'utilisateurs bannis d'un serveur sp\xe9cifique."),(0,r.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$banCount[IDserveur?]\n")),(0,r.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID du serveur dont vous voulez r\xe9cup\xe9rer le nombre d'utilisateurs bannis."),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Faux")))),(0,r.kt)("h4",c({},{id:"veuillez-noter-que-votre-bot-n\xe9cessite-des-autorisations-pour-view_audit_log"}),"Veuillez noter que votre bot n\xe9cessite des autorisations pour ",(0,r.kt)("inlineCode",{parentName:"h4"},"VIEW_AUDIT_LOG")),(0,r.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela renverra le nombre d'utilisateurs bannis dans votre guilde :"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'banCount',\n    code: `\n  $banCount\n  `\n});\n")))}C.isMDXComponent=!0}}]);