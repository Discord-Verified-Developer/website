"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[51855],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(r),f=n,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:n,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))i.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$userDefaultAvatar",description:"$userDefaultAvatar devolver\xe1 el avatar de usuario predeterminado de Discord del usuario.",id:"userDefaultAvatar"},v=void 0,y={unversionedId:"functions/user-related/userDefaultAvatar",id:"version-6.4.0/functions/user-related/userDefaultAvatar",title:"$userDefaultAvatar",description:"$userDefaultAvatar devolver\xe1 el avatar de usuario predeterminado de Discord del usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/userDefaultAvatar.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userDefaultAvatar",permalink:"/es/docs/functions/user-related/userDefaultAvatar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$userDefaultAvatar",description:"$userDefaultAvatar devolver\xe1 el avatar de usuario predeterminado de Discord del usuario.",id:"userDefaultAvatar"},sidebar:"docs",previous:{title:"$userCustomStatus",permalink:"/es/docs/functions/user-related/userCustomStatus"},next:{title:"$userExists",permalink:"/es/docs/functions/user-related/userExists"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},D="wrapper";function k(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(D,d(c(c({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$userDefaultAvatar")," devolver\xe1 el avatar predeterminado del usuario de Discord por defecto."),(0,a.kt)("h2",c({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$userDefaultAvatar[usuarioID?]\n")),(0,a.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"usarioID?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"El ID del usuario."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto devolver\xe1 tu Avatar de Usuario predeterminado de Discord:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userDefaultAvatar',\n    code: `\n  $userDefaultAvatar[$authorID]\n  `\n});\n")))}k.isMDXComponent=!0}}]);