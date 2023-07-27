"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75796],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),d=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(t),f=a,g=s["".concat(u,".").concat(f)]||s[f]||p[f]||i;return t?n.createElement(g,l(l({ref:r},c),{},{components:t})):n.createElement(g,l({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},53554:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>h,default:()=>D,frontMatter:()=>g,metadata:()=>m,toc:()=>v});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))d.call(r,t)&&c(e,t,r[t]);return e},p=(e,r)=>i(e,l(r)),f=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};const g={title:"$guildShardID",description:"$guildShardID will return the current shard ID.",id:"guildShardID"},h=void 0,m={unversionedId:"functions/guild-related/guildShardID",id:"version-6.4.0/functions/guild-related/guildShardID",title:"$guildShardID",description:"$guildShardID will return the current shard ID.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildShardID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShardID",permalink:"/ru/docs/functions/guild-related/guildShardID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$guildShardID",description:"$guildShardID will return the current shard ID.",id:"guildShardID"},sidebar:"docs",previous:{title:"$guildShard",permalink:"/ru/docs/functions/guild-related/guildShard"},next:{title:"$guildShardPing",permalink:"/ru/docs/functions/guild-related/guildShardPing"}},y={},v=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:v},O="wrapper";function D(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(O,p(s(s({},b),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShardID")," will return the current shard ID."),(0,n.kt)("h2",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildShardID\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note that this won't work without sharding. If you're unsure, review the ",(0,n.kt)("a",s({parentName:"strong"},{href:"/ru/docs/guides/client/sharding"}),"sharding guide"),".")),(0,n.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the current shard ID:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildShardID',\n    code: `\n  I'm currently on shard $guildShardID!\n  `\n});\n")))}D.isMDXComponent=!0}}]);