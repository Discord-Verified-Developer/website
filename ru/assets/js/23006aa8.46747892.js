"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>N,frontMatter:()=>g,metadata:()=>y,toc:()=>k});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const g={title:"$addMessageReactions",description:"$addMessageReactions \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e.",id:"addMessageReactions"},f=void 0,y={unversionedId:"functions/message-related/addMessageReactions",id:"version-6.4.0/functions/message-related/addMessageReactions",title:"$addMessageReactions",description:"$addMessageReactions \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/addMessageReactions.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/addMessageReactions",permalink:"/ru/docs/functions/message-related/addMessageReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$addMessageReactions",description:"$addMessageReactions \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e.",id:"addMessageReactions"},sidebar:"docs",previous:{title:"$truncate",permalink:"/ru/docs/functions/math-related/truncate"},next:{title:"$channelSendMessage",permalink:"/ru/docs/functions/message-related/channelSendMessage"}},b={},k=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],v={toc:k},O="wrapper";function N(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(O,u(p(p({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addMessageReactions")," \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e."),(0,a.kt)("h2",p({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addMessageReactions[channelID;messageID;...reactions]\n")),(0,a.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Nbg"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ID \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0440\u0435\u0430\u043a\u0446\u0438\u0438"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044e."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,a.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addMessageReactions',\n    code: `\n $addMessageReactions[$channelID;$messageID;\u2705;\u274c]\n  `\n});\n")))}N.isMDXComponent=!0}}]);