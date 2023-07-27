"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26198],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),d=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return t?a.createElement(b,o(o({ref:r},p),{},{components:t})):a.createElement(b,o({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30142:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>N,frontMatter:()=>b,metadata:()=>v,toc:()=>y});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))d.call(r,t)&&p(e,t,r[t]);return e},c=(e,r)=>l(e,o(r)),m=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};const b={title:"$resetUserVar",description:"$resetUserVar establecer\xe1 una variable de usuario determinada a su valor predeterminado de un gremio determinado.",id:"resetUserVar"},f=void 0,v={unversionedId:"functions/variables-related/resetUserVar",id:"version-6.4.0/functions/variables-related/resetUserVar",title:"$resetUserVar",description:"$resetUserVar establecer\xe1 una variable de usuario determinada a su valor predeterminado de un gremio determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/resetUserVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/resetUserVar",permalink:"/es/docs/functions/variables-related/resetUserVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$resetUserVar",description:"$resetUserVar establecer\xe1 una variable de usuario determinada a su valor predeterminado de un gremio determinado.",id:"resetUserVar"},sidebar:"docs",previous:{title:"$resetGuildVar",permalink:"/es/docs/functions/variables-related/resetGuildVar"},next:{title:"$setChannelVar",permalink:"/es/docs/functions/variables-related/setChannelVar"}},g={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function N(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(O,c(u(u({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$resetUserVar")," establecer\xe1 una variable de usuario determinada a su valor predeterminado de un gremio dado."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$resetUserVar[varname;guildID?;table?]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nombre variable."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"servidorID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID del gremio."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"tabla?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Tabla variable."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'Esto restablecer\xe1 una variable llamada "Ejemplo":'),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "resetUserVar",\n    code: `\n    $resetUserVar[Example;$guildID;main]\n    `\n});\n')))}N.isMDXComponent=!0}}]);