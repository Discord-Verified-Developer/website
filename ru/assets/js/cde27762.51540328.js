"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,g=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),s=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$createRole",description:"$createRole \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"createRole"},k=void 0,f={unversionedId:"functions/guild-related/createRole",id:"version-6.4.0/functions/guild-related/createRole",title:"$createRole",description:"$createRole \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createRole.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createRole",permalink:"/ru/docs/functions/guild-related/createRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$createRole",description:"$createRole \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"createRole"},sidebar:"docs",previous:{title:"$createChannelInvite",permalink:"/ru/docs/functions/guild-related/createChannelInvite"},next:{title:"$createScheduledEvent",permalink:"/ru/docs/functions/guild-related/createScheduledEvent"}},N={},b=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],y={toc:b},v="wrapper";function O(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(v,m(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$createRole")," \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0433\u0438\u043b\u044c\u0434\u0438\u0438."),(0,r.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$createRole[guildID;returnID;name;color;icon;hoist;unicodeEmoji;position;mentionable;...permissions]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0440\u043e\u043b\u044c."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c ID \u0432\u043d\u043e\u0432\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0440\u043e\u043b\u0438?"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0440\u043e\u043b\u0438."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0432\u0435\u0442"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0426\u0432\u0435\u0442 \u043d\u043e\u0432\u043e\u0439 \u0440\u043e\u043b\u0438."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0438\u043a\u043e\u043d\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"URL \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043d\u0430\u0447\u043a\u0430."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u0438\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0415\u0441\u043b\u0438 \u043d\u043e\u0432\u0430\u044f \u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u043d\u043d\u043e\u0439."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u042d\u043c\u043e\u0434\u0437\u0438 unicodeji"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"UnicodeEmoji \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043d\u0430\u0447\u043a\u0430."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u043f\u043e\u0437\u0438\u0446\u0438\u044f"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u0440\u043e\u043b\u0438, 1 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u043c \u043d\u0438\u0437\u043a\u0438\u043c."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0443\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u043c\u044b\u0439"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0415\u0441\u043b\u0438 \u0440\u043e\u043b\u044c \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone"),"."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"...\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0440\u043e\u043b\u044c."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,'\u042d\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c "\u041f\u0442\u0438\u0446\u0430" \u0432 \u0446\u0432\u0435\u0442\u0435 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430:'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'createRole',\n    code: `\n    $createRole[$guildID;false;Bird;FF0000;;false;\u2764;1;false;sendmessages]`\n});\n")))}O.isMDXComponent=!0}}]);