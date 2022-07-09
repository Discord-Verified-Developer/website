"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[97052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."},o=void 0,c={unversionedId:"other/character-escaping",id:"other/character-escaping",title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function.",source:"@site/docs/other/character-escaping.md",sourceDirName:"other",slug:"/other/character-escaping",permalink:"/docs/other/character-escaping",draft:!1,tags:[],version:"current",frontMatter:{title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."}},p={},l=[{value:"Escaping characters:",id:"escaping-characters",level:2},{value:"more:",id:"more",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"escaping-characters"},"Escaping characters:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#RIGHT#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"]")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#LEFT#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},";")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#SEMI#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#COLON#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#CHAR#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},">")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#RIGHT_CLICK#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#LEFT_CLICK#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"=")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#EQUAL#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"}")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#LEFT_BRACKET#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#RIGHT_BRACKET#")),(0,a.kt)("h2",{id:"more"},"more:"),(0,a.kt)("p",null,"Backspace => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\b"),"\\\nForm Feed => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\f"),"\\\nNew Line =>\\\nCarriage Return =>\\\nHorizontal Tabulator =>\\\nVertical Tabulator => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\v"),"\\\nSingle quote => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\'"),"\\\nDouble quote => ",(0,a.kt)("inlineCode",{parentName:"p"},'\\"'),"\\\nBackslash => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"These character escapes are useful for using special characters inside functions, e.g. in the text field of ",(0,a.kt)("a",{parentName:"p",href:"../functions/sendmessage"},"$sendMessage"),".")))}u.isMDXComponent=!0}}]);