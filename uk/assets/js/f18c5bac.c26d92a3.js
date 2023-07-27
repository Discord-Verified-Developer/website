"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60257],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),o=u(n),N=r,g=o["".concat(d,".").concat(N)]||o[N]||k[N]||l;return n?a.createElement(g,p(p({ref:e},m),{},{components:n})):a.createElement(g,p({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=N;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[o]="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},57697:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>c,default:()=>v,frontMatter:()=>g,metadata:()=>s,toc:()=>f});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,o=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&m(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&m(t,n,e[n]);return t},k=(t,e)=>l(t,p(e)),N=(t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n};const g={title:"$newChannel",description:"$newChannel \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0434\u0430\u043d\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0443, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u043a\u0430\u043d\u0430\u043b\u0456\u0432, \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 \u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0456 \u043f\u043e\u0434\u0456\u0439, \u0430\u0431\u043e \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u0434\u0430\u043d\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u043c\u0438.",id:"newChannel"},c=void 0,s={unversionedId:"functions/event-related/newChannel",id:"version-6.4.0/functions/event-related/newChannel",title:"$newChannel",description:"$newChannel \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0434\u0430\u043d\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0443, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u043a\u0430\u043d\u0430\u043b\u0456\u0432, \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 \u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0456 \u043f\u043e\u0434\u0456\u0439, \u0430\u0431\u043e \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u0434\u0430\u043d\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u043c\u0438.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newChannel.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newChannel",permalink:"/uk/docs/functions/event-related/newChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$newChannel",description:"$newChannel \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0434\u0430\u043d\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0443, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u043a\u0430\u043d\u0430\u043b\u0456\u0432, \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 \u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0456 \u043f\u043e\u0434\u0456\u0439, \u0430\u0431\u043e \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u0434\u0430\u043d\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u043c\u0438.",id:"newChannel"},sidebar:"docs",previous:{title:"$newApplicationCmd",permalink:"/uk/docs/functions/event-related/newApplicationCmd"},next:{title:"$newGuild",permalink:"/uk/docs/functions/event-related/newGuild"}},b={},f=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041e\u043f\u0446\u0456\u0457",id:"\u043e\u043f\u0446\u0456\u0457",level:3},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],y={toc:f},h="wrapper";function v(t){var e=t,{components:n}=e,r=N(e,["components"]);return(0,a.kt)(h,k(o(o({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$newChannel")," \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0434\u0430\u043d\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0443, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u043a\u0430\u043d\u0430\u043b\u0456\u0432, \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 \u0456 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0456 \u043f\u043e\u0434\u0456\u0439 \u0430\u0431\u043e \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u0434\u0430\u043d\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u043c\u0438."),(0,a.kt)("h2",o({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-php"}),"$newChannel[option]\n")),(0,a.kt)("h2",o({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043e\u043f\u0446\u0456\u044f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438."),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,a.kt)("h3",o({},{id:"\u043e\u043f\u0446\u0456\u0457"}),"\u041e\u043f\u0446\u0456\u0457"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043d\u0430\u0437\u0432\u0443 \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 ID \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"createdAt"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0414\u0430\u0442\u0430 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f, \u043a\u043e\u043b\u0438 \u0431\u0443\u0432 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0439 \u043a\u0430\u043d\u0430\u043b.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0447\u0430\u0441\u043e\u0432\u043e\u0457 \u043c\u0456\u0442\u043a\u0438"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0447\u0430\u0441\u043e\u0432\u0443 \u043f\u043e\u0437\u043d\u0430\u0447\u043a\u0443 \u043a\u043e\u043b\u0438 \u043a\u0430\u043d\u0430\u043b \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0442\u0438\u043f\u043e\u0432\u0430 \u0442\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c \u0430\u0432\u0442\u043e\u0430\u0440\u0445\u0456\u0432\u0443"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0442\u0438\u043f\u043e\u0432\u0443 \u0442\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c \u0430\u0440\u0445\u0456\u0432\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 true / false, \u044f\u043a\u0449\u043e \u043a\u0430\u043d\u0430\u043b \u0454 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u043c.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0432\u0438\u043b\u0443\u0447\u0435\u043d\u043e"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 true / false \u044f\u043a\u0449\u043e \u043a\u0430\u043d\u0430\u043b \u0431\u0443\u0432 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0433\u0456\u043b\u044c\u0434\u0456\u044f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u0433\u0456\u043b\u044c\u0434\u0456\u0457 \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043a\u0456\u043d\u0446\u0435\u0432\u0438\u0439 \u0432\u043c\u0456\u0441\u0442 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0432\u043c\u0456\u0441\u0442 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e\u0433\u043e \u0443 \u043a\u0430\u043d\u0430\u043b\u0456.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ID \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 ID \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e\u0433\u043e \u0443 \u043a\u0430\u043d\u0430\u043b\u0456.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"lastPinAt"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0414\u0430\u0442\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u0437\u0430\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u041f\u0456\u043d\u044c\u0456\u043c\u0441\u0442\u0435\u043c\u043f\u0443"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0447\u0430\u0441\u043e\u0432\u0443 \u043f\u043e\u0437\u043d\u0430\u0447\u043a\u0443 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u0437\u0430\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043c\u043e\u0436\u043d\u0430 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 true / false, \u044f\u043a\u0449\u043e \u043a\u0430\u043d\u0430\u043b \u0454 \u043a\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u043c.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"nsfw"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 true / false \u044f\u043a\u0449\u043e \u043a\u0430\u043d\u0430\u043b NSFW.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430 \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043d\u0430\u0437\u0432\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u0431\u0430\u0442\u044c\u043a\u0456\u0432"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 ID \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043f\u043e\u0437\u0438\u0446\u0456\u044f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043f\u043e\u0437\u0438\u0446\u0456\u044e \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"slowmode"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0441\u043f\u043e\u0432\u0456\u043b\u044c\u043d\u0435\u043d\u043d\u044f \u0440\u0435\u0436\u0438\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0443. (\u044f\u043a\u0449\u043e \u0454)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0442\u0435\u043c\u0430"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0442\u0435\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0456\u0432.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0442\u0438\u043f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0442\u0438\u043f \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0443"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 true / false, \u044f\u043a\u0449\u043e \u043a\u0430\u043d\u0430\u043b \u0454 \u0432\u0438\u0434\u0438\u043c\u0438\u043c.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0438\u0439"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0456 \u0434\u043e\u0437\u0432\u043e\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043f\u0440\u0438 \u0432\u0456\u0434\u043c\u043e\u0432\u0456"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0437\u0430\u0431\u043e\u0440\u043e\u043d\u0435\u043d\u0456 \u0434\u043e\u0437\u0432\u043e\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0434\u043e\u0437\u0432\u043e\u043b\u0438"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0434\u043e\u0437\u0432\u043e\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043f\u0440\u0438\u0454\u0434\u043d\u0430\u043d\u0438\u0439"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 true / false \u044f\u043a\u0449\u043e \u043a\u0430\u043d\u0430\u043b \u043f\u0440\u0438\u0454\u0434\u043d\u0430\u043d\u0438\u0439 (\u0442\u0456\u043b\u044c\u043a\u0438 \u043f\u0440\u0438 \u0439\u043e\u0433\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0456).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e (\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0433\u043e) \u043a\u0430\u043d\u0430\u043b\u0443.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u044c"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u044c, \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u0438\u0445 \u0443 \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0456.")))),(0,a.kt)("h2",o({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),'bot.channelCreateCommand({\n    \u043a\u0430\u043d\u0430\u043b: "channelid",\n    \u043a\u043e\u0434: `\n    \u043d\u043e\u0432\u0438\u0439 \u043a\u0430\u043d\u0430\u043b \u0431\u0443\u0432 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0439!\n- Name: $newChannel[name]\n- ID: $newChannel[id]\n- <#$newChannel[id]>`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0426\u0435\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u043a\u043e\u043b\u0438 ",(0,a.kt)("strong",{parentName:"li"},"\u043a\u0430\u043d\u0430\u043b \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f"),".")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),'bot.channelDeleteCommand({\n    \u043a\u0430\u043d\u0430\u043b: "channelid",\n    \u043a\u043e\u0434: `\n    \u043a\u0430\u043d\u0430\u043b \u0431\u0443\u043b\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e!\n- Name: $oldChannel[name]\n- ID: $oldChannel[id]`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0426\u0435\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u043a\u043e\u043b\u0438 ",(0,a.kt)("strong",{parentName:"li"},"\u043a\u0430\u043d\u0430\u043b \u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e"),".")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"bot.channelUpdateCommand({\n    \u043a\u0430\u043d\u0430\u043b: \"channelid\",\n    \u043a\u043e\u0434: `\n    \u043a\u0430\u043d\u0430\u043b \u0431\u0443\u043b\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e!\n- \u041d\u043e\u0432\u0435 \u0456\u043c'\u044f: $newChannel[name]\n - \u0421\u0442\u0430\u0440\u0435 \u0456\u043c'\u044f: $oldChannel[name]`\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0426\u0435\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u043a\u043e\u043b\u0438 ",(0,a.kt)("strong",{parentName:"li"},"\u043a\u0430\u043d\u0430\u043b \u043e\u043d\u043e\u0432\u043b\u044e\u0454\u0442\u044c\u0441\u044f"),".")),(0,a.kt)("hr",null))}v.isMDXComponent=!0}}]);