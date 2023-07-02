"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},o=void 0,s={unversionedId:"introduction/introduction",id:"version-6.3.0/introduction/introduction",title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",source:"@site/versioned_docs/version-6.3.0/introduction/introduction.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Leref",lastUpdatedAt:1688325984,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},sidebar:"docs",next:{title:"Setup",permalink:"/docs/guides/setup"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Links",id:"links",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),d=u("TabItem"),m={toc:p},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",alt:"aoijs"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Built-in support of ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/@akarui/aoi.db"},"database"))," by default and ready for multipurpose."),(0,r.kt)("li",{parentName:"ul"},"Built-in ",(0,r.kt)("strong",{parentName:"li"},"630+")," functions, simple and easy to learn."),(0,r.kt)("li",{parentName:"ul"},"Simple to learn, all in string-based and compact."),(0,r.kt)("li",{parentName:"ul"},"Support of extensions available to be used by the community.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(c,{groupId:"pref-install",mdxType:"Tabs"},(0,r.kt)(d,{value:"i-npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install aoi.js\n"))),(0,r.kt)(d,{value:"i-yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add aoi.js\n")))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const {AoiClient} = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["MessageContent", "Guilds", "GuildMessages"],\n    events: ["onMessage"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\n// Ping Command\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`\n});\n')),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/aoi.js"},"Aoi.js"))," is not affiliated or associated with Discord or any other services."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aoi.js.org"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/aoi.js"},"NPM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AkaruiDevelopment/aoi.js"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aoi.js.org/invite"},"Discord Support Server"))))}b.isMDXComponent=!0}}]);