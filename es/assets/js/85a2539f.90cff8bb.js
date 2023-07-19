"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>x,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&s(e,a,t[a]);return e},m=(e,t)=>l(e,o(t)),u=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a};const f={title:"$replaceText",description:"$replaceText reemplazar\xe1 segmentos espec\xedficos de texto.",id:"replaceText"},k=void 0,g={unversionedId:"functions/util-related/replaceText",id:"version-6.4.0/functions/util-related/replaceText",title:"$replaceText",description:"$replaceText reemplazar\xe1 segmentos espec\xedficos de texto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/replaceText.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceText",permalink:"/es/docs/functions/util-related/replaceText",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$replaceText",description:"$replaceText reemplazar\xe1 segmentos espec\xedficos de texto.",id:"replaceText"},sidebar:"docs",previous:{title:"$repeatMessage",permalink:"/es/docs/functions/util-related/repeatMessage"},next:{title:"$replaceTextWithRegex",permalink:"/es/docs/functions/util-related/replaceTextWithRegex"}},v={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo avanzado",id:"ejemplo-avanzado",level:3}],y={toc:b},N="wrapper";function x(e){var t=e,{components:a}=t,n=u(t,["components"]);return(0,r.kt)(N,m(d(d({},y),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$replaceText")," reemplazar\xe1 segmentos espec\xedficos de texto."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$replaceText[text;replacer;replaceTo;times?]\n")),(0,r.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Texto que desea modificar."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"replacer"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"El texto que ser\xe1 reemplazado."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"reemplazar a"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"El texto que reemplazar\xe1 ",(0,r.kt)("inlineCode",{parentName:"td"},"replacer"),"."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\xbfveces?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Cu\xe1ntas veces ",(0,r.kt)("inlineCode",{parentName:"td"},"replaceTo")," reemplaza a ",(0,r.kt)("inlineCode",{parentName:"td"},"replacer"),". / Usa ",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," para el \xfaltimo."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto reemplazar\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," con ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," y la salida ser\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"burro"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[Monkey;M;D]\n  `\n});\n")),(0,r.kt)("h3",d({},{id:"ejemplo-avanzado"}),"Ejemplo avanzado"),(0,r.kt)("p",null,"Esto reemplazar\xe1 la palabra ",(0,r.kt)("inlineCode",{parentName:"p"},"caf\xe9")," dos veces usando el \xfaltimo ",(0,r.kt)("a",d({parentName:"p"},{href:"#parameters"}),"campo")," de ",(0,r.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[Me encanta beber caf\xe9, \xa1Coffee me da poder! Coffee es malo para mi salud.;Coffee;jugo naranja;2]\n  `\n});\n")),(0,r.kt)("p",null,"Esto reemplazar\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ferel")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"son")," usando m\xfaltiples ",(0,r.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are no]\n  `\n});\n")))}x.isMDXComponent=!0}}]);