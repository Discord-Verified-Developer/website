"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>s(e,o(t)),g=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage \u043f\u0435\u0440\u0435\u043a\u0440\u043e\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432.",id:"sendCrosspostingMessage"},f=void 0,y={unversionedId:"functions/message-related/sendCrosspostingMessage",id:"version-6.4.0/functions/message-related/sendCrosspostingMessage",title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage \u043f\u0435\u0440\u0435\u043a\u0440\u043e\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/sendCrosspostingMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/sendCrosspostingMessage",permalink:"/ru/docs/functions/message-related/sendCrosspostingMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage \u043f\u0435\u0440\u0435\u043a\u0440\u043e\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432.",id:"sendCrosspostingMessage"},sidebar:"docs",previous:{title:"$pinMessage",permalink:"/ru/docs/functions/message-related/pinMessage"},next:{title:"$sendMessage",permalink:"/ru/docs/functions/message-related/sendMessage"}},b={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:v},O="wrapper";function h(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(O,u(d(d({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$sendCrosspostingMessage")," \u043f\u0435\u0440\u0435\u043a\u0440\u043e\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u043d\u0430\u043b\u044b."),(0,r.kt)("h2",d({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$sendCrosspostingMessage[content;...channelIDs]\n")),(0,r.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u043a\u043e\u043d\u0442\u0435\u043d\u0442"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"...ID \u043a\u0430\u043d\u0430\u043b\u043e\u0432"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0413\u0434\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u043f\u0435\u0440\u0435\u043a\u0440\u043e\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u043a\u0430\u043d\u0430\u043b\u0430\u043c \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendCrosspostingMessage',\n    code: `\n   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);