"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,f=d["".concat(i,".").concat(s)]||d[s]||y[s]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},27488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&u(e,r,t[r]);return e},y=(e,t)=>o(e,l(t)),s=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$arrayConcat",description:"$arrayConcat \u043e\u0431'\u0454\u0434\u043d\u0430\u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043c\u0430\u0441\u0438\u0432\u0456\u0432.",id:"arrayConcat"},m=void 0,b={unversionedId:"functions/array-related/arrayConcat",id:"version-6.4.0/functions/array-related/arrayConcat",title:"$arrayConcat",description:"$arrayConcat \u043e\u0431'\u0454\u0434\u043d\u0430\u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043c\u0430\u0441\u0438\u0432\u0456\u0432.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayConcat.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayConcat",permalink:"/uk/docs/functions/array-related/arrayConcat",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$arrayConcat",description:"$arrayConcat \u043e\u0431'\u0454\u0434\u043d\u0430\u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043c\u0430\u0441\u0438\u0432\u0456\u0432.",id:"arrayConcat"},sidebar:"docs",previous:{title:"$arrayAt",permalink:"/uk/docs/functions/array-related/arrayAt"},next:{title:"$arrayEvery",permalink:"/uk/docs/functions/array-related/arrayEvery"}},k={},v=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],g={toc:v},O="wrapper";function N(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(O,y(d(d({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayConcat")," \u043e\u0431'\u0454\u0434\u043d\u0430\u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043c\u0430\u0441\u0438\u0432\u0456\u0432."),(0,a.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayConcat[\u0440\u043e\u0437\u0434\u0456\u043b\u044c\u043d\u0438\u043a;...\u043c\u0430\u0441\u0438\u0432\u0438]\n")),(0,a.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u043e\u0437\u0434\u0456\u043b\u044c\u043d\u0438\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0420\u043e\u0437\u0434\u0456\u043b\u044c\u043d\u0438\u043a."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"...\u043c\u0430\u0441\u0438\u0432\u0438"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0441\u0438\u0432\u0443."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("p",null,"\u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u0426\u0435 \u0454 \u0442\u0435\u0441\u0442"),", \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043e\u0431'\u0454\u0434\u043d\u0443\u0454 \u043c\u0430\u0441\u0438\u0432\u0438 1 \u0456 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'arrayConcat',\n    code: `\n  $arrayConcat[ ;test1;test2]\n  $createArray[array1;\u0426\u0435 \u0454]\n  $createArray[array2;\u0442\u0435\u0441\u0442]\n  `\n});\n")))}N.isMDXComponent=!0}}]);