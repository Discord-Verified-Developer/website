"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=s,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:s,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const o={title:"$messageSlice",description:"Slices Message to return a cutted message from X to Y or just X"},a=void 0,c={unversionedId:"functions/messageslice",id:"version-5.5.5/functions/messageslice",title:"$messageSlice",description:"Slices Message to return a cutted message from X to Y or just X",source:"@site/versioned_docs/version-5.5.5/functions/messageslice.md",sourceDirName:"functions",slug:"/functions/messageslice",permalink:"/docs/5.5.5/functions/messageslice",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011500,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$messageSlice",description:"Slices Message to return a cutted message from X to Y or just X"},sidebar:"docs",previous:{title:"$messagePublish",permalink:"/docs/5.5.5/functions/messagepublish"},next:{title:"$messageType",permalink:"/docs/5.5.5/functions/messagetype"}},i={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function slices the message to return sliced message from X, or X & Y"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"$messageSlice[x;y (optional)]\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"slicedMessage",\ncode:`$messageSlice[1;3]`\n})\n')))}m.isMDXComponent=!0}}]);