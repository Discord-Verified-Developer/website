"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$toLowerCase",description:"$toLowerCase \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0437\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0437 \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u0433\u043e \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443 \u043d\u0430 \u043d\u0438\u0436\u043d\u0456\u0439 \u0440\u0435\u0433\u0456\u0441\u0442\u0440.",id:"toLowerCase"},y=void 0,b={unversionedId:"functions/util-related/toLowerCase",id:"version-6.4.0/functions/util-related/toLowerCase",title:"$toLowerCase",description:"$toLowerCase \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0437\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0437 \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u0433\u043e \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443 \u043d\u0430 \u043d\u0438\u0436\u043d\u0456\u0439 \u0440\u0435\u0433\u0456\u0441\u0442\u0440.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/toLowerCase.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/toLowerCase",permalink:"/uk/docs/functions/util-related/toLowerCase",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$toLowerCase",description:"$toLowerCase \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0437\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0437 \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u0433\u043e \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443 \u043d\u0430 \u043d\u0438\u0436\u043d\u0456\u0439 \u0440\u0435\u0433\u0456\u0441\u0442\u0440.",id:"toLowerCase"},sidebar:"docs",previous:{title:"$toLocaleUpperCase",permalink:"/uk/docs/functions/util-related/toLocaleUpperCase"},next:{title:"$toUpperCase",permalink:"/uk/docs/functions/util-related/toUpperCase"}},v={},g=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],k={toc:g},O="wrapper";function w(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,d(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$toLowerCase")," \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0437 \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u0433\u043e \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443 \u043d\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439."),(0,n.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$toLowerCase[text]\n")),(0,n.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0442\u0435\u043a\u0441\u0442"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0422\u0435\u043a\u0441\u0442, \u044f\u043a\u0438\u0439 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u043d\u0430 \u043d\u0438\u0436\u043d\u0456\u0439."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,n.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"\u0426\u0435 \u0431\u0443\u0434\u0435 \u0432\u0441\u0435, \u0449\u043e \u0437\u0430\u0434\u0430\u043d\u043e \u0432 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u043c\u0443 \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0456, \u0443 \u0446\u044c\u043e\u043c\u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443 \u0446\u0435 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u043e ",(0,n.kt)("inlineCode",{parentName:"p"},"aoi.js \u0454 \u0432\u0435\u043b\u0438\u043a\u0438\u043c."),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    \u0456\u043c\'\u044f: "toLowerCase",\n    \u043a\u043e\u0434: `\n    $toLowerCase[AOI.JS IS GREAT.]\n    `\n});\n')))}w.isMDXComponent=!0}}]);