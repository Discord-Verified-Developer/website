"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(r),f=i,m=c["".concat(o,".").concat(f)]||c[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$isGuildMuted",description:"$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.",id:"isGuildMuted"},g=void 0,y={unversionedId:"functions/util-related/isGuildMuted",id:"version-6.4.0/functions/util-related/isGuildMuted",title:"$isGuildMuted",description:"$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/isGuildMuted.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isGuildMuted",permalink:"/fr/docs/functions/util-related/isGuildMuted",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$isGuildMuted",description:"$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.",id:"isGuildMuted"},sidebar:"docs",previous:{title:"$isGuildDeafened",permalink:"/fr/docs/functions/util-related/isGuildDeafened"},next:{title:"$isHoisted",permalink:"/fr/docs/functions/util-related/isHoisted"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(k,p(c(c({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$isGuildMuted")," is similar but not to confuse with ",(0,n.kt)("inlineCode",{parentName:"p"},"$isMuted"),", this will check if the user is server muted."),(0,n.kt)("h2",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isGuildMuted[userID?;guildID?]\n")),(0,n.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"userID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The ID of the user you want to check if they're server muted."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"guildID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The ID of the guild where they're server muted in."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return either ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," depending on if you're server muted or not:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isGuildMuted',\n    code: `\n  $isGuildMuted[$authorID;$guildID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);