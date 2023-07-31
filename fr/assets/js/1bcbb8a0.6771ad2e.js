"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84129],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>l(e,o(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$channelUsed",description:"$channelUsed retournera l'ID du salon o\xf9 l'\xe9v\xe9nement a \xe9t\xe9 d\xe9clench\xe9.",id:"channelUsed"},v=void 0,y={unversionedId:"functions/event-related/channelUsed",id:"version-6.4.0/functions/event-related/channelUsed",title:"$channelUsed",description:"$channelUsed retournera l'ID du salon o\xf9 l'\xe9v\xe9nement a \xe9t\xe9 d\xe9clench\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/channelUsed.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/channelUsed",permalink:"/fr/docs/functions/event-related/channelUsed",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690772603,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$channelUsed",description:"$channelUsed retournera l'ID du salon o\xf9 l'\xe9v\xe9nement a \xe9t\xe9 d\xe9clench\xe9.",id:"channelUsed"},sidebar:"docs",previous:{title:"$bulk",permalink:"/fr/docs/functions/event-related/bulk"},next:{title:"$handleError",permalink:"/fr/docs/functions/event-related/handleError"}},b={},h=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:h},g="wrapper";function k(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(g,d(u(u({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelUsed")," retournera l'ID du salon o\xf9 l'\xe9v\xe9nement a \xe9t\xe9 d\xe9clench\xe9."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$channelUsed\n")),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela va retourner le salon dans lequel un message a \xe9t\xe9 supprim\xe9:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vous avez besoin de ",(0,r.kt)("inlineCode",{parentName:"strong"},"onMessageDelete")," dans votre fichier principal pour utiliser cet exemple!")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.deletedCommand({\n    channel: "channelID",\n    code: `$userTag a supprim\xe9 un message dans <#$channelUsed>!`\n});\n')))}k.isMDXComponent=!0}}]);