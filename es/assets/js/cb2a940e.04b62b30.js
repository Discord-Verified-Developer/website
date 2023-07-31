"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$webhookUpdate",description:"$webhookUpdate contiene datos para el canal en el que se actualizaron los pines del canal.\n (webhookUpdate evento)",id:"webhookUpdate"},b=void 0,v={unversionedId:"functions/event-related/webhookUpdate",id:"version-6.4.0/functions/event-related/webhookUpdate",title:"$webhookUpdate",description:"$webhookUpdate contiene datos para el canal en el que se actualizaron los pines del canal.\n (webhookUpdate evento)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/webhookUpdate.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/webhookUpdate",permalink:"/es/docs/functions/event-related/webhookUpdate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$webhookUpdate",description:"$webhookUpdate contiene datos para el canal en el que se actualizaron los pines del canal.\n (webhookUpdate evento)",id:"webhookUpdate"},sidebar:"docs",previous:{title:"$timeoutData",permalink:"/es/docs/functions/event-related/timeoutData"},next:{title:"$addEmoji",permalink:"/es/docs/functions/guild-related/addEmoji"}},k={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],h={toc:y},w="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(w,u(s(s({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un canal ",(0,r.kt)("inlineCode",{parentName:"p"},"$webhookUpdate")," en el que se actualiz\xf3 el webhook. (evento webhookUpdate )"),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$webhookUpdate[opci\xf3n]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"opci\xf3n"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Opci\xf3n a recuperar."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))))}O.isMDXComponent=!0}}]);