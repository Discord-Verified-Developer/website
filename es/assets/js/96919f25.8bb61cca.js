"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const g={title:"$argsCheck",description:"$argsCheck verificar\xe1 los argumentos de lo que el usuario escribi\xf3 y el requerido, si los requisitos no se cumplieron, devolver\xe1 un mensaje de error.",id:"argsCheck"},k=void 0,f={unversionedId:"functions/util-related/argsCheck",id:"version-6.4.0/functions/util-related/argsCheck",title:"$argsCheck",description:"$argsCheck verificar\xe1 los argumentos de lo que el usuario escribi\xf3 y el requerido, si los requisitos no se cumplieron, devolver\xe1 un mensaje de error.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/argsCheck.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/argsCheck",permalink:"/es/docs/functions/util-related/argsCheck",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$argsCheck",description:"$argsCheck verificar\xe1 los argumentos de lo que el usuario escribi\xf3 y el requerido, si los requisitos no se cumplieron, devolver\xe1 un mensaje de error.",id:"argsCheck"},sidebar:"docs",previous:{title:"$usersWithRole",permalink:"/es/docs/functions/user-related/usersWithRole"},next:{title:"$argsSlice",permalink:"/es/docs/functions/util-related/argsSlice"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Operadores matem\xe1ticos",id:"operadores-matem\xe1ticos",level:4},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:y},N="wrapper";function h(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(N,d(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$argsCheck")," comprobar\xe1 los argumentos del usuario escritos y el requerido, si no se cumplen los requisitos, devolver\xe1 un mensaje de error ."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$argsCheck[condicion;mensaje del error]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"condici\xf3n"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Condici\xf3n a realizar."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Mensaje de error"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Mensaje de error si la condici\xf3n no se ha cumplido."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h4",p({},{id:"operadores-matem\xe1ticos"}),"Operadores matem\xe1ticos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Operador"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Las expresiones matem\xe1ticas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"=="),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"es igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"!="),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"no es igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"<="),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"es inferior o igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),">","="),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"mayor que o igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),">"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"es superior a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"<"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"menos que")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\\ "),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"|"," O l\xf3gico")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"&&"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"conjunci\xf3n causal")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Devuelve: Mayor que 2 argumentos si la condici\xf3n se cumple, de lo contrario devolver\xe1 un mensaje de error."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "argsCheck",\n    code: `\n  \xa1Tienes m\xe1s de dos argumentos, bien!\n\n  $argsCheck[>2;Tienes menos de dos argumentos!]\n  `\n});\n')))}h.isMDXComponent=!0}}]);