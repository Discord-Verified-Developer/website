"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,f=d["".concat(c,".").concat(y)]||d[y]||s[y]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},66646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>A,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),y=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$arrayAt",description:"$arrayAt \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0438\u044e) \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d. \u0412\u0435\u0440\u043d\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e, \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d.",id:"arrayAt"},m=void 0,b={unversionedId:"functions/array-related/arrayAt",id:"version-6.4.0/functions/array-related/arrayAt",title:"$arrayAt",description:"$arrayAt \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0438\u044e) \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d. \u0412\u0435\u0440\u043d\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e, \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayAt.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayAt",permalink:"/ru/docs/functions/array-related/arrayAt",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$arrayAt",description:"$arrayAt \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0438\u044e) \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d. \u0412\u0435\u0440\u043d\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e, \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d.",id:"arrayAt"},sidebar:"docs",previous:{title:"Soundcloud ID",permalink:"/ru/docs/guides/other/soundcloudid"},next:{title:"$arrayConcat",permalink:"/ru/docs/functions/array-related/arrayConcat"}},g={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:v},O="wrapper";function A(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.kt)(O,s(d(d({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayAt")," \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0438\u044e) \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d. \u0412\u0435\u0440\u043d\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e, \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0430\u0439\u0434\u0435\u043d."),(0,a.kt)("h2",d({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayAt[\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430;\u0438\u043d\u0434\u0435\u043a\u0441]\n")),(0,a.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u0435\u043d"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u041c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0438\u043d\u0434\u0435\u043a\u0441"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"li"},"Aoi.dashboard"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-at",\n    code: `\n  $arrayAt[Aoi;3]\n\n  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]\n  `\n    // \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 "Aoi.dashboard"\n});\n')))}A.isMDXComponent=!0}}]);