"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$sendDm",description:"$sendDm enviar\xe1 un mensaje directo a un usuario dado.",id:"sendDm"},b=void 0,v={unversionedId:"functions/interaction-related/sendDm",id:"version-6.4.0/functions/interaction-related/sendDm",title:"$sendDm",description:"$sendDm enviar\xe1 un mensaje directo a un usuario dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/sendDm.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/sendDm",permalink:"/es/docs/functions/interaction-related/sendDm",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$sendDm",description:"$sendDm enviar\xe1 un mensaje directo a un usuario dado.",id:"sendDm"},sidebar:"docs",previous:{title:"$respawnAllShards",permalink:"/es/docs/functions/interaction-related/respawnAllShards"},next:{title:"$sendTTS",permalink:"/es/docs/functions/interaction-related/sendTTS"}},g={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function j(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,p(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$sendDm")," enviar\xe1 un mensaje directo a un usuario determinado."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$sendDm[mensaje;ID de usuario?;ID de retorno?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"mensaje"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El contenido del mensaje directo."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"usarioID?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El usuario que recibir\xe1 el DM."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID de retorno?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"booleano"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\xbfDevolver ID del mensaje?  ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto enviar\xe1 un DM al autor del comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendDm',\n    code: `\n   $sendDm[Hello!;$authorID;false]  \n  `\n});\n")))}j.isMDXComponent=!0}}]);