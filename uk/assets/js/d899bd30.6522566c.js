"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$interactionDeferUpdate",description:"$interactionDeferUpdate \u0432\u0456\u0434\u043a\u0440\u0438\u0432\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u0431\u0443\u0434\u0435 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e.",id:"interactionDeferUpdate"},v=void 0,y={unversionedId:"functions/event-related/interactionDeferUpdate",id:"version-6.4.0/functions/event-related/interactionDeferUpdate",title:"$interactionDeferUpdate",description:"$interactionDeferUpdate \u0432\u0456\u0434\u043a\u0440\u0438\u0432\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u0431\u0443\u0434\u0435 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/interactionDeferUpdate.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/interactionDeferUpdate",permalink:"/uk/docs/functions/event-related/interactionDeferUpdate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$interactionDeferUpdate",description:"$interactionDeferUpdate \u0432\u0456\u0434\u043a\u0440\u0438\u0432\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u0431\u0443\u0434\u0435 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e.",id:"interactionDeferUpdate"},sidebar:"docs",previous:{title:"$interactionDefer",permalink:"/uk/docs/functions/event-related/interactionDefer"},next:{title:"$interactionDelete",permalink:"/uk/docs/functions/event-related/interactionDelete"}},b={},g=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],O={toc:g},k="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,s(d(d({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionDeferUpdate")," \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u044f\u0454 \u0456\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u0431\u0443\u0434\u0435 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e."),(0,r.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$interactionDeferUpdate[ephemeral]\n")),(0,r.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0435\u0444\u0435\u0433\u0435\u043c\u0430\u043b\u044c"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0412\u0438\u0434\u0438\u043c\u0438\u0439 \u043b\u0438\u0448\u0435 \u0430\u0432\u0442\u043e\u0440\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u0440\u0430?"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,r.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'exampleButton',\n    type: 'interaction',\n    prototype: 'button',\n    \u043a\u043e\u0434: ` \n   $interactionFollowUp[This is the first message!]\n   $interactionEdit[This is the second message!]\n   $interactionDeferUpdate[true]`\n});\n")))}h.isMDXComponent=!0}}]);