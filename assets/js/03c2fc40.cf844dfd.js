"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8266],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(t),v=i,d=p["".concat(s,".").concat(v)]||p[v]||u[v]||o;return t?n.createElement(d,a(a({ref:r},f),{},{components:t})):n.createElement(d,a({ref:r},f))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},76470:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const o={title:"$serverVerificationLevel",description:"Sends the verification level of the current server"},a=void 0,c={unversionedId:"functions/serververificationlevel",id:"version-5.5.5/functions/serververificationlevel",title:"$serverVerificationLevel",description:"Sends the verification level of the current server",source:"@site/versioned_docs/version-5.5.5/functions/serververificationlevel.md",sourceDirName:"functions",slug:"/functions/serververificationlevel",permalink:"/docs/5.5.5/functions/serververificationlevel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688325984,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$serverVerificationLevel",description:"Sends the verification level of the current server"},sidebar:"docs",previous:{title:"$serverSplash",permalink:"/docs/5.5.5/functions/serversplash"},next:{title:"$setBotAvatar",permalink:"/docs/5.5.5/functions/setbotavatar"}},s={},l=[],f={toc:l},p="wrapper";function u(e){let{components:r,...o}=e;return(0,i.kt)(p,(0,n.Z)({},f,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function returns the current guild's server verification level"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverVerificationLvl",\ncode: `Server Verification Level: $serverVerificationLevel`\n})\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(78430).Z,width:"703",height:"519"})))}u.isMDXComponent=!0},78430:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/image (32)-e5374ab937bcb234dd1417bf90df1889.png"}}]);