"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$interactionDelete",description:"Deletes an interaction message."},i=void 0,l={unversionedId:"functions/interactiondelete",id:"version-5.5.5/functions/interactiondelete",title:"$interactionDelete",description:"Deletes an interaction message.",source:"@site/versioned_docs/version-5.5.5/functions/interactiondelete.md",sourceDirName:"functions",slug:"/functions/interactiondelete",permalink:"/docs/5.5.5/functions/interactiondelete",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689005323,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$interactionDelete",description:"Deletes an interaction message."},sidebar:"docs",previous:{title:"$interactionDeferUpdate",permalink:"/docs/5.5.5/functions/interactiondeferupdate"},next:{title:"$interactionEdit",permalink:"/docs/5.5.5/functions/interactionedit"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Footnote",id:"footnote",level:3},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$interactionDelete"),", as it is name; it deletes the interaction message."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$interactionDelete\n")),(0,o.kt)("h3",{id:"footnote"},"Footnote"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This function doesn't work on ephemeral message.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.interactionCommand({\n  name: \"hello\",\n  prototype: 'slash',\n  code: `\n  $interactionDelete\n  $wait[5s]\n  $interactionReply[Hello, world!]\n  `\n});\n")),(0,o.kt)("p",null,"And it deletes the interaction message 5 seconds later."))}d.isMDXComponent=!0}}]);