"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$autoCompleteRespond",description:"$autoCompleteRespond \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0441\u043b\u044d\u0448\u0430.",id:"autoCompleteRespond"},g=void 0,y={unversionedId:"functions/interaction-related/autoCompleteRespond",id:"version-6.4.0/functions/interaction-related/autoCompleteRespond",title:"$autoCompleteRespond",description:"$autoCompleteRespond \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0441\u043b\u044d\u0448\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/autoCompleteRespond.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/autoCompleteRespond",permalink:"/ru/docs/functions/interaction-related/autoCompleteRespond",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$autoCompleteRespond",description:"$autoCompleteRespond \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0441\u043b\u044d\u0448\u0430.",id:"autoCompleteRespond"},sidebar:"docs",previous:{title:"$author",permalink:"/ru/docs/functions/interaction-related/author"},next:{title:"$clear",permalink:"/ru/docs/functions/interaction-related/clear"}},b={},k=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043f\u0440\u0438\u043c\u0435\u0440",level:3}],v={toc:k},h="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$autoCompleteRespond")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043a\u043e\u0441\u043e\u0439 \u0447\u0435\u0440\u0442\u044b."),(0,r.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$autoCompleteRespond[object]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$autoCompleteRespond[OptionName;OptionReply;...]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0446\u0438\u0438"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0418\u043c\u044f \u043e\u043f\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u041e\u0442\u0432\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d, \u0435\u0441\u043b\u0438 \u0432\u044b\u0431\u0440\u0430\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f (\u043d\u0435 \u0432\u0438\u0434\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e)."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043b\u044d\u0448-\u043a\u043e\u043c\u0430\u043d\u0434\u044b: (\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u044b \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},': ["onMessage", "onInteractionCreate"]')," \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0432 \u0432\u0430\u0448\u0435\u043c \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435)"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global; xample;\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0430\u0432\u0442\u043e\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435\u043c! true;slash; {\n  "name": "option",\n  "description": "test",\n  "required": false,\n  "type": 3,\n  "autocomplete": true\n}]\n  `\n});\n')),(0,r.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "test",\n    prototype: "slash",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[First option;You selected the first option, therefore I\'m responding with this!;Second option;You selected the first second, therefore I\'m responding with this!]\n  $else\n  $interactionReply[$slashOption[option];;;everyone]\n  $endif\n  `\n});\n')),(0,r.kt)("h3",u({},{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043f\u0440\u0438\u043c\u0435\u0440"}),"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440"),(0,r.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043b\u044d\u0448-\u043a\u043e\u043c\u0430\u043d\u0434\u044b: (\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u044b \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},': ["onMessage", "onInteractionCreate"]')," \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0432 \u0432\u0430\u0448\u0435\u043c \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435)"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global; xample;\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0430\u0432\u0442\u043e\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435\u043c! true;slash; {\n  "name": "option",\n  "description": "test",\n  "required": false,\n  "type": 3,\n  "autocomplete": true\n}, {\n  "name": "anotheroption",\n  "description": "test",\n  "required": false,\n  "type": 3\n}]\n  `\n});\n')),(0,r.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "test",\n    prototype: "slash",\n    $if: "old",\n    \u043a\u043e\u0434: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "First Option",\n    "value" : "\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u044f \u043e\u0442\u0432\u0435\u0447\u0430\u044e!"\n  }, {\n    "name" : "Second Option",\n    "value" : "\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u044f \u043e\u0442\u0432\u0435\u0447\u0443 \u0441 \u044d\u0442\u0438\u043c!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 #SEMI# $slashOption[anotheroption] - \u043b\u043e\u0436\u043d\u043e\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435;;;;everyone]\n  $endif\n  `\n});\n')))}O.isMDXComponent=!0}}]);