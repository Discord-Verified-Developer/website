"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47960],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&u(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$cloneChannel",description:"$cloneChannel will clone a channel.",id:"cloneChannel"},h=void 0,g={unversionedId:"functions/guild-related/cloneChannel",id:"version-6.4.0/functions/guild-related/cloneChannel",title:"$cloneChannel",description:"$cloneChannel will clone a channel.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/cloneChannel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/cloneChannel",permalink:"/docs/functions/guild-related/cloneChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{title:"$cloneChannel",description:"$cloneChannel will clone a channel.",id:"cloneChannel"},sidebar:"docs",previous:{title:"$channelPermissionsFor",permalink:"/docs/functions/guild-related/channelPermissionsFor"},next:{title:"$createChannel",permalink:"/docs/functions/guild-related/createChannel"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:b},v="wrapper";function O(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(v,d(s(s({},k),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$cloneChannel")," will clone a channel."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$cloneChannel[channelID;name;returnID?]\n")),(0,r.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"channelID"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The ID of the channel which is to clone."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The new name of the cloned channel."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"returnID?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"If the function should return the ID of the newly created channnel."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It won't clone any messages of that channel.")),(0,r.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,'This will clone the current channel and name it "new channel":'),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cloneChannel',\n    code: `\n  $cloneChannel[$channelID;new channel;false]\n  `\n});\n")))}O.isMDXComponent=!0}}]);