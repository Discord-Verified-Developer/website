"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>v,toc:()=>O});var r=n(3905),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$clientID",description:"$clientID retournera l'ID d'utilisateur Discord du client.",id:"clientID"},y=void 0,v={unversionedId:"functions/client-related/clientID",id:"version-6.4.0/functions/client-related/clientID",title:"$clientID",description:"$clientID retournera l'ID d'utilisateur Discord du client.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientID.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientID",permalink:"/fr/docs/functions/client-related/clientID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689788241,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$clientID",description:"$clientID retournera l'ID d'utilisateur Discord du client.",id:"clientID"},sidebar:"docs",previous:{title:"$broadcastEval",permalink:"/fr/docs/functions/client-related/broadcastEval"},next:{title:"$clientLeave",permalink:"/fr/docs/functions/client-related/clientLeave"}},b={},O=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],D={toc:O},g="wrapper";function j(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(g,d(p(p({},D),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientID")," retournera l'ID d'utilisateur Discord du client."),(0,r.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$clientID\n")),(0,r.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci retournera l'identifiant du client :"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientID',\n    code: `\n  $clientID\n  `\n});\n")))}j.isMDXComponent=!0}}]);