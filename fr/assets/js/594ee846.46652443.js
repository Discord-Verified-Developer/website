"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$onlyForGuilds",description:"$onlyForGuilds will check if the command was executed in one of the listed guilds and return a error message if not.",id:"onlyForGuilds"},y=void 0,g={unversionedId:"functions/util-related/onlyForGuilds",id:"version-6.4.0/functions/util-related/onlyForGuilds",title:"$onlyForGuilds",description:"$onlyForGuilds will check if the command was executed in one of the listed guilds and return a error message if not.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/onlyForGuilds.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyForGuilds",permalink:"/fr/docs/functions/util-related/onlyForGuilds",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$onlyForGuilds",description:"$onlyForGuilds will check if the command was executed in one of the listed guilds and return a error message if not.",id:"onlyForGuilds"},sidebar:"docs",previous:{title:"$onlyForChannels",permalink:"/fr/docs/functions/util-related/onlyForChannels"},next:{title:"$onlyForIDs",permalink:"/fr/docs/functions/util-related/onlyForIDs"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:b},v="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,p(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$onlyForGuilds")," will check if the command was executed in one of the listed guilds and return a error message if not."),(0,n.kt)("h2",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$onlyForGuilds[...guildIds;error]\n")),(0,n.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"...guildIds"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string, integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Guilds you want to limit the command to."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"error"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Error to return when the command was not executed in any of the listed guilds."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will limit the command only to the listed guilds:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyForGuilds",\n    code: `\n    Ok.\n    $onlyForGuilds[guildID;guildID;You can\'t use that command here!]\n    `\n});\n')))}O.isMDXComponent=!0}}]);