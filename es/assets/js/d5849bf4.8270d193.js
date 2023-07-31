"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16767],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(b,o(o({ref:n},p),{},{components:t})):a.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>j,frontMatter:()=>b,metadata:()=>g,toc:()=>v});var a=t(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const b={title:"$isChannelManageable",description:"$isChannelManageable comprobar\xe1 si el canal es manejable o no.",id:"isChannelManageable"},f=void 0,g={unversionedId:"functions/util-related/isChannelManageable",id:"version-6.4.0/functions/util-related/isChannelManageable",title:"$isChannelManageable",description:"$isChannelManageable comprobar\xe1 si el canal es manejable o no.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isChannelManageable.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isChannelManageable",permalink:"/es/docs/functions/util-related/isChannelManageable",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$isChannelManageable",description:"$isChannelManageable comprobar\xe1 si el canal es manejable o no.",id:"isChannelManageable"},sidebar:"docs",previous:{title:"$isBot",permalink:"/es/docs/functions/util-related/isBot"},next:{title:"$isCustomEmoji",permalink:"/es/docs/functions/util-related/isCustomEmoji"}},y={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:v},O="wrapper";function j(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,a.kt)(O,d(u(u({},h),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$isChannelManageable")," comprobar\xe1 si el canal es manejable o no."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$isChannelManageable[channelID?]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"canalID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID del canal para comprobar si el canal es manejable o no."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"no")))),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto devolver\xe1 ",(0,a.kt)("inlineCode",{parentName:"p"},"verdadero")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"falso")," dependiendo de si el canal en el que est\xe1s ejecutando el comando es manejable:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isChannelManageable',\n    code: `\n  $isChannelManageable[$channelID]\n  `\n});\n")))}j.isMDXComponent=!0}}]);