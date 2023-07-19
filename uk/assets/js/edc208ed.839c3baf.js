"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>O,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$clientOwnerIDs",description:"$clientOwnerIDs \u043f\u043e\u0432\u0435\u0440\u043d\u0435 ID \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0430 \u0431\u043e\u0442\u0430 (\u0430\u0431\u043e \u0432\u0456\u0434 \u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0456\u0432, \u044f\u043a\u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 \u043a\u043e\u043c\u0430\u043d\u0434\u0430).",id:"clientOwnerIDs"},O=void 0,y={unversionedId:"functions/client-related/clientOwnerIDs",id:"version-6.4.0/functions/client-related/clientOwnerIDs",title:"$clientOwnerIDs",description:"$clientOwnerIDs \u043f\u043e\u0432\u0435\u0440\u043d\u0435 ID \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0430 \u0431\u043e\u0442\u0430 (\u0430\u0431\u043e \u0432\u0456\u0434 \u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0456\u0432, \u044f\u043a\u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 \u043a\u043e\u043c\u0430\u043d\u0434\u0430).",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientOwnerIDs.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientOwnerIDs",permalink:"/uk/docs/functions/client-related/clientOwnerIDs",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$clientOwnerIDs",description:"$clientOwnerIDs \u043f\u043e\u0432\u0435\u0440\u043d\u0435 ID \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0430 \u0431\u043e\u0442\u0430 (\u0430\u0431\u043e \u0432\u0456\u0434 \u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0456\u0432, \u044f\u043a\u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 \u043a\u043e\u043c\u0430\u043d\u0434\u0430).",id:"clientOwnerIDs"},sidebar:"docs",previous:{title:"$clientMutualGuilds",permalink:"/uk/docs/functions/client-related/clientMutualGuilds"},next:{title:"$clientPrefixes",permalink:"/uk/docs/functions/client-related/clientPrefixes"}},b={},v=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],g={toc:v},k="wrapper";function w(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(u(u({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientOwnerIDs")," \u043f\u043e\u0432\u0435\u0440\u043d\u0435 ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0430 \u0431\u043e\u0442\u0430 (\u0430\u0431\u043e \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u043e\u0441\u0456\u0431, \u044f\u043a\u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 \u043a\u043e\u043c\u0430\u043d\u0434\u0430)."),(0,r.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$clientOwnerIDs[separator?]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u043e\u0437\u0434\u0456\u043b\u044e\u0432\u0430\u0447?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0420\u043e\u0437\u0434\u0456\u043b\u044c\u043d\u0438\u043a \u0434\u043b\u044f \u0440\u043e\u0437\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0456\u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432. (\u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c: ",(0,r.kt)("inlineCode",{parentName:"td"},","),")"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"\u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0432\u0430\u0448 ID \u043d\u0430\u0439\u0432\u0456\u0440\u043e\u0433\u0456\u0434\u043d\u0456\u0448\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientOwnerIDs',\n    \u043a\u043e\u0434: `\n  $clientOwnerIDs\n  `\n});\n")))}w.isMDXComponent=!0}}]);